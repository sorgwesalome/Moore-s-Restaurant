document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("mCZ73_m0MD_lwl5W4");

    document.getElementById("orderForm").addEventListener("submit", function (event) {
        event.preventDefault(); 

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            address: document.getElementById("address").value,
            order: document.getElementById("order").value,
            to_email: "scarsabrina69@gmail.com" 
        };

        emailjs.send("service_gr4k4dg", "template_szwzh6f", formData)
            .then(function (response) {
                alert("Order placed successfully!");
                console.log("SUCCESS!", response);
            }, function (error) {
                alert("Failed to send order. Please try again.");
                console.error("FAILED...", error);
            });
    });
});



















document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("mCZ73_m0MD_lwl5W4");

    document.getElementById("orderForm").addEventListener("submit", function (event) {
        event.preventDefault(); 

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            address: document.getElementById("address").value,
            order: document.getElementById("order").value,
            to_email: "scarsabrina69@gmail.com" 
        };

        emailjs.send("service_5dmt8sb", "template_yj87fya", formData)
            .then(function (response) {
                alert("Order placed successfully!");
                console.log("SUCCESS!", response);
            }, function (error) {
                alert("Failed to send order. Please try again.");
                console.error("FAILED...", error);
            });

            emailjs.send("service_5dmt8sb", "template_jfnpl3r", {
                ...formData,
                to_email: formData.email})
            .then(function (response) {
                alert("Order placed successfully!");
                console.log("SUCCESS!", response);
            }, function (error) {
                alert("Failed to send order. Please try again.");
                console.error("FAILED...", error);
            });
    });
});




document.getElementById("newsletterForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let userEmail = document.getElementById("emailInput").value;
    console.log("User Email Entered:", userEmail);

    if (!userEmail) {
        alert("Please enter a valid email address.");
        return;
    }
    console.log("Sending email with EmailJS...");
    
    emailjs.send("service_e3swlbe", "template_a6begzd", {
        user_email: userEmail
    }).then(response => {
        console.log("EmailJS Response:", response);
        alert("Thank you! You've successfully subscribed.");
        document.getElementById("newsletterForm").reset();
    }).catch(error => {
        console.error("EmailJS Error:", error);
        alert("Error: Unable to send email. Check the console for details.");
    });
});
