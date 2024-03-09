// const url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
// let userInput=document.querySelector('.user-input')

// let qrCode= document.querySelector('#qr-img')

// let btn=document.querySelector('.button')
// btn.addEventListener('click',()=>{
//     let userInput=document.querySelector('.user-input')
//     let imgBox=document.querySelector('#img-box')


//     console.log(userInput.value)
//     console.log("button clicked")
   
   
//     qrCode.src=url+userInput
    
//     imgBox.classList.add("show-img")

   

// })



const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let userInput = document.querySelector('.user-input');
let qrCode = document.querySelector('#qr-img');
let btn = document.querySelector('.button');
let imgBox = document.querySelector('#img-box');

btn.addEventListener('click', () => {
    // Get the user input value
    let inputValue = userInput.value;
    console.log(inputValue);

    // Update the src attribute of the qrCode image
    qrCode.src = url + inputValue;

    // Show the image box
    imgBox.classList.add("show-img");
});
