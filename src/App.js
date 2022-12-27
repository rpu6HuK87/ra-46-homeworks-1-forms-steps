import './App.css'
import React, {useState} from 'react'

import {AddSteps} from './components/AddSteps'
import {ListSteps} from './components/ListSteps'

function App() {
  const [trainings, setTrainings] = useState([])
  const [forEdit, setForEdit] = useState(false)

  const addTraining = (training) => {
    setTrainings((prev) => [...prev, training])
  }

  return (
    <div className="container">
      <div>
        <AddSteps forEdit={forEdit} addTraining={addTraining} />
        <ListSteps trainings={trainings} setForEdit={setForEdit} />
      </div>
    </div>
  )
}

export default App
