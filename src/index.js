import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { Router, Header } from './components';
import { CheckResumeRouteContextProvider } from './context/checkResumeRoute';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CheckResumeRouteContextProvider>
        <Header />
        <div className='paddingB80'/>
        <main> 
          <section className='sectionInMain__'>
            <Router /> 
          </section>
        </main>
      </CheckResumeRouteContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
