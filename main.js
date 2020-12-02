
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/puppy-dog.jpg') {
      myImage.setAttribute('src','images/puppy-dog2.jfif');
    } else {
      myImage.setAttribute('src','images/puppy-dog.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Raising a puppy, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Raising a puppy, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


  
 





