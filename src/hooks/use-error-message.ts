import { useRecoilValue, useSetRecoilState } from 'recoil';
import { errorMessageState } from '../state/atom';

export const useErrorMessage = () => {
  const value = useRecoilValue(errorMessageState);
  const set = useSetRecoilState(errorMessageState);

  return {
    errorMessage: value,
    setErrorMessage: (message: string) => set(message),
  };
};
