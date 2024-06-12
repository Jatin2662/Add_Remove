import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// yeh pakka hai

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('Enter items');
  const [change, setChange] = useState('black'); // error field ka color badlene ke liye

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    add();
  };

  const add = () => {

    if (list.includes(item)) {
      setChange('red') // error par color change
      setErrorMessage(`Item "${item}" is already there! Add another item.`);
      setItem('');
      return;
    } else if (item.trim() !== '') {
      setChange('black')  // error nahi color change
      setList([...list, item]);
      setItem('');
      setErrorMessage('Enter items');
    }
  };

  const handleRemoveItem = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };

  return (
    <div className="box">
      <section>
        <div className="updation">
          <form className="form" onSubmit={handleSubmitForm}>
            <div className="fields">
              <input
                type="text"
                placeholder="item"
                value={item}
                className="field"
                onChange={handleChange}
              />
            </div>
            <div className="buttons">
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
        
        {<div className="error" style={{color : change, maxwidth : '10vh' }}>{errorMessage}</div>}

        <div className="list">
          {!list.length ? (
            <h1>Empty</h1>
          ) : (
            <ul>
              {list.map((item, index) => (
                <li key={index}>
                  <div>{item}</div>
                  <button className="remove-btn" onClick={() => handleRemoveItem(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}

