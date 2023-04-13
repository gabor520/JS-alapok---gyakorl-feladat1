window.addEventListener("load", function () {
  /* elemekElerese1(); */
/*   elemekElerese2(); */
    elemekElerese3();
  elemekElerese4();
/*   elemekFormazasa1(); */
});

function elemekElerese1() {
  /**Ide jön az első feladat */
  const ELEM = document.querySelectorAll("section:nth-child(1)h2")[0];
  let html = document.getElementById("f1").innerHTML;

  //**+kiirtam */
  console.log(html);
}
function elemekElerese2() {
  const ELEM = document.getElementByID("ide");
  let html = "<p>Idegdfeh</p>";
  ELEM.innerHTML=html
  //**+kiirtam */
  console.log(html);
}

function elemekElerese3(){
    const ELEM=document.getElementsByClassName("ide")[0];
    console.log("hahó");
    ELEM.innerHTML += "<p>Jó reggelt</p>";

}



function elemekElerese4() {
  const ELEM = document.getElementsByClassName("lista")[0];
  Math.floor(Math.random() * 30) + 10;
  /**Ide jön az 3. feladat */
  const a = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30,
  ];
  let n;
  let r = [];
  for (n = 1; n <= 5; ++n) {
    let i = Math.floor(Math.random() * (30 - n) + 10);
    r.push(a[i]);
    a[i] = a[30 - n];
  }
  ELEM.innerHTML += 
}
function elemekFormazasa1() {
  const ELEM = document.querySelectorAll("formazott");
  ELEM.classList.add("formazott");
}

const ELEM1 = document.querySelectorAll("lista");
document.addEventListener("click", function () {
const ELEM2 = document.getElementById("kattintasutan").innerHTML;
});

const ELEM = document.querySelectorAll("feladat");
/* document.addEventListener("click", myFunction); */
