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
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 2,
      vertical: true,
      adaptiveHeight: true,
      prevArrow: $('#arrow-up'),
      nextArrow: $('#arrow-down')
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
    	$('nav').slideToggle('fast');
    })

    $('input[name="send-btn"]').on('click', function(e) {
    	if (!validateForm()) {
    		e.preventDefault();
    		alert(1);
       	}
    });

    function validateForm() {
    	var contactForm = $('.contact-form');
    	var firstName = $("input[name='name']");
    	var lastName = $("input[name='lastname']");
    	var email = $("input[name='email']").val().trim();
    	var phone = $("input[name='phone']").val().trim();
    	var message = $("textarea[name='message']").val().trim();
    	var errors = false;

    	if(firstName.val().trim().length === 0) {
    		firstName.addClass('input-error');
    		errors = true;
    	}

    	if(lastName.val().trim().length === 0) {  
    		lastName.addClass('input-error');
    		errors = true;
    	}

    	if(email.val().trim().length > 3 && (email.val().trim().includes('@')) 
    		&& (email.val().trim().includes('.'))) {
    			email.addClass('input-error');
    			errors = true;
    	} 


    	if (errors) {
    		contactForm.prepend("<span class='unfilled'>Fill this fields</span>");
    		return false;
    	}
    }
};