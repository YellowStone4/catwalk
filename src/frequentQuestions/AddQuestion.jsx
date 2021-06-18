import React, {useState} from 'react'

export default ({submit, cancel, product}) => {
  const [formData, setFormData] = useState({
    question: '',
    nickname: '',
    email: ''
  })
  const [questionIsValid, setQuestionIsValid] = useState()
  const [nicknameIsValid, setNicknameIsValid] = useState()
  const [emailIsValid, setEmailIsValid] = useState()

  const validateForm = () => {
    validateQuestion() &&
    validateNickname() &&
    validateEmail() &&
    submit(formData)
  }

  const validateQuestion = () => {
    if (formData.question.length < 2) {
      setQuestionIsValid(false)
      return false
    }
    setQuestionIsValid(true)
    return true
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

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Add Your Question</h1>
        <h3>About the {product.name}</h3>
        <form>
          <label>
            *Your Question:
            <input
              name="question"
              type="text"
              placeholder="Your Question"
              value={formData.question}
              maxLength="1000"
              onChange={onChange}
              onBlur={validateQuestion}
              required
            />
            </label>
            {questionIsValid === false && <span className="alert">Question cannot be empty</span>}
          <br />
          <label>
            *What is your nickname:
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
            </label>
            <p id="modal-info">For privacy reasons, do not use your full name or email address</p>
          <label>
            *Your email:
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
            </label>
            <p id="modal-info">For authentication reasons, you will not be emailed</p>

          <button className="question-button" onClick={validateForm}>Submit</button>
          <button className="question-button cancel" onClick={cancel}>Cancel</button>
          {/*<button>cancel</button>*/}
        </form>
      </div>
    </div>
  )
}