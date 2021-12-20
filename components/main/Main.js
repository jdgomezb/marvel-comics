import React, { useState, useEffect, useContext } from 'react';
import SearchBar from '../ui/SearchBar';
import ComicsList from '../ui/ComicsList';
import Superheroes from '../ui/NavBar';
import { FilterContext } from '../main/FilterContext';

import axiosFetch from '../../config/axios'

import styles from '../../styles/Main.module.scss';

export default function Main() {

  const [filter, setFilter] = useState('Spider-man');
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      if (!filter) return;

      const parameters = { title: filter }
      const {data} = await axiosFetch('', { params: parameters });
      const result = await data;

      setComics(result.data.results);
    }
    fetchComics();
  }, [filter])

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      <div className={ styles.container }>
        <header className={ styles.header }>
          <SearchBar setFilter={ setFilter } />
          <Superheroes />
        </header>
        <main className={ styles.main }>
          <ComicsList
            comics={ comics }
          />
        </main>
      </div>
    </FilterContext.Provider>
  );
}
