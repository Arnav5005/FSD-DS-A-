function test1(){
    setTimeout(()=>{
        console.log("task1")
    },4000)
}

function test2(){
    setTimeout(()=>{
        console.log("task2")
    },2000)
}
test1()
test2()