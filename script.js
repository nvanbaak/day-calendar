// Initial function calls

populatePlanner(8, 18);


function populatePlanner(startTime, endTime) {

    // create html structure
    for (i = startTime; i < endTime; i++) {

        // create row and columns 
        var newRow = $("<div>", {"class": 'row'});

        var dateCol = $("<div>", {"class": 'col-md-3'});
        var contentCol = $("<div>", {"class": 'col-md-9'});
        var saveCol = $("<div>", {"class": 'col-md-3'});

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

        // ========================
        //  Assign planner content
        // ========================

        // Grab planner content from localStorage
        var plannerContent = localStorage.getItem("plannerContent");

        // If there's nothing there
        if (plannerContent === null) {
            
        }





        // Append up the chain
        newRow.append(dateCol);
        newRow.append(contentCol);
        newRow.append(saveCol)
        
        $(".container").append(newRow);
    }




}