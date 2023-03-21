import apiGit from '../../githubuser.json'
import ImgGitApi from '../../images/Captura de tela 2023-03-16 104904.png'
import ImgCards from '../../images/desktop-design.jpg'
import ImgWiki from '../../images/Captura de tela 2023-03-17 104941.png'

export function BodyMain() {

    function redirect() {
        window.open('https://github.com/GbSouza15?tab=repositories', '_blank')
    }

    return (
        <div className='text-textColor'>
            <section className='animated-bar bg-textColorSecondary py-[2rem]'>
                <p className='animate-pulse text-center text-[1.8rem] text-[#000000] font-bold'>BRING YOUR IDEAS</p>
            </section>

            <section className='my-services flex flex-col mt-[2rem] text-textColorPrimary'>
                <p className='text-gray-400 text-[1.5rem] text-center mt-[2.5rem]'>MY SERVICES</p>
                <div className='grid grid-cols-3 mt-[2rem] mx-[2rem] gap-y-5 gap-x-2 text-center rounded-[.5rem]'>
                    <p className='col-span-2 p-1 border-textColor border-[1px] border-solid rounded-[.5rem]'>
                        Web Development
                    </p>
                    <p className='p-1 border-[1px] border-textColor border-solid rounded-[.5rem]'>
                        Mobile First
                    </p>
                    <p className=' p-1 border-textColor border-[1px] border-solid rounded-[.5rem]'>
                        Web Design
                    </p>

                    <p className='col-span-2 p-1 border-textColor border-[1px] border-solid rounded-[.5rem]'>
                        Responsive Design
                    </p>
                </div>
            </section>

            <section className='my-skills mt-[6rem] text-textColorPrimary'>
                <p className='text-[1.5rem] text-center mt-[2.5rem]'>MY SKILLS</p>

                <div className='flex flex-col mt-[1rem] mx-[2rem] gap-y-5 gap-x-2 text-center rounded-[.5rem]'>
                    <div className='flex p-[1.5rem] border-[1px] border-solid rounded-[.5rem] items-center justify-center gap-2 text-[#2CA1C0]'>
                        <i className="fa-brands fa-react fa-xl"></i>
                        <p>REACT</p>
                    </div>

                    <div className='flex p-[1.5rem] border-[1px] border-solid rounded-[.5rem] items-center justify-center gap-2 text-textColorSecondary'>
                        <i className="fa-brands fa-sass fa-xl p-1"></i>
                        <p>SASS</p>
                    </div>

                    <div className='flex p-[1.5rem] border-[1px] border-solid rounded-[.5rem] items-center justify-center gap-2 text-[#3B7CDF]'>
                        <i className="fa-brands fa-css3-alt fa-xl p-1"></i>
                        <p>CSS</p>
                    </div>

                    <div className='flex p-[1.5rem] border-[1px] border-solid rounded-[.5rem] items-center justify-center gap-2 text-[#FD7D21]'>
                        <i className="fa-brands fa-html5 fa-xl p-1"></i>
                        <p>HTML</p>
                    </div>
                </div>
            </section>

            <section className='my-projects mt-[6rem] flex flex-col items-center text-textColorPrimary'>
                <p className='text-[1.5rem] text-center'>MY PROJECTS</p>
                <ul className='text-text-textColorPrimary flex flex-col mt-[2rem] items-center gap-y-5'>
                    <li className='flex flex-col items-center gap-4 bg-[#000000] rounded-[.5rem] p-[1rem] w-[22rem]'>
                        <div className='flex items-center justify-between gap-4'>
                            <a href={apiGit.repositories[0].deployedUrl}>{apiGit.repositories[0].name}</a>
                            <a href={apiGit.repositories[0].deployedUrl}><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                        <img className='w-[20rem] rounded-[.5rem]' src={ImgGitApi}></img>
                    </li>
                    <li className='flex flex-col items-center gap-4 bg-[#000000] rounded-[.5rem] p-[1rem] w-[22rem]'>
                        <div className='flex items-center justify-between gap-4'>
                            <a href={apiGit.repositories[1].deployedUrl}>{apiGit.repositories[1].name}</a>
                            <a href={apiGit.repositories[1].deployedUrl}><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                        <img className='w-[20rem] rounded-[.5rem]' src={ImgCards}></img>
                    </li>
                    <li className='flex flex-col items-center gap-4 bg-[#000000] rounded-tl-[.5rem] rounded-tr-[.5rem] p-[1rem] w-[22rem]'>
                        <div className='flex items-center justify-between gap-4'>
                            <a href={apiGit.repositories[2].deployedUrl}>{apiGit.repositories[2].name}</a>
                            <a href={apiGit.repositories[2].deployedUrl}><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                        <img className='w-[20rem] rounded-[.5rem]' src={ImgWiki}></img>
                    </li>
                </ul>
            </section>
        </div>
    )
}