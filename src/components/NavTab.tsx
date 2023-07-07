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
        <li className={`flex items-center mt-2 lg:animate-${id}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a className={`flex items-center text-xl mr-3 text-white ${highlighted ? "transition-opacity duration-[175ms] ease-in-out opacity-100" : "transition-opacity duration-[175ms] ease-in-out opacity-40"}`} rel="noopener" href={`#${link}`}>
                {text}<div className={`ml-3 bg-white h-px ${highlighted ? "transition-width duration-[175ms] ease-in-out w-[4.375rem]" : "transition-width duration-[175ms] ease-in-out w-0"}`}></div>
            </a>
        </li>
    );
}