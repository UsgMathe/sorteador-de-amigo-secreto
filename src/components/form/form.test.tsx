import { act, fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Form } from './form';

jest.mock('react-router-dom', () => {
  return { useNavigate: () => jest.fn() };
});

function renderForm() {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  );
}

function addPerson(name = 'Nome') {
  const input = screen.getByPlaceholderText(
    'Insira os nomes dos participantes'
  );
  const button = screen.getByTestId('desktop-button');

  fireEvent.change(input, { target: { value: name } });
  expect(input).toHaveValue(name);
  fireEvent.click(button);
}

function expectInputErrorMessage(message: string) {
  const errorMessage = screen.getByRole('alert');
  expect(errorMessage.textContent).toBe(message);
}

describe('comportamento do form.tsx', () => {
  test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    renderForm();

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    const button = screen.getByTestId('desktop-button');

    expect(input).toBeInTheDocument();
    expect(input).not.toHaveValue();

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test('adicionar um participante caso exista um nome preenchido', () => {
    const person = 'Matheus';

    renderForm();

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );

    addPerson(person);
    expect(input).toHaveFocus();
    expect(input).not.toHaveValue();

    const renderedPerson = screen.getByText(person);

    expect(renderedPerson).toBeInTheDocument();
  });

  test('nomes duplicados não podem ser adicionados na lista de participantes', () => {
    const person = 'Matheus';

    renderForm();

    addPerson(person);
    addPerson(person);

    expectInputErrorMessage('Nomes duplicados não são permitidos!');
  });

  test('a mensagem de erro deve sumir após 5 segundos', () => {
    const person = 'Matheus';

    jest.useFakeTimers();

    renderForm();

    addPerson(person);
    addPerson(person);

    let errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeNull();
  });
});
