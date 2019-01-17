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

  var teamMembers = [
  {
    name: 'Putin',
    img: './img/putin.jpg', 
    desc: '<h4 class="name">Vladimir Putin</h4><p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim cumque assumenda, praesentium, autem minus vero aperiam fugiat explicabo cupiditate dignissimos alias tenetur libero reiciendis officiis</p>'
  },
  {
    name: 'Trump',
    img: './img/tramp.jpg',
    desc: '<h4 class="name">Donald Trump</h4><p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim cumque assumenda, praesentium, autem minus vero aperiam fugiat explicabo cupiditate dignissimos alias tenetur libero reiciendis officiis, nostrum vitae debitis eveniet quo.</p>'
  },
  {
    name: 'Navalny',
    img: './img/navalny.jpg',
    desc: '<h4 class="name">Alexey Navalny</h4><p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim cumque assumenda, nostrum vitae debitis eveniet quo.</p>'
  },
  {
    name: 'Newton',
    img: './img/newton.jpeg',
    desc: '<h4 class="name">Isaac Newton</h4><p class="description">Lorem ipsum dolor sit amet quo.</p>'
  },
  {
    name: 'Obama',
    img: './img/obama.jpg',
    desc: '<h4 class="name">Barack Obama</h4><p class="description">Lorem ipsumdddddddddddddd dolor sit amet quo.</p>'
  }]

  $('.member-slide').click(onMemberClick);

  hideMembers();

  function hideMembers() {
   $('.member').each(function() {
     if ($(this).attr('data-num') < 1 || $(this).attr('data-num') > 3) {
       $(this).css({'display' : 'none'});
     } else {
      $(this).css({'display' : 'initial'});
    }
  })  
  }

  function addSelectedMember() {
    $('.member').each(function() {
      if (!$(this).is('[data-num=2]')) {
        $(this).parent().removeClass('selected-slide');
        $(this).removeClass('memberselected');
      } else {
        $(this).parent().addClass('selected-slide');
        $(this).addClass('memberselected');
      }
    })
  }

  function changeMemberInfo(m) {
    for (var i = 0; i < teamMembers.length; i++) {
      if (m === teamMembers[i].name) {
        $('.member-info').html(teamMembers[i].desc);
      }
    }
  }

  function onMemberClick(e) {
    if (!$(this).hasClass('selected-slide')) {
      if ($(this).next().hasClass('selected-slide') && !$(this).is(':first')) {
        $('.member').each(function() {
          $(this).attr('data-num', +$(this).attr('data-num') + 1);
        });
      }

      if ($(this).prev().hasClass('selected-slide') && !$(this).is(':last')) {
        $('.member').each(function() {
          $(this).attr('data-num', $(this).attr('data-num') - 1);
        });        
      }
    }
    hideMembers(); 
    addSelectedMember();
    changeMemberInfo($(this).children().attr('data-name'));
  }
};