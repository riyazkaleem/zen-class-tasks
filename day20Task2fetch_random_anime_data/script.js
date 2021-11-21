// creating button
const buttonelement = document.createElement("button");
let buttonclass = document.createAttribute("class");
buttonclass.value = "buttone btn btn-primary";
let buttonid = document.createAttribute("id");
buttonid.value = "buttone";
let buttontext = document.createTextNode("Get your favorite anime");
buttonelement.appendChild(buttontext);
buttonelement.setAttributeNode(buttonclass);
buttonelement.setAttributeNode(buttonid);
document.body.appendChild(buttonelement);

// creating display para
const paradom = document.createElement("p");
let paraclass = document.createAttribute("class");
paraclass.value = "dompara";
paradom.setAttributeNode(paraclass);
document.body.appendChild(paradom);

// creating input tag for user to enter anime
const inputdom = document.createElement("input");
let inputclass = document.createAttribute("class");
inputclass.value = "dominput";
inputdom.setAttributeNode(inputclass);
document.body.appendChild(inputdom);

let buttone = document
  .getElementsByClassName("buttone")[0]
  .addEventListener("click", displayanime);

async function displayanime() {
  console.log(inputdom.value);
  paradom.innerHTML = "loading...";
  try {
    const rvar = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${inputdom.value}`
    )
      .then((res) => res.json())
      .then((res1) => {
        console.log(res1);
        let result = " ";
        res1.results.forEach((item) => {
          // console.log(item.title, item.type);
          result += `<br/>` + `<p>${item.title} is aired in ${item.type}</p>`;
          result += `<img src="${item.image_url}">`;
          // myimage.src = item.picture.medium;
        });
        paradom.innerHTML = result;
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
}
