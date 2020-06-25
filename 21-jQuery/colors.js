var Body = {
  SetColor: function (color) {
    $("body").css("color", color);
  },
  SetbackgroundSetColor: function (color) {
    $("body").css("backgroundColor", color);
  },
};

var Links = {
  SetColor: function (color) {
    // var alist = document.querySelectorAll("a");
    // var i = 0;
    // while (i < alist.length) {
    //   console.log(alist[i]);
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $("a").css("color", color);
  },
};
function nightDayhandler(self) {
  var target = document.querySelector("body");
  if (self.value === "night") {
    Body.SetbackgroundSetColor("black");
    Body.SetColor("white");
    self.value = "day";

    Links.SetColor("powderblue");
  } else {
    Body.SetbackgroundSetColor("white");
    Body.SetColor("black");
    self.value = "night";

    Links.SetColor("blue");
  }
}
