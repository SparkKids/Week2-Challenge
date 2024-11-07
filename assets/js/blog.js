// TODO: Create a variable that selects the main element, and a variable that selects the back button element
//10/02/2024 Done
const mainEl = document.querySelector('.main');
const backButton = document.querySelector('#back');
console.log("back: " + backButton);

// TODO: Create a function that builds an element and appends it to the DOM
function addBlogUl() {
    //Start building in <main>
    //const mainEl = document.querySelector("main");
    //Create the unordered list for the blog posts
    const listEl = document.createElement('ul');
    mainEl.appendChild(listEl);

    return listEl;
}
// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
    console.log("No Blogs");
    var pEl = document.createElement('p');
    mainEl.appendChild(pEl);
    pEl.setAttribute("id","error");
    pEl.textContent = "No Blog posts yet..."

    return;
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    let blogsArray = readLocalStorage();
    console.log("blogsArray.length = " + blogsArray.length);
    if (blogsArray.length === 0) {
        noPosts();
        return;
    } else {
        const listEl = addBlogUl();
/*         Each blog post has the following structure:
        <li class="blog-post">
        <div class="blog-post-title">Blog Title</div>
        <p class="blog-post-content">Blog content.... </p>
          <div class="blog-post-author">Posted by: Steven Gray</div>
        </li> */
        var liEl;
        var divTitleEl;
        var pEl;
        var divAuthorEl;
        for (let index = 0; index < blogsArray.length; index++) {
            console.log("Array index = " + index);
            console.log("blogsArray[index].title = " + blogsArray[index].title);
            console.log("blogsArray[index].content = " + blogsArray[index].content);
            console.log("blogsArray[index].username = " + blogsArray[index].username);
            liEl = document.createElement('li');
            listEl.appendChild(liEl);
            liEl.setAttribute("class","blog-post");
            divTitleEl = document.createElement('div');
            liEl.appendChild(divTitleEl);
            divTitleEl.setAttribute("class","blog-post-title");
            divTitleEl.textContent = blogsArray[index].title
            pEl = document.createElement('p');
            liEl.appendChild(pEl);
            pEl.setAttribute("class","blog-post-content");
            pEl.textContent = blogsArray[index].content;
            divAuthorEl = document.createElement('div')
            liEl.appendChild(divAuthorEl);
            divAuthorEl.setAttribute("class", "blog-post-author");
            divAuthorEl.textContent = "Posted by: " + blogsArray[index].username.trim();
    
        }
    }
}

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Back button clicked');
    redirectPage("./index.html");
})
//Add an event listener to the toggle button
