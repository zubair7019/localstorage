
// const btn=document.querySelector('.btn')
// btn.addEventListener('mouseover',(e)=>{
//     e.preventDefault()
//     document.querySelector('#my-form').style.background='yellow'
// })

// const btn=document.querySelector('.btn')
// btn.addEventListener('mouseout',(e)=>{
//     e.preventDefault()
//     document.querySelector('#my-form').style.background='yellow'
// })

const myform=document.querySelector('#my-form')
const Inputname=document.querySelector('#name')
const emailInput=document.querySelector('#email')
const msg=document.querySelector('.msg')
const userList=document.querySelector('#users')



myform.addEventListener('submit',onSubmit)

function onSubmit(e)
{
    e.preventDefault()
    
        
        // localStorage.setItem('name',Inputname.value )
        // localStorage.setItem('email',emailInput.value)
        const name=e.target.name.value;
        const email=e.target.email.value;
        localStorage.setItem('name',name);
        localStorage.setItem('email',email);

        const obj={
            name,
            email,
        }
        localStorage.setItem('userDetail',JSON.stringify(obj))
        

       
        if(Inputname.value==="" || emailInput.value==="")
        {
            msg.classList.add('error')
            msg.innerHTML='please enter all field';
            setTimeout(()=>msg.remove(),3000)
        }
        else{
            const li=document.createElement('li')
            li.appendChild(document.createTextNode(`${Inputname.value} : ${emailInput.value}`))
            userList.appendChild(li)

            // clearfiled
            Inputname.value='';
            emailInput.value='';
        }
        
    
}


