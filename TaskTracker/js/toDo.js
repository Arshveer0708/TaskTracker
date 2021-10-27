      // Declaring variables that hold references to ul, input, button and p element
      const mainList = document.querySelector('ul');
      const taskName = document.querySelector('input');
      const submitBtn = document.querySelector('button');
      const p = document.querySelector('p');

      // const errMsg = document.getElementsByTagName('p');
      
      // event handler for submitBtn
      submitBtn.onclick = function() {   

        // When submitBtn is pressed p element will be removed from the output section
        p.remove(); 

        //value of taskName input field  
        taskValue = taskName.value;
        taskName.value = '';

        // document.getElementsByTagName('p').textContent = '';

        // Create new elements — li, listItem, button and input checkBox and storing them in variables.
        let list, listItem, checkBox, deleteButton;
        list = document.createElement('li');
        listItem = document.createElement('listItem');
        deleteButton = document.createElement('button');
        checkBox = document.createElement('input');
        checkBox.setAttribute("type", "checkbox");

        // errMsg = document.createElement('p');
        // input.appendChild(errMsg);
        

        //If taskValue == "" then alert message will pop-up
        if(taskValue == "")
        {
          alert("Please enter a task name!");

          // document.getElementsByTagName('p').textContent = "You haven't entered any task name!"

        }

        //If taskValue !== ""
        else
        {
        //Appending the checkBox, listItem and deleteButton as a child of the list
        list.appendChild(checkBox);
        list.appendChild(listItem);
        list.appendChild(deleteButton);

        // Appending the list item as a child of the mainList
        mainList.appendChild(list);
        
        // input.appendChild(errMsg);
        
        listItem.textContent = taskValue;
        deleteButton.textContent = 'Delete';
        list.style.color = "red";
        
        //Adding eventlistener when check box is checked
        checkBox.addEventListener('change', checkFunction);
        // checkFunction will move the listItem being check to the end of the list and show it cut
        function checkFunction() {
          list.removeChild(listItem);

          mainList.appendChild(list);
          list.appendChild(listItem);
          list.appendChild(deleteButton);

          listItem.style.textDecoration = "line-through";
          list.style.backgroundColor = "#90EE90";
          list.style.opacity = 0.7;

          deleteButton.style.color = "red";

        }

        // EventHandler when delete utton is clicked
        deleteButton.onclick = function() {
          mainList.removeChild(list);
          list.style.backgroundColor = "red";
        }

        
        taskName.focus();
      }

      }