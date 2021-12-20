import { useContext } from 'react';
import { FilterContext } from '../main/FilterContext';

import styles from '../../styles/SearchBar.module.scss';

export default function SearchBar() {
  const { filter, setFilter } = useContext(FilterContext)

  return (
    <div className={ styles.search_bar }>
      <form
        className={ styles.form }>
        <h1 className={ styles.current_filter }>Current filter: <span>{ filter }</span></h1>
      </form>
    </div>
  );
}
