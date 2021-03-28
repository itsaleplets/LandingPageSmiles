import axios from 'axios';

const baseUrl = 'https://606106adac47190017a7067f.mockapi.io/';

const userEmail = async (value) => axios
.post(`${baseUrl}/email`, {
  value
})
.then((res) => ( console.log(res.data)))
.catch((err) => (console.log(err)));

export default userEmail;