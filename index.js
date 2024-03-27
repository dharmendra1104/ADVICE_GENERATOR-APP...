let button =document.querySelector(".btn")
let adviceNumber =document.querySelector(".adviceNumber")
let advice =document.querySelector(".advice")

button.addEventListener('click',()=>{
fetch('https://api.adviceslip.com/advice')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
    // console.log(response.json());
  })
  .then(data => {
    adviceNumber.innerText=`# ${data.slip.id}`
    advice.innerText=`" ${data.slip.advice} "`
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
})

// let url='https://api.adviceslip.com/advice'
// button.addEventListener('click',()=>{
//     fetchData(url)
// })

//   async function fetchData() {
//     try {
//       const response = await fetch(url);
//       console.log(response);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       adviceNumber.innerText=`# ${data.slip.id}`
//       advice.innerText=`" ${data.slip.advice} "`
//       console.log(data);
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//     }
//   }
  
  