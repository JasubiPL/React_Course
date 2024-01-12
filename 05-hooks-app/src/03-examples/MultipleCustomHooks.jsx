import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () =>{
  const { data, isLoading, hasError } = useFetch('https://rickandmortyapi.com/api/location/1')
  console.log({data, isLoading, hasError})

  return(
    <>
      <h1>BreakinngBad Quots</h1>
      <hr />
    </>
  )
}