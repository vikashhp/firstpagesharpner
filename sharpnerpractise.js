

// console.log(document)
// console.log(document.domain);
// console.log(document.URL)
// console.log(document.title)
// // document.title=123
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.doctype)
// console.log(document.forms)
// console.log(document.link)
// console.log(document.images)

// // Get element by id

// console.log(document.getElementById('header-title'))

// let head=document.getElementById('header-title');
// head.innerText="Good bye"
// head.textContent="Hello"
// head.innerHTML='<h1>Chunnu</h1>'
// head.style.borderBottom="solid 5px red"

// // Get element by className

// let items=document.getElementsByClassName('list-group-item');

// console.log(items)
// items[1].textContent='hello';
// items[1].style.fontWeight='bold';
// // items[1].style.backgroundColor='red';

// for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor="#f4f4f4"
// }


// // Get element by Tag Name 
// let li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[2])
// li[1].textContent='Hello'
// li[2].textContent='Sun'
// li[2].style.backgroundColor="red"
// li[3].style.backgroundColor="yellow"

// for(let i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor="#ccc"
// }

// // queryselector

// let header=document.querySelector('#main-header');

// header.style.borderBottom='solid 5px red';


// let input=document.querySelector('input');
// input.value='Hello World'

// let submit=document.querySelector('input[type="submit"]');
// submit.value='SEND'

// let item=document.querySelector('.list-group-item');
// item.style.color='red';

// let lastitem=document.querySelector('.list-group-item:last-child');
// lastitem.style.color="blue"

// let seconditem=document.querySelector('.list-group-item:nth-child(2)');

// seconditem.style.color="orange"

// let thirditem=document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.color="#f333";

// // Query Selector All

// let title=document.querySelectorAll('.title');
// // console.log(title)

// // title[0].textContent="Hello"

// let odd=document.querySelectorAll('li:nth-child(odd)')
// let even=document.querySelectorAll('li:nth-child(even)')

// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="red";
//     even[i].style.backgroundColor="orange"
// }



// let items=document.querySelector('#items');

// parentElement

// console.log(items.parentElement)

// items.parentElement.style.backgroundColor="red"

// console.log(items.parentElement.parentElement.parentElement)

// childNode

// console.log(items.childNodes)

// console.log(items.children)
// console.log(items.children[1])
// items.children[1].style.backgroundColor="red"

// let items=document.querySelector('#items');

// FirstChild

// console.log(items.firstChild)

// console.log(items.childNodes)
// console.log(items.firstElementChild)

// items.firstElementChild.textContent='Hello'

// lastchild
// console.log(items.lastChild)

// console.log(items.lastElementChild)

// items.lastElementChild.style.backgroundColor="red"

// console.log(items.nextSibling)

// console.log(items.nextElementSibling)


// console.log(items.previousSibling)

// console.log(items.previousElementSibling)

// // create Element

// let newDiv=document.createElement('div');

// // Add class
// newDiv.className='hello';

// // Add id
// newDiv.id='hello1'

// // Add Attribute
// newDiv.setAttribute('title' , 'hello div')


// // console.log(newDiv)

// let newDivText=document.createTextNode('Hello world');

// newDiv.appendChild(newDivText)

// let container=document.querySelector('header.container');
// let h1=document.querySelector('header h1');
// console.log(newDiv);

// newDiv.style.fontSize='30px';

// container.insertBefore(newDiv,h1)

// console.log("chunnu")

let form=document.getElementById('addform');
let itemlist=document.getElementById('items');
let filter=document.getElementById('filter');


form.addEventListener('submit',adddata);
itemlist.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems)

function adddata(e)
{
    e.preventDefault();
    let data=document.getElementById('data').value;

    let li=document.createElement('li');

    li.className='litag';
    li.appendChild(document.createTextNode(data));

    // Create Delete Button
    let deletebtn=document.createElement('button');

    deletebtn.className='btn btn-danger btn-sm-float-right delete';

    deletebtn.appendChild(document.createTextNode('X'))

    li.appendChild(deletebtn)

    //Create a edit button
    let edit=document.createElement('button');
    edit.className='btn btn-danger btn-sm-float-right edit';
    edit.appendChild(document.createTextNode('Edit'));
    li.appendChild(edit)

    itemlist.appendChild(li);
   
}
//Delete items

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You sure ?')){
        let li=e.target.parentElement;
        itemlist.removeChild(li)
    }
  }
}

// filter items
function filterItems(e){
    //get text
    let text=e.target.value.toLowerCase();
    //get list
    let items=itemlist.getElementsByTagName('li');
    
    // convert to array
    Array.from(items).forEach(function(item){
   
        let itemname=item.firstChild.textContent;
        if(itemname.toLocaleLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none'
        }
    })
}






























