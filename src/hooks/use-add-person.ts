import { useSetRecoilState } from 'recoil';
import { personsListState } from '../state/atom';
import { useErrorMessage } from './use-error-message';
import { usePersonsList } from './use-persons-list';

export const useAddPerson = () => {
  const setPerson = useSetRecoilState(personsListState);
  const persons = usePersonsList();
  const { setErrorMessage } = useErrorMessage();

  return (person: string) => {
    if (persons.includes(person)) {
      setErrorMessage('Nomes duplicados não são permitidos!');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    } else {
      setPerson(old => [...old, person]);
    }
  };
};
