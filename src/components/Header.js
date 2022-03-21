import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/films">Films</NavLink>
      <NavLink to="/character">Characters</NavLink>
    </>
  );
}
