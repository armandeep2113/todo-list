let todolist = [];
function display()
{
  let displayitems=document.querySelector('#todoitemsdisplay');
  displayitems.innerText=``;
  let newhtml=``;
for(let a=0;a<todolist.length;a++)
{
  newhtml=newhtml+
  `

  <span>${todolist[a].do}   </span>
  <span>${todolist[a].da}</span>
  <button class="button"
  onclick="todolist.splice(${a},1);display();">delete</button>
 
  ` 
}
displayitems.innerHTML=newhtml;
}
function addd()
{
   let x=document.querySelector('#in').value;
   let y=document.querySelector('#date').value;
   todolist.push({do:x,da:y});

document.querySelector('#in').value=``;
document.querySelector('#date').value=``;
display();
display();


}