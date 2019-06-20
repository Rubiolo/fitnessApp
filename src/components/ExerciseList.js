import React from 'react'
import Card from './Cards'

const ExerciseList = ({ exercises }) => (
    <React.Fragment>
        {exercises.map((exercise) => (
            <Card
                key={exercise.id}
                title={exercise.title}
                description={exercise.description}
                img={exercise.img}
                leftColor={exercise.leftColor}
                rightColor={exercise.rightmColor}
            />
        ))}
        }
    </React.Fragment>
)

export default ExerciseList