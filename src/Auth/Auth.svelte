<script>
  import GUN from 'gun';
  import 'gun/sea';
  import 'gun/axe';
  import SEA from 'gun/sea';

  // Database
  const db = GUN(['https://jksfs798zfzb9c3nc3e38c7nr83cnn8rz.onrender.com/gun']);

  // Gun User
  const user = db.user().recall({sessionStorage: true});

  // Current User's username
  let username;

  // Current User's password
  let password;

  // Get Alias
  db.on('auth', async(event) => {
    const alias = await user.get('alias'); // username string
    username = alias;

    console.log(`signed in as ${alias}`);
  });

  // Login button
  function login() {
    user.auth(username, password, ({ err }) => err && alert(err));
  }

  // Sign-up button
  function signup() {
    user.create(username, password, ({ err }) => {
      if (err) {
        alert(err);
      } else {
        login();
      }
    });
  }

  // Logout button
  function logout() {
    user.leave(console.log("user logged out"));
  }


</script>

<!-- HTML (Markup) -->
<input class="user-input" name="username" bind:value={username} minlength="3" maxlength="16" /><br>
<input class="user-input" name="password" bind:value={password} type="password" minlength="8" /><br>
 <!-- force aA123!? for better pass strength??? -->


<button class="login" on:click={login}>Login</button>
<button class="login"  on:click={signup}>Sign Up</button>

<button class="login"  on:click={logout}>Logout</button>
