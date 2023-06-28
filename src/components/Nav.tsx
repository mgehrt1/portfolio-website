import NavTab from './NavTab.tsx';
import { useState } from "react"

export default function Nav() {
    const [isClickedAbout, setIsClickedAbout] = useState(true);
    const [isClickedExperience, setIsClickedExperience] = useState(false);
    const [isClickedProjects, setIsClickedProjects] = useState(false);
    const [isClickedContact, setIsClickedContact] = useState(false);

    return(
        <nav className="mt-20">
            <ul>
                <NavTab text="About" link="" isClicked={isClickedAbout} setIsClicked={setIsClickedAbout} setIsClickedOther1={setIsClickedExperience} setIsClickedOther2={setIsClickedProjects} setIsClickedOther3={setIsClickedContact} />
                <NavTab text="Experience" link="experience" isClicked={isClickedExperience} setIsClicked={setIsClickedExperience} setIsClickedOther1={setIsClickedAbout} setIsClickedOther2={setIsClickedProjects} setIsClickedOther3={setIsClickedContact} />
                <NavTab text="Projects" link="projects" isClicked={isClickedProjects} setIsClicked={setIsClickedProjects} setIsClickedOther1={setIsClickedAbout} setIsClickedOther2={setIsClickedExperience} setIsClickedOther3={setIsClickedContact} />
                <NavTab text="Contact" link="contact" isClicked={isClickedContact} setIsClicked={setIsClickedContact} setIsClickedOther1={setIsClickedAbout} setIsClickedOther2={setIsClickedExperience} setIsClickedOther3={setIsClickedProjects} />
            </ul>
        </nav>
    );
}