import React, {useState} from 'react'

export default ({product, question, submit}) => {
  const [formData, setFormData] = useState({
    body: '',
    name: '',
    email: '',
    photos: []
  })

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = (e) => {
    e.preventDefault()
    validateEmail() &&
    submit(formData)
  }

  const [emailIsValid, setEmailIsValid] = useState()
  const validateEmail = () => {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(formData.email.match(mailformat)){
      setEmailIsValid(true)
      return true
    }
    setEmailIsValid(false)
    return false
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Submit your Answer</h1>
        <h3>{product.name}: {question.question_body}</h3>
        <form onSubmit={validateForm}>
          <label>
            *Your Answer
            <input type="text" maxLength="1000" name="body" value={formData.body} onChange={onChange} required/><br/>
          </label>
          <label>
            *What is your nickname
            <input type="text" maxLength="60" placeholder="Example: jackson11!" name="name" value={formData.name} onChange={onChange} required/>
          </label>
          <p>For privacy reasons, do not use your full name or email address</p>
          <label>
            *Your email
            <input
              type="text"
              maxLength="60"
              placeholder="Example: jack@email.com"
              name="email"
              value={formData.email}
              onChange={onChange}
              required />
          </label>
          {emailIsValid === false && <span className="alert">email is not valid</span>}
          <p>For authentication reasons, you will not be emailed</p>
          <label>
            Upload your photos
            <input type="file" placeholder="photo 1" name="photos"/><br />
          </label>
          <input type="submit"/>
        </form>
      </div>
    </div>
  )
}