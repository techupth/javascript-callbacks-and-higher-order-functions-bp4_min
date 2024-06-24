// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];
function addSalaries(salaries){
  return salaries + 5000
}
function processArray(callbackOperation,arr){
  
  for(let i=0; i< employeeSalaries.length; i++){
    newEmployeeSalaries.push(callbackOperation(arr[i]))
  }
  return newEmployeeSalaries
}
processArray(addSalaries,employeeSalaries)
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
