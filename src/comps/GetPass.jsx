import React, { Component} from 'react'
import {Button} from 'react-native'
import $ from 'jquery'
import {en,de} from "./sec"

var varsGet=""
function GetPass(vars){
  varsGet=vars
    return (
      <div className="App">
        <Button id="getPassBtn" title="get password" onPress={getPass}></Button>
        <table id="getPassTable"></table>
      </div>
    )
  
}
function getPass(){
  var usu_id=de(varsGet.vars.usu_id)
  usu_id=parseInt(usu_id)  
  var resJson=""
  fetch("https://securitypassword.cyclic.app/getRegisters/?usu_id="+usu_id, {method : 'GET',})
  .then(function(response) {
     return response.json(); })
    .then(function(json) {
      var data=de(json.data)
      console.log(data)
      if(data!=""){
        var changeTable=""
        resJson=JSON.parse(data)

        var table=document.getElementById("getPassTable")
        table.innerHTML=""
        var i=0;
        for(var r in resJson){
          var regId=de(resJson[r].reg_id)
          var row = table.insertRow(i);
          var cellName = row.insertCell(0);
          var cellPass = row.insertCell(1);
          var cellDel = row.insertCell(2);
          cellName.append(de(resJson[r].reg_name))
          cellPass.append(de(resJson[r].reg_pass))
          var command= 'fetch("https://securitypassword.cyclic.app/delRegister/?reg_id='+regId+'", {method : "GET",}).then()'
          cellDel.innerHTML="<input type='button' value='delete' onclick='"+command+"' id='delBtn"+r+"' ></Button>"
          console.log("key "+r+" "+regId)
          i+=1;
        }
      }
    });
}
export default GetPass;