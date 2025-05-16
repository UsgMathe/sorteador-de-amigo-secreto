import { PlayCircle } from 'lucide-react';
import { ComponentProps } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePersonsList } from '../../hooks/use-persons-list';
import { Button } from '../button';

export function Footer({ ...props }: ComponentProps<'footer'>) {
  const { state: personsList } = usePersonsList();

  const navigate = useNavigate();
  const navigateToShuffle = () => navigate('/sorteio');

  return (
    <footer {...props}>
      <Button
        className="text-white hover:opacity-95 transition-all duration-300 hover:scale-[98%] disabled:bg-muted-background"
        disabled={personsList.length < 3}
        onClick={navigateToShuffle}
      >
        <PlayCircle />
        Iniciar Sorteio!
      </Button>
    </footer>
  );
}
