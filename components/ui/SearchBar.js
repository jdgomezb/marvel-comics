import { useContext, useState } from 'react';

import { FilterContext } from '../main/FilterContext';

import styles from '../../styles/SearchBar.module.scss';

export default function SearchBar() {
  const { filter, setFilter } = useContext(FilterContext);
  const [ userInput, setUserInput ] = useState('');

  const onChange = evt => {
    if (evt.target.value == '') return;
  }

  const onKeyUp = evt => {
    if (evt.code == 'Enter') search(evt);

    setUserInput(evt.target.value);
  }

  const onFocus = evt => {
    evt.target.select();
  }

  const search = evt => {
    evt.preventDefault();
    evt.target.blur();
    evt.target.value = '';

    if(userInput.trim() == '') return;

    setFilter(userInput);
    setUserInput('');
  }

  return (
    <div className={ styles.search_bar }>
      <form
        className={ styles.form }
        onSubmit={ search }>
          <input
            type="text"
            onFocus={ onFocus }
            onChange={ onChange }
            onKeyUp={ onKeyUp }
            placeholder='Search your favorite Marvel character'
          />
      </form>
      <h2 className={ styles.current_filter }>Current filter: <span>{ filter }</span></h2>
    </div>
  );
}
