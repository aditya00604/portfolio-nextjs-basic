'use client';
import { useEffect } from "react";
import Image from "next/image";

// Define your project details
const projects = [
  {
    title: "Tomato Plant Disease Detection",
    description: "Developed a web app using MobileNetV3 and TensorFlow to detect tomato plant diseases from images, with real-time weather updates and market price alerts.",
    githubLink: "https://github.com/aditya00604/tomato-disease-detection"
  },
  {
    title: "SE-Inventory Management System",
    description: "Built an inventory management system using Next.js, Prisma, and TailwindCSS, with secure authentication and responsive design.",
    githubLink: "https://github.com/aditya00604/SE-Inventory"
  },
  {
    title: "Real-Time Code Editor",
    description: "Developed a real-time HTML, CSS, and JavaScript code editor with screen size previews, built using Next.js and SadCN UI.",
    githubLink: "https://github.com/aditya00604/Real-Time-Code-Editor"
  }
];

export default function Home() {
  useEffect(() => {
    const scriptParticles = document.createElement('script');
    scriptParticles.src = "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";

    scriptParticles.onload = () => {
      particlesJS("particles-js", {
        "particles": {
          "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": "#61dafb" },
          "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
          "opacity": { "value": 0.5, "random": true },
          "size": { "value": 4, "random": true },
          "line_linked": { "enable": true, "distance": 150, "color": "#61dafb", "opacity": 0.4, "width": 1 },
          "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "retina_detect": true
      });
    };

    document.body.appendChild(scriptParticles);
  }, []);

  return (
    <>
      <div id="particles-js" className="fixed inset-0 z-0 h-full"></div> 

      {/* Resume Button */}
      <a href=" https://drive.google.com/file/d/1RSuxxpJraw7Adt3GiY_CK8hlFADAj1Ly/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
        <button className="fixed top-4 right-4 bg-[#f39c12] hover:bg-[#e67e22] text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300">
          View Resume
        </button>
      </a>

      <div className="z-10 flex flex-col items-end justify-center w-full h-full mt-5 px-6 md:px-24">
        <div className="flex flex-col text-white items-start w-full md:w-[60%]">
          <div className="flex flex-row items-start pt-20">
            <span className="text-9xl font-bold text-[#61dafb]">A</span>
            <span className="relative text-6xl font-bold mt-2 pt-2 text-[#61dafb]">
              ditya Kumar Mishra
              <br />
              <p className="absolute animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl font-bold text-[#f39c12]">
                Web Developer
              </p>
            </span>
          </div>

          {/* Project Showcase */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#1e1e1e] border border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h2 className="text-3xl font-semibold text-[#61dafb]">{project.title}</h2>
                <p className="mt-4 text-lg text-gray-300">{project.description}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 bg-[#f39c12] hover:bg-[#e67e22] text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        .animate-typing {
          white-space: nowrap;
          overflow: hidden;
          border-right: 3px solid white;
          animation: typing 4s steps(40, end), blink 0.75s step-end infinite;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
        }

        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  );
}
