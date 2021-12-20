import { useContext } from 'react';
import { FilterContext } from '../main/FilterContext';

import styles from '../../styles/NavBar.module.scss';

export default function NavBar() {
  const { filter, setFilter } = useContext(FilterContext)

  return (
    <nav className={ styles.nav }>
      <button 
        className={ `${styles.btn} ${styles.spiderman_btn}` }
        value = 'Spider-man'
        onClick = {e => setFilter(e.target.value) }>
        Spider-Man</button> 
      <button 
        className={ `${styles.btn} ${styles.wolverine_btn}` }
        value = 'Wolverine'
        onClick = {e => setFilter(e.target.value) }>
        Wolverine</button>
      <button 
        className={ `${styles.btn} ${styles.deadpool_btn}` }
        value = 'Deadpool'
        onClick = {e => setFilter(e.target.value) }>
        Deadpool</button> 
      <button 
        className={ `${styles.btn} ${styles.ironman_btn}` }
        value = 'Iron Man'
        onClick = {e => setFilter(e.target.value) }>
        Iron Man</button>
    </nav>
  );
}
