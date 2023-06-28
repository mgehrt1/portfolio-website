import { useState } from "react";

interface Props {
    link: string;
    text: string;
    id: string;
    activeNavTab: string;
}

export default function NavTab({link, text, id, activeNavTab}: Props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    let highlighted:boolean = isHovered || activeNavTab === id;

    return (
        <li className="flex items-center mt-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a className={`flex items-center text-xl mr-3 text-white ${highlighted ? "opacity-100" : "opacity-40"}`} rel="noopener" href={`#${link}`}>
                {text}<div className={`ml-3 selector-line bg-white h-px w-[4.375rem] ${highlighted ? "visible" : "hidden"}`}></div>
            </a>
        </li>
    );
}