import { UserPlus } from 'lucide-react';
import { FormEvent, useRef, useState } from 'react';
import { useErrorMessage } from '../../hooks/use-error-message';
import { usePersonsList } from '../../hooks/use-persons-list';
import { InputButton } from '../add-input/input-button';
import { PersonsList } from '../persons-list/persons-list';

interface FormProps {}

export const Form = ({}: FormProps) => {
  const { state: personsList } = usePersonsList();

  const { add: addPerson } = usePersonsList();

  const { errorMessage } = useErrorMessage();

  const [name, setName] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPerson(name);
    setName('');
    inputRef.current?.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-10 "
    >
      <div className="space-y-8">
        <h1
          className="text-3xl text-center text-secondary font-semibold font-poppins"
          onClick={() => inputRef.current?.focus()}
        >
          Vamos começar!
        </h1>

        <InputButton
          ref={inputRef}
          icon={UserPlus}
          buttonText="Adicionar"
          value={name}
          onValueChange={setName}
          disabledButton={!name.trim()}
          errorMessage={errorMessage}
        />
      </div>

      <div className="mt-4">
        <h2 className="mb-4 border-b-2 w-fit mx-auto">
          Participantes
          {!!personsList.length && (
            <span className="text-sm"> ({personsList.length})</span>
          )}
        </h2>
        {!!personsList.length ? (
          <PersonsList persons={personsList} />
        ) : (
          <p className="text-muted-foreground">Sem participantes</p>
        )}
      </div>
    </form>
  );
};
