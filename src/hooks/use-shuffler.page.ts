import { useRecoilValue, useSetRecoilState } from 'recoil';
import { shufflePersonsList } from '../components/utils/shuffle/shuffle.utils';
import { shuffleResult } from '../state/atom';
import { usePersonsList } from './use-persons-list';

export const useShuffler = () => {
  const { state: persons } = usePersonsList();
  const setShuffleResult = useSetRecoilState(shuffleResult);
  const state = useRecoilValue(shuffleResult);
  return {
    state,
    sortPersons: async () => {
      const result = shufflePersonsList(persons);
      setShuffleResult(result);
    },
  };
};
