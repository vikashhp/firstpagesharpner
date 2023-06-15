
let btn=document.querySelector('.form');
btn.addEventListener('submit',postdata);


async function getdata(){
     
    let data1= await axios.get('https://crudcrud.com/api/2a525e5b8f4b4ddf83a5aec00e4d0a4b/storedata');

    try{
        let sum=data1.data.reduce(function(acc,el){
            return acc+Number(el.ProductPrice)
           },0)
           console.log(sum)
    
           document.getElementById('sum').innerHTML=`Total price is ${sum}`
    }catch(err){
        console.log(err)
    }

}
























window.addEventListener('DOMContentLoaded',async ()=>{
   let get= await axios.get('https://crudcrud.com/api/2a525e5b8f4b4ddf83a5aec00e4d0a4b/storedata')

    try{
      
        // console.log(get.data)
        
        for(let i=0;i<get.data.length;i++){
               showinscreen(get.data[i])
        }
        getdata()
        
                   


    }catch(err){
        console.log(err)
    }
})












async function postdata(e){
    e.preventDefault();
    
    let ProductName=document.getElementById('productname').value;
    let ProductPrice=document.getElementById('productprice').value;

    let obj={
        ProductName,
        ProductPrice
    }

   let post=await axios.post('https://crudcrud.com/api/2a525e5b8f4b4ddf83a5aec00e4d0a4b/storedata',obj);

   try{
    
       showinscreen(post.data)

       getdata()

    //    console.log(post.data)


   }catch(err){
    console.log(err)
   }


}

function showinscreen(data){
    const parent=document.getElementById('display');
    const child=`<li id=${data._id}>Price is Rs.${data.ProductPrice} and  ProductName is ${data.ProductName}
                 <button onclick=deletedata('${data._id}')>Delete</button>
    
    </li>`

    parent.innerHTML=parent.innerHTML+child

}

async function deletedata(data){
   
   const deleteditem= await axios.delete(`https://crudcrud.com/api/2a525e5b8f4b4ddf83a5aec00e4d0a4b/storedata/${data}`)
    try{
       removeproduct(data)
       getdata()

    }catch(err){
        console.log(err)
    }
    
}

function removeproduct(data){
    
    const parent=document.getElementById('display');
    const child=document.getElementById(data);

    if(child){
        parent.removeChild(child)
    }

}




