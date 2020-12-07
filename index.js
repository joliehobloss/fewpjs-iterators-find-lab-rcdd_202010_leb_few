const testVar = {}

function testFunc() {
  return "hi"
}


const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "o"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(array){
  a=array.find(elmenet=>elmenet.result==="W")
  return a.year
  
}

function superbowlWin(array) {
    let result = array.find((element) => element.result==="W")
    return result.year;
    });
    return undefined;
}
 
/*function superbowlWin(array){
for(let i=0;i<array.length;i++)
 if(array[i].result==="W"){
  return array[i].year;
}
return undefined;
}*/