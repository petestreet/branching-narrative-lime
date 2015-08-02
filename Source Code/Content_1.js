goog.provide('maze.Content_1');

/** 
 * @constructor
 */
maze.Content_1 = function() {
    
    this.roomCont = [
        //Row 0
        ["Fluorescent lights barrage your eyes sixty times a second.  Squint and you can see your reflection staring back at you, bouncing off of the glossed walls.  This is where you begin.",
         
        "Run your hand along the wall.  It is difficult to make out the seams where they meet.  The floor is a cold, translucent gray reflecting light back up at you.  It's as if the architecture is hidden from you.",
         
        "Your bare feet slap against the floor and leave smudged footprints. You sometimes hear their echo over the humming lights and droning air conditioner.  You are wearing a plain gray t-shirt with a black barcode stamped in the middle of the chest.",
         
        "<em>Are you doing okay, [redacted]?  Don't be afraid to ask for help.</em><br><br>The metallic voice from the ceiling began its endless repeat cycle.",
        
        "Sit in the corner and rest for a moment.  The sterile drone of the lights and muffled, vibrating air ducts is getting on your nerves.  Every room you enter looks the same.  Every room you leave blends in with the rest of them.",
        
        "Looks like there is only one way to go.",
        
        "<em>We want the best for you, [redacted].  Please do not disappoint us.</em>",
        
        "A dead-end.  How surprising.  Touch your hand against the back wall and feel it sting.  As if something were burning on the other side.",
        
        "You nearly slip on your own sweat.  Dark, empty spots appear in your field of vision.  A faint crackling noise comes through the wall that reminds you of a memory of a campfire.  You can't stay here."],
        
        //Row 1
        ["<em>Welcome home, [redacted].  Please find your way to the [redacted] as quickly as possible.  A surprise is waiting for you.</em><br><br>A fist-sized, perforated box bolted into the ceiling says these words on repeat.",
         
        "<em>Feel free to explore, but please stay away from the [redacted].</em><br><br>The words repeat over and over, spoken through a layer of tin.",
         
        "Look down and notice the orange sweats you're wearing.  They are slightly fuzzy but are thin enough to let the chilly air through.",
         
        "Keep going straight.",
        
        "<em>You've entered the [redacted] room.  Choose your next direction carefully.</em>",
        
        "There are plenty of places to explore.  Do you understand why you are here yet?  Keep looking, the answer might be just around the corner.",
        
        "<em>We want to watch you struggle.  It is for your own good.</em>",
        
        "It is still blindingly bright, but the sounds of your bare feet gripping and releasing the glossy floor are especially pronounced.",
        
        "Your breath gets heavy.  What air is left in the room is harder to draw in with the heat."],
        
        //Row 2
        ["Light seems to be emanating from every white, empty surface.  You don't cast a shadow.  There is nothing in this room except for the blinding light.",
         
        "Some rooms don't seem to have a speaker box bolted to the ceiling.  Although you have to squint against the omnipresent light to be sure.",
         
        "<em>Make sure you don't get lost.  We wouldn't want to have that kind of liability on our hands.</em><br><br>The tinny voice emanating from the ceiling begins to repeat itself before the echo it made finishes ringing.",
         
        "There is a seam in the corner of the walls.  Something might have moved from behind it but it's too bright where you are standing to be sure.",
        
        "<em>We are very pleased you could join us, [redacted].  Keep searching.</em>",
        
        "A low-fidelity <em>hiss</em> crackles from the speaker above you.",
        
        "<em>Perhaps not your best judgement coming here.</em>",
        
        "The air feels thin here.  And you can't help but notice an echoing silence; the air conditioner isn't running.",
        
        "Indeed, it is getting warmer the further you go."],
        
        //Row 3
        ["Still nothing.  Not even an overhead speaker box.  There is empty space in front of and behind you, but the walls to either side feel solid.  They absorb a light nudge from your shoulder but don't otherwise move.",
         
        "This room is as empty as the last one.",
         
        "<em>It may seem difficult at first, but it is not insurmountable.  We are counting on you, [redacted].</em>",
         
        "A clipboard is laying on the floor.  It holds a thirty-two blank sheets of paper a centimeter high.  The top sheet has a few indented lines, as if another sheet had been written on and then pulled off the stack.  You can only discern the part in the top right corner, which has been written over multiple times.<br><br><em>Trial 1</em>",
        
        "You might want to turn around.",
        
        "<em>We are rooting for you.</em>",
        
        "This hallway looks strikingly familiar.  Surely you haven't been here before?",
        
        "<em>Choose where you go next wisely.  For your own good.</em>",
        
        "Are you sure about this route?"],
        
        //Row 4
        ["You don't remember waking up.  It's as if a dream got cut short and now you are here.  What is your name?  Who is speaking over the intercoms?  You don't remember.",
         
        "The rooms sound hollow.  Every footstep reverberates and then gets lost in the ubiquitous auditory fog.",
         
        "Your ear perks up.  The air conditioner rattles a vent against the ceiling to the north.",
         
        "<em>Your next choice may have grave consequences.  Our expectations are as high as our hopes.</em>",
        
        "<em>There is still much to explore.  Please don't give up, [redacted].  Not until you succeed.</em>",
        
        "<em>Pain is the necessary route to success.  Without pain you would be cheating.  And cheaters are by definition unsuccessful.  We want you to be successful.</em>",
        
        "A typed note is taped to the back of the wall.  Squint to read it:<br><br><em>Your head might feel funny.  Don't be alarmed.  We will keep you safe.</em>",
        
        "The air has a slightly sweet smell.",
        
        "<em>What did you hope to find?  Surely not an escape.  Keep trying.</em>"],
        
        //Row 5
        ["<em>You are important.  But you are not loved.  Please be considerate of that as you proceed.</em>",
         
        "<em>Think about why you are here, [redacted].  If you sat for a moment and thought then it might occur to you.  We wanted you to succeed.</em><br><br>The speaker blares above you.  Incessantly.<br><br><em>So far you have been nothing but a disappointment.  You should be ashamed.  You will not be awarded food.  We will keep you safe, and we hope that you do better in the future.</em>",
        
        "Clear your throat.  It takes a surprising amount of time for the echo to get back to you.",
         
        "<em>You have made good progress.  Thank you for following the [redacted] as instructed.</em>",
        
        "Where are you, again?",
        
        "You are turned around.  Did you hear something click?  Did a light just flicker?  The humming lights shine unceasingly and make you feel nauseated.",
        
        "Take a moment to rest against the wall.",
        
        "A feeling of lightheadedness comes over you.  The air ducts seem to be humming at a higher frequency.  ",
        
        "Your head feels detached from the rest of your body.  Sway with each step, but keep walking."],
        
        //Row 6
        ["Take a moment to examine your shirt.  The barcode is not stamped or steam-pressed into the chest, but rather stitched with fine black thread.  Your orange sweatpants are thin and hug your legs, and are entirely plain.  Your feet have grown slightly numb from the cold floor.",
         
        "<em>Please, [redacted].  Consider where you are going.</em>",
         
        "Keep walking straight.  You hear a rush of footsteps echoing through the hallway.",
         
        "Turn the corner and you suddenly feel dizzy.  The seam where the two walls meet blurs and you stumble, holding one hand out to keep balance.  Aren't you a little sick of this?  What exactly are you supposed to find?  How long will you be wandering this vacant, white labyrinth?  What is your name?<br><br>What is your name?<br><br>What is your name?<br><br>Suppress a surge of anxiety.  This room is empty.  Keep walking.",
        
        "<em>You are nearly there, [redacted].  Just a bit further.  Do not despair now.  The surprise is still waiting for you.</em>",
        
        "<em>Just ahead is a [redacted].  You might not like what you find there.</em>",
        
        "The overhead lights have an especially angry hiss here.",
        
        "Why don't you look around the corner?",
        
        "Breathe in sharply.  The air is musty and you feel a wave of nausea."],
        
        //Row 7
        ["This way looks interesting.  The walls are still blank, though.",
         
        "A faint murmur - two people in adversarial whisper - rises above the ever-present fluorescent drone.  Make a timid knock on the dead-end wall in front of you.  The voices stop.",
         
        "<em>Get out of here.</em><br><br>Whip your head around in time to see a blur of orange and gray rushing toward you.  A woman with a tightly-drawn pony tail and the same sweats as you are wearing slows down just long enough to make eye contact.<br><br><em>You can't stay here</em>, she says again through a labored breath.  You open your mouth to speak but nothing comes out.  As she comes into focus you notice a red-stained bandage covering her entire left forearm.  She keeps running, and is gone just as quickly as she appeared.",
         
        "This hallway is quiet, save for the ever-present lights and air conditioning.  You hear a series of sharp <em>thuds</em> coming from all around you.  Hands and knees colliding with sheet metal.  The muffled shout of a female's voice helps you locate the source of the sound in the ceiling air ducts.<br><br>Three knocks, deliberate and especially loud, come through directly above your head.<br><br>She shouts again with an extended vowel.  <em>HEY</em> or <em>DAY</em> or possibly <em>HELP</em>.  It's difficult to hear clearly.  Another shout seems to get cut short.  No more sounds come from the ceiling.",
        
        "Turn right.  Or left.  That's entirely up to you.",
        
        "<em>Please turn around, [redacted].</em>",
        
        "Step into this room.  Your right foot makes the familiar slapping noise, your left foot creates a low thud.  The floor gives slightly when you bounce your weight on it.",
        
        "<em>We thank you for taking the time to participate, [redacted].</em>",
        
        "<em>Please remember that this is only a test.  We have your best interests at heart.  Keep moving.</em>"],
        
        //Row 8
        ["Interesting indeed.",
         
        "Keep moving, please.",
         
        "Footsteps echo through the hallway, though you can't tell if they're getting closer or further away.",
         
        "They are watching.  They must be.",
        
        "<em>-.- . . .--. / .- -. / . -.-- . / --- -. / -.--.- .-. . -.. .- -.-. - . -.. -.--.- .-.-.- / .... . / .. ... / --. . - - .. -. --. / -.-. .-.. --- ... . .-.-.- / - .... .. ... / .. ... / .- -. / .- .-.. . .-. - / - --- / .- .-.. .-.. / .--. . .-. ... --- -. -. . .-.. .-.-.- / -.. --- / -. --- - / .-.. --- ... . / ... .. --. .... - / --- ..-. / .... .. -- .-.-.- / .-- . / .... .- ...- . / ... ..- -.-. .... / .... .. --. .... / .... ---</em><br><br>A series of empty clicks and monotone <em>beeps</em> emanate from the speaker above you.  Stand in the room for a while and listen to the synthesized drone.  It cuts off abruptly.",
        
        "<em>Congratulations!  You've discovered the [redacted].  Carry on.</em>",
        
        "Step into this room carefully.  The floor appears solid, but you don't trust whatever might be underneath it.",
        
        "<em>You are a long way from where you started.  If we gave you the proper enticement, do you think you could find your way back?</em>",
        
        "<em>Proceed, but only if you are ready.  We are proud of you, [redacted].</em>"],
        
        //Row 9
        ["As you walk into this room all of the lights shut off.  So does the air conditioner.  Your eyes begin to adjust to the darkness and your ears to the silence.  You hear a gust of wind hit the other side of the back wall and a faint, rhythmic groan.  Suddenly the lights turn back on and the air conditioner revs up, and you are temporarily blind.  A speaker above you also turns on.<br><br><em>Setup.  Welcome to Telecom Monitoring System version 4.0.  Please say the sixteen-digit verification code to proceed.  Please say the sixteen-digit verification code to proceed.  Please say the sixteen-digit verification code to proceed.</em><br><br>It goes on an on.",
         
        "<em>We have such high hopes for you.</em>",
         
        "<em>Are you seeing things, [redacted]?  Keep looking.  We want you to pass.</em>",
         
        "Do you like having no other option on where to go?",
        
        "This place is unfamiliar.  The voices from the ceiling don't seem to address anybody in particular.  Bang the side of your clenched fist into the wall and feel it absorb the impact.<br><br><em>You are unwanted.</em><br><br>Look up you see that this room does not have a speaker bolted into the ceiling.  Please stay focused.",
        
        "Your feet are weary.  They have a sharp tingling sensation, likely due to poor circulation.  The floor is too cold for them to be comfortable - or for you to sit and rest them.  Your eyelids rise and fall more slowly.  Keep walking.",
        
        "The rooms have gotten dimmer.  A glint catches your eye and you see the shattered remnants of a lightbulb swept into the corner.",
        
        "<em>You make us very happy, [redacted].  It has been a pleasure.  We are very pleased.  You are wanted.</em>",
        
        "<em>We are glad to have spent time with you today, [redacted].  No doubt you have found your goal.  Please proceed.</em>"],
        
        //Row 10
        ["This room is entirely empty.  Press your ear against the back wall and hear the rhythmic, pained scraping of a swaying tree against brick.  Step away from the wall and be once again enveloped in the sterile output of fluorescence and cold, blowing air.",
         
        "The lights flicker ever so briefly.  Listen to the distant groan.  A tree branch lazily scrapes the outside of the insulated wall.  Press your hands and shoulder against the surface.  Nothing moves.",
         
        "<em>Do not test us.</em>",
         
        "<em>Alert, [redacted].  Get out of this area or we will be forced to quarantine the exit.</em>",
        
        "<em>Alert, [redacted].  You are in a restricted area.  Please leave immediately by going either down or to your right.</em>",
        
        "<em>You are on the edge of a restricted area.  Tread carefully.</em>",
        
        "The wall rattles.  Peek behind the seam in the corner.  Whatever lies behind sounds high-pitched and hollow.",
        
        /* NOTE: Once you leave this room you will be taken back to the start, room [0,0]. */
        "Your back is silhouetted.  Hold your arms out in front of you to feel for a wall.  The squealing gets more intense, it sounds as if a series of rusted gears are forced against one another.  A light breeze meets your face.<br><br>Your fingertips make contact first.  An unseen clamp grabs hold of your forearm and pulls you forward.  It digs into the ulnar muscle and tears skin.  The familiar tin-filtered voice blurts out above the noise but you can't make out what it is saying.<br><br>The gears suddenly stop.  The clamp releases its grip.  A beam of light shines directly in your eyes.  You don't know which direction you are facing.<br><br><em>You have reached the end of the test.  We are pleased with your progress, but you can do better.  Please start again.</em>", 
         
        "Ahead is a dark expanse and an echoing squeal.  Behind is a stream of synthetic light.  Are you sure you want to venture further?"]
    ];
    
    this.altRoomCont = {
        "0_0":"Flourescent lights barrage your eyes sixty times a second.  Squint and you can see your reflection staring back at you, bouncing off of the glossed walls.  This is where you began.",
        
        "3_10":"<em>Please don't come back here.</em>",
        
        "2_5":"There is a long hallway ahead.",
        "2_6":"Were those footsteps you heard only in your mind?",
        "2_7":"Where did she go?",
        "2_8":"Were those footsteps you heard only in your mind?",
        
        "1_7":"Knock again.  Silence.",
        
        "3_7":"You look back up at the ceiling, but nothing looks back at you, or speaks to you.  You are alone.",
        "4_8":"A speaker, like the others, sits bolted to the ceiling.  This one no longer produces any noise.",
        
        "4_5":"You've been here before, haven't you?",
        
        "6_3":"You have almost certainly been here before, now that you think about it.",
        
        "6_4":"The typed note remains taped to the back of the wall.  You have to squint to read it:<br><br><em>Your head might feel funny.  Don't be alarmed.  We will keep you safe.</em>",
        
        "5_1":"You are being led in circles.<br><br>You may very easily get lost.  Do you trust them?",
        
        "5_8":"<em>You already found the [redacted] here.  Keep moving.<em>",
        
        "0_9":"<em>Please say the sixteen-digit verification code to proceed.</em><br><br>The speaker talks endlessly to itself.",
        
        "4_9":"<em>You are unwanted.</em><br><br><em>You are unwanted.</em><br><br><em>You are unwanted.</em><br><br>Your ears are ringing.  Was that voice real?"
    };
}