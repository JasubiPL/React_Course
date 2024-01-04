import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategories = (submittedCategory) =>{
    if(categories.includes(submittedCategory)) return;
    
    setCategories([ submittedCategory, ...categories ])
  }

  return(
    <>
      <h1>Gif Expert App</h1>

      <AddCategory onAddCategories={onAddCategories} categories={categories}/>

      <ol>
        { categories.map(category => {
          return <li key={ category }>{ category }</li>
        }) }
      </ol>
    </>
  )
}