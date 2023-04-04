import { useState, useEffect } from 'react';
import {
  createBorrowing,
  fetchBorrowings,
  deleteBorrowing,
} from './api-calls/borrowings';
import './App.css';
import { createReader, fetchReaders, deleteReader } from './api-calls/readers';
import { createBook, fetchBooks, deleteBook } from './api-calls/books';
import {
  createProduction,
  fetchProductions,
  deleteProduction,
} from './api-calls/productions';
import Tabs from './Tabs';
import Table from './Table';
import Skeleton from './Skeleton';

const fetchTable = (i) => {
  switch (i) {
    case 0:
      return fetchBooks();
    case 1:
      return fetchReaders();
    case 2:
      return fetchBorrowings();
    case 3:
      return fetchProductions();
    default:
      return new Promise((res) => res([]));
  }
};

const create = (i, invalidate) => {
  switch (i) {
    case 0:
      return (body) => createBook(body).then(invalidate);
    case 1:
      return (body) => createReader(body).then(invalidate);
    case 2:
      return (body) => createBorrowing(body).then(invalidate);
    case 3:
      return (body) => createProduction(body).then(invalidate);
  }
};

const del = (i, invalidate) => {
  switch (i) {
    case 0:
      return (obj) =>
        deleteBook(obj['Шифр'], obj['Код_видавництва']).then(invalidate);
    case 1:
      return (obj) => deleteReader(obj['Код']).then(invalidate);
    case 2:
      return (obj) => deleteBorrowing(obj['Код_читача']).then(invalidate);
    case 3:
      return (obj) => deleteProduction(obj['Код']).then(invalidate);
  }
};

// createBook({
//   шифр: 2000,
//   назва: 'Мегатест',
//   автор: 'Тест тест',
//   рік_видання: 1990,
//   ціна: 500,
//   кількість: 30,
//   код_видавництва: 1,
// })

const useInvalidate = () => {
  const [queryValid, setValid] = useState(false);
  return {
    queryValid,
    invalidate: () => setValid((s) => !s),
  };
};

function App() {
  const [tab, setTab] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [tableData, setTabledata] = useState([]);
  const { queryValid, invalidate } = useInvalidate();

  useEffect(() => {
    setLoading(true);
    fetchTable(tab).then((data) => {
      setTabledata(data);
      setLoading(false);
    });
  }, [tab, queryValid]);
  return (
    <div className='App'>
      <Tabs tab={tab} setTab={setTab} />
      {loading ? (
        <Skeleton />
      ) : (
        <Table
          tab={tab}
          tableData={tableData}
          create={() => {
            return create(tab, invalidate);
          }}
          onDelete={() => {
            return del(tab, invalidate);
          }}
        />
      )}
    </div>
  );
}

export default App;
