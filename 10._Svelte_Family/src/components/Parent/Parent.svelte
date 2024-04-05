<script>
    export let parentName;
    export let myChildren;
    let treasureChest = ["🔱", "🏅", "⭐️", "🔑", "🏆", "👑", "🌟"];

    import Child from "../Child/Child.svelte"
    import { fridgeMessages } from "../../stores/fridgeMessageStore";

    function handleShowLove(childName) {
        console.log(`${parentName} is loved by ${childName} veeery much`);
    }

    /* assignment: Create a treasure chest full of items (emoji)
    each paremt has a treasure chest and the children can take on item at a time 
    remember to follow the conventions of handle *and on*
    display th treasure chest items in the parent component*/
    function handleTakeFromTreasureChest() {
        treasureChest.pop();
        treasureChest = treasureChest;
    }

    // assignment give parent the power to wipe the fridge
    function wipeFridge() {
        fridgeMessages.set([{message: "Svelte Family Fridge"}]);
    }

</script>

<h1>{parentName}</h1>

<button on:click={wipeFridge}>Wipe the fridge</button>

<p>
{#each treasureChest as chest}
    {chest}
{/each}
</p>


{#each myChildren as child}
    <Child child={child} onShowLove={handleShowLove} onTakeFromTreasureChest={handleTakeFromTreasureChest}/>
{/each}

