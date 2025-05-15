import { atom } from 'recoil';

export const personsListState = atom<string[]>({
  key: 'personsState',
  default: [],
});

export const errorMessageState = atom<string>({
  key: 'errorMessageState',
  default: '',
});
