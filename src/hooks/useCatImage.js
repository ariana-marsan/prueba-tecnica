import { useState, useEffect } from 'react'


export function useCatImage ({ fact }){
    const [imageUrl, setImageUrl] = useState()
  
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
  
      return { imageUrl }
  }
  