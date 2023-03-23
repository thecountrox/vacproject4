// Fill the three missing number in given array list 10,30,40,60,70,80,100,110
let arr = [10,30,40,60,70,80,100,110],i;
for(i=0;i < arr.length; i++)
{
  if((i+1)*10 != arr[i])
  {
    // add the element i+1*10 to the array and shift the array
    arr.splice(i,0,(i+1)*10);
  }
}
document.write(arr);
