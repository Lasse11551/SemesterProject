<script>
    import { Router, Link, Route } from "svelte-navigator"
    import LoginAndSignup from "./pages/LoginAndSignup/LoginAndSignup.svelte";
</script>


<Router>
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/LoginAndSignup'>Login/Signup</Link>
    </nav>

    <div>
        <Route path='/'>
            <LoginAndSignup/>
        </Route>
    </div>
</Router>