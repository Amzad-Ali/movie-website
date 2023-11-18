import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../component/Card'
import { useSearchParams } from 'react-router-dom'

export default function Search({apiPath}) {
const [searchParam] = useSearchParams();
const queryTerm = searchParam.get("q");

const [movieData] = useFetch(apiPath,queryTerm)

  return (
    <main>
       <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">       
          { movieData.map((movie) => (
            <Card key={movie.id} movieData={movie} />
          )) }          
        </div>
      </section>
    </main>
  )
}
