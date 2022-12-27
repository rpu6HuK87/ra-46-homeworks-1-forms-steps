import React from 'react'

export const ListSteps = ({trainings, setForEdit}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {trainings.map((training, id) => (
          <tr key={training.date}>
            <td>{training.date}</td>
            <td>{training.distance}</td>
            <td>
              <button onClick={() => setForEdit({id, training})}>
                Редактировать
              </button>
              <button>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
