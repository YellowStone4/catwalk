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

  const validate = () => {
    if (question.length === 0) {
      setQuestionIsValid(false)
    }
    if (nickname.length === 0) {
      setNicknameIsValid(false)
    }
    if (!validateEmail(email)) {
      return setEmailIsValid(false)
    }
    submit()
  }

  const validateEmail = (email) => {
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
            />
            {!nicknameIsValid && <p className="alert">Nickname cannot be empty</p>}
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
            />
            {!emailIsValid && <p className="alert">email is not valid</p>}
            <p>For authentication reasons, you will not be emailed</p>
          </label>

          <button onClick={validate}>submit</button>
          <button>cancel</button>
        </form>
      </div>
    </div>
  )
}