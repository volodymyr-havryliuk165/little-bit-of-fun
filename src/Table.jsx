import React, { useState } from 'react';
import styles from './Table.module.css';

const BookFields = ({ state, handleInputChange }) => {
  return (
    <>
      <input
        onChange={handleInputChange}
        name='шифр'
        type='text'
        placeholder='Шифр'
        value={state['шифр'] || ''}
      />
      <input
        onChange={handleInputChange}
        name='назва'
        type='text'
        placeholder='Назва'
        value={state['назва'] || ''}
      />
      <input
        onChange={handleInputChange}
        name='автор'
        type='text'
        placeholder='Автор'
        value={state['автор'] || ''}
      />
      <input
        onChange={handleInputChange}
        name='рік_видання'
        value={state['рік_видання'] || ''}
        type='date'
        placeholder='Рік'
      />
      <input
        onChange={handleInputChange}
        name='ціна'
        value={state['ціна'] || ''}
        type='text'
        placeholder='Ціна'
      />
      <input
        onChange={handleInputChange}
        name='кількість'
        value={state['кількість'] || ''}
        type='text'
        placeholder='Кількість'
      />
      <input
        className={styles.big}
        onChange={handleInputChange}
        name='код_видавництва'
        value={state['код_видавництва'] || ''}
        type='text'
        placeholder='Код видавництва'
      />
    </>
  );
};

const ReaderFields = ({ state, handleInputChange }) => {
  return (
    <>
      <input
        onChange={handleInputChange}
        name='код'
        value={state['код'] || ''}
        type='text'
        placeholder='Код'
      />
      <input
        onChange={handleInputChange}
        name='ініціали'
        value={state['ініціали'] || ''}
        type='text'
        placeholder='Ініціали'
      />
      <input
        onChange={handleInputChange}
        name='адреса'
        value={state['адреса'] || ''}
        type='text'
        placeholder='Адреса'
      />
      <input
        onChange={handleInputChange}
        name='телефон'
        value={state['телефон'] || ''}
        type='text'
        placeholder='Телефон'
      />
    </>
  );
};

const BorrowingFields = ({ state, handleInputChange }) => {
  return (
    <>
      <input
        className={styles.big}
        onChange={handleInputChange}
        name='дата'
        value={state['дата'] || ''}
        type='date'
        placeholder='Дата'
      />
      <input
        onChange={handleInputChange}
        name='розпис'
        value={state['розпис'] || ''}
        type='text'
        placeholder='Розпис'
      />
      <input
        onChange={handleInputChange}
        name='код_читача'
        value={state['код_читача'] || ''}
        type='text'
        placeholder='Код читача'
      />
    </>
  );
};

const ProductionFields = ({ state, handleInputChange }) => {
  return (
    <>
      <input
        className={styles.big}
        onChange={handleInputChange}
        name='код'
        value={state['код'] || ''}
        type='text'
        placeholder='Код'
      />
      <input
        onChange={handleInputChange}
        name='назва'
        value={state['назва'] || ''}
        type='text'
        placeholder='Назва'
      />
      <input
        onChange={handleInputChange}
        name='місто'
        value={state['місто'] || ''}
        type='text'
        placeholder='Місто'
      />
    </>
  );
};

const InputForm = ({ tab, create }) => {
  const [state, setState] = useState({});

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setState({});

    create()(state);
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      {tab === 0 && (
        <BookFields state={state} handleInputChange={handleInputChange} />
      )}
      {tab === 1 && (
        <ReaderFields state={state} handleInputChange={handleInputChange} />
      )}
      {tab === 2 && (
        <BorrowingFields state={state} handleInputChange={handleInputChange} />
      )}
      {tab === 3 && (
        <ProductionFields state={state} handleInputChange={handleInputChange} />
      )}
      <input type='submit' />
    </form>
  );
};

const createCell = (val, i) => {
  const value = /\d{4}-\d{2}-\d{2}/.test(val) ? val.slice(0, 10) : val;
  return <td key={i}>{value}</td>;
};

const Table = ({ tab, tableData, create, onDelete }) => {
  const scheme = tableData?.length > 0 ? Object.keys(tableData[0]) : null;
  return (
    <div>
      {tab === -1 ? (
        <h2>Виберіть таблицю</h2>
      ) : (
        <>
          <InputForm tab={tab} create={create} />
          {tableData?.length > 0 && (
            <table className={styles.Table}>
              <thead>
                <tr>
                  {scheme.map((header) => {
                    return (
                      <th key={header}>
                        <h4>{header}</h4>
                      </th>
                    );
                  })}
                  <th>Видалити</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((obj, i) => {
                  return (
                    <tr key={i}>
                      {Object.values(obj).map(createCell)}
                      <td>
                        <button
                          onClick={() => {
                            if (confirm('Бажаєте видалити?')) onDelete()(obj);
                          }}
                        >
                          x
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default Table;
