import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Bars3Icon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

function Navbar({ transparent = false }) {
  return (
    <div
      className={clsx(
        'absolute inset-x-0 top-0 z-30 h-20 px-6 sm:px-6 lg:h-28 2xl:px-14',
        transparent ? 'bg-transparent' : 'bg-white shadow-md'
      )}
    >
      <nav className='flex h-full w-full items-center justify-between'>
        <div className='flex items-center gap-x-4 xl:gap-x-10'>
          <Link href='/'>
            <img
              src={transparent ? '/logo-white.png' : '/logo.png'}
              alt='Velana internation airport logo'
              className='h-10 lg:h-[51px]'
            />
          </Link>
          <div className='hidden items-center gap-x-4 lg:flex xl:gap-x-12'></div>
        </div>
        <div className='hidden lg:block'>
          <a
            href='#'
            className={clsx(
              'xl:text-lg',
              transparent
                ? 'text-white hover:text-white/60'
                : 'text-dark-gray hover:text-ocean'
            )}
          >
            Switch to{' '}
            <span className='inline-flex items-center font-bold'>
              Airport
              <ChevronRightIcon className='mt-0.5 h-6 w-6' aria-hidden='true' />
            </span>
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className={clsx(
              '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5',
              transparent
                ? 'text-white hover:text-white/60'
                : 'text-dark-gray hover:text-ocean'
            )}
            // onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open mobile menu</span>
            <Bars3Icon className='h-7 w-7 stroke-2' aria-hidden='true' />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
