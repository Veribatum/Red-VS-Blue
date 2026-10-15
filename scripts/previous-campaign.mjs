// Story order follows the original 2003 Season 1, not the later streaming compilation numbering.
// Story references: https://rvb.fandom.com/wiki/Red_vs._Blue:_Season_1
// https://www.tvguide.com/tvshows/red-vs-blue/episodes-season-1/1000516876/
// All dialogue here is newly written parody; recordings and episode scripts are not included.
const at=(who,x,z,pose='argue')=>({who,at:[x,z],pose});
const scene=(title,point,cast,dialogue,events=[])=>({kind:'scene',title,point,cast,dialogue,events});
const collect=(title,items)=>({kind:'collect',title,items:items.map(([n,x,z])=>[n,0x78d9ff,x,z])});
const walk=(who,title,path,dialogue=[])=>({kind:'follow',who,title,path,dialogue});
const red=[at('SARGE',-18,24,'command'),at('GRIF',-13,26,'sleep'),at('SIMMONS',-17,27)];
const blue=[at('CHURCH',0,-39),at('TUCKER',6,-39)];
const s=(title,side,stages,report,extra={})=>({title,side,stages,report,brief:[],outro:[],theme:'canyon',sky:0x8dabb7,fog:0xb7ab93,layout:'gulch',canon:true,items:[],enemies:0,...extra});
export const missions=[
 s('THE POINTLESS STANDOFF','red',[
 scene('Listen to Grif and Simmons at red base',[-16,25],[at('GRIF',-14,25,'sleep'),at('SIMMONS',-18,25)],[['SIMMONS','Two bases, two teams, one canyon. There must be a strategic purpose.'],['GRIF','The canyon has a purpose. It keeps us far away from things that matter.'],['SIMMONS','You could take the assignment seriously.'],['GRIF','I am taking my confusion very seriously.']]),
 scene('See the same standoff from blue base',[0,-36],blue,[['TUCKER','The Reds are talking again.'],['CHURCH','That is their most successful operation so far.'],['TUCKER','What do you think they are planning?'],['CHURCH','Probably how to turn standing around into a promotion.']])
 ],'Original episode 1: the rivalry starts with boredom, not a conspiracy.'),
 s('RED’S NEW VEHICLE','red',[
 scene('Inspect the Warthog delivery',[8,25],[at('SARGE',4,25,'command'),at('GRIF',11,25),at('SIMMONS',6,27)],[['SARGE','Command sent us a Warthog. Finally, a way to bring superior firepower to our lack of purpose.'],['GRIF','I would have called it a puma.'],['SIMMONS','The name is on the paperwork.'],['GRIF','That does not make the paperwork a zoologist.']]),
 {kind:'drive',title:'Test the delivery without changing the balance of power',points:[[0,10],[-20,-12],[8,23]],dialogue:[['SARGE','Grif, drive. Simmons, supervise. Everyone else, be impressed.']]},
 scene('Observe blue team’s reaction',[0,-36],blue,[['TUCKER','They got a vehicle.'],['CHURCH','We got another day in the canyon. Great exchange rate.']])
 ],'Original episode 2: the Reds get a Warthog, and its name becomes an argument.'),
 s('TWO NEW RECRUITS','red',[
 scene('Meet Donut at red base',[-16,25],[...red,at('DONUT',-10,23,'wave')],[['DONUT','Reporting for duty! Where do I put my things?'],['GRIF','Anywhere that makes you harder to assign work to.'],['SIMMONS','Do not treat that as official advice.'],['GRIF','It has been field-tested.']]),
 scene('Meet Caboose at blue base',[0,-36],[...blue,at('CABOOSE',-5,-39,'wave')],[['CABOOSE','I am ready to help!'],['CHURCH','That is exactly what worries me.'],['TUCKER','Start with not touching anything important.'],['CABOOSE','I can touch unimportant things very carefully.']])
 ],'Original episode 3: Donut and Caboose join opposite teams.'),
 s('THE WRONG STORE','red',[
 scene('Hear the errand Grif gives Donut',[-16,25],[at('GRIF',-14,25),at('SIMMONS',-18,25),at('DONUT',-11,23,'wave')],[['GRIF','We need some supplies. The store is down the canyon.'],['SIMMONS','This is going to become paperwork.'],['DONUT','Great! I will be back before anyone misses me.'],['GRIF','Take your time. We are very resilient.']]),
 walk('DONUT','Accompany Donut to the building he thinks is the store',[[0,12],[0,-10],[0,-36]]),
 scene('Watch Caboose misunderstand the visitor',[0,-36],[at('DONUT',0,-37,'wave'),at('CABOOSE',-4,-39,'wave')],[['DONUT','Is this the supply counter?'],['CABOOSE','Church told me to guard the flag. It is the most important thing here.'],['DONUT','Then that looks like the item I need.'],['CABOOSE','You seem very sure. That is more sure than my instructions.']]),
 collect('Help Donut pick up what he mistakes for the supplies',[['FLAG',0,-38]])
 ],'Original episode 4: Donut mistakes blue base for the store and leaves with its flag.'),
 s('A FLAG IN THE OPEN','red',[
 scene('Find out what the Blues are chasing',[0,-18],[...blue,at('DONUT',0,-13,'wave')],[['CHURCH','Our flag is walking away with a Red!'],['TUCKER','You might want to give Caboose more specific instructions.'],['CHURCH','That would require instructions for interpreting the instructions.']]),
 {kind:'escape',who:'DONUT',start:[0,-15],title:'Stay with the lost Donut as the Blues try to recover their flag',path:[[0,-5],[0,12],[0,23]],dialogue:[['DONUT','I think the store has a very aggressive returns policy.']]}
 ],'Original episode 5: the Blues pursue the flag while Donut gets lost.'),
 s('TELEPORTER VERSUS WARTHOG','red',[
 scene('Watch the Blues use their teleporter',[0,-19],[at('CHURCH',-5,-21),at('TUCKER',5,-21),at('DONUT',0,-14,'wave')],[['CHURCH','Give us the flag.'],['DONUT','Should I get a receipt first?'],['TUCKER','The Reds brought their new vehicle. This discussion is about to get loud.']],[[1,'teleportBlues']]),
 {kind:'suppress',title:'Help Grif and Simmons pin Church and Tucker with Warthog fire',point:[0,-10],targets:['CHURCH','TUCKER'],dialogue:[['SIMMONS','Keep them behind cover! We are rescuing our rookie.'],['GRIF','I was hoping the store had a delivery option.']]},
 scene('Let Donut return to red cover',[0,20],[...red,at('DONUT',0,22,'wave')],[['DONUT','I brought the supplies!'],['SARGE','That is the enemy flag.'],['GRIF','Best shopping trip anyone here has ever taken.']])
 ],'Original episode 6: teleportation meets Warthog fire.'),
 s('CABOOSE MEETS SHEILA','blue',[
 scene('Join the pinned Blue team',[0,-22],[at('CHURCH',-4,-24),at('TUCKER',5,-24)],[['CHURCH','We are losing a fight we were not even interested in.'],['TUCKER','Caboose is heading for the tank.'],['CHURCH','That sentence should come with a siren.']]),
 scene('Watch Caboose begin Sheila’s tutorial',[0,-26],[at('CABOOSE',3,-28,'wave'),at('CHURCH',-5,-26)],[['SHEILA','Welcome to the vehicle training system.'],['CABOOSE','I would like to rescue my friends.'],['SHEILA','Please begin with the safety instructions.'],['CABOOSE','I am very safe when nobody is in front of me.']],[[2,'mountCaboose']])
 ],'Original episode 7: Caboose enters Sheila to rescue Church and Tucker.',{tank:true}),
 s('THE FRIENDLY-FIRE DISASTER','red',[
 {kind:'survive',title:'Get through Sheila’s fire without becoming another casualty',point:[0,-9],seconds:16,foes:[],tankFire:true,dialogue:[['GRIF','The tank is moving! That is my signal to stop being here.'],['SIMMONS','Move back toward the base!']]},
 scene('Witness the shot that kills Church',[0,-14],[at('CHURCH',-4,-23),at('TUCKER',6,-22),at('CABOOSE',3,-28,'wave')],[['CHURCH','Caboose, watch where you point that thing!'],['CABOOSE','I am helping very hard.'],['TUCKER','Church!'],['CABOOSE','Was that the wrong helping?']],[[3,'churchKilled']])
 ],'Original episode 8: Caboose accidentally kills Church with tank fire.',{tank:true}),
 s('THE AFTERMATH','red',[
 {kind:'survive',title:'Fall back to red cover while Sarge brings support',point:[0,15],seconds:15,foes:['TUCKER'],dialogue:[['SIMMONS','Hold on until Sarge gets here!'],['GRIF','Can we hold on somewhere less visible?']]},
 scene('Watch Sarge’s counterattack and Caboose’s predicament',[0,17],[at('SARGE',-10,20,'command'),at('GRIF',-5,22),at('SIMMONS',5,22),at('CABOOSE',3,-28,'wave')],[['SARGE','Support has arrived!'],['CABOOSE','Sheila? I think the leaving part is broken.'],['GRIF','Good. Let the tank handle the rookie orientation.']],[[2,'airstrike']])
 ],'Original episode 9: Sarge intervenes; Caboose is stuck in Sheila.',{tank:true,churchDead:true}),
 s('THE GHOST AND THE REINFORCEMENT','blue',[
 scene('Meet Church’s apparent ghost',[0,-36],blue,[['TUCKER','Church? You are supposed to be dead.'],['CHURCH','I noticed. Apparently even dying does not get me transferred.'],['CABOOSE','I knew my friend would come back.'],['CHURCH','You are doing a terrible job of keeping him here.']]),
 scene('Hear the reinforcement call and meet Tex',[0,-36],[...blue,at('CABOOSE',-5,-39,'wave'),at('TEX',8,-37,'command')],[['TUCKER','Command sent a freelancer.'],['TEX','Where is the problem?'],['CHURCH','It is roughly the entire canyon.'],['TEX','Then stand clear.']])
 ],'Original episode 10: Church returns as a ghost and Tex arrives.',{churchGhost:true}),
 s('TEX’S RAID','red',[
 scene('See Lopez repairing the damaged Warthog',[8,24],[at('LOPEZ',7,24,'work'),at('SARGE',4,25,'command'),at('GRIF',11,25),at('SIMMONS',5,28)],[['SARGE','Grif, why is our vehicle broken?'],['GRIF','Because we took it to a war.'],['SIMMONS','Lopez is repairing it.'],['GRIF','Send him the blame too. He looks like he can carry it.']]),
 {kind:'survive',title:'Stay alive during Tex’s assault on red base',point:[0,20],seconds:18,foes:['TEX'],dialogue:[['SIMMONS','Black armor, incoming!'],['GRIF','The freelancer has found the problem. We are the problem.']]},
 scene('Witness the grenade attack on Donut',[-15,24],[...red,at('DONUT',-10,23,'wave'),at('TEX',-8,19,'command')],[['DONUT','Something is attached to my helmet!'],['SIMMONS','Get clear!'],['GRIF','I hate the supply situation here.']],[[2,'donutInjured'],[4,'redsKnockedOut']])
 ],'Original episode 11: Tex raids red base and injures Donut.',{churchGhost:true}),
 s('A CAPTURE AND AN EVACUATION','red',[
 scene('Watch Sarge and Lopez trap Tex',[-16,25],[at('SARGE',-18,24,'command'),at('LOPEZ',-15,22,'work'),at('TEX',-12,24,'command'),at('DONUT',-9,25)],[['SARGE','Freelancer, welcome to red hospitality.'],['TEX','You call this a trap?'],['SARGE','I call it the one plan today that worked.']],[[2,'texCaptured']]),
 scene('Help the Reds prepare Donut’s evacuation',[-13,25],[at('SIMMONS',-14,26,'work'),at('GRIF',-9,26),at('DONUT',-11,24)],[['SIMMONS','Command is taking Donut out for treatment.'],['GRIF','That is one way to leave the canyon.'],['SARGE','Nobody else is volunteering for the same method!']],[[3,'evacuateDonut']]),
 scene('Listen to Church identify Tex',[0,-36],blue,[['CHURCH','That freelancer is Tex. I know her.'],['TUCKER','You could have opened with that before she dismantled red team.'],['CHURCH','I was busy being a dead person.']])
 ],'Original episode 12: Tex is captured and Donut is evacuated.',{churchGhost:true}),
 s('THE RESCUE PLAN','blue',[
 scene('Hear why Church wants Tex rescued',[0,-36],[...blue,at('CABOOSE',-5,-39,'wave')],[['CHURCH','Tex was my girlfriend. Her armor also has an AI making her worse.'],['TUCKER','Those are two very different problems.'],['CHURCH','They have become one extremely difficult problem.'],['CABOOSE','We can rescue the girlfriend and then ask the armor to be nicer.']]),
 scene('Inspect the Reds guarding their prisoner',[-16,25],[at('GRIF',-13,25,'sleep'),at('SIMMONS',-18,25),at('TEX',-15,23)],[['SIMMONS','Do not take your eyes off the prisoner.'],['GRIF','Is that a full-time position?'],['TEX','You will find out when you blink.']])
 ],'Original episode 13: Church plans Tex’s rescue while Grif and Simmons guard her.',{churchGhost:true,texCaptured:true,donutAbsent:true}),
 s('A BAD DISGUISE AND A POSSESSION','blue',[
 scene('Use the Blues’ teleporter disguise',[0,-36],[at('TUCKER',5,-39),at('CABOOSE',-5,-39,'wave'),at('CHURCH',0,-39)],[['CHURCH','The teleporter will make your armor black. Make the Reds think there are more freelancers.'],['CABOOSE','I will be a very convincing scary person.'],['TUCKER','Try being a convincing person first.']],[[2,'blackDisguise']]),
 {kind:'possess',title:'Help ghost Church reach and possess Sarge',who:'SARGE',dialogue:[['CHURCH','I can borrow Sarge long enough to get Tex out.']]},
 scene('See the rescue go wrong',[-16,25],[at('SARGE',-18,24,'command'),at('SIMMONS',-15,26),at('TEX',-13,23),at('CABOOSE',0,-20,'wave')],[['CHURCH','Simmons, release the prisoner. This is definitely your sergeant talking.'],['SIMMONS','That is an unusually reasonable order, sir.'],['CABOOSE','I can fix the shooting mistake this time!'],['TUCKER','Caboose, wait!']],[[2,'releaseTex'],[6,'sargeShot']])
 ],'Original episode 14: a distraction frees Tex, but Caboose shoots the possessed Sarge.',{churchGhost:true,texCaptured:true,donutAbsent:true}),
 s('THE WRONG KIND OF FIRST AID','red',[
 scene('Visit the apparent afterlife',[-16,25],[at('SARGE',-18,24,'command'),at('CHURCH',-14,24)],[['SARGE','Is this where I finally get competent subordinates?'],['CHURCH','No. I have been dead for a while and mine are still terrible.'],['SARGE','Then the afterlife needs a recruiting department.']]),
 {kind:'revive',who:'SARGE',helper:'GRIF',title:'Help Grif revive Sarge: perform 3 CPR beats',point:[-18,24],dialogue:[['GRIF','Nobody else is doing anything, so apparently I am doing something.']]},
 scene('Watch Sarge reject the explanation',[-16,25],red,[['SIMMONS','Grif saved you, sir.'],['SARGE','With CPR? I was shot in the head!'],['GRIF','Fine. Next time I will follow the complaint procedure.']])
 ],'Original episode 15: Grif revives Sarge, who objects to the method.',{churchGhost:true,sargeDown:true,donutAbsent:true}),
 s('NEW ARMOR, WRONG LANGUAGE','red',[
 scene('Meet Donut after his return',[-16,25],[...red,at('DONUT',-10,23,'wave')],[['DONUT','Command patched me up and gave me replacement armor.'],['GRIF','They ran out of red?'],['DONUT','I also brought Lopez’s speech unit. He will finally get a say in things.']]),
 collect('Bring the speech unit to Lopez',[['VOICE CARD',8,26]]),
 scene('Watch the voice-unit installation',[-13,25],[at('SARGE',-16,24,'command'),at('LOPEZ',-11,24,'work'),at('SIMMONS',-14,27),at('DONUT',-8,26,'wave')],[['SIMMONS','Sir, ground yourself before touching the card.'],['SARGE','I have installed more equipment than—'],['LOPEZ','Solo puedo hablar español.'],['GRIF','He has been waiting months to talk and we still cannot understand him.']],[[2,'voiceCardSpark']])
 ],'Original episode 16: Donut returns in pink armor; the damaged voice card leaves Lopez speaking Spanish.',{churchGhost:true}),
 s('REPAIRS AND AN UNBURIED BODY','blue',[
 {kind:'work',who:'TEX',title:'Stay near Tex while she repairs Sheila',point:[0,-27],seconds:10,dialogue:[['TUCKER','You owe us for the rescue. The tank needs repair.'],['TEX','Then keep Caboose away from the controls.']]},
 scene('Join Church checking the ridge',[18,-25],[at('CHURCH',18,-27),at('TUCKER',22,-27)],[['CHURCH','My body is still lying here.'],['TUCKER','We had a lot going on.'],['CHURCH','I noticed. Almost all of it involved ignoring my body.']])
 ],'Original episode 17: Tex repairs Sheila while Church discovers his body was not buried.',{churchGhost:true,tank:true,bodyOnRidge:true}),
 s('CHURCH TRIES TO WARN THE REDS','blue',[
 scene('Listen to Church’s reason for intervening',[0,-36],[...blue,at('CABOOSE',-5,-39,'wave')],[['CHURCH','Tex is going after the Reds. If she leaves, I lose my chance to remove that AI.'],['TUCKER','So you are saving the Reds to keep Tex here?'],['CHURCH','I did not say it was a nice plan.']]),
 walk('CHURCH','Accompany Church toward red base to deliver the warning',[[0,-20],[0,-3],[0,15],[-16,25]])
 ],'Original episode 18: Church tries to prevent Tex from wiping out the Reds.',{churchGhost:true,tank:true}),
 s('THE THROW ACROSS THE GULCH','red',[
 scene('See Church’s warning lost in translation',[-16,25],[at('LOPEZ',-14,24,'work'),...red],[['LOPEZ','Tex viene con el tanque. Están en peligro.'],['SARGE','Lopez, this is no time for maintenance requests!'],['SIMMONS','I think he is pointing at the tank.']],[[1,'possessLopez']]),
 {kind:'survive',title:'Stay behind red cover during Tex and Sheila’s attack',point:[0,16],seconds:16,foes:['TEX'],tankFire:true,dialogue:[['GRIF','The warning might have been a warning.']]},
 {kind:'storyGrenade',title:'Help Donut land a grenade near Sheila. Aim at the gold marker.',point:[0,-24],dialogue:[['DONUT','That freelancer put a grenade on my helmet. I have been practicing the return.']]},
 scene('Witness Tex’s final moments and Church’s response',[0,-21],[at('TEX',1,-24),at('LOPEZ',-2,-23,'work'),at('CABOOSE',5,-26,'wave')],[['TEX','Church… the AI is gone.'],['CHURCH','I wanted to get you out too.'],['CABOOSE','Is my friend going to be okay?'],['CHURCH','Not everything gets fixed by saying that it will.']],[[2,'texDies']])
 ],'Original episode 19: Donut’s grenade disables Sheila; Church reaches the dying Tex in Lopez’s body.',{churchGhost:true,tank:true})
];
const initial=['SARGE','GRIF','SIMMONS','CHURCH','TUCKER'];
missions.forEach((m,i)=>{m.originalEpisode=i+1;m.act='THE BLOOD GULCH CHRONICLES / SEASON 1';m.name='S1 · E'+String(i+1).padStart(2,'0')+' / '+m.title;m.task=m.stages[0].title;m.roster=[...initial];if(i>=2)m.roster.push('DONUT','CABOOSE');if(i>=9)m.roster.push('TEX');if(i>=10)m.roster.push('LOPEZ');if(m.donutAbsent)m.roster=m.roster.filter(n=>n!=='DONUT');m.spawn=m.side==='blue'?[0,-34]:[0,29];m.source='https://rvb.fandom.com/wiki/Red_vs._Blue:_Season_1';m.boss=false});
export const cast={
 SARGE:{color:0xb84243,pos:[-18,24],pitch:1,voice:0},GRIF:{color:0xcf8539,pos:[-13,28],pitch:1,voice:1},SIMMONS:{color:0x8e303c,pos:[-22,17],pitch:1,voice:2},DONUT:{color:0xbb4c44,pos:[-10,22],pitch:1,voice:3},LOPEZ:{color:0x816545,pos:[-7,24],pitch:1,voice:4},CHURCH:{color:0x72a8bf,pos:[2,-43],pitch:1,voice:5},TUCKER:{color:0x37b9b2,pos:[8,-43],pitch:1,voice:6},CABOOSE:{color:0x284fc1,pos:[-7,-43],pitch:1,voice:7},TEX:{color:0x262e38,pos:[6,-42],pitch:1,voice:8},SHEILA:{color:0x64947b,pitch:1,voice:9},ROOKIE:{color:0x9cb6c2,pitch:1,voice:10},VIC:{color:0x888888,pitch:1,voice:11}
};
