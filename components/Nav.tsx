'use client'

import { Disclosure } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import LanguageSelector from './LanguageSelector'
import Link from 'next/link'

import { motion } from 'framer-motion'

const navigation = [
  { name: 'Meet Ludwig', href: '#' },
  { name: 'Enterprise', href: '#' },
  { name: 'The Moodboard', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <motion.div
      className='fixed z-50 w-full'
      initial={{ opacity: 0, y: -30 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 4,
      }}
    >
      <Disclosure as='header' className='bg-white shadow'>
        {({ open }) => (
          <>
            <div className='mx-auto max-w-full px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8'>
              <div className='relative flex h-16 justify-between'>
                <div className='z-10 hidden px-2 lg:relative lg:flex lg:px-0'>
                  <div className='flex flex-shrink-0 items-center'>
                    <div className='hidden sm:ml-6 sm:flex sm:space-x-5'>
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-gray-300 hover:text-black'
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='absolute inset-0 z-0 flex flex-1 items-center justify-center px-2'>
                  <div className='w-full text-center sm:max-w-xs'>
                    <Link href='/'>
                      <Image
                        src='/fulhaus_logo.svg'
                        width={500}
                        height={500}
                        className='inline-block h-8 w-auto'
                        alt='Fulhaus Logo'
                      />
                    </Link>
                  </div>
                </div>
                <div className='relative z-10 flex items-center lg:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500'>
                    <span className='sr-only'>Open menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='z-10 flex items-center sm:mr-6 lg:relative'>
                  {/* Right side of navbar */}
                  <div className='mr-10 hidden items-center sm:ml-6 sm:space-x-5 lg:flex'>
                    <Link
                      href='#'
                      className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-zinc-800 hover:border-gray-300 hover:text-black'
                    >
                      Log In
                    </Link>
                    <button
                      type='button'
                      className='inline-flex items-center border-2 border-black bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-transparent hover:text-black'
                    >
                      <span>Try Fülhaus Free</span>
                    </button>
                  </div>
                  <div className='hidden sm:block'>
                    <LanguageSelector />
                  </div>
                  <button
                    type='button'
                    className='mr-3 block rounded-full p-1 text-black sm:hidden'
                  >
                    <span className='sr-only'>Search</span>
                    <MagnifyingGlassIcon
                      className='h-6 w-6'
                      aria-hidden='true'
                    />
                  </button>
                  <button
                    type='button'
                    className='block rounded-full p-1 text-black sm:hidden'
                  >
                    <span className='sr-only'>Cart</span>
                    <ShoppingBagIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel
              as='nav'
              className='lg:hidden'
              aria-label='Global'
            >
              <div className='space-y-1 px-2 pb-5 pt-2'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className='block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900'
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900'
                >
                  Log In
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='mx-2 inline-flex items-center border-2 border-black bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-transparent hover:text-black'
                >
                  Try Fülhaus Free
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </motion.div>
  )
}
