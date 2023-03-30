import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setPage } from '../../store/actions';

import './styles.scss';

const Search = ({ textLabel, action }) => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState('');

  async function onFormSubmit(e) {
    e.preventDefault();

    await dispatch(setPage(1));
    await dispatch(action(term));
  }

  function onInputChange(e) {
    setTerm(e.target.value);
  }

  return (
    <div className="search">
      <form onSubmit={onFormSubmit}>
        <div className="field">
          <label>{textLabel}</label>
          <input value={term} onChange={onInputChange} type="search" />
        </div>
      </form>
    </div>
  );
};

Search.defaultProps = {
  textLabel: 'Search',
};

export default Search;
