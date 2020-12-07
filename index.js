const testVar = {}

function testFunc() {
  return "hi"
}


const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "h"},
  {year: "2016", result: "N/A"}
]


function superbowlWin(array){
let res=array.find(element=>element.result==="W")
return res.year;
//undefined;
return res;
}
 
 
/*function superbowlWin(array){
for(let i=0;i<array.length;i++)
 if(array[i].result==="W"){
  return array[i].year;
}
return undefined;
}*/