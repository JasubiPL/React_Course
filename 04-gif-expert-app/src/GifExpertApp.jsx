import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Javascript'])

  const onAddCategories = (submittedCategory) =>{
    if(categories.includes(submittedCategory)) return;
    
    setCategories([ submittedCategory, ...categories ])
  }

  const clean = () =>{
    setCategories([])
  }

  return(
    <>
      <h1>Gif Expert App</h1>

      <AddCategory onAddCategories={onAddCategories} categories={categories} cleanCategories={clean}/>

      { 
        categories.map(category => (
          <GifGrid key={category} category={category}/>
        )) 
      }
    </>
  )
}