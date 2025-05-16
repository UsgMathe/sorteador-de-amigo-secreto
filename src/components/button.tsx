import { ComponentProps } from 'react';
import { cn } from '../lib/utils';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'default' | 'secondary';
};

export function Button({
  variant = 'default',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'button-shadow border-2 mt-4 mx-auto rounded-4xl border-l text-sm py-5 px-12 cursor-pointer text-white transition-all duration-300 disabled:pointer-events-none disabled:opacity-70 select-none border-black flex items-center gap-2 hover:opacity-95 hover:scale-[98%]',
        variant == 'secondary' ? 'bg-secondary' : 'bg-primary',
        className
      )}
      {...props}
    />
  );
}
