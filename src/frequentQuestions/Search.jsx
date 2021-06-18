import React, {useState} from 'react'

export default ({search}) => {
  const handleChange = (e) => {
    if(e.target.value.length >= 3) {
      search(e.target.value)
    } else {
      search('')
    }
  }
  return (
    <form className="search-question">
      <input type="text" placeholder="Have a Question? Search For Answers..." onChange={handleChange}/>
    </form>
  )
}