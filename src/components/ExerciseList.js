import React from 'react'
import Card from './Cards'

const ExerciseList = ({ exercises }) => (
    <React.Fragment>
        {exercises.map((exercise) => (
            <Card
                key={exercise.id}
                {...exercise} 
            />
        ))}
        }
    </React.Fragment>
)

export default ExerciseList