import Image from 'next/image'
import laptopMockup from '../../public/laptop_mockup.png'
import { ArrowUpTrayIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end 200px'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 100])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  return (
    <div
      ref={targetRef}
      className='z-0 mx-auto max-w-full overflow-hidden bg-stone-100 px-4 pt-10 text-gray-900 sm:px-6 lg:px-8'
    >
      <div className='mx-auto max-w-5xl'>
        <div className='mx-auto gap-10 py-16 sm:flex sm:py-20'>
          <h1 className='mb-5 w-full flex-auto text-5xl sm:text-7xl md:w-20'>
            One-click Property Furnishing
          </h1>
          <div className='w-full flex-initial space-y-10 sm:w-2/4'>
            <p className='pl-8 text-xl sm:pl-0'>
              At Fülhaus, we’ve simplified furnishing your short term rental
              with the world’s fastest Interior Designer, Ludwig. Ludwig is an
              AI conceived of and trained by professional interior designers.
              Skip the ecommerce headache and order everything for your property
              in one place.
            </p>
            <button
              type='button'
              className='relative hidden items-center border-2 border-black bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-transparent hover:text-black sm:inline-flex'
            >
              <span>Try Fülhaus Free</span>
            </button>
            <p className='hidden sm:block'>
              Design a room in seconds. No credit card required.
            </p>
            {/* Mobile File Upload Form */}
            <div className='block sm:hidden'>
              <div className='mb-6 max-w-xl'>
                <label className='flex h-16 w-full cursor-pointer appearance-none justify-center rounded-md border-2 border-dashed border-zinc-500 bg-transparent px-4 transition hover:border-gray-400 focus:outline-none'>
                  <span className='flex items-center space-x-2'>
                    <ArrowUpTrayIcon
                      className='h-6 w-6 fill-zinc-500'
                      aria-hidden='true'
                    />
                    <span className='font-medium text-zinc-500'>
                      Drag &amp; drop files or{' '}
                      <span className='underline'>browse files</span>
                    </span>
                  </span>
                  <input type='file' name='file_upload' className='hidden' />
                </label>
                <p className='mt-2 text-zinc-500'>
                  JPG, PNG or GIF - Max file size 2MB
                </p>
              </div>
              <div>
                <div>
                  <p className='text-zinc-500'>URL Upload</p>
                  <div className='flex max-w-xl rounded-md border-2 border-dashed border-zinc-500 p-3'>
                    <label className='flex h-12 w-full cursor-pointer appearance-none transition hover:border-gray-400 focus:outline-none'>
                      <input
                        type='text'
                        name='url'
                        id='url'
                        className='h-full w-full min-w-0 appearance-none bg-transparent px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-gray-900 placeholder-gray-400 outline-none sm:leading-6 xl:w-full'
                      />
                    </label>
                    <button
                      type='submit'
                      className='text-md relative inline-flex items-center rounded-lg bg-white px-3 py-2 font-bold leading-none text-zinc-500 shadow-md hover:bg-black hover:text-white'
                    >
                      Upload
                    </button>
                  </div>
                </div>
                <Link
                  href='#'
                  className='mx-3 mt-3 flex justify-center gap-2 text-center text-zinc-500'
                >
                  <span>Or upload from </span>
                  <svg
                    width='23'
                    height='23'
                    viewBox='0 0 23 23'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='inline-block text-zinc-500'
                  >
                    <path
                      d='M11.6832 0C5.57663 0 0.627625 4.95011 0.627625 11.0556C0.627625 15.739 3.54147 19.7429 7.65495 21.3542C7.55756 20.4799 7.47124 19.1342 7.69257 18.1803C7.89399 17.3171 8.98959 12.6846 8.98959 12.6846C8.98959 12.6846 8.65869 12.0217 8.65869 11.0423C8.65869 9.50625 9.54956 8.35864 10.6595 8.35864C11.6035 8.35864 12.0584 9.06691 12.0584 9.91572C12.0584 10.8652 11.4541 12.2829 11.1432 13.5976C10.8831 14.6976 11.6954 15.5951 12.7799 15.5951C14.7442 15.5951 16.2559 13.5234 16.2559 10.5321C16.2559 7.88499 14.3536 6.03464 11.6378 6.03464C8.49159 6.03464 6.64456 8.39405 6.64456 10.832C6.64456 11.7816 7.01087 12.8008 7.46792 13.3552C7.50676 13.397 7.53419 13.448 7.54756 13.5035C7.56094 13.5589 7.55981 13.6169 7.54428 13.6717C7.46017 14.0203 7.27315 14.7718 7.23773 14.9256C7.18904 15.1281 7.07727 15.1713 6.867 15.0739C5.48699 14.4309 4.62379 12.4124 4.62379 10.79C4.62379 7.30288 7.15695 4.10019 11.9289 4.10019C15.7646 4.10019 18.7448 6.83255 18.7448 10.4857C18.7448 14.297 16.3423 17.3614 13.0079 17.3614C11.8868 17.3614 10.8344 16.7804 10.4736 16.0931L9.78417 18.7203C9.53517 19.6809 8.86121 20.885 8.4108 21.6198C9.47111 21.9472 10.5746 22.1132 11.6843 22.1123C17.7898 22.1123 22.7399 17.1622 22.7399 11.0567C22.7399 4.95122 17.7887 0 11.6832 0Z'
                      fill='currentColor'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className='mx-auto max-w-5xl'
        style={{ opacity, y: translateY, scale }}
      >
        <Image src={laptopMockup} alt='Laptop Mockup' />
      </motion.div>
    </div>
  )
}
