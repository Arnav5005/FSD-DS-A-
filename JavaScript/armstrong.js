// let n=Number(prompt("Enter number : "))
let n=153
let num=n
let dig=0;
let sum=0;
while(n>0){
    n=Math.floor(n/10);
    dig++;
}
n=num
while(num>0){
    let currDig=num%10;
    num=Math.floor(num/10);
    sum+=currDig**dig
    
}
if(sum==n){
    console.log("Armstrong")
}
else{
    console.log("Not an armstrong");
}