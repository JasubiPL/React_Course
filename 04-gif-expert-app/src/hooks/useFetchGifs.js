import { useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useEffect } from "react";

export const useFetchGifs = ( category ) =>{

  const [gifData, setGifData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getGifsData = async() =>{
    const gifsData = await getGifs( category )
    // console.log(gifsData)
    setGifData(gifsData)
    setTimeout(() =>{

      setIsLoading(false)
    }, 1000)

  }

  useEffect(() =>{
    getGifsData()
  },[])
  
  return {
    gifData,
    isLoading
  }
}