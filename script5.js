const button=document.querySelector('#todo')
const container=document.querySelector('#container')
const daynight=document.querySelector('.daynight')
let outside=document.createElement('div')
outside.className='external'
container.appendChild(outside)
button.addEventListener('click',function(){
    let div1=document.createElement('div')
    div1.className='body'
    outside.appendChild(div1)
    let div=document.createElement('div')
    div.className='list'
    div1.appendChild(div)
    let h1=document.createElement('h1')
    h1.className='head'
    h1.innerText='To-do list'
    div.appendChild(h1)
    let cross=document.createElement('button')
    cross.id='cross'
    cross.innerHTML='&#10008'
    h1.appendChild(cross)
    cross.addEventListener('click',function(){
        div.remove()
    })
    let input=document.createElement('input')
    input.type=Text
    input.id='text'
    input.placeholder='Add task'
    div.appendChild(input)
    let add=document.createElement('button')
    add.className='button'
    add.innerHTML='Add'
    div.appendChild(add)
    let ul=document.createElement('ul');
    div.appendChild(ul)
    add.addEventListener('click',function(){
        if(input.value==''){
            alert('you have to enter something')
        }
        else{
            let lidiv=document.createElement('div')
            lidiv.className='taskdiv'
            ul.appendChild(lidiv)
            let box=document.createElement('input')
            box.className='check'
            box.type='checkbox'
            lidiv.appendChild(box)
            let li=document.createElement('li')
            li.classname='task'
            li.innerHTML=input.value
            lidiv.appendChild(li)
            let del=document.createElement('span')
            del.id='del'
            del.innerHTML="\u00d7"
            lidiv.appendChild(del)
            del.addEventListener('click',function(){
                lidiv.remove()
            })
            flag=0
            box.addEventListener('click',function(){
                if(flag==0){
                    li.style.textDecoration='line-through'
                    flag=1
                }
                else{
                    li.style.textDecoration='none'
                    flag=0
                }
            })
        }
        
        input.value=''
    })
    let datediv=document.createElement('div')
    datediv.id='datediv'
    div.appendChild(datediv)
    let date=new Date()
    let datespan=document.createElement('span')
    datediv.appendChild(datespan)
    datespan.append(date.toDateString())
    let timespan=document.createElement('span')
    datediv.appendChild(timespan)
    timespan.append(date.toLocaleTimeString())
})
daynight.onclick=function(){
    document.body.classList.toggle('darktheme')
    if(document.body.classList.contains('darktheme')){
        daynight.innerText='day'
    }
    else{
        daynight.innerText='night'
    }
}