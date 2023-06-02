// document.addEventListener("contextmenu", function(e){
//   $('body').on('contextmenu', 'div.item', function() {

//     console.log('trigger');
//     document.getElementById("list").className = "show";
//     document.getElementById("rmenu").style.top = mouseY(e) + 'px';
//     document.getElementById("rmenu").style.left = mouseX(e) + 'px';

//     window.event.returnValue = false;


//   });
// }, );

// $(document).bind("click", function(event) {
//   document.getElementById("list").className = "hide";
// });

////////////////////////////////////////////////////////

// $(document).ready(function() {
//   if ($("#item").addEventListener) {
//     $("#item").addEventListener('contextmenu', function() {
//       console.log('trigger');
//     }, false);
//   }
// })


///////////////////////////////////////////////

$(document).ready(function() {


  if ($("#item").addEventListener) {
    $("#item").addEventListener('contextmenu', function(event) {
      alert("You've tried to open context menu"); //here you draw your own menu
      e.preventDefault();
    }, false);
  } else {

    //document.getElementById("test").attachEvent('oncontextmenu', function() {
    //$(".test").bind('contextmenu', function() {
    $('body').on('contextmenu', 'div.item', function(event) {


      //alert("contextmenu"+event);
      document.getElementById("list").className = "show";
      document.getElementById("list").style.top = mouseY(event) + 'px';
      document.getElementById("list").style.left = mouseX(event) + 'px';

      window.event.returnValue = false;


    });
  }

});

// this is from another SO post...  
$(document).bind("click", function(event) {
  document.getElementById("list").className = "hide";
});




function mouseX(evt) {
  if (evt.pageX) {
    return evt.pageX+5;
  } else if (evt.clientX) {
    return evt.clientX + (document.documentElement.scrollLeft ?
      document.documentElement.scrollLeft :
      document.body.scrollLeft);
  } else {
    return null;
  }
}

function mouseY(evt) {
  if (evt.pageY) {
    return evt.pageY+5;
  } else if (evt.clientY) {
    return evt.clientY + (document.documentElement.scrollTop ?
      document.documentElement.scrollTop :
      document.body.scrollTop);
  } else {
    return null;
  }
}