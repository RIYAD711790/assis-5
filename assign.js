document.getElementById("discover").addEventListener('click', function(){
   window.location.href="index2.html"
    
})
function getInputValueById(id){
   const number=document.getElementById(id).innerText;
   const convertedNumber=parseFloat(number);
   return convertedNumber;
   }
   let completedTask=document.getElementById('complet-task');
   let buttons=document.querySelectorAll('#myButton');
   buttons.forEach(button=> {
      button.addEventListener('click',function(){
        
const heading = document.getElementById('myHeading');
         
         const completTaskElement=document.getElementById('complet-task');
         let completTask=getInputValueById('complet-task');
         completTask++;
         const incomplet=document.getElementById('incomplete-task');
         let IncompleteTask=getInputValueById('incomplete-task');
         IncompleteTask--;
         
         incomplet.innerText=IncompleteTask
         completTaskElement.innerText=completTask;
         this.classList.remove('bg-blue-500', "hover:bg-blue-700")
         this.classList.add('bg-gray-400')
         alert('BORD UPDATE SUCCESSFULLY');
         heading.textContent = ' You have completed the task at 12:25pm';
         
         
      }) 
   })
   
    document.getElementById("clear-btn").addEventListener('click',function(){
   const myHead=document.getElementById("myHeading")
   myHead.style.display='none'
})
//theam
//backgrandcolor theme
document.addEventListener("DOMContentLoaded", function () {
   const themeButton = document.getElementById("theme");

   const colors = ['purple',"pink","red","green","yellow","blue"];

   let colorIndex = 0;
   themeButton.addEventListener("click", function () {
       document.body.style.backgroundColor = colors[colorIndex];

       colorIndex = (colorIndex + 1) % colors.length;
   }
)
})
