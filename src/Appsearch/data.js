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
{ key: `10`,
    title: 'flixxo',
    content: '',
    href: 'https://app.code4socialgood.org/project/view/3356',
    target: '_blank',
    avatar: 'fuzzy-avatar/key7.jpg?auto=compress'  
  }


*/

export default
  [
    { key: `1`,
    title: 'Iris.to - Social Networking Freedom',
    content: 'Here comes Iris. Iris is a social networking application that stores and indexes everything on the devices of its users and connects directly with peers who run the application - no corporate gatekeepers needed. Interface-wise, Iris is not too different from some existing social media. You can post texts, photos, videos, audio or other types of files into your feed.',
    href: 'https://iris.to',
    target: '_blank',
    avatar: 'fuzzy-avatar/key1.png?auto=compress'},



    { key: `2`,
    title: "REPORT DECEPTIVE PACKAGING (coming soon / help wanted)",
    content: 'Deceptive packaging is when a product\'s packaging misleads the customer on various fronts \(in terms of quantity, size, shapes, content etc.\) A classic example is the packaging that is only half filled, but the inside not visible. A disappointment when unpacking for the customer, and twice as much waste as necessary. \(unnecessary environmental pollution\)',
    href: 'https://app.code4socialgood.org/project/view/3356',
    target: '_blank',
    avatar: 'fuzzy-avatar/key2.jpg?auto=compress'
    },
    
    { key: `3`,
    title: 'AAA like a polymath, even if you aren\'t one, until now! Evolve this digital twin of the real-world to evolve the real-world, and your self...',
    content: 'Are you a creative, a developer, a maker, an activist, or a non-profit or for-profit entrepreneur? Bring the real world to Unreal Engine 5 and then back into the real world (Web and Desktop -App, -Game, -Software + VR, WebVR...) Not a coder? No problem! Hit the readme on Github (Quickstart for Unreal) Did you already create a dapp / webapp / component with Cesium for Unreal Engine, our Metaverse starterkit on Github, or just your favorite stack? Hit me with both on /METAVERSE-DAO-CLOUD-ATLAS/issues/ on Github and use the green label "DAPP STORE" so i can add your dapp / webapp / component to this dapp-store or make it even part of the upcoming basic dapps (for now manually)',
    href: 'https://cesium.com/platform/cesium-for-unreal/',
    target: '_blank',
    avatar: 'https://user-images.githubusercontent.com/67427045/210920326-292ee3e5-2262-4378-900c-430ab82aa388.png?auto=compress'},



    { key: `4`,
    title: 'Want to see more stuff thats on the future roadmap?',
    content: 'A collection of ideas and concepts which will be implemented as dapps into METAVERSE-DAO | CLOUD ATLAS. Feel free to copy-cat and develop whatever you want, but dont forget to hit me with the results.',
    href: 'https://worldpeaceengine.pubpub.org/pub/futurefeatures/release/82',
    target: '_blank',
    avatar: 'fuzzy-avatar/key4.jpg?auto=compress'
    },



    { key: `5`,
    title: 'WORLD PEACE ENGINE LABS',
    content: 'WORLD PEACE ENGINE LABS is a public, radical-transparent, open-source, non-profit organization and home of METAVERSE-DAO | CLOUD ATLAS',
    href: 'https://worldpeaceenginelabs.org',
    target: '_blank',
    avatar: 'fuzzy-avatar/key5.jpg?auto=compress'
    },



    { key: `6`,
    title: 'GEOLOCATED D-NEWS - News made by the people, for the people... (coming soon / help wanted)',
    content: '“We carry devices that know a lot about us and know exactly where we are all the time, so why not deliver news, information and content based on who we are, what we like and where we are?” “Just by geolocating the fires and the events in the Amazon, many people felt closer” Credits: Eduardo Acquarone',
    href: 'https://app.code4socialgood.org/project/view/3356',
    target: '_blank',
    avatar: 'fuzzy-avatar/key6.jpg?auto=compress'
    },



    { key: `7`,
    title: 'GUN JS - An open source cybersecurity protocol for syncing decentralized graph data',
    content: 'GUN is an ecosystem of tools that let you build community operated and encrypted applications - like an open-source, decentralized Firebase or a decentralized Dropbox. The METAVERSE-DAO | CLOUD ATLAS back-end and the back-ends of the upcoming dapps are based on so-called GUN-Relays. Except the domainname (cloudatlas.club), we already run everything else decentralized from GUN-Relays and over 200 CDNs world-wide.',
    href: 'https://gun.eco',
    target: '_blank',
    avatar: 'fuzzy-avatar/key7.jpg?auto=compress'  
  },



  { key: `8`,
    title: 'DTube',
    content: 'DTube is a community powered video sharing platform where users vote on videos to reward creators, curators, influencers and viewers in cryptocurrency.',
    href: 'https://d.tube/',
    target: '_blank',
    avatar: 'fuzzy-avatar/key8.jpg?auto=compress'  
  },



  { key: `9`,
    title: 'LBRY - LBRY does to publishing, what Bitcoin did to money...',
    content: 'Meet LBRY, a content sharing and publishing platform that is decentralized and owned by its users.',
    href: 'https://odysee.com/',
    target: '_blank',
    avatar: 'fuzzy-avatar/key9.jpg?auto=compress'  
  },



  { key: `10`,
    title: 'Flixxo',
    content: 'Original short-form series from all around the world.',
    href: 'https://www.flixxo.com/',
    target: '_blank',
    avatar: 'fuzzy-avatar/key10.jpg?auto=compress'  
  },



  { key: `11`,
    title: 'AAA like a polymath, even if you aren\'t one? The emerging story of our time... ',
    content: 'The science-fiction-like, planetary collective-computer this project is destined to be is dependent on only two main factors: First: The coding and design community adding dapps, web apps, and components (decentralized or sustainable or both), and second: The World Peace Game! (coming/help wanted) Story: The Cloud Atlas (this web app), which is a distorted dimension (click this dapp card to have a look), informatically not connected, somewhere distributed around the internet. Your task: Photograph places to fight the distortion and to create detail. Connect and render playful from Wikipedia articles (places, POIs, animals, plants, objects, materials, physics, chemistry, psychology articles and history) to its right counterparts / locations on the globe and in time (spatial timelapse), and check visually if the contents of the articles match reality. Don\'t forget to keep the Wikipedia articles up to date and reliable! Let us compile a language model from the Cloud Atlas then, or we just use ChatGPT, so the Virtual Encyclopedia will be able to describe itself on command (Oracle AI - pre-AGI - friendly AI-complete) Let\'s feed it with human rights, the laws and the sustainable development goals, medicinal records, etc., and then let it compare our daily authorities' behavior and decisions with these rules, as a service on your mobile, right when it happens (government and police, your judge, your boss, your doctor, your teacher, your parents, even your friend...). No penalties, because it's only about clearing the question of who is right! The following decisions are up to the participants but this time based on impartial truth (AGI - friendly AI-complete(both AI and user)) "Oh, it\'s a brain for both an AI and humanity, through which you can walk through! Woooow..." 😂 You\'ll get the idea... Decentralize! ✊',
    href: 'https://youtu.be/JneJa7aOk8I',
    target: '_blank',
    avatar: 'fuzzy-avatar/key11.jpg?auto=compress'  
  }
  ];