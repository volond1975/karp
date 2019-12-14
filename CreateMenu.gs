var log = function(text) {
  Logger.log(text);
};
function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [{
    name : "CreateMenu",
    functionName : "CreateMenuList"
  },
  {
  name:'RemoveMenu',
  functionName :'RemoveMenu'
  
  },
  {
  name:'UbdateMenu',
  functionName :'UbdateMenu'
  
  }
  
  
  
  
  ];
  sheet.addMenu("Add Menu", entries);
  
};
var createMenu = function(caption) {
  return SpreadsheetApp.getUi().createMenu(caption);
};
var metod = function(menu, name, submenus, emoji) {
  if (emoji != "") {
    log("emoji");

    name = emoji + " " + name;
  }
   log(typeof submenus === "string"&&submenus != "");
  if (typeof submenus === "string"&&submenus != "") {
    log("addItem");
     log(name);
    menu.addItem(name, submenus);
  }
  if (typeof submenus === "object") {
    log("addSubMenu");
    menu.addSubMenu(submenus);
  }
  if (submenus === "") {
    log("addSeparator");
    menu.addSeparator();
  }
  return menu;
};

function CreateMenuList() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Меню");
  var data = sheet.getRange("A3:F" + sheet.getLastRow()).getValues();
  var menus = {};
  data.forEach(function(row, i, arr) {
  log('Создавать '+row[5])//continue
  if(!row[5]){
    if (!menus.hasOwnProperty(row[1])) {
    log('createMenu')
      menus[row[1]] = createMenu(row[1]);//1
    }
    log(row[0])
   log(row[0] === ""&&row[0] ===null); 
    if (row[0] === "") {
     log(' ввыполним операцию')
      menus[row[1]] = metod(menus[row[1]], row[2], row[3], row[4]);
    } else {
      log('добавим субменю')
      menus[row[1]] = metod(menus[row[1]], row[2], menus[row[0]], row[4]);
    }
  }
 }
  
  );
  log(menus);
   log(data[data.length-1][1]);
  menus[data[data.length-1][1]].addToUi();
}

function RemoveMenu() {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Меню");
     var ss = SpreadsheetApp.getActiveSpreadsheet();
    
      var data = sheet.getRange("A3:F" + sheet.getLastRow()).getValues();
       ss.removeMenu(data[data.length-1][1]);
}


function UbdateMenu(){
RemoveMenu()
CreateMenuList()
}