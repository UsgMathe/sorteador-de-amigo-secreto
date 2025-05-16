import { Dice5 } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import { Card } from '../../components/card';
import { usePersonsList } from '../../hooks/use-persons-list';
import { useShuffler } from '../../hooks/use-shuffler.page';

interface ShufflePageProps {}

export function ShufflePage({}: ShufflePageProps) {
  const navigate = useNavigate();

  const { state: persons } = usePersonsList();
  const shuffler = useShuffler();

  const [shufflerPerson, setShufflerPerson] = useState<string>();

  const secretPerson = shufflerPerson && shuffler.state.get(shufflerPerson);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    shuffler.sortPersons();
  };

  return (
    <Card>
      <form
        className="flex flex-col items-center space-y-9 max-w-xl w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl text-center text-secondary font-semibold font-poppins">
          Quem vai tirar o papelzinho?
        </h1>

        <select
          value={shufflerPerson}
          name="select-persons-list"
          id="select-persons-list"
          data-has-value={!!shufflerPerson}
          className="w-full h-full py-4 focus-within:outline-0 px-8 rounded-4xl border-2 flex items-center overflow-hidden space-x-8 bg-white w-full input-shadow aria-invalid:border-red-600 data-[has-value=false]:text-button-text border-black disabled:opacity-50"
          placeholder="Selecione seu nome ..."
          onChange={e => setShufflerPerson(e.target.value)}
        >
          <option className="hidden text-muted-foreground">
            Selecione o seu nome ...
          </option>
          {secretPerson ? (
            <option>{shufflerPerson}</option>
          ) : (
            persons.map((person, index) => (
              <option key={`person-${person}-${index + 1}`}>{person}</option>
            ))
          )}
        </select>

        {!secretPerson && (
          <>
            <p className="text-button-text text-lg text-center">
              Clique em em sortear para ver quem é seu amigo secreto!
            </p>

            <Button
              type="submit"
              className="font-medium text-lg group"
              disabled={!shufflerPerson}
            >
              <div className="flex items-center gap-3 group-aria-busy:animate-pulse">
                <Dice5 className="group-hover:animate-spin group-aria-busy:animate-spin" />
                <p>{'Sortear!'}</p>
              </div>
            </Button>
          </>
        )}

        {!!secretPerson && (
          <div className="space-y-10">
            <div className="space-y-4 font-semibold text-white text-center bg-secondary py-6 px-10 rounded-3xl">
              <p>Seu amigo secreto é:</p>
              <p
                data-testid="shuffle-result"
                className="text-primary text-3xl animate-bounce mt-5 delay-400"
              >
                {secretPerson}
              </p>
            </div>

            <Button type="button" onClick={() => navigate('/')}>
              Voltar
            </Button>
          </div>
        )}
      </form>
    </Card>
  );
}
