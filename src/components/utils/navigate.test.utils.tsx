const mock = jest.fn();

jest.mock('react-router-dom', () => {
  return { useNavigate: () => mock };
});

export const createNavigateMock = () => mock;
