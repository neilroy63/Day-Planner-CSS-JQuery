$(".textb").on("keyup", function (e) {
  // 13 equates to the enter key, checks for the value from .txtb class while also ensurin the val is not an empty string
  if (e.keyCode == 13 && $(".textb").val() != "") {
    var task = $("<div class='task'></div>").text($(".textb").val());
    $(".notcomp").append(task);
    // code to help clear the input
    $(".textb").val("");
  }
});
