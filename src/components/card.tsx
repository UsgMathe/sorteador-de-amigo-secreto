import { ComponentProps } from 'react';
import { cn } from '../lib/utils';

export function Card({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <div className="p-20 sm:mb-4 mx-auto sm:mx-0">
          <img
            src="/logo.png"
            alt="logo Sorteador de Amigo Secreto"
            className="w-fit hidden sm:block mb-20"
          />

          <img
            src="/logo-pequeno.png"
            alt="logo Sorteador de Amigo Secreto"
            className="w-fit mx-auto sm:hidden mb-20"
          />
        </div>
      </header>

      <div
        className={cn(
          'grow flex flex-col h-full bg-background p-15 border-t-4 border-x-4 rounded-t-[5rem] relative',
          className
        )}
        {...props}
      >
        <div className="absolute sm:-top-53 -top-43 z-10 w-full flex justify-center sm:justify-end px-10 left-0">
          <img
            src="/person.png"
            alt="Ilustração de personagem fictício"
            className="sm:w-96 w-78 flex-none"
          />
        </div>
        {children}
      </div>
    </div>
  );
}
