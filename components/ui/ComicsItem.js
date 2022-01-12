/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

import styles from '../../styles/ComicsItem.module.scss'

export default function ComicsItem({comic_data}) {
  const title = comic_data.title
  const characters = comic_data.characters.available
  const format = comic_data.format
  const series = comic_data.series.name
  const variants = comic_data.variants.length
  const img_src = `${comic_data.thumbnail.path}.${comic_data.thumbnail.extension}`
  const writers = comic_data.creators.items.filter(creator => creator.role === 'writer')
  const price = comic_data.prices[0]

  return ( 
    <div className={ styles.comics_item }>
      <figure className={ styles.figure }>
        <Image
          alt={ title }
          src={ img_src }
          height={ 342 }
          width={ 244 }
        />
        <span className={ styles.price_tag }>$ { price.price }</span>
        <p className={ styles.description }>
          <span><strong>Featured Characters:</strong> { characters }</span>
          <span><strong>Format:</strong> { format }</span>
          <span><strong>Series:</strong> { series }</span>
          <span><strong>Variants:</strong> { variants }</span>
          
        </p>
      </figure>
      <div>
        <h3 className={ styles.title }>{ title }</h3>
        <p className={ styles.creator_wrapper }>
          { writers.length > 0 && <strong>Writer: </strong> }
          { writers.map((creator, idx) => {
            return <span 
              key={ idx }
              className={ styles.creator }>
              { creator.name }
            </span>;
          })}
        </p>
      </div>
    </div>
  );
}
