<script>
  import { nickname } from "./store/nicknameStore.js";

  import Colors from "./pages/Colors/Colors.svelte";
  import Registration from "./pages/Registration/Registration.svelte";
</script>
{#if $nickname}
<Colors/>
{:else}
<Registration/>
{/if}