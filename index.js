// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE

// Retrieve name from cookies
nameSpan.onblur = function() {
  document.cookie = 'username' + nameSpan.textContent
}


// Retrieve note content from local storage
var noteContent = localStorage.getItem('notes')

if (noteContent) {
  textarea.textContent = noteContent
}

formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  
  // YOUR CODE HERE

  // save name element's content to cookies
  // cookieStore.get('nameSpan')
  //   .then(function(cookieObj) {
  //     if (cookieObj) {
  //       nameSpan.textContent = cookieObj.value
  //     }
  //   })
  

  // save textarea's content to localstorage
  var textAreaContent = textarea.value
  localStorage.setItem('notes', textAreaContent)

  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp