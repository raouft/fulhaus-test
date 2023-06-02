import { motion } from 'framer-motion'
import Image from 'next/image'

const revealAnim = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function ImageColumn() {
  return (
    <div className='mx-auto max-w-full bg-stone-100 px-4 text-gray-900 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto block items-center justify-between py-16 sm:flex sm:gap-10 sm:py-20'>
          <div className='mb-10 w-full flex-initial space-y-4 sm:w-1/3 sm:space-y-7'>
            <motion.h1
              className='text-4xl sm:text-6xl'
              variants={revealAnim}
              initial='hidden'
              whileInView='visible'
            >
              Design your property in two clicks.
            </motion.h1>
            <motion.p
              className='text-xl'
              variants={revealAnim}
              initial='hidden'
              whileInView='visible'
            >
              Choose your room, add your image and Ludwig will find the
              furniture that matches.
            </motion.p>
            <motion.button
              type='button'
              className='relative inline-flex items-center gap-2 border-2 border-black bg-transparent fill-black px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-black hover:fill-white hover:text-white'
              variants={revealAnim}
              initial='hidden'
              whileInView='visible'
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
            </motion.button>
          </div>

          <div className='relative flex w-full flex-initial justify-end overflow-hidden sm:w-2/4'>
            <motion.div
              className='absolute top-0 z-50 h-full w-full origin-right bg-stone-100'
              initial={{ scaleX: 1 }}
              whileInView={{
                scaleX: 0,
              }}
              transition={{
                ease: 'easeInOut',
                duration: 2,
              }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.div
              initial={{ scale: 1.3 }}
              whileInView={{ scale: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 2,
              }}
              viewport={{ once: true }}
            >
              <Image
                src='/layered_mockups.png'
                width={1000}
                height={1000}
                alt='Layered Mockups'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
