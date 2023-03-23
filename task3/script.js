console.log("checking if this works or what");
// initialize an array
let a = 20;
let arr = [20,30,53,40,50,57,60,70,80,90];
for(let i = 0; i < arr.length; i++)
{
  if(arr[i]%2!=0)
  {
    arr.splice(i,1);
  }
}
console.log(arr);
