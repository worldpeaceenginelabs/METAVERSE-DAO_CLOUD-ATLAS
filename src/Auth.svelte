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

// Logged in user stores a Couch in his signed graph. Notice, it should be an object in order to have a soul
let data = {name: 'Alex', city: 'New York', description: 'blabla', zoomLink: 'https://zoom.us/5sdf4w', long: '50.00', lat: '14.0'}
let certificate = await SEA.certify("*", {"*": "interested", "+": "*"}, user._.sea);

db.user(user.is).get('cloudatlasdotclub').get('couchsurfing').get('couchs').put(data).on(async data => {
    let soul = Gun.node.soul(data) // Gun.node.soul() data._.["#"]
    let hash = await SEA.work(soul, null, null,{name:'SHA-256'})
    let certificate = await SEA.certify("*", {"*": "interested", "+": "*"}, user._.sea);
    db.get('cloudatlasdotclub').get('couchsurfing').get('#couchs').get(hash).put(soul, {opt: {cert: certificate}})  // User puts a hashed soul of the Couch in a public content-addressed node
})

// The globe can fetch the Couchs later with the soul, TODO: limited to fire on long,lat changes only
db.get('#couchs').map().on()


</script>

<!-- HTML (Markup) -->
<input class="user-input" name="username" bind:value={username} minlength="3" maxlength="16" /><br>
<input class="user-input" name="password" bind:value={password} type="password" minlength="8" /><br>
 <!-- force aA123!? for better pass strength??? -->


<button class="login" on:click={login}>Login</button>
<button class="login"  on:click={signup}>Sign Up</button>

<button class="login"  on:click={logout}>Logout</button>
