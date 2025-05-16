import shuffle from 'just-shuffle';

export function shufflePersonsList(persons: string[]) {
  const personsCount = persons.length;
  const shufflePersons = shuffle(persons);

  const result = new Map<string, string>();

  shufflePersons.forEach((shufflePerson, index) => {
    const randomPersonIndex = index === personsCount - 1 ? 0 : index + 1;
    const randomPerson = shufflePersons[randomPersonIndex];

    result.set(shufflePerson, randomPerson);
  });

  return result;
}
