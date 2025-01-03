function addTask(){
    var task=$(".addYourTask").val()
    if(task===""){
        alert("Enter a task")
        return
    }
    else{
        // $("ul").append(`<li>${task}<span>\u00d7</span></li>`)
        $("ul").append(`<li>${task}<span>&#215</span></li>`)
    }
    $(".addYourTask").val("")
    saveData()
}

function saveData(){
    localStorage.setItem("data",$("ul").html())
}

function showTask(){
    $("ul").html(localStorage.getItem("data"))
}

$(".add").on("click",addTask)
$("ul").on('click','li',function (){
    $(this).toggleClass("check")
    saveData()
    console.log($('ul').html())
})

$("ul").on('click','span',function(){
    $(this).parent().remove()
    saveData()
})

$(document).on('keypress',function(e){
    if(e.key==="Enter" && $(".addYourTask").val()!==""){
        addTask()
    }
})

showTask()