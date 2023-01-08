import React from 'react'

export const ListSteps = ({trainings, edit, del}) => {
  //console.log(trainings)
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
        {trainings.map((training) => (
          <tr key={training.date}>
            <td>{training.date.split('-').reverse().join('.')}</td>
            <td>{training.distance}</td>
            <td>
              <button onClick={() => edit(training)}>Редактировать</button>
              <button onClick={() => del(training)}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
