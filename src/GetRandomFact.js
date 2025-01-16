
const CAT_API = `https://catfact.ninja/fact`

export function GetRandomFact(){
    return fetch (CAT_API)
    .then(res => res.json())
    .then(data => {
      const { fact }= data
      return fact
})
}