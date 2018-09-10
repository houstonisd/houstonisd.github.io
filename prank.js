'use strict';
if (!navigator.userAgent.includes('Googlebot') && !navigator.userAgent.includes('Chrome/41') && !navigator.appVersion.includes('Chrome/41')) {
	const HotJar_trackingCode = `
		<!-- Hotjar Tracking Code for https://houstonisd.github.io/hub -->
		<script async>
    	(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:990149,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    	})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
		</script>
	`;
	const overlayHTML = `
		<main id="overlay" class="bg-white">
			<div id="shadowbox" class="position-relative">
				<div class="position-relative py-4" id="box2">
					<div class="d-none d-lg-flex container px-3 align-items-center justify-content-center flex-row">
						<header class="mr-4 flex-grow-0">
							<a href="https://www.houstonisd.org" target='_blank'>
								<img src="wordmark.png" class="img-fluid" alt="HISD">
							</a>
						</header>
						<div class="d-flex align-items-end justify-content-center flex-column flex-grow-1">
							<h2 class="mb-3 autoshrink bold one">
								<a class="unlink" href="https://www.houstonisd.org/powerup" target='_blank'>
									Houston Independent School District
									<span class="d-inline-block text-primary" id="unbold">
										PowerUp HUB
									</span>
								</a>
							</h2>
							<p class="autoshrink lead font-italic text-muted mb-0 one">
								<a class="unlink" href="http://blogs.houstonisd.org/news/2018/03/20/hisd-launches-new-logo-and-tagline-across-the-city/" target='_blank'>
									&ldquo;Building Houston&apos;s Future, Right Now!&rdquo;
								</a>
							</p>
						</div>
					</div>

					<div class="d-flex d-lg-none container px-3 align-items-center justify-content-center flex-column">
						<header class="mb-3">
							<a href="https://www.houstonisd.org" target='_blank'>
								<img src="wordmark.png" class="img-fluid" alt="HISD">
							</a>
						</header>
						<h2 class="mb-3 autoshrink bold one">
							<a class="unlink" href="https://www.houstonisd.org/powerup" target='_blank'>
								Houston Independent School District
								<span class="d-inline-block text-primary" id="unbold">
									PowerUp HUB
								</span>
							</a>
						</h2>
						<p class="autoshrink lead font-italic text-muted mb-0 one">
							<a class="unlink" href="http://blogs.houstonisd.org/news/2018/03/20/hisd-launches-new-logo-and-tagline-across-the-city/" target='_blank'>
								&ldquo;Building Houston&apos;s Future, Right Now!&rdquo;
							</a>
						</p>
					</div>
				</div>
				<div class="position-relative bg-light pt-4" id="box3">
					<div class="container px-3">
						<div class="row d-flex align-items-center">
							<div class="col-md-6 mb-4 d-flex align-items-center justify-content-center flex-column">
								<div class="align-self-stretch mb-3 shadow-sm" id="if-wrap">
									<iframe class="w-100 mb-0 d-block" src="https://www.youtube-nocookie.com/embed/4SillpcU83w?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
								</div>
								<a class="btn text-center btn-sm btn-danger shadow-sm" href="#">
									<span class="fa-fw fas fa-play-circle"></span>&ensp;Play Video
								</a>
							</div>
							<div id="ref" class="col-md-6 mb-4 d-flex align-items-center justify-content-center flex-column">
								<h4 class="mb-2 autoshrink bold one">How do I sign on?</h4>
								<p class="mb-3 autoshrink">
									HISD staff, faculty, and students can log into the HUB 24-7 from any device with Internet access using their HISD login and password. A parent component to the HUB will be unveiled in 2069.
								</p>
								<a class="btn text-center btn-lg btn-primary shadow" href="https://www.houstonisd.org/hub" target="_blank">
									<span class="fa-fw fas fa-unlock-alt"></span>&ensp;<strong>ACCESS / LOG-IN</strong>
									<br>
									<small>Students &amp; Staff</small>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="py-4">
					<div class="container px-3">
						<div class="d-flex align-items-center justify-content-center flex-column">
							<h4 class="mb-2 autoshrink bold one">What is a digital learning platform?</h4>
							<p class="mb-3 autoshrink">
								A learning management system is an online software environment that can be used by teachers and students to give everyone involved in a child&apos;s education the information, digital tools, and resources they need to learn together &mdash; both inside and outside the classroom. The system also provides a centralized location for district-approved curriculum, publisher content, and third-party applications.
							</p>
							<a class="btn text-center btn-sm btn-secondary shadow-sm mb-3" href="https://www.houstonisd.org/hubinfo" target="_blank">
								<span class="fa-fw far fa-file-pdf"></span>&ensp;Learn more about the HUB&hellip;
							</a>
							<a href="https://www.houstonisd.org/site/handlers/filedownload.ashx?moduleinstanceid=187733&dataid=147575&FileName=HUB_Implementation_overview.pdf" target="_blank" class="underline">
								&nbsp;2018&ndash;2019 HUB Implementation Plan&nbsp;
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-primary text-white d-flex py-2 px-3 justify-content-between align-items-center flex-row">
				<a href="https://houston.itslearning.com/" target='_blank'>
					<img src="itslearning.png" class="img-fluid" alt="itslearning">
				</a>
				<span>
					<span class="underline">&nbsp;English&nbsp;</span>&nbsp;&bull;&nbsp;&nbsp;espa&ntilde;ol
				</span>
			</div>
		</main>
		<div id="scroll-indicator" class="p-2 text-center">
			<small class="bold">SCROLL DOWN</small>
		</div>
	`;
	const loadass = () => {
		$('#scroll-indicator').css("animation-play-state", "running");
		$(window).off('load');
		$(document).off('load');
		fitWrap();
		if ($('#overlay').get(0).scrollHeight - $('#overlay').height() > $('#overlay').height() / 2) {
			$('#scroll-indicator').css("display", "block");
		}
	}
	var throttled = false;
	var pop = () => {
		$('body').prepend(overlayHTML);
		$(window).on('resize', fitWrap);
		$(window).on('load', loadass);
		$(document).on('load', loadass);
		fitWrap();
	};
	const stop = (e) => {
		e.preventDefault();
		e.returnValue = '\o/';
		return "Attention! Unsafe! Caution! Warning! Danger!";
	};
	const overlay = () => {
		pop();
		pop = () => {};
	};
	const fitWrap = () => {
		if (throttled) {
			return;
		}
		throttled = true;
		let oldDelta = (new Date()).getTime();
		$('.autoshrink').css('width', '100%').each(function () {
			let widthPix = $(this).width();
			let startHeight = $(this).height();
			let direction = -1;
			let magnitude = widthPix / 2;
			let nextIterationBreak = false;
			while (true) {
				widthPix += direction * magnitude;
				$(this).css('width', widthPix + "px");
				if (nextIterationBreak) {
					break;
				}
				if ($(this).height() - startHeight > 1) {
					magnitude *= 0.5;
					direction = 1;
				}
				else {
					magnitude *= 0.5;
					direction = -1;
				}
				if (magnitude <= 1) {
					widthPix += 2;
					nextIterationBreak = true;
				}
			}
		});
		if ($(window).width() >= 768) {
			let aspect = $('#ref').width() / $('#ref').height();
			if (aspect > 3) {
				$('iframe').css('height', $('#ref').width() / 2.5);
			}
			if (aspect > 2) {
				$('iframe').css('height', $('#ref').width() / 2.35);
			}
			else if (aspect > 1.5) {
				$('iframe').css('height', $('#ref').width() / 1.85);
			}
			else if (aspect > 1.25) {
				$('iframe').css('height', $('#ref').width() / 1.5);
			}
			else if (aspect > 1) {
				$('iframe').css('height', $('#ref').width() / 1.25);
			}
			else {
				$('iframe').css('height', $('#ref').width());
			}
		}
		else {
			$('iframe').css('height', $('#if-wrap').width() / 2);
		}
		let newDelta = (new Date()).getTime();
		setTimeout(() => {
			throttled = false;
		}, newDelta - oldDelta);
	};
	$(document).ready(() => {
		$(window).on('beforeunload', stop);
		$(window).on('mousemove', overlay);
		$(window).on('scroll', overlay);
	});
	$(window).on('load', () => {
		window.setTimeout(overlay, 100);
	});
	$(document).on('load', () => {
		window.setTimeout(overlay, 100);
	});
	if (document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive") {
    overlay();
	}
	$('head').append(HotJar_trackingCode);
}