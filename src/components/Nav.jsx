export function Nav() {
    return (
        <div className='flex flex-row bg-[#000000] text-[#c981b6] justify-between px-6 pt-[1rem] pb-[1rem] items-center'>
            <p className='text-[1.3rem] min-[820px]:text-[1.5rem] min-[1024px]:text-[1.8rem]'>GABRIEL SOUZA</p>

            <section className="options-nav p-[1rem]">
                <button className='min-[820px]:text-[1.5rem] min-[1024px]:hidden'>
                    <i className="fa-solid fa-bars fa-xl"></i>
                </button>

                <div>
                    <ul className='flex gap-[5rem] max-[1023px]:hidden'>
                        <li>SERVICES</li>
                        <li>SKILLS</li>
                        <li>PROJECTS</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}