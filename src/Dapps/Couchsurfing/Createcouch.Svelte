<script lang="ts">

import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import SEA from 'gun/sea'

const db = GUN(['https://jksfs798zfzb9c3nc3e38c7nr83cnn8rz.onrender.com/gun']);

function onSubmit{
// Logged in user stores a Couch in his signed graph. Notice, it should be an object in order to have a soul
let data = {name: 'Alex', city: 'New York', description: 'blabla', zoomLink: 'https://zoom.us/5sdf4w', long: '50.00', lat: '14.0'}

db.user().get('cloudatlasdotclub').get('couchsurfing').get('couchs').put(data).on(async data => { //store message in User Space then...
    let soul = data._["#"] // gets us the Soul of the just stored node
    let hash = await SEA.work(soul, null, null,{name:'SHA-256'}) // gets us the hash of the above data
    let certificate = await SEA.certify("*", {"*": "interested", "+": "*"}, user._.sea); // let users write into User Space 
    db.get('cloudatlasdotclub').get('couchsurfing').get('#couchs').get(hash).put(soul, {opt: {cert: certificate}})  // User puts a hashed soul of the Couch in a public content-addressed node
})}

    
</script>