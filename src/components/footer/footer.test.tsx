import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { createNavigateMock } from '../utils/navigate.test.utils';
import { createPersonsListMock } from '../utils/persons.test.utils';
import { Footer } from './footer';

const mockNavigate = createNavigateMock();

const renderFooter = () =>
  render(
    <RecoilRoot>
      <Footer />
    </RecoilRoot>
  );

describe('quando não existem participantes suficientes ( < 3 )', () => {
  createPersonsListMock([]);

  test('o sorteio não pode iniciar', () => {
    renderFooter();

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});

describe('quando existem participantes suficientes ( >= 3 )', () => {
  const persons: string[] = ['Matheus', 'José', 'Ana'];
  createPersonsListMock(persons);

  test('o sorteio deve ser iniciado', () => {
    renderFooter();

    const button = screen.getByRole('button');

    expect(button).toBeEnabled();

    fireEvent.click(button);

    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toBeCalledWith('/sorteio');
  });
});
