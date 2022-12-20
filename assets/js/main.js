(function () {
	window.onload = function () {
		window.setTimeout(fadeout, 100);
	};
	function fadeout() {
		document.querySelector(".page-loader").style.opacity = "0";
		document.querySelector(".page-loader").style.display = "none";
	}
	window.onscroll = function () {
		var header_navbar = document.querySelector(".navbar-area");
		var sticky = header_navbar.offsetTop;
		if (window.pageYOffset > sticky) {
			header_navbar.classList.add("sticky");
		} else {
			header_navbar.classList.remove("sticky");
		}
		var backToTo = document.querySelector(".scroll-top");
		if (
			document.body.scrollTop > 50 ||
			document.documentElement.scrollTop > 50
		) {
			backToTo.style.display = "flex";
		} else {
			backToTo.style.display = "none";
		}
	};

	// No idea what this was for.... (mobile toggle cross button)
	//===== mobile-menu-btn
	let navbarToggler = document.querySelector(".navbar-toggler");
		navbarToggler.addEventListener("click", function () {
		navbarToggler.classList.toggle("active");
	});

  var wow = new WOW({
    //disabled for mobile
    // mobile: false
  });

  wow.init();


})();
