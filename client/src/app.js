// console.log("is this working?");
const commForm = document.getElementById("commForm");
const gbkComm = document.getElementById("guestbookComms");
const reload = document.getElementById("reload");
const topBtn = document.getElementById("topBtn");
const addComm = document.getElementById("addComm");
const d = new Date();
const y = d.getFullYear();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const m = months[d.getMonth()];

function guestBook(e) {
  e.preventDefault();
  const formDataTemplate = new FormData(commForm);
  let formValues = Object.fromEntries(formDataTemplate);
  formValues.date = `${m} ${y}`;
  // console.log(`form values - ${formValues}`);
  commForm.reset();// clear form

  // send form data in a request to the server
  // use url where server is located --> http://localhost:8080/comments
  // (make sure you are fetching the specific POST route that will process the form data)
  // use fetch to connect client with server

  fetch("http://localhost:8080/comments", { // TODO: CHANGE TO RENDER 'SERVER URL' WHEN DEPLOYED
    // fetch("https://week04-assignment-2p2p.onrender.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formValues }),
  });
  // console.log("success 1");
}

// Get API DATA here
// Application Programming Interface
async function getData() { // create 'comments' elements from API object
  // const response = await fetch("https://week04-assignment-2p2p.onrender.com/comments");
  const response = await fetch("http://localhost:8080/comments");
  const json = await response.json();
  // console.log("JSON Data:", json); // check data

  let i = json.length - 1;
  while (i >= 0) {
    let commWrap = document.createElement("div");
    let commId = json[i].id;
    let commName = json[i].username;
    let commText = json[i].comment;
    let commDate = json[i].date;
    commWrap.className = "comment";
    // commWrap.innerHTML = `<h3>${commName}</h3><p>${commText}</p>`;
    commWrap.innerHTML = `<h3>${commName}</h3><p>${commText}</p><p>${commDate} / #${commId}</p>`;
    gbkComm.appendChild(commWrap);
    i--;
  }
}

getData();

function reLoad() {
  location.reload();
}

function scrollFunction() { // show / hide 'top' button
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

window.onscroll = () => scrollFunction();
commForm.addEventListener("submit", guestBook);
reload.addEventListener("click", reLoad);

// todo: clear input fields when form is submitted --- DONE
// todo: create BUTTON to add a comment and show form??
// todo: add date to comment --- DONE