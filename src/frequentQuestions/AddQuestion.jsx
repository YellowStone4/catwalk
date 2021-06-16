import React, {useState} from 'react'

export default ({submit, cancel, product}) => {
  const [formData, setFormData] = useState({
    question: '',
    nickname: '',
    email: ''
  })
  // const [question, setQuestion] = useState('')
  const [questionIsValid, setQuestionIsValid] = useState(true)
  // const [nickname, setNickname] = useState('')
  const [nicknameIsValid, setNicknameIsValid] = useState(true)
  // const [email, setEmail] = useState('')
  const [emailIsValid, setEmailIsValid] = useState(true)

  const validateQuestion = () => {
    if (formData.question.length === 0) {
      setQuestionIsValid(false)
    }
    else setQuestionIsValid(true)
  }
  const validateNickname = () => {
    if (formData.nickname.length === 0) {
      setNicknameIsValid(false)
    }
    else setNicknameIsValid(true)
  }
  const validateEmail = (e) => {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(e.target.value.match(mailformat)){
      setEmailIsValid(true)
    }
     else setEmailIsValid(false)
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
            {!questionIsValid && <span className="alert">Question cannot be empty</span>}
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
            {!nicknameIsValid && <span className="alert">Nickname cannot be empty</span>}
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
            {!emailIsValid && <span className="alert">email is not valid</span>}
            <p>For authentication reasons, you will not be emailed</p>
          </label>

          <button onClick={submit}>submit</button>
          <button>cancel</button>
        </form>
      </div>
    </div>
  )
}