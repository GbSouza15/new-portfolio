export function Contact() {
    return (
        <>
            <div className='
            flex
            flex-col
            items-center
            mt-[2rem]'>
                <section className='contact
                bg-textColorSecondary
                w-[85%]
                h-[10rem]
                rounded-bl-[3rem]
                 rounded-br-[3rem]
                 mt-[2rem]'>
                    <h1 className='text-[1.5rem]
                    text-center
                     mt-[1.8rem]'>Let's Discuss Your Ideas</h1>

                    <ul className='flex
                    justify-center
                    gap-[2rem]
                    mt-[1.2rem]'>
                        <li className='
                        flex
                        gap-2
                        items-center'>
                            LinkedIn
                            <i className="
                            fa-brands
                            fa-linkedin"></i>
                        </li>
                        <li className='
                        flex
                        gap-2
                        items-center'>
                            GitHub
                            <i className="
                            fa-brands
                            fa-github"></i>
                        </li>
                        <li className='
                        flex
                        gap-2
                        items-center'>
                            Email
                            <i className="
                            fa-solid
                            fa-envelope"></i>
                        </li>
                    </ul>
                </section>
            </div>
            <footer>
                <div>
                    <p className='
                    text-center
                    mt-[4rem]
                    pb-[1rem]
                    text-textColorSecondary'>© 2023 Gabriel Souza</p>
                </div>
            </footer>
        </>
    )
}