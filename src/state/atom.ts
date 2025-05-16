import { atom } from 'recoil';

export const personsListState = atom<string[]>({
  key: 'personsState',
  default: [],
});

export const errorMessageState = atom<string>({
  key: 'errorMessageState',
  default: '',
});

export const shuffleResult = atom<Map<string, string>>({
  key: 'shuffleResult',
  default: new Map<string, string>(),
});
