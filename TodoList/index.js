
const todoListArr = []

const todoForm = document.getElementById("form");


document.addEventListener("DOMContentLoaded", () => {
   
    todoForm.addEventListener("submit",function(e){
        e.preventDefault();
        const name = e.target[0].value.trim()
        const surname = e.target[1].value.trim()
        const email = e.target[2].value.trim()
        const date = e.target[3].value.trim()
        const item = {
             id: Date.now(),
             name,
             surname,
             email,
             date,
             isUpdateName:false,
             isUpdateSurName:false,
             isUpdateEmail:false,
             isUpdateDate:false,
         }
         todoListArr.push(item)
         renderList()
         e.target.reset()
      });

  });

  function renderList(){
    const list = document.getElementById("todo");
    list.innerHTML = ''
    todoListArr.map((item,index) => {
        addItemTodo(item,index);
    })
  }


  function addItemTodo(text,index){
    
    const list = document.getElementById("todo");
   
    const item = document.createElement('li');
    item.innerHTML = `
        <p>Name: ${text.name}</p>
        <p>Surname: ${text.surname}</p>
        <p>Email: ${text.email}</p>
        <p>Data: ${text.date}</p>
    `;
  
    const buttons = document.createElement('div');
  
    const remove = document.createElement('button');

    const edit = document.createElement('button')

    remove.innerHTML = 'Remove'
    edit.innerHTML = 'Edit'

    remove.addEventListener("click",removeItem);
    edit.addEventListener("click",() => createEditModal(index))

    buttons.appendChild(remove);
    buttons.appendChild(edit)
  
    item.appendChild(buttons);
    
    list.appendChild(item)
  }

  function removeItem(){

    let item = this.parentNode.parentNode;
    let parent  = item.parentNode;
    parent.removeChild(item);
  }

  function editItem(id){
   document.getElementById('updateForm').addEventListener("submit", function(e){
             e.preventDefault();
             const name = e.target[0].value.trim()
             const surname = e.target[1].value.trim()
             const email = e.target[2].value.trim()
             const date = e.target[3].value.trim()

             const newItem = {
                 name,
                 surname,
                 email,
                 date,
                 id:Date.now()
             }
             todoListArr.splice(id,1,newItem)
             renderList()
             document.getElementById('updateForm').innerHTML=""
             
   });
  }


  function createEditModal(id){
      const obj = todoListArr[id]
      const container = document.createElement('div')
      container.style = `position:absolute, z-index:1, top:0 , right:0 width:300px, height: 300px`
      container.innerHTML = `
        <form id="updateForm" >
            <label for="name">Name</label>
            <input type="text" placeholder="${obj.name}" name="name" id="name">
            <label for="surname">Surname</label>
            <input type="text" placeholder="${obj.surname}" name="surname" id="surname">
            <label for="email">Email</label>
            <input type="email" placeholder="${obj.email}" name="email" id="email">
            <label for="date">Date</label>
            <input type="date" name="date" id="date">
            <button type="submit" id="add" onclick="editItem(${id})" >Update data</button>
        </form>
      `
      document.body.append(container)
     
  }

