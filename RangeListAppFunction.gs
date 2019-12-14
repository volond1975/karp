//https://github.com/tanaikech/RangeListApp

function getValuesRangeListAppFlatten(spreadsheet,rangeList){
var r = RangeListApp.getSpreadsheet(spreadsheet).getRangeList(rangeList).getValues();
Logger.log("getValuesRangeListAppFlatten "+r)
 return r.map(function(i){return flatten(i.values)})
}

function getValueArrRangeListApp(arrRangeListAppFlatten,rangeListName,findName,findValue,resultatName){

return resultatName!=undefined?
arrRangeListAppFlatten[rangeListName.indexOf(resultatName)][arrRangeListAppFlatten[rangeListName.indexOf(findName)].indexOf(findValue)]:
arrRangeListAppFlatten[rangeListName.indexOf(findName)].indexOf(findValue)
}
/*
function getRangeListSheetByName(spreadsheet,sheetName,A1Not,splice){
var sheet=spreadsheet.getSheetByName(sheetName)
var lr=sheet.getLastRow()
Logger.log("getLastRow( "+lr)
A1Not.splice(splice,1)
Logger.log("getRangeListSheetByName "+A1Not)
return A1Not.map(function(i){return "'"+fTransfer+"'!"+(i+lr)})
}
*/
function getRangeListSheetByName(spreadsheet,sheetName,A1Not,splice,z){
var sheet=spreadsheet.getSheetByName(sheetName)
var lr=sheet.getLastRow();

Logger.log("getLastRow( "+lr)
A1Not.splice(splice,1)
Logger.log("getRangeListSheetByName "+A1Not)
return A1Not.map(function(i){return z!=undefined?"'"+fTransfer+"'!"+(i+lr):"'"+fTransfer+"'!"+i})
}


  
function getUserTable(spreadsheet,sheetName,rangeList){
var sheet=spreadsheet.getSheetByName(sheetName)
var lr=sheet.getLastRow()
var rangeList=rangeList.map(function(i){return "'"+sheetName+"'!"+i+lr})
var arrRangeListAppFlatten=getValuesRangeListAppFlatten(spreadsheet,rangeList)
return arrRangeListAppFlatten 
}

