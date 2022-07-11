gsap.registerPlugin(ScrollTrigger);

let hometl = gsap.timeline({
	defaults: { duration: 1, ease: 'power3', opacity: 1 },
});

hometl
	.to('.content-inner', {
		y: 0,
		duration: 1.8,
		stagger: 2.2,
	})
	.to(
		'.content-inner h1, .content-inner p',
		{
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			duration: 2,
			stagger: 1.4,
		},
		'-=1.5'
	)
	.from(
		'.earth-icon',
		{
			opacity: 0,
			y: -300,
			ease: 'bounce',
			duration: 2.2,
			scrub: true,
			perspective: 400,
			// scale: 0.01,
		},
		'-=1.5'
	);

let connectedRow = gsap.timeline({
	scrollTrigger: {
		trigger: '.connected-row',
		start: '50px 60%',
		reverse: true,
		toggleActions: 'play none restart reverse',
	},
});
connectedRow
	.to('.connected-row .slide-left', {
		x: '0',
		opacity: 1,
		ease: 'back',
		duration: 1.4,
	})
	.to(
		'.connected-row .clip-down',
		{
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			duration: 1.5,
			opacity: 1,
		},
		'-=1'
	)
	.to(
		'.connected-row img',
		{
			scale: 1,
			opacity: 1,
			ease: 'back',
			duration: 1.5,
		},
		'-=1.5'
	);

let protectedRow = gsap
	.timeline({
		scrollTrigger: {
			trigger: '.protected-row',
			start: '50px 60%',
			reverse: true,
			toggleActions: 'play none restart reverse',
		},
	})
	.to('.protected-row .slide-right', {
		x: 0,
		opacity: 1,
		ease: 'back',
		duration: 1.4,
	})
	.to(
		'.protected-row .clip-down',
		{
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
			duration: 1.5,
			opacity: 1,
		},
		'-=1'
	)
	.to(
		'.protected-row img',
		{
			scale: 1,
			opacity: 1,
			ease: 'back',
			duration: 1.5,
		},
		'-=1.5'
	);

let explore = gsap
	.timeline({
		scrollTrigger: {
			trigger: '.explore',
			start: '50px 50%',
			reverse: true,
			toggleActions: 'play none restart reverse',
		},
	})
	.from('.explore-header', {
		scale: 10,
		opacity: 0,
		x: -200,
		ease: 'power4.out',
		duration: 2,
	})
	.from(
		'.scale-up',
		{
			scale: 0.1,
			opacity: 0,
			ease: 'back',
			duration: 1.5,
		},
		'-=1.6'
	);

let galaxies = gsap
	.timeline({
		scrollTrigger: {
			trigger: '.galaxies',
			start: '50px 50%',
			reverse: true,
			toggleActions: 'play none restart reverse',
		},
	})
	.from(
		'.galaxies video',
		{
			opacity: 0,
			scale: 0.1,
			duration: 2,
		},
		'-=1'
	)
	.to('.galaxies h2', {
		clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
		duration: 2.6,
		stagger: 1,
	});
