// creating button
const buttonelement = document.createElement("button");
let buttonclass = document.createAttribute("class");
buttonclass.value = "buttone btn btn-primary";
let buttonid = document.createAttribute("id");
buttonid.value = "buttone";
let buttontext = document.createTextNode(
  "Find different details of cryptocurrency"
);
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
// const inputdom = document.createElement("input");
// let inputclass = document.createAttribute("class");
// inputclass.value = "dominput";
// inputdom.setAttributeNode(inputclass);
// document.body.appendChild(inputdom);

let buttone = document
  .getElementsByClassName("buttone")[0]
  .addEventListener("click", displayassets);

async function displayassets() {
  // console.log(inputdom.value);
  paradom.innerHTML = "loading...";
  try {
    const rvar = await fetch(
      `https://nova.bitcambio.com.br/api/v3/public/getassets`
    )
      .then((res) => res.json())
      .then((res1) => {
        console.log(res1);
        let result = " ";
        res1.result.forEach((item) => {
          result += `<br/>
          <p><i>${item.AssetLong}</i> is the name of the asset,
          with its short name being <i>${item.Asset}</i>,
          the status of asset is currently: <i>${item.IsActive}</i>
          tax withdraw fee being: <i></i>${item.WithdrawTxFee} percent</p>
          `;
        });
        paradom.innerHTML = result;
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
}
