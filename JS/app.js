const container = document.body;
const text = document.getElementById("text");
const main = document.createElement("div");

main.classList.add("list");

var i = 1;
var j = 1;

const taskCreating = ()=>{
    div = document.createElement("div");
    div.classList.add("mini");
    div.id=`all${j++}`;
    taskBody();
    main.appendChild(div);
    container.appendChild(main);
    text.value="";
}
const taskBody = ()=>{
    taskCheckBox();
    taskLabel();
    taskDelButton();
    div.appendChild(checkBox);
    div.appendChild(label);
    div.appendChild(del);
}
const taskCheckBox = ()=>{
    checkBox = document.createElement("input");
    checkBox.type="checkbox";
    checkBox.id=`task${i++}`;
}
const taskLabel = ()=>{
    label = document.createElement("label");
    a = document.createAttribute("for");
    a.value=`${checkBox.id}`;
    label.setAttributeNode(a);
    label.innerText = text.value;
}
const taskDelButton = ()=>{
    del = document.createElement("div");
    del.classList.add("delete");
    click = document.createAttribute("onclick");
    click.value =`taskDelete(${div.id})`;
    del.setAttributeNode(click);
    span1 = document.createElement("span");
    span2 = document.createElement("span");
    del.appendChild(span1);
    del.appendChild(span2);
}
const taskDelete = (x)=>{
    x.remove();
}
document.addEventListener("keyup",(keyboard)=>{
    if(text.value !== "" && keyboard.key === "Enter") taskCreating();
})
