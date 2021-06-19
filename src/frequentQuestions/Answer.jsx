import React, {useState} from 'react'
import { API_KEY } from '../../config.js'
import axios from 'axios'

export default ({answer, update}) => {
  const [reported, setReported] = useState(false)
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

  const [votedHelpful, setVotedHelpful] = useState(false)
  function handleHelpful(e) {
    !votedHelpful && (
      axios({
        method: 'put',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${answer.id}/helpful`,
        headers: {
          Authorization: API_KEY,
        },
      })
      .then(update)
      .then(setVotedHelpful(true))
    )
  }
  const username = answer.answerer_name === 'Seller' ? <strong>Seller</strong> : answer.answerer_name
  const helpfulLink = <span> Helpful? <a onClick={handleHelpful}><u> Yes </u></a> ({answer.helpfulness})</span>
  const reportLink = reported ? <span> Reported! </span> : <a onClick={handleReported}><u> Report </u></a>

  return (
    <>
      <span>{answer.body}</span>
      {answer.photos.length > 0 &&
        answer.photos.map((photo, index) => <img key={index} src={photo} alt="" />)
      }
      <footer>by {answer.answerer_name}, {new Date(answer.date).toDateString()} | {helpfulLink} | {reportLink}</footer><hr/>
    </>
  )
}