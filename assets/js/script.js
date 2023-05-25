var currentTime = (dayjs().format('HH')); // current hour in 24 hour format
var currentDate = dayjs().format('dddd, MMMM D, YYYY'); // current date in format: day of week, month, day, year

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  $('.saveBtn').on('click', function (event) {
    event.preventDefault();
    var time = $(this).parent().attr('id');
    var text = $(this).siblings('.description').val();
    localStorage.setItem(time, text);
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


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //displays current day and time at top of page
  $('#currentDay').text(currentDate);
  
  //executes checkTime function upon page load, and then every 5 minutes page is open
  checkTime();
  setInterval(checkTime, 300000);


  }
})

