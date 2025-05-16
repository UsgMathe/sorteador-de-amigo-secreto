import { useRecoilValue, useSetRecoilState } from 'recoil';
import { personsListState } from '../state/atom';
import { useErrorMessage } from './use-error-message';

export const usePersonsList = () => {
  const personsList = useRecoilValue(personsListState);
  const setPerson = useSetRecoilState(personsListState);

  const { setErrorMessage } = useErrorMessage();

  return {
    state: personsList,
    add: (person: string) => {
      if (personsList.includes(person)) {
        setErrorMessage('Nomes duplicados não são permitidos!');
        setTimeout(() => {
          setErrorMessage('');
        }, 5000);
      } else {
        setPerson(old => [...old, person]);
      }
    },
    remove: (person: string) => {
      setPerson(old => old.filter(old => old !== person));
    },
  };
};
