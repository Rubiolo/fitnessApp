import React from 'react'
import Card from './Cards'

const ExerciseList = ({ exercises }) => (
    <div>
        {exercises.map((exercise) => (
            <Card
                title={exercise.title}
                description={exercise.description}
                img={exercise.img}
                topColor={exercise.topColor}
                bottomColor={exercise.bottomColor}
            />
        ))}
        }
    </div>
)

export default ExerciseList