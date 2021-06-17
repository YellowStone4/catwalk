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
    <div className="modal" onClick={cancel}>
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
            />
            {questionIsValid === false && <span className="alert">Question cannot be empty</span>}
          </label>
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
            <p>For privacy reasons, do not use your full name or email address</p>
          </label>
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
            <p>For authentication reasons, you will not be emailed</p>
          </label>

          <button onClick={validateForm}>submit</button>
          {/*<button>cancel</button>*/}
        </form>
      </div>
    </div>
  )
}