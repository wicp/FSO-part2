import axios from 'axios'

const ENDPOINT = 'http://localhost:3001/persons'

const dbservice = {
getAll: () => {
    return axios.get(ENDPOINT)
},

create: person => {
    return axios.post(ENDPOINT, person)
},

delete: person => {
    return axios.delete(ENDPOINT+'/'+person.id)
},

update: person => {
    return axios.put(ENDPOINT+'/'+person.id,person)
}
}

export default dbservice