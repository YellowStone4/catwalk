import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarCount from './individualReviewComps/StarCount.jsx';
import ReviewDate from './individualReviewComps/ReviewDate.jsx';
import PhotoDisplay from './individualReviewComps/PhotoDisplay.jsx';
import style from './reviewStyles.js';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import styles from './review.css'
const {API_KEY} = require('../../../../config.js');

const Review = (props) => {
  const [helpfulCount, setHelpfulCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [helpClicked, setHelpClicked] = useState(false);

  const helpfulClick = () => {
    if (helpClicked === false) {
      var options = {
        method: 'put',
        headers: {
          'Authorization': API_KEY
        },
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/' + props.review.review_id + '/helpful'
        // body: {
        //   'review_id': props.product.id
        // }
      }
      axios(options).then((response) => {
        props.setCounter(Math.random());
        setHelpClicked(true);

      }).catch((err) => {
        console.log('Err from put request: ', err);
        props.setCounter(Math.random());

      })
    }
  }

  const reportClick = () => {
    var options = {
      method: 'put',
      headers: {
        'Authorization': API_KEY
      },
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/' + props.review.review_id + '/report'
    }
    axios(options).then((response) => {
      props.setCounter(Math.random());

    }).catch((err) => {
      console.log('Err from report: ', err);
    })
  }

  useEffect(() => {
    setHelpfulCount(props.review.helpfulness)
  }, [props, timer]);




  return (
    <div style={{margin: '30px', backgroundImage: 'linear-gradient(white, rgba(251, 147, 0, 0.45))', padding:'9px', border:'2px solid rgba(251, 147, 0, 0.5)', boxShadow:'7px 4px rgb(52, 63, 86)'}}>
      <div style={{clear: 'both', margin: '5px, 0px'}}>
        <div style={{float: 'left'}}>
          <StarCount key={props.review.review_id} id={props.review.review_id} starNumber={props.review.rating}/>
        </div>
        <div style={{display: 'inline'}} style={{float: 'right'}}>
          <span style={{display: 'inline'}}>{props.review.reviewer_name},  </span>
          <ReviewDate date={props.review.date}/>
        </div>
      </div>


      <div style={{clear: 'both', marginTop: '5px', padding: '1px 0px'}}>
        <hr style={{color:'rgb(52, 63, 86)', boxShadow:'1px 1px rgba(251, 147, 0, 0.5)'}}/>
        <h2 style={{textShadow:'1px 3px rgba(251, 147, 0, 0.1)'}}>{props.review.summary}</h2>

      </div>

      <p style={{fontSize: '18px', margin: '5px 0px 15px 0px', width:'70%'}}>{props.review.body}</p>


      {props.review.recommend ? <div style={{margin: '15px 0px'}}>
        <span><FontAwesomeIcon icon={faCheck} /></span>
        <span>  I recommend this product</span>
      </div> : <span></span>}

      {props.review.photos.length ?
      props.review.photos.map((photo) => {
        return <PhotoDisplay key={photo.id} photo={photo} />
      })
      : <span></span>}
      {props.review.response !== null &&
        <div style={{backgroundColor: '#D3D3D3', margin: '5px 0px', padding: '3px 10px'}}>
          <h4 style={{fontWeight: 'bold', margin: '10px 0px'}}>Response:</h4>
          <p>{props.review.response}</p>
        </div>
      }


      <div>
        <span style={{fontSize: '16px'}}>Helpful?  </span>
        <span style={{textDecoration: 'underline'}}className="button" onClick={helpfulClick}>Yes   ({helpfulCount})  </span>
        <span style={{textDecoration: 'none'}}>   |  </span>
        <span style={{textDecoration: 'underline'}} className="button" onClick={reportClick}>   Report</span>
      </div>

    </div>
  )
}

export default Review;