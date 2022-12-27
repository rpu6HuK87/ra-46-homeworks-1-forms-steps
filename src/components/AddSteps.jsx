import React, {useState} from 'react'

export const AddSteps = ({addTraining, forEdit}) => {
  const [formData, setFormData] = useState(
    forEdit
      ? forEdit.training
      : {
          date: '',
          distance: ''
        }
  )

  const handleSubmit = (evt) => {
    evt.preventDefault()

    addTraining(formData)
    setFormData({
      date: '',
      distance: ''
    })
  }

  const handleInputChange = ({target}) => {
    const {name, value} = target
    setFormData((prevForm) => ({...prevForm, [name]: value}))
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input name="date" onChange={handleInputChange} value={formData.date} />
      </div>

      <div>
        <label htmlFor="distance">Пройдено км</label>
        <input
          name="distance"
          onChange={handleInputChange}
          value={formData.distance}
        />
      </div>

      <button type="submit">OK</button>
    </form>
  )
}
