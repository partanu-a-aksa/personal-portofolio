import { Navbar } from "@/component/navbar";
import Image from "next/image";

export default function CoreSkills() {
  return (
    <div className="text-white w-full min-h-screen h-fit px-10 md:px-20 py-10 bg-gradient-to-br from-[#1d1e1e] via-[#313235] to-[#a6a6a9]">
      <Navbar />

      <div className="flex justify-center items-center py-20 text-5xl md:text-8xl font-bold">
        Core Skills
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="flex flex-col items-center p-6 gap-6 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 shadow-lg rounded-2xl transition-all">
          <Image
            src="/Images/front-end.png"
            alt="Front End"
            width={400}
            height={300}
            className="h-auto"
          />
          <Image
            src="/Images/front-end2.png"
            alt="Front End 2"
            width={400}
            height={300}
            className="h-auto"
          />
          <div className="w-full text-left">
            <p className="text-xl md:text-2xl font-semibold">
              Front End Development
            </p>
            <p className="text-sm md:text-base text-gray-200 mt-2">
              Creating responsive, interactive, and visually appealing web
              interfaces using Next.js, React, and Tailwind CSS.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center p-6 gap-6 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 shadow-lg rounded-2xl transition-all">
          <Image
            src="/Images/back-end1.png"
            alt="Back End"
            width={220}
            height={220}
            className="h-auto mr-20"
          />
          <Image
            src="/Images/back-end2.png"
            alt="Back End 2"
            width={220}
            height={220}
            className="h-auto ml-20"
          />
          <div className="w-full text-left">
            <p className="text-xl md:text-2xl font-semibold">
              Back End Development
            </p>
            <p className="text-sm md:text-base text-gray-200 mt-2">
              Building secure and scalable APIs with Node.js, Express, and
              PostgreSQL. Experienced in authentication, database design, and
              integration.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center p-6 gap-6 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 shadow-lg rounded-2xl transition-all">
          <Image
            src="/Images/versioncontrol.png"
            alt="Version Control"
            width={220}
            height={220}
            className="h-auto"
          />
          <div className="w-full text-left">
            <p className="text-xl md:text-2xl font-semibold">
              Version Control & Collaboration
            </p>
            <p className="text-sm md:text-base text-gray-200 mt-2">
              Proficient with Git and GitHub for team collaboration, code
              review, and managing clean development workflows.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center p-6 gap-6 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 shadow-lg rounded-2xl transition-all">
          <Image
            src="/Images/devops.png"
            alt="Cloud & Deployment"
            width={400}
            height={300}
            className="h-auto"
          />
          <div className="w-full text-left">
            <p className="text-xl md:text-2xl font-semibold">
              Cloud & Deployment
            </p>
            <p className="text-sm md:text-base text-gray-200 mt-2">
              Experienced in deploying projects with Vercel, Docker, and cloud
              services. Focused on reliability, scalability, and CI/CD
              pipelines.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-20 text-5xl md:text-8xl font-bold">
        Personal Development
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="flex flex-col justify-center items-center p-6 gap-6 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 shadow-lg rounded-2xl transition-all text-left">
          <p className="text-xl md:text-2xl font-semibold">Soft Skills</p>
          <p className="text-sm md:text-base text-gray-200 mt-2">
            Strong communication, teamwork, and adaptability. Comfortable
            leading discussions, mentoring, and collaborating across
            disciplines.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-6 gap-6 bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-400 shadow-lg rounded-2xl transition-all text-left">
          <p className="text-xl md:text-2xl font-semibold">
            Continuous Learning
          </p>
          <p className="text-sm md:text-base text-gray-200 mt-2">
            Lifelong learner with a passion for exploring new technologies,
            improving problem-solving skills, and staying up to date with the
            latest industry trends.
          </p>
        </div>
      </div>
      <p className="flex flex-row justify-center items-center gap-2 py-6 text-xl md:text-2xl font-semibold">
        See more about my experiences
      </p>
      <div className="flex flex-row justify-center items-center gap-2">
        <a href="https://github.com/partanu-a-aksa">
          <Image
            src="/Images/githubicon.png"
            alt="LinkedIn"
            width={60}
            height={60}
            className="w-[60px] h-auto"
          />
        </a>
        <a href="https://www.linkedin.com/in/partanu-ardi-aksa-2b460b66/">
          <Image
            src="/Images/linkedin.png"
            alt="GitHub"
            width={60}
            height={60}
            className="w-[60px] h-auto"
          />
        </a>
      </div>
    </div>
  );
}
