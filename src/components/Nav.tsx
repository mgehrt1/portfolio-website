import NavTab from './NavTab.tsx';
import { useState, useEffect } from "react"

export default function Nav() {
    const [activeNavTab, setActiveNavTab] = useState("");

    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll("section[id]");
    
          let currentSectionId = "";
    
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
    
            if (rect.top <= window.innerHeight / 4 && rect.bottom >= window.innerHeight / 4) {
              currentSectionId = section.getAttribute("id") || "";
            }
          });
    
          setActiveNavTab(currentSectionId + "-nav");
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return (
        <nav className="mt-20">
            <ul className="w-max">
                <NavTab text="About" link="about" id="about-nav" activeNavTab={activeNavTab} />
                <NavTab text="Experience" link="experience" id="experience-nav" activeNavTab={activeNavTab} />
                <NavTab text="Projects" link="projects" id="projects-nav" activeNavTab={activeNavTab} />
                <NavTab text="Contact" link="contact" id="contact-nav" activeNavTab={activeNavTab} />
            </ul>
        </nav>
    );
}