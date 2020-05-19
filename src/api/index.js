import axios from 'axios';

export default
   axios.create({
      baseURL: 'https://apiv2.bitcoinaverage.com/constants/exchangerates/{market}',
      timeout: 1000
   });