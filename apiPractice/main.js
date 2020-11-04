function getUser(){

  console.log('sending a fetch request');
  let fetchPromise = fetch(`https://randomuser.me/api?results=10`);
  
  let jsonPromise = fetchPromise.then(function(response){
    console.log('processing the fetch request');
    console.log('response = ', response);
    return response.json();
  })
  jsonPromise.then(function(json){
    let users = json.results;
    users.forEach(function(user){
      // console.log('user = ', user.email);

      // let userCard = generateContactCard(user);
      let userCardHtml = generateContactCard2(user);
      let div = document.createElement("div");
      div.innerHTML = userCardHtml;

      document.getElementById("contactCards").appendChild(div);
    })
  })
  console.log('after sending the fetch request');
}

getUser();

function generateContactCard(user){
  let contactCard = document.createElement("div");
  contactCard.className = "contactCard";

  let img = document.createElement("img")
  img.src = user.picture.thumbnail;

  contactCard.appendChild(img);

  let name = document.createElement('span');
  name.className = "name";
  name.innerText = user.name.first + " " + user.name.last;
  contactCard.appendChild(name);

  return contactCard;
}

function generateContactCard2(user){
  return `
    <div class="contactCard">
      <img src="${user.picture.thumbnail}">
      <span class="name">${user.name.first} ${user.name.last}</span>
      <span class="phone">${user.phone}</span>
      <span class="email">${user.email}</span>
    </div> `
}