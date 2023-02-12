/* =================================================================
* Template JS
* 
* Template:    Nui - Creative Portfolio Showcase HTML Website Template
* Author:      Themetorium
* URL:         https://themetorium.net/
================================================================= */



(function ($) {
	'use strict';

	// ========================================
	// Detect browser and add class to </body>
	// ========================================

	// Detect Firefox
	let firefoxAgent = navigator.userAgent.indexOf("Firefox") > -1;

	// Add class "is-firefox" to </body>
	if(firefoxAgent) {
		$("body").addClass("is-firefox");
	}


	// ==============================================
	// Detect mobile device and add class to </body>
	// ==============================================

	// Detect mobile device (Do not remove!!!)
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(navigator.userAgent) ? true : false;

	// Add class "is-mobile" to </body>
	if(isMobile) {
		$("body").addClass("is-mobile");
	}
	

	// =================
	// Page transitions
	// =================

	if ($("body").hasClass("tt-transition")) {
		
		// Wait until the whole page is loaded.
		$(window).on("load", function () {
			setTimeout(function(){
				HideLoad(); // call out animations.
			}, 0);
		});


		// Transitions In (when "ptr-overlay" slides in).
		// =================
		// function RevealLoad() {
		// 	var tl_transitIn = gsap.timeline({ defaults: { duration: 1.5, ease: Expo.easeInOut }});

		// 		if ($("#page-transition").length) {
		// 			 tl_transitIn.set("#page-transition", { autoAlpha: 1 });
		// 			 tl_transitIn.to(".ptr-overlay", { scaleY: 1, transformOrigin: "center bottom" }, 0);
		// 			 tl_transitIn.to(".ptr-preloader", { autoAlpha: 1 }, 0.4);
		// 		}
		// 		tl_transitIn.to("#content-wrap", { y: -80, autoAlpha: 0 }, 0);
		// 		tl_transitIn.to("#tt-header", { y: -20, autoAlpha: 0 }, 0);
		// }


		// Transitions Out (when "ptr-overlay" slides out)
		// ================
		function HideLoad() {
			var tl_transitOut = gsap.timeline();

				 if ($("#page-transition").length) {
					tl_transitOut.to(".ptr-preloader", { duration: 1.5, autoAlpha: 0, ease: Expo.easeInOut });
					tl_transitOut.to(".ptr-overlay", { duration: 1.5, scaleY: 0, transformOrigin: "center top", ease: Expo.easeInOut }, 0.3);
				 }

				 // tt-Header appear
				 tl_transitOut.from("#tt-header", { duration: 1.5, y: 20, autoAlpha: 0, ease: Expo.easeInOut, clearProps:"all" }, 0.6);

				 // tt-Footer appear
				 tl_transitOut.from("#tt-footer", { duration: 1.5, y: 20, autoAlpha: 0, ease: Expo.easeInOut, clearProps:"all" }, 0.2);

				 // Page header image appear
				 if ($(".ph-image").length) {
				 	if ($("#page-header").hasClass("ph-bg-image")) {
				 		tl_transitOut.from(".ph-image img, .ph-video", { duration: 2, y: 80, autoAlpha: 0, stagger: 0.3, ease: Expo.easeOut, clearProps:"all" }, 0.8);
				 	} else {
				 		tl_transitOut.from(".ph-image", { duration: 2, y: 80, autoAlpha: 0, stagger: 0.3, ease: Expo.easeOut, clearProps:"all" }, 1.2);
				 	}
				 }
				 
				 // Page header elements appear (elements with class "ph-appear")
				 var $phAppear = $(".ph-appear");
				 if ($phAppear.length) {
				 	tl_transitOut.from($phAppear, { duration: 2, y: 40, autoAlpha: 0, stagger: 0.3, ease: Expo.easeOut, clearProps:"all" }, 1.5);
				 }

				 // Portfolio interactive elements appear
				 var $pi = $(".portfolio-interactive");
				 var $piItem = $(".portfolio-interactive-item");
				 var $piGhost = $(".portfolio-interactive-ghost");
				 var $piPagination = $(".portfolio-interactive .tt-pagination");

				 if ($pi.length) {
				 	if ($pi.hasClass("pi-full")) {

				 		if ($pi.hasClass("pi-inline")) {
					 		tl_transitOut.from($piItem, { duration: 2, y: 60, autoAlpha: 0, stagger: 0.15, ease: Expo.easeOut, clearProps:"all" }, 1.3);
					 	} else {
					 		tl_transitOut.from($piItem, { duration: 2, y: 100, autoAlpha: 0, stagger: 0.15, ease: Expo.easeOut, clearProps:"all" }, 1.3);
					 	}

					 	if ($piGhost.length) {
					 		$piGhost.wrapInner('<div class="pi-ghost-appear"></div>')
					 		tl_transitOut.from(".pi-ghost-appear", { duration: 2, y: 80, autoAlpha: 0, ease: Expo.easeOut, clearProps:"all" }, 1.5);
					 	}

					 	if ($piPagination.length) {
					 		$piPagination.wrap('<div class="pi-pagination-appear"></div>')
					 		tl_transitOut.from(".pi-pagination-appear", { duration: 2, y: 60, autoAlpha: 0, ease: Expo.easeOut, clearProps:"all" }, 3);
					 	}
				 	}
				 }

				 // Portfolio slider appear (full screen slider)
				 var $portfolioSlider = $(".tt-portfolio-slider");
				 var $psiElem = $(".tt-psc-elem");
				 if ($psiElem.length) {
				 	tl_transitOut.from($portfolioSlider, { duration: 2, autoAlpha: 0, y: 40, ease: Expo.easeOut, clearProps:"all" }, 1);
				 	if ($psiElem.length) {
				 		$psiElem.wrap('<div class="tt-ps-appear"></div>');
				 		tl_transitOut.fromTo((".tt-ps-appear"), { autoAlpha: 0, x: 40, scaleX: 1.1, transformOrigin: "left" }, { duration: 1.5, autoAlpha: 1, x: 0, scaleX: 1, transformOrigin: "left", stagger: 0.15, ease: Expo.easeOut, clearProps:"all" }, 1.4);
				 	}
				 }

				 // Portfolio carousel appear
				 var $portfolioCarousel = $(".tt-portfolio-carousel");
				 var $pciTitle = $(".tt-pci-title");
				 var $pciCategory = $(".tt-pci-category");
				 if ($portfolioCarousel.length) {
				 	tl_transitOut.from($portfolioCarousel, { duration: 2, autoAlpha: 0, y: 40, ease: Expo.easeOut, clearProps:"all" }, 1);
				 	if ($pciTitle.length) {
				 		tl_transitOut.fromTo($pciTitle, { autoAlpha: 0, x: 100, scaleX: 1.3, transformOrigin: "left" }, { duration: 1.5, autoAlpha: 1, x: 0, scaleX: 1, transformOrigin: "left", ease: Expo.easeOut, clearProps:"all" }, 1.4);
				 	}
				 	if ($pciCategory.length) {
				 		tl_transitOut.fromTo($pciCategory, { autoAlpha: 0, x: 60, scaleX: 1.3, transformOrigin: "left" }, { duration: 1.5, autoAlpha: 1, x: 0, scaleX: 1, transformOrigin: "left", ease: Expo.easeOut, clearProps:"all" }, 1.6);
				 	}
				 }


		}


		// Force page a reload when browser "Back" button click.
		// =====================================================
		window.onpageshow = function (event) {
			if (event.persisted) {
				window.location.reload();
			}
		}


		// On link click
		// ==============
		$("a")
			.not('[target="_blank"]') // omit from selection
			.not('[href^="#"]') // omit from selection
			.not('[href^="mailto"]') // omit from selection
			.not('[href^="tel"]') // omit from selection
			.not(".lg-trigger") // omit from selection
			.not(".tt-btn-disabled") // omit from selection
			.not(".no-transition") // omit from selection
			.on('click', function(e) {
				e.preventDefault();

				setTimeout(function (url) {
					window.location = url
				}, 300, this.href);
				
				RevealLoad(); // call in animations.
		});

	}



	// =======================================================================================
	// Smooth Scrollbar
	// Source: https://github.com/idiotWu/smooth-scrollbar/
	// =======================================================================================

	if ($("body").hasClass("tt-smooth-scroll")) {

		// Not for mobile devices!
		if(!isMobile) {
			
			var Scrollbar = window.Scrollbar;

			// AnchorPlugin (URL with hash links load in the right position)
			// https://github.com/idiotWu/smooth-scrollbar/issues/440
			// ==================================
			class AnchorPlugin extends Scrollbar.ScrollbarPlugin {
				static pluginName = 'anchor';

				onHashChange = () => {
					this.jumpToHash(window.location.hash);
				};

				onClick = (event) => {
					const { target } = event;
					if (target.tagName !== 'A') {
						return;
					}
					const hash = target.getAttribute('href');
					if (!hash || hash.charAt(0) !== '#') {
						return;
					}
					this.jumpToHash(hash);
				};

				jumpToHash = (hash) => {
					if (!hash) {
						return;
					}
					const { scrollbar } = this;
					scrollbar.containerEl.scrollTop = 0;
					const target = document.querySelector(hash);
					if (target) {
						scrollbar.scrollIntoView(target, {
							offsetTop: parseFloat(target.getAttribute('data-offset')) || 0 // Change to set default offset
				   	});
					}
				};

				onInit() {
					this.jumpToHash(window.location.hash);
					window.addEventListener('hashchange', this.onHashChange);
					this.scrollbar.contentEl.addEventListener('click', this.onClick);
				};

				onDestory() {
					window.removeEventListener('hashchange', this.onHashChange);
					this.scrollbar.contentEl.removeEventListener('click', this.onClick);
				};
			};

			// usage
			Scrollbar.use(AnchorPlugin);


			// Init Smooth Scrollbar
			// ======================
			Scrollbar.init(document.querySelector("#scroll-container"), {
				damping: 0.05,
				renderByPixel: true,
				continuousScrolling: true,
				alwaysShowTracks: true
			});


			// 3rd party library setup
			// More info: https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy()
			// ========================
			let scrollPositionX = 0,
				scrollPositionY = 0,
				bodyScrollBar = Scrollbar.init(document.getElementById("scroll-container"));

			bodyScrollBar.addListener(({ offset }) => {  
				scrollPositionX = offset.x;
				scrollPositionY = offset.y;
			});

			bodyScrollBar.setPosition(0, 0);
			bodyScrollBar.track.xAxis.element.remove();

			// tell ScrollTrigger to use these proxy getter/setter methods for the "body" element:
			ScrollTrigger.scrollerProxy("body", {
				scrollTop(value) {
					if (arguments.length) {
						bodyScrollBar.scrollTop = value;
					}
					return bodyScrollBar.scrollTop;
				}
			});

			// when smooth scroller updates, tell ScrollTrigger to update() too. 
			bodyScrollBar.addListener(ScrollTrigger.update);


			// Move "tt-header" out of "scroll-container"
			// Expl: Since Smooth Scrollbar doesn't support element fixed position inside "scroll-container" move the "tt-header" out of it.
			// ==========================================
			if ($("#tt-header").hasClass("tt-header-fixed")) {
				$("#scroll-container").before( $("#tt-header"));
			}

		}

	}



	// =======================================================================================
	// Magic cursor (no effect on small screens!)
	// https://codepen.io/Sahil89/pen/MQbdNR
	// https://greensock.com/forums/topic/17490-follow-button-effect/?tab=comments#comment-81107
	// =======================================================================================
	
	if ($("body").not(".is-mobile").hasClass("tt-magic-cursor")) {
		if ($(window).width() > 1024) {
			$(".magnetic-item").wrap('<div class="magnetic-wrap"></div>');
			
			if ($("a.magnetic-item").length) {
				$("a.magnetic-item").addClass("not-hide-cursor");
			}

			var $mouse = { x: 0, y: 0 }; // Cursor position
			var $pos = { x: 0, y: 0 }; // Cursor position
			var $ratio = 0.15; // delay follow cursor
			var $active = false;
			var $ball = $("#ball");

			var $ballWidth = 36; // Ball default width
			var $ballHeight = 36; // Ball default height
			var $ballOpacity = 0.5; // Ball default opacity
			var $ballBorderWidth = 2; // Ball default border width

			gsap.set($ball, {  // scale from middle and style ball
				xPercent: -50, 
				yPercent: -50, 
				width: $ballWidth,
				height: $ballHeight,
				borderWidth: $ballBorderWidth, 
				opacity: $ballOpacity 
			});

			document.addEventListener("mousemove", mouseMove);

			function mouseMove(e) {
				$mouse.x = e.clientX;
				$mouse.y = e.clientY;
			}

			gsap.ticker.add(updatePosition);

			function updatePosition() {
				if (!$active) {
					$pos.x += ($mouse.x - $pos.x) * $ratio;
					$pos.y += ($mouse.y - $pos.y) * $ratio;

					gsap.set($ball, { x: $pos.x, y: $pos.y });
				}
			}

			$(".magnetic-wrap").mousemove(function(e) {
				parallaxCursor(e, this, 2); // magnetic ball = low number is more attractive
				callParallax(e, this);
			});

			function callParallax(e, parent) {
				parallaxIt(e, parent, parent.querySelector(".magnetic-item"), 25); // magnetic area = higher number is more attractive
			}

			function parallaxIt(e, parent, target, movement) {
				var boundingRect = parent.getBoundingClientRect();
				var relX = e.clientX - boundingRect.left;
				var relY = e.clientY - boundingRect.top;

				gsap.to(target, {
					duration: 0.3, 
					x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
					y: ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
					ease: Power2.easeOut
				});
			}

			function parallaxCursor(e, parent, movement) {
				var rect = parent.getBoundingClientRect();
				var relX = e.clientX - rect.left;
				var relY = e.clientY - rect.top;
				$pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
				$pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
				gsap.to($ball, {duration: 0.3, x: $pos.x, y: $pos.y });
			}


			// Magic cursor behavior
			// ======================

			// Magnetic item hover.
			$(".magnetic-wrap").on("mouseenter mouseover", function(e) {
				$ball.addClass("magnetic-active");
				gsap.to($ball, { duration: 0.3, width: 70, height: 70, opacity: 1 });
				$active = true;
			}).on("mouseleave", function(e) {
				$ball.removeClass("magnetic-active");
				gsap.to($ball, { duration: 0.3, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
				gsap.to(this.querySelector(".magnetic-item"), { duration: 0.3, x: 0, y: 0, clearProps:"all" });
				$active = false;
			});

			// Alternative cursor style on hover.
			$(".cursor-alter, .tt-main-menu-list > li > a, .tt-main-menu-list > li > .tt-submenu-trigger > a")
			.not(".magnetic-item") // omit from selection.
			.on("mouseenter", function() {
				gsap.to($ball, {
					duration: 0.3, 
					borderWidth: 0, 
					opacity: 0.2, 
					backgroundColor: "#CCC", 
					width: "100px", 
					height: "100px", 
				});
			}).on("mouseleave", function() {
				gsap.to($ball, {
					duration: 0.3, 
					borderWidth: $ballBorderWidth, 
					opacity: $ballOpacity, 
					backgroundColor: "transparent", 
					width: $ballWidth, 
					height: $ballHeight, 
					clearProps:"backgroundColor" 
				});
			});

			// Overlay menu caret hover.
			$(".tt-ol-submenu-caret-wrap .magnetic-wrap").on("mouseenter", function() {
				gsap.to($ball, { duration: 0.3, scale: 0.6, borderWidth: 3 });
			}).on("mouseleave", function() {
				gsap.to($ball, { duration: 0.3, scale: 1, borderWidth: $ballBorderWidth });
			});

			// Cursor view on hover (data attribute "data-cursor="...").
			$("[data-cursor]").each(function() {
				$(this).on("mouseenter", function() {
					$ball.addClass("ball-view").append('<div class="ball-view-inner"></div>');
					$(".ball-view-inner").append($(this).attr("data-cursor"));
					gsap.to($ball, { duration: 0.3, yPercent: -75, width: 95, height: 95, opacity: 1, borderWidth: 0 });
					gsap.to(".ball-view-inner", { duration: 0.3, scale: 1, autoAlpha: 1 });
				}).on("mouseleave", function() {
					gsap.to($ball, { duration: 0.3, yPercent: -50, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity, borderWidth: $ballBorderWidth });
					$ball.removeClass("ball-view").find(".ball-view-inner").remove();
				});
				$(this).addClass("not-hide-cursor");
			});


			// Cursor close on hover.
			$(".cursor-close").each(function() {
				$(this).addClass("ball-close-enabled");
				$(this).on("mouseenter", function() {
					$ball.addClass("ball-close-enabled");
					$ball.append('<div class="ball-close">Close</div>');
					gsap.to($ball, { duration: 0.3, yPercent: -75, width: 80, height: 80, opacity: 1 });
					gsap.from(".ball-close", { duration: 0.3, scale: 0, autoAlpha: 0 });
				}).on("mouseleave click", function() {
					$ball.removeClass("ball-close-enabled");
					gsap.to($ball, { duration: 0.3, yPercent: -50, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
					$ball.find(".ball-close").remove();
				});

				// Hover on "cursor-close" inner elements.
				$(".cursor-close a, .cursor-close button, .cursor-close .tt-btn, .cursor-close .hide-cursor")
				.not(".not-hide-cursor") // omit from selection (class "not-hide-cursor" is for global use).
				.on("mouseenter", function() {
					$ball.removeClass("ball-close-enabled");
				}).on("mouseleave", function() {
					$ball.addClass("ball-close-enabled");
				});
			});

			// Blog interactive title link hover.
			$(".blog-interactive-item").each(function() {
				var $biItem = $(this);
				if ($biItem.find(".bi-item-image").length) {
					$biItem.find(".bi-item-title a").on("mouseenter mouseover", function() {
						$("#magic-cursor").addClass("blog-interactive-hover-on");
						$biItem.find(".bi-item-image").appendTo($ball);
						gsap.to($ball, { duration: 0.3, width: "20vw", height: "20vw", opacity: 1 });
					}).on("mouseleave", function() {
						$("#magic-cursor").removeClass("blog-interactive-hover-on");
						$ball.find(".bi-item-image").appendTo($biItem); 
						gsap.to($ball, { duration: 0.3, width: $ballWidth, height: $ballHeight, opacity: $ballOpacity });
					});
					$biItem.find(".bi-item-title a").addClass("not-hide-cursor");
					$biItem.addClass("bi-item-image-on");
				}
			});

			
			// Show/hide magic cursor
			// =======================

			// Hide on hover.
			$("a, button, .tt-btn, .tt-form-control, .tt-form-radio, .tt-form-check, .hide-cursor") // class "hide-cursor" is for global use.
			.not(".not-hide-cursor") // omit from selection (class "not-hide-cursor" is for global use).
			.not(".cursor-alter") // omit from selection
			.not(".tt-main-menu-list > li > a") // omit from selection
			.not(".tt-main-menu-list > li > .tt-submenu-trigger > a") // omit from selection
			.on("mouseenter", function() {
				gsap.to($ball, { duration: 0.3, scale: 0, opacity: 0 });
			}).on("mouseleave", function() {
				gsap.to($ball, { duration: 0.3, scale: 1, opacity: $ballOpacity });
			});

			// Hide on click.
			$("a")
				.not('[target="_blank"]') // omit from selection.
				.not('[href^="#"]') // omit from selection.
				.not('[href^="mailto"]') // omit from selection.
				.not('[href^="tel"]') // omit from selection.
				.not(".lg-trigger") // omit from selection.
				.not(".tt-btn-disabled") // omit from selection.
				.on('click', function() {
					gsap.to($ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
			});

			// Show/hide on document leave/enter.
			$(document).on("mouseleave", function() {
				gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 0 });
			}).on("mouseenter", function() {
				gsap.to("#magic-cursor", {duration: 0.3, autoAlpha: 1 });
			});

			// Show as the mouse moves.
			$(document).mousemove(function() {
				gsap.to("#magic-cursor", {duration: 0.3, autoAlpha: 1 });
			});
		}
	} 



	// ==================================================
	// Image lazy loading
	// ==================================================

	ScrollTrigger.config({ limitCallbacks: true });

	gsap.utils.toArray(".tt-lazy").forEach(image => {
		
		let newSRC = image.dataset.src,
			 newImage = document.createElement("img"),

		loadImage = () => {
			newImage.onload = () => {
				newImage.onload = null; // avoid recursion
				newImage.src = image.src; // swap the src
				image.src = newSRC;
				// place the low-res version on TOP and then fade it out.
				gsap.set(newImage, {
					position: "absolute", 
					top: image.offsetTop, 
					left: image.offsetLeft, 
					width: image.offsetWidth, 
					height: image.offsetHeight
				});
				image.parentNode.appendChild(newImage);
				gsap.to(newImage, {
					opacity: 0, 
					onComplete: () => {
						newImage.parentNode.removeChild(newImage);
						image.removeAttribute("data-src"); // remove "data-src" attribute if image is loaded
					}
				});
				st && st.kill();
			}
			newImage.src = newSRC;

			ScrollTrigger.refresh(true);
		}, 

		st = ScrollTrigger.create({
			trigger: image,
			start: "-50% bottom",
			onEnter: loadImage,
			onEnterBack: loadImage // make sure it works in either direction
		});
	});



	// ==================================================
	// Main menu (classic)
	// ==================================================

	// Keeping sub-menus inside screen (useful if multi level sub-menus are used). Effect on large screens only!
	// More info: http://stackoverflow.com/questions/17985334/jquery-solution-for-keeping-dropdown-dropdown-inside-screen
	if ($(window).width() > 1024) {
		$(".tt-submenu-trigger").parent().on("mouseenter", function() {
			var menu = $("> .tt-submenu", this);
			var menupos = $(menu).offset();

			if (menupos.left + menu.width() > $(window).width()) {
				var newpos = -$(menu).width();

				menu.css({ left: newpos });    
			}
		});
	}

	// Main menu hover
	$(".tt-main-menu-list").on("mouseenter", function() {
		$(this).addClass("tt-mm-hover");
	}).on("mouseleave", function() {
		$(this).removeClass("tt-mm-hover");
	});

	// Submenu wrap hover
	$(".tt-submenu-wrap").on("mouseenter", function() {
		$(this).addClass("tt-submenu-open");
	}).on("mouseleave", function() {
		$(this).removeClass("tt-submenu-open");
	});


	// Mobile menu (for classic menu)
	// ===============================

	// Open/close mobile menu on toggle button click
	$("#tt-m-menu-toggle-btn-wrap").on("click", function() {
		$("html").toggleClass("tt-no-scroll");
		$("body").toggleClass("tt-m-menu-open").addClass("tt-m-menu-active");
		if ($("body").hasClass("tt-m-menu-open")) {

			// Menu step in animations
			$("body").addClass("tt-m-menu-toggle-no-click"); // Disable toggle button click until the animations last.

			// Menu in animations
			var tl_MenuIn = gsap.timeline({
				onComplete: function() { 
					$("body").removeClass("tt-m-menu-toggle-no-click"); 
				}
			});

				 tl_MenuIn.to(".tt-main-menu", { duration: 0.4, autoAlpha: 1 });
				 tl_MenuIn.from(".tt-main-menu-content > ul > li", { duration: 0.4, y: 80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeOut, clearProps:"all" });

			// On menu link click
			$(".tt-main-menu a, .tt-logo a")
			.not('[target="_blank"]') // omit from selection
			.not('[href^="#"]') // omit from selection
			.not('[href^="mailto"]') // omit from selection
			.not('[href^="tel"]') // omit from selection
			.on('click', function() {
				gsap.set("#content-wrap", { autoAlpha: 0 });
				gsap.to(".tt-main-menu-content > ul > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn });
			});

		} else {	

			// Menu step out animations
			$("body").addClass("tt-m-menu-toggle-no-click"); // Disable toggle button click until the animations last.

			// Menu out animations
			var tl_MenuOut = gsap.timeline({
				onComplete: function() { 
					$("body").removeClass("tt-m-menu-toggle-no-click"); 
				}
			});

				 tl_MenuOut.to(".tt-main-menu-content > ul > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn });
				 tl_MenuOut.to(".tt-main-menu", { duration: 0.4, autoAlpha: 0, clearProps:"all" }, "+=0.2");
				 tl_MenuOut.to(".tt-main-menu-content > ul > li", { clearProps:"all" }); // clearProps only

			// Close open submenus
			setTimeout(function () {
				$(".tt-submenu").slideUp(350);
				$(".tt-submenu-trigger").removeClass("tt-m-submenu-open");
				$("body").removeClass("tt-m-menu-active");
			}, 900);
		}

		return false;
	});

	



	// ==================================================
	// Overlay menu 
	// ==================================================

	// Add class "tt-header-fixed-on" to <body> if "tt-header-fixed" enabled.
	if ($("#tt-header").hasClass("tt-header-fixed")) {
		$("body").addClass("tt-header-fixed-on");
	}

	// On menu toggle button click
	// ============================
	var $olMenuToggleBtn = $(".tt-ol-menu-toggle-btn-text, .tt-ol-menu-toggle-btn");
	
	$olMenuToggleBtn.on("click", function() {
		$("html").toggleClass("tt-no-scroll");
		$("body").toggleClass("tt-ol-menu-open").addClass("tt-ol-menu-active");
		if ($("body").hasClass("tt-ol-menu-open")) {

			// Menu step in animations
			$("body").addClass("olm-toggle-no-click"); // Disable toggle button click until the animations last.

			var tl_olMenuIn = gsap.timeline({
				onComplete: function() { 
					$("body").removeClass("olm-toggle-no-click"); 
				}
			});

				 tl_olMenuIn.to(".tt-overlay-menu", { duration: 0.4, autoAlpha: 1 });
				 tl_olMenuIn.from(".tt-ol-menu-list > li", { duration: 0.4, y: 80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeOut, clearProps:"all" });
				 if ($(".tt-ol-menu-ghost").length) {
				 	tl_olMenuIn.from(".tt-ol-menu-ghost", { duration: 0.4, y: 80, autoAlpha: 0, ease: Power2.easeOut, clearProps:"all" }, "-=0.4");
				 }

			// On menu link click
			$(".tt-overlay-menu a, .tt-logo a")
			.not('[target="_blank"]') // omit from selection
			.not('[href^="#"]') // omit from selection
			.not('[href^="mailto"]') // omit from selection
			.not('[href^="tel"]') // omit from selection
			.on('click', function() {
				gsap.set("#content-wrap, .ttgr-cat-nav", { autoAlpha: 0 }); // Hide before timeline
				var tl_olMenuClick = gsap.timeline();
					 tl_olMenuClick.to(".tt-ol-menu-list > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn });

					 if ($(".tt-ol-menu-ghost").length) {
					 	tl_olMenuClick.to(".tt-ol-menu-ghost", { duration: 0.4, y: -40, autoAlpha: 0, ease:Power2.easeIn }, "-=0.4");
					 }
			});


			// Move "tt-header" out of "scroll-container" (if Smooth Scroll is enabled and "tt-header-fixed" is NOT enabled)
			// Expl: Since Smooth Scrollbar doesn't support element fixed position inside "scroll-container" move the "tt-header" out of it
			if ($("body").hasClass("tt-smooth-scroll")) {
				if (!$("#tt-header").hasClass("tt-header-fixed")) {
					$("#scroll-container").before($("#tt-header"));
				}
			}

			// Move "tt-ol-menu-social" out of "tt-header"
			// Expl: Due to the conflict with fixed position and ancestor transitions


		} else {	

			// Menu step out animations
			$("body").addClass("olm-toggle-no-click"); // Disable toggle button click until the animations last.

			var tl_olMenuOut = gsap.timeline({
				onComplete: function() { 
					$("body").removeClass("olm-toggle-no-click"); 
				}
			});
				 tl_olMenuOut.to(".tt-ol-menu-list > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn });
				 if ($(".tt-ol-menu-social").length) {
				 	tl_olMenuOut.to(".tt-ol-menu-social > li", { duration: 0.4, y: -80, autoAlpha: 0, stagger: 0.05, ease: Power2.easeIn }, "-=0.4");
				 	tl_olMenuOut.to(".tt-ol-menu-social", { duration: 0.4, autoAlpha: 0, clearProps:"all" }, "-=0.4");
				 }
				 if ($(".tt-ol-menu-ghost").length) {
				 	tl_olMenuOut.to(".tt-ol-menu-ghost", { duration: 0.4, y: -60, autoAlpha: 0, ease:Power2.easeIn }, "-=0.4");
				 }
				 tl_olMenuOut.to(".tt-overlay-menu", { duration: 0.4, autoAlpha: 0, clearProps:"all" }, "+=0.2");
				 tl_olMenuOut.set(".tt-ol-menu-list > li, .tt-ol-menu-social > li, .tt-ol-menu-ghost", { clearProps:"all" }); // clearProps only


			// Close open submenus
			setTimeout(function () {
				$(".tt-ol-submenu").slideUp(350);
				$(".tt-ol-submenu-trigger").removeClass("tt-ol-submenu-open");
				$("body").removeClass("tt-ol-menu-active");

				// Move "tt-header" back to the "scroll-container" (if Smooth Scroll is enabled and "tt-header-fixed" is NOT enabled)
				if ($("body").hasClass("tt-smooth-scroll")) {
					if (!$("#tt-header").hasClass("tt-header-fixed")) {
						$("#content-wrap").before($("#tt-header"));
					}
				}

				// Move "tt-ol-menu-social" back to the "tt-overlay-menu"
				if ($(".tt-ol-menu-social").length) {
					$(".tt-ol-menu-list").after($(".tt-ol-menu-social"));
				}

			}, 500);
		}
		
		return false;
	});

	// Menu list hover
	$(".tt-ol-menu-list").on("mouseenter", function() {
		$(this).addClass("tt-ol-menu-hover");
	}).on("mouseleave", function() {
		$(this).removeClass("tt-ol-menu-hover");
	});




	// ================================================================
	// Page header
	// ================================================================

	// If page header exist
	// =====================
	if ($("#page-header").length) {
		$("body").addClass("page-header-on");

		// If full height enabled
		if ($("#page-header").hasClass("ph-full")) {
			$("body").addClass("ph-full-on");
		}

		// If position center enabled
		if ($("#page-header").hasClass("ph-center")) {
			$("body").addClass("ph-center-on");
		}

		// If page header image exist
		if ($(".ph-image").length) {
			$("body").addClass("ph-image-on");

			// If page header image is background image
			if ($("#page-header").hasClass("ph-bg-image")) {
				$("body").addClass("ph-bg-image-on");
			}
		}
	}


	// If page header background image is light
	// =========================================
	if ($("#page-header").is(".ph-bg-image.ph-bg-image-is-light")) {

		$(".ph-bg-image-is-light").on("mouseenter mouseover", function() {
			$("body").addClass("tt-light-bg-hover");
		}).on("mouseleave", function() {
			$("body").removeClass("tt-light-bg-hover");
		});

	}



	// ================================================================
	// Next project
	// ================================================================

	if ($(".tt-np-image").length) {
		$("body").addClass("tt-np-image-on");
	}



	// ================================================================
	// GSAP ScrollTrigger plugin
	// More info: https://greensock.com/docs/v3/Plugins/ScrollTrigger/
	// ================================================================

	// Page header elements scrolling effects
	// =======================================
	if ($("#page-header").hasClass("ph-content-parallax")) {
		let tlPhParallax = gsap.timeline({ 
			scrollTrigger: {
				trigger: "#page-header", 
				start: 'top top', 
				end: 'bottom top', 
				scrub: true,
				markers: false
			}
		});

		// Page header caption elements
		if ($("#page-header").hasClass("ph-bg-image")) {
			if ($(".ph-caption").length) {
				if ($("#page-header").hasClass("ph-center")) {
					tlPhParallax.to(".ph-caption", { y: 180, opacity: 0, scale: 0.95, transformOrigin: "center" }, 0);
				} else {
					tlPhParallax.to(".ph-caption", { y: 180, opacity: 0, scale: 0.95, transformOrigin: "left" }, 0);
				}
			}
			if ($(".ph-image").length) {
				tlPhParallax.to(".ph-image-inner", { yPercent: 30 }, 0);
			}

		} else {

			if ($(".ph-categories").length) {
				tlPhParallax.to(".ph-categories", { y: -220 }, 0);
			}
			if ($(".ph-caption-subtitle").length) {
				tlPhParallax.to(".ph-caption-subtitle", { y: -230 }, 0);
			}
			if ($(".ph-caption-title").length) {
				tlPhParallax.to(".ph-caption-title", { y: -180 }, 0);
			}
			if ($(".ph-caption-description").length) {
				tlPhParallax.to(".ph-caption-description", { y: -120 }, 0);
			}
			if ($(".ph-meta").length) {
				tlPhParallax.to(".ph-meta", { y: -220 }, 0);
			}
			if ($(".ph-image").length) {
				tlPhParallax.to(".ph-image-inner", { y: -100 }, 0);
			}

			// Page header ghost
			var $phGhost = $(".ph-caption-title-ghost");
			if ($phGhost.length) {
				if (!$("#page-header").hasClass("ph-center")) {
					$phGhost.appendTo("#page-header");
					if ($("#page-header").hasClass("ph-ghost-scroll")) {
						$phGhost.find(".ph-appear").wrapInner('<span class="phgh-text"></span>');
						var $phghText = $phGhost.find(".phgh-text");
						for (var i = 0; i < 3; i++) {
							$phghText.clone().insertAfter($phghText);
						}
						tlPhParallax.to($phGhost, { y: -60, xPercent: -8 }, 0);
					} else {
						tlPhParallax.to($phGhost, { y: -30 }, 0);
					}
				} else {
					tlPhParallax.to($phGhost, { y: -60 }, 0);
				}
			}

		}

		// Page header scroll down circle
		if ($(".tt-scroll-down").length) {
			gsap.to(".tt-scroll-down", { 
				// y: 100,
				autoAlpha: 0,
				ease: "none",
				scrollTrigger: {
					trigger: "#page-header",
					start: "top top",
					end: "30% top",
					scrub: true,
					markers: false
				}, 
			});
		}

		// Page header projekt share
		if ($(".ph-share").length) {
			gsap.to(".ph-share-inner", { 
				// y: 100,
				autoAlpha: 0,
				ease: "none",
				scrollTrigger: {
					trigger: "#page-header",
					start: "top top",
					end: "30% top",
					scrub: true,
					markers: false
				}, 
			});
		}
	}

	// If page header is visible
	if ($("#page-header").length) {
		ScrollTrigger.create({
			trigger: "#page-header",
			start: "top bottom",
			end: "bottom 60px",
			scrub: true,
			markers: false,

			onLeave: () => phVisibleLeaveClass(),
			onEnter: () => phVisibleEnterClass(),
			onLeaveBack: () => phVisibleLeaveClass(),
			onEnterBack: () => phVisibleEnterClass(),
		});

		function phVisibleLeaveClass() {
			$("body").removeClass("tt-ph-visible");
		};
		function phVisibleEnterClass() {
			$("body").addClass("tt-ph-visible");
		};
	}

	// If page header background image is light
	if ($("#page-header").is(".ph-bg-image.ph-bg-image-is-light")) {
		ScrollTrigger.create({
			trigger: "#page-header",
			start: "top bottom",
			end: "bottom 30px",
			scrub: true,
			markers: false,

			onLeave: () => phLightLeaveClass(),
			onEnter: () => phLightEnterClass(),
			onLeaveBack: () => phLightLeaveClass(),
			onEnterBack: () => phLightEnterClass(),
		});

		function phLightLeaveClass() {
			$("body").removeClass("tt-light-bg-on");
		};
		function phLightEnterClass() {
			$("body").addClass("tt-light-bg-on");
		};
	}


	


	// Portfolio list item elements scrolling effects
	// ===============================================
	$(".pli-caption").each(function() {
		var $pliTitle = $(this).find(".pli-title");
		var $pliCategory = $(this).find(".pli-categories-wrap");
		var $pliCounter = $(this).parents(".portfolio-list-item").find(".pli-counter");

		let tl_plIInfo = gsap.timeline({
			scrollTrigger: {
				trigger: this,
				start: "top bottom",
				markers: false
			}
		});

		ScrollTrigger.matchMedia({
			"(min-width: 768px)": function() {
				if ($($pliTitle).length) {
					tl_plIInfo.fromTo($pliTitle, { autoAlpha: 0, x: 60, scaleX: 1.3, transformOrigin: "left" }, { duration: 2, autoAlpha: 1, x: 0, scaleX: 1, transformOrigin: "left", ease: Expo.easeOut, clearProps:"all" }, "+=0.3");
				}
				if ($($pliCategory).length) {
					tl_plIInfo.fromTo($pliCategory, { autoAlpha: 0, x: 60, scaleX: 1.3, transformOrigin: "left" }, { duration: 2, autoAlpha: 1, x: 0, scaleX: 1, transformOrigin: "left", ease: Expo.easeOut, clearProps:"all" }, "-=1.7");
				}
				if ($($pliCounter).length) {
					tl_plIInfo.fromTo($pliCounter, { autoAlpha: 0, x: 60, scaleX: 1.3, transformOrigin: "left" }, { duration: 2, autoAlpha: 1, x: 0, scaleX: 1, transformOrigin: "left", ease: Expo.easeOut, clearProps:"all" }, "-=1.8");
				}
			},

			"(max-width: 767px)": function() {
				if ($($pliTitle).length) {
					tl_plIInfo.from($pliTitle, { duration: 2, autoAlpha: 0, y: 40, ease: Expo.easeOut, clearProps:"all" }, "+=0.5");
				}
				if ($($pliCategory).length) {
					tl_plIInfo.from($pliCategory, { duration: 2, autoAlpha: 0, y: 20, ease: Expo.easeOut, clearProps:"all" }, "-=1.7");
				}
			}
		});
	});
	

	// Image parallax
	// ===============
	$(".anim-image-parallax").each(function() {

		// Add wrap <div>.
		$(this).wrap('<div class="anim-image-parallax-wrap"><div class="anim-image-parallax-inner"></div></div>');

		// Add overflow hidden.
		$(".anim-image-parallax-wrap").css({ "overflow": "hidden" });

		var $animImageParallax = $(this);
		var $aipWrap = $animImageParallax.parents(".anim-image-parallax-wrap");
		var $aipInner = $aipWrap.find(".anim-image-parallax-inner");

		let tl_ImageParallax = gsap.timeline({
			scrollTrigger: {
				trigger: $aipWrap,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
				markers: false,
				onEnter: () => animImgParallaxRefresh(),
			},
		});
		tl_ImageParallax.to($animImageParallax, { yPercent: 30, ease: "none" });

		function animImgParallaxRefresh() {
			tl_ImageParallax.scrollTrigger.refresh();
		}

		// Zoom in
		let tl_aipZoomIn = gsap.timeline({
			scrollTrigger: {
				trigger: $aipWrap,
				start: "top 90%",
				markers: false,
			}
		});
		tl_aipZoomIn.from($aipInner, { duration: 1.5, autoAlpha: 0, scale: 1.2, ease: Power2.easeOut, clearProps:"all" });
		
	});


	// Next project parallax
	// ======================
	if ($(".tt-np-image").length) {
		gsap.from(".tt-np-image", {
			yPercent: -30,
			opacity: 0,
			ease: "none",
			scrollTrigger: {
				trigger: ".tt-next-project",
				start: "5% bottom",
				end: "bottom bottom",
				scrub: true,
				markers: false,
			}, 
		});

		if ($(".tt-np-caption").length) {
			gsap.from(".tt-np-caption", {
				yPercent: -70,
				opacity: 0,
				scale: 0.96,
				transformOrigin: "left",
				ease: "none",
				scrollTrigger: {
					trigger: $(".tt-next-project"),
					start: "15% bottom",
					end: "bottom bottom",
					scrub: true,
					markers: false,
				}, 
			});
		}

	} else {

		if ($(".tt-np-caption").length) {
			gsap.from(".tt-np-caption", {
				yPercent: -10,
				opacity: 0,
				scale: 0.96,
				ease: "none",
				scrollTrigger: {
					trigger: $(".tt-next-project"),
					start: "40% bottom",
					end: "bottom bottom",
					scrub: true,
					markers: false,
				}, 
			});
		}
	}

	// If next project is touches the top of the page
	if ($(".tt-next-project").length) {
		ScrollTrigger.create({
			trigger: ".tt-next-project",
			start: "top 90px",
			end: "bottom top",
			scrub: true,
			markers: false,

			onLeave: () => ttNpTopLeaveClass(),
			onEnter: () => ttNpTopEnterClass(),
			onLeaveBack: () => ttNpTopLeaveClass(),
			onEnterBack: () => ttNpTopEnterClass(),
		});

		function ttNpTopLeaveClass() {
			$("body").removeClass("tt-next-project-top");
		};
		function ttNpTopEnterClass() {
			$("body").addClass("tt-next-project-top");
		};
	}

	// If next project background image is light
	if ($(".tt-next-project").hasClass("tt-np-image-is-light")) {
		ScrollTrigger.create({
			trigger: ".tt-next-project",
			start: "top 90px",
			end: "bottom top",
			scrub: true,
			markers: false,

			onLeave: () => ttNpLightLeaveClass(),
			onEnter: () => ttNpLightEnterClass(),
			onLeaveBack: () => ttNpLightLeaveClass(),
			onEnterBack: () => ttNpLightEnterClass(),
		});

		function ttNpLightLeaveClass() {
			$("body").removeClass("tt-light-bg-on");
		};
		function ttNpLightEnterClass() {
			$("body").addClass("tt-light-bg-on");
		};

		// Hover
		$(".tt-next-project").on("mouseenter mouseover", function() {
			$("body").addClass("tt-light-bg-hover");
		}).on("mouseleave", function() {
			$("body").removeClass("tt-light-bg-hover");
		});

	}


	// Skew on scroll (https://codepen.io/GreenSock/pen/eYpGLYL)
	// ===============
	if(!isMobile) { // Not for mobile devices!

		var skewElement = $(".skew-on-scroll"); // Skew element class.
		var skewMaxAngle = 7; // Max angle.
		var skewVelocity = 500; // Velocity.
		var skewDuration = 0.5; // Duration.

		var proxy = { skew: 0 },
			 skewSetter = gsap.quickSetter(skewElement, "skewY", "deg"),
			 clamp = gsap.utils.clamp(-skewMaxAngle, skewMaxAngle);
		
		if (skewElement.length) {

			function skewer() {
				ScrollTrigger.create({
					onUpdate: (self) => {
						var skew = clamp(self.getVelocity() / -skewVelocity);
						if (Math.abs(skew) > Math.abs(proxy.skew)) {
							proxy.skew = skew;
							gsap.to(proxy, {skew: 0, duration: skewDuration, ease: "power1.easeInOut", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
						}
					}
				});
			}

			function skewerIfSmoothScroll() {
				var bodyScrollBar = Scrollbar.init(document.getElementById("scroll-container"));

				ScrollTrigger.scrollerProxy("#scroll-container", {
					scrollTop(value) {
						if (arguments.length) {
							bodyScrollBar.scrollTop = value;
						}
						return bodyScrollBar.scrollTop; 
					}
				});

				ScrollTrigger.create({
					scroller: "#scroll-container",
					onUpdate: (self) => {
						var skew = clamp(self.getVelocity() / -skewVelocity);
						if (Math.abs(skew) > Math.abs(proxy.skew)) {
							proxy.skew = skew;
							gsap.to(proxy, {skew: 0, duration: skewDuration, ease: "power1.easeInOut", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
						}
					}
				});
			}

			if ($("body").hasClass("tt-smooth-scroll")) {
				if(isMobile) {
					skewer();
				} else {
					skewerIfSmoothScroll();
				} 
			} else {
				skewer();
			}

			gsap.set(skewElement, {transformOrigin: "center center", force3D: true}); // Change transform origin if needed.
		}

	}


	// Scrolling button
	// =================
	if ($(".tt-scrolling-btn").length) {
		$(".tt-scrolling-btn").each(function() {
			var $this = $(this);
			var $scrBtnSvg = $this.find(".scr-btn-spinner");
			gsap.from($scrBtnSvg, {
				rotate: 240,
				ease: "none",
				scrollTrigger: {
					trigger: $scrBtnSvg,
					start: "-40% bottom",
					end: "120% top",
					scrub: true,
					markers: false,
				}, 
			});
		});
	}


	// Appear on scroll
	// =================

	// zoom in
	$(".anim-zoomin").each(function() {

		// Add wrap <div>.
		$(this).wrap('<div class="anim-zoomin-wrap"></div>');

		// Add overflow hidden.
		$(".anim-zoomin-wrap").css({ "overflow": "hidden" })

		var $this = $(this);
		var $asiWrap = $this.parents(".anim-zoomin-wrap");

		let tl_ZoomIn = gsap.timeline({
			scrollTrigger: {
				trigger: $asiWrap,
				start: "top bottom",
				markers: false,
				onEnter: () => animZoomInRefresh(),
			}
		});
		tl_ZoomIn.from($this, { duration: 1.5, autoAlpha: 0, scale: 1.2, ease: Power2.easeOut, clearProps:"all" });

		// Refresh start/end positions on enter.
		function animZoomInRefresh() {
			ScrollTrigger.refresh();
		};
	});


	// fade in-up
	$(".anim-fadeinup").each(function() {
		let tl_FadeInUp = gsap.timeline({
			scrollTrigger: {
				trigger: this,
				start: "top bottom",
				markers: false
			}
		});

		tl_FadeInUp.from(this, { duration: 2.5, autoAlpha: 0, y: 100, ease: Expo.easeOut, clearProps:"all" }, "+=0.3");
	});


	// skew in-up
	$(".anim-skewinup").each(function() {
		let tl_SkewInUp = gsap.timeline({
			scrollTrigger: {
				trigger: this,
				start: "top bottom",
				markers: false
			}
		});

		tl_SkewInUp.from(this, { duration: 2, skewY: 5, transformOrigin: "left top", autoAlpha: 0, y: 100, ease: Expo.easeOut, clearProps:"all" }, "+=0.3");
	});




	// ================================================================
	// Portfolio list
	// ================================================================

	// Play video on hover
	$(".portfolio-list-item").on("mouseenter", function() {
		$(this).find("video").each(function() {
			$(this).get(0).play();
		}); 
	}).on("mouseleave", function() {
		$(this).find("video").each(function() {
			$(this).get(0).pause();
		});
	});

	// Item image zoom on hover
	$(".portfolio-list-item").each(function() {
		if ($(".portfolio-list").hasClass("pli-hover")) {
			$(this).find(".pli-image img").wrap('<div class="pli-image-hover-zoom"></div>');
		}
	});





	// ================================================================
	// Scroll to top 
	// Requires "GSAP ScrollToPlugin" (https://greensock.com/docs/v2/Plugins/ScrollToPlugin)
	// ================================================================

	$(".scroll-to-top").on("click", function() {
		if(!isMobile) { // Not for mobile devices!
			if ($("body").hasClass("tt-smooth-scroll")) {
				var $scrollbar = Scrollbar.init(document.getElementById("scroll-container"));
				gsap.to($scrollbar, { duration: 1.5, scrollTo: { y: 0, autoKill: true }, ease: Expo.easeInOut });
			} else {
				$("html,body").animate({scrollTop: 0}, 800);
			}
		} else {
			$("html,body").animate({scrollTop: 0}, 800);
		}
		return false;
	}); 



	// =======================================================================================
	// Defer videos (Youtube, Vimeo)
	// Note: When you have embed videos in your webpages it causes your page to load slower.
	// Deffering will allow your page to load quickly.
	// Source: https://www.feedthebot.com/pagespeed/defer-videos.html
	// =======================================================================================

	function init() {
	var vidDefer = document.getElementsByTagName("iframe");
	for (var i=0; i<vidDefer.length; i++) {
	if(vidDefer[i].getAttribute("data-src")) {
	vidDefer[i].setAttribute("src",vidDefer[i].getAttribute("data-src"));
	} } }
	window.onload = init;




	// ================================================================
	// Miscellaneous
	// ================================================================

	// tt-Button disabled (prevent click)
	// ===================
	$(".tt-btn-disabled").on("click", function() {
		return false;
	});
	

	// Force page scroll position to top on refresh (do not remove!)
	// =============================================
	$(window).on("pagehide", function(){
		$(window).scrollTop(0);
	});


	// Hover fix for iOS
	// ==================
	$("*").on("touchstart",function() {
		$(this).trigger("hover");
	}).on("touchend",function() {
		$(this).trigger("hover");
	});


})(jQuery); 



