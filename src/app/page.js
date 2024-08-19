import Image from "next/image";
import { FaDiscord, FaTwitch, FaGithub, FaSpotify } from "react-icons/fa";
import ProjectTile from "./components/ProjectTile";
import CurrentTime from "./components/CurrentTime";
import SpotifyNowPlaying from "./components/SpotifyNowPlaying";




export default function Home() {
  return (
    <>
      <main>
        {/* center */}
        <div className="flex flex-col justify-center items-center h-screen gap-2 md:flex-row md:gap-52">

          {/* Profile */}
          <div id="container" className="flex flex-col rounded-xl justify-center items-center md:justify-normal md:items-start">
            <Image src="https://api.persn.dev/api/users/person/profilePicture" width={150} height={150} alt="image" className="rounded-2xl" />

            {/* socials */}
            <div className="flex flex-row mt-2 gap-4">
              <a href="https://github.com/spjoes" className="aspect-square bg-[#1D1523] border-2 border-[#362a3f] rounded-full p-2">
                <FaGithub className="fill-[#fff] hover:fill-[#4078c0] w-5 h-5 transition-colors duration-500" />
              </a>
              <a href="https://discord.com/users/202109343678726144" className="aspect-square bg-[#1D1523] border-2 border-[#362a3f] rounded-full p-2">
                <FaDiscord className="fill-[#fff] hover:fill-[#5865F2] w-5 h-5 transition-colors duration-500" />
              </a>
              <a href="https://www.twitch.tv/iamth3person" className="aspect-square bg-[#1D1523] border-2 border-[#362a3f] rounded-full p-2">
                {/* center in middle */}
                <FaTwitch className="fill-[#fff] hover:fill-[#9146ff] w-5 h-5 transition-colors duration-500" />
              </a>
            </div>


            {/* bio */}
            <h1 className="text-4xl mt-2" >I&apos;m Joey (aka. Person)</h1>
            <p className="text-lg mt-3 flex flex-row gap-1">Software Engineer from Ohio <span className="text-[#46414A] flex flex-row">(<CurrentTime />)<span className="text-text">.</span></span></p>

            {/* divider */}
            <div className="w-1/2 h-1 bg-[#362a3f] mt-3" />

            {/* Spotify Currently Playing */}
            {/* <SpotifyNowPlaying song="Blinding Lights" artist="The Weeknd" /> */}
            <SpotifyNowPlaying discordID={"202109343678726144"} />



          </div>

          {/* Projects */}
          <div id="container" className="flex flex-col justify-center text-center md:text-start">
            <h1 className="text-4xl mt-8" >Projects</h1>
            <p className="text-lg mt-3">Here are some of the projects I have worked on:</p>
            <ul>

              <ProjectTile
                role="Developer / Founder" 
                projectName="Eggium" 
                projectLogo="/images/eggium.png" 
                url="https://eggium.net"
                className="bg-[#1D1523] border-2 border-[#362a3f] p-4 rounded-full flex flex-row mt-3 cursor-pointer"
              />
              <ProjectTile
                role="Developer / Founder" 
                projectName="Ghostberry" 
                projectLogo="/images/ghost.png" 
                url="https://ghostberry.net"
                className="bg-[#1D1523] border-2 border-[#362a3f] p-4 rounded-full flex flex-row mt-3 cursor-pointer"
              />
              <ProjectTile
                role="Lead Developer / Founder" 
                projectName="Longday" 
                projectLogo="/images/longday.png" 
                url="#"
                className="bg-[#1D1523] border-2 border-[#362a3f] p-4 rounded-full flex flex-row mt-3 cursor-pointer"
              />
              <ProjectTile
                role="Co-Developer" 
                projectName="Extra-Ons" 
                projectLogo="https://media.forgecdn.net/avatars/thumbnails/139/378/256/256/636527656716901733.png" 
                url="https://www.curseforge.com/minecraft/mc-mods/extra-ons"
                className="bg-[#1D1523] border-2 border-[#362a3f] p-4 rounded-full flex flex-row mt-3 cursor-pointer"
              />

            </ul>
          </div>
        </div>
      </main>
    </>
  );
}


