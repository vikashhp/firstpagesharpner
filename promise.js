

const posts=[
    {title:'Post one', body:'this is post one'},
    {title:'Post two', body:'this is post two'}
]

function getPost(){
    setTimeout(()=>{
        let output="";
        posts.forEach((post)=>{
            output+=`<li>${post.title}</li>`
        })
        document.body.innerHTML=output
    })
}

function updateLastUserActivityTime()
{
    return new Date()
}

function createPost(post){
    setTimeout(()=>{
    posts.push(post)

    },2000)
}
createPost({title:'Post three',body:'this is post three'},getPost)


const promise1=Promise.resolve('Hello world');
const promise2=10;
const promise3=new Promise((resolve,reject)=>

setTimeout(resolve,2000,'Goodbye')
)

Promise.all([promise1,promise2,promise3]).then(values=> console.log(values))
Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])

