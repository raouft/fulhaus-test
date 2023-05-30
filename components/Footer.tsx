import Image from 'next/image'
import Link from 'next/link'

const navigation = {
  info: [
    { name: 'Our Story', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
  company: [
    { name: 'Style Quiz', href: '#' },
    { name: 'Trade', href: '#' },
    { name: 'Rentals', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/fulhausinc/',
      icon: (props) => (
        <svg
          width='23'
          height='23'
          viewBox='0 0 23 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.5726 0.0675049C5.46741 0.0675049 0.517578 5.01734 0.517578 11.1225C0.517578 16.6395 4.5597 21.2124 9.84564 22.0449V14.3189H7.03738V11.1225H9.84564V8.68687C9.84564 5.91399 11.4963 4.38493 14.0204 4.38493C15.23 4.38493 16.497 4.60052 16.497 4.60052V7.31923H15.0995C13.7286 7.31923 13.2996 8.17276 13.2996 9.0473V11.1203H16.3632L15.8734 14.3167H13.2996V22.0427C18.5855 21.2146 22.6276 16.6407 22.6276 11.1225C22.6276 5.01734 17.6778 0.0675049 11.5726 0.0675049V0.0675049Z'
            fill='currentColor'
          />
        </svg>
      ),
    },
    {
      name: 'Pinterest',
      href: 'https://www.pinterest.com/fulhausinc/',
      icon: (props) => (
        <svg
          width='23'
          height='23'
          viewBox='0 0 23 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.6832 0C5.57663 0 0.627625 4.95011 0.627625 11.0556C0.627625 15.739 3.54147 19.7429 7.65495 21.3542C7.55756 20.4799 7.47124 19.1342 7.69257 18.1803C7.89399 17.3171 8.98959 12.6846 8.98959 12.6846C8.98959 12.6846 8.65869 12.0217 8.65869 11.0423C8.65869 9.50625 9.54956 8.35864 10.6595 8.35864C11.6035 8.35864 12.0584 9.06691 12.0584 9.91572C12.0584 10.8652 11.4541 12.2829 11.1432 13.5976C10.8831 14.6976 11.6954 15.5951 12.7799 15.5951C14.7442 15.5951 16.2559 13.5234 16.2559 10.5321C16.2559 7.88499 14.3536 6.03464 11.6378 6.03464C8.49159 6.03464 6.64456 8.39405 6.64456 10.832C6.64456 11.7816 7.01087 12.8008 7.46792 13.3552C7.50676 13.397 7.53419 13.448 7.54756 13.5035C7.56094 13.5589 7.55981 13.6169 7.54428 13.6717C7.46017 14.0203 7.27315 14.7718 7.23773 14.9256C7.18904 15.1281 7.07727 15.1713 6.867 15.0739C5.48699 14.4309 4.62379 12.4124 4.62379 10.79C4.62379 7.30288 7.15695 4.10019 11.9289 4.10019C15.7646 4.10019 18.7448 6.83255 18.7448 10.4857C18.7448 14.297 16.3423 17.3614 13.0079 17.3614C11.8868 17.3614 10.8344 16.7804 10.4736 16.0931L9.78417 18.7203C9.53517 19.6809 8.86121 20.885 8.4108 21.6198C9.47111 21.9472 10.5746 22.1132 11.6843 22.1123C17.7898 22.1123 22.7399 17.1622 22.7399 11.0567C22.7399 4.95122 17.7887 0 11.6832 0Z'
            fill='currentColor'
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/fulhausinc/?hl=en',
      icon: (props) => (
        <svg
          width='23'
          height='23'
          viewBox='0 0 23 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M11.7931 7.36919C9.76296 7.36919 8.10621 9.02596 8.10621 11.0561C8.10621 13.0863 9.76296 14.7431 11.7931 14.7431C13.8232 14.7431 15.48 13.0863 15.48 11.0561C15.48 9.02596 13.8232 7.36919 11.7931 7.36919ZM22.851 11.0561C22.851 9.52936 22.8648 8.01641 22.7791 6.4924C22.6933 4.72222 22.2895 3.15119 20.9951 1.85674C19.6979 0.559535 18.1297 0.158479 16.3595 0.0727361C14.8328 -0.0130069 13.3198 0.000822702 11.7959 0.000822702C10.2691 0.000822702 8.75619 -0.0130069 7.23221 0.0727361C5.46206 0.158479 3.89106 0.562301 2.59664 1.85674C1.29945 3.15395 0.898405 4.72222 0.812664 6.4924C0.726923 8.01918 0.740752 9.53212 0.740752 11.0561C0.740752 12.5801 0.726923 14.0959 0.812664 15.6199C0.898405 17.3901 1.30222 18.9611 2.59664 20.2555C3.89382 21.5527 5.46206 21.9538 7.23221 22.0395C8.75896 22.1253 10.2719 22.1115 11.7959 22.1115C13.3226 22.1115 14.8355 22.1253 16.3595 22.0395C18.1297 21.9538 19.7007 21.55 20.9951 20.2555C22.2923 18.9583 22.6933 17.3901 22.7791 15.6199C22.8676 14.0959 22.851 12.5829 22.851 11.0561V11.0561ZM11.7931 16.729C8.65385 16.729 6.12033 14.1954 6.12033 11.0561C6.12033 7.91684 8.65385 5.38327 11.7931 5.38327C14.9323 5.38327 17.4659 7.91684 17.4659 11.0561C17.4659 14.1954 14.9323 16.729 11.7931 16.729ZM17.6982 6.4758C16.9652 6.4758 16.3733 5.8839 16.3733 5.15093C16.3733 4.41797 16.9652 3.82607 17.6982 3.82607C18.4311 3.82607 19.023 4.41797 19.023 5.15093C19.0232 5.32498 18.9891 5.49736 18.9226 5.6582C18.8561 5.81904 18.7585 5.96518 18.6355 6.08824C18.5124 6.21131 18.3663 6.30889 18.2054 6.3754C18.0446 6.4419 17.8722 6.47602 17.6982 6.4758V6.4758Z'
            fill='currentColor'
          />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/f%C3%BClhaus-inc/',
      icon: (props) => (
        <svg
          width='23'
          height='23'
          viewBox='0 0 23 23'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0.852173 1.84738C0.852173 1.35743 1.04681 0.887538 1.39326 0.541087C1.73971 0.194637 2.2096 2.46282e-06 2.69955 2.46282e-06H21.1151C21.3579 -0.000394102 21.5984 0.0471045 21.8228 0.139779C22.0472 0.232453 22.2512 0.368483 22.4229 0.540081C22.5947 0.711679 22.731 0.915474 22.8239 1.1398C22.9168 1.36412 22.9646 1.60457 22.9644 1.84738V20.2629C22.9647 20.5057 22.9171 20.7463 22.8243 20.9707C22.7315 21.1951 22.5954 21.3991 22.4237 21.5708C22.252 21.7426 22.0482 21.8788 21.8238 21.9717C21.5994 22.0647 21.3589 22.1124 21.1161 22.1123H2.69955C2.45687 22.1123 2.21656 22.0645 1.99236 21.9716C1.76816 21.8787 1.56446 21.7425 1.3929 21.5708C1.22134 21.3992 1.08529 21.1954 0.992508 20.9712C0.899728 20.7469 0.852041 20.5066 0.852173 20.2639V1.84738ZM9.60461 8.43081H12.5988V9.93444C13.031 9.07005 14.1366 8.29211 15.7981 8.29211C18.9832 8.29211 19.7381 10.0138 19.7381 13.1729V19.0246H16.5147V13.8925C16.5147 12.0934 16.0825 11.0783 14.9849 11.0783C13.4622 11.0783 12.829 12.1728 12.829 13.8925V19.0246H9.60461V8.43081ZM4.07654 18.8869H7.30092V8.29211H4.07654V18.8869ZM7.76226 4.83656C7.76834 5.11263 7.71921 5.38714 7.61776 5.64397C7.51632 5.90081 7.36459 6.13479 7.17149 6.33219C6.97839 6.52958 6.74781 6.68643 6.49327 6.7935C6.23873 6.90058 5.96537 6.95574 5.68923 6.95574C5.41309 6.95574 5.13973 6.90058 4.8852 6.7935C4.63066 6.68643 4.40008 6.52958 4.20698 6.33219C4.01388 6.13479 3.86215 5.90081 3.7607 5.64397C3.65925 5.38714 3.61013 5.11263 3.61621 4.83656C3.62814 4.29466 3.85179 3.77898 4.23926 3.39995C4.62672 3.02092 5.1472 2.80868 5.68923 2.80868C6.23126 2.80868 6.75174 3.02092 7.13921 3.39995C7.52668 3.77898 7.75033 4.29466 7.76226 4.83656Z'
            fill='currentColor'
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className='bg-white' aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 py-20 sm:pt-24 lg:px-8 lg:pt-32'>
        <div className='grid grid-cols-4 grid-rows-1 gap-10 md:gap-20'>
          <div className='col-span-4 grid grid-cols-3 grid-rows-1 gap-4 sm:col-span-2 md:col-span-2'>
            <div>
              <div>
                <Link href='/' className='inline-block select-none'>
                  <Image
                    src='logomark.svg'
                    width={60}
                    height={30}
                    alt='logo mark'
                  />
                </Link>
              </div>
            </div>

            <div className='col-span-4 md:col-span-2'>
              <div className='mt-10 xl:mt-0'>
                <h3 className='mb-6 text-xl leading-6 text-gray-900'>
                  Subscribe to our newsletter
                </h3>
                <form className='mt-6 flex items-stretch sm:max-w-md'>
                  <label htmlFor='email-address' className='sr-only'>
                    Email address
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='email'
                    required
                    className='w-full min-w-0 appearance-none border-2 border-r-0 border-black bg-white px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-gray-900 placeholder-gray-400 outline-none sm:w-64 sm:leading-6 xl:w-full'
                    placeholder='Email'
                  />
                  <div className='rounded-md sm:mt-0 sm:flex-shrink-0'>
                    <button
                      type='submit'
                      className='relative inline-flex items-center border-2 border-black bg-white fill-white px-4 py-4 text-sm font-medium text-black shadow-sm hover:bg-black hover:text-white'
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
                <p className='mt-10'>
                  © 2020 Fülhaus Privary Terms & Conditions
                </p>
              </div>
            </div>
          </div>

          <div className='col-span-4 grid grid-cols-3 grid-rows-1 gap-4 sm:col-span-2 sm:col-start-3'>
            <div className='mt-10 md:mt-0'>
              <h3 className='mb-6 text-xl leading-6 text-gray-900'>Info</h3>
              <ul role='list' className='space-y-2'>
                {navigation.info.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className='text-sm leading-6 text-gray-900 hover:text-black'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mt-10 md:mt-0'>
              <h3 className='mb-6 text-xl leading-6 text-gray-900'>Company</h3>
              <ul role='list' className='space-y-4'>
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className='text-sm leading-6 text-gray-900 hover:text-black'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mt-10 md:mt-0'>
              <h3 className='mb-6 text-xl leading-6 text-gray-900'>Social</h3>
              <div className='flex flex-wrap gap-2 md:order-2'>
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='text-gray-900 hover:text-black'
                  >
                    <span className='sr-only'>{item.name}</span>
                    <item.icon className='h-6 w-6' aria-hidden='true' />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
