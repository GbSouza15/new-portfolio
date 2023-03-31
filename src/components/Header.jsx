import ImgHeader from '../../images/pexels-anni-roenkae-2693212.jpg'

export function Header() {
    return (
            <div className='bg-[#000000] text-[#c981b6] min-[1024px]:pt-[5rem]'>
                <div className='text-header text-center flex flex-col items-center'>
                    <h1 className='text-[3.5rem] leading-[4rem] pt-[2rem] px-2 min-[820px]:text-[3.5rem] min-[820px]:pt-[2rem] min-[1024px]:text-[5rem]'>CREATE IDEAS</h1>
                    <p className=' mt-[2rem] w-[20rem] min-[820px]:text-[1.5rem] min-[820px]:w-[30rem]'>Design, code, and interactivity come together to create unique experiences on the web. Let me turn your ideas into reality and amaze your users.</p>
                </div>
                <div className='img flex justify-center mt-[2.5rem]'>
                    <img className='rounded-t-[3rem] w-[85%] h-[15rem] object-cover min-[820px]:h-[22rem]' src={ImgHeader}/>
                </div>
            </div>
    )
}