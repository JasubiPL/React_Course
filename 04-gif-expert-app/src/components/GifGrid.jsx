import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) =>{
  
  const { gifData, isLoading } = useFetchGifs( category )
  // console.log({gifData, isLoading})
  
  return (
    <>
      <h3>{ category }</h3>
      <div className="card-grid">
        {isLoading ? <div className='loading'></div> :
          gifData.map(gif =>(
            <GifItem title={gif.title} image={gif.url} key={gif.id} />
          ))
        }
      </div>
      
    </>
  )
}