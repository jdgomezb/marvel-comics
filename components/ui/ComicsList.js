import { useContext } from 'react';

import ComicsItem from './ComicsItem'
import { FilterContext } from '../main/FilterContext';

import styles from '../../styles/ComicsList.module.scss';

export default function ComicsList({comics}) {
  const { filter, setFilter } = useContext(FilterContext);
  
  return (
    <>
      { comics.length >= 1 ?
        <div className={ styles.comics_list }>
          <h2 className={ styles.message }>Showing results for: <span className={ styles.filter }>{ filter }</span></h2>
          { comics.map( comic => (
            <ComicsItem
              key = { comic.id }
              comic_data = { comic }
            />
          ))}
        </div>
      :
        filter === '' &&
          <div className={ styles.comics_list_empty }>
            <h2 className={ styles.message }>Please use the search field <br/> or click on the featured Characters</h2>
          </div>
      }
    </>
  );
}
