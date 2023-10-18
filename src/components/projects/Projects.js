import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { amazonProjects, shopProjects } from "../../assets";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PROTOFOLIO AND KEEP YOUR FEEDBACK"
          dos="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl-gap-14">
        <ProjectsCard title="AMAZON WEB CLONE" des=" " src={amazonProjects} />
        <ProjectsCard title="Shop Web " des=" " src={shopProjects} />
      </div>
    </section>
  );
}

export default Projects;
