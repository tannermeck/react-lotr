import { useState, useEffect } from 'react';

import { fetchCharacters } from '../../services/characters';

export default function Character() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getCharacters = async () => {
      const char = await fetchCharacters(race, query);
      setCharacters(char);
    };
    getCharacters();
  }, [query, race]);
  console.log(characters);
  return (
    <>
      <select onChange={(e) => setRace(e.target.value)}>
        <option value="All">All</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Human">Human</option>
        <option value="Maiar">Maiar</option>
        <option value="Orc">Orc</option>
      </select>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <h1>Character</h1>
      {characters.map((char) => (
        <p key={char.id}>{char.name}</p>
      ))}
    </>
  );
}
