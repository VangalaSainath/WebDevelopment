let inp1=document.getElementById("inp1")
let inp2=document.getElementById("inp2")
let h1=document.getElementById("h1")
function sub(){
    let d=Number(inp1.value)- Number(inp2.value)
    h1.innerHTML=d
}
function add()
{
    let d =Number(inp1.value)+ Number(inp2.value)
    h1.innerHTML=d
}
function mul(){
    let d= Number(inp1.value)* Number(inp2.value)
    h1.innerHTML=d
}
function div(){
    let d= Number(inp1.value)/Number(inp2.value)
    h1.innerHTML=d
}
function mod(){
    let d= Number(inp1.value)% Number(inp2.value)
    h1.innerHTML=d
}
