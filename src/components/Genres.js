import { Chip } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'

const Genres = ({genres, setGenres, selectedGenres, setSelectedGenres, type, setPage}) => {

  const handleAdd = (genre) =>{
    setGenres(genres.filter((g)=>  genre.id !== genre))
    setSelectedGenres([...selectedGenres, genre])
    setPage(1);
  }
  const handleRemove = (genre) =>{
    setSelectedGenres(selectedGenres.filter((selected)=>selected.id !== genre.id))
    setGenres([...genres,genre])
    setPage(1)
  }

    const fetchGenres = async () => { 
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        
        setGenres(data.genres)
    }

    useEffect(()=>{
      fetchGenres()
      // eslint-disable-next-line
    },[genres])

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        selectedGenres.map((genre)=>{
        return(
          <Chip label={genre.name} 
          style={{margin: 4, backgroundColor:"black", color:"white"}}
          key={genre.id} 
          size="small" 
          color="light" 
          clickable 
          onDelete={() => handleRemove(genre)}
          />
        )
      })}
      {genres &&
        genres.map((genre)=>{
        return(
          <Chip label={genre.name} 
          style={{margin: 4, backgroundColor:"black", color:"white"}} 
          key={genre.id} 
          size="small" 
          clickable 
          onClick={()=> handleAdd(genre)}
          />
        )
      })}
    </div>
  )
}

export default Genres
