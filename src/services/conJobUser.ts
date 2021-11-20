import axios from 'axios'
import { createMany} from './userService'

export const getUsersFromRadomUser = async () => {
  var numberOfRequests = 2
  
  while (numberOfRequests--){
    axios.get('https://randomuser.me/api/?results=3')
    .then(async (res) => {
      await createMany(res.data.results)
    })
    .catch((error) => {
      console.log('erro ao buscar dados: ', error)
    })
  }
  
}