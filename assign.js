document.getElementById("discover").addEventListener('click', function(){
   window.location.href="index2.html"
    
})
//const Complited=document.querySelectorAll('#complite');
//for(let i=0; i < Complited.length; i++){
//const complite=Complited[i];
//complite.addEventListener('click',function(event){
//   event.preventDefault()
//   console.log(typeof event)
//   const task=document.getElementById('task-number').innerText;
//   const taskValue=parseInt(task) - 1
//   document.getElementById('task-number').innerText=taskValue;
//})
 
//}
//const IMG=document.querySelector('.colorImg');
//function getRandomColor(){
//   const r=Math.floor(Math.random() * 256);
//   const g=Math.floor(Math.random() * 256);
//   const b=Math.floor(Math.random() * 256);
//   const a=Math.random().toFixed(2);
//   return `rgba(${r},${g},${b},${a})`;
//}
//IMG.addEventListener('click',function(){
//   this.style.backgroundColor=getRandomColor();
//})
function getInputValueById(id){
   const number=document.getElementById(id).innerText;
   const convertedNumber=parseFloat(number);
   return convertedNumber;
   }
   let completedTask=document.getElementById('complet-task');
   let buttons=document.querySelectorAll('#complite');

   buttons.forEach(button=> {
      button.addEventListener('click',function(){
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
         alert('BORD UPDATE ')
         
      })
   })

