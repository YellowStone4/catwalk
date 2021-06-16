import React from 'react'

export default ({product, question, submit}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Submit your Answer</h1>
        <h3>{product.name}: {question.question_body}</h3>
        <form>
          <label>
            *Your Answer
            <input type="text" maxLength="1000"/><br/>
          </label>
          <label>
            *What is your nickname
            <input type="text" maxLength="60" placeholder="Example: jackson11!"/>
          </label>
          <p>For privacy reasons, do not use your full name or email address</p>
          <label>
            *Your email
            <input
              type="text"
              maxLength="60"
              placeholde="Example: jack@email.com"
              required />
          </label>
          <p>For authentication reasons, you will not be emailed</p>
          <label>
            Upload your photos
            <input type="text" placeholder="photo 1"/><br />
            <input type="text" placeholder="photo 2"/><br />
            <input type="text" placeholder="photo 3"/><br />
            <input type="text" placeholder="photo 4"/><br />
            <input type="text" placeholder="photo 5"/><br />
          </label>
          <input type="submit"/>
        </form>
      </div>
    </div>
  )
}