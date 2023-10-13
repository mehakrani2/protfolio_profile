function show(){
  var btn = document.getElementById("btn");
  var header = document.getElementById("header");

  if(header.style.marginLeft != "-300px"){   
    header.style.marginLeft = "-300px"
  }
  else{
    header.style.marginLeft = "300px"
  }
}

$(document).ready(function () {
  $("#all").click(function () {
      $("#wc1").show();
      $("#wc2").show();
      $("#wc3").show();
      $("#wc4").show();
      $("#wc5").show();
      $("#wc6").show();
      $("#wc7").show();
      $("#wc8").show();
  })

  $("#word").click(function () {
      $("#wc1").hide();
      $("#wc2").hide();
      $("#wc3").hide();
      $("#wc4").show();
      $("#wc5").show();
      $("#wc6").hide();
      $("#wc7").hide();
      $("#wc8").hide();
  })

  $("#excel").click(function () {
      $("#wc1").show();
      $("#wc2").show();
      $("#wc3").show();
      $("#wc4").hide();
      $("#wc5").hide();
      $("#wc6").hide();
      $("#wc7").hide();
      $("#wc8").hide();
  })

  $("#ui").click(function () {
    $("#wc1").hide();
    $("#wc2").hide();
    $("#wc3").hide();
    $("#wc4").hide();
    $("#wc5").hide();
    $("#wc6").hide();
    $("#wc7").show();
    $("#wc8").show();
  })
})