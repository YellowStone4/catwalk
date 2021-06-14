import React, {useState} from 'react'

export default ({search}) => {
  const [searchInput, setSearchInput] = useState('')

  const handleChange = (e) => {
    setSearchInput(e.target.value)
    if(searchInput.length >= 2) {
      search(searchInput)
    } else {
      search('')
    }

  }
  return (
    <input type="text" placeholder="Search For Question" onChange={handleChange}/>
  )
}