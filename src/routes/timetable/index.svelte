<script context="module">
	// export const ssr = false;
	export const load = async ({ fetch }) => {

		// GA_KCDAG_H08 DM1
		// %23SPLUSB16433 DM2
		// %23SPLUS7834D1 DM3
		// %23SPLUS3D630E DM4
		// %23SPLUSE3B3BF SD1
		// %23SPLUS58465E SD2
		// %23SPLUSB1643A you are here
		// GA_KSOFT_H0847SOF8 SD4

		const res = await fetch('http://home.splice.ie:3000/stuff?_id=%23SPLUSB1643A');
		const data = await res.json();

		return { props: { classes: data } };
	};
</script>

<script>
	import { group } from "./stores";
	export let classes;
	let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

	function capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	let getClasses = (day) => {

		classes[0][day].forEach(element => {

			// slice 1: remove last 2 chars (class type), slice2: remove first word (courses)
			element.newModuleName = element.moduleName.slice(0,-2).toLowerCase().split(' ').slice(1).map(capitalize).join(' ');

			switch (element.moduleName.slice(-1)) {
				case 'L':
					element.classType = "Lecture";
					element.color = "blue";
					break;
				case 'P':
					element.classType = "Lab";
					element.color = "yellow";
					break;
				case 'T':
					element.classType = "Tutorial";
					element.color = "pink";
					break;
				default:
					element.classType = "Unknown Type";
					element.color = "gray";
			}
			// console.log(element.moduleName.slice(-6,-2))
			switch (element.moduleName.slice(-3,-2)) {
				case 'A':
					element.classGroup = "A";
					break;
				case 'B':
					element.classGroup = "B";
					break;
				default: 
					element.classGroup = "";
			}
		})
		
		return classes[0][day];
	}

</script>

<div class="container mx-auto max-w-lg">
	<h3 class="text-xs m-4">Timetable for this week. <span class="text-gray-400">Scrapes weekdays at 07:05</span></h3>
	
	<div class="mx-2">
		<label><input type=radio bind:group={$group} value={"A"}> Group A</label>
		<label><input type=radio bind:group={$group} value={"B"}> Group B</label>
	</div>
	
	{#each days as day}
	<h4 class="m-4 mb-0 uppercase text-gray-400">{day}</h4>
	
		{#each getClasses(day) as classs}
		{#if classs.classGroup == $group || classs.classGroup == ""}
		<hr class="border-gray-200"/>
		<div class="grid gap-2 m-2" style="grid-template-columns: 3rem 0.25rem 1fr">
			<div class="time text-right text-sm self-center">
				<div class="from">{classs.startTime}</div>
				<div class="to text-gray-400">{classs.endTime}</div>
			</div>
			<div class="divider w-1 bg-{classs.color}-400"></div>
			<div class="classinfo self-center flex">
				<div class="flex-grow self-center">
					<div class="moduletitle -mt-0.5 text-sm sm:text-base">{classs.newModuleName}</div>
					<div class="classtype text-gray-400 text-xs">{classs.classType}, {classs.lecturer}</div>
				</div>
				{#if classs.room.length > 1}
					<div class="roomnumber inline text-right mr-2 self-center text-xs sm:text-sm border bg-gray-50 border-gray-200 p-1 sm:p-2 ml-2 rounded sm:rounded-xl">
						{classs.room}
					</div>
				{/if}
			</div>
		</div>
		{/if}
		{/each}
	{/each}

</div>

<!-- // workaround for tailwind JIT and dynamic colours -->
<div class="dummy bg-pink-400"></div>
<div class="dummy bg-yellow-400"></div>
<div class="dummy bg-blue-400"></div>

<style lang="postcss">
	label { @apply mx-2 bg-gray-200 p-2 rounded-lg hover:bg-gray-300 cursor-pointer inline-block; }
</style>