import React from 'react'

export default ({answer}) => {
  const style = {
    width: '120px',
    height: '60px'
  }
  return (
    <>
      <p>{answer.body}</p>
      {answer.photos.length > 0 &&
        answer.photos.map(photo => <img key={answer.id} style={style} src={photo} alt="" />)
      }
      <p>by {answer.answerer_name}, {new Date(answer.date).toDateString()} | Helpful? Yes({answer.helpfulness}) | Report</p>
    </>
  )
}