import React, {useState, useEffect} from 'react';

const ReviewModal = ({metaData, submit, cancel, product}) => {
  console.log('product prop: ', metaData);
  const [formData, setFormData] = useState({
    summary: '',
    question: '',
    nickname: '',
    email: '',
    rating: 5,
    body: '',
    recommend: '',
    photos: ''


  })
  const [nicknameIsValid, setNicknameIsValid] = useState()
  const [emailIsValid, setEmailIsValid] = useState()
  const [summaryIsValid, setSummaryIsValid] = useState();
  const [bodyIsValid, setBodyIsValid] = useState();
  const [recommendIsValid, setRecommendIsValid] = useState();
  const [photoIsValid, setPhotoIsValid] = useState();


  const validateForm = () => {
    validateQuestion() &&
    validateNickname() &&
    validateEmail() &&
    submit()
  }

  const validateSummary = () => {
    if (formData.summary.length > 4) {
      setSummaryIsValid(true);
      return true;
    } else {
      setSummaryIsValid(false);
    }
  }
  const validateBody = () => {
    if (formData.body.length > 4) {
      setBodyIsValid(true);
      return true;
    } else {
      setBodyIsValid(false);
    }
  }

  const validateRecommend = () => {
    console.log('formdata recommend: ', formData.recommend);
    if ((formData.recommend === 'true') || (formData.recommend === 'false')) {
      setRecommendIsValid(true);
    } else {
      setRecommendIsValid(false);
    }
  }

  const validateNickname = () => {
    if (formData.nickname.length < 2) {
      setNicknameIsValid(false)
      return false
    }
    setNicknameIsValid(true)
    return true
  }
  const validateEmail = () => {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(formData.email.match(mailformat)){
      setEmailIsValid(true)
      return true
    }
    setEmailIsValid(false)
    return false
  }

  const validatePhoto = () => {
    var photosAreValid = true;
    if (formData.photos.length) {
      var photos = formData.photos.split(' ');
      console.log('Photos array: ', photos);
      for (var i = 0; i < photos.length; i++) {
        console.log('single photo: ', photos[i]);
        if (photos[i].match(/(https?:\/\/.*\.(?:png|jpg))/i) != null) {
          console.log('Photo url valid!');
        } else {
          photosAreValid = false;
        }
      }
    }
    console.log('Photos are valid? ', photosAreValid);
    if (photosAreValid) {
      setPhotoIsValid(true);
      return true;
    } else {
      setPhotoIsValid(false);
      return false;
    }
  }

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="modal" onClick={cancel}>
      <div className="modal-content">
        <h1>Add Your Review for {product.name} </h1>
        <h3>About the {product.name}</h3>
        <form>
          <label>
            Summary:
            <input name="summary" type="text" placeholder="Your summary here" value={formData.summary}
            onChange={onChange} maxLength="200" onBlur={validateSummary}/>
            {summaryIsValid === false && <span className="alert">Summary cannot be empty</span>}
          </label>
          <br />
          <label>
            Your rating:
            <select name="rating" value={formData.rating} onChange={onChange}>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </label>
          <br />
          <label>
            Body:
            <input name="body" type="text" placeholder="Your review body here" value={formData.body}
            onChange={onChange} maxLength="1000" onBlur={validateBody}/>
            {bodyIsValid === false && <span className="alert">Body cannot be empty</span>}
          </label>
          <br />
          <label>
            Do you recommend this product?
            <select  name="recommend" value={formData.recommend} onChange={onChange} onBlur={validateRecommend}>
              <option value="null">Select Option</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {recommendIsValid === false && <span className="alert">Please select an option</span>}
          </label>
          <br />
          <br />
          <label>
            What's your username?
            <input
              name="nickname"
              type="text"
              placeholder="Example: jackson11!"
              value={formData.nickname}
              maxLength="60"
              onChange={onChange}
              onBlur={validateNickname}
            />
            {nicknameIsValid === false && <span className="alert">Nickname cannot be empty</span>}
            <p>For privacy reasons, do not use your full name or email address</p>
          </label>
          <label>
            Your email:
            <input
              name="email"
              type="text"
              placeholder="Why did you like the product or not?"
              value={formData.email}
              maxLength="60"
              onChange={onChange}
              onBlur={validateEmail}
            />
            {emailIsValid === false && <span className="alert">email is not valid</span>}
            <p>For authentication reasons, you will not be emailed</p>
          </label>

          <label>
            Add any number of photo URLs here, seperated by a single space:
            <input name="photos" type="text" maxLength="1000" onChange={onChange} onBlur={validatePhoto}/>
            {photoIsValid === false && <span className="alert">Photos are not valid</span>}
          </label>

          <label>
            Rate the characteristics for this object:

          </label>

          <button onClick={validateForm}>submit</button>
          {/*<button>cancel</button>*/}
        </form>
      </div>
    </div>
  )
}


export default ReviewModal;