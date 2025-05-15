import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { usePersonsList } from '../../hooks/use-persons-list';
import { PersonsList } from './persons-list';

jest.mock('../../hooks/use-persons-list', () => {
  return {
    usePersonsList: jest.fn(),
  };
});

const mockPersonsList = (personsList: string[]) =>
  beforeEach(() => {
    (usePersonsList as jest.Mock).mockReturnValue(personsList);
  });

const renderPersonsList = () =>
  render(
    <RecoilRoot>
      <PersonsList />
    </RecoilRoot>
  );

describe('uma lista de participantes vazia', () => {
  mockPersonsList([]);

  test('deve ser renderizada sem elementos', () => {
    renderPersonsList();

    const renderedPersons = screen.queryAllByRole('listitem');
    expect(renderedPersons).toHaveLength(0);
  });
});

describe('uma lista de participantes preenchida', () => {
  const personsList: string[] = ['Ana', 'Maria', 'José'];
  mockPersonsList(personsList);

  test('deve ser renderizada com elementos', () => {
    renderPersonsList();
    const renderedPersons = screen.queryAllByRole('listitem');
    expect(renderedPersons).toHaveLength(personsList.length);
  });
});
