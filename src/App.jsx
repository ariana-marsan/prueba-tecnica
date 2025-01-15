import { useEffect, useState } from 'react';
import './App.css';

 const CAT_API = `https://catfact.ninja/fact`
//  const PRE_CAT_API = `https://cataas.com/cat/says/`

function App() {
  const [fact, setCatFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch (CAT_API)
    .then(res => res.json())
    .then(data => {
      const { fact }= data
      setCatFact(fact)

      const word = fact.split(' ', 1)[0]
      console.log(word)

      fetch (`https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red`)
      .then(res => res)
      .then(res => {
        const url  = res.url
        console.log(url)
        setImageUrl(url)
      })
    })
  }, [])

  return (
    <div className="App">
      <header>
         App de Gatitos
      </header>
      <p>{fact}</p>
      <img src={`${imageUrl}`} alt="cat" /> {console.log(`${imageUrl}`)}
    </div>
  );
}

export default App;
