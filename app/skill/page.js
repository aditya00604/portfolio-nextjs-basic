'use client';
import { useEffect } from "react";
import Image from "next/image";
import { 
  IconCode, IconDatabase, IconTools, IconBrandReact, IconBrandNextjs, IconBrandNodejs, 
  IconBrandJavascript, IconDeviceDesktopAnalytics, IconBrandGithub, IconBrain, IconLanguage ,IconBook
} from '@tabler/icons-react'; // Import icons from Tabler Icons

export default function Home() {
  useEffect(() => {
    // Dynamically load particles.js for background effect
    const scriptParticles = document.createElement('script');
    scriptParticles.src = "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    scriptParticles.onload = () => {
      particlesJS("particles-js", {
        "particles": {
          "number": { "value": 8, "density": { "enable": false, "value_area": 1683.58 } },
          "color": { "value": "#ffffff" },
          "shape": { "type": "edge", "stroke": { "width": 1, "color": "#1e1e1e" } },
          "opacity": { "value": 0.3, "random": true },
          "size": { "value": 90, "random": false },
          "line_linked": { "enable": true, "distance": 785.67, "color": "#ffffff", "opacity": 0.53, "width": 2.4 },
          "move": { "enable": true, "speed": 2, "out_mode": "bounce" }
        },
        "interactivity": { "detect_on": "canvas", "events": { "resize": true } },
        "retina_detect": true
      });
    };
    document.body.appendChild(scriptParticles);
  }, []);

  return (
    <>
      <div id="particles-js" className="fixed inset-0 z-0 min-h-full"></div>
      <div className="z-10 flex flex-col items-end justify-center w-full min-h-full  mt-5 mb-5 p-0 ">
        <div className="flex flex-col text-white items-start w-full md:w-[50%] mb-20">
          <div className="flex  md:flex-row items-start pt-10 md:pt-20">
            <span className="text-7xl md:text-9xl font-bold text-[#61dafb]">A</span>
            <span className="relative text-5xl md:text-6xl font-bold mt-2 pt-2 text-[#61dafb]">
              ditya Kumar Mishra
              <br />
              <p className="absolute right-0 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl lg:text-5xl font-bold text-[#f39c12]">
                Web Developer
              </p>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 text-white text-lg hologram-container mt-10 ml-5 mr-5 ">
            
            <div className="hologram-panel">
              
                <IconBook size={48} stroke={1.5} />
             
              <p className="mt-2">CS Fundamental</p>
              <span className="text-sm">Operating System,Computer Networks, DBMS, OOPS,Cloud Computing</span>
            </div>
            <div className="hologram-panel">
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                <IconCode size={48} stroke={1.5} />
              </a>
              <p className="mt-2">Languages</p>
              <span className="text-sm">C++, JavaScript, Python, SQL</span>
            </div>

            <div className="hologram-panel">
              <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                <IconBrandReact size={48} stroke={1.5} />
              </a>
              <p className="mt-2">Frameworks</p>
              <span className="text-sm">Next.js, Express.js, Django, Flask ,Bootstrap</span>
            </div>

            <div className="hologram-panel">
              <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer">
                <IconTools size={48} stroke={1.5} />
              </a>
              <p className="mt-2">Libraries</p>
              <span className="text-sm">React.js, Pandas, TensorFlow, Prisma ORM, Redux</span>
            </div>

            <div className="hologram-panel">
              <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">
                <IconDatabase size={48} stroke={1.5} />
              </a>
              <p className="mt-2">Databases</p>
              <span className="text-sm">MySQL, Firebase, MongoDB, PostgreSQL</span>
            </div>

            <div className="hologram-panel">
              <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">
                <IconBrain size={48} stroke={1.5} />
              </a>
              <p className="mt-2">Machine Learning</p>
              <span className="text-sm">TensorFlow, Numpy, Scikit-learn, Pandas, Matplotlib, YOLO</span>
            </div>

            

            <div className="hologram-panel">
              <IconDeviceDesktopAnalytics size={48} stroke={1.5} />
              <p className="mt-2">Interpersonal Skills</p>
              <span className="text-sm">Time Management, Collaboration, Communication</span>
            </div>

            <div className="hologram-panel">
              <IconLanguage size={48} stroke={1.5} />
              <p className="mt-2">Languages Spoken</p>
              <span className="text-sm">
                English (Intermediate), Nepali (Native),<br /> Hindi (Native), Maithili (Native)
              </span>
            </div>
          </div>

          {/* Horizontal Bar Chart for Proficiency */}
          <div className="w-full mt-10 mb-20 ">
            <h2 className="text-2xl text-white font-bold mb-5 ml-20 md:ml-0">Programming Languages Proficiency</h2>
            <div className="space-y-4 md:mr-20 ml-20 md:ml-0 mr-10 ">

              {/* C++ Proficiency */}
              <div className="flex items-center space-x-3">
                <span className="text-white font-semibold">C++</span>
                <div className="w-full h-5 bg-gray-200 rounded-full">
                  <div className="bg-[#61dafb] h-full rounded-full" style={{ width: '90%' }}></div>
                </div>
                <span className="text-white font-semibold">9/10</span>
              </div>
             


              {/* JavaScript Proficiency */}
              <div className="flex items-center space-x-3">
                <span className="text-white font-semibold">JavaScript</span>
                <div className="w-full h-5 bg-gray-200 rounded-full">
                  <div className="bg-[#f39c12] h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
                <span className="text-white font-semibold">8.5/10</span>
              </div>

              {/* Python Proficiency */}
              <div className="flex items-center space-x-3">
                <span className="text-white font-semibold">Python</span>
                <div className="w-full h-5 bg-gray-200 rounded-full">
                  <div className="bg-[#4CAF50] h-full rounded-full" style={{ width: '80%' }}></div>
                </div>
                <span className="text-white font-semibold">8/10</span>
              </div>

              {/* SQL Proficiency */}
              <div className="flex items-center space-x-3">
                <span className="text-white font-semibold">SQL</span>
                <div className="w-full h-5 bg-gray-200 rounded-full">
                  <div className="bg-[#9b59b6] h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
                <span className="text-white font-semibold">7.5/10</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-white font-semibold">JAVA</span>
                <div className="w-full h-5 bg-gray-200 rounded-full">
                  <div className="bg-[#61dafb] h-full rounded-full" style={{ width: '70%' }}></div>
                </div>
                <span className="text-white font-semibold">7/10</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .hologram-container {
          perspective: 1000px;
        }
        .hologram-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.2);
          transform: rotateY(20deg);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        .hologram-panel:hover {
          transform: rotateY(0deg) scale(1.1);
          box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.5);
        }
        .hologram-panel a {
          color: inherit;
        }
        .hologram-panel p, .hologram-panel span {
          opacity: 0.8;
          text-align: center;
        }

        .w-full h-5 {
          height: 5px;
        }

        /* Media Queries for Responsiveness */
        @media (max-width: 768px) {
          .text-7xl {
            font-size: 3.5rem;
          }
          .text-5xl {
            font-size: 2rem;
          }
          .hologram-panel {
            padding: 15px;
            box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
            transform: none; /* Remove tilt on small screens */
          }
        }

        @media (max-width: 640px) {
          .grid-cols-1 {
            grid-template-columns: 1fr;
          }
          .grid-cols-2 {
            grid-template-columns: 1fr;
          }
        }

        /* Hide bottom image on small screens */
        @media (max-width: 768px) {
          .hidden.md\\:block {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
