let arr = [], french = [], german = [];

// for loop to fill the array arr with numbers from 1 to 25
for (let i = 0; i < 25; i++) 
{
  arr[i] = i + 1;
}

// for loop to seperate all odd numbers into french array and even numbers to german array
for (let i = 1; i < 25; i++)
{
  if (arr[i] % 2 == 0)
  {
    german.push(arr[i]);
  }
  else
  {
    french.push(arr[i]);
  }
}

console.log(german);
console.log(french);
