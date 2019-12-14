function hideSheet() {
  var spreadsheet = SpreadsheetApp.getActive();
  
  var sheet=spreadsheet.getSheetByName(trainName)
  var actRange=sheet.getActiveRange()
  var hideSheet=sheet.getRange(actRange.getRow(), trainIdColumnNumber).getValue()
  //spreadsheet.setActiveSheet(spreadsheet.getSheetByName(hideSheet), true);
  spreadsheet.getSheetByName(hideSheet).hideSheet();
};

function showSheet() {
   var spreadsheet = SpreadsheetApp.getActive();
  
  var sheet=spreadsheet.getSheetByName(trainName)
  var actRange=sheet.getActiveRange()
  var hideSheet=sheet.getRange(actRange.getRow(), trainIdColumnNumber).getValue()
  spreadsheet.getSheetByName(hideSheet).showSheet().activate();
 
  //spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Заезд №1 даты 19.01.2020-27.01.2020'), true);
};


var isMask=function(){
return l==range.getRow() && sheet.getSheetName()=="СРВ" && range.getColumn()==19
}

function copyMask(sheet,rangeA1,maskA1,valuesDefault){
 
    
  var range = sheet.getRange(rangeA1)
  var maska = sheet.getRange(maskA1)
    maska.copyTo(range)
    if(valuesDefault!=undefined){ range.setValue(valuesDefault)}
    Logger.log("copyMask")
  } 
  
  
  
  


function Coordinates (range) {
  var self = this;
  self.x1 = range.getColumn();
  self.y1 = range.getRow();
  self.x2 = range.getLastColumn();
  self.y2 = range.getLastRow();
}

function Overlaps (a, b, c, d) {
  return (a >= c && a <= d) || (b >= c && b <= d) || (c >= a && c <= b) || (d >= a && d <= b);
}

function RangeIntersect (R1, R2) {

  R1 = new Coordinates (R1);
  R2 = new Coordinates (R2);

  return (Overlaps(R1.x1, R1.x2, R2.x1, R2.x2) && Overlaps(R1.y1, R1.y2, R2.y1, R2.y2));
}

function test () {
  var sheet, r1, r2, r3;
  sheet = SpreadsheetApp.getActiveSheet();
  r1 = sheet.getRange(1, 1, 2, 2);
  r2 = sheet.getRange(2, 2, 2, 2);
  r3 = sheet.getRange(4, 4);

  Logger.log("%s %s overlap %s", r1.getA1Notation(), (RangeIntersect(r1, r2) ? "does" : "does not"), r2.getA1Notation());
  Logger.log("%s %s overlap %s", r2.getA1Notation(), (RangeIntersect(r2, r3) ? "does" : "does not"), r3.getA1Notation());
  Logger.log("%s %s overlap %s", r1.getA1Notation(), (RangeIntersect(r1, r3) ? "does" : "does not"), r3.getA1Notation());

  return;
}



function deleteSheet() {
 var spreadsheet = SpreadsheetApp.getActive();
  
  var sheet=spreadsheet.getSheetByName(trainName)
  var actRange=sheet.getActiveRange()
  var deleteSheet=sheet.getRange(actRange.getRow(), trainIdColumnNumber).getValue()
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName(deleteSheet), true);
  spreadsheet.deleteActiveSheet();
  spreadsheet.setActiveSheet(sheet, true);
  deleteActiveRow()
};

function deleteActiveRow() {
  var spreadsheet = SpreadsheetApp.getActive();
  
  var sheet=spreadsheet.getSheetByName(trainName)
 var actRange=sheet.getActiveRange()
  sheet.deleteRows(actRange.getRow(), actRange.getNumRows());
};

function getURLFile(){
//https://chrome.google.com/webstore/detail/copy-folder/kfbicpdhiofpicipfggljdhjokjblnhl

}

function myFunction1() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('B11').activate();
};