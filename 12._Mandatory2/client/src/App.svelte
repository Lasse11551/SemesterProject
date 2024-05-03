<script>
    import { Router, Link, Route } from "svelte-navigator"
    import Login from "./pages/Login/Login.svelte"
    import Signup from "./pages/Signup/Signup.svelte"
    import Home from "./pages/Home/Home.svelte"
    import PrivateRoute from "./pages/PrivateRoute/PrivateRoute.svelte";
    import { user } from "./stores/generalStore.js";

    function handleLogout() {
        $user = null
    }
</script>


<Router>
    <nav>
        <h1>Welcome</h1>

        <Link to='/'>Home</Link>
        <Link to='/Signup'>Signup</Link>
        <Link to='/Profile'>Profile</Link>
    </nav>

    <div>
        <Route path='/Login'>
            <Login/>
        </Route>

        <Route path="/">
            <Home />
        </Route>
        <Route path='/Signup'>
            <Signup/>
        </Route>

        <PrivateRoute path="/Profile" let:location>
            <h3>Welcome {$user.email}</h3>
            <button class="logoutBtn" on:click={handleLogout}>Logout</button>
        </PrivateRoute>

    </div>
</Router>