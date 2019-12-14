function myFunction() {
  
}

var isNaneSheetPatern=function(pattren,md,name){ var regexp =new RegExp(pattren,md);return function(regexp,name){return  }}

//var getSheetsName=function(ss){return  ss.getSheets().map(function(sh){return sh.getName()});

function getSheetById(id) {
  return SpreadsheetApp.getActive().getSheets().filter(
    function(s) {return s.getSheetId() === id;}
  )[0];
}


function getActiveSheetName() {
  return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName();
}
