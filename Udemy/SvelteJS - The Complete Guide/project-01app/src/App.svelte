<script>
	let name = 'Max';
	let age = 22;

	$: uppercaseName = name.toUpperCase();

	// $: console.log(name);
	// $: console.log(age)
	$: {
		console.log('Function with 2 variables')
		console.log(name)
		console.log(age)
	}

	$: if (name === 'Maximilian') {
		console.log('It runs!!!')
		age = 31;
	}

	function incrementAge() {
		age += 1;
	}

	function changeName() {
		if (name === 'Maximilian') {
			name = 'Max';
		} else {
			name = 'Maximilian';
		}
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {uppercaseName}, my age is {age}!</h1>
<button on:click="{incrementAge}">Change Age</button>
<button on:click="{changeName}">Change Name</button>
