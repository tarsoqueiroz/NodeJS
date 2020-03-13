<script>
  export let goal

  $: doHighLight = goal.includes('!')
</script>

<style>
  .highlight {
    color: red;
  }
</style>

<h1 class:highlight={doHighLight} >{goal}</h1>