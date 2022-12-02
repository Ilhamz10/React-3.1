import React from 'react';
import './App.css';
import Header from './header/Header';
import Wine from './main/Wine';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Wine
          title='Le Grand Noir'
          description='France, red, 0.75 l.'
          rating={3.6}
          isInStock={false}
        />
        <Wine
          title='Le Grand Noir'
          description='France, red, 1.75 l.'
          rating={4.6}
          isInStock
        />
        <Wine
          title='Le Grand Noir'
          description='France, white, 0.75 l.'
          rating={2.6}
          isInStock
        />
      </div>
    )
  }

}

export default App;
