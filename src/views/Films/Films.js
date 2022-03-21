import { useState, useEffect } from 'react';
import { fetchFilms } from '../../services/films';

export default function Films() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getFilms = async () => {
      const fetchData = await fetchFilms();
      //   console.log(fetchData);
      setData(fetchData);
    };
    getFilms();
  }, []);
  console.log('data', data);
  return (
    <>
      <h1>Films</h1>
      {data.map((title) => (
        <p key={title.id}>{title.title}</p>
      ))}
    </>
  );
}
