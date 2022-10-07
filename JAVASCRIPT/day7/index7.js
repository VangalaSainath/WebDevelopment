console.log(window);
console.log(document);
console.log(document.title);
console.log(document.URL);
document.title="J-KART"
console.log(document.domain);
console.log(document.doctype);
console.log(document.body);
console.log(document.head);
let e=document.getElementsBytagName("h1")

console.log(e);
e.textContent="ABC"
e[0].textContent="HE IS GOBLIN"
e[1].textContent="HS IS GOBLIN"
let q1=document.querySelectorAll("*")
console.log(q1);