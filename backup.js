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