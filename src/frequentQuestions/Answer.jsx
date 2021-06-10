import React from 'react'

export default ({answer}) => {
  const username = answer.answerer_name === 'Seller' ? <strong>Seller</strong> : answer.answerer_name
  const helpfulLink = <span> Helpful? <a href="#">Yes</a> ({answer.helpfulness})</span>

  return (
    <>
      {answer.body} <br />
      {answer.photos.length > 0 &&
        answer.photos.map(photo => <img key={answer.id} src={photo} alt="" />)
      }
      <p>by {answer.answerer_name}, {new Date(answer.date).toDateString()} | {helpfulLink} | Report</p>
    </>
  )
}