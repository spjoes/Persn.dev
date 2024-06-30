"use client"

import { useState, useEffect } from 'react';
import { FaSpotify } from 'react-icons/fa';

const SpotifyNowPlaying = ({ discordID }) => {
  const [spotifyData, setSpotifyData] = useState(null);

  useEffect(() => {
    // Open WebSocket connection to Lanyard API
    const socket = new WebSocket("wss://api.lanyard.rest/socket");

    // When the socket opens, send an identify packet
    socket.addEventListener("open", () => {
      console.log("Connected to Lanyard API");
      subscribeToUsers(discordID);
    });

    function subscribeToUsers(id) {
      const data = { subscribe_to_id: id };

      if (socket.readyState === socket.OPEN) {
        socket.send(JSON.stringify({ op: 2, d: data }));
      }
    }

    socket.addEventListener("message", (data) => {
      const json = JSON.parse(data.data);

      switch (json.op) {
        case 1:
          subscribeToUsers(discordID);
          setInterval(() => {
            if (socket.readyState === socket.OPEN) {
              socket.send(JSON.stringify({ op: 3 }));
            }
          }, json.d.heartbeat_interval);
          break;
        case 0:
          switch (json.t) {
            case "INIT_STATE":
            case "PRESENCE_UPDATE":
              if (json.d.spotify) {
                setSpotifyData({
                  song: json.d.spotify.song,
                  artist: json.d.spotify.artist,
                  albumArt: json.d.spotify.album_art_url,
                  trackId: json.d.spotify.track_id,
                });
              } else {
                setSpotifyData(null);
              }
              break;
          }
          break;
      }
    });

    // Cleanup on unmount
    return () => {
      socket.close();
    };
  }, [discordID]);

  if (!spotifyData) {
    return null;
  }

  return (
    <div className="flex flex-col mt-1 relative">
      <div
        className="flex flex-row gap-2 mt-2 items-center cursor-pointer"
        onClick={() => window.open(`https://open.spotify.com/track/${spotifyData.trackId}`, "_blank")}
      >
        <FaSpotify className="fill-[#1DB954] w-6 h-6 align-middle" />
        <p className="text-lg">{spotifyData.artist} - {spotifyData.song}</p>
        <img src={spotifyData.albumArt} alt="Album Art" className="w-12 h-12 rounded-md ml-2" />
      </div>
    </div>
  );
};

export default SpotifyNowPlaying;

