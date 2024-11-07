// TODO: Create a variable that selects the form element
// 10/15/2024 SGray Done
const blogpostForm = document.querySelector('#blogpost-form');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const errorText = document.querySelector('#error');



// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
// 10/15/2024 SGray Done
blogpostForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // TODO: Create a function that handles the form submission. Grab the form data and store it in 
  //local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
  // 10/15/2024 SGray Done
  const blogPost = {
    username: usernameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  }
  console.log("Username = " + blogPost.username);
  console.log("Title = " + blogPost.title);
  console.log("Content = " + blogPost.content);
  if (!validateContent(blogPost)) {
    console.log("validateContent failed.");
    return;
  } else {
    //console.log("BlogPost" + blogPost);
    storeLocalStorage(blogPost);
  }

})
function validateContent(blogPost) {
  if (isEmptyString(blogPost.username) || isEmptyString(blogPost.title) || isEmptyString(blogPost.content)) {
    console.log("Missing Data");
    errorText.textContent = "Please complete the form."
    return false;
  }
  return true;
}
function isEmptyString(stringToCheck) {
  if (typeof stringToCheck === "string" && stringToCheck.trim().length === 0) {
    console.log("The string is empty")
    return true;
  } else if (stringToCheck === null) {
    console.log("The string is null");
    return true;
  } else {
    console.log("The string is not empty: " + stringToCheck);
    return false;
  }
}

