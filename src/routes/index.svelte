<script>
	import { onMount } from 'svelte';

	onMount(async () => {

		// old style JS, svelte gets complainy about bindings
		let flamegrid = document.getElementById('flamegrid');
		let secondarrows = document.getElementById('secondarrows');
		let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

		setInterval(function () {
			if (isSafari) {
				flamegrid.style.transform = "Scale(" + Math.abs((Math.random() * 1.5) + 1) + ')';
			} else {
				flamegrid.style.gridGap = Math.floor(Math.random() * 35) + '%';
			}
			let randomRotation = Math.floor(Math.random() * 180);
			secondarrows.style.transform = `rotate(${Math.floor(Math.random() * 180)}deg)`;
		}, 4000);
		setInterval(function () {
			secondarrows.style.padding = Math.floor(Math.random() * 15) + '%';
			flamegrid.style.transform = `rotate(${Math.floor(Math.random() * 180)}deg)`;
		}, 3000);
	});
</script>

<div id="theroot" class="w-screen min-h-screen bg-[#555] selection:bg-pink-2" style="cursor: url('/cursor.svg'), auto;	">
	<div class="pt-24 pb-12 grid grid-cols-1 grid-rows-1 max-w-xl mx-auto">
		<video id="flame" class="z-10 w-full" src="/6.mp4" autoplay playsinline muted loop />
		<div id="secondarrows" class="grid mx-auto z-40 grid-rows-2 grid-cols-2 w-[56.25%] row-start-1 col-start-1 transition-all duration-1000">
			<div class="block justify-self-start self-start w-3 h-3 border-t border-l border-white opacity-80"></div>
			<div class="block justify-self-end self-start w-3 h-3 border-t border-r border-white opacity-80" />
			<div class="block self-end w-3 h-3 border-l border-b border-white opacity-80">
			</div>
			<div class="block justify-self-end self-end w-3 h-3 border-r border-b border-white opacity-80" />
		</div>
		<div
			id="flamegrid"
			class="grid grid-cols-2 z-20 mx-auto left-0 right-0 min-h-full w-[56.25%] row-start-1 col-start-1"
		>
			<div id="flameq1" class="flamequad">
				<div
					class="block self-end justify-self-end w-3 h-3 border-r border-b border-white opacity-80 m-4 bottom-0"
				/>
			</div>
			<div id="flameq2" class="flamequad">
				<div class="block self-end w-3 h-3 border-l border-b border-white opacity-80 m-4" />
			</div>
			<div id="flameq3" class="flamequad">
				<div
					class="block justify-self-end w-3 h-3 border-r border-t border-white opacity-80 m-4"
				/>
			</div>
			<div id="flameq4" class="flamequad">
				<div class="block w-3 h-3 border-l border-t border-white opacity-80 m-4" />
			</div>
		</div>
		<div class="mt-24 grid z-30 items-center justify-items-center row-start-2 col-start-1">
			<h1 class="inline relative colorcycle text-3xl font-thin">splice</h1>
		</div>
		<div class="mt-24 grid z-40 items-center justify-items-center row-start-2 col-start-1 text-white">
			<h1 class="inline relative text-3xl font-thin mb-1">splice</h1>
		</div>
	</div>
	
	<a href="https://github.com/petercoyne/" class="mx-auto grid z-50 grid-cols-3 w-20 h-20 text-white hover:bg-white hover:bg-opacity-5">
		<div class="block z-50 justify-self-start self-start w-3 h-3 border-t border-l border-white opacity-20"></div>
		<img src="/icons_github.svg" alt="github link" class="mx-auto z-50 text-white self-center"/>
		<div class="block z-50 justify-self-end self-end w-3 h-3 border-r border-b border-white opacity-20" />
	</a>
</div>