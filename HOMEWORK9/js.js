//Task1
$(h2.head) .css("backgound-color", "green");
$(.inner) .css("front-size", "35");

//Task2
$('h2.head').css('background-color', 'green').children('.inner').css('font-size', '35px');

//Task3
$("h3 + div").each((i, e) => $(e).insertBefore($(e).prev()));

//Task4
$('.form').change(function () {
    const form = $(this);
    const checked = form.children(':checkbox:checked');
    if (checked.length >= 3) {
      form.children(':checkbox').attr('disabled', 'true');
    }
  });