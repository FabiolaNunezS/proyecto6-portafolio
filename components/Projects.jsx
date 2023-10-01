import Image from "next/image";
import Link from "next/link";
import React from "react";
import dashboard from "../public/assets/projects/dashboard.jpg";
import lista from "../public/assets/projects/lista.jpg";
import restaurante from "../public/assets/projects/restaurante.jpg";
import spa from "../public/assets/projects/spa.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#96269e]">
          Proyectos
        </p>
        <h2 className="py-4">Algunos proyectos que he podido realizar</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="dashboard"
            backgroundImg={dashboard}
            projectUrl="/dashboard"
            tech="React, Bootstrap, CSS"
          />
          <ProjectItem
            title="lista"
            backgroundImg={lista}
            projectUrl="/lista"
            tech="CSS, HTML, JavaScript"
          />
          <ProjectItem
            title="restaurante"
            backgroundImg={restaurante}
            projectUrl="/restaurante"
            tech="Nodejs, React, Firebase, Bootstrap"
          />
          <ProjectItem
            title="spa"
            backgroundImg={spa}
            projectUrl="/spa"
            tech="CSS y HTML"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
