let todoelement=document.getElementById("info")
let tasklist=document.getElementById("tasklist")
document.getElementById("add").onclick=function(){
    if(todoelement.value.length==0){
        window.alert("Enter task")
    }
    else{
        tasklist.innerHTML= tasklist.innerHTML+`
         <div class= "task">
         <ul id="work"><li>${todoelement.value}</li></ul>
         <button class="del"><i class="fa fa-trash"></i></button>
         </div>`
    let alltasks=document.querySelectorAll(".del")
    for(i=0;i<alltasks.length;i++){
       alltasks[i].onclick=function(){
        this.parentNode.remove()
    }
  }
    let tasks=document.querySelectorAll(".task")
    for(i=0;i<tasks.length;i++){
       tasks[i].onclick=function(){
        this.classList.toggle("checked");
    }
  }
    todoelement.value=""
}
}