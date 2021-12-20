import ComicsItem from './ComicsItem'

import styles from '../../styles/ComicsList.module.scss';

export default function ComicsList({comics}) {

  return ( 
    <div className={ styles.comics_list }>
      {comics.map(comic => (
        <ComicsItem
          key = {comic.id}
          comic_data = { comic }
        />
      ))}
    </div>
    );
}
