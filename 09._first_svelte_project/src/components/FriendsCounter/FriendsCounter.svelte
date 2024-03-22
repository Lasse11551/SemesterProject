<script>
    export let value = 0;

    function alienateFriend() {
        value--;
}
</script>

<div>Friends Counter:</div>
<h1>{value}</h1>
<button on:click={alienateFriend}>Alienate A Friend</button>