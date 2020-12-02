<script>
	let name = 'Max';
	let age = 30;

	$: uppercaseName = name.toUpperCase();

	function incrementAge() {
		age += 1;
	}

	function changeName() {
		 name = 'Tarso Queiroz';
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name} and in uppercase {uppercaseName}, my age is {age} and age plus 1 is {age + 1}!</h1>
<button on:click="{incrementAge}">Change Age</button>
<button on:click="{changeName}">Change Name</button>
