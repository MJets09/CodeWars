// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    let i = arr.length;

    while (i--) (i + 1) % 2 === 0 && (arr.splice(i, 1)); 
    return arr

}

//Best Practices
function removeEveryOthers(arr){
  return arr.filter((ele,index) =>{

      return index %  2 === 0;

  });
  }





//What was the part that you was stuck on?
// Googled how could I pop out every other element. Found the filter method, why because I needed to understand I needed
//to filter out every index that wasnt a even.


//What did you learn?
//How to use the filter method, takes three parameters, the function then element and index.

let kingdom = ['Wu','Shu','Wei'];


for(let i = 0; i < kingdom.length; i++){
  console.log(kingdom[i])
}