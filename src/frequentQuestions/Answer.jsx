import React from 'react'

export default ({answer}) => {
  return (
    <>
      <p><strong>A: </strong>{answer.body}</p>
      <p>by {answer.answerer_name} | Helpful? Yes({answer.helpfulness}) | Report</p>
    </>
  )
}