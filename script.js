window.onload = function(){ 

	var button = document.querySelector(".signup-btn");
	var buttonLink = document.querySelector(".signup-btn a");
	var buyButton = document.querySelector('#buynow-btn');
	var tryButton = document.querySelector('#try-btn');

	button.onmouseenter = function(event) {
		event.target.style.borderColor = '#000000';
		buttonLink.style.color = '#000000';
	};
	
	button.onmouseleave = function(event) {
		event.target.style.borderColor = '';
		buttonLink.style.color = '';
	};

    $('.messages').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 2,
      vertical: true,
      adaptiveHeight: true,
      prevArrow: $('#arrow-up'),
      nextArrow: $('#arrow-down'),
       responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToScroll: 1
      }
    }]
    });

    $('.team-members').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
    
      arrows: false,
      initialSlide: 1
    });


	$('.button').on('mousedown', event => {
		$(event.currentTarget).addClass('btn-active');
	});

	$('.button').on('mouseup', event => {
		$(event.currentTarget).removeClass('btn-active');
	});

	$(".services-panel .label:first").addClass("active").children(".right-icon").addClass('rotate');
    $(".services-panel .content:not(:first)").hide();

    $(".services-panel .label").on('click', event =>{
        	$(event.currentTarget).next(".content").slideToggle("fast");
        	$(event.currentTarget).children(".right-icon").toggleClass('rotate');
        	$(event.currentTarget).toggleClass("active");         
     });

    $('input[type="text"]').on('mouseenter', event => {
    	$(event.currentTarget).css({borderColor: '#1de9b6'});
    })

    $('input[type="text"]').on('mouseleave', event => {
    	$(event.currentTarget).css({borderColor: ''});
    })

    $('textarea').on('mouseenter', event => {
    	$(event.currentTarget).css({borderColor: '#1de9b6'});
    })

    $('textarea').on('mouseleave', event => {
    	$(event.currentTarget).css({borderColor: ''});
    })

    $('.burger').on('click', event => {
    	$('nav ul').addClass('hidden-menu');
    	$('nav').toggle('fast');
    })

    $('input[name="send-btn"]').on('click', function(e) {
    	if (!validateForm()) {
    		e.preventDefault();
        
       	} else {
          $('span.unfilled').hide();
          sendAJAX();
        }
    });

    function sendAJAX() {
      $.post('/server.php', {
        firstName: firstName.val().trim(),
        lastName: lastName.val().trim(),
        email: email.val().trim(),
        phone: phone.val().trim(),
        message: message.val().trim()
      }, onAJAXSuccess
    )}

    function onAJAXSuccess(data) {
      var content = '<div class="success-form"><p>Thanks!</p></div>'
        if (!$('.form-container').is($('.success-form'))) {
          $('.form-container').append(content);  
          $('.success-form').animate({opacity: '1'}, 500).delay(2000).fadeOut(); 
          for (var i = 0; i < formData.length; i++) {
            formData[i].val('');
          }
        }
    }

    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    var contactForm = $('.contact-form');
    var firstName = $("input[name='name']");
    var lastName = $("input[name='lastname']");
    var email = $("input[name='email']");
    var phone = $("input[name='phone']");
    var message = $("textarea[name='message']");

    var formData = [firstName, lastName, email, phone, message];

    function validateForm() {
    	
    	var errors = false;

    	if(firstName.val().trim().length === 0) {
    		firstName.addClass('input-error');
    		errors = true;
    	} else {
        firstName.removeClass('input-error');
      }

    	if(lastName.val().trim().length === 0) {  
    		lastName.addClass('input-error');
    		errors = true;
    	} else {
        lastName.removeClass('input-error');
      }

    	if(email.val().trim().length < 3 || !email.val().trim().includes('@') 
    		|| !email.val().trim().includes('.')) {
    			email.addClass('input-error');
    			errors = true;
    	} else {
        email.removeClass('input-error');
      }

      if(!isNumeric(phone.val().trim()) && phone.val().trim().length === 0) {
        phone.addClass('input-error');
        errors = true;
      } else {
        phone.removeClass('input-error');
      }

      if(message.val().trim().length === 0) {  
        message.addClass('input-error');
        errors = true;
      } else {
        message.removeClass('input-error');
      }

    	if (errors) {
        if(!$('span').is('.unfilled')) {
          contactForm.prepend("<span class='unfilled'>Fill this fields</span>");
        }

    		return false;
    	}

      return true;
    }
};