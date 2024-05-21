<script>
    import { colorList } from "../../store/colorlistStore.js";

</script>

{#each $colorList as colorListItem}
    <div>${colorListItem.nickname}: ${colorListItem.color}</div>
{/each}