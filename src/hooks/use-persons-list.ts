import { useRecoilValue } from 'recoil';
import { personsListState } from '../state/atom';

export const usePersonsList = () => {
  const personsList = useRecoilValue(personsListState);
  return personsList;
};
