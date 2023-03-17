const arr = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]

arr.forEach((e,index)=>{
    // console.log("Days are - ",e);
    console.log(`Starts with ${index+1} -- ${e}`);
})

//Some More Examples                                    

const arr2 = ["Math", "Physics", "CS", "Chem"]                       

arr2.forEach((e,index)=>{
    console.log(`Subjects are ${e} on number ${index+1}`);
})

const toDo = ["Assignments", "Gym", "Learning", "Dinner", "Self", "Shopping"]

console.log("To do list -");
toDo.forEach((to, indexValue,toDo)=>{
    console.log(`${indexValue+1} - ${to}`);
})