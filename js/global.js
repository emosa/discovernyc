
$( function() {
	$.backstretch('img/background.jpg');
	var endDate = "August  31, 2017 12:00:00";
	$('.countdown.simple').countdown({ date: endDate });
	$('.countdown.styled').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html("<div>" + this.leadingZeros(data.days, 2) + " <span>Days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>Hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>Min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>Sec</span></div>");
	  }
	});
	$('.countdown.callback').countdown({
	  date: +(new Date) + 10000,
	  render: function(data) {
		$(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
	  },
	  onEnd: function() {
		$(this.el).addClass('ended');
	  }
	}).on("click", function() {
	  $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
	});

});
