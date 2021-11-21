import axios from 'axios';
import { createMany} from './userService';

export const getUsersFromRadomUser = async () => {
  var numberOfRequests = parseInt(process.env.NUMBER_OF_REQUEST_RANDOM_USERS);

  while (numberOfRequests--){
    axios.get(`https://randomuser.me/api/?results=${process.env.NUMBER_OF_USERS_FROM_RANDOM_USERS}`)
    .then(async (res) => {
      await createMany(res.data.results);
    })
    .catch((error) => {
      console.log('erro ao buscar dados');
    });
  }
}