let data=["chrome",true,132.8]
console.log("Intail data values :  "+data);
data[5]="webkit"
console.log("Data after added index 5 :"+data)
data.pop()
console.log("data after pop values  :"+data)
data.push("firefox")

console.log("data after push new value :" +data)
data.shift();
console.log("Data after shift :"+data)

for(value of data)
{
    console.log("data using for of loop :" +value)
}
data.forEach((values)=>{
console.log("data using for each :" +values)
})