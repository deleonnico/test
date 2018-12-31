import React, {Component} from 'react';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <NavBar />
        <MainPage />
      </div>
    );
  }
}

export default App;