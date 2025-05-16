import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { PersonsList } from './persons-list';

const renderPersonsList = (persons: string[]) =>
  render(
    <RecoilRoot>
      <PersonsList persons={persons} />
    </RecoilRoot>
  );

describe('uma lista de participantes vazia', () => {
  test('deve ser renderizada sem elementos', () => {
    renderPersonsList([]);

    const renderedPersons = screen.queryAllByRole('listitem');
    expect(renderedPersons).toHaveLength(0);
  });
});

describe('uma lista de participantes preenchida', () => {
  const personsList: string[] = ['Ana', 'Maria', 'José'];

  test('deve ser renderizada com elementos', () => {
    renderPersonsList(personsList);
    const renderedPersons = screen.queryAllByRole('listitem');
    expect(renderedPersons).toHaveLength(personsList.length);
  });
});
