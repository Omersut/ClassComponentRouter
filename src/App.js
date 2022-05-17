import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/main';
import San from './components/san';

class App extends Component {
  render() { 
    return (
<Routes>
  <Route path="/"  element={<Main/>} />
  <Route path="/san" element={<San/>} />
</Routes>
     
    );
  }
}
 
export default App;