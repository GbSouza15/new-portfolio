import { useState } from "react";

export function Nav() {
    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(!open);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div className="flex flex-row bg-[#000000] text-[#c981b6] justify-between px-6 pt-[1rem] pb-[1rem] items-center">
            <p className="text-[1.3rem] min-[820px]:text-[1.5rem] min-[1024px]:text-[1.8rem]">GABRIEL SOUZA</p>

            <section className="options-nav p-[1rem]">
                <button onClick={handleClick} className="min-[820px]:text-[1.5rem] min-[1024px]:hidden">
                    <i className="fa-solid fa-bars fa-xl"></i>
                </button>

                <div className={`${open ? "block" : "hidden"} min-[1023px]:hidden absolute top-[4rem] left-0 w-full bg-[#000000] p-4`}>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <a href="#myServices" className="cursor-pointer text-[1.5rem] font-bold" onClick={handleClose}>
                                SERVICES
                            </a>
                        </li>
                        <li>
                            <a href="#mySkills" className="cursor-pointer text-[1.5rem] font-bold" onClick={handleClose}>
                                SKILLS
                            </a>
                        </li>
                        <li>
                            <a href="#myProjects" className="cursor-pointer text-[1.5rem] font-bold" onClick={handleClose}>
                                PROJECTS
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="cursor-pointer text-[1.5rem] font-bold" onClick={handleClose}>
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="cursor-pointer text-[1.5rem] font-bold" onClick={handleClose}>
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="max-[1023px]:hidden">
                    <ul className="flex gap-[5rem]">
                        <li>
                            <a href="#myServices" className="cursor-pointer" onClick={handleClose}>
                                SERVICES
                            </a>
                        </li>
                        <li>
                            <a href="#mySkills" className="cursor-pointer" onClick={handleClose}>
                                SKILLS
                            </a>
                        </li>
                        <li>
                            <a href="#myProjects" className="cursor-pointer" onClick={handleClose}>
                                PROJECTS
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="cursor-pointer" onClick={handleClose}>
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="cursor-pointer" onClick={handleClose}>
                                CONTACT
                            </a></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}