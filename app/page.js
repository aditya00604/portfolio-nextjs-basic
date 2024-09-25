'use client'; 
import Image from "next/image";
// Ensure FloatingDockDemo is correctly imported
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Dynamically load particles.js
    const scriptParticles = document.createElement('script');
    scriptParticles.src = "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    
    // Dynamically load Stats.js
    const scriptStats = document.createElement('script');
    scriptStats.src = "https://cdnjs.cloudflare.com/ajax/libs/stats.js/r17/Stats.min.js"; 

    scriptParticles.onload = () => {
      // Initialize particles.js
      particlesJS("particles-js", {
        "particles": {
          "number": { "value": 8, "density": { "enable": false, "value_area": 1683.58 } },
          "color": { "value": "#ffffff" },
          "shape": { "type": "edge", "stroke": { "width": 1, "color": "#1e1e1e" } },
          "opacity": { "value": 0.3, "random": true },
          "size": { "value": 90, "random": false },
          "line_linked": { "enable": true, "distance": 785.67, "color": "#ffffff", "opacity": 0.53, "width": 2.4 },
          "move": { "enable": true, "speed": 1, "out_mode": "bounce" }
        },
        "interactivity": { "detect_on": "canvas", "events": { "resize": true } },
        "retina_detect": true
      });

      // Initialize Stats.js after particles.js is loaded
      scriptStats.onload = () => {
        if (typeof Stats !== 'undefined') {
          var stats = new Stats();
          stats.setMode(0); 
          stats.domElement.style.position = 'absolute';
          stats.domElement.style.left = '0px';
          stats.domElement.style.top = '0px';
          document.body.appendChild(stats.domElement);

          const count_particles = document.querySelector('.js-count-particles');
          const update = () => {
            stats.begin();
            stats.end();
            if (window.pJSDom[0]?.pJS.particles?.array) {
              count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
            }
            requestAnimationFrame(update);
          };
          requestAnimationFrame(update);
        } else {
          console.error("Stats is not available.");
        }
      };
      document.body.appendChild(scriptStats); 
    };

    document.body.appendChild(scriptParticles); 
  }, []);

  return (
    <>
      <div id="particles-js" className="fixed inset-0 z-0 h-full"></div> 
      <div className="z-10 flex flex-col items-end justify-center w-full h-full mt-5">
      <a href=" https://drive.google.com/file/d/1RSuxxpJraw7Adt3GiY_CK8hlFADAj1Ly/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
        <button className="fixed top-4 right-4 bg-[#f39c12] hover:bg-[#e67e22] text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300">
          View Resume
        </button></a>
        <div className="flex flex-col text-white items-start w-[50%]">
          <div className="flex flex-row items-start pt-20">
            <span className="text-9xl font-bold text-[#61dafb]">A</span>
            <span className="relative text-6xl font-bold mt-2 pt-2 text-[#61dafb]">
              ditya Kumar Mishra
              <br />
              <p className="absolute right-0 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl font-bold text-[#f39c12]">
                Web Developer
              </p>
            </span>
          </div>
          {/* Passion for Coding with Text Styling */}
          <div className="pt-10 text-white text-lg">
            <p className="italic text-2xl">
              <span className="text-[#f39c12] font-bold">"Coding is my way of telling stories"</span>. 
              I see myself as a <span className="text-[#61dafb] font-bold">storyteller</span> for <span className="text-[#61dafb] font-bold">computers</span>.
            </p>
            <p className="mt-4">
              Each <span className="font-semibold text-[#f39c12]">line of code</span> is like a sentence in a story. Every bug is a twist, 
              and solving it drives the story forward.
            </p>
            <p className="mt-4">
              Coding lets me <span className="font-bold text-[#61dafb]">create solutions</span> and build experiences that people can enjoy, 
              bringing my ideas to life.
            </p>
          </div>
        </div>
      </div>
     </>
  );
}


{/* <div className="pt-10 text-white text-lg">
<p className="italic text-2xl">
  <span className="text-[#f39c12] font-bold">"Coding is not just a skill"</span> I have acquired;
  it's the way I <span className="text-[#61dafb] font-bold">bring stories to life.</span>
  I see myself as a <span className="underline decoration-[#61dafb]">storyteller</span>, but instead of pen and paper, 
  I write for <span className="text-[#61dafb] font-bold">computers</span>, crafting intricate tales of logic, structure, and creativity.
</p>
<p className="mt-4">
  Every <span className="font-semibold text-[#f39c12]">line of code</span> is a sentence in a story, every function a 
  <span className="text-[#61dafb] font-semibold">plot twist</span>, and every bug a challenge waiting to be resolved, 
  driving the narrative forward.
</p>
<p className="mt-4">
  Whether it's building a <span className="font-bold text-[#61dafb]">solution for a real-world problem</span> or creating 
  an interactive web experience, I am always inspired by the <span className="font-bold text-[#f39c12]">endless possibilities</span> coding offers.
  My passion for programming is not just about solving problems—it's about writing stories that only computers can read, 
  but <span className="text-[#f39c12] font-bold">everyone can experience.</span>
</p>
</div> */}