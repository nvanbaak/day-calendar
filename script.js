// Initial function calls

const START = 8;
const END = 18;

populatePlanner(START, END);


function populatePlanner(startTime, endTime) {
    // populatePlanner takes a start time and end time (expressed as integers between 1 and 24) and populates the day planner based on stored data

    // ==========================
    //   localStorage Retrieval
    // ==========================

    // Grab planner content from localStorage
    var plannerContent = localStorage.getItem("plannerContent");

    // If there's nothing there
    if (plannerContent === null) {
        
        // make plannerContent an array
        plannerContent = [];

        // Create an empty hour object for each hour
        for (i = 0; i < 24; i++) {
            plannerContent.push({
                hour:i,
                content:""
            });
        } 
        // Otherwise we just parse the object
    } else {
        plannerContent = JSON.parse(plannerContent);
    }

    // ===========================
    //    Create HTML Structure
    // ===========================


    for (i = startTime; i < endTime; i++) {

        // create row and columns 
        var newRow = $("<div>", {"class": 'row'});

        // We put an id on the row to reference its contents
        var findMe = "row-" + i;
        newRow.addClass(findMe);

        // Add time column
        var timeCol = $("<div>", {"class": 'col-md-2 time-block hour'});
        var newTime = $("<p>", {"class": "centerText"})
        timeCol.append(newTime);
        
        // For the content column we also assign the text
        var contentCol = $("<div>", {"class": 'col-md-8'}).text(plannerContent[i].content);

        // Add save column (which is secretly a button, shh)
        var saveCol = $("<button>", {"class": "saveBtn col-md-2"}).text("Save");
        
        // =======================
        //       Assign hour
        // =======================

        var hourContent;
        if (i === 0 || i === 12) {
            hourContent = "12";
        } else if (i > 12) {
            hourContent = i - 12;
        } else {
            hourContent = i;
        }

        if ( i > 11 && i != 24 ) {
            hourContent += ":00 PM";
        } else {
            hourContent += ":00 AM";
        }

        newTime.text(hourContent);

        updatePlannerColors();

        
        
        
        
        
        // Append up the chain
        newRow.append(timeCol);
        newRow.append(contentCol);
        newRow.append(saveCol)
        
        $(".container").append(newRow);
    }
}


function updatePlannerColors() {





}