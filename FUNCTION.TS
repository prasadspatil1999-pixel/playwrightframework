let a=20
let b=30

function ADD(a,b)
{
    console.log(a+b)
}
ADD(500,500)

console.log("========================= Retur type Example==============================")

function adding(a,b,c)
{
     return (a+b+c)
}
const sum= adding(10,20,30)
console.log(sum)

function names ()
{
    console.log("hello, welcomre to  Type Script")
}
names()

function message()
{
    return "hello welcome to java script"
}
const mess=message()
console.log("returm tyep name enter  = : "+ mess)

function prasad (x ,y)
{
    console.log(x+y)
    let c =x+y
    return c 
}
const pra=prasad(5000,5000)
console.log(pra);


let anoynousFun= function(m,n)
{
   // console.log(m+n)
   return m-n
}
const min=anoynousFun(120,120)
console.log(min)

let namesp=function(nam)
{
   return nam
}
const n  =namesp("prasad ynuk patil")
console.log(n)

let mult= (q,w)=> console.log(q*w); mult(10,10)

let squre = d=>  console.log( d*d);squre(11)
