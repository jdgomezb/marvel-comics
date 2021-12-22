import React, { useState, useEffect, useContext } from 'react';
import SearchBar from '../ui/SearchBar';
import ComicsList from '../ui/ComicsList';
import NavBar from '../ui/NavBar';
import { FilterContext } from '../main/FilterContext';

import {axiosComics} from '../../config/axios'

import styles from '../../styles/Main.module.scss';

export default function Main() {

  const [filter, setFilter] = useState('');
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      if (!filter) return;

      const {data} = await axiosComics({ params: { title: filter } });
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
          <NavBar />
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
