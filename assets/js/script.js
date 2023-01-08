"use-strict";

const btnGames = document.querySelector("#games");
const subMenugames = document.querySelector(".sub-menu");

btnGames.addEventListener("click", () => {
  subMenugames.classList.toggle("displayblock");
});

function closewindow() {
  subMenugames.classList.toggle("displayblock");
}

// XMAS
let btnXmas = document.querySelector(".daysBeforeXmas");
let btnCross = document.querySelector("#cross");
let daysxmas = document.querySelector(".modalXmas");

function appear() {
  daysxmas.style.display = "block";
}
function close() {
  daysxmas.style.display = "none";
}

function counterChristmas() {
  let today = new Date();
  let christmas = new Date(today.getFullYear(), 11, 25);
  if (today.getMonth() == 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }
  let oneday = 1000 * 60 * 60 * 24;
  return (
    Math.ceil((christmas.getTime() - today.getTime()) / oneday) +
    " days left until Christmas!"
  );
}
btnXmas.addEventListener("click", appear);
btnCross.addEventListener("click", close);
document.querySelector(".dayBeforeXmas").innerHTML = counterChristmas();

// let date = {};
// setInterval(() => {
//     date = new Date();
//     console.log(
//         `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
//     );
// }, 1000);

const eleves = [
  {
    firstname: "Maurane",
    lastname: "Hugon",
    age: 31,
    grade: [10, 2, 12, 20, 11],
  },
  {
    firstname: "Titiana",
    lastname: "Hugon",
    age: 37,
    grade: [5, 15, 12, 10, 14],
  },
  {
    firstname: "Fawsy",
    lastname: "Limlahi",
    age: 29,
    grade: [5, 19, 17, 1, 16],
  },
];
console.log(eleves);
const json = JSON.stringify(eleves);
console.log(json);

console.log('Let\'s start the script')

let ajax = function(url){
    let xhrObj = new XMLhttpRequest();
    xhrObj.open('GET', url, true);
    xhrObj.onreadystatechange = function(event){
        if (xhrObj.readyState == 4){
            if (xhrObj.status == 200){
                console.log('Everything is ok');
                console.log(xhrObj.response);
            } else{
                console.log('There is a problem');
            }
        }
    }
    xhrObj.send(null);
};
ajax('https://jsonplaceholder.typicode.com/users');

console.log('End of script !')