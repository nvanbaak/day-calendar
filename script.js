// Initial function calls

populatePlanner(8, 18);


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

        var dateCol = $("<div>", {"class": 'col-md-3'});
        var saveCol = $("<div>", {"class": 'col-md-3'});
        
        // For the content colum nwe also assign the text
        var contentCol = $("<div>", {"class": 'col-md-9'}).text(plannerContent[i].content);

        // Add save icon to save column
        saveColCol.append($("<i>"), {"class": "fas fa-save"});
        
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

        dateCol.text(hourContent);



        
        
        
        
        
        // Append up the chain
        newRow.append(dateCol);
        newRow.append(contentCol);
        newRow.append(saveCol)
        
        $(".container").append(newRow);
    }
}