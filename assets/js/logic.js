function test_landing_page() {
  const form = document.querySelector('form');
  if (form) { console.log("Form Passed!"); } else
  {console.log("Form failed");}
  const usernameLabel = document.querySelector('label[for="username"]');
  if (usernameLabel) { console.log("usernameLabel Passed!");}  else
    {console.log("usernameLabel failed");}
  const usernameInput = document.querySelector('input[id="username"]');
  if (usernameInput) { console.log("usernameInput Passed!");}  else
    {console.log("usernameInput failed");}
  const titleLabel = document.querySelector('label[for="title"]');
  if (titleLabel) { console.log("titleLabel Passed!");}  else
    {console.log("titleLabel failed");}
  const titleInput = document.querySelector('input[id="title"]');
  if (titleInput) { console.log("titleInput Passed!");}  else
    {console.log("titleInput failed");}
  const contentLabel = document.querySelector('label[for="content"]');
  if (contentLabel) { console.log("contentLabel Passed!");}  else
    {console.log("contentLabel failed");}
  const contentInput = document.querySelector('textarea[id="content"]');
  if (contentInput) { console.log("contentInput Passed!");}  else
    {console.log("contentInput failed");}
  const error = document.querySelector('#error');
  if (error) { console.log("error Passed!");}  else
    {console.log("error failed");}

}
// test_landing_page();
function test_toggle() {
  const toggle = document.querySelector('#toggle');

  const initialCircleColor =
    document.documentElement.style.getPropertyValue('--circle-color');
  toggle.click();
  const circleColorAfterClick =
    document.documentElement.style.getPropertyValue('--circle-color');
    console.log("initialCircleColor: " + initialCircleColor); 
    console.log("circleColorAfterClick: " + circleColorAfterClick); 
} 
test_toggle();
// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#toggle');

const setDarkMode = () => {
  // 1. Add the class to the body element
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'dark');
  darkModeToggle.textContent = "Light Mode";
}

const setLightMode = () => {
  // 1. Remove the class from the body element
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', 'light');
  darkModeToggle.textContent = "Dark Mode";
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'dark') {
  setDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');

  // if it not current enabled, enable it
  if (darkMode !== 'dark') {
    setDarkMode();
    // if it has been enabled, turn it off  
  } else {
    setLightMode();
  }
});


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  //console.log("readLocalStorage blogs[0].username = " + blogs[0].username);
  console.log("readLocalStorage blogs.length = " + blogs.length);

  return blogs;


}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(blogPost) {
  console.log("storeLocalStorage");
  console.log("Username = " + blogPost.username);
  console.log("Title = " + blogPost.title);
  console.log("Content = " + blogPost.content);
  // Get the array from local storage or initialize an empty array if it doesn't exist
  let array = JSON.parse(localStorage.getItem("blogs")) || [];
  // Push the new object into the array
  array.push(blogPost);

  // Update local storage with the modified array
  localStorage.setItem("blogs", JSON.stringify(array));

  redirectPage("./blog.html");

}



