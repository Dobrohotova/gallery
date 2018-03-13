$(function (){
	$('#nazad').on('click', function (){
		var aktivnaSlika = $('.gallery__content-image--active');

		var naredenElement = aktivnaSlika.prev();

		if(!naredenElement.length){
			var posledenElementIndex = $('.gallery__content-image').length -1;
			var naredenElement = $($('.gallery__content-image')[posledenElementIndex]);
		}

		aktivnaSlika.removeClass('gallery__content-image--active');

		naredenElement.addClass('gallery__content-image--active');
	});
});





$(function (){
	

	$('#napred').on('click', function (){
		var aktivnaSlika = $('.gallery__content-image--active');

		var naredenElement = aktivnaSlika.next();
		if (!naredenElement.length) {
			naredenElement = $($('.gallery__content-image')[0]);
		}

		aktivnaSlika.removeClass('gallery__content-image--active');
		naredenElement.addClass('gallery__content-image--active');

	});
});

var elementStoGoVlecam;

function dragStart(event) {
    elementStoGoVlecam = event.target;
}

function dropped(event) {
    event.preventDefault();
    // console.log(elementStoGoVlecam);
    $('.galerija').append($(elementStoGoVlecam));
    // $(elementStoGoVlecam).addClass("gallery__content-image--active");
    // if (elementStoGoVlecam == $($('.gallery__content-image')[0]) ) {
    //     $(elementStoGoVlecam).addClass("gallery__content-image--active");
    //     } else {
	   //      $(elementStoGoVlecam).addClass("gallery__content-image--active");
	   //      // var prethodenElement = $(elementStoGoVlecam).prev();
	   //      $(prethodenElement).addClass("displayNone");
	   //      $(elementStoGoVlecam).removeClass("gallery__content-image--active");
	   //      console.log(prethodenElement);
    //   	}
    $('.galerija img').addClass("displayNone");
    $('.galerija img').removeClass("gallery__content-image--active");
    $($('.galerija img')[0]).addClass("gallery__content-image--active");
    
}

function dragOver(event) {
    event.preventDefault();
}

function enter() {
    // $('.galerija').css('background', 'red');
}

function leave() {
    // $('.galerija').css('background', 'lightblue');
}