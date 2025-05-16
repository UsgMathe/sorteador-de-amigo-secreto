import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RecoilRoot } from 'recoil';
import { createNavigateMock } from '../../components/utils/navigate.test.utils';
import { createPersonsListMock } from '../../components/utils/persons.test.utils';
import { ShufflePage } from './shuffle.page';

const renderShufflePage = () =>
  render(
    <RecoilRoot>
      <ShufflePage />
    </RecoilRoot>
  );

describe('na pagina de sorteio', () => {
  const personsList: string[] = ['Matheus', 'Maria', 'João'];
  createPersonsListMock(personsList);
  createNavigateMock();

  test('todos os participantes podem realizar o sorteio', () => {
    renderShufflePage();
    personsList.forEach(person => {
      const personOption = screen.getByRole('option', { name: person });
      expect(personOption).toBeInTheDocument();
    });
  });

  test('o amigo secreto inicia oculto', () => {
    renderShufflePage();
    let result = screen.queryByTestId('shuffle-result');
    expect(result).toBeNull();
  });

  test('o amigo secreto é exibido quando solicitado', () => {
    const selectedPerson = personsList[1];

    renderShufflePage();

    const select = screen.getByRole('combobox');
    const button = screen.getByRole('button');

    userEvent.selectOptions(select, selectedPerson);
    userEvent.click(button);

    const result = screen.getByTestId('shuffle-result');
    expect(result).toBeInTheDocument();
  });
});
