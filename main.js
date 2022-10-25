

const myform=document.querySelector('#my-form')
const Inputname=document.querySelector('#name')
const emailInput=document.querySelector('#email')
const msg=document.querySelector('.msg')
const userList=document.querySelector('#users')



myform.addEventListener('submit',onSubmit)

function onSubmit(e)
{
    e.preventDefault()
    
        const name=e.target.name.value;
        const email=e.target.email.value;
    
        const obj={
            name,
            email,
        }
        localStorage.setItem(`${obj.email}`,JSON.stringify(obj))
        
        if(Inputname.value==="" || emailInput.value==="")
        {
            msg.classList.add('error')
            msg.innerHTML='please enter all field';
            setTimeout(()=>msg.remove(),3000)
        }
        else{
            const li=document.createElement('li')
            //add delete and edit 
            const del=document.createElement('button')
            const edt=document.createElement('button')
             del.appendChild(document.createTextNode('delete'))
             del.className='delete'
             edt.appendChild(document.createTextNode('EDIT'))
           
                

            // li.appendChild(document.createTextNode(`${Inputname.value} ${emailInput.value}`))

            li.appendChild(document.createTextNode(`${obj.name}`))
            li.appendChild(document.createTextNode(" "))
            li.appendChild(document.createTextNode(`${obj.email}`))
            li.appendChild(del)
            li.appendChild(edt)
            userList.appendChild(li)


            // clearfiled
            Inputname.value='';
            emailInput.value='';
        }

      
    }

  userList.addEventListener('click',remove)

  function remove(e)
  {
    e.preventDefault()
     if(e.target.classList.contains('delete'))
     {
        li=e.target.parentElement
        let key=li.childNodes[2].textContent
        // key=JSON.stringify(key)
        // console.log(key)
        localStorage.removeItem(key)
        userList.removeChild(li)
     }
  }
   

   
    
   


