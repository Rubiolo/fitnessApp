import React from 'react'
import Card from './Cards'

function ExerciseList(props) {
    return (
        <div>
            {props.exercises.map((exercise) => {
                return (
                    <Card
                        title={exercise.title}
                        description={exercise.description}
                        img={exercise.img}
                        topColor={exercise.topColor}
                        bottomColor={exercise.bottomColor}
                    />
                )
            })
            }
        </div>

    )
}
export default ExerciseList