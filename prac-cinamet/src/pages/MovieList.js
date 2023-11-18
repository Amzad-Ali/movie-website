import Card from '../component/Card';
import useFetch from '../hooks/useFetch';

export default function MovieList ({apiPath}) {
  const [movieData] = useFetch(apiPath);

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7 '>
        <div className='flex flex-wrap justify-start other:justify-evenly' >
       {movieData.map((data) => (
        <Card key={data.id} movieData={data}/>
       ))}
        </div>
      </section>
    </main>
  )
}
