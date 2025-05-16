import { shufflePersonsList } from './shuffle.utils';

describe('dado o sorteio do amigo secreto', () => {
  test('nenhum participante pode sortear o próprio nome', () => {
    const persons = ['Matheus', 'Gabriel', 'José', 'Maria', 'João', 'Ana'];
    const shuffledPersons = shufflePersonsList(persons);
    shuffledPersons.forEach(person => {
      const secretPerson = shuffledPersons.get(person);
      expect(secretPerson).not.toEqual(person);
    });
  });
});
