// creating button to display reandom cat
const catBtn = document.createElement("button");
let catBtnClass = document.createAttribute("class");
catBtnClass.value = "buttone btn btn-primary";
let catBtnId = document.createAttribute("id");
catBtnId.value = "buttone";
let catBtnText = document.createTextNode("Click for 5 Facts on Cat");
catBtn.appendChild(catBtnText);
catBtn.setAttributeNode(catBtnClass);
catBtn.setAttributeNode(catBtnId);
document.body.appendChild(catBtn);

// creating a para element for diplaying the cat wiki
const paradom = document.createElement("p");
let paraclass = document.createAttribute("class");
paraclass.value = "dompara";
paradom.setAttributeNode(paraclass);
document.body.appendChild(paradom);

// adding event listener for cat button
let mainBtn = document
  .getElementsByClassName("buttone")[0]
  .addEventListener("click", displaycat);

// fetching data from api
async function displaycat() {
  try {
    const fetchVar = await fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((res1) => {
        console.log(res1);
        let result = " ";
        res1.forEach((item) => {
          // console.log(item.title, item.type);
          result +=
            `<br/>` + `Do you Know? ` + `<br/><br/>` + `<p>${item.text}</p>`;
        });
        paradom.innerHTML = result;
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
}
