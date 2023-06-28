import { useState } from "react";

interface Props {
    link: String;
    text: String;
    isClicked: boolean;
    setIsClicked: Function;
    setIsClickedOther1: Function;
    setIsClickedOther2: Function;
    setIsClickedOther3: Function;
}

export default function NavTab({link, text, isClicked, setIsClicked, setIsClickedOther1, setIsClickedOther2, setIsClickedOther3}:Props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const handleMouseClick = () => {
        setIsClicked(true);
        setIsClickedOther1(false);
        setIsClickedOther2(false);
        setIsClickedOther3(false);
    }

    // let vertPos = 

    return(
        <li className="flex items-center mt-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleMouseClick}>
            <a className={`flex items-center text-xl mr-3 text-white ${(isHovered || isClicked) ? "opacity-100" : "opacity-40"}`} rel="noopener" href={`#${link}`}>
                {text}<div className={`ml-3 selector-line bg-white h-px w-[4.375rem] ${(isHovered || isClicked) ? "visible" : "hidden"}`}></div>
            </a>
        </li>
    );
}