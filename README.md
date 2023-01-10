### [Watch METAVERSE-DAO | CLOUD ATLAS development](https://metaverse-dao.pages.dev/) [![Live](https://user-images.githubusercontent.com/67427045/174406382-236a2b66-0cd8-4545-8453-74c76bd581ef.png)](https://metaverse-gun.pages.dev/)
### [METAVERSE DAO | CLOUD ATLAS COMMUNITY](https://gitter.im/METAVERSE-GUN/community) [![Join the chat at https://gitter.im/METAVERSE-GUN/community](https://badges.gitter.im/METAVERSE-GUN/community.svg)](https://gitter.im/METAVERSE-GUN/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
### [QUICKSTART FOR DEVS](https://github.com/worldpeaceenginelabs/METAVERSE-DAO_CLOUD-ATLAS/master/README.md#quickstart-for-components-and-dapps-the-decentralized-back-end)
### [Gun Relay (How to run a node - Deploy a GUN relay server everywhere on GUN WIKI)](https://github.com/amark/gun/wiki#how-to-run-a-node---deploy-a-gun-relay-server-everywhere)
### [Gun Relay Desktop (Electron Gun)](https://github.com/worldpeaceenginelabs/ELECTRON-GUN)
### [Gun Relay Donation Tool (Donate Decentralize UI)](https://github.com/worldpeaceenginelabs/DONATE-DECENTRALIZE-UI)

<br>

# METAVERSE-DAO | CLOUD ATLAS <br> - Time to connect the dots...
### [aka "The Seed" aka "World Seed"](https://youtu.be/TlpZr5BedEc) 🧙‍♂️💬=>⚔️🎨@

### ...more about CLOUD ATLAS on https://github.com/worldpeaceenginelabs/CLOUD-ATLAS readme
<br>

![image](https://user-images.githubusercontent.com/67427045/196102288-27a565a5-79ba-4bc7-af04-530446aa5b65.png)

<br>

![image](https://user-images.githubusercontent.com/67427045/174390767-49c9920e-3d7e-41c6-a6ba-bea83ce48533.png)

<h3 align="center">more features and protocols about to come...</h3>
<br><br><br>

# What is it?

![image](https://user-images.githubusercontent.com/67427045/196626511-7961d2ec-787f-49c9-bddf-e95e7d457299.png)

<br>

## For end-users
### METAVERSE-DAO includes the basic programs needed to create a meta-verse, such as the audio and video system, as well as downsized, digital versions of governments, banking-system and Web 2.0, which is used to help in the development and to maintain control of the world.

### It is made Web 3.0 so that the created world does not require one large server or farm like centralized services today, but can run on multiple smaller servers, even the end-user devices itself will become servers.<br>(More User = More Server!)

### All meta-verses using 'METAVERSE-DAO' as their "game" engine allow the conversion of an account from one Seed-based world to another.

### It allows an account to transfer their data from one verse into another and keep their stats instead of having to start from scratch.

### The whole interconnected network of meta-(uni)verses is called META-VERSE-NEXUS.
<br>

## For developers and creators
### A decentralised, open-sourced, interactive, digital twin of the real-world (CesiumJS), which connects to Unreal Engine 5.<br>
### Combined with decentralised, planet-wide, text, file, voice and video communication (Iris + GUN + Webtorrent) right from the start, at your command.

### A Big Thank You to the Iris Community, the Cesium Community, the Gun Community, and all the communities behind the mouthwatering libraries and protocols we use. 🙏

### What great libraries to start building an open source metaverse, don't you think?
<br>


# Quickstart for components and dapps (the decentralized back-end)

## This is pretty much the core of everything. Take a look how i connect my front-end code with the graph database GUN.
## This script saves a long/lat pair to the GUN graph, and renders a point on the globe, if the local clients graph or a connected graph (GUN-Relay) gets a new entry. (the ```.on``` subscribes to the GUN graph, everything new to the graph (local client graph and/or relay graph) will automatically be rendered on the globe)
## Notice that no matter how complex your function is: You just drop the result in a variable and connect it to the GUN write function (green boxes).
## Last, you can easily receive the data in any function, again, no matter how complex, by ```db.on (data => {//your function here});``` and get the data that you wrote to GUN before (red arrows)

![image](https://user-images.githubusercontent.com/67427045/211544277-2e2e6e90-dd3a-46c4-82f7-614e812363f5.png)

# Sounds maybe complicated, but this bundled package which I am offering you here is actually pretty mighty, even for beginners! (last bullet point) 

- If Cesium JS is your thing, you can easily customize the above object blueprint (// Cesium constructor) to render something else ([CesiumJS is a mighty lib](https://cesium.com/learn/ion-sdk/ref-doc/))
- But from my experience, i prefer to use the point as a postion and a tag, on which i render something else the usual JS way. For instance i connect a canvas or rather a modal, button, link, or whatever, with the point via markup (HTML) or/and JS(Document.getElementById() for instance), and keep it close to the point with CSS.
- If you go for Cesium for Unreal Engine 5, you can make these points your reference points.
- For beginners? Well, in Unreal Engine 5, you can code games, applications etc. in C#, or you wire the so called [UE blueprints](https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/GettingStarted/)
- [This guy](https://wccftech.com/bright-memory-infinite-interview-zeng-on-raytracing-next-gen-and-december-target-release-date/) made a whole game with Blueprints (you can combine this with Cesium for Unreal, since its just another asset on the UE market, an extension)

He says today:
"Yes, I am still using Blueprints to work on my game development. Because I have only worked as a 3D environment artist but I have no programming experience. So I am also very grateful that the Unreal engine supports a strong Blueprints system."

## So if coder or not, have fun and hit me on [METAVERSE-DAO | CLOUD ATLAS Community Chat](https://gitter.im/METAVERSE-GUN/community) if you have any question.

<br><br>

# same as above, but copy-pasteable...

```
// Start Svelte Lifecycle
onMount(async () => {

// Initialize GUN and tell it we will be storing all data under the key 'test'.
var db = Gun(['http://localhost:8765/gun']).get('mapmarker')

// fetch latitude, longitude on click and save to Gun
let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handler.setInputAction(function(result) {
                                        // pick position
                                        const cartesian = viewer.scene.pickPosition(result.position);
                                        // save Cartesian coordinates (x,y,z)
                                        const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
                                        
                                        // convert from Cartesian to Degrees and shorten the numbers to 7 digits after comma
                                        const longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(7);
                                        const latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(7);
                                        
                                        // Generate random ID
                                        var randomid = nanoid();
                                        
                                        // Save coordinates to Gun                                        
                                        db.get(randomid).put({longitude: longitudeString, latitude: latitudeString});
                                        
                                        },
Cesium.ScreenSpaceEventType.LEFT_CLICK);

// Fetch Gun data
db.on(data => { 

// Cesium constructor
let reddot = viewer.entities.add({
			name: "red dot",
			position: Cartesian3.fromDegrees(
                                      Number(data.longitude),
                                      Number(data.latitude),
                                      0
                                      ),
                                      
point: {pixelSize : 10, color : Cesium.Color.RED, outlineColor : Cesium.Color.GREEN, outlineWidth : 3},
});
});
});
```



# Basic feature bucket list (updated January 2023)

First Release v0.0.1 January 2023

## Done or not
#### ✅ Done, or works already from the start
#### 🚧 to do, or on its way
<br>

## Start to create and bring the real-world to your desktop and then back into the real-world with Cesium for Unreal Engine 5... ✅
- **Unreal Engine 5 empowers all creators across all industries to deliver stunning real-time content and experiences. Now you can merge the real-world with the digital world from your Desktop** ✅
- **Cross-compiling for Desktop and Android** 🚧
- **Multiple Exports: mobile and desktop browser, mobile and desktop app, vr, webvr...** ✅
- **Multiple Applications: websites, apps, games, software, professional tools...** ✅
<br>

## Start instant from your browser or download the desktop app and support the re-decentralization of the internet automatically ✅
- **Best Practices: JAMStack(JS, static but API hydrated, Markup)✅ CDN distribution✅ PWA✅  P2P✅**
- **Every browser-window or desktop app becomes a decentralization relay itself** ✅
- **Need more relays? There is a 1-click deploy in the settings menu.** ✅
- **Need even more relays? Let your users 1-click deploy a relay for you! [Donate Decentralize](https://github.com/worldpeaceenginelabs/DONATE-DECENTRALIZE-UI) ✊** 🚧 (coming soon)
<br>

## P2P Browser integrated! (based on [Aggregore](https://agregore.mauve.moe/) and [Beaker Browser](https://beakerbrowser.com/)) 🚧
- **Hit every address available! https://, bt://, ipfs://, hyper://, dot:// and many more are coming...** ✅
- **Host websites and apps for free, from your desktop. Easy like dropping a file into a folder.** ✅
- **Distribute your data and files, via peers and relays.** ✅
- **Distribute your site's / app's build files itself via [Peer-CDN](https://github.com/vardius/peer-cdn) on your site's/app's users devices** ✅
- **Need DynDNS? How a about decentralized DNS via peers and relays? Have an address for your page or even app, inside your swarm! [GunNS](https://github.com/draeder) 😍** 🚧
<br>

## Connects everything with everything, but decentralized ✅

- **Multiple protocols (now: Gun, Webtorrent; coming: IPFS, hyper, dot, gemini, ssb, amm...)** ✅
- **Multiple ways of connection: LAN, Wifi, Bluetooth (coming), Internet, P2P, QR Code, Invitation Link** ✅
<br>

## Security and Privacy build in ✅
- **Decentralized, Distributed, P2P** ✅
- **Censorship resistent** ✅
- **No corporate gatekeepers - No big tech companies that decide what you can post, what gets visibility and who gets to have an account** ✅
- **Anonymous Authentication: Sign up and Login via Metamask Wallet + 4FA (Metamask works without name and payment, but we will know 1000% its YOU again)🚧** (coming soon)
- **Fully Encrypted** 🚧
- **2FA🚧, [3FA](https://twitter.com/marknadal/status/1427715775838572545)✅, [4FA](https://traitware.com/up-to-4-factor-multifactor-authentication/) for Login & UI & Apps (Device, PhotoAuth, Biometric, Location)** 🚧 (coming soon)<br>**(for instance, you can allow the use of login, or settings, or your online-banking, ONLY when your GPS location is at home, or in a dedicated room, or even an area(geofencing))**
- **[Secure Render](https://hackernoon.com/secure-rendering-a-new-browser-standard-for-user-privacy-dv783b9h) Secure Rendering means the ability to have for instance Facebook not even know what your data is, yet still render the same great user experience.** 🚧
<br>

## Downsized, digital versions of governments, banking-system and Web 2.0 🚧
- **Digital government: Build a community with defined rules and goals** 🚧
- **Banking-system: Buy and sell with crypto money** 🚧 (coming soon)
- **Web 2.0: The best from this step in internet evolution. Online brainstormings, crowdsourcing and collaboration, online and in-person meetups, petitions and crowdfunding. In the metaverse you are able to do what the internet was supposed to be...** 🚧 (coming soon)
<br><br><br>

# Preamble for Developers

Hi there everybody,

My offer to devs is, you just doing your thingy and contribute to iris, cesium, gun, webtorrent, and all the other p2p, security, privacy, spatial and other libs we use, like always, but which will arrive at metaverse-gun automatically.

But METAVERSE-DAO is sure a platform, were we can get stuff from the lab, into practice, together. 🥳
A bit like dev hop on hop off, no strings attached.😎

I found so many github repos, which if bootstrapped get you such awesome decentralization (not only) features. But they lay around, dust on them sometimes, single purposed, but waiting to be used. 

Could you imagine something better than a gun+multipleProtocols based metaverse as a decentralized playground for devs? I'm not 😅

Thank you so much in advance (for contributing to your favorite libraries, as always) 😉🙏

Hit me anytime you like! 
<br><br><br>

## Starterkit ✅

### Not an IT person? No worries, we got your back!
### Templates and UI are on its way, so you can start being creative, even without being a professional!
### But we will also not hold you back from using the professional tools. Every user has the same rights, at no cost!
<br>

![image](https://user-images.githubusercontent.com/67427045/196626511-7961d2ec-787f-49c9-bddf-e95e7d457299.png)
<br><br><br>

# Mockups

### In manufacturing and design, a mockup, or mock-up, is a scale or full-size model of a design or device, used for teaching, demonstration, design evaluation, promotion, and other purposes. A mockup may be a prototype if it provides at least part of the functionality of a system and enables testing of a design.
<br>

## Mockup METAVERSE-DAO App Store (MGAS) 🚧

### There is a store with UI and even logic already integrated into Iris. Lets use it as a base for MGAS.

### I was already thinking about, integrating a webapp store.<br>
### Like an AppStore, but with the webversions of apps.<br>
### Its basicly logos with a link (maybe a description behind the link) but powerful like a typical webstore. (power that belongs to the people, and not to a monopoly of something alone)<br>
### Here is an example of such an AppStore: https://pwa.bar/

![image](https://user-images.githubusercontent.com/67427045/173530828-d5528d86-9371-4170-8d12-4b79bbc66d4d.png)
<br><br><br>

## Mockup of Live Coding Console with hot reloading 🚧
### Every example you can do in Cesium Sandcastle and more...

![image](https://user-images.githubusercontent.com/67427045/173256852-77a9af68-0271-4da9-91cf-576bb177bd27.png)
<br><br><br>

# CesiumJS ✅
### See CesiumJS live in action: https://sandcastle.cesium.com/

![image](https://user-images.githubusercontent.com/67427045/173238912-ef698643-d541-4c16-91da-34a507367fd5.png)


## 3D geospatial visualization for the web
CesiumJS is an open source JavaScript library for creating world-class 3D globes and maps with the best possible performance, precision, visual quality, and ease of use. Developers across industries, from aerospace to smart cities to drones, use CesiumJS to create interactive web apps for sharing dynamic geospatial data.

Built on open formats, CesiumJS is designed for robust interoperability and scaling for massive datasets.

- Stream in 3D Tiles and other standard formats from Cesium ion or another source
- Visualize and analyze on a high-precision WGS84 globe
- Share with users on desktop or mobile

<br>

![image](https://user-images.githubusercontent.com/67427045/210920326-292ee3e5-2262-4378-900c-430ab82aa388.png)

<br>

## Bring the real world to Unreal Engine 5 and then back into the real world (web and desktop app, game, software, vr, webvr...)

### See Cesium for Unreal in action: https://cesium.com/platform/cesium-for-unreal/ (video)

![image](https://user-images.githubusercontent.com/67427045/173237155-12699b40-f737-41a5-83c5-019fc8b63736.png)

Built on open standards and APIs, Cesium for Unreal combines the 3D geospatial capability of Cesium with the high-fidelity rendering power of Unreal Engine, unlocking the 3D geospatial ecosystem for game engines.

- Free and open source visualization plugin
- A full-scale high-accuracy WGS84 globe for Unreal Engine
- Visualize massive high-resolution real-world photogrammetry and 3D content at runtime using 3D Tiles
- Integrated with Unreal Engine Editor, Actors and Components, Blueprints, and other UE features to enable a high degree of interactivity, physical realism, and photorealism to create amazing experiences
- Optional subscription to Cesium ion for one-click access to global curated 3D content including terrain, imagery, 3D cities, and photogrammetry

<br>

![image](https://metaverse-dao.pages.dev/fuzzy-avatar/3f213087732422818ea1f7bfc2345c5a.png)

<br>

# Iris Messenger ✅

### See Iris Messenger live in action: https://iris.to/

**Want social media where _you_ decide what gets into your feed, not some obscure algorithm? Something that can't be censored by authoritarian governments? No big tech companies that decide what you can post, what gets visibility and who gets to have an account? Yet no harassing troll accounts, spam or ads? Something that works locally even if ISPs are unavailable in an emergency situation?**

Here comes Iris. Iris is a social networking application that stores and indexes everything on the devices of its users and connects directly with peers who run the application - no corporate gatekeepers needed.

## Public and private messaging
Interface-wise, Iris is not too different from some existing social media. You can post texts, photos, videos, audio or other types of files into your feed.

![Feed](https://github.com/irislib/iris/raw/master/img/feed.png)

You can also chat privately or participate in public group discussions.

## Web of trust
You can create new Iris accounts (technically: cryptographic keypairs) at will, without asking for anyone's permission, but only the users whose web of trust upvoted your account will see its posts.

When you upvote someone, they become your 1st degree contact. The accounts they upvoted become 2nd degree contacts. Then there are 3rd degree contacts and so on. This is the web of trust, which can be used to filter all content on Iris. Hiding users by downvoting is also possible.

**This way we can avoid spam and other unwanted content without giving power to central moderators.**

You can also add to your contacts list and rate people and organisations who are not yet on Iris.
A decentralised web of trust, unlike certain big brother systems, could be a strong positive social force as envisioned in the blog post [Learning to Trust Strangers](https://medium.com/@mmalmi/learning-to-trust-strangers-167b652a654f). (Iris is evolved from thereby mentioned Identifi.)

## Attestations (identity verifications)
Keep your contact details up-to-date and ask for attestations from peers or specialised verifiers trusted by your WoT.

Use your Iris account for online authentication or identification on services that support it (browser extension and mobile app in development).

Crypto wallets could use Iris to connect human-recognizable identities to payment addresses. Encrypted messaging apps like Signal could use Iris to look up users instead of telecom-bound phone numbers.

If you lose access to your account (keypair), just create a new one and link it to your existing identity by asking for verifications from your web of trust.

## Name service
Through WoT attestations, Iris maps human readable names to public keys and other identity attributes, providing an alternative to centrally managed identifiers such as domain names, CA certificates, email addresses, phone numbers or social media handles.

Iris name search is interface-wise similar to many existing social media: instead of having to know someone's unique username, you can type in their non-unique natural name and get a dropdown list of matching contacts ordered by distance in your web of trust.

You can also do reverse name lookup, such as looking up a name for an unknown number that is calling you. Or you could look up who owns a bitcoin address - as perceived by your web of trust.

## Importing content from existing sources
An Iris message is digitally signed by the entity that verified its origin. In other words: message author and signer can be different entities, and only the signer needs to be on Iris.

For example, a crawler can import and sign other people's messages from Twitter. Only the users who trust the crawler will see the messages.

![Feed](https://github.com/irislib/iris/raw/master/img/msg.png)
*A message imported from the bitcoin trading site bitcoin-otc.com by "Bitcoin-otc.com crawler".*

Importing content from existing sources helps overcome the network effect. It solves the chicken and egg problem, making Iris a useful medium even with no initial user base.

## Tech stack
The [browser application](https://github.com/irislib/iris-messenger) runs on Preact. [Iris-electron](https://github.com/irislib/iris-electron) wraps it for desktop and adds peer sync over wifi (multicast).

[Iris-mobile](https://github.com/irislib/iris-mobile) is a React Native implementation (in development).

[Iris-lib](https://github.com/irislib/iris-lib) contains the core functionality of Iris that can be integrated to other applications. It is written in javascript for the browser and Node.js.

The task of data storage and networking is outsourced to [GUN](https://github.com/amark/gun), which manages the synchronization of data between different storages: RAM, localstorage, GUN websocket server, WebRTC peers, LAN multicast peers, IPFS (no adapter yet), S3 or others.

GUN enables subscription to data changes, so message feeds and identity profiles just update real-time without having to hit f5 or writing complex update logic.

[WEBTORRENT](https://github.com/webtorrent/webtorrent) is used to store file attachments and message backups.

## Iris relay

#### ROD - Rust Object Database (non-wasm rust port of gun)
You can add them from within the iris.to settings  menu. Sourcecode: https://github.com/mmalmi/rod

## Improving decentralisation
Currently the weak point of Iris's decentralisation is the list of initial peers, which could easily be blocked by governments or ISPs. By default, the application connects to IPFS default peers and a couple GUN peers. You can always add peers manually on the [settings page](https://irislib.github.io/#settings), but that is cumbersome for the average user.

[Iris-electron](https://github.com/irislib/iris-electron) and the upcoming mobile application can synchronize with peers on the same local area network. Bluetooth modules are not yet implemented, but will enable ad hoc networks of peers that need to meet each other only occasionally.

On the wide area network level, trusted contacts could exchange network addresses privately to avoid having them blocked or tracked. WebRTC's NAT traversal capabilities can enable direct connections between typical network endpoint users, but you still need a firewall-opened/port-forwarded rendez-vous node for them, and in some cases a relay node.

If you want to integrate Iris with your product or service, please check out [iris-lib](https://github.com/irislib/iris-lib) and create Github issues if needed

---

![The Greek goddess Iris](https://upload.wikimedia.org/wikipedia/commons/7/7b/Venus_supported_by_Iris%2C_complaining_to_Mars_1820.jpg)
*Iris (middle): Greek goddess of the rainbow and messenger of the gods. Iris of the eye is named after her, because of the many colours of the iris.*
