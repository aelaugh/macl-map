import Link from 'next/link';

// import {
//   FacebookIcon,
//   InstagramIcon,
//   LinkedinIcon,
//   TiktokIcon,
//   TwitterIcon,
//   YoutubeIcon,
// } from '../Icons';

import Container from './Container';

function Footer() {
  return (
    <footer className='bg-[#F8F9FA]'>
      <Container>
        <div className='flex items-center justify-center py-10 lg:py-28'>
          <img
            src='/logo.png'
            alt='Velana internation airport logo'
            className='h-10 lg:h-20'
          />
        </div>

        {/* Footer directory */}
        <div className='hidden pb-10 lg:block lg:pb-16'>
          <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-5 lg:gap-x-4 '>
            {FOOTER_DIRECTORY.map((item) => (
              <div key={item.title}>
                <p className='whitespace-nowrap text-lg font-bold'>
                  {item.title}
                </p>
                <ul className='mt-7 space-y-3'>
                  {item.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className='text-sm text-dark-gray/80 transition-colors duration-200 hover:text-gray-900'
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col justify-between space-y-10 divide-gray-300 border-b border-gray-300 pb-5 lg:flex-row  lg:space-y-0 lg:py-14'>
          <div className='grid grid-cols-2 py-3 text-sm lg:grid-cols-1'>
            <p className='mb-2 font-bold uppercase'>Contact Us</p>
            <div>
              <p>Passenger Inquiries</p>
              <a href='mailto:passenger@macl.aero' className='block'>
                passenger@macl.aero
              </a>
              <a href='tel:+9603332525' className='block'>
                +960 3332525
              </a>
            </div>
          </div>

          <div className='grid grid-cols-2 py-3 text-sm  lg:grid-cols-1 lg:px-20'>
            <p className='mb-2 text-sm font-bold uppercase'>Follow Us</p>
            <div>
              <p className='mb-4 hidden lg:block'>
                Get to know about Updates & offers
              </p>
            </div>
          </div>
          <div className='flex items-center gap-4 py-3 text-sm lg:order-first'>
            <div className='h-24 flex-shrink-0'>
              <img
                src='/images/macl-app.png'
                alt='Velana internation airport app logo'
                className='h-full'
              />
            </div>
            <div className='w-72'>
              <p className='mb-2 text-sm'>
                Download <span className='font-bold'>VIA Mobile App</span> on
                iOS and Google Playstore
              </p>
              <div className='flex items-start gap-2'>
                <div className='w-20 lg:w-24'>
                  <img
                    src='/images/appstore.png'
                    alt=''
                    className='h-full w-full'
                  />
                </div>
                <div className='w-[90px] lg:w-[104px]'>
                  <img
                    src='/images/google-play-badge.png'
                    alt=''
                    className='h-full w-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-between py-4 lg:flex-row lg:py-10'>
          <ul className='mb-3 flex flex-row flex-wrap items-center justify-center gap-x-2 lg:mb-0 lg:gap-x-6'>
            {FOOTER.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className='text-sm font-bold'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className='text-sm'>© 2023, MACL. All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

const FOOTER_DIRECTORY = [
  {
    title: 'About MACL ',
    links: [
      {
        label: 'About MACL',
        href: '#',
      },
      {
        label: 'Management',
        href: '#',
      },
      {
        label: 'Corporate Social Responsibility',
        href: '#',
      },
      {
        label: 'Sustainability',
        href: '#',
      },
      {
        label: 'Airport Development',
        href: '#',
      },
      {
        label: 'Facilities',
        href: '#',
      },
    ],
  },
  {
    title: 'Media Center',
    links: [
      {
        label: 'News',
        href: '#',
      },
      {
        label: 'Multimedia Library',
        href: '#',
      },
      {
        label: 'Publications',
        href: '#',
      },
      {
        label: 'Announcement',
        href: '#',
      },
      {
        label: 'Transportation',
        href: '#',
      },
    ],
  },
  {
    title: 'Airline Development',
    links: [
      {
        label: 'Overview',
        href: '#',
      },
      {
        label: 'Airline support',
        href: '#',
      },
      {
        label: 'Data & Insight ',
        href: '#',
      },
      {
        label: 'Airport Charges & Incentives',
        href: '#',
      },
      {
        label: 'Getting Started at VIA',
        href: '#',
      },
      {
        label: 'Contact us',
        href: '#',
      },
    ],
  },
  {
    title: 'Business Services',
    links: [
      {
        label: 'Property Leasing',
        href: '#',
      },
      {
        label: 'Terminal Concessions',
        href: '#',
      },
      {
        label: 'Retail Services',
        href: '#',
      },
      {
        label: 'Lounge',
        href: '#',
      },
      {
        label: 'Advertising ',
        href: '#',
      },
      {
        label: 'Ancillary Services',
        href: '#',
      },
      {
        label: 'Cargo Services ',
        href: '#',
      },
      {
        label: 'Air Navigation Service',
        href: '#',
      },
    ],
  },
  {
    title: 'Careers',
    links: [
      {
        label: 'Job Opportunities',
        href: '#',
      },
      {
        label: 'MACL life',
        href: '#',
      },
    ],
  },
];

const FOOTER = [
  {
    label: 'Feedback',
    href: '#',
  },
  {
    label: 'Legal',
    href: '#',
  },
  {
    label: 'Accessibility',
    href: '#',
  },
  {
    label: 'Privacy Policy',
    href: '#',
  },
];
