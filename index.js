const testVar = {}

function testFunc() {
  return "hi"
}


const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "L"},
  {year: "2016", result: "N/A"}
]


 let superbowlWin = record.find(function (element) { 
        if(element.result==="W")
        return element.year;
        return undefined;
    }); 

