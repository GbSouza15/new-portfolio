import apiGit from '../../githubuser.json'
import ImgGitApi from '../../images/Captura de tela 2023-03-16 104904.png'
import ImgCards from '../../images/desktop-design.jpg'
import ImgWiki from '../../images/Captura de tela 2023-03-17 104941.png'
import imgLogo from '../../images/oH-sd0W-_400x400.jpg'

export function BodyMain() {

    function redirect() {
        window.open('https://github.com/GbSouza15?tab=repositories', '_blank')
    }

    return (
        <div className='
        text-textColor'>
            <section className='
            animated-bar
            bg-textColorSecondary
            py-[2rem]
            min-[820px]:py-[3rem]'>
                <p className='
                animate-pulse
                text-center
                text-[1.8rem]
                text-[#000000]
                font-bold
                min-[820px]:text-[2rem] min-[1024px]:text-[3rem]'>BRING YOUR IDEAS</p>
            </section>

            <section className='
            my-services
            flex
            flex-col
            mt-[2rem]
            text-textColorPrimary'>
                <p id='myServices' className='
                text-gray-400
                text-[1.5rem]
                text-center
                mt-[2.5rem]
                min-[820px]:text-[2.5rem] min-[1024px]:text-[2.5rem]
                min-[1024px]:mt-[5rem]'>MY SERVICES</p>

                <div className='
                flex
                flex-col
                mt-[2rem]
                mx-[2rem]
                gap-y-5
                gap-x-2
                text-center
                rounded-[.5rem]
                max-[820px]:text-[1.5rem]
                max-[820px]:mx-[4rem]
                min-[1024px]:flex
                min-[1024px]:flex-row
                min-[1024px]:justify-center
                min-[1024px]:mt-[4rem]
                '>

                    <div className='
                    border-[1px]
                    border-solid
                    rounded-[.5rem]
                    flex
                    items-center
                    justify-center
                    p-5
                    gap-2
                    min-[1024px]:flex-col
                    min-[1024px]:w-[18rem]
                    bg-[#171717]
                    hover:bg-textColorSecondary hover:text-[#171717] transition duration-300
                    '>
                        <i className="
                        fa-solid
                        fa-globe
                        min-[1024px]:text-[3rem]"></i>
                        <p className='p-1 min-[1024px]:text-[1.5rem]'>
                        Web Development
                        </p>
                    </div>

                    <div className='
                    border-[1px]
                    border-solid
                    rounded-[.5rem]
                    flex
                    items-center
                    justify-center
                    p-5
                    gap-2
                    min-[1024px]:flex-col
                    min-[1024px]:w-[18rem]
                    bg-[#171717]
                    hover:bg-textColorSecondary hover:text-[#171717] transition duration-300'>
                        <i className="
                        fa-solid
                        fa-mobile-screen
                        min-[1024px]:text-[3rem]"></i>
                        <p className='p-1 min-[1024px]:text-[1.5rem]'>
                        Mobile First
                        </p>
                    </div>

                    <div className='
                    border-[1px]
                    border-solid
                    rounded-[.5rem]
                    flex
                    items-center
                    justify-center
                    p-5
                    gap-2
                    min-[1024px]:flex-col
                    min-[1024px]:w-[18rem]
                    bg-[#171717]
                    hover:bg-textColorSecondary hover:text-[#171717] transition duration-300'>
                        <i className="
                        fa-brands
                        fa-medapps
                        min-[1024px]:text-[3rem]"></i>
                        <p className='p-1 min-[1024px]:text-[1.5rem]'>
                            Web Design
                        </p>
                    </div>

                    <div className='
                    border-[1px]
                    border-solid
                    rounded-[.5rem]
                    flex
                    items-center
                    justify-center
                    p-5
                    gap-2
                    min-[1024px]:flex-col
                    min-[1024px]:w-[18rem]
                    bg-[#171717]
                    hover:bg-textColorSecondary hover:text-[#171717] transition duration-300'>
                        <i className="
                        fa-solid
                        fa-gear
                        min-[1024px]:text-[3rem]"></i>
                        <p className='p-1 min-[1024px]:text-[1.5rem]'>
                            Maintenance
                        </p>
                    </div>
                </div>

            </section>

            <section className='
            my-skills
            mt-[6rem]
            text-textColorPrimary'>
                <p id='mySkills' className='
                text-[1.5rem]
                text-center
                mt-[2.5rem]
                min-[820px]:text-[2.5rem] min-[1024px]:text-[2.5rem]'>MY SKILLS</p>

                <div className='flex
                flex-col
                mt-[2rem]
                mx-[2rem]
                gap-y-5
                gap-x-2
                text-center
                rounded-[.5rem]
                max-[820px]:text-[1.5rem]
                max-[820px]:mx-[4rem]
                min-[1024px]:flex-row
                min-[1024px]:justify-center
                min-[1024px]:mt-[4rem]'>
                    <div className='flex
                    p-[1.5rem]
                    border-[1px]
                    border-solid
                    rounded-[.5rem]
                    items-center
                    justify-center
                    gap-2
                    text-[#2CA1C0]
                    min-[1024px]:flex-col
                    min-[1024px]:w-[18rem]
                    bg-[#171717]
                    hover:bg-[#2CA1C0] hover:text-[#171717] transition duration-300'>
                        <i className="fa-brands
                        fa-react
                        min-[1024px]:text-[3rem]"></i>
                        <p className='p-1 min-[1024px]:text-[1.5rem]'>REACT</p>
                    </div>

                    <div className='flex
                    p-[1.5rem]
                    border-[1px]
                    border-solid
                    rounded-[.5rem]
                    items-center
                    justify-center
                    gap-2
                    text-textColorSecondary
                    min-[1024px]:flex-col
                    min-[1024px]:w-[18rem]
                    bg-[#171717]
                    hover:bg-textColorSecondary hover:text-[#171717] transition duration-300'>
                        <i className="
                        fa-brands
                        fa-sass
                        min-[1024px]:text-[3rem]"></i>
                        <p className='p-1 min-[1024px]:text-[1.5rem]'>SASS</p>
                    </div>

                    <div className='
                    flex
                    p-[1.5rem]
                    border-[1px]
                    border-solid
                    rounded-[.5rem]
                    items-center
                    justify-center
                    gap-2
                    text-[#3B7CDF]
                    min-[1024px]:flex-col
                    min-[1024px]:w-[18rem]
                    bg-[#171717]
                    hover:bg-[#3B7CDF] hover:text-[#171717] transition duration-300'>
                        <i className="
                        fa-brands
                        fa-css3-alt
                        min-[1024px]:text-[3rem]"></i>
                        <p className='p-1 min-[1024px]:text-[1.5rem]'>CSS</p>
                    </div>

                    <div className='
                    flex
                    p-[1.5rem]
                    border-[1px]
                    border-solid
                    rounded-[.5rem]
                    items-center
                    justify-center
                    gap-2
                    text-[#FD7D21]
                    min-[1024px]:flex-col
                    min-[1024px]:w-[18rem]
                    bg-[#171717]
                    hover:bg-[#FD7D21] hover:text-[#171717] transition duration-300'>
                        <i className="
                        fa-brands
                        fa-html5
                        min-[1024px]:text-[3rem]"></i>
                        <p className='p-1 min-[1024px]:text-[1.5rem]'>HTML</p>
                    </div>
                </div>

            </section>

            <section className='
            my-projects
            mt-[6rem]
            flex
            flex-col
            items-center
            text-textColorPrimary'>
                <p id='myProjects' className='
                text-[1.5rem]
                text-center
                min-[820px]:text-[2.5rem]
                min-[1024px]:text-[2.5rem]
                '>MY PROJECTS</p>

                <ul className='
                text-text-textColorPrimary
                flex
                flex-col
                mt-[2rem]
                items-center
                gap-y-5
                min-[820px]:text-[1.5rem]
                min-[1224px]:flex-row
                min-[1024px]:items-center
                min-[1024px]:gap-2
                min-[1024px]:mt-[4rem]
                '>
                    <li className='
                    flex
                    flex-col
                    items-center
                    gap-4
                    bg-[#000000]
                    rounded-[.5rem]
                    p-[1rem]

                    w-[22rem]
                    min-[820px]:w-[26rem]
                    min-[1024px]:w-[25rem]
                    min-[1024px]:h-[18rem]
                    min-[1024px]:justify-center
                    '>
                        <div className='
                        flex
                        items-center
                        justify-between gap-4'>
                            <a href={apiGit.repositories[0].deployedUrl}>{apiGit.repositories[0].name}</a>
                            <a href={apiGit.repositories[0].deployedUrl}><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                        <img className='
                        w-[20rem]
                        min-[1024px]:h-[12rem]
                        rounded-[.5rem]
                        max-[820px]:w-[30rem]

                        ' src={ImgGitApi}></img>
                    </li>
                    <li className='
                    flex
                    flex-col
                    items-center
                    gap-4
                    bg-[#000000]
                    rounded-[.5rem]
                    p-[1rem]
                    w-[22rem]
                    min-[820px]:w-[26rem]
                     min-[1024px]:w-[25rem]
                    min-[1024px]:h-[18rem]
                    min-[1024px]:justify-center'>
                        <div className='
                        flex
                        items-center
                        justify-between
                        gap-4'>
                            <a href={apiGit.repositories[1].deployedUrl}>{apiGit.repositories[1].name}</a>
                            <a href={apiGit.repositories[1].deployedUrl}><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                        <img className='
                        w-[20rem]
                        rounded-[.5rem]
                        max-[820px]:w-[30rem]' src={ImgCards}></img>
                    </li>
                    <li className='
                    flex
                    flex-col
                    items-center
                    gap-4
                    bg-[#000000]
                    rounded-[.5rem]
                    p-[1rem]
                    w-[22rem]
                    min-[820px]:w-[26rem]
                     min-[1024px]:w-[25rem]
                    min-[1024px]:h-[18rem]
                    min-[1024px]:justify-center'>
                        <div className='
                        flex
                        items-center
                        justify-between
                        gap-4'>
                            <a href={apiGit.repositories[2].deployedUrl}>{apiGit.repositories[2].name}</a>
                            <a href={apiGit.repositories[2].deployedUrl}><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                        <img className='
                        w-[20rem]
                        rounded-[.5rem]
                        max-[820px]:w-[30rem]' src={ImgWiki}></img>
                    </li>
                </ul>
            </section>

            <section className='
            about-me
            text-textColorPrimary'>

                <div className='mt-[6rem]'>
                    <p id='about' className='
                    text-[1.5rem]
                    text-center
                    min-[820px]:text-[2.5rem]
                    min-[1024px]:text-[2.5rem]
                    '>About Me</p>
                </div>

                <div className='
                flex
                justify-center
                gap-[2rem]
                mt-[2rem]
                min-[820px]:gap-[5rem]
                min-[820px]:text-[1.3rem]
                min-[820px]:mt-[3rem]
                min-[1024px]:gap-[12rem]
                min-[1024px]:mt-[4rem]'>
                    <img src={imgLogo} className='w-[4rem] h-[4rem] rounded-[50%] min-[820px]:w-[8rem] min-[820px]:h-[8rem] min-[1024px]:w-[12rem] min-[1024px]:h-[12rem]'></img>

                    <div className='
                    text-[1rem]
                    text-justify
                    w-[10rem]
                    min-[820px]:w-[20rem]
                    min-[1024px]:text-[1.4rem]
                    min-[1024px]:w-[35rem]
                    '>
                        <p>
                            Meu nome é <strong className='text-textColorSecondary'> Gabriel Souza </strong>e tenho 19 anos. Sou programador <strong className='text-textColorSecondary'> front-end</strong>, apaixonado por tecnologia.
                        </p>

                        <p className='mt-[1rem]'>
                            Atualmente estou cursando <strong className='text-textColorSecondary'> Ciência da Computação </strong>na Faculdade Descomplica. Sobre experiências, faço parte do grupo <strong className='text-textColorSecondary'> Poinge, </strong> um programa de aprendizado e trabalho colaborativo com o proposito de aclimatizar novos desenvolvedores ao espaço de trabalhos colaborativos e aperfeiçoamento.
                        </p>

                        <p className='mt-[1rem]'>
                            Tenho como <strong className='text-textColorSecondary'> Soft Skills: </strong> Trabalho em equipe, boa comunicação, empatia e cordialidade, facilidade em se adaptar e aprender novas funções.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    )
}