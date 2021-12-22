import { useContext } from 'react';

import { FilterContext } from '../main/FilterContext';

import styles from '../../styles/NavBar.module.scss';

export default function NavBar() {
  const { filter, setFilter } = useContext(FilterContext)

  const featured = [
    {
      name: 'Spider-man',
      className: 'spiderman',
    },
    {
      name: 'Wolverine',
      className: 'wolverine',
    },
    {
      name: 'Deadpool',
      className: 'deadpool',
    },
    {
      name: 'Iron Man',
      className: 'ironman',
    },
  ]
  return (
    <nav className={ styles.nav }>
      { featured.map((character, idx) => {
        return <button 
          key={ idx }
          className={ `${styles.btn} ${styles[`${character.className}_btn`]}` }
          value = { character.name.toLowerCase() }
          onClick = { evt => setFilter(evt.target.value) }>
          { character.name }</button>
      }) }
    </nav>
  );
}
