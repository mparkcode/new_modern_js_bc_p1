// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       const pages = {
//         '/users': [
//           {id: 1, username:'Bilbo'},
//           {id: 2, username:'Frodo'}
//         ],
//         'about': 'This is the about Page'
//       }
//       const data = pages[url]
//       if(data) resolve({status: 200, data});
//       reject({status: 404})
//     },1000)
//   })
// }
// fakeRequest('/users').then((res)=>{
//   console.log(res.status)
//   console.log(res.data)
//   console.log("Request Worked")
// }).catch((res)=>{
//   console.log(res.status)
//   console.log("Request Failed")
// })

const fakeRequest = (url) => {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      const pages = {
        '/users': [
          {id:1, user: 'Bilbo'},
          {id:2, user: 'Frodo'},
        ],
        '/about': 'This is the about page'
      }
      const data = pages[url]
      if(data) resolve({status: 200, data});
      reject({status: 404})
    },1000)
  })
}

fakeRequest('/users').then((res)=>{
  console.log(res.status, res.data)
}).catch((res)=>{
  console.log(res.status)
})
fakeRequest('/about').then((res)=>{
  console.log(res.status, res.data)
}).catch((res)=>{
  console.log(res.status)
})
fakeRequest('/aboffut').then((res)=>{
  console.log(res.status, res.data)
}).catch((res)=>{
  console.log(res.status)
})