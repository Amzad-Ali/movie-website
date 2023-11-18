import { useState,useEffect } from 'react'

export default function useFetch(apiPath,queryTerm=" ") {

    const [movieData,setmovieData] = useState([]);

    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=735ae5b6bde3bfe410c670d344314405&query=${queryTerm}`;

    useEffect(() => {
        async function fetchData(){
            const response = await fetch(url)
            const json = await response.json()
            setmovieData(json.results)
        }
        fetchData();
    },[url]);

  return  [movieData] 
  
}
