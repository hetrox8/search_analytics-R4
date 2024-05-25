import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from '../components/SearchBox';
import Dashboard from '../components/Dashboard';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <SearchBox />
      <Dashboard />
    </div>,
    document.getElementById('root')
  );
});
