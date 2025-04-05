(function ($) {
    "use strict";
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    new WOW().init();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });
    
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

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

        emailjs.send("service_paoou4p", "template_gubtk0x", formData)
            .then(function (response) {
                alert("Order placed successfully!");
                console.log("SUCCESS!", response);
            }, function (error) {
                alert("Failed to send order. Please try again.");
                console.error("FAILED...", error);
            });

            emailjs.send("service_paoou4p", "template_ctlr118", {
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

function payWithPaystack() {
    let email = document.getElementById("customerEmail").value; 

    if (!email) {
      alert("Please enter your email");
      return;
    }

    let handler = PaystackPop.setup({
      key: 'pk_test_0eb035e68986ea7c1c059ac7631488611479292b',
      email: email,
      amount: 5000 * 100,
      currency: 'NGN',
      ref: 'TXN_' + Math.floor(Math.random() * 1000000),
      callback: function(response) {
        alert('Payment successful! Transaction ref: ' + response.reference);
      },
      onClose: function() {
        alert('Transaction was not completed.');
      }
    });

    handler.openIframe();
  }

  document.addEventListener("DOMContentLoaded", function() {
    console.log("Initializing EmailJS...");
    emailjs.init("0obf0aGEgD94pOoc2");
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
