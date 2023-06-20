import Link from 'next/link';
import { Chevron } from '../Icons';

const baseStyles = {
  solid:
    'group/button inline-flex items-center rounded-[10px] gap-x-4 px-6 py-4 text-sm font-semibold transition-[background-position] duration-300 ease-in-out focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2',
  link: 'group/button inline-flex items-center rounded-[10px] gap-x-1.5 py-1.5 text-sm font-semibold transition-colors duration-300 ease-in-out focus:outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 capitalize',
};

const variantStyles = {
  solid: {
    primary:
      'text-white bg-gradient-to-r from-ocean to-cyan bg-[length:180%_180%] bg-left-top hover:bg-right-bottom focus-visible:outline-teal',
    secondary:
      'text-white bg-gradient-to-r from-yellow-green to-cyan bg-[length:180%_180%] bg-left-top hover:bg-right-bottom focus-visible:outline-teal',
    yellow:
      'bg-orange hover:bg-orange/90 text-dark-gray/80 focus-visible:outline-orange',
    ghost:
      'text-blue hover:text-blue-dark bg-blue/5 focus-visible:ring-blue focus-visible:ring-1   hover:bg-blue/10 transition-colors duration-300 ease-in-out',
  },
  link: {
    primary: 'text-blue hover:text-blue-light focus-visible:outline-cyan',
    secondary:
      'text-gray-400 hover:text-gray-500 focus-visible:outline-gray-200',
    white: 'text-white hover:text-white/80 focus-visible:outline-gray-200',
  },
};

export default function Button({
  variant = 'solid',
  color = 'primary',
  defaultIcon = true,
  className,
  href,
  children,
  ...props
}) {
  className = `${baseStyles[variant]} ${variantStyles[variant][color]} ${className}`;

  return href ? (
    <Link href={href} legacyBehavior>
      <a className={className} {...props}>
        {children}
        {defaultIcon && (
          <Chevron
            className='-mr-1 ml-1.5 mt-0.5 h-3 w-3 stroke-[1.5px]'
            aria-hidden='true'
          />
        )}
      </a>
    </Link>
  ) : (
    <button className={className} {...props}>
      {children}
      {defaultIcon && (
        <Chevron
          className='-mr-1 ml-1.5 mt-0.5 h-3 w-3 stroke-[1.5px]'
          aria-hidden='true'
        />
      )}
    </button>
  );
}
