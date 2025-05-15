import { UserPlus } from 'lucide-react';
import { FormEvent, useRef, useState } from 'react';
import { useAddPerson } from '../../hooks/use-add-person';
import { useErrorMessage } from '../../hooks/use-error-message';
import { usePersonsList } from '../../hooks/use-persons-list';
import { InputButton } from '../add-input/input-button';
import { Card } from '../card';
import { PersonsList } from '../persons-list/persons-list';

interface FormProps {}

export const Form = ({}: FormProps) => {
  const addPerson = useAddPerson();
  const persons = usePersonsList();
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
    <Card>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="space-y-10">
          <h1
            className="text-3xl text-secondary font-semibold font-poppins"
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
            disabledButton={!name}
            errorMessage={errorMessage}
          />
        </div>

        <PersonsList className="mt-8" />
      </form>
    </Card>
  );
};
