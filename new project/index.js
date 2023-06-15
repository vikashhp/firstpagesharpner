
// console.log('chunnu')

let button=document.querySelector('.form');
button.addEventListener('submit',postdata);


window.addEventListener('DOMContentLoaded',async ()=>{


    let get =await axios.get('https://crudcrud.com/api/add6691da8da459e9202a1c22592934a/storedata')

    try{
        
        for(let i=0;i<get.data.length;i++){
            showproducts(get.data[i])
        }

    }catch(err){
        console.log(err)
    }

})














async function postdata(e){
    e.preventDefault()
    

    let productname=document.getElementById('productname').value;
    let productprice=document.getElementById('productprice').value;
    let Category=document.getElementById('Category').value;

    
    let obj={
        productname,
        productprice,
        Category
    }
  
  let post= await axios.post('https://crudcrud.com/api/add6691da8da459e9202a1c22592934a/storedata',obj);

 try{
//    console.log(post)

   showproducts(post.data)
    
   



 }catch(err){
   console.log(err)
 }


}








function showproducts(data){
    
   
    if(data.Category==='Food'){
        var parent=document.getElementById('food');
        const child=`<li id=${data._id}>Price is Rs.${data.productprice} and  ProductName is ${data.productname} and
        category is ${data.Category}
                    <button onclick=deletedata('${data._id}','${data.Category}')>Delete</button>
       
       </li>`
   
       parent.innerHTML=parent.innerHTML+child


    }else if(data.Category==='Electronics'){
        var parent=document.getElementById('electronics');
        const child=`<li id=${data._id}>Price is Rs.${data.productprice} and  ProductName is ${data.productname} and
        category is ${data.Category}
                    <button onclick=deletedata('${data._id}','${data.Category}')>Delete</button>
       
       </li>`
   
       parent.innerHTML=parent.innerHTML+child

    }else if(data.Category==='Skincare'){
     
        var parent=document.getElementById('skincare');
        const child=`<li id=${data._id}>Price is Rs.${data.productprice} and  ProductName is ${data.productname} and
        category is ${data.Category}
                    <button onclick=deletedata('${data._id}','${data.Category}')>Delete</button>
       
       </li>`
   
       parent.innerHTML=parent.innerHTML+child




    }


}



async function deletedata(data,category){

    let deletedata= await axios.delete(`https://crudcrud.com/api/add6691da8da459e9202a1c22592934a/storedata/${data}`)

    try{
        removedata(data,category)
        // console.log(category)

        // console.log(data)
    }catch(err){
        console.log(err)
    }

   

}


function removedata(data,category){

    
   
  

    if(category==='Food'){
     let parent=document.getElementById('food');
    const child=document.getElementById(data);

    if(child){
        parent.removeChild(child)
    }
    }

    
    else if(category==='Skincare'){
        let parent=document.getElementById('skincare');
       const child=document.getElementById(data);
   
       if(child){
           parent.removeChild(child)
       }
       }

       else if(category==='Electronics'){
        let parent=document.getElementById('electronics');
       const child=document.getElementById(data);
   
       if(child){
           parent.removeChild(child)
       }
       }
  
  
}





