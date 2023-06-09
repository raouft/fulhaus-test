import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function LanguageSelector() {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center border border-2 border-black px-2 py-2 text-sm font-medium text-black hover:bg-stone-200'>
          <div className='mr-2 flex h-5 w-5 items-center justify-center overflow-hidden rounded-full'>
            <Image
              src='us.svg'
              width={100}
              height={100}
              className='h-full max-w-none'
              alt='US Flag Icon'
            />
          </div>
          <span>English</span>
          <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'flex px-4 py-2 text-sm text-black'
                  )}
                >
                  <div className='mr-2 flex h-5 w-5 items-center justify-center overflow-hidden rounded-full'>
                    <Image
                      src='us.svg'
                      width={50}
                      height={50}
                      className='h-full max-w-none'
                      alt='US Flag Icon'
                    />
                  </div>
                  <span>English</span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'flex px-4 py-2 text-sm text-black'
                  )}
                >
                  <div className='mr-2 flex h-5 w-5 items-center justify-center overflow-hidden rounded-full'>
                    <Image
                      src='fr.svg'
                      width={50}
                      height={50}
                      className='h-full max-w-none'
                      alt='FR Flag Icon'
                    />
                  </div>
                  <span>French</span>
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
