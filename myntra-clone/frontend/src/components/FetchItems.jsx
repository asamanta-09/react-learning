import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { itemActions } from '../store/itemSlice';
import { fetchStatusActions } from '../store/fetchStatusSlice';

const FetchItems = () => {
  const fetchStatus = useSelector((state) => (state.fetchStatus));
  const dispatch = useDispatch()

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchFinished());
        dispatch(itemActions.addInitialItems(items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);


  return (
    <div>

    </div>
  )
}

export default FetchItems;
