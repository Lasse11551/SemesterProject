<script>

  import { useNavigate, useLocation } from "svelte-navigator";
  import { user } from "../../stores/generalStore";

  const navigate = useNavigate();
  const location = useLocation();

  $: if (!$user) {
    navigate("/Login", {
      state: { from: $location.pathname },
      replace: true,
    });
  }

</script>

{#if $user}
  <slot />
{/if}
