import { useFetch, useCounter } from '../hooks'
import { Loading } from './components/Loading'
import { Quote } from './components/Quote'

export const MultipleCustomHooks = () =>{
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