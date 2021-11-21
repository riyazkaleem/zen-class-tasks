// creating button to fetch data from serverand appending it to document
const buttonelement = document.createElement("button");
let buttonclass = document.createAttribute("class");
buttonclass.value = "buttone btn btn-primary";
let buttonid = document.createAttribute("id");
buttonid.value = "buttone";
let buttontext = document.createTextNode("Fetch FIRE n ICE API data");
buttonelement.appendChild(buttontext);
buttonelement.setAttributeNode(buttonclass);
buttonelement.setAttributeNode(buttonid);
document.body.appendChild(buttonelement);

// creating display para where the required dislay has to be printed
const paradom = document.createElement("p");
let paraclass = document.createAttribute("class");
paraclass.value = "dompara";
paradom.setAttributeNode(paraclass);
document.body.appendChild(paradom);

// adding event listener to the button created
let buttone = document
  .getElementsByClassName("buttone")[0]
  .addEventListener("click", displayfirenice);

// async and await used to fetch data from api server
async function displayfirenice() {
  // console.log(inputdom.value);
  paradom.innerHTML =
    "Please wait while I'm fetching FIRE n ICE api data from server.";
  // try block is used to check for any errors from api
  try {
    // fetching the api
    const rvar = await fetch(`https://www.anapioficeandfire.com/api`)
      .then((res) => res.json())
      .then((res1) => {
        console.log(res1);
        // from the main ICE and FIRE api again fetching the books api
        const buttonelement1 = document.createElement("button");
        let buttonclass1 = document.createAttribute("class");
        buttonclass1.value = "buttonin btn btn-primary";
        let buttonid1 = document.createAttribute("id");
        buttonid1.value = "buttonin";
        let buttontext1 = document.createTextNode("Fetch BOOKS API data");
        buttonelement1.appendChild(buttontext1);
        buttonelement1.setAttributeNode(buttonclass1);
        buttonelement1.setAttributeNode(buttonid1);
        document.body.appendChild(buttonelement1);

        // activating button for books api fetching data
        let buttonin = document
          .getElementsByClassName("buttonin")[0]
          .addEventListener("click", displaybooks);

        // executing async function for books
        async function displaybooks() {
          // console.log(inputdom.value);
          paradom.innerHTML =
            "You've asked for BOOKS data, please wait while i fetch it.";
          // try block is used to check for any errors from api
          try {
            // fetching the api
            const rvar = await fetch(res1.books)
              .then((res) => res.json())
              .then((res1) => {
                console.log(res1);
                let bookno = 1;

                // displaying relavent data from books api.
                let result = " ";
                let result1 = " ";
                let paratexta = "abc";
                res1.forEach((book) => {
                  // console.log(book.url);
                  result += `<br/>
                  <div class="print" id="print">
                  <p>Name of the book ${bookno}: ${book.name}</p>
                  <p>Isbn of the book: ${book.isbn}</p>
                  <p>Number of pages: ${book.numberOfPages}</p>
                  <p>Author: ${book.authors}</p>
                  <p>Publisher name: ${book.publisher}</p>
                  <p>Release date: ${book.released}</p>
                  </div>
                  `;

                  // async function bookfun() {
                  // fetching data of each book
                  const eachbookvar = fetch(book.url)
                    .then((res2) => res2.json())
                    .then((res3) => {
                      console.log(res3.characters[0]);

                      // async function charname() {
                      // fetching name of characters
                      const eachchar = fetch(res3.characters[0])
                        .then((res4) => res4.json())
                        .then((res5) => {
                          console.log(res5.name);
                          let x = 1;
                          // console.log(result);

                          // creating display para to display name of the character.
                          // let divelem = document.querySelector("#print");
                          // console.log(divelem);
                          const paradoma = document.createElement("p");
                          let paraclassa = document.createAttribute("class");
                          paraclassa.value = "domparag";
                          paratexta = document.createTextNode(
                            `name of the character in each book of 10 books is: ${res5.name}`
                          );
                          // paratexta = `name of the character is: ${res5.name}`;
                          paradoma.appendChild(paratexta);
                          paradoma.setAttributeNode(paraclassa);
                          document
                            .getElementById("print")
                            .appendChild(paradoma);
                          // document.body.appendChild(paradoma);
                          // result += `<div>
                          // <p>name of the character in the book ${bookno}: ${res5.name}</p>
                          // </div>`;
                          // console.log(result1);
                        });
                      // }
                      // charname();
                      // result += paratexta;
                    });
                  // }
                  // bookfun();
                  // x += 1;
                  // result += paratexta;
                  bookno += 1;
                });
                paradom.innerHTML = result;
              })
              .catch((error) => console.log(error));
          } catch (error) {
            console.log(error);
          }
        }
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
}
