import { useState } from "react"

export const GifExpertApp = () => {

  const [category, setCategory] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategories = () =>{
    setCategory([ 'Valorant', ...category ])
  }

  return(
    <>
      <h1>Gif Expert App</h1>
      <button onClick={ onAddCategories }> Agregar </button>

      <ol>
        { category.map(category => {
          return <li key={ category }>{ category }</li>
        }) }
      </ol>
    </>
  )
}