import React, { useState } from 'react'

function Form(props) {
  const [firstName, setFirstName] = useState('Linda')
  const [lastName, setLastName] = useState('Ndanyi')
  const [submittedData, setSubmittedData] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      firstName: firstName,
      lastName: lastName,
    }
    const dataArray = [...submittedData, formData]
    setSubmittedData(dataArray)
    setFirstName('')
    setLastName('')
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleFirstNameChange} value={firstName} />
        <input type='text' onChange={handleLastNameChange} value={lastName} />
        <button type='submit'>Submit</button>
      </form>
      <h3>{listOfSubmissions}</h3>
    </>
  )
}

export default Form
