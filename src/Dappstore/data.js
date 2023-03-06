/*

# Method to determine the browser language and eventually change the title to a more fitting local variant
# In the bottom array you insert the variable key2name instead of the fixed string "Report Deceptive Packaging", just like this:
{ key: `2`, title: key2name, content: 'blablabla'} 

let browserlang = navigator.languages;
let key2name = "";

if ( browserlang.includes("de")) {
key2name = "Mogelpackung melden";
} else {
key2name = "Report Deceptive Packaging";
}


# Empty template
{ key: `12`,
    title: 'T.E.A.C.H.E.R.',
    content: '',
    href: 'https://www.unrealengine.com/metahuman',
    target: '_blank',
    avatar: 'fuzzy-avatar/key112.jpg?auto=compress'  
  }


*/

export default
  [
    { key: `1`,
    title: 'DAPP/Iris.to - Social Networking Freedom',
    content: 'Here comes Iris. Iris is a social networking application that stores and indexes everything on the devices of its users and connects directly with peers who run the application - no corporate gatekeepers needed. Interface-wise, Iris is not too different from some existing social media. You can post texts, photos, videos, audio or other types of files into your feed. Funfact: This app is made by Martti Malmi. Without Martti Malmi, Bitcoin and cryptocurrencies may never have been developed. Malmi was the second developer behind Bitcoin after Satoshi Nakamoto, putting him at the forefront of the cryptocurrency movement.',
    href: 'https://iris.to',
    target: '_blank',
    avatar: 'fuzzy-avatar/key1.png?auto=compress',
    color: '#008450',    
    categorytext:'OPEN'},


    { key: `2`,
    title: "DAPP/REPORT DECEPTIVE PACKAGING (coming soon / help wanted)",
    content: 'Deceptive packaging is when a product\'s packaging misleads the customer on various fronts \(in terms of quantity, size, shapes, content etc.\) A classic example is the packaging that is only half filled, but the inside not visible. A disappointment when unpacking for the customer, and twice as much waste as necessary. \(unnecessary environmental pollution\)',
    href: 'https://app.code4socialgood.org/project/view/3396',
    target: '_blank',
    avatar: 'fuzzy-avatar/key2.jpg?auto=compress',
    color: '#efb700',
    categorytext:'DEVELOP'},
    
    { key: `3`,
    title: 'AAA like a polymath, even if you aren\'t one, until now! Evolve this digital twin of the real-world to evolve the real-world, and your self...',
    content: 'Are you a creative, developer, maker, activist, or non-profit/for-profit entrepreneur? Bring the real world into Unreal Engine 5 and then back into reality, whether it\'s through browser, mobile, desktop, VR or WebVR -apps, -games. Don\'t know how to code? No problem! You can code whole games and application without knowing to code at all. Have you already created a DApp? Submit it on https://github.com/METAVERSE-DAO-CLOUD-ATLAS/issues/ and use the green label "DAPP STORE" so that I can add it to our DApp store or make it part of our upcoming basic DApps (for now, manually).',
    href: 'https://cesium.com/platform/cesium-for-unreal/',
    target: '_blank',
    avatar: 'https://user-images.githubusercontent.com/67427045/210920326-292ee3e5-2262-4378-900c-430ab82aa388.png?auto=compress',
    color: '#ffffff',
    categorypic:'./fuzzy-category/globe.jpg'},



    { key: `4`,
    title: 'Want to see more stuff thats on the future roadmap?',
    content: 'A collection of ideas and concepts which will be implemented as dapps into METAVERSE-DAO | CLOUD ATLAS. Feel free to copy-cat and develop whatever you want, but dont forget to hit me with the results.',
    href: 'https://worldpeaceengine.pubpub.org/pub/futurefeatures/release/82',
    target: '_blank',
    avatar: 'fuzzy-avatar/key4.jpg?auto=compress',
    color: '#ffffff',
    categorypic:'./fuzzy-category/globe.jpg'},



    { key: `5`,
    title: 'WORLD PEACE ENGINE LABS',
    content: 'WORLD PEACE ENGINE LABS is a public, radical-transparent, open-source, non-profit organization and home of METAVERSE-DAO | CLOUD ATLAS',
    href: 'https://worldpeaceenginelabs.org',
    target: '_blank',
    avatar: 'fuzzy-avatar/key5.jpg?auto=compress',
    color: '#ffffff',
    categorypic:'./fuzzy-category/globe.jpg'},



    { key: `6`,
    title: 'DAPP/D-NEWS (geolocated) - News made by the people, for the people... (coming soon / help wanted)',
    content: '“We carry devices that know a lot about us and know exactly where we are all the time, so why not deliver news, information and content based on who we are, what we like and where we are?” “Just by geolocating the fires and the events in the Amazon, many people felt closer” Credits: Eduardo Acquarone',
    href: 'https://app.code4socialgood.org/project/view/3396',
    target: '_blank',
    avatar: 'fuzzy-avatar/key6.jpg?auto=compress',
    color: '#efb700',
    categorytext:'DEVELOP'},



    { key: `7`,
    title: 'LEARN/GUN JS - An open source cybersecurity protocol for syncing decentralized graph data',
    content: 'GUN is an ecosystem of tools that let you build community operated and encrypted applications - like an open-source, decentralized Firebase or a decentralized Dropbox. The METAVERSE-DAO | CLOUD ATLAS back-end and the back-ends of the upcoming dapps are based on so-called GUN-Relays. Except the domainname (cloudatlas.club), we already run everything else decentralized from GUN-Relays and over 200 CDNs world-wide.',
    href: 'https://gun.eco',
    target: '_blank',
    avatar: 'fuzzy-avatar/key7.jpg?auto=compress',
    color: '#c9c6d0',
    categorytext:'LEARN'},



  { key: `8`,
    title: 'DAPP/D-Tube - A full-featured video sharing website, decentralized',
    content: 'DTube is a community powered video sharing platform where users vote on videos to reward creators, curators, influencers and viewers in cryptocurrency.',
    href: 'https://d.tube/',
    target: '_blank',
    avatar: 'fuzzy-avatar/key8.jpg?auto=compress',
    color: '#008450',
    categorytext:'OPEN'  
  },



  { key: `9`,
    title: 'DAPP/LBRY - LBRY does to publishing, what Bitcoin did to money...',
    content: 'Meet LBRY, a content sharing and publishing platform that is decentralized and owned by its users.',
    href: 'https://odysee.com/',
    target: '_blank',
    avatar: 'fuzzy-avatar/key9.jpg?auto=compress',
    color: '#008450',
    categorytext:'OPEN'  
  },



  { key: `10`,
    title: 'DAPP/Flixxo - Original short-form series from all around the world',
    content: 'Flixxo is a platform for microseries from around the world. The distribution and monetization model in Flixxo is different from everything that exists.',
    href: 'https://www.flixxo.com/',
    target: '_blank',
    avatar: 'fuzzy-avatar/key10.jpg?auto=compress',
    color: '#008450',
    categorytext:'OPEN'  
  },



  { key: `11`,
    title: 'AAA like a polymath, even if you aren\'t one? The emerging story of our time... ',
    content: 'The planetary collective-computer envisioned in this science-fiction-like project is dependent on only two main factors: FIRST, the coding and design community adding dapps, web apps, and components (decentralized or sustainable or both); and SECOND, the World Peace Game! (coming/help wanted) STORY: The Cloud Atlas (this web app), which is a distorted dimension (click this dapp card to have a look), is informatically not connected and is distributed all over the internet. YOUR TASK: Photograph and describe places to fight the distortion and to create detail. Connect and render playful from Wikipedia articles (places, POIs, animals, plants, objects, materials, physics, chemistry, even psychology and history articles) to their right counterparts/locations on the globe, to the right objects, and to the right places in time (spatial timelapse), and visually verify that the contents of the articles match reality. Don\'t forget to keep the Wikipedia articles up to date and reliable! Let\'s add ChatGPT, in turn, the Virtual Encyclopedia will be able to describe itself on command (Oracular non-AI - QA - friendly AI-complete). Let\'s feed it with human rights, laws, sustainable development goals, medical records, STEM, HASS, and crafting, etc., and then let it compare our daily authorities\' behavior and decisions with these rules as a service on your mobile, right when it happens (government and police, your judge, your boss, your doctor, your teacher, your parents, even your friend...). There are no penalties, because it\'s only about clearing the question of who is right! The following decisions are up to the participants, but this time based on impartial truth (True Oracular AI - friendly AI-complete (both AI and user)). "Oh, it\'s a brain for both an AI and humanity, through which you can walk through! Woooow..." 😂 You\'ll get the idea... Decentralize! ✊',
    href: 'https://youtu.be/JneJa7aOk8I',
    target: '_blank',
    avatar: 'fuzzy-avatar/key11.jpg?auto=compress',
    color: '#ffffff',
    categorypic:'./fuzzy-category/globe.jpg'},



  { key: `12`,
    title: 'DAPP/T.E.A.C.H.E.R. - The school system is dead, long live the school system... (coming soon / help wanted)',
    content: 'In most countries, home schooling is allowed under certain conditions, generally speaking, if the teacher is qualified. What could be more obvious than a Digital Teacher that can be programmed to meet these qualifications? And why not complete 13 school years in just 5 years and then do some quantum physics for fun or become a 14 years old doctor? After all, lessons are fun now and the teacher answers all questions without  exception, and even brain-storms the kid\'s / student\'s ideas with them. ADVANTAGES: 1. The curriculum is accessible online to parents and the public, commentable, democratized. (survey, petition, crowd-funding) 2. Child-friendliness is now verifiable. 3. Social circles are not compulsively mixed, which brings problems and bullying (rich vs. poor children, national vs. foreign, strong vs. weak, loud vs. quiet, extrovert vs. introvert etc.) Such social mixing is very important for the natural development of the adolescent, but should be voluntary and with the possibility to leave the scene, which today\'s school does not provide. 4. And most importantly, their own social circle is strengthened. Kids don\'t have to go to school anymore, so they spend much more time with their family and friends. What a rich and beautiful experience for the maturing soul. 🥰  ULTIMATE FEATURE FOR THE KIDS: The teacher\'s look can be designed with Unreal\'s META-HUMAN by the kids themself. Their first contact with information-technology and AI, which they will develop from day one.',
    href: 'https://www.unrealengine.com/metahuman',
    target: '_blank',
    avatar: 'fuzzy-avatar/key12.jpg?auto=compress',
    color: '#efb700',
    categorytext:'DEVELOP'},



    
  { key: `13`,
  title: 'LEARN/CesiumJS - 3D geospatial visualization for the web (Want to try out every feature live on the globe? Hit this card!)',
  content: 'CesiumJS is an open source JavaScript library for creating world-class 3D globes and maps with the best possible performance, precision, visual quality, and ease of use. Developers across industries, from aerospace to smart cities to drones, use CesiumJS to create interactive web apps for sharing dynamic geospatial data. Built on open formats, CesiumJS is designed for robust interoperability and scaling for massive datasets.',
  href: 'https://sandcastle.cesium.com/',
  target: '_blank',
  avatar: 'fuzzy-avatar/key13.jpg?auto=compress',
  color: '#c9c6d0',
  categorytext:'LEARN'},



  { key: `14`,
  title: 'DAPP/D-HELPOUTS - Help when you need it over live video (coming soon / help wanted)',
  content: 'What if getting help for a computer glitch, a leaky pipe, or a homework problem was as easy as clicking a button? What if you could connect via real-time video to a music teacher or a yoga instructor from the comfort of your home? What if you could get someone knowledgeable to get you “unstuck” when you really need it? And why did Google not continue this project? Ours is pushing for the free sessions many individuals offered back then, but you are allowed to add a price tag too.',
  href: 'https://blog.google/products/google-plus/introducing-helpouts-help-when-you-need/',
  target: '_blank',
  avatar: 'fuzzy-avatar/key14.jpg?auto=compress',
  color: '#efb700',
  categorytext:'DEVELOP'},



  { key: `15`,
  title: 'DAPP/D-SPONTACTS (Spontaneous Contacts) - Spontacts is a social discovery application that connects various users for joint activities in a vicinity. (coming soon / help wanted)',
  content: 'On the leisure platform Spontacts you can discover numerous leisure activities in your area every day and join friendly people in your neighborhood. Whether you want to go out for a nice meal, drink a beer together after work, jog through the park together on the weekend, or spend a relaxing evening at the movies or a concert. All this and much more you can discover on Spontacts and experience with great leisure partners. Take part in meetings safely and easily or organize your own activities.',
  href: 'https://app.code4socialgood.org/project/view/3396',
  target: '_blank',
  avatar: 'fuzzy-avatar/key15.jpg?auto=compress',
  color: '#efb700',
  categorytext:'DEVELOP'},



  { key: `16`,
  title: 'DAPP/D-COUCHSURFING - Meet locals around the world and stay overnight with them! (coming soon / help wanted)',
  content: 'CouchSurfing is a hospitality exchange service by which users can request homestays or interact with other people who are interested in travel. Hosts are not allowed to charge for lodging.',
  href: 'https://app.code4socialgood.org/project/view/3396',
  target: '_blank',
  avatar: 'fuzzy-avatar/key16.jpg?auto=compress',
  color: '#efb700',
  categorytext:'DEVELOP'},



  { key: `17`,
  title: 'LEARN/JAMstack - "Jamstack" was originally cased as "JAMstack" where "JAM" stood for JavaScript, API & Markup',
  content: 'JavaScript: Dynamic functionalities are handled by JavaScript. There is no restriction on which framework or library you must use. APIs: Server side operations are abstracted into reusable APIs and accessed over HTTPS with JavaScript. These can be third party services or your custom function. MARKUP: Websites are served as static HTML files. These can be generated from source files, such as Markdown, using a Static Site Generator.',
  href: 'https://jamstack.wtf/',
  target: '_blank',
  avatar: 'fuzzy-avatar/key17.jpg?auto=compress',
  color: '#c9c6d0',
  categorytext:'LEARN'},



  { key: `18`,
  title: 'LEARN/Svelte - Forget frameworks, forget even the Svelte specifics',
  content: 'I actually "abuse" Svelte as a compiler only. I always start like npm install vite@latest, choose Svelte/TS, and use Typescript only (JAMstack) and NOTHING Svelte specific but the bindings 😍 The bundler rewards me with Vanilla JS at the end which can be dropped on edge(static but reactive), and npm run dev hot-reload does load in just milliseconds, even if the project gets bigger. The app itself is small and lightspeed.',
  href: 'https://github.com/worldpeaceenginelabs/METAVERSE-DAO_CLOUD-ATLAS#quickstart-for-coding-devs-jump-to-quickstart',
  target: '_blank',
  avatar: 'fuzzy-avatar/key18.jpg?auto=compress',
  color: '#c9c6d0',
  categorytext:'LEARN'},


  {
  key: `19`,
  title: 'LEARN/GUN JS Starterkit - Your entrance into decentralized back-ends',
  content: 'All the tools you need to run a local-first, decentralized graph database.',
  href: 'https://github.com/stars/worldpeaceenginelabs/lists/gunjs-starterkit',
  target: '_blank',
  avatar: 'fuzzy-avatar/key7.jpg?auto=compress',
  color: '#c9c6d0',
  categorytext:'LEARN'},

  { key: `20`,
  title: 'AAA - Access all areas...',
  content: 'World Peace Engine Labs has developed a Digital Earth called Cloud Atlas, which is essentially a decentralized version of Google Earth. Cloud Atlas can render UE5 content, games, and applications on browser, mobile, desktop and VR devices. Furthermore, it can render Wikipedia articles as 3D objects and assign each article an artificial identity. This allows the articles to communicate with each other and potentially identify conflicting information. Cloud Atlas also provides a social network where people from different social circles can collaborate to brainstorm solutions to local and global issues. They can then bring these solutions to life through in-person meetups, crowdfunding, and petitions. Additionally, they can livestream their efforts on MissionTV, a decentralized platform similar to YouTube or Twitch, but focused on showcasing good deeds. MissionTV includes built-in live-chat and donation options. Click on the card to read the conversation of Eliza (AI) and me talking about the whole concept.',
  avatar: 'fuzzy-avatar/key20.jpg?auto=compress',
  color: '#ffffff',
  categorypic:'./fuzzy-category/globe.jpg',
  href: 'https://docs.google.com/presentation/d/1ggUIgoxqwPpXG3FYWsmeZadG5xHifqq3HwUNmn1cvjo/edit?usp=sharing',
  target: '_blank'
}

  ];
