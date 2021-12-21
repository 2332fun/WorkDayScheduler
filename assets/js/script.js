//get the id for currentDay
var currentDay = document.getElementById("currentDay");
//use moment.js to display current time/date in currentDay
currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');

//function that decides which css class each row gets for its color
function colorChange() {
    var hour = moment().hour();
    //for each with time-block class, run this function
    $(".time-block").each(function(){
        //the variable rowHour turns the array string into number. split removes row from # for array.
        var rowHour = parseInt($(this).attr("id").split("-")[1]);
        //checks if the rowHour is less than, equal to, or more than the hour for choosing past, present, or future class; then applies it
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

// when save button is clicked, saves the key/value to localStorage
$(".saveBtn").on("click", function() {
    var saveKey = $(this).parent().attr("id");
    var saveValue = $(this).siblings(".description").val();
    //saves the item to the storage
    localStorage.setItem(saveKey, saveValue);
});

//pull row info from localStorage and displays it in the description
$("#row-9 .description").val(localStorage.getItem("row-9"));
$("#row-10 .description").val(localStorage.getItem("row-10"));
$("#row-11 .description").val(localStorage.getItem("row-11"));
$("#row-12 .description").val(localStorage.getItem("row-12"));
$("#row-13 .description").val(localStorage.getItem("row-13"));
$("#row-14 .description").val(localStorage.getItem("row-14"));
$("#row-15 .description").val(localStorage.getItem("row-15"));
$("#row-16 .description").val(localStorage.getItem("row-16"));
$("#row-17 .description").val(localStorage.getItem("row-17"));