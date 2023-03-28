import React from 'react'
import { img_300, unavailable } from '../../config/config'
import './SingleContent.css'

const SingleContent = ({id, poster, date, title, media_type, vote_average}) => {
  return (
    <div className = 'media'>
        <img src = {poster ? `${img_300}/${poster}` : unavailable}
              alt = {title} />
            <strong className = 'title'>{title}</strong>
            <strong>{media_type === 'tv' ? "TV Series" : "Movie"}</strong>
            <div className = 'subTitle'><strong>{date}</strong></div>
    </div>
  )
}

export default SingleContent
