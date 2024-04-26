import { data } from '../../../data'
import { useState } from 'react'
// import React from 'react'
const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const removeItem = (id) => {
    console.log(id)
    // const newPerson = people.filter((person) => person.id !== id)
    setPeople(people.filter((person) => person.id != id))
  }
  const removeAll = () => {
    setPeople([])
  }
  return (
    <div>
      {people.map((person) => {
        // console.log(person)
        const { id, name } = person
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        )
      })}
      <button
        type="button"
        style={{ marginTop: '2rem' }}
        className="btn"
        onClick={removeAll}
      >
        Clear All
      </button>
    </div>
  )
}

export default UseStateArray
