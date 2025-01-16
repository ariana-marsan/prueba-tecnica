import { useEffect, useState } from 'react';
import './App.css';
import { GetRandomFact } from './GetRandomFact';

//  const CAT_API = `https://catfact.ninja/fact`
//  const PRE_CAT_API = `https://cataas.com/cat/says/`

function App() {
  const [fact, setCatFact] = useState()
  const [imageUrl, setImageUrl] = useState()
      
  useEffect(() =>
   {GetRandomFact().then(setCatFact)} ,
  [])

  useEffect(()=>{ 


    if(!fact) return

    const word = fact.split(' ', 1)[0]

    fetch (`https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red`)
      .then(res => {
        const url  = res.url
        console.log(url)
        setImageUrl(url)
      })
    },[fact])

  const handleClick = () => {
    GetRandomFact().then(setCatFact)
  }

  return (
    <div className="App">
      <header>
         App de Gatitos
      </header>
      <button onClick={handleClick}>refresh</button>
      <p>{fact}</p>
      <img src={`${imageUrl}`} alt="cat" /> {console.log(`${imageUrl}`)}
    </div>
  );
}

export default App;
