import React from "react";
// import Image from "next/image";
// import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Un poco Sobre...
          </p>
          <h2 className="py-4">DE QUIEN SOY</h2>
          <p className="py-2 text-gray-600">
            Soy arquitecta de profesión, pero siempre me ha gustado aprender
            cosas nuevas y ser autodidacta, he aprendido a ser una fullstack web
            developer utilizando HTML, CSS, Javascript, and React. He aprendido
            a escuchar lo que las personas necesitan para que sea plasmado tal a
            como se lo imaginan.
          </p>
          <p className="py-2 text-gray-600">
            Inicié en este apasionado mundo en el 2020 cuando empezó la
            pandemia, esto me dió la oportunidad de conocer más y desarrollarme
            en otra area en la que no estaba acostumbrada.
          </p>

          <p className="py-2 text-gray-600 underline cursor-pointer">
            Revisa alguno de mis proyectos que te presento más abajo.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            src="../assets/front.png"
            width="125"
            height="50"
            className="rounded-xl ml-4"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
