var clear=document.getElementById("delete")
var addbtn=document.getElementById("btn")
var list=document.getElementById("list")
var text=document.getElementById("text")
var result=document.getElementById("result")
var clearall=document.getElementById("clearall");


addbtn.addEventListener('click',()=>{

if(text.value==" "){
   alert("You must write something!") ;


}else{
    var li=document.createElement('li')
    list.appendChild(li);

 li.textContent=text.value
 text.value=" "
var span=document.createElement('span')
span.innerHTML=`<i id="delete" class="fas fa-trash"></i>`
li.appendChild(span)
span.addEventListener('click',()=>{
    li.remove()
})
var done=document.createElement("p");
done.classList.add("done");
done.innerHTML=`<i class="fas fa-check-double"></i>`
li.appendChild(done);

done.addEventListener('click',()=>{
result.appendChild(li)
done.style.display="none"

})
clearall.addEventListener('click',()=>{
    li.remove()
    })
}


})

