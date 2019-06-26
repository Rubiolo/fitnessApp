import React from 'react'
import FatalError from './500'
import Exercises from './Exercises'
import Loading from '../components/Loading'
import useFetch from '../hooks/useFetch'
import url from './config'

const ExercisesContainer = () => {
    const {data, loading, error} = useFetch(`${url}/exercises`)
    
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <FatalError />
    }

    return <Exercises
        data={data}
    />
}
export default ExercisesContainer
