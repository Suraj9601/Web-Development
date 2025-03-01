let todo = [];

let req = prompt("Please enter your request");

while(true){
    if(req === "exit"){
        console.log("Exit from app");
        break;
    }  
    
    if(req === "list") {
        console.log("-----------------");
        for(let i=0; i<todo.length; i++)  {
            console.log(i,todo[i]);
        }
        console.log("-----------------");
    } else if(req == "add") {
        let task = prompt("Please enter your task you want to add");
        todo.push(task);
        console.log("task added");
    }else if (req == "delete") {
        idx = prompt("Please enter your task index");
        todo.splice(idx, 1);
        console.log("task deleted")
    }
    else {
        console.log("Invalid request");
    }
    req = prompt("Please enter your request");
}