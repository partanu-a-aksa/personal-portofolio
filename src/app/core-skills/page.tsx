import { Navbar } from "@/component/navbar";
import Image from "next/image";

export default function CoreSkills() {
  return (
    <div className="text-white w-full min-h-screen h-fit px-[40px] py-[40px] bg-gradient-to-br from-[#1d1e1e] via-[#313235] to-[#a6a6a9]">
      <Navbar />
      <div>
        <div className="flex flex-col justify-center items-center h-[350px] text-9xl">
          Core Skills
        </div>
        <div className="flex flex-row w-full gap-10">
          <div className="flex flex-col w-1/2 h-auto gap-10 text-[12px] ">
            <div className="flex flex-col p-2.5 gap-3 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 text-white font-semibold shadow-md rounded-2xl">
              <div className="flex flex-row">
                <img
                  className="w-[438px] h-auto fill"
                  src="/Images/front-end.png"
                  alt=""
                />
              </div>
              <div className="flex flex-row-reverse">
                <img
                  className="w-[438px] h-auto fill"
                  src="/Images/front-end2.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[24px]">Front End Development</p>
                <p>
                  Building engaging and user-friendly web interfaces using
                  modern frameworks and technologies with expertise.
                </p>
              </div>
            </div>
            <div className="flex flex-col p-2.5 gap-3 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 text-white font-semibold shadow-md rounded-2xl">
              <div className="flex flex-row">
                <img src="/Images/back-end.png" alt="" />
              </div>
              <div>
                <p className="text-[24px]">Back End Development</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, voluptate. Nesciunt modi quae totam saepe nam
                  commodi. Eligendi suscipit non voluptatum voluptatibus
                  laboriosam magnam reprehenderit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-auto gap-10 text-[12px]">
            <div className="flex flex-col p-2.5 gap-3 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 text-white font-semibold shadow-md rounded-2xl">
              <div className="flex flex-row">
                <img
                  className="w-[219px] h-auto fill"
                  src="/Images/versioncontrol.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[24px]">Version Control & Collaboration</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, voluptate. Nesciunt modi quae totam saepe nam
                  commodi. Eligendi suscipit non voluptatum voluptatibus
                  laboriosam magnam reprehenderit.
                </p>
              </div>
            </div>
            <div className="flex flex-col p-2.5 gap-3 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 text-white font-semibold shadow-md rounded-2xl">
              <div className="flex flex-row">
                <img
                  className="w-[438px] h-auto fill"
                  src="/Images/devops.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[24px]">Cloud & Deployment</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, voluptate. Nesciunt modi quae totam saepe nam
                  commodi. Eligendi suscipit non voluptatum voluptatibus
                  laboriosam magnam reprehenderit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-[350px] text-9xl">
          Personal Development
        </div>
        <div className="flex flex-row w-full gap-10">
          <div className="flex flex-col w-1/2 h-auto gap-10 text-[12px] ">
            <div className="flex flex-col p-2.5 gap-3 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 text-white font-semibold shadow-md rounded-2xl">
              <div>
                <p className="text-[24px]">Softskills</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, voluptate. Nesciunt modi quae totam saepe nam
                  commodi. Eligendi suscipit non voluptatum voluptatibus
                  laboriosam magnam reprehenderit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-auto gap-10 text-[12px] ">
            <div className="flex flex-col p-2.5 gap-3 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 text-white font-semibold shadow-md rounded-2xl">
              <div>
                <p className="text-[24px]">Softskills</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, voluptate. Nesciunt modi quae totam saepe nam
                  commodi. Eligendi suscipit non voluptatum voluptatibus
                  laboriosam magnam reprehenderit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
