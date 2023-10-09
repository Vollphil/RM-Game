const DamagePotentialMessage = () => {
    let message ="";
    let randomNumber = Math.floor(Math.random() * 20) + 1;

    switch(randomNumber){
        case 1: message = "There is a fire in the Computer Stock"; break;
        case 2: message = "A fire started in the Computer Administration Building"; break;
        case 3: message = " Hazardous items currently in interim storage at the test facility are experiencing inadequate containment due to storage reduction" ;break;
        case 4: message = "The absence of a properly appointed and trained sprinkler warden is presently causing a critical vulnerability in our fire prevention and response system";break;
        case 5: message = "The absence of installed shelf sprinklers in our storage areas has precipitated a catastrophic fire, resulting in rampant flames consuming inventory and assets, endangering the lives and wellbeing of personnel, causing extensive structural damage.";break;
        case 6: message = "The non-enforcement of smoking bans within the facility has led to a perilous incident, wherein a discarded cigarette has ignited a fire, now endangering the lives of personnel";break;
        case 7: message = "The lack of prior training in firefighting for the emergency group is manifestly evident as a fire outbreak unfolds, leaving the team unprepared and unequipped to effectively respond";break;
        case 8: message = "The non-installation of electronic anti-burglary devices has culminated in a high-risk situation, where unauthorized intruders have gained unchallenged access to the facility, compromising the safety of assets and personnel";break;
        case 9: message = "The non-installation of additional hose boxes has significantly hampered the emergency response to a fire outbreak in the facility, causing a delay in initial firefighting efforts, allowing the fire to spread uncontrollably through critical areas";break;
        case 10: message = "The lack of a second fire water pump installation has resulted in a disastrous inability to combat a burgeoning fire effectively within the facility, critically limiting firefighting capabilities and allowing the fire to escalate uncontrollably";break;
        case 11: message = "The omission of a sprinkler system installation within the facility has precipitated a dire situation as an uncontained fire aggressively spreads, causing widespread damage to assets, imperiling the safety and wellbeing of individuals on-site, and thrusting the organization into a severe crisis involving extensive financial, operational, and reputational damage";break;
        case 12: message = "The non-installation of a fire protection wall between the production and warehouse areas has facilitated the rapid spread of a devastating fire across both critical zones, enabling the swift consumption of valuable assets, posing a grave and immediate danger to personnel";break;
        case 13: message ="The lack of a safety container for flammable liquids has resulted in a perilous spill and subsequent ignition, unleashing a violent fire that is rapidly traversing the facility, imposing immediate threats to life and safety";break;
        case 14: message= "The absence of equipotential bonding on the printing presses has sparked an electrical malfunction, generating a hazardous work environment by exposing personnel to the risk of electrical shock, potentially initiating a fire, disrupting operational continuity, and producing machinery damage, thereby propelling the facility into a critical state that involves tangible risks to safety";break;
        case 15: message = "The failure to store finished goods at least 15 cm above the floor level has led to extensive water damage to the inventory due to unforeseen flooding, rendering a significant portion of the stock unsellable, jeopardizing operational continuity, client fulfilment, and imposing substantial financial losses, while simultaneously risk compounding reputational damage and potential breach-of-contract implications as delivery commitments to customers are severely compromised.";break;
        case 16: message ="The absence of a warehouse sprinkler system has allowed an ignited fire to escalate uncontrollably, ravaging stored inventory, jeopardizing the safety of responding personnel, and initiating a chain reaction of severe financial loss";break;
        case 17: message= "The non-existence of an additional extinguishing water line connected to the public network has critically impaired firefighting efforts during a rampant fire, depriving responders of necessary water resources, and thereby allowing the fire to proliferate, inflicting catastrophic damage to assets and infrastructure, jeopardizing human life and safety, and instigating a cascade of financial, operational, and reputational consequences, along with potential legal and regulatory ramifications for insufficient emergency preparedness.";break;
        case 18: message = " The failure to implement an automatic shutdown for the hydraulic pumps has induced a critical scenario where a malfunction is causing unregulated operation, leading to potential equipment failure, risk of fire from overheating, and exposure to hydraulic fluid leaks, thereby endangering personnel safety, resulting in potential damage to associated machinery, and driving the system towards a severe operational, financial, and reputational crisis, coupled with likely legal implications arising from non-compliance with safety and operational standards.";break;
        case 19: message =" The neglect in modernizing the process controls of the furnaces has triggered a catastrophic failure, initiating uncontrolled furnace operations, exposing the facility to heightened risk of fire and explosion, placing personnel in perilous conditions, and laying the groundwork for severe operational disruption, substantial asset destruction, and precipitating extensive financial, reputational, and legal repercussions due to potential non-compliance with established safety and operational regulations.";break;
        case 20: message ="The lack of a maintenance and upkeep program for key machines has culminated in unforeseen mechanical failures, halting critical production processes, endangering operational continuity, jeopardizing employee safety, and inflicting substantial downtime losses, thereby destabilizing financial stability, potentially eroding client trust through inability to meet production deadlines, and risking reputational damage and possible legal implications related to workplace safety and customer contract breaches.";break;
        default: message = "Error";
    }
    return {message,randomNumber};
}
export  default DamagePotentialMessage;