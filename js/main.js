// let headerOne = document.createElement("h1");
// headerOne.innerText = 10 + 2;

// let headerTwo = document.createElement("h2");
// headerTwo.innerText = 10 + 2;

// body.appendChild(headerOne);
// body.appendChild(headerTwo);

let body = document.querySelector("body");

for (let start = 0; start < 30; start = start + 1) {
  let header = document.createElement("h1");
  header.innerText = 1 + 1;

  body.appendChild(header);
}
