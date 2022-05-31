<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Index from "./pages/index.svelte";
  import Login from "./pages/login.svelte";
</script>

<Router url={""}>
  <Route path="/" component={Index} />
  <Route path="/login" component={Login} />
</Router>
