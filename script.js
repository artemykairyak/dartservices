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


    //MESSAGES SLIDER

    // function slider() {
    // 	var messages = document.querySelectorAll('.message');
    // 	for (var i = 0; i < messages.length; i++) {
    // 		if (!messages[i].classList.contains('current')) {
    // 			messages[i].style.display = 'none';
    // 		}
    // 	}
    // }

    // slider();

    // var messages = document.querySelectorAll('.message');

    // $('#arrow-down').on('click', event => {
    // 		$.each(messages, function(key, value) {
    // 			$(this).addClass('slide-up');
    			
    // 		});
    // 		setTimeout(function() {
    // 			messages[0].remove();
    // 			$.each(messages, function(key, value) {
    // 			$(this).removeClass('slide-up');
    // 			})
    // 		}, 1000);
    // });

	var counter = 1;
	var messagesCount = $('.messages').children().length;

    $('#arrow-down').on('click', event => {
    	if(counter < messagesCount - 1) {
	    	transHeight = -236 * (counter);
	    	$('.messages').css({transform: 'translateY('+ transHeight + 'px)'});
	    	counter++;
    	}
    });


	$('#arrow-up').on('click', event => {
		if(counter > 1) {
	    	transHeight = -236 * (counter - 2);
	    	$('.messages').css({transform: 'translateY('+ transHeight + 'px)'});
	    	counter--;
    	}

	});

	//END SLIDER

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
    	$('nav ul').css({flexDirection: 'column', position: 'absolute', left: '0px'});
    	$('nav ul li').css({marginTop: '5px'});
    	$('nav').slideToggle();
    })
};