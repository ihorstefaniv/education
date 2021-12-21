//task 1
document.getElementById("test").innerHTML = "Last";
document.querySelector("#test").innerHTML = "Last2";

//Task2

let el = document.getElementsByClassName("image")[0];
el.scr = "cat.jpg";
alert(el.outerHTML);

//Task3

let elem = document.querySelectorAll("#text p");

for (let i = 0; i < elems.length; i++) {
    console.log("Selector text " + i + ": " + elems[i].innerHTML);
}

//Task4
//v1
let firstElement = document.getElementById("list").firstChild.innerHTML;
let lastElement =  document.getElementById("list").lastChild.innerHTML;
let secondElement = document.getElementById("list").firstChild.nextSibling.innerHTML;
let fourthElement = document.getElementById("list").lastChild.previousSibling.innerHTML;
let thirdElement = document.getElementById("list").FirstChild.nextSibling.nextSibling.innerHTML;
//v2
let parentElement = document.getElementById("list");
let firstElement = parentElement.childNodes[0].innerHTML;
let lastElement = parentElement.childNodes[4].innerHTML;
let secondElement = parentElement.childNodes[1].innerHTML;
let fourthElement = parentElement.childNodes[3].innerHTML;
let thirdElement = parentElement.childNodes[2].innerHTML;

console.log(firstElement);
console.log(lastElement);
console.log(secondElement);
console.log(fourthElement);
console.log(thirdElement);

//Task5
document.body.children[0].style.backroundColor = "green";
document.getElementsById("myDiv").children[0].style.fontWeight = "700";
document.getElementsById("myDiv").children[1].style.color = "red";
document.getElementsById("myDiv").children[2].style.textDecoration = "underline";
document.getElementsById("myDiv").children[3].style.fontStyle = "italic";
document.getElementsById("myDiv").style.listStyle = "none";
document.getElementsById("myDiv").style.display = "flex";
document.getElementsByTagName("span")[0].style.display = "none";

//Task 6
let information = promt("Enter your message", "");
let otherInformation = promt("Enter your other message", "");
let input1 = ducument.getElementById("input1");
let input2 = ducument.getElementById("input2");
input1.value = information;
input2.value = otherInformation;

let input1Value = input1.value;
let input2Value = input2.value;

input1.value = input2Value;
input2.value = input1Value;

//Task7
let x = 100;
document.body.innerHTML = 
`<main class="mainClass check item">
    <div id="myDiv">
        <p>Paragraph</p>
    </div>
</main>`;