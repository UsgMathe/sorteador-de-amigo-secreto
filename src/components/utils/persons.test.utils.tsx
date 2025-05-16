import { usePersonsList } from '../../hooks/use-persons-list';

jest.mock('../../hooks/use-persons-list');

export const createPersonsListMock = (persons: string[]) =>
  beforeEach(() => {
    (usePersonsList as jest.Mock).mockReturnValue({ state: persons });
  });
