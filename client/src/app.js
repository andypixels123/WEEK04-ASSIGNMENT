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
async function getData() { // CREATE ELEMENTS / HANDLERS
    // const response = await fetch("https://week04-assignment-2p2p.onrender.com/comments");
    const response = await fetch("http://localhost:8080/comments");
    const json = await response.json();
    console.log("JSON Data:", json); // check data
    // cpsEl.innerText = `${cps} pps`;

    // for (i = 0; i < json.length; i++) {
    //     let rewardsElem = document.createElement("button");
    //     let inc = json[i].increase;
    //     let cost = json[i].cost;
    //     let aLevel = anxLevel[i];
    //     rewardsElem.id = `upgrade${json[i].id}`;
    //     rewardsElem.disabled = true;
    //     rewardsElem.title = `buy ${inc} pps for ${cost} panics`;
    //     rewardsElem.innerHTML = `<span>${aLevel}</span><br>Price - ${cost} Panics<br>Reward - ${inc} pps`;
    //     shopContainer.appendChild(rewardsElem);

    //     rewardsElem.addEventListener("click", () => { // event handler
    //         totalCount = totalCount - cost;
    //         cps = cps + inc;
    //         stats.totaL = totalCount;
    //         stats.cPs = cps;
    //         storeValues("stats", stats);
    //     });
    // }
}

getData();