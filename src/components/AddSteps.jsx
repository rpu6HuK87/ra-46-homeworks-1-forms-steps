import React, {useState, useEffect} from 'react'

export const AddSteps = ({addTraining, forEdit}) => {
  const [formData, setFormData] = useState({
    date: '',
    distance: ''
  })
  useEffect(() => {
    if (forEdit) setFormData(forEdit)
  }, [forEdit])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (formData.date && formData.distance) {
      addTraining(formData)
      setFormData({
        date: '',
        distance: ''
      })
    }
  }

  const handleInputChange = ({target}) => {
    let {name, value} = target
    //if (value && name === 'distance') value = parseFloat(value).toFixed(1)
    setFormData((prevForm) => ({...prevForm, [name]: value}))
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input
          name="date"
          type="date"
          onChange={handleInputChange}
          value={formData.date}
        />
      </div>

      <div>
        <label htmlFor="distance">Пройдено км</label>
        <input
          name="distance"
          type="number"
          onChange={handleInputChange}
          value={formData.distance}
        />
      </div>

      <button type="submit">OK</button>
    </form>
  )
}
