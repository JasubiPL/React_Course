import { useFetch, useCounter } from '../hooks'
import { Loading } from '../03-examples/components/Loading'
import { Quote } from '../03-examples/components/Quote'

export const Layout = () =>{
  const { counter, increment} = useCounter(1)
  
  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)
  const {name, species, image} = !!data && data



  return(
    <>
      <h1>BreakinngBad Quots</h1>
      <hr />

      {
      isLoading ? <Loading /> : <Quote image={ image } name={ name } species={ species } />
      }

      <button className='btn btn-primary' disabled={ isLoading } onClick={() => increment(1) }>
        Next Quote
      </button>
    </>
  )
}