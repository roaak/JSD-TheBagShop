/*$(document).ready(function(){
  
  $(".addButton").on("click", function(event,ids,names){
      //var wishlistid = new Array();
    // var wishlistnames = new Array();
      wishlistid = ids;
      wishlistnames = names;
      event.preventDefault();
      var button = $(this);
      var parent = button.parent(); // We need to find the container in which to seach our fields.
      var idProduct = parent.find("input[name$='.id']").val(); // Find the ID
      var nameProduct = parent.find("input[name$='.name']").val(); // Find ather data
      alert("new item added to wish list id = " + idProduct + " and name = " + nameProduct);
      document.getElementById("demo").innerHTML = idProduct;
      // Next step is the ajax method to call the server with the correct data. 
     

  });
 
});*/

var x = 0;
var array = Array();
function add_element_to_array()
{
  
  array[x] = document.getElementById("item").textContent;
  document.getElementById("number").innerHTML = array.length;
console.log(array);
  document.getElementById("messagebox").innerHTML = "Item " + array[x] + " Added to your wishlist";
/* alert("Element: " + array[x] + " Added at index " + x);*/
 x++;
// document.getElementById("BrownJewellerycase").value = "";


}

function display_array()
{
   var e = "<hr/>";   
   var x = document.getElementById("Result");
   for (var y=0; y<array.length; y++)
   {
     e += "Item " + y + " = " + array[y] + "<br/>";
   }
   x.innerHTML = e;
   if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}










/*function addItem(item){
  
var wishlist = new Array();



for(var i = 0; i < input.length; i++ ){
    var a = input[i].getAttribute("name");
    var v = input[i].value; 
    item[a] = v; 
    items.push(item);
  }
}

*/