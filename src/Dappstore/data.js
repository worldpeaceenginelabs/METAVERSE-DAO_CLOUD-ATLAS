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
    content: 'Deceptive packaging occurs when a product\'s packaging misleads the customer in various ways, such as by providing incorrect information regarding quantity, size, shape, or content. A common example of deceptive packaging is when a product is packaged in a container that appears to be full, but is only half-filled and the empty space is not visible from the outside. This can be a disappointing experience for the customer upon opening the packaging, and does result in unnecessary waste and environmental pollution.)',
    href: 'https://app.code4socialgood.org/project/view/3396',
    target: '_blank',
    avatar: 'fuzzy-avatar/key2.jpg?auto=compress',
    color: '#efb700',
    categorytext:'DEVELOP'},
    
    { key: `3`,
    title: 'By refining and developing the digital twin of the real world, you can drive positive change in the physical world, ultimately leading to personal growth and development.',
    content: 'Are you a creative individual, a developer, maker, activist, or non-profit/for-profit entrepreneur? Take your ideas to the next level by bringing them to life in Unreal Engine 5 or Unity 3D, and then showcase them to the world through browser, mobile, desktop, VR, or WebVR applications and games. Even if you have no experience in coding, you can still create complete games and applications with ease. If you\'ve already developed a DApp, submit it on Github MC|CA /issues/ and use the "DAPP STORE" label to get it added to our DApp store or integrated into our upcoming basic DApps (for now, we\'re doing this manually). Let\'s work together to bring your vision to life and make it accessible to a global audience.',
    href: 'https://youtube.com/shorts/G0jctnM3HGA?feature=share',
    target: '_blank',
    avatar: 'fuzzy-avatar/key3.jpg?auto=compress',
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
    title: 'Cloud Atlas is a groundbreaking endeavor that enables individuals to harness the power of multitasking and polymathy - regardless of their innate abilities or current proficiency levels.',
    content: 'The project centers around the creation of a planetary collective-computer, which is dependent on only two main factors: the coding and design community adding games, apps and components, and the World Peace Game (coming/help wanted). The Cloud Atlas is a web app that serves as a digital twin of the real-world. A distorted, cartographic dimension that is yet informatically not connected well. Your task is to photograph and describe places to fight the distortion and to create detail. By connecting and rendering playful Wikipedia articles to their right counterparts, locations on the globe, and places in time, you can help verify that the contents of the articles match reality. By adding a combination of specialized AI and GPT, the Virtual Encyclopedia will be able to describe itself on command and can help compare daily authorities\' behavior and decisions with human rights, laws, sustainable development goals, medical records, STEM, HASS, and crafting, etc. This will allow you to see if these authorities are behaving in accordance with impartial truth, making it easy to determine who is right. With Cloud Atlas, you can become part of one shared open-source brain/connectome for both AI and humanity, allowing you to walk through it and experience a whole new level of decentralized and interconnected computing and collaboration. Decentralize and join us today!',
    href: 'https://youtu.be/FUGqzE6Je5c',
    target: '_blank',
    avatar: 'fuzzy-avatar/key11.jpg?auto=compress',
    color: '#ffffff',
    categorypic:'./fuzzy-category/globe.jpg'},



  { key: `12`,
    title: 'DAPP/T.E.A.C.H.E.R. - The school system is dead, long live the school system... (coming soon / help wanted)',
    content: 'In most countries, homeschooling is allowed under certain conditions, generally speaking, if the teacher is qualified. What could be more obvious than a digital teacher that can be programmed to meet these qualifications? Welcome T.E.A.C.H.E.R - an innovative educational system that revolutionizes the way we educate our children. With T.E.A.C.H.E.R, children can interact with AI according to their interests, and the learning speed is entirely up to the child. What\'s more, discussed topics are stored in their personal curriculum, and if there are any missing topics compared to the general curriculum, they are suggested more often to the child. Imagine your child completing 13 years of school in just 5 years, studying topics like quantum physics and rocket-science for fun, or even becoming a doctor at the age of 14. With T.E.A.C.H.E.R, that\'s not just a dream, it\'s a possibility! But that\'s not all - our system offers many advantages over traditional schooling. The curriculum is accessible online to parents and the public, making it more democratic, and allowing for feedback through surveys, petitions, and crowdfunding. It\'s also verifiable that the system is child-friendly, and social circles are not compulsively mixed, which can lead to problems and bullying. Children can strengthen their own social circles by spending more time with family and friends. We understand that social mixing is essential for the natural development of adolescents, but we believe it should be voluntary with the option to leave the scene, which is not always possible in traditional schools. And the ultimate feature for kids in our system is that they can design the teacher\'s look with Unreal\'s META-HUMAN, which will give them their first contact with information technology and AI that they can develop from day one. In summary, T.E.A.C.H.E.R offers a more personalized and efficient approach to education, allowing children to explore their interests and reach their full potential. With our system, your child decides topics and speed. Join us in revolutionizing education for a better future.',
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
  content: 'What\'s stopping you from creating right now? Your creations will never be limited to just one environment again. Hit this card...',
  avatar: 'fuzzy-avatar/key20.jpg?auto=compress',
  color: '#ffffff',
  categorypic:'./fuzzy-category/globe.jpg',
  href: 'https://github.com/worldpeaceenginelabs/METAVERSE-DAO_CLOUD-ATLAS#readme',
  target: '_blank'
}

  ];
