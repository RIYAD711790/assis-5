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
   //color change
   //function changeBackgroundColor(){
   //   const colors=["red","blue","greem","yellow","orange"];
   //   const randomColor=colors[Math.floor(Math.random () * colors.length)];
   //   document.body.style.backgroundColor=randomColor;
   //}

  
        
        //function getRandomColor() {
        //    const letters = '0123456789ABCDEF';
        //    let color = '#';
        //    for (let i = 0; i < 6; i++) {
        //        color += letters[Math.floor(Math.random() * 16)];
        //        
        //    }
        //    return color; 
        //}
        //// Get the image element by its ID
        //const image = document.getElementById('changeColorImage');
        //
        //image.addEventListener('click', function() {
        //    
        //    document.body.style.backgroundColor = getRandomColor();
        //});
    

document.getElementById("clear-btn").addEventListener('click',function(){
   const myHead=document.getElementById("myHeading")
   myHead.style.display='none'
})


