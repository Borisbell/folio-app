import Image from 'next/image'
import { Inter } from 'next/font/google'
import profilePic from './assets/me.webp'
import { professionalData } from './data'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-around p-24">
      <div className='flex flex-row justify-center items-center mb-12'>
         <Image
            src={profilePic}
            alt="Picture of the author"
            className='max-w-sm mr-8'
          />
          <div>
            <h1 className='text-4xl font-bold mb-2'>Boris Belov</h1>
            <p className='text-2xl font-medium mb-8'>Product Designer</p>
            <ul className='items-stretch'>
              {professionalData.experiences.map((item) => 
                <li className='font-light mb-2 text-slate-100'>
                  <p className='inline'>{item.role} </p><a className='underline decoration-solid underline-offset-4 hover:text-purple-400' href={item.link}>{item.company_name}</a> <p className='inline'>{item.dates}</p>
                </li>
              )}
              <li className='font-light mt-6 text-slate-500'>
                <p>Before: BBDO, DigitalMind, Sanoma</p>
              </li>
            </ul>
          </div>
      </div>
      <ul className='flex flex-row'>
        <li className='font-light mb-2 mr-2 text-slate-100'>
          <a 
            className='underline decoration-solid underline-offset-4 hover:text-purple-400'
            href='https://www.notion.so/belov-boris-4d8c2080ed0641e983409ecba208ea47'>CV</a>
        </li>
        <li className='font-light mb-2 mr-2 text-slate-100'>
          <a className='underline decoration-solid underline-offset-4 hover:text-purple-400'
            href='https://www.linkedin.com/in/boris-belov-48a20448/'>LinkedIn</a>
        </li>
        <li className='font-light mb-2 mr-2 text-slate-100'>
          <a className='underline decoration-solid underline-offset-4 hover:text-purple-400'
            href='https://github.com/borisbell'>GitHub</a>
        </li>
        <li className='font-light mb-2 mr-2 text-slate-100'>
          <a  className='underline decoration-solid underline-offset-4 hover:text-purple-400' 
            href='https://www.instagram.com/borisbell/'>Instagram</a>
        </li>
      </ul>
    </main>
  )
}
