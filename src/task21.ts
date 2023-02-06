import axios from 'axios'

axios.defaults.baseURL = 'https://httpbin.org/';

type ResponseBody = {
  args: null,
  headers: string[];
  origin: string,
  url: string,
};

async function getApi() {
  const {data, status} = await axios.get<ResponseBody>(
    '/get',
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );

  console.log(JSON.stringify(data, null, 4));

  // "response status is: 200"
  console.log('response status is: ', status);

};

getApi();
