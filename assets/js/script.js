//get the id for currentDay
var currentDay = document.getElementById("currentDay");
//use moment.js to display current time/date in currentDay
currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours


// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

function colorChange() {
    var hour = moment().hour();
    console.log(hour);
    //for each with time-block class, run this function
    $(".time-block").each(function(){
        //the variable rowHour turns the array string into number. split removes row from # for array.
        var rowHour = parseInt($(this).attr("id").split("-")[1]);
        if (rowHour < hour) {
            $(this).addClass("past");
        }
        else if (rowHour === hour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    });
};

colorChange();

// WHEN I click into a time block
// THEN I can enter an event

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

$(".saveBtn").on("click", function() {
    var saveKey = $(this).parent().attr("id");
    var saveValue = $(this).siblings(".description").val();
    //saves the item to the storage
    localStorage.setItem(saveKey, saveValue);
});

//pull row info from localStorage
$("#row-9 .description").val(localStorage.getItem("row-9"));
$("#row-10 .description").val(localStorage.getItem("row-10"));
$("#row-11 .description").val(localStorage.getItem("row-11"));
$("#row-12 .description").val(localStorage.getItem("row-12"));
$("#row-13 .description").val(localStorage.getItem("row-13"));
$("#row-14 .description").val(localStorage.getItem("row-14"));
$("#row-15 .description").val(localStorage.getItem("row-15"));
$("#row-16 .description").val(localStorage.getItem("row-16"));
$("#row-17 .description").val(localStorage.getItem("row-17"));