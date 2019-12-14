function trainNew() {
var ss = SpreadsheetApp.openById(trainId);
var sheet = ss.getSheetByName(trainName); 
var ParametrsSS = SpreadsheetApp.openById(trainId);
  //var trainSheet=trainSS.getSheetByName(trainName)
var trainTable=getUserTable(ParametrsSS,parametrsName,parametrsrangeList);
var l = sheet.getLastRow()
  
    
  if(l==range.getRow() && sheet.getSheetName()==trainName && range.getColumn()==19){    
    //var lastrow = sheet.getRange("D"+(l+1)+":S"+(l+1))
   // var maska = sheet.getRange("D"+(l)+":S"+(l))
   // maska.copyTo(lastrow)
    Logger.log(l)
    copyMask(sheet,("D"+(l+1)+":R"+(l+1)),("D"+(l)+":R"+(l)))
    copyMask(sheet,("A"+(l+1)),("A"+(l)),[['New']])
    copyMask(sheet,("S"+(l+1)),("S"+(l)),[['New']])
    e.source.toast("Строка добавлена")
   // var lastrow1 = sheet.getRange("A"+(l+1)+":A"+(l+1))
   // var maska1 = sheet.getRange("A"+(l)+":A"+(l))
  //  maska1.copyTo(lastrow1)
  //  lastrow1.setValue(0)
    
  }
}

