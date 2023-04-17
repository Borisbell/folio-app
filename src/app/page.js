import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import profilePic from './assets/me.webp'
import { professionalData } from './data'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-around p-24">
      <div className='flex flex-col md:flex-row justify-center items-center mb-12'>
         <Image
            src={profilePic}
            alt="Picture of the author"
            className='max-w-sm mb-6 md:mr-8'
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
      <h2 className='mb-8'>Selected projects</h2>
      <ul className='w-full flex gap-8'>
        <li className='w-4/12 '>
          <Link href="/uchi" className='flex flex-col justify-center p-6 rounded-lg bg-slate-800'>
            <h3 className='text-center'>UCHI.ru</h3>
            <button>See details</button>
          </Link>
        </li>
        <li className='w-4/12 '>
          <Link href="/" className='flex flex-col justify-center p-6 rounded-lg bg-slate-800'>
            <h3 className='text-center'>MegaFon</h3>
            <button>See details</button>
          </Link>
        </li>
        <li className='w-4/12 '>
          <Link href="/" className='flex flex-col justify-center p-6 rounded-lg bg-slate-800'>
            <h3 className='text-center'>Lenta</h3>
            <button>See details</button>
          </Link>
        </li>
      </ul>
    </main>
  )
}
