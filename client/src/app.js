console.log("hello world");
const commForm = document.getElementById("commForm");

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
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ formValues }),
    });
    console.log("success 1");
}
commForm.addEventListener("submit", guestBook);