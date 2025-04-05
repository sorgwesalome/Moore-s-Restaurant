
document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your correct public key
    emailjs.init("mCZ73_m0MD_lwl5W4");

    // Order Form Submit
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

        // Send email to business
        emailjs.send("service_5dmt8sb", "template_f6itcbr", formData)
            .then(function (response) {
                alert("Order placed successfully!");
                console.log("SUCCESS (admin email):", response);
            }, function (error) {
                alert("Failed to send order to business. Please try again.");
                console.error("FAILED (admin email):", error);
            });

        // Send confirmation to customer
        emailjs.send("service_5dmt8sb", "template_o86h98l", {
            ...formData,
            to_email: formData.email
        })
            .then(function (response) {
                console.log("SUCCESS (customer email):", response);
            }, function (error) {
                console.error("FAILED (customer email):", error);
            });
    });

    // Newsletter Form Submit
    document.getElementById("newsletterForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("newsletterEmail").value;

        emailjs.send("service_e3swlbe", "template_1odnntd", {
            to_email: email
        })
            .then(function (response) {
                alert("Newsletter subscribed successfully!");
                console.log("SUCCESS (newsletter):", response);
            }, function (error) {
                alert("Failed to subscribe. Please try again.");
                console.error("FAILED (newsletter):", error);
            });
    });
});
