// step 1: add event listeners
document.getElementById("btn-deposite").addEventListener("click", function () {
  // deposite
  let inputdeposite = document.getElementById("deposite-input");
  let depositeamount = inputdeposite.value;
  console.log(depositeamount)
  let newfullnum = parseFloat(depositeamount);
  let deposite = document.getElementById("deposite");
  let depositetotal = deposite.innerText;
  let newfullnum2 = parseFloat(depositetotal);
  let currentdepositetotal = newfullnum + newfullnum2;
  
  if ( depositeamount === '') {
      alert('please enter a amount');
      return;
    }
    deposite.innerText = currentdepositetotal;
  inputdeposite.value = "";


  //  balance added
  let balanceTotalelememt = document.getElementById("balance");
  let prevbalance = balanceTotalelememt.innerText;
  let flaotbalance = parseFloat(prevbalance);
  let currentbalance = flaotbalance + currentdepositetotal;
  balanceTotalelememt.innerText = currentbalance;
});

// widraw
document.getElementById("btn-widraw").addEventListener("click", function () {
  let inputwidraw = document.getElementById("widraw-input");
  let widrawamount = inputwidraw.value;
  let newfullwidraw = parseFloat(widrawamount);

  
//   console.log(widrawamount);
  if (isNaN(newfullwidraw)) {
    alert("Please enter a valid withraw amount")
    return;
  }


  // balance
  let balanceTotalelememt = document.getElementById("balance");
  let prevbalance = balanceTotalelememt.innerText;
  let flaotbalance = parseFloat(prevbalance);
//   console.log(prevbalance);

  let cutbalance = flaotbalance -  newfullwidraw;
// console.log(cutbalance);
if (flaotbalance < newfullwidraw) {
    alert(`you don't have enough money to withdraw`)
    return;
}
balanceTotalelememt.innerText = cutbalance;






let widrawdield = document.getElementById('widraw');
let newwidrawamount = widrawdield.innerText;
let newwidraw = parseFloat(newwidrawamount);
let tatalshow = newwidraw + newfullwidraw;
widrawdield.innerText = tatalshow;
// console.log(typeof tatalshow);

  // //////////////

  inputwidraw.value = "";







});
