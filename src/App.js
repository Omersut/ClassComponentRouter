import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Omer from './components/omer';

class App extends Component {
  render() { 
    return (
<Routes>
  <Route path="/"  element={<Main/>} />
  <Route path="/omer" element={<Omer/>} />
</Routes>
     
    );
  }
}
 
export default App;