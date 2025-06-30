function confirmation() {
    var txt;
    if (confirm("Are you sure you want to send this message?")) {
        txt = "Message Sent";
    } else {
        txt = "Message Unsent";
    }
    document.getElementById("demo").innerHTML = txt;
    }