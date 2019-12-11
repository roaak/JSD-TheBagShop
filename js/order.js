console.log("connected")
$(document).ready(function(){

      var array = Array();
      var li;
      $("#submitform").on('click', function (e) {
        e.preventDefault()
          var text1= $("#item_name").val();
        //  $("#result1").html(text1);
          array.push(text1);
          console.log(text1);
         var text2= $("#item_type option:selected").text();
        //  console.log("**",text2);
        //  console.log(typeof(text2));
         // $("#result2").html(text2);
          array.push(text2);
          console.log(text2);
         /* var v = $("#item_type").val();
        $("#item_type option[value="+v+"]").text()
          console.log(v);*/
         /* var v1 = $("#item_quentity").val();
          $("#item_quentity option[value="+v+"]").text()
                    console.log(v1);*/
          var text3= $('#item_quentity option:selected').text();
        //  $("#result3").html(text3);
          array.push(text3);
          console.log(text3);
          
          console.log(array);
       //   var populateList = function(array){
          var str =  '<li>' + array + '</li>';
          
        //  for(var i = 0; i < array.length;){
             // str += '<li>' + array + '</li>';
          //    i++;
                
        //  }
        //  return str;
        //  }
        var perrow = 3, // 3 items per row
        html = "<table><tr>";

  // Loop through array and add table cells
  for (var i=0; i<array.length; i++) {
    html += "<td>" + array[i] + "</td>";
    // Break into next row
    var next = i+1;
    if (next%perrow==0 && next!=array.length) {
      html += "</tr><tr>";
    }
  }
  html += "</tr></table>";

  // ATTACH HTML TO CONTAINER
  document.getElementById("result").innerHTML = html;
  tags.table.style.textAlign = "center";     
  /*var result = $("#result");   
          result.html( str +"<br>"); */
         
//$("#result").html("Your Order:" + "<br>" + "<li>"+ array+ "</li>");
        

       
        
        //   $("#div2").val() = $("#item_type").val();
        //   $("#div3").val() = $("#item_quentity").val();
      });

});