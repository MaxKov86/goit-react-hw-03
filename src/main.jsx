import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import 'modern-normalize';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const fiteredContactList = (array, name) => {
//   const filtered = array.reduce((acc, arr) => {
//     if (arr.name.toLowerCase().includes(name)) {
//       acc.push(arr);
//     } else {
//       acc.push(arr);
//     }
//     return acc;
//   }, []);

//   return filtered
// };
