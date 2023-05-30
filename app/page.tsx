import Image from 'next/image'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Cursor from '@/components/cursor/Cursor'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Cursor />
      <Nav />
      <Hero />
      <div className='mx-auto max-w-full bg-gray-900 px-4 text-white sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mx-auto gap-10 py-16 sm:flex sm:py-20'>
            <h1 className='mb-10 w-full flex-auto text-4xl sm:mb-0 sm:w-20 sm:text-7xl'>
              From inspiration to furnishing plan in the blink of an eye.
            </h1>
            <div className='m-auto flex w-1/4 flex-initial items-center justify-end space-y-7 sm:m-0'>
              <svg
                width='75'
                height='47'
                viewBox='0 0 75 47'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <line
                  x1='8.74228e-08'
                  y1='1'
                  x2='70'
                  y2='1.00001'
                  stroke='#F3F3F1'
                  strokeWidth='2'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M64.6236 39.8085L67.8516 42.8614L67.8516 0L70.1479 1.00374e-07L70.1479 42.7657L73.3764 39.7122L75 41.248L68.9801 47L63 41.3441L64.6236 39.8085Z'
                  fill='#F3F3F1'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-full bg-stone-100 px-4 text-black text-gray-900 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mx-auto block items-center justify-between py-16 sm:flex sm:gap-10 sm:py-20'>
            <div className='mb-10 w-full flex-initial space-y-4 sm:w-1/3 sm:space-y-7'>
              <h1 className='text-4xl sm:text-6xl'>
                Design your property in two clicks.
              </h1>
              <p className='text-xl'>
                Choose your room, add your image and Ludwig will find the
                furniture that matches.
              </p>
              <button
                type='button'
                className='relative inline-flex items-center gap-2 border-2 border-black bg-transparent fill-black px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-black hover:fill-white hover:text-white'
              >
                <span>Try Fülhaus Free</span>
                <svg
                  width='36'
                  height='26'
                  viewBox='0 0 36 26'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5'
                >
                  <path
                    d='M22.5645 0.00012207L21.5115 1.05829L32.5964 12.1979H0.5V13.6943H32.7027L21.5115 24.942L22.5645 26.0001L35.5 12.9996L22.5645 0.00012207Z'
                    fill='currentColor'
                  />
                </svg>
              </button>
            </div>

            <div className='flex w-full flex-initial justify-end sm:w-2/4'>
              <Image
                src='/layered_mockups.png'
                width={1000}
                height={1000}
                alt='Layered Mockups'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
