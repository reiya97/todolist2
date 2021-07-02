'use strict'

const addbtn = document.getElementById('addbtn');
const inputText = document.querySelector('input');
const clearAll = document.getElementById('clearall');
const ul = document.querySelector('ul');

let count = 0;

function showcount() {
  document.querySelector('.pending').textContent = count;
}

addbtn.addEventListener('click', todoadd);
function todoadd() {

    count++;
    showcount();
    addbtn.classList.remove('active')
    
    let task = document.createElement('div');
    task.className = 'container';
    ul.appendChild(task);
    
    const todo = document.createElement('li');
    task.appendChild(todo);
    todo.textContent = inputText.value;

    const delbtn = document.createElement('div');
    delbtn.className = 'delbtn';
    delbtn.textContent = 'del';
    task.appendChild(delbtn);
    
    todo.addEventListener('click', () => {
      todo.className = 'checked';
      delbtn.className = 'checkeddel';
    });
    
    delbtn.addEventListener('click', () => {
      ul.removeChild(task);
      count--;
      showcount();
    });

    clearAll.addEventListener('click', () => {
      ul.removeChild(task);//わからない
      count=0;
      showcount();
      clearAll.classList.remove('clearallactive');
    });
    clearAll.className = 'clearallactive';
    
    inputText.value = '';
    inputText.focus();
  }

  inputText.onkeyup = () =>{
  let userdate = inputText.value;
  if(userdate != 0){
    addbtn.className = 'active'
  } else {
    addbtn.classList.remove('active')
  }
}

inputText.addEventListener('keypress', (e)=>{
  let userdate = inputText.value;
  if (e.keyCode === 13 && userdate != 0) {
        todoadd();
        return false;     
    }  
});

showcount();
