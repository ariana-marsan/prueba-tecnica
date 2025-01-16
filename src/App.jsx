
import './App.css';
import { useCatImage } from './hooks/useCatImage';
import { useRandomFact } from './hooks/useRandomFact';


function App() {
  const { fact, randomFact } = useRandomFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    randomFact();
  }

  return (
    <div className="App">
      <header>
         App de Gatitos
      </header>
      <button onClick={handleClick}>refresh</button>
      <p>{fact}</p>
      <img src={`${imageUrl}`} alt="cat" />
    </div>
  );
}

export default App;
