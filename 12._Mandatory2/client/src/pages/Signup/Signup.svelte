<script>
    import toast, { Toaster } from 'svelte-french-toast';
    import { navigate } from "svelte-navigator";
    import { BASE_URL } from "../../stores/generalStore.js";
    import { fetchPost } from "../../util/api.js";

    let email = "";
    let password = "";

    async function handleSignup(event) {
        event.preventDefault();
        const payload = { email, password }

        fetchPost($BASE_URL + "/signup", payload)
        toast.success("Signup succesful");
        
        navigate("/Login")
    }
</script>
<Toaster/>
<div class=container>
    <div class="form-container signup-container">
        <h2 class="signuph2">Signup</h2>
        <form on:submit={handleSignup}>
            <input type="email" placeholder="Email" bind:value={email}>
            <input type="password" placeholder="Password" bind:value={password}>
            <button type="submit">Sign Up</button>
        </form>
    </div>
</div>

<style>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.form-container {
  padding: 20px;
  margin: 10px;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 10px;
}

.signuph2 {
    color: black;
}

input[type="email"], input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
  color: black;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #5c67f2;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}

button:hover {
  background-color: #4a54e1;
}

</style>