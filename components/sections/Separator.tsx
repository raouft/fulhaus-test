import { motion } from 'framer-motion'

const headingText =
  'From inspiration to furnishing plan in the blink of an eye.'

const sentence = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  }),
}

const item = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: 'backInOut',
      duration: 1,
    },
  },
}

export default function Separator() {
  return (
    <div className='z-10 mx-auto w-full max-w-full bg-gray-900 px-4 text-white sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto gap-10 py-16 sm:flex sm:py-20'>
          <motion.h1
            className='mb-10 w-full flex-auto text-4xl sm:mb-0 sm:w-20 sm:text-7xl'
            variants={sentence}
            initial='hidden'
            whileInView='visible'
            exit='exit'
          >
            {headingText.split(' ').map((word, index) => {
              return (
                <motion.span
                  key={word + '-' + index}
                  variants={item}
                  className='mr-3 inline-block'
                >
                  {word}
                </motion.span>
              )
            })}
          </motion.h1>
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
  )
}
