let nameIn = document.querySelector(".name");
let budget = document.querySelector(".sum");
let price = document.querySelector(".price");
let rest = document.querySelector(".rest");
let list = document.querySelector(".list");
let add = document.querySelector(".add");
let moneyleft = document.querySelector(".money-left");

let arr = [];
//get data and diaplay

//prompt
let InitialAmount = Number(prompt("enter Initial Amount"));
budget.innerHTML = InitialAmount;

moneyleft.innerHTML = `remaining:<span class ='remainingVal'>${InitialAmount}</span>`;
//this function will display the remain data

function displayData(nameval,priceval){
   let dataToDisplay;
   nameval = nameIn.value;
   priceval = price.value;
   dataToDisplay = {'nameval':nameval,'priceval': priceval};
  arr.push(dataToDisplay);
  console.log(arr); 
  
   list.innerHTML += `<p >${nameIn.value}</p>`;
   localStorage.getItem('price'); 
  
}
//get remaining budget
let remainingVal = document.querySelector(".remainingVal");
let newSum = Number(remainingVal.innerHTML);
console.log(newSum);
//calc budget
function redu(arrr) {
    if (newSum > price.value) {
      displayData();
      newSum = arrr.reduce(
        (remainingVal, priceval) => Number(remainingVal) - Number(priceval.priceval),
        InitialAmount
        );
        moneyleft.innerHTML = Number(newSum);
      } else {
        alert("you dont have enough money");
      }
      list.innerHTML +=`<span class = 'inputPrice'>
      ${price.value}</span><button class="delet">remove</button>`;
      // removeBtn();
      
  }

//add event listener 
    add.addEventListener("click", function () {
      redu(arr);
      localStorage.setItem('price' , JSON.stringify(arr));
      console.log(arr); 
});


function removeBtn() {
  let deletBtn = document.querySelectorAll(".delet");
  deletBtn.forEach((elment, index) => {
    elment.addEventListener("click", (e) => {
      arr.splice(index, 1);
      e.target.parentElement.remove();
      redRem();
       console.log(arr[index]);
       JSON.parse(localStorage.setItem( 'price',JSON.stringify(arr)));
    });
  });
}


function redRem() {
  let prices = document.querySelectorAll(".inputPrice");
  let pricesArr = [...prices].map(function (number) {
      return Number(number.innerHTML);
    });
    console.log(pricesArr);
  let sumPrice = pricesArr.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
  moneyleft.innerHTML = InitialAmount - sumPrice;
}

function getDataFromLocalStorageAndDisplay(){
  let localStorageData = JSON.parse(localStorage.getItem('price'));
  console.log(localStorageData);
  displayData(localStorageData);
}
console.log(getDataFromLocalStorageAndDisplay());

