
let btn=document.querySelector('.form')

btn.addEventListener('submit',storedata)
let arr=JSON.parse(localStorage.getItem('data'))||[]
let main_div=document.getElementById('display');

function storedata(e)
{
    e.preventDefault();
    // let return_data=JSON.parse(localStorage.getItem('data')||[]);
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('number').value;
   
    
    
    let obj={
        name,email,phone
    }
    // arr.push(obj)
     
    // localStorage.setItem('data',JSON.stringify(arr))

    axios.post("https://crudcrud.com/api/936b58827b324ec2bab30d628ba71273/studentdata",obj)
    .then((res)=>{
        console.log(res)
        showinscreen(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })

    



   
    
    // console.log(return_data)


}

function showinscreen(data){

    let name=data.name;
    let email=data.email;
    let phone=data.phone;

    let div=document.createElement('li');

    
    div.appendChild(document.createTextNode("name-->"+name+"  "));

    div.appendChild(document.createTextNode("Email-->"+email+"  "));

    div.appendChild(document.createTextNode("Phone-->"+phone+"  "));


    main_div.appendChild(div)


}
