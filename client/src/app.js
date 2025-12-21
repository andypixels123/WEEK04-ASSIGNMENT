// console.log("is this working?");
const commForm = document.getElementById("commForm");
const gbkComm = document.getElementById("guestbookComms");
const reload = document.getElementById("reload");
const topBtn = document.getElementById("topBtn");
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
  // TODO: CHANGE TO RENDER 'SERVER URL' WHEN DEPLOYED

  try {

    // fetch("http://localhost:8080/addcomms", {// localhost
      fetch("https://week04-assignment-1-j3wt.onrender.com/addcomms", {// mk2
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ formValues })
    });

  } catch (error) {
    console.error(error);
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }
  // console.log("success 1");
}

// Get API DATA here
// Application Programming Interface
async function getData() {// create 'comments' elements from API object

  try {

    // TODO: CHANGE TO RENDER 'SERVER URL' WHEN DEPLOYED
    // const response = await fetch("http://localhost:8080/getcomms");// localhost
    const response = await fetch("https://week04-assignment-1-j3wt.onrender.com/getcomms");// mk2
    // TODO: FIX ERROR HERE!!!
    const commData = await response.json();// json() convert string to JS object
    console.log("JS object:", commData);// check data
    let i = commData.length - 1;
    // console.log(i);
    console.log(`Loop Length is - ${i}`);

    while (i >= 0) {// create comments HTML
    let commId = commData[i].idx;// rename db column idx?
    let commName = commData[i].username;
    let commText = commData[i].comment;
    let commDate = commData[i].date;
    let likeCount = commData[i].likes;
    // console.log(likeCount);

    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = commName;
    article.appendChild(h3);
    const p1 = document.createElement("p");
    p1.textContent = commText;
    article.appendChild(p1);
    const div1 = document.createElement("div");
    const span = document.createElement("span");
    const icon = document.createElement("img");
    icon.src = "/assets/images/like-icon.png";
    icon.alt = "round heart icon";
    icon.title = "click";
    span.appendChild(icon);
    const p2 = document.createElement("p");
    p2.textContent = likeCount;
    span.appendChild(p2);
    div1.appendChild(span);
    const p3 = document.createElement("p");
    p3.textContent = `${commDate} / #${commId}`;
    div1.appendChild(p3);
    article.appendChild(div1);
    gbkComm.appendChild(article);

    icon.addEventListener("click", () => {

      // todo: for testing purposes // check likeCount is a number
      // if(typeof likeCount === "number") {
      //   console.log("like count is a number");        
      // } else {
      //   console.log("like count is not a number");    
      //   likeCount = parseInt(likeCount, 10);
      // }
      // todo: end

      likeCount++;
      p2.innerText = likeCount;// show likes on page

      let commLikes = {
        likeId: commId,
        likeQty: likeCount
      };

      // TODO: CHANGE TO RENDER 'SERVER URL' WHEN DEPLOYED
      // fetch("http://localhost:8080/likes", {//localhost
        fetch("https://week04-assignment-1-j3wt.onrender.com/likes", {// mk2
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ commLikes })
      });
      console.log("success 2");
    });

    i--;
  }

  } catch (error) {
    console.error(error);
    // Note: the exact output may be browser-dependent
  }
}

getData();

function reLoad() {
  location.reload();
}

function scrollFunction() {// show / hide 'top' button
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
// todo: add 'like' counters?? --- DONE
// todo: add date to comment --- DONE
// todo: add clear form button??