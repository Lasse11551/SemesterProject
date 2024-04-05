<script>
    export let child;
    export let onShowLove;
    export let onTakeFromTreasureChest;

    import { fridgeMessages } from "../../stores/fridgeMessageStore";

    let fridgeMessageInputValue = "";
    
    function submitFridgeMessage() {
        const newFridgeMessage = {
            creator: child.name,
            message: fridgeMessageInputValue
        }
        //fridgeMessages.set([...$fridgeMessages, newFridgeMessage]);
        fridgeMessages.update((fridgeMessageStore) => {
            fridgeMessageStore.push(newFridgeMessage);
            return fridgeMessageStore;
        });
        fridgeMessageInputValue = "";
    }
</script>

<div
    class:is-girl={child.isGirl}
    class:is-boy={!child.isGirl}
    class={child.familySheep || "not-a-sheep"}
>
    <h2>{child.name}</h2>

    <label for="fridgeMessage">Write a Fridge Message</label>
    <input type="text" name="fridgeMessage" placeholder="Fridge Message..."
        bind:value={fridgeMessageInputValue}
    >
    <br>
    <button on:click={submitFridgeMessage}>Write fridge message</button>
    <br><br>

    <button on:click={() => onShowLove(child.name)}>Show Love 💚</button>
    <br>
    <button on:click={onTakeFromTreasureChest}>Take from chest</button>
</div>

<style>
    .is-girl {
        background-color: red
    }

    .is-boy {
        background-color: blue;
    }

    .not-a-sheep {
        border: 0.5em solid yellow;
    }

    .grey-sheep {
        border: 0.5em solid grey;
    }

    .black-sheep {
        border: 0.5em solid white;
    }
</style>