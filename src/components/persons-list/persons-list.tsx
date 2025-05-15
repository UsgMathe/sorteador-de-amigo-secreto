import { ComponentProps } from 'react';
import { usePersonsList } from '../../hooks/use-persons-list';
import { cn } from '../../lib/utils';

export function PersonsList({ className, ...props }: ComponentProps<'ul'>) {
  const personsList = usePersonsList();
  return (
    <ul className={cn('text-center space-y-1.5', className)} {...props}>
      {personsList.map(person => (
        <li key={person}>{person}</li>
      ))}
    </ul>
  );
}
