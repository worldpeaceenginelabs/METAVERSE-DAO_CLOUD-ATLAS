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
    title: "Report Deceptive Packaging (coming soon)",
    content: 'Deceptive packaging is when a product\'s packaging misleads the customer on various fronts \(in terms of quantity, size, shapes, content etc.\) A classic example is the packaging that is only half filled, but the inside not visible. A disappointment when unpacking for the customer, and twice as much waste as necessary. \(unnecessary environmental pollution\)',
    target: '_blank',
    avatar: 'fuzzy-avatar/key2.jpg?auto=compress'
    },
    
    { key: `3`,
    title: 'Evolve this digital twin of the real-world to evolve the real-world',
    content: 'Are you a creative, a developer, a maker, an activist, or a non-profit or for-profit entrepreneur? Bring the real world to Unreal Engine 5 and then back into the real world (Web and Desktop -App, -Game, -Software + VR, WebVR...) Did you already create a dapp / webapp / component with Cesium for Unreal Engine, our Metaverse starterkit on Github, or any other stack (preferably JAMstack)? Hit me with both on https://github.com/worldpeaceenginelabs/METAVERSE-DAO-CLOUD-ATLAS/issues/ and use the green label "DAPP STORE" so i can add your dapp / webapp / component to this dapp-store or make it even part of the basic dapps (for now manually)',
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
    title: 'GEOLOCATED NEWS',
    content: '“We carry devices that know a lot about us and know exactly where we are all the time, so why not deliver news, information and content based on who we are, what we like and where we are?” “Just by geolocating the fires and the events in the Amazon, many people felt closer” Credits: Eduardo Acquarone',
    avatar: 'fuzzy-avatar/key6.jpg?auto=compress'
    }
  ];