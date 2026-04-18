import React, { useState, useEffect, useRef } from 'react'
import './Titlecard.css'
import { Link } from 'react-router-dom'

const Titlecard = ({ title, category }) => {
  const cardref = useRef(null)
  const [apidata, setapidata] = useState([])

  const handleWheel = (event) => {
    event.preventDefault()
    cardref.current.scrollLeft += event.deltaY
  }

  useEffect(() => {
    const keywords = [
      "batman",
      "avengers",
      "love",
      "war",
      "king",
      "dark",
      "hero",
      "space"
    ]

    const randomKeyword =
      keywords[Math.floor(Math.random() * keywords.length)]

    fetch(`https://www.omdbapi.com/?s=${randomKeyword}&apikey=3d0e7468`)
      .then(res => res.json())
      .then(res => {
        if (res.Search) {
          setapidata(res.Search)
        }
      })
      .catch(err => console.error(err))

    const el = cardref.current
    if (!el) return

    el.addEventListener('wheel', handleWheel, { passive: false })

    return () => el.removeEventListener('wheel', handleWheel)
  }, [category])

  return (
    <div className='tile'>
      <h2>{title ? title : "Popular on Netflix"}</h2>

      <div className="card_list" ref={cardref}>
        {apidata.map((card, key) => (
          <Link to={`/player/${card.imdbID}`} className="card" key={key}>
            <img
              src={
                card.Poster !== "N/A"
                  ? card.Poster
                  : "https://via.placeholder.com/500x280"
              }
              alt=""
            />
            <p>{card.Title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Titlecard