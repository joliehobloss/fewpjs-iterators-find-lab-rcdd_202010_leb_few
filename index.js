const testVar = {}

function testFunc() {
  return "hi"
}


const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(array) {
let result = array.find((element) => element.result==="W")
return result?result.year:undefined;
}
 
/*function superbowlWin(array){
for(let i=0;i<array.length;i++)
 if(array[i].result==="W"){
  return array[i].year;
}
return undefined;
}*/