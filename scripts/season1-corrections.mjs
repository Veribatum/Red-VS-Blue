// Condensed, newly worded dialogue about the original scenes. Not episode transcripts.
// Episode-specific references and the limits of this adaptation are in docs/STORY-COVERAGE.md.
export function correctSeasonOne(episodes){
 const replace=(ep,stage,lines)=>{episodes[ep-1].stages[stage].dialogue=lines;};
 replace(1,0,[['SIMMONS','You ever wonder why we’re here?'],['GRIF','You mean whether life is an accident, or whether God has some sort of plan? I have spent nights thinking about that.'],['SIMMONS','I meant our assignment. Why put us in this canyon?'],['GRIF','Right. The canyon. Forget the other thing.'],['SIMMONS','We guard this base because the Blues have a base. They guard theirs because we have ours.'],['GRIF','So if we win, all we get is an empty canyon.']]);
 replace(1,1,[['TUCKER','What are those two Reds doing now?'],['CHURCH','Still talking. You keep asking me the same question.'],['TUCKER','You have the sniper scope. I cannot see what you can see.'],['CHURCH','Then stop asking for a new report every few seconds.'],['SARGE','Grif! Simmons! Get down here in front of the base.']]);
 replace(2,0,[['SARGE','Lopez and I have a new reconnaissance vehicle to show you. Command calls it a Warthog.'],['GRIF','Those hooks look more like a big cat to me. I would call it a puma.'],['SARGE','We are keeping the name Warthog. Command is also sending us a new recruit.'],['SIMMONS','The recruit will need to learn the chain of command.']]);
 replace(2,1,[['NARRATOR','Driving practice is a gameplay addition. In the episode, the argument over the vehicle continues.']]);
 replace(2,2,[['TUCKER','The Reds have a new vehicle. What is it supposed to look like?'],['CHURCH','Some kind of cat. I cannot think of the name.'],['TUCKER','You mean a puma?'],['CHURCH','That is the one.']]);
 replace(3,0,[['DONUT','Private Donut reporting. I just arrived from basic training.'],['GRIF','I am Grif. The maroon one is Simmons.'],['SIMMONS','Remember that Sarge is in charge here.'],['GRIF','First assignment: find some elbow grease and headlight fluid. Try the store farther down the canyon.'],['DONUT','Understood. I will go get the supplies.']]);
 replace(3,1,[['CABOOSE','I am the new Blue recruit. Is this where I report?'],['CHURCH','Yes. And Command delivered a tank with you.'],['TUCKER','We finally get a tank and nobody here knows how to operate it.'],['CHURCH','Apparently sending the equipment and training someone to use it are separate ideas.']]);
 // The errand starts in episode 3. Episode 4 opens with the girlfriend misunderstanding.
 const flagDuty=episodes[3].stages[0];flagDuty.title='Hear Church assign the rookie to guard the flag';flagDuty.point={x:2436,y:540};flagDuty.cast=[{id:'CHURCH',x:2336,y:540,pose:'argue'},{id:'TUCKER',x:2436,y:540,pose:'argue'},{id:'CABOOSE',x:2536,y:540,pose:'wave'}];
 replace(4,0,[['CHURCH','I have a girlfriend back home.'],['TUCKER','A girlfriend? You never mentioned that.'],['CABOOSE','Is she the cow you were talking about?'],['CHURCH','Go inside and guard our flag. A General will be coming for an inspection.'],['TUCKER','Stay with the flag until the General arrives.']]);
 replace(4,1,[['NARRATOR','Donut is looking for the imaginary supplies Grif requested. He mistakes Blue Base for a shop.']]);
 replace(4,2,[['DONUT','I am looking for headlight fluid and elbow grease. Is this the store?'],['CABOOSE','Are you the General? I was told to expect an inspection.'],['DONUT','I am just a private. What have you got in stock?'],['CABOOSE','There is only the flag.'],['DONUT','Then I will take that. I do not want to return with nothing.']]);
 replace(4,3,[['NARRATOR','Caboose lets Donut take the flag because he thinks the visitor is the General.']]);
 replace(5,0,[['CABOOSE','The General came by and took the flag.'],['CHURCH','That was a Red! You let him walk off with our flag?'],['TUCKER','He is still out in the canyon. We can catch him.'],['SIMMONS','Grif, the Blues are shooting at our new recruit. Get the Warthog.']]);
 replace(5,1,[['DONUT','I do not know why they are firing at me. I was only trying to get the supplies.']]);
 replace(6,0,[['CHURCH','Stop! Give our flag back.'],['DONUT','I am not a General. I am a private.'],['TUCKER','What if the teleporter sent us into the past? Maybe this is Sarge before he became a sergeant.'],['CHURCH','The teleporter did not turn the enemy into a time-travel problem.']]);
 replace(6,1,[['SIMMONS','The Blues are behind that rock. Keep the chaingun on their position.'],['GRIF','I am driving. You handle the gun.']]);
 replace(6,2,[['DONUT','I found a flag instead of the supplies.'],['SIMMONS','That belongs to the Blue Team.'],['GRIF','The rookie accidentally completed a real mission.']]);
 replace(7,0,[['CHURCH','Their chaingun has us pinned.'],['TUCKER','Caboose is heading for our tank.'],['CHURCH','He has not been trained to drive it.']]);
 replace(7,1,[['SHEILA','Vehicle training is beginning. Follow the operating instructions.'],['CABOOSE','There are six pedals, but only four directions to drive. I do not understand the extra pedals.'],['SHEILA','The tutorial will explain the controls.'],['GRIF','Simmons, leave the Warthog here. We can try to get around them on foot.']]);
 replace(7,2,[['NARRATOR','This target drill teaches the game controls. It is an added activity, not a scene from the episode.']]);
 replace(8,0,[['GRIF','The tank is right behind us! Get away from the Warthog!'],['SIMMONS','Keep running!']]);
 replace(8,1,[['CHURCH','Caboose, the tank is firing automatically. Turn that mode off!'],['SHEILA','Automatic targeting remains active.'],['TUCKER','The shot hit Church!'],['CABOOSE','I was trying to save him.']]);
 replace(9,0,[['SARGE','This is Sarge. What is happening down there?'],['SIMMONS','The Blues have brought their tank into the fight.'],['SARGE','I am bringing air support. Stay clear of it.']]);
 replace(9,1,[['SARGE','Air support has hit the tank.'],['CABOOSE','Sheila is not moving, and I cannot get out.'],['GRIF','At least the tank has stopped chasing us.']]);
 // Command call, apparent ghost, warning, then arrival. Do not reveal the relationship early.
 const ten=episodes[9].stages;const [ghost,vic,arrival,warning]=ten;episodes[9].stages=[vic,ghost,warning,arrival];
 replace(10,0,[['TUCKER','Command, Church is dead. We need reinforcements.'],['VIC','Your reinforcement will be a freelancer called Tex.'],['TUCKER','A mercenary? All right. Send the freelancer.']]);
 replace(10,1,[['TUCKER','Church? You were killed by the tank.'],['CHURCH','I know. I seem to have come back without my body.'],['CABOOSE','I did not mean to shoot you.'],['CHURCH','We will discuss that after the other problem.']]);
 replace(10,2,[['CHURCH','Do not trust Tex just because Command sent a reinforcement.'],['TUCKER','Why?'],['CHURCH','I fought alongside Tex at Sidewinder. My squad was wiped out.'],['TUCKER','And nobody thought to mention that before I called Command?']]);
 replace(10,3,[['TEX','I am the freelancer Command sent. Where are the Reds?'],['TUCKER','Their base is across the canyon.'],['CHURCH','Tucker, keep the rookie out of the way.']]);
 replace(11,0,[['SARGE','Grif, explain what happened to our Warthog.'],['GRIF','The tank shot it while Simmons and I were getting away.'],['SIMMONS','Lopez is repairing the damage.'],['SARGE','Then let Lopez work. We still have an enemy base to deal with.']]);
 replace(11,1,[['NARRATOR','Tex crosses to Red Base to retrieve the Blue flag. The Reds are unprepared for the attack.']]);
 replace(11,2,[['DONUT','There is a grenade stuck to my head!'],['SIMMONS','Get away from him!'],['NARRATOR','The grenade injures Donut. Tex also puts Grif and Simmons out of the fight.']]);
 replace(12,0,[['NARRATOR','Tex retrieves the Blue flag inside Red Base. Sarge and Lopez are waiting.']]);
 replace(12,1,[['SARGE','Lopez, we have the freelancer. Keep the prisoner here.'],['TEX','You caught me while I was retrieving the flag.'],['SARGE','And now you are staying at Red Base.']]);
 replace(12,2,[['SIMMONS','Donut needs medical treatment at headquarters.'],['SARGE','Prepare him for the airlift.'],['GRIF','Command is taking the rookie out of the canyon.']]);
 replace(12,3,[['CHURCH','Tex is my former girlfriend.'],['TUCKER','That is a fairly important detail to leave out.'],['CHURCH','It does not change the fact that the Reds have captured her.']]);
 replace(13,0,[['CHURCH','Tex has an aggressive AI in her armor. I need to get her out of Red Base.'],['TUCKER','So what is the rescue plan?'],['CHURCH','You and Caboose create a distraction. I can get inside without using the door.'],['CABOOSE','We can pretend to attack them.']]);
 replace(13,1,[['SIMMONS','Our assignment is to guard the prisoner.'],['GRIF','Then guard her. I am standing right here.'],['TEX','You two have been talking instead of paying attention.']]);
 replace(14,0,[['CHURCH','Go through the teleporter. It will darken your armor, and the Reds may mistake you for more freelancers.'],['TUCKER','We distract them while you rescue Tex.'],['CABOOSE','This time I will help Church properly.']]);
 replace(14,1,[['CHURCH','If I enter Sarge, I can use his body to give the order to release Tex.']]);
 replace(14,2,[['CHURCH','Simmons, let the prisoner go. That is an order.'],['SIMMONS','If you say so, sir.'],['CABOOSE','Sarge is right there. I can shoot him to make up for shooting Church.'],['TUCKER','Caboose, Church is inside him!']]);
 replace(15,0,[['SARGE','Where are we? Why is a Blue here?'],['CHURCH','Apparently we are both dead. Your team is still down there.'],['SARGE','I can hear Grif. That does not make this feel like a reward.']]);
 replace(15,1,[['NARRATOR','Grif attempts CPR while the others try to revive Sarge.']]);
 replace(15,2,[['SIMMONS','Grif brought you back, sir. He used CPR.'],['SARGE','CPR? After I was shot in the head?'],['GRIF','You are breathing again, are you not?']]);
 episodes[14].player='CHURCH';episodes[14].stages[1].player='GRIF';
 replace(16,0,[['DONUT','I am back from headquarters. They gave me replacement armor.'],['GRIF','Your armor is pink.'],['DONUT','It is a light shade of red. I also brought the speech unit for Lopez.']]);
 replace(16,1,[['NARRATOR','Donut brought a speech unit so Lopez can finally talk.']]);
 replace(16,2,[['SIMMONS','Ground yourself before installing that card, sir. Static can damage it.'],['SARGE','I know how to install a speech unit.'],['LOPEZ','La tarjeta está dañada. Solo puedo hablar español.'],['GRIF','None of us can understand him.']]);
 replace(17,0,[['TUCKER','We rescued you. The least you can do is help fix our tank.'],['TEX','I will repair Sheila. Keep the rookie away from the controls.']]);
 replace(17,1,[['CHURCH','My body is still on the ridge. Nobody buried it?'],['TUCKER','We had the freelancer and the tank to worry about.'],['CHURCH','That does not explain leaving my body out here.']]);
 replace(17,2,[['LOPEZ','Estoy intentando explicar lo que pasó.'],['SARGE','Lopez, speak so the rest of us can understand.'],['SIMMONS','The damaged card is the problem, sir.']]);
 replace(18,0,[['CHURCH','If Tex destroys the Reds, she will leave. I need her to stay long enough to remove the AI.'],['TUCKER','You are going to warn the enemy about our own freelancer?'],['CHURCH','That is the only way to keep her here.']]);
 replace(18,1,[['NARRATOR','Church crosses toward Red Base to warn the Reds before Tex attacks.']]);
 replace(18,2,[['CABOOSE','The Reds have someone in pink armor. Church went over there to warn them.'],['TEX','Church is warning the Reds about me?'],['TUCKER','Caboose, you were not meant to tell her that.']]);
 replace(19,0,[['LOPEZ','Tex viene con el tanque. Va a atacar la base.'],['SARGE','Lopez, I cannot understand what you are saying.'],['NARRATOR','Church has entered Lopez, but the robot can still only speak Spanish. The warning fails.']]);
 replace(19,1,[['NARRATOR','Tex and Sheila begin their attack on Red Base.']]);
 replace(19,2,[['DONUT','Tex put a grenade on my head. This one is going back across the canyon.']]);
 replace(19,3,[['NARRATOR','Donut’s grenade disables Sheila. Church reaches the dying Tex while still inside Lopez.'],['TEX','Church, the AI is gone. Thank you.'],['LOPEZ','Tex, no te vayas.']]);
 replace(19,4,[['NARRATOR','Nearby, Caboose answers in an unfamiliar, menacing voice.'],['CABOOSE','My name is O’Malley.']]);
 // Lopez is introduced with the delivery, long before his speech-unit installation.
 for(const e of episodes)if(e.id>=2&&!e.roster.includes('LOPEZ'))e.roster.push('LOPEZ');
 episodes[1].stages[0].cast.push({id:'LOPEZ',x:1104,y:540,pose:'work'});
 episodes[2].tank=true;
 for(const e of episodes){e.dialogueStyle='adapted';for(const s of e.stages)s.dialogueStyle='adapted';}
}
