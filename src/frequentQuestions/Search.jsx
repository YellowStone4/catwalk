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
    <input type="text" placeholder="Search For Questions" onChange={handleChange}/>
  )
}