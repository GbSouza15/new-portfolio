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
            max-[820px]:py-[3rem]'>
                <p className='
                animate-pulse
                text-center
                text-[1.8rem]
                text-[#000000]
                font-bold
                max-[820px]:text-[3rem]'>BRING YOUR IDEAS</p>
            </section>

            <section className='
            my-services
            flex
            flex-col
            mt-[2rem]
            text-textColorPrimary'>
                <p className='
                text-gray-400
                text-[1.5rem]
                text-center
                mt-[2.5rem]
                max-[820px]:text-[2.5rem]'>MY SERVICES</p>

                <div className='
                flex
                flex-col
                mt-[2rem]
                mx-[2rem]
                gap-y-5
                gap-x-2
                text-center
                rounded-[.5rem]
                max-[820px]:text-[1.5rem]'>

                    <div className='
                    border-[1px]
                    border-solid
                    rounded-[.5rem]
                    flex
                    items-center
                    justify-center
                    p-5
                    gap-2'>
                        <i className="
                        fa-solid
                        fa-globe"></i>
                        <p>
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
                    gap-2'>
                        <i className="
                        fa-solid
                        fa-mobile-screen"></i>
                        <p className='p-1'>
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
                    gap-2'>
                        <i className="
                        fa-brands
                        fa-medapps"></i>
                        <p className='p-1'>
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
                    gap-2'>
                        <i className="
                        fa-solid
                        fa-gear"></i>
                        <p className='p-1'>
                            Maintenance and Support
                        </p>
                    </div>
                </div>

            </section>

            <section className='
            my-skills
            mt-[6rem]
            text-textColorPrimary'>
                <p className='
                text-[1.5rem]
                text-center
                mt-[2.5rem]
                max-[820px]:text-[2.5rem]'>MY SKILLS</p>

                <div className='flex
                flex-col
                mt-[2rem]
                mx-[2rem]
                gap-y-5
                gap-x-2
                text-center
                rounded-[.5rem]
                max-[820px]:text-[1.5rem]
                max-[820px]:mx-[4rem]'>
                    <div className='flex
                    p-[1.5rem]
                    border-[1px]
                    border-solid
                    rounded-[.5rem]
                    items-center
                    justify-center
                    gap-2
                    text-[#2CA1C0]'>
                        <i className="fa-brands
                        fa-react
                        fa-xl"></i>
                        <p>REACT</p>
                    </div>

                    <div className='flex
                    p-[1.5rem]
                    border-[1px]
                    border-solid
                    rounded-[.5rem]
                    items-center
                    justify-center
                    gap-2
                    text-textColorSecondary'>
                        <i className="
                        fa-brands
                        fa-sass
                        fa-xl"></i>
                        <p>SASS</p>
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
                     text-[#3B7CDF]'>
                        <i className="
                        fa-brands
                        fa-css3-alt
                        fa-xl"></i>
                        <p>CSS</p>
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
                    text-[#FD7D21]'>
                        <i className="
                        fa-brands
                        fa-html5
                        fa-xl"></i>
                        <p>HTML</p>
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
                <p className='
                text-[1.5rem]
                text-center
                max-[820px]:text-[2.5rem]
                '>MY PROJECTS</p>

                <ul className='
                text-text-textColorPrimary
                flex
                flex-col
                mt-[2rem]
                items-center
                gap-y-5
                max-[820px]:text-[1.5rem]
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
                    max-[820px]:w-[26rem]
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
                    max-[820px]:w-[26rem]'>
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
                    max-[820px]:w-[26rem]'>
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
                    <p className='
                    text-[1.5rem]
                    text-center
                    max-[820px]:text-[2.5rem]
                    '>About Me</p>
                </div>

                <div className='
                flex
                justify-center
                gap-[2rem]
                mt-[2rem]
                max-[820px]:gap-[5rem]
                max-[820px]:text-[1.3rem]
                max-[820px]:mt-[3rem]'>
                    <img src={imgLogo} className='w-[4rem] h-[4rem] rounded-[50%] max-[820px]:w-[8rem] max-[820px]:h-[8rem]'></img>

                    <div className='
                    text-justify
                    w-[12rem]
                    max-[820px]:w-[20rem]
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