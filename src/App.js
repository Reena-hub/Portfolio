import React from 'react';
import Routers from './Routers'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <React.Fragment>
       <ToastContainer theme="light" toastStyle={{ textTransform: 'capitalize' }} autoClose={2000} position="top-right" />
      <Routers />
    </React.Fragment>
  );
}

export default App;
