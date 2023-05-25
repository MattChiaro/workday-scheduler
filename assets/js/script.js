var currentTime = (dayjs().format('HH')); // current hour in 24 hour format
// var currentTime = ('14') // FOR TESTING PURPOSES ONLY! -- COMMENT THIS OUT FOR TRUE FUNCTIONALITY
var currentDate = dayjs().format('dddd, MMMM D, YYYY'); // current date in format: day of week, month, day, year


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

// saves value of text box to localstorage, as well as current date so clearCalOnNewDay works.
  $('.saveBtn').on('click', function (event) {
    event.preventDefault();
    var time = $(this).parent().attr('id');
    var text = $(this).siblings('.description').val();
    localStorage.setItem(time, text);
    localStorage.setItem('date', dayjs().format('dddd, MMMM D, YYYY'));
  });


  //Checks current time and then applies styling to each time block based on logic
  function checkTime() {
    for (i = 9; i < 18; i++) {
      var hour = $('#0' + i);
      if (($(hour).attr('id')) === (0 + currentTime)) {
        hour.addClass('present');
      } else if (Number(($(hour).attr('id'))) < (0 + currentTime)) {
        hour.addClass('past');
      } else {
        hour.addClass('future');
      }

    }

  }

  //checks localStorage and displays any saved values to their respective blocks 
  function getSavedItems() {
    for (i = 9; i < 18; i++) {
      var key = '0' + i;
      var info = $('.description');
      $('#0' + i).children(info).val(localStorage.getItem(key));
    }
  }

// If date stored in local storage doesn't match current date, you are using the calendar on a new day - so clear the calendar
  function clearCalOnNewDay() {
    if (localStorage.getItem('date') !== dayjs().format('dddd, MMMM D, YYYY')) {
      localStorage.clear();
    }
  }

  //displays current day and time at top of page
  $('#currentDay').text(currentDate);

  //executes checkTime function upon page load, and then every 5 minutes page is open. Clears local storage if new day. Gets saved items from localStorage.
  checkTime();
  setInterval(checkTime, 300000);
  clearCalOnNewDay();
  getSavedItems();

});
