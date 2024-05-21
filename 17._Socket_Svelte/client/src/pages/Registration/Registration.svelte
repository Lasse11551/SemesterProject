<script>
    import { nickname } from "../../store/nicknameStore.js";
    let nicknameInput;

    async function submitNickname() {
        await fetch("http://localhost:8080/nicknames", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nickname: nicknameInput })
        })
        nickname.set(nicknameInput)

        localStorage.setItem("nickname", nicknameInput);
    }
</script>

<input bind:value={nicknameInput} placeholder="nickname">
<button on:click={submitNickname}>Submit Nickname</button>