import React, {useState} from 'react'
import { API_KEY } from '../../config.js'
import axios from 'axios'

export default ({answer, update}) => {
  const [reported, setReported] = useState(false)
  const [votedHelpful, setVotedHelpful] = useState(false)

  const handleReported = () => {
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${answer.id}/report`,
      headers: {
        Authorization: API_KEY
      }
    })
    .then(setReported(true))
  }

  function handleHelpful(e) {
    e.preventDefault()
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${answer.id}/helpful`,
      headers: {
        Authorization: API_KEY,
      },
    })
    .then(update())
  }
  const username = answer.answerer_name === 'Seller' ? <strong>Seller</strong> : answer.answerer_name
  const helpfulLink = <span> Helpful? <a href="#" onClick={handleHelpful}>Yes</a> ({answer.helpfulness})</span>
  const report = reported ? <span> Reported </span> : <span onClick={handleReported}> Report </span>

  return (
    <>
      {answer.body} <br />
      {answer.photos.length > 0 &&
        answer.photos.map(photo => <img key={answer.id} src={photo} alt="" />)
      }
      <p>by {answer.answerer_name}, {new Date(answer.date).toDateString()} | {helpfulLink} | {report}</p>
    </>
  )
}