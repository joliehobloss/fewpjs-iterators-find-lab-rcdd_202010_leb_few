const testVar = {}

function testFunc() {
  return "hi"
}


const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]


/*function superbowlWin(array){
 array.find(function (element) { 
        if(element.result==="W"){
        return element.year;
        }else{
        return undefined;}
    }); 
}*/
 
 
function superbowlWin(array){
for(let i=0;i<array.length;i++)
 if(array[i].result==="W"){
  return array[i].year;
}

}