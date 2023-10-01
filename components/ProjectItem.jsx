import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ tittle, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#96269e] to-[#d470ff]">
      <Image
        className="rounded-xl group-hover:opacity-20"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h3 className="text-2xl text-white tracking-wider">{tittle}</h3>
        <p className="pb-4 pt-2 text-white">React, Node Js, Bootstrap</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            Más Información
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
