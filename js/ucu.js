
function validateMe(event) {  

  event.preventDefault();

  validateEmail();
  validateMessage();
  validatePhone();
  validateName()

  return false;
}

function validateName(){

  const nameNode = document.getElementById('name');
  const nameErrorNode = nameNode.parentNode.querySelector('p.help-block')
  nameErrorNode.innerHTML = '';

  let nameErrors = document.createElement('ul');
  nameErrors.setAttribute("role", "alert");

  var temp = nameNode.value.replace(/[^A-Z]/g, "").length;
  if ((temp > 1 ) & !(nameNode.value.match(/[(?<=\w)\s(?=\w)]/))){
    let li = document.createElement('li');
    li.innerText = 'Name cointains no whitespaces between wi';
    nameErrors.appendChild(li);
  }

  if (nameNode.value.includes('  ')){
    let li = document.createElement('li');
    li.innerText = 'Name cointains two whitespaces.';
    nameErrors.appendChild(li);
  }

  if (nameNode.value.replace(/[ ]/, "").length < 1) {
    let li = document.createElement('li');
    li.innerText = 'Name has to incule 1 or more letters.';
    nameErrors.appendChild(li);
  }

  if (nameErrors.childElementCount > 0) {
    nameErrorNode.appendChild(nameErrors)
  }

  return false;
}

function validateEmail(){
  
  const emailNode = document.getElementById('email');
  const emailErrorNode = emailNode.parentNode.querySelector('p.help-block')
  emailErrorNode.innerHTML = '';

  let emailErrors = document.createElement('ul');
  emailErrors.setAttribute("role", "alert");

  // email warnings
  if (emailNode.value.length < 5 ) {
    let li = document.createElement('li');
    li.innerText = 'Email is too short';
    emailErrors.appendChild(li);
  }

  if (emailNode.value.length > 50 ) {
    let li = document.createElement('li');
    li.innerText = 'Email is too long';
    emailErrors.appendChild(li)
  }

  if (!emailNode.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    let li = document.createElement('li');
    li.innerText = 'Email format is incorrect';
    emailErrors.appendChild(li)
  }

  if (emailErrors.childElementCount > 0) {
    emailErrorNode.appendChild(emailErrors)
  }

  return false;
}

function validatePhone(){
  
  const phoneNode = document.getElementById('phone');
  const phoneErrorNode = phoneNode.parentNode.querySelector('p.help-block')
  phoneErrorNode.innerHTML = '';

  let phoneErrors = document.createElement('ul');
  phoneErrors.setAttribute("role", "alert");

  // phone warnings
  if (phoneNode.value.replace(/[/D]/, "").length > 11){
    let li = document.createElement('li');
    li.innerText = 'Phone length is 12 or more digits';
    phoneErrors.appendChild(li);
  }

  if (!phoneNode.value.match(/[0+][\d]{3}\(?[\d]{2}\)?[\s-]?[\d]{3}[\s-]?[\d]{3}[\s-]?[\d]{2}/)){
    let li = document.createElement('li');
    li.innerText = 'Phone format is incorrect';
    phoneErrors.appendChild(li);
  }

  if (phoneErrors.childElementCount > 0) {
    phoneErrorNode.appendChild(phoneErrors)
  }

  return false;
}

function validateMessage(){
  
  const messageNode = document.getElementById('message');
  const messageErrorNode = messageNode.parentNode.querySelector('p.help-block')
  messageErrorNode.innerHTML = '';

  let messageErrors = document.createElement('ul');
  messageErrors.setAttribute("role", "alert");

   // message warnings
   if (messageNode.value.length < 10) {
    let li = document.createElement('li');
    li.innerText = 'Message has to include more then 10 characters';
    messageErrors.appendChild(li);
  }

  if (messageNode.value.match(/(ugly)\b|(dumm)\b|(stupid)\b|(pig)\b|(ignorant)\b/)){
    let li = document.createElement('li');
    li.innerText = 'Message must not iclude bad language';
    messageErrors.appendChild(li);
  }

  if (messageErrors.childElementCount > 0) {
    messageErrorNode.appendChild(messageErrors)
  }


  return false;
}