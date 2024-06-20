import axios from 'axios'
import './Trending.css'
import React, { useEffect, useState } from 'react'
import CustomPagination from '../../components/Pagination/CustomPagination'
import SingleContent from '../../components/SingleContent/SingleContent'

const Trending = () => {
  const [page, setPage] = useState(1)
  const [content, setContent] = useState("")

  const fetchTrending = async () => {

    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
    setContent(data.results);
  }
  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page])
  return (
    <div>
      <h1 className='pageTitle'>Trending</h1>
      <div className='trending'>
        {
          content && content.map((c) => <SingleContent key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.first_release_date}
            media_type={c.media_type}
            vote_average={c.vote_average}
          />)
        }
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  )
}

export default Trending
