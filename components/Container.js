import clsx from 'clsx';

const Container = ({ noPadding = false, className, ...props }) => {
  return (
    <div
      className={clsx(
        'mx-auto max-w-7xl',
        !noPadding && 'px-4 sm:px-6 lg:px-8 xl:px-2 2xl:px-0',
        className
      )}
      {...props}
    />
  );
};

export default Container;
