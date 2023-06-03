

// const posts=[
//     {title:'Post one', body:'this is post one'},
//     {title:'Post two', body:'this is post two'}
// ]

// function getPost(){
//     setTimeout(()=>{
//         let output="";
//         posts.forEach((post)=>{
//             output+=`<li>${post.title}</li>`
//         })
//         document.body.innerHTML=output
//     })
// }

// function updateLastUserActivityTime()
// {
//     return new Date()
// }

// function createPost(post){
//     setTimeout(()=>{
//     posts.push(post)

//     },2000)
// }
// createPost({title:'Post three',body:'this is post three'},getPost)


// const promise1=Promise.resolve('Hello world');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>

// setTimeout(resolve,2000,'Goodbye')
// )

// Promise.all([promise1,promise2,promise3]).then(values=> console.log(values))
// Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])

// let promisetocleanroom=new Promise((resolve,reject)=>{

//     let clean=true;
//     if(!clean){
//         resolve('Clean')
//     }else{
//         reject('Not Clean')
//     }
// })

// promisetocleanroom
// .then((fromresolve)=>{
//     console.log(fromresolve)
// })
// .catch((fromreject)=>{
//    console.log(fromreject)
// })

// let cleanroom=function(){
//     let pr1=new Promise((resolve,reject)=>{
//         resolve('Room is cleaned')
//     })
//     return pr1
// }

// let x=cleanroom();
// x.then((fromresolve)=>{
//     console.log(fromresolve)
// })

// let removegarbage=function(){
//     let pr2=new Promise((resolve,reject)=>{
//         resolve('Garbage is removed')
//     })
//     return pr2;
// }

// let y=removegarbage();
// y.then((garbage)=>{
//     console.log(garbage)
// })

// let winicecream=function(){
//     let pr3=new Promise((resolve,reject)=>{
//        resolve('Won Icecream')
//     })
//     return pr3
// }

// let z=winicecream();
// z.then((fromresolve)=>{
//    console.log(fromresolve)
// })

// cleanroom().then((fromresolve)=>{
//     console.log(fromresolve);
//     removegarbage().then((fromresolve)=>{
//         console.log(fromresolve);
//     winicecream().then((fromresolve)=>{
//         console.log(fromresolve)
//     }) 
//     })
// })

// call backs

// const posts=[{title:'Post one',body:'This is post one',createdAt:new Date().getTime()},
//        {title:'Post two',body:'This is post two',createdAt:new Date().getTime()}
// ];

// // console.log(posts[1])

// function getPost(){
//     setTimeout(()=>{
//     posts.forEach((post)=>{
//      console.log(post.title)
//     })  
//     },1000)
// }

// function createPost(post){
//    setTimeout(()=>{
//     posts.push(post)
//     console.log(posts)
//    },2000)
// }

// function create4thpost(post){
//     setTimeout(()=>{
//      posts.push(post)
//      console.log(post.title)
//     },3000)
// }
// // getPost()

// // createPost({title:'Post three'})
// create4thpost({title:'Post4',body:'this is 4th post'})


// the main problem which call back solve

//   function create3rdpost(x){
//     setTimeout(()=>{
//         console.log('Post three')
//         if(x){
//           x()
//         }
        
//     },2000)
//   }

//   function create4thpost(){
//     setTimeout(()=>{
//       console.log('Post Four')
//     },1000)
//   }

//   create3rdpost(create4thpost)


// Creating a callback hell yourself
// function create3rdpost(x){
//     setTimeout(()=>{
//         console.log('Post Three')
//         if(x){
//             x()
//         }
//     },3000)
// }

// function create4thpost(){
//     setTimeout(()=>{
//         console.log('Post four')
//     },3000)
// }

// function create5thpost(){
//     setTimeout(()=>{
//         console.log('Post Five')
//     },1000)
// }

// create3rdpost(create5thpost)
// create4thpost()

// Lets make Promises - Part 1

// const posts=[{title:'Post one'},{title:'Post two'}]

// function printpost(){
//     posts.forEach((post)=>{
//         console.log(post.title)
//     })
// }

// function create3rdpost(){
//     let pr3=new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          posts.push({title:'Post three'})
//          resolve(posts);
//         //  console.log(posts)
//       },3000)
//     })
//     return pr3
// }

// function create4thpost(){
//     let pr4=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          posts.push({title:'Post four'})
//          resolve()
//         },2000)
//     })

//     return pr4
// }


// smart way to write 

// create3rdpost().then(()=>{
//     create4thpost().then(()=>{
//         printpost()
//     })
// })

// create4thpost().then(()=>{
//     create3rdpost().then(()=>{
//         printpost()
//     })
// })

// let x=create3rdpost();
// x.then((po)=>{
//   console.log(po)
// })

// Lets make promises Part 2

// const posts=[{title:'Post one'},{title:'Post two'}];

// function printpost(){
//     posts.forEach((post)=>{
//        console.log(post.title)
//     })
// }

// function create3rdpost(){
//    return new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//     posts.push({title:'Post three'})
//     resolve();
//    },3000)

//    })
// }

// function create4thpost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//       posts.push({title:'Post four'})
//       resolve()
//         },2000)
//     })
// }

// function create5thpost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         posts.push({title:'Post five'})
//         resolve()
//         },2000)
//     })
// }

// create3rdpost().then(()=>{
//     create4thpost().then(()=>{
//         create5thpost().then(()=>{
//             printpost()
//         })
        
//     })
// })

// Lets break Promise Part 1

// const posts=[{title:'Post one'},{title:'Post two'}];

// function printpost(){
//     posts.forEach((post)=>{
//      console.log(post.title)
//     })
// }

// function create3rdpost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         posts.push({title:'Post three'});
//         resolve()
//         },3000)
//     })
// }

// function create4thpost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push({title:'Post four'});
//             resolve()
//         },2000)
//     })
// }

// function deletepost(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//        posts.pop();
//        resolve()
//         },1000)
//     })
// }

// create3rdpost().then(()=>{
//     deletepost().then(()=>{
//         create4thpost().then(()=>{
//             printpost()
//         })
//     })
// })

//Lets break promises part 2

// const posts = [{title: 'POST1'}];
// //Do not touch this function
// function create2ndPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST2'});
//             resolve()
//         }, 3000)
//     }) 
// }

// function create3rPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST3'});
//             resolve();
//         }, 2000)
//     }) 
// }

// function deletepost(){
//     return new Promise((reslove,reject)=>{
//         setTimeout(()=>{
//         if(posts.length>0){
//         const popelement=posts.pop();
//         reslove(popelement)
//         }else{
//             reject('error')
//         }   
//         },1000)
//     })
// }

// create2ndPost()
// .then(()=>{
//   deletepost().then((d1)=>{
//  console.log(d1.title)
//  create3rPost().then(()=>{
//     deletepost().then((d2)=>{
//         console.log(d2.title)
//         deletepost().then((d3)=>{
//             console.log(d3.title)
//         deletepost().catch((err)=>{
//             console.log(err)
//         })
//         })
//     })
//  })
//   })
// })

