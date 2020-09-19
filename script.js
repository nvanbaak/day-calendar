// Define constants

// START and END define the start and end times for the day planner
const START = 8;
const END = 19;

// ==========================
//   localStorage Retrieval
// ==========================

// Grab planner content from localStorage
var plannerContent = localStorage.getItem("plannerData");

// If there's nothing there
if (plannerContent === null) {
    
    // make plannerContent an array
    plannerContent = [];

    // Create an empty hour object for each hour
    for (i = 0; i < 24; i++) {
        plannerContent.push("");
    } 
    // Otherwise we just parse the object
} else {
    plannerContent = JSON.parse(plannerContent);
}

populatePlanner(START, END);

function populatePlanner(startTime, endTime) {
    // populatePlanner takes a start time and end time (expressed as integers between 1 and 24) and populates the day planner based on stored data

    // ===========================
    //    Create HTML Structure
    // ===========================


    for (i = startTime; i < endTime; i++) {

        // create row and columns 
        var newRow = $("<div>", {"class": 'row'});
        
        // Add time column
        var timeCol = $("<div>", {"class": 'col-md-2 time-block hour'});
        var newTime = $("<p>")
        timeCol.append(newTime);
        
        // For the content column we also assign the text
        var contentCol = $("<textarea>", {"class": 'col-md-8', "type":"text"})
        // console.log(contentCol);
        contentCol.val(plannerContent[i]);

        // Create a class to find this later 
        var findMe = "findMe-" + i;
        contentCol.addClass(findMe);

        // Add save column (which is secretly a button, shh)
        var saveCol = $("<button>", {"class": "saveBtn col-md-2", "data-num":i}).text("Save");
        
        // =======================
        //       Assign hour
        // =======================

        var hourContent;
        if (i === 0 ) { // Replace 0 with 12
            hourContent = "12";
        } else if (i > 12) { // After the AM we rest the numbers
            hourContent = i - 12;
        } else {
            hourContent = i;
        }

        // Add AM/PM information
        if ( i > 11 && i != 24 ) {
            hourContent += ":00 PM";
        } else {
            hourContent += ":00 AM";
        }

        newTime.text(hourContent);

        // ================================
        //    Update Planner Colors
        // ================================
        
        // Get current time
        var now = moment().hour();

        // Check if the current hour is ahead of, behind, or equal to the row we're working with and assign the relevant class
        if (i < now) {
            contentCol.addClass("past");
        } else if (i === now) {
            contentCol.addClass("present");
        } else {
            contentCol.addClass("future");
        }
        
        // Append up the chain
        newRow.append(timeCol);
        newRow.append(contentCol);
        newRow.append(saveCol)
        
        $(".container").append(newRow);
    }

    // ======================================
    //            Click Behavior
    // ======================================

    // When a save button is clicked,
    $(".saveBtn").click(function() {

        // Get the button's reference number
        var refNum = this.dataset.num;
        var refClass = ".findMe-" + refNum;

        // Find value of the textarea with that number
        var target = $(refClass).val();

        // Store it in plannerContent
        plannerContent[refNum] = target;

        localStorage.setItem("plannerData", JSON.stringify(plannerContent));
    })


}