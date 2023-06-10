// callback hell
$(".btn-1").click(function () {
  $(this).fadeOut(500, () =>
    $(".btn-2").fadeIn(500, function () {
      $(this).click(function () {
        $(this).fadeOut(500, () =>
          $(".btn-3").fadeIn(500, function () {
            $(this).click(function () {
              $(this).fadeOut(500, () =>
                $(".btn-4").fadeIn(500, function () {
                  $(this).click(function () {
                    $(this).fadeOut(500, () =>
                      $(".btn-5").fadeIn(500, function () {
                        $(this).click(function () {
                          $(this).fadeOut(500, () =>
                            $(".btn-6").fadeIn(500, () =>
                              alert("all callback completed")
                            )
                          );
                        });
                      })
                    );
                  });
                })
              );
            });
          })
        );
      });
    })
  );
});
