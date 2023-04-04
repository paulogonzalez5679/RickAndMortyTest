import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPage } from '../../store/actions';

import './styles.scss';

const Pagination = () => {
  const page = useSelector((state) => state.page);
  const pages = useSelector((state) => state.pages);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  async function toPrevPage() {
    if (page === 1) return;

    await dispatch(setPage(page - 1));
  }

  async function toNextPage() {
    if (page === pages) return;

    await dispatch(setPage(page + 1));
  }

  return (
    <div className="pagination">
      <button onClick={toPrevPage} className="prev-button">
        Prev{page === 1 ? '' : ` - ${page - 1}`}
      </button>
      <button onClick={toNextPage} className="next-button">
        Next{page === pages ? '' : ` - ${page + 1}`}
      </button>
    </div>
  );
};

export default Pagination;
