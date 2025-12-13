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

  // POST FORM DATA TO SERVER
  fetch("http://localhost:8080/comments", { // TODO: CHANGE TO RENDER 'SERVER URL' WHEN DEPLOYED
    // fetch("https://week04-assignment-2p2p.onrender.com/comments", {
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
  console.log("JSON Data:", json); // check data

  let i = json.length - 1;
  // console.log(i);
  while (i >= 0) { // create comments HTML
    console.log(i);

    let commId = json[i].id;
    let commName = json[i].username;
    let commText = json[i].comment;
    let commDate = json[i].date;
    let likeCount = json[i].likes;

    const commWrap = document.createElement("div");
    commWrap.className = "comment";
    const head3 = document.createElement("h3");
    head3.textContent = commName;
    commWrap.appendChild(head3);
    const pElem1 = document.createElement("p");
    pElem1.textContent = commText;
    commWrap.appendChild(pElem1);
    const pElem2 = document.createElement("p");
    pElem2.textContent = `${commDate} / #${commId}`;
    commWrap.appendChild(pElem2);
    // console.log(likeCount);
    const likeIcon = document.createElement("img");
    // likeIcon.id = `like${commId}`;
    likeIcon.src = "./src/images/like-icon.png";
    likeIcon.alt = "round heart icon";
    likeIcon.title = "click";
    commWrap.appendChild(likeIcon);
    gbkComm.appendChild(commWrap);
    // commWrap.innerHTML = `<h3>${commName}</h3><p>${commText}</p><p>${commDate} / #${commId}</p>`;

    likeIcon.addEventListener("click", () => {
      likeCount = parseInt(likeCount);
      console.log(commId);
      likeCount++;
      console.log(`like++ ${likeCount}`);
      let commLikes = {
        id: commId,
        like: likeCount
      }

      fetch("http://localhost:8080/likes", { // TODO: CHANGE TO RENDER 'SERVER URL' WHEN DEPLOYED
        // fetch("https://week04-assignment-2p2p.onrender.com/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ commLikes }),
      });
    });
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
// todo: add 'like' counters??
// todo: add date to comment --- DONE
// todo: add clear form button?