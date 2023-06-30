import Image from 'next/image'
import path from '../public/13.png'
import user from '../public/user.png'
import group from '../public/11.png'
import footer from '../public/Scroller with logos.png'
import svg from '../public/Group 10.svg' 
import Todolist from './todolist'

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-teal-600 to-cyan-600 content-center">
        <div className="flex flex-col items-center py-7">
          <div className="text-white text-[60px] font-semibold">Backed by the best</div>
          <div className="text-white text-[30px] font-light">Wealthup is backed and supported by</div>
          <Image src={path} alt="img"/>
        </div>
        <div className=" bg-sky-800 flex flex-col items-center p-10">
          <div className=" text-white text-[40px] font-extrabold">Transforming Lives - Financially!</div>
          <div className="flex items-center">
            <div>
              <div className="flex">
                <Image src={user} alt='user' className='w-[123px] h-[123px]' />
                <div className='pl-5'>
                  <div className="SimrinSirur text-white text-[24px] font-medium">Simrin Sirur</div>
                  <div className="Journalist text-white text-[22px] font-normal">Journalist</div>
                  <div className="ThePrintGurugram text-white text-[22px] font-normal">The Print, Gurugram</div>
                  <div className="w-[620px] text-white text-[22px] font-normal">I was afraid to learn about investments and savings because it seemed to fly over my head, but Ankit was extremely patient and walked me through everything... I now feel more confident to handle my own money.</div>
                </div>
              </div>
            </div>
            <Image src={svg} alt="arrow" />
            <div>
              <Image src={group} alt="group" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-teal-500 to-teal-500 flex flex-col justify-center" />
          <div className='flex justify-center'>
            <Image src={footer} alt="footer" />
          </div>
      </div>
      <Todolist />
    </>
  )
}
