import React from 'react';
import './App.css';
import ProdTable from './productTable';
import 'bootstrap/dist/css/bootstrap.css';
function App(props) {
  console.log(props);
  return (
    <div className="App">
      <ProdTable table = {props.Products} />
    </div>
  );
}

export default App;
