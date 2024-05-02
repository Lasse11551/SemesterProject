<script>
    import { Router, Link, Route } from "svelte-navigator"
    import Login from "./pages/Login/Login.svelte"
    import Signup from "./pages/Signup/Signup.svelte"
    import Home from "./pages/Home/Home.svelte"
</script>


<Router>
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/Signup'>Signup</Link>
    </nav>

    <div>
        <Route>
            <Home />
        </Route>
        <Route path='/Login'>
            <Login/>
        </Route>
        <Route path='/Signup'>
            <Signup/>
        </Route>
    </div>
</Router>