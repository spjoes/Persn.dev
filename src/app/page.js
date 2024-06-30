import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav> */}
      <main>
        {/* center */}
        <div className="flex flex-row justify-center items-center h-screen gap-52">

          {/* Profile */}
          <div id="container" className="flex flex-col rounded-xl">
            <Image src="https://api.persn.dev/api/users/person/profilePicture" width={150} height={150} alt="image" className="rounded-2xl" />

            {/* socials */}
            <div className="flex flex-row mt-2 gap-4">
              <a href="github.com" className="aspect-square bg-[#1D1523] border-2 border-[#362a3f] rounded-full p-2">
                <Image src="/images/github.svg" width={20} height={20} alt="image" />
              </a>
              <a href="discord.com" className="aspect-square bg-[#1D1523] border-2 border-[#362a3f] rounded-full p-2">
                {/* color SVG in when hovered */}
                <Image src="/images/discord.svg" width={20} height={20} alt="image" className="fill-[#000]" />
              </a>
              <a href="twitch.tv" className="aspect-square bg-[#1D1523] border-2 border-[#362a3f] rounded-full p-2">
                {/* center in middle */}
                <div className="flex flex-col">
                  <Image src="/images/twitch.svg" width={20} height={20} alt="image" />
                </div>
              </a>
            </div>


            {/* bio */}
            <h1 className="text-4xl mt-2" >I'm Joey (aka. Person)</h1>
            <p className="text-lg mt-3">Software Engineer from Ohio.</p>

            {/* socials */}
            {/* <div className="flex flex-row mt-2 gap-5">
              <a href="github.com" className="bg-[#1D1523] border-2 border-[#362a3f] p-2 rounded-full">
                <Image src="/images/github.svg" width={20} height={20} alt="image" />
              </a>
              <a href="linkedin.com" className="bg-[#1D1523] border-2 border-[#362a3f] p-2 rounded-full">
                <Image src="/images/discord.svg" width={20} height={20} alt="image" />
              </a>
            </div> */}
            
          </div>

          {/* Projects */}
          <div id="container" className="flex flex-col">
            <h1 className="text-4xl mt-8" >Projects</h1>
            <p className="text-lg mt-3">Here are some of the projects I have worked on:</p>
            <ul>

              <li className="bg-[#1D1523] border-2 border-[#362a3f] p-4 rounded-full flex flex-row mt-5">
                <Image src="/images/eggium.png" width={50} height={50} alt="image" className="aspect-square rounded-full mr-2 bg-background border-2 border-[#362a3f] p-1" />
                <div className="flex flex-col">
                  <span className="">Developer / Founder</span>
                  <span className=" font-bold">Eggium</span>
                </div>
              </li>

              <li className="bg-[#1D1523] border-2 border-[#362a3f] p-4 rounded-full flex flex-row mt-2">
                <Image src="/images/ghost.png" width={50} height={50} alt="image" className="aspect-square rounded-full mr-2 bg-background border-2 border-[#362a3f] p-1" />
                <div className="flex flex-col">
                  <span className="">Developer / Founder</span>
                  <span className=" font-bold">Ghostberry</span>
                </div>
              </li>

              <li className="bg-[#1D1523] border-2 border-[#362a3f] p-4 rounded-full flex flex-row mt-2">
                <Image src="/images/longday.png" width={50} height={50} alt="image" className="aspect-square rounded-full mr-2 bg-background border-2 border-[#362a3f] p-1" />
                <div className="flex flex-col">
                  <span className="">Lead Developer / Founder</span>
                  <span className=" font-bold">Longday</span>
                </div>
              </li>

            </ul>
          </div>

        </div>
      </main>
    </>
  );
}


