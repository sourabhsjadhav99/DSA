let container = document.getElementById("container");
container.style.cssText = "background:yellowgreen; border:2px solid red";
let paras = document.querySelectorAll("table tr td:nth-child(2)");
let srNo = document.createElement("th");
srNo.innerText = "Sr.No.";
let xy = document.querySelector("table tr");
xy.prepend("srNo");
let count = 0;
let xx = document.querySelectorAll("table tr");
for (let num of xx) {
  if (count == 0) {
    count++;
    continue;
  }
  let news = document.createElement("td");
  news.innerHTML = count;
  count += 1;
  num.innerHTML = news.outerHTML + num.innerHTML;
}
// const rowRef=document.querySelectorAll('table tr')
// setTimeout(() => {
//     //document.querySelector('table').appendChild(captionEle)
//     var count=0;
//     for (let row of rowRef) {
//         if(count==0){
//             count++;
//             continue;
//         }
//         const serialNumber=document.createElement('td');//ACCEPTS ONLY TAGNAME
//         serialNumber.innerText=count;
//         row.innerHTML= serialNumber.outerHTML+row.innerHTML;
//         count++;
//       }

//     }, 1000);
