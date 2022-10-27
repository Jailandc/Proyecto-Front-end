$( function() {

// Add background image

	//$.backstretch('Imagenes/banner.png');

//	var endDate = "0, 0 00:00:00";

	var endDate = "November 20, 2022 08:00:00";

	$('.countdown.simple').countdown({ date: endDate });

	$('.countdown.styled').countdown({

	  date: endDate,

	  render: function(data) {

		$(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>Días</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>Horas</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>Minutos</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>Segundos</span></div>");

	  }

	});



});

