import React, {useState} from 'react'

export default ({submit, cancel, product}) => {
  const [question, setQuestion] = useState('')
  const [questionIsValid, setQuestionIsValid] = useState(true)
  const [nickname, setNickname] = useState('')
  const [nicknameIsValid, setNicknameIsValid] = useState(true)
  const [email, setEmail] = useState('')
  const [emailIsValid, setEmailIsValid] = useState(true)

  const validate = () => {
    if (question.length === 0) {
      return setQuestionIsValid(false)
    }
  }

  const validateEmail = (email) => {
    return false
  }
  return (
    <div className="modal" onClick={cancel}>
      <div className="modal-content">
        <h1>Add Your Question</h1>
        <h3>About the {product.name}</h3>
        <form>
          <label>
            *Your Question:
            <input name="question" type="text" placeholder="Your Question" value={question} maxlength="1000"/>
            {!questionIsValid && <p>question cannot be empty</p>}
          </label>
          <label>
            *What is your nickname:
            <input name="nickname" type="text" placeholder="Example: jackson11!" value={nickname} maxlength="60"/>
            <p>For privacy reasons, do not use your full name or email address</p>
          </label>
          <label>
            *Your email:
            <input name="email" type="text" placeholder="Why did you like the product or not?" value={email} maxlength="60" />
            <p>For authentication reasons, you will not be emailed</p>
          </label>

          <button onClick={validate}>submit</button>
          <button>cancel</button>
        </form>
      </div>
    </div>
  )
}