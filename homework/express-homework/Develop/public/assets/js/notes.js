// var noteID = 0;

// $.ajax({
//     url: "/api/id/",
//     method: "GET"
// }).then((res) => noteID = res);

$(".submit").on("click", function(event) {
    event.preventDefault();

    // noteID++;

    var newNote = {
        // id: noteID,
        title: $(".note-title").val().trim(),
        text: $(".note-textarea").val().trim(),
    };

    console.log(newNote);

    $.post("/api/notes", newNote,
        function(data) {

            if (data) {
                alert("Your note has been saved");
                // Clear the form when submitting
                $(".note-title").val("");
                $(".note-textarea").val("");

            } else {
                alert("Please enter a note");
            }
        });

});