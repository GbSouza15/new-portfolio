export function Nav() {
    return (
        <div className='flex flex-row bg-[#000000] text-[#c981b6] justify-between px-6 pt-[1rem] pb-[1rem] items-center'>
            <p className='text-[1.3rem] max-[820px]:text-[1.5rem]'>GABRIEL SOUZA</p>

            <section className="options-nav p-[1rem]">
                <button className='max-[820px]:text-[1.5rem]'>
                    <i className="fa-solid fa-bars fa-xl"></i>
                </button>
            </section>
        </div>
    )
}