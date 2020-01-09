var page = 0;
      nextPage();
      function GetUrlValue(VarSearch){
        var SearchString = window.location.search.substring(1);
        var VariableArray = SearchString.split('&');
        for(var i = 0; i < VariableArray.length; i++){
          var KeyValuePair = VariableArray[i].split('=');
          if(KeyValuePair[0] == VarSearch){
            return KeyValuePair[1];
          }
        }
      }
      var projectID = GetUrlValue('project');
      var projectIdAsString = projectID.toString;
      function nextPage() {
        page = page + 1;
        if (page == 1) {
          document.getElementById('contents').innerHTML = '<br><br><br><br><br><br>By continuing, you acknowledge that your project is as minified as possible (3 sprites maximum), does not contain any backdrop scripts, and will not alter system gOS code.<br><br><a href = "javascript:nextPage();"><img width = "50px" src = "nextBtn.png">';
        } else if (page == 2) {
          document.getElementById('contents').innerHTML = '<br><br><br><br><br><br>You also understand that the Green OS team reserves the right to modify your submission to make it compatible with Green OS.  If you would like to preview your project before submission, you will be able to do so on the next page.<br><br><a href = "javascript:nextPage();"><img width = "50px" src = "nextBtn.png">';
        } else if (page == 3) {
          document.getElementById('contents').innerHTML = '<br><br><br><br><br><br><iframe height = "360px" width = "480px" src = "https://forkphorus.github.io/app.html?id=' + projectID + '"></iframe><br><br><a href = "javascript:nextPage();"><img width = "50px" src = "nextBtn.png">';
        } else if (page == 4) {
          document.getElementById('contents').innerHTML = '<br><br><br><br><br><form action="https://api.slapform.com/hi@micahlindley.com/?slap_redirect=https://green.micahlindley.com&slap_subject=gOS-Packager" method="POST"><div class="container" style="float: none; text-align: center;"><div class="row"><div class="col"><div class="form-group"></div><div class="form-group"><div class="form-group" style=""><label>Project ID</label><input type="text" class="form-control" readonly = "true" value = "' + projectID + '"></div><label>Your Scratch username<br></label><input name="name" type="text" class="form-control"></div><div class="form-group"></div><button type="submit" class="btn btn-primary" style="background-color: #00C98F;border-style:none;">Submit</button><br></div></div></div></form>';
        }
      }
