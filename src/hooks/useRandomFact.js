import { useState, useEffect } from 'react'
import { GetRandomFact } from '../GetRandomFact'

export function useRandomFact (){
    const [fact, setCatFact] = useState()
  
    const randomFact =() => {
      GetRandomFact().then(setCatFact);
    }
  
    useEffect(() => {
      randomFact()
    }, [])
  
    return { fact, randomFact }
  }