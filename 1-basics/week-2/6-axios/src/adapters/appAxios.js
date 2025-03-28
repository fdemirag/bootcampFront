import axios from "axios";



const appAxios=axios.create({
    headers:{
        myCustomHeader: "TokenKey-123?=Bey"
    },
    baseURL:"http://localhost:3000"
})

appAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("Request",config)
    return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//  
 } );

 axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("Response",response)
    return response;
  }
  
//   , function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
 );

export default appAxios;