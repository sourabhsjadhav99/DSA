const container = document.querySelector(".run-time-output"); //REF of HTML NODE

const para = document.querySelector("p.message"); //OBJECT
const paragraphs = document.querySelectorAll("p.message"); //ARRAY of ALL OCCURANCE [HTMLNODE P, HTMLNODE P, HTMLNODE p]
console.log(para); //GIVES the first occurance HTML REFERENCE
console.log(paragraphs); //GIVES the first occurance HTML REFERENCE
const messageNodes = document.getElementsByClassName("message"); //[ARRAY] [6]

const element = document.querySelector("div").children;

const countries = document.querySelectorAll("table tr td:last-child");

setTimeout(() => {
  for (let country of countries) {
    container.innerHTML += country.innerHTML + "<br/>";
  }
}, 2000);





//TAKE REF of WHERE TO ADD
//CREATE ELEMENT and STORE REF of NEWLY CREATED REF
//ADD RELEVANT CONTENT
//APPEND to CONTAINER REF wHICH is CREATED on STEP 1



const captionEle=document.createElement('caption');//HTMLNODE

captionEle.innerHTML="THIS is TABLE CAPTION"



const rowRef=document.querySelectorAll('table tr');//TAKE REF of WHERE TO ADD

document.querySelector('table tr:first-child').prepend(document.createElement('th').innerHTML='S.NO');

setTimeout(() => {
//document.querySelector('table').appendChild(captionEle)
var count=0;
for (let row of rowRef) {
    if(count==0){
        count++;
        continue;
    }
    const serialNumber=document.createElement('td');//ACCEPTS ONLY TAGNAME
    serialNumber.innerText=count;
    serialNumber.setAttribute('class', 'serial-number');
    row.innerHTML= serialNumber.outerHTML+row.innerHTML;
    count++;
  }

}, 5000);
