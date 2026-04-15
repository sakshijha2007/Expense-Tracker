document.getElementById("addbtn") .addEventListener("click", () => {
    alert("Add Transaction Clicked")
});
const txList = document.getElementById("txList");

function addTransaction(name, amount) {
    const li = document.createElement("li");
    li.textContent = '${name} - ${amount}' ;
    txList.appendChild(li); 
}

addTransaction("Uber Ride", "-$20");