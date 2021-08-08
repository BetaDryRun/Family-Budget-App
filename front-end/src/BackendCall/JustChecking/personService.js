// Just a file for checking... To be deleted

import axios from 'axios'

const baseUrl = 'http://localhost:3005/persons'

const getAll = () => {
    const req = axios.get(baseUrl)

    return req.then((response) => {
        return response.data
    })

}

const addPerson = (newPerson) => {
    const req = axios.post(baseUrl, newPerson)

    return req.then((response) => {
        return response.data
    })
}

const deletePerson = (toDeletePerson) => {

    const req = axios.delete(`${baseUrl}/${toDeletePerson.id}`, toDeletePerson)
    // console.log(req)
    return req.then((response) => {
        // console.log(response)
        // Here response.data will be empty as we have deleted the data.
        return response.data
    })
}

const updatePerson = (toUpdatePerson) => {
    
    const req = axios.put(`${baseUrl}/${toUpdatePerson.id}`, toUpdatePerson)

    return req.then((response) => {
        return response.data
    })
}

export default {getAll, addPerson, deletePerson, updatePerson};