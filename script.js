$(document).ready(function() {
    $("#registrationForm").on("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Simple client-side validation
        let name = $("#name").val();
        let email = $("#email").val();
        let phone = $("#phone").val();
        let address = $("#address").val();

        if(name === "" || email === "" || phone === "" || address === "") {
            alert("All fields are required!");
            return;
        }

        // Submit the form data via AJAX
        $.ajax({
            url: "submit.php",
            type: "POST",
            data: $(this).serialize(),
            success: function(response) {
                $("#result").html(response);
            },
            error: function() {
                alert("There was an error processing your request.");
            }
        });
    });
});
