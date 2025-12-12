console.log("hello world");
const commForm = document.getElementById("commForm");
const gbkComm = document.getElementById("guestbook-comments");
window.addEventListener("load", getData);

function guestBook(e) {
    e.preventDefault();
    const formDataTemplate = new FormData(commForm);
    const formValues = Object.fromEntries(formDataTemplate);
    console.log(`this is form values - ${formValues}`);

    // Send form data in a request to the server
    // we will use the url where our server is located --> http://localhost:8080/comments
    // (make sure you are fetching the specific POST route that will process the form data)
    // we will use fetch to connect our client with the server

    fetch("http://localhost:8080/comments", { // TODO: CHANGE TO RENDER 'SERVER URL' WHEN DEPLOYED
        // fetch("https://week04-assignment-2p2p.onrender.com", {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ formValues }),
    });
    console.log("success 1");
}
commForm.addEventListener("submit", guestBook);

// 

// Get API DATA here
// Application Programming Interface
async function getData() { // create 'comments' elements from API object
    // const response = await fetch("https://week04-assignment-2p2p.onrender.com/comments");
    const response = await fetch("http://localhost:8080/comments");
    const json = await response.json();
    console.log("JSON Data:", json); // check data

    let i = json.length-1;
    while (i >= 0) {
        let commWrap = document.createElement("div");
        let commId = json[i].id;
        let commName = json[i].username;
        let commText = json[i].comment;
        commWrap.className = "comment";
        commWrap.innerHTML = `<h3>${commName}</h3><br><p>${commText}</p>`;
        gbkComm.appendChild(commWrap);
        i--;
    }
}

// todo: clear input fields when form is submitted
// todo: create link to add a comment and show form?
// todo: add date to comment