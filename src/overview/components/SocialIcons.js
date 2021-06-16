import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';
import './Sass/styles.scss';

function SocialIcons() {
  return (
    <div className='socialWrapper'>
        <div className='socialIcon twitter'>
            <div className='nameDisplay'>Share</div>
            <span><FontAwesomeIcon icon = {faTwitter} /></span>
        </div>
        <div className='socialIcon facebook'>
            <div className='nameDisplay'>Share</div>
            <a href="https://www.facebook.com/sharer/sharer.php?u=example.org" target="_blank">
                <span><FontAwesomeIcon icon = {faFacebook} /></span>
            </a>

        </div>
        <div className='socialIcon pinterest'>
            <div className='nameDisplay'>Share</div>
            <span><FontAwesomeIcon icon = {faPinterest} /></span>
        </div>

    </div>
  )
}

export default SocialIcons;