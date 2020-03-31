<script>
	import ContactCard from './ContactCard.svelte'

	let name = 'Max'
	let title = ''
	let image = ''
	let description = ''

	let newName = 'Maximilian'
	let age = 22

	$: uppercaseName = name.toUpperCase()

	// $: console.log(name)
	// $: console.log(age)
	$: {
		console.log('Function with 2 variables')
		console.log(name)
		console.log(age)
	}

	$: if (name === 'Maximilian') {
		console.log('It runs!!!')
		age = 31
	}

	function incrementAge() {
		age += 1
	}

	function changeName() {
		let auxName = name
		name = newName
		newName = auxName
	}

	function nameInput(event) {
		const enteredValue = event.target.value
		newName = enteredValue
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello dear {uppercaseName}, my age is {age}!</h1>
<button on:click="{incrementAge}">Change Age of user</button>
<!-- 
<button on:click="{changeName}">Change Name to '{newName}'</button>
<input type="text" value="{name}" on:input="{nameInput}"> 
-->
<input type="text" bind:value="{name}" />
<input type="text" bind:value="{title}" />
<input type="text" bind:value="{image}" />
<textarea rows="3" bind:value="{description}"></textarea>

<ContactCard userName={name} 
						 jobTitle={title} 
						 {description} 
						 userImage={image} />
