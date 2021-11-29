import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { Router, Header } from './components';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className='paddingB80'/>
      <main> 
        <section className='sectionInMain__'>
          <Router /> 
        </section>
      </main>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
