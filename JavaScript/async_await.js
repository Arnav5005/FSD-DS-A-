function f1(){
    console.log("HI");
}
function f2(){
    console.log("ABES Engineering college");
}
async function test(params) {
    try{
        await f1();
        await f2();
    }
    catch(err){
        console.log("ERROR",err)
    }
}
test()