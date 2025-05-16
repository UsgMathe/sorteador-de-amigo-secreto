import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { CreateListPage } from './create-list.page';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('a pagina de criação de lista de participantes', () => {
  test('deve ser renderizada corretamente', () => {
    const { container } = render(
      <RecoilRoot>
        <CreateListPage />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
