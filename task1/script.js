//declaration of Array
let a = [10];

//for loop to take input from user
for (let i = 0; i < 10; i++) {
  a[i] = Number(prompt("Enter Employee ID"));
}

//for loop to sort the elements of the array in acending order
for (let i = 0; i < 10; i++) {
  for (let j = i + 1; j < 10; j++) {
    if (a[i] > a[j]) {
      let temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
}

//for loop to display the sorted array
for (let i = 0; i < 10; i++) {
  console.log(a[i]);
}
