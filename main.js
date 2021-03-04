let tasks = document.querySelector('.tasks');
let input = document.querySelector('.input-get');


const add_task = () => {
    
    if (tasks.children.length === 6) {
        alert('Your list is full.')
    }

    else {
            
        const add_item= document.querySelector('.input-get').value;
        const input= document.querySelector('.input-get');

        const button = document.createElement("button");
        button.setAttribute('onclick','delete_task()')
        button.innerHTML = "Delete";

        const li = document.createElement("li");
        li.setAttribute('class','tasks');

        const radio = document.createElement('input');
        
        radio.setAttribute('type','checkbox');
        radio.setAttribute('class','control');
        radio.setAttribute('onclick','check_control()');

        if (add_item === '') {
            alert('Decide what to do!')
        }

        else  {
            li.innerHTML = add_item;

            li.appendChild(radio)
            li.appendChild(button);
            tasks.appendChild(li);
        }

        input.value = ""
    }

}

const delete_task = () => {
    const target = event.currentTarget.parentNode;
    target.remove();
}

const check_control = () => {
    const target = event.currentTarget.parentNode;
    target.classList.toggle("checked")

}

const enter = () => {
    if (event.keyCode === 13) {
        event.preventDefault();
        const button = document.querySelector(".todo-app").children[1];
        button.click();
    }
}


