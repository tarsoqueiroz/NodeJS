<script>
	let name = 'Max'
	let age = 30

	// let uppercaseName; not required!

	$: uppercaseName = name.toUpperCase()

	$: console.log(name)

	$: console.log(age)

	$: if (name === 'Maximilian') {
		console.log('It runs!');
		age = 31;
	}

	function incrementAge() {
		age += 1;
	}

	function changeName() {
		if (name === 'Max') {
			name = 'Maximilian'
		} else {
			name = 'Max'
		}
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {uppercaseName} (aka {name}), my age is {age}!</h1>
<button on:click="{incrementAge}">Change Age</button>
<button on:click="{changeName}">Change Name</button>
