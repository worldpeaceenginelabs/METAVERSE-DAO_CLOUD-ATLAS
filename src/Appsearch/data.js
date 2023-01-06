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
    title: 'Iris.to',
    content: 'Social Networking Freedom',
    href: 'https://iris.to',
    target: '_blank',
    avatar: 'fuzzy-avatar/3f213087732422818ea1f7bfc2345c5a.png?auto=compress'},



    { key: `2`,
    title: "Report Deceptive Packaging (coming soon)",
    content: 'Deceptive packaging is when a product\'s packaging misleads the customer on various fronts \(in terms of quantity, size, shapes, content etc.\) A classic example is the packaging that is only half filled, the inside not visible, and filled with air. A disappointment when unpacking for the customer, and twice as much waste as necessary. \(unnecessary environmental pollution\)' },
    
    
    
    { key: `3`,
    title: 'Evolve this digital twin of the real-world to evolve the real-world',
    content: 'Are you a creative, a developer, a maker, or an entrepreneur? Bring the real world to Unreal Engine 5 and then back into the real world (Web and Desktop -App, -Game, -Software + VR, WebVR...)',
    href: 'https://cesium.com/platform/cesium-for-unreal/',
    target: '_blank',avatar: 'https://user-images.githubusercontent.com/67427045/210920326-292ee3e5-2262-4378-900c-430ab82aa388.png?auto=compress'}
  ];