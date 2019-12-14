function getTrainList() {
    var ss = SpreadsheetApp.openById(trainId);
    var sheet = ss.getSheetByName(trainName); 
    var list  = sheet.getRange(trainIdColumnRow,trainIdColumnNumber, sheet.getLastRow()-1, 1).getValues();
    var values  = list.toString().split(",");
    Logger.log(JSON.stringify(values))
    return JSON.stringify(values); //Modified
}


function parseTrain(){getTrainList()}


function getTrainInfo(train){
  var trainSS = SpreadsheetApp.openById(trainId);
  //var trainSheet=trainSS.getSheetByName(trainName)
  var trainTable=getUserTable(trainSS,trainName,trainrangeList);
  var trainIndx=getValueArrRangeListApp(trainTable,trainListName,"ID",train);
  //["ID", "ID Таблиц","Имя Листа","rangeList"]
  var trainInfo=trainTable.map(function(item,i,arr){return item[trainIndx]});
  Logger.log('getTrainInfo-'+trainInfo)
 return trainInfo;

 }
function getUsersInfoJONS(arrTelInfoUsers){
 var objUserInfo={};
var arr=arrTelInfoUsers.map(function(UserInfo){return getUserInfoJONS(UserInfo)})
var volondDiv='<div class="row">'+
     '<div class="col s12">'+
'<ul class="contact-info">'+

'<li><a href="https://t.me/volond"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Desing by @volond 2020</font></font></a></li>'+
'</ul>'+
      '</div>'
objUserInfo['userInfo']='<div class="card-panel">'+arr.join('\n')+'</div>'+volondDiv
return JSON.stringify(objUserInfo)



}

 function getUserInfoJONS(UserInfo){
  var objUserInfo={};
  var strUserInfo1= 
 '<div class="col s12"> <div id=" class="card-panel">'+
 '<h5 class="left-align teal-text">Информация о '+UserInfo[1]+' по номеру телефона '+UserInfo[2]+' указаному при регистрации</h5>'+
      '<table  class="centered" class="bordered">'+
      '<thead><tr>'+
            '<th><span class="blue-text text-darken-2"><p class="flow-text"><i class = "material-icons vertical-align-middle md-24">assignment</i></p></span></th>'+
            '<th><span class="blue-text text-darken-2"><p class="flow-text"><i class = "material-icons vertical-align-middle md-24">group</i></p></span></th>'+
            '<th><span class="blue-text text-darken-2"><p class="flow-text"><i class = "material-icons vertical-align-middle md-24">contact_phone</i></p></span></th>'+
            '<th><span class="blue-text text-darken-2"><p class="flow-text"><i class = "material-icons vertical-align-middle md-24">hotel</i></p></span></th>'+
          '</tr></thead>'+
        '<tbody><tr>' ;
   var strUserPrice1='<div class="col s12"> <div  class="card-panel">'+
   
   
   '<h5 class="left-align teal-text">Информация об оплате</h5>'+
      '<table  class="centered" class="bordered">'+
      '<thead><tr>'+
            '<th><span class="blue-text text-darken-2"><i class = "material-icons vertical-align-middle md-24">apartment</i> Всего за номер</span></th>'+
            '<th><span class="blue-text text-darken-2"><i class = "material-icons vertical-align-middle md-24">train</i> Всего за проезд</span></th>'+
            '<th><span class="blue-text text-darken-2"><i class = "material-icons vertical-align-middle md-24">shopping_cart</i> Осталось доплатить</span></th>'+
          '</tr></thead>'+
        '<tbody><tr>' ;    
        
        
        
   var str2=' </tr></tbody></table>'+
   '</div>';    
   
   
 // objUserInfo['userInfo']=strUserInfo1+UserInfo.slice(0,4).map(function(i){return "<td><b>"+i+"</b></td>" }).join('\n')+str2
 // objUserInfo['userPrice']=strUserPrice1+UserInfo.slice(4,7).map(function(i){return "<td><b>"+i+"</b></td>" }).join('\n')+str2
 var nUserInfo=strUserInfo1+UserInfo.slice(0,4).map(function(i){return "<td><b>"+i+"</b></td>" }).join('\n')+str2+
               strUserPrice1+UserInfo.slice(4,7).map(function(i){return "<td><b>"+i+"</b></td>" }).join('\n')+str2
  
  //Logger.log(JSON.stringify(objUserInfo));
  
 // return JSON.stringify(objUserInfo);
 // return JSON.stringify(objUserInfo);
 return  nUserInfo
 }
function getUserInfo(trainInfo,tel){
  var spreadsheet = SpreadsheetApp.openById(trainInfo[1]);
  var sheet=spreadsheet.getSheetByName(trainInfo[2]);
   Logger.log(trainInfo[3].split(","));
  var userTable= getUserTable(spreadsheet,trainInfo[2],rangeListA1);
//   Logger.log(userTable);
  var findTel=+tel;
  Logger.log(getValueArrRangeListApp(userTable,rangeListName,"Телефон",findTel));
  var indx=getValueArrRangeListApp(userTable,rangeListName,"Телефон",findTel);
  var UserInfo=userTable.map(function(item,i,arr){ var z='-';if (item[indx]!=undefined) {z= item[indx]}else{z='-'}; return z});
  UserInfo[0]=""
  Logger.log(UserInfo);

return UserInfo;

}


function getUserTableInfo(tel,train){
  try {
var trainInfo=getTrainInfo(train);//["ID", "ID Таблиц","Имя Листа","rangeList"] Получение инфі справочника
var TelInfoUsers=getTelInfoUsers(trainInfo,train,tel)
//var UserInfo=getUserInfo(trainInfo,tel); //Получение инфі юзера
//return getUserInfoJONS(UserInfo);//Возврат инфі юзера в JSON b HTML
return getUsersInfoJONS(TelInfoUsers)

} catch (err) {
  return err.name + ' ' + err.message;
}
}

function getUserTableInfoDeFolt(){
  try {

var UserInfo=["","","","","","",""]; //Получение инфі юзера
return getUserInfoJONS(UserInfo);//Возврат инфі юзера в JSON b HTML
} catch (err) {
  return err.name + ' ' + err.message;
}
}


function getTelInfoUsers( trainInfo,train,tel){

//var [train,tel]=['Заезд №2 даты 25.01.2020-03.02.2020',380983264737]
//var trainInfo=getTrainInfo(train);
var spreadsheet = SpreadsheetApp.openById(trainInfo[1]);
var sheet=spreadsheet.getSheetByName(trainInfo[2]);


var userTable= getUserTable(spreadsheet,trainInfo[2],rangeListA1);


var indexs=userTable[2].map(function (elem, index,arr){ if(elem.toString()==tel.toString()){return index}else{return -1}

})
Logger.log("indexs"+indexs)

//var ind2=indexs.filter(function(el){return el!==-1})
var ind2=[]
indexs.forEach(function(el,ind){ if(el!==-1){ind2.push(el)}})
Logger.log("ind2-"+ind2)
var TelInfoUsers=userTable.map(function(el,i,ut){



return ind2.map(function(e,ind,arr){return el[e]})



})
var w=transpose(TelInfoUsers)
Logger.log("getTelInfoUsers"+w)
return w;
}