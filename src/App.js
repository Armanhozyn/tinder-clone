import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
      <Header/>
      <TinderCards></TinderCards>
      <SwipeButtons></SwipeButtons>
    </div>
  );
}

export default App;
