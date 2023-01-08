import './App.css'
import React, {useState} from 'react'

import {AddSteps} from './components/AddSteps'
import {ListSteps} from './components/ListSteps'

function App() {
  const [trainings, setTrainings] = useState([])
  const [forEdit, setForEdit] = useState(false)

  const edit = (training) => {
    setForEdit(training)
  }
  const del = (training) => {
    //console.log('del', training)
    setTrainings((prev) => prev.filter((tr) => tr.date !== training.date))
  }

  const addTraining = (training) => {
    //console.log(training)
    let newarr = trainings
    const isset = forEdit
      ? newarr.findIndex((tr) => tr.date === forEdit.date)
      : newarr.findIndex((tr) => tr.date === training.date)

    if (isset >= 0) {
      if (!forEdit)
        training.distance = parseFloat(
          +training.distance + +newarr[isset].distance
        ).toFixed(1)
      else setForEdit(false)
      newarr.splice(isset, 1)
    }
    newarr = [...newarr, training]

    setTrainings(
      newarr.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )
    )
  }

  return (
    <div className="container">
      <div>
        <AddSteps forEdit={forEdit} addTraining={addTraining} />
        <ListSteps trainings={trainings} edit={edit} del={del} />
      </div>
    </div>
  )
}

export default App
