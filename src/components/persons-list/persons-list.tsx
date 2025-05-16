import { X } from 'lucide-react';
import { ComponentProps } from 'react';
import { usePersonsList } from '../../hooks/use-persons-list';
import { cn } from '../../lib/utils';

type PersonsListProps = ComponentProps<'ul'> & { persons: string[] };

export function PersonsList({
  className,
  persons,
  ...props
}: PersonsListProps) {
  const { remove } = usePersonsList();
  return (
    <ul className={cn('text-center space-y-1.5', className)} {...props}>
      {persons.map(person => (
        <li
          className="flex items-center justify-between gap-4 bg-muted-background/40 rounded-full border-2 px-4"
          key={person}
        >
          <p className="py-1">{person}</p>

          <div className="flex items-center gap-2">
            <div className="h-8 w-0.5 bg-black" />
            <button
              title="Remover participante"
              onClick={() => remove(person)}
              className="cursor-pointer w-4"
            >
              <X className="text-primary/80 hover:text-primary size-5.5 transition-color duration-300" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
