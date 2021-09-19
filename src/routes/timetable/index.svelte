<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch('http://home.splice.ie:3000/stuff?_id=%23SPLUSB1643A');
		const data = await res.json();

		return { props: { classes: data } };
	};
</script>

<script>
	export let classes;
	let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
	export let group = "A";

	function capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	let getClasses = (day) => {
		console.log(classes[0][day]);
		classes[0][day].forEach(element => {

			element.newModuleName = element.moduleName.slice(7,-2).toLowerCase().split(' ').map(capitalize).join(' ');

			switch (element.moduleName.slice(-1)) {
				case 'L':
					element.classType = "Lecture";
					break;
				case 'P':
					element.classType = "Lab";
					break;
				case 'T':
					element.classType = "Tutorial";
					break;
				default:
					element.classType = "Unknown Type";
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

<!-- <h1 class="font-bold text-xl m-4">Software Development Y3 Timetable</h1> -->
<h3 class="text-xs m-4">Timetable for next week. <span class="text-gray-400">Scrapes weekdays at 07:05</span></h3>

<div class="mx-2">
	<label><input type=radio bind:group={group} value={"A"}> Group A</label>
	<label><input type=radio bind:group={group} value={"B"}> Group B</label>
</div>

{#each days as day}
<h4 class="m-4 mb-0 uppercase text-gray-400">{day}</h4>

{#each getClasses(day) as classs}
{#if classs.classGroup == group || classs.classGroup == ""}
<div class="grid gap-2 m-2" style="grid-template-columns: 3rem 0.25rem 1fr">
	<div class="time text-right text-sm self-center">
		<div class="from">{classs.startTime}</div>
		<div class="to text-gray-400">{classs.endTime}</div>
	</div>
	<div class="divider w-1 bg-gray-400"></div>
	<div class="classinfo self-center flex">
		<div class="flex-grow">
			<div class="moduletitle -mt-0.5">{classs.newModuleName}</div>
			<div class="classtype text-gray-400 text-xs">{classs.classType}, {classs.lecturer}</div>
		</div>
		<div class="roomnumber inline text-right mr-2 self-center">
			{classs.room}
		</div>
	</div>
</div>
{/if}
{/each}
{/each}

<style lang="postcss">
	label { @apply mx-2 bg-gray-200 p-2 rounded-lg hover:bg-gray-300 cursor-pointer inline-block; }
</style>