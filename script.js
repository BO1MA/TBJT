const SAVE_KEY = "jagged_tongue_save";

const state = {
  stone: 0,
  lantern: 0,
  silence: 0
};

// 1. Boot sequence setup
const bootSequence = [
  "videos/boot_01_title_intro.mp4",
  "videos/boot_02_studio_intro.mp4"
];
let bootIndex = 0;

// 2. Main story video sequence map (Acts 1, 2, 3, and Endings)
const videoSequences = {
  intro: [
    "videos/intro_00_elian_awakening.mp4",
    "videos/intro_01_childhood_curse.mp4",
    "videos/intro_02_village_outcast.mp4",
    "videos/intro_03_cake_unveiling.mp4",
    "videos/intro_04_cake_crack_decision.mp4"
  ],

  // --- ACT 1: MARKET EVENT RESOLUTIONS ---
  scene1_stone: [
    "videos/scene1_stone_frame1.mp4",
    "videos/scene1_stone_frame2.mp4",
    "videos/scene1_stone_frame3.mp4",
    "videos/scene1_stone_shards_reaction.mp4"
  ],
  scene1_lantern: [
    "videos/scene1_lantern_frame1.mp4",
    "videos/scene1_lantern_frame2_alt_tray.mp4",
    "videos/scene1_lantern_frame3.mp4",
    "videos/scene1_lantern_frame4.mp4"
  ],
  scene1_silence: [
    "videos/scene1_silence_frame1.mp4",
    "videos/scene1_silence_frame2.mp4",
    "videos/scene1_silence_frame3.mp4",
    "videos/scene1_silence_frame4.mp4",
    "videos/silence_bridge_mine_entrance.mp4"
  ],

  // --- ACT 2: JOURNEY TO THE GREAT HALL ---
  scene2_stone: [
    "videos/scene2_stone_frame1.mp4",
    "videos/scene2_stone_frame2.mp4",
    "videos/scene2_stone_frame3.mp4",
    "videos/scene2_stone_frame4.mp4",
    "videos/scene2_stone_frame5.mp4",
    "videos/scene2_stone_frame6.mp4"
  ],
  scene2_lantern: [
    "videos/scene2_lantern_frame1.mp4",
    "videos/scene2_lantern_frame2.mp4",
    "videos/scene2_lantern_frame3.mp4",
    "videos/scene2_lantern_frame4.mp4",
    "videos/scene2_lantern_frame5.mp4"
  ],
  scene2_silence: [
    "videos/scene2_silence_frame1.mp4",
    "videos/scene2_silence_frame2.mp4",
    "videos/scene2_silence_frame3.mp4",
    "videos/scene2_silence_frame4.mp4",
    "videos/scene2_silence_frame5.mp4",
    "videos/scene2_silence_frame6.mp4",
    "videos/scene2_silence_frame7.mp4"
  ],

  // --- ACT 3: THE GREAT HALL CLIMAX ---
  scene3_stone: [
    "videos/scene3_stone_frame1.mp4",
    "videos/scene3_stone_frame2.mp4",
    "videos/scene3_stone_frame3.mp4",
    "videos/scene3_stone_frame4.mp4",
    "videos/scene3_stone_frame5.mp4",
    "videos/scene3_stone_frame6.mp4",
    "videos/scene3_stone_frame7.mp4",
    "videos/scene3_stone_frame8.mp4",
    "videos/scene3_stone_frame9.mp4",
    "videos/scene3_stone_frame10.mp4",
    "videos/scene3_stone_frame11.mp4"
  ],
  scene3_lantern: [
    "videos/scene3_lantern_frame1.mp4",
    "videos/scene3_lantern_frame2.mp4",
    "videos/scene3_lantern_frame3.mp4",
    "videos/scene3_lantern_frame4.mp4",
    "videos/scene3_lantern_frame5.mp4",
    "videos/scene3_lantern_frame6.mp4",
    "videos/scene3_lantern_frame7.mp4",
    "videos/scene3_lantern_frame8.mp4",
    "videos/scene3_lantern_frame9.mp4",
    "videos/scene3_lantern_frame10.mp4"
  ],
  scene3_silence: [
    "videos/scene3_silence_frame1.mp4",
    "videos/scene3_silence_frame2.mp4",
    "videos/scene3_silence_frame3.mp4",
    "videos/scene3_silence_frame4.mp4",
    "videos/scene3_silence_frame5.mp4",
    "videos/scene3_silence_frame6.mp4",
    "videos/scene3_silence_frame7.mp4"
  ],

  // --- FINAL EPILOGUES / TIMELINE CLOSURES ---
  ending_stone: [
    "videos/ending_stone_frame1.mp4",
    "videos/ending_stone_frame2.mp4",
    "videos/ending_stone_frame3.mp4",
    "videos/ending_stone_frame4.mp4",
    "videos/ending_stone_frame5.mp4",
    "videos/ending_stone_frame6.mp4",
    "videos/ending_stone_frame7.mp4",
    "videos/ending_stone_frame8.mp4",
    "videos/ending_stone_frame9.mp4",
    "videos/ending_stone_frame10.mp4",
    "videos/ending_stone_frame11.mp4",
    "videos/ending_stone_frame12.mp4",
    "videos/ending_stone_frame13.mp4"
  ],
  ending_lantern: [
    "videos/ending_lantern_frame1.mp4",
    "videos/ending_lantern_frame2.mp4",
    "videos/ending_lantern_frame3.mp4",
    "videos/ending_lantern_frame4.mp4",
    "videos/ending_lantern_frame5.mp4",
    "videos/ending_lantern_frame6.mp4"
  ],
  ending_silence: [
    "videos/ending_silence_frame1.mp4",
    "videos/ending_silence_frame2.mp4",
    "videos/ending_silence_frame3.mp4",
    "videos/ending_silence_frame3_b_snow_shiver.mp4",
    "videos/ending_silence_frame4.mp4"
  ]
};

// 3. Cinematic Subtitles Dictionary
const subtitlesData = {
  // ==================== INTRO ====================
  "intro_00_elian_awakening.mp4": [],
  "intro_01_childhood_curse.mp4": [
    { start: 1.0, end: 3.4, text: "I didn't see what people wished for." },
    { start: 3.6, end: 6.0, text: "I only saw what was." }
  ],
  "intro_02_village_outcast.mp4": [
    { start: 0.8, end: 2.8, text: "<span class='sub-shout'>Look at him! It's him!</span>" },
    { start: 3.0, end: 6.0, text: "<span class='sub-shout'>Get out!</span>" }
  ],
  "intro_03_cake_unveiling.mp4": [
    { start: 1.8, end: 5.0, text: "<span class='sub-elder'>Citizens! Witness the pinnacle of my career!</span>" },
    { start: 5.2, end: 8.5, text: "<span class='sub-elder'>Six months of sugar, sweat, and soul!</span>" }
  ],
  "intro_04_cake_crack_decision.mp4": [
    { start: 1.5, end: 4.8, text: "A sharp eye sees the crack before the crash..." },
    { start: 5.0, end: 8.8, text: "...but a wise heart knows how to mend it without a sound." }
  ],

  // ==================== ACT 1 ====================
  // --- scene1_stone ---
  "scene1_stone_frame1.mp4": [
    { start: 0.0, end: 3.5, text: "In the village of Oakhaven, every sound had its place." },
    { start: 3.8, end: 6.8, text: "The ring of the anvil, the song of the lark..." },
    { start: 7.0, end: 9.5, text: "...and the silence of Elian." }
  ],
  "scene1_stone_frame2.mp4": [
    { start: 0.0, end: 2.5, text: "Elian didn't speak often." },
    { start: 2.8, end: 5.0, text: "Not because he had nothing to say..." },
    { start: 5.2, end: 9.5, text: "...but because his words... well, they were different." }
  ],
  "scene1_stone_frame3.mp4": [
    { start: 0.0, end: 2.5, text: "<span class='sub-elder'>My work... destroyed!</span>" },
    { start: 2.8, end: 5.5, text: "<span class='sub-elder'>Your words are a heavy burden, Elian.</span>" },
    { start: 5.6, end: 9.5, text: "In Oakhaven, Elian's truth was felt as a weight... a shadow over their joy." }
  ],
  "scene1_stone_shards_reaction.mp4": [
    { start: 2.0, end: 4.5, text: "His voice didn't carry on the wind..." },
    { start: 4.8, end: 6.8, text: "...it cut through it." }
  ],

  // --- scene1_lantern ---
  "scene1_lantern_frame1.mp4": [
    { start: 0.8, end: 4.8, text: "Grace is the hand that steadies the world when it begins to tilt..." },
    { start: 5.5, end: 8.8, text: "...often before a single soul notices the lean." }
  ],
  "scene1_lantern_frame2_alt_tray.mp4": [
    { start: 0.8, end: 4.2, text: "Master Algenib, the honey layers are weeping at the south corner." },
    { start: 4.5, end: 8.8, text: "If you brace it now with the wooden tray, no one will ever know it bowed." }
  ],
  "scene1_lantern_frame3.mp4": [
    { start: 4.5, end: 9.0, text: "<span class='sub-elder'>Oh, stars... Thank you, lad. Just in time.</span>" }
  ],
  "scene1_lantern_frame4.mp4": [
    { start: 2.0, end: 5.0, text: "<span class='sub-narrator'>True strength requires no audience.</span>" },
    { start: 5.2, end: 9.0, text: "<span class='sub-narrator'>It finds its reward in the stability it leaves behind.</span>" }
  ],

  // --- scene1_silence ---
  "scene1_silence_frame1.mp4": [
    { start: 1.8, end: 5.5, text: "But the past is a gag that never loosens." }
  ],
  "scene1_silence_frame2.mp4": [
    { start: 0.0, end: 3.0, text: "He saw the fault lines before anyone else." },
    { start: 4.0, end: 5.2, text: "A simple tilt..." },
    { start: 5.4, end: 8.0, text: "A simple word could have fixed it." }
  ],
  "scene1_silence_frame3.mp4": [
    { start: 3.8, end: 7.5, text: "Safety is the heaviest burden a coward carries." }
  ],
  "scene1_silence_frame4.mp4": [
    { start: 0.5, end: 3.5, text: "<span class='sub-shout'>I can't be part of this anymore...</span>" }
  ],
  "silence_bridge_mine_entrance.mp4": [
    { start: 5.8, end: 7.8, text: "The wood remembers the weight." },
    { start: 8.0, end: 9.8, text: "Do you, Elian?" }
  ],

  // ==================== ACT 2 ====================
  // --- scene2_stone ---
  "scene2_stone_frame1.mp4": [
    { start: 0.0, end: 3.8, text: "The winter had teeth, and the Great Hall was its only cage." },
    { start: 4.0, end: 8.0, text: "But inside, a different kind of rot was festering." }
  ],
  "scene2_stone_frame2.mp4": [],
  "scene2_stone_frame3.mp4": [
    { start: 0.8, end: 3.5, text: "Elian heard what the others ignored." },
    { start: 3.8, end: 9.5, text: "The sound of a foundation failing under the weight of its own silence." }
  ],
  "scene2_stone_frame4.mp4": [
    { start: 0.8, end: 3.5, text: "<span class='sub-shout'>The beam! It's hollowed by rot!</span>" },
    { start: 3.8, end: 8.0, text: "<span class='sub-shout'>Can't you hear it? We must leave before the roof yields to the snow!</span>" }
  ],
  "scene2_stone_frame5.mp4": [
    { start: 0.8, end: 2.5, text: "<span class='sub-elder sub-shout'>Silence, boy!</span>" },
    { start: 2.8, end: 5.0, text: "<span class='sub-elder'>You bring ill omens when we need hope.</span>" },
    { start: 5.2, end: 9.5, text: "<span class='sub-elder'>Your tongue is as jagged as the ice outside, and just as cold!</span>" }
  ],
  "scene2_stone_frame6.mp4": [],

  // --- scene2_lantern ---
  "scene2_lantern_frame1.mp4": [
    { start: 1.0, end: 2.5, text: "<span class='sub-narrator'>Wisdom...</span>" },
    { start: 3.5, end: 9.0, text: "<span class='sub-narrator'>Wisdom hears the whisper of ruin before it becomes a roar.</span>" }
  ],
  "scene2_lantern_frame2.mp4": [
    { start: 3.0, end: 5.5, text: "<span class='sub-narrator'>Elder Orus, forgive my intrusion.</span>" },
    { start: 5.8, end: 8.8, text: "<span class='sub-narrator'>The hearth wind is shifting tonight.</span>" }
  ],
  "scene2_lantern_frame3.mp4": [
    { start: 0.0, end: 3.0, text: "The drafts are heavy in the center tonight." },
    { start: 3.5, end: 8.5, text: "Perhaps the families would find more warmth and comfort by the tapestries at the edges?" }
  ],
  "scene2_lantern_frame4.mp4": [],
  "scene2_lantern_frame5.mp4": [
    { start: 2.0, end: 4.5, text: "<span class='sub-elder'>We are warm, and we are whole.</span>" },
    { start: 4.8, end: 9.5, text: "<span class='sub-elder'>To lead is to guide others to safety... so gently they believe they chose the path themselves.</span>" }
  ],

  // --- scene2_silence ---
  "scene2_silence_frame1.mp4": [
    { start: 0.8, end: 2.8, text: "I don't think we can stop it." },
    { start: 3.0, end: 5.2, text: "What if it destroys everything?" },
    { start: 5.5, end: 8.5, text: "<span class='sub-shout'>There's no way out... We are trapped here!</span>" }
  ],
  "scene2_silence_frame2.mp4": [],
  "scene2_silence_frame3.mp4": [
    { start: 3.0, end: 5.0, text: "The cake was a warning." },
    { start: 5.2, end: 7.5, text: "The hall... the hall was the price." }
  ],
  "scene2_silence_frame4.mp4": [
    { start: 1.8, end: 4.2, text: "<span class='sub-elder sub-shout'>Everyone to the doors!</span>" },
    { start: 4.5, end: 7.5, text: "<span class='sub-elder sub-shout'>Move quickly! Move quickly!</span>" }
  ],
  "scene2_silence_frame5.mp4": [],
  "scene2_silence_frame6.mp4": [
    { start: 1.8, end: 4.8, text: "The light showed the truth. The wood was soft." },
    { start: 5.0, end: 7.0, text: "A child could have seen it." },
    { start: 7.2, end: 9.0, text: "A coward did." }
  ],
  "scene2_silence_frame7.mp4": [
    { start: 1.5, end: 6.0, text: "He chose the silence of the grave, before the bodies were even cold." }
  ],

  // ==================== ACT 3 ====================
  // --- scene3_stone ---
  "scene3_stone_frame1.mp4": [],
  "scene3_stone_frame2.mp4": [],
  "scene3_stone_frame3.mp4": [],
  "scene3_stone_frame4.mp4": [
    { start: 0.0, end: 4.0, text: "<span class='sub-shout'>Look up, you blind fools! Your shelter is an open grave!</span>" },
    { start: 4.5, end: 9.5, text: "The heart of that oak is nothing but sawdust and termite rot!" }
  ],
  "scene3_stone_frame5.mp4": [
    { start: 0.0, end: 3.5, text: "<span class='sub-shout'>The physics do not care about your sanctuary!</span>" },
    { start: 4.0, end: 9.0, text: "<span class='sub-shout'>Clear the center hall or die beneath it!</span>" }
  ],
  "scene3_stone_frame6.mp4": [
    { start: 0.0, end: 4.5, text: "<span class='sub-elder'>You! The herald of ruin! You shattered the Baker's harvest!</span>" },
    { start: 5.0, end: 9.5, text: "<span class='sub-elder'>And now you dare vomit your dark omens into our only sanctuary?</span>" }
  ],
  "scene3_stone_frame7.mp4": [
    { start: 0.0, end: 4.0, text: "<span class='sub-elder sub-shout'>Seize the demon! Throw him into the blizzard!</span>" }
  ],
  "scene3_stone_frame8.mp4": [
    { start: 0.0, end: 4.0, text: "<span class='sub-shout'>Get him! Don't let him escape!</span>" },
    { start: 4.5, end: 9.0, text: "<span class='sub-shout'>Make him pay! No mercy!</span>" }
  ],
  "scene3_stone_frame9.mp4": [],
  "scene3_stone_frame10.mp4": [],
  "scene3_stone_frame11.mp4": [],

  // --- scene3_lantern ---
  "scene3_lantern_frame1.mp4": [
    { start: 3.0, end: 9.0, text: "<span class='sub-narrator'>Truth is a blade... if held poorly, it cuts the wielder and the witness alike.</span>" }
  ],
  "scene3_lantern_frame2.mp4": [
    { start: 4.5, end: 7.0, text: "He saw the rot..." },
    { start: 7.1, end: 9.5, text: "He saw the end." }
  ],
  "scene3_lantern_frame3.mp4": [
    { start: 0.0, end: 5.5, text: "Elder, forgive the interruption, but the north wind is playing a cruel trick on the rafters tonight." },
    { start: 5.6, end: 9.0, text: "<span class='sub-elder'>The wind? Speak plainly, boy!</span>" }
  ],
  "scene3_lantern_frame4.mp4": [
    { start: 0.0, end: 4.5, text: "The northern draft is cutting down through the chimney seam..." },
    { start: 5.0, end: 9.5, text: "The families on the center benches are beginning to shiver." }
  ],
  "scene3_lantern_frame5.mp4": [
    { start: 0.0, end: 9.5, text: "If we shift all the center benches toward the outer wall hearths right now, we can keep every child warm until morning." }
  ],
  "scene3_lantern_frame6.mp4": [
    { start: 1.0, end: 4.5, text: "<span class='sub-elder'>You speak wisely, lad. Listen well!</span>" },
    { start: 4.6, end: 9.5, text: "<span class='sub-elder'>All benches are to clear the center aisle immediately!</span>" }
  ],
  "scene3_lantern_frame7.mp4": [
    { start: 4.0, end: 9.0, text: "<span class='sub-narrator'>Grace provides the space for the truth to land without breaking lives.</span>" }
  ],
  "scene3_lantern_frame8.mp4": [],
  "scene3_lantern_frame9.mp4": [],
  "scene3_lantern_frame10.mp4": [
    { start: 6.8, end: 9.8, text: "The truth didn't break them. It saved them." }
  ],

  // --- scene3_silence ---
  "scene3_silence_frame1.mp4": [
    { start: 0.0, end: 7.0, text: "The cold did not merely chill Elian's skin... It had entered his soul." }
  ],
  "scene3_silence_frame2.mp4": [
    { start: 0.0, end: 3.0, text: "They do not want the light." },
    { start: 5.0, end: 9.0, text: "Wake them, and they will tear you apart for interrupting their dream." }
  ],
  "scene3_silence_frame3.mp4": [
    { start: 0.0, end: 4.5, text: "His vision parsed reality with excruciating clarity..." },
    { start: 5.5, end: 9.5, text: "A hairline fracture. 400 heartbeats remaining." }
  ],
  "scene3_silence_frame4.mp4": [
    { start: 0.0, end: 5.0, text: "Fear has a way of silencing the boldest visual cues..." },
    { start: 5.5, end: 9.5, text: "Before a sound could escape, his voice was stolen." }
  ],
  "scene3_silence_frame5.mp4": [
    { start: 0.0, end: 4.5, text: "Why die for people who despise you?" },
    { start: 6.5, end: 9.5, text: "He turned his spine on the center aisle." }
  ],
  "scene3_silence_frame6.mp4": [
    { start: 0.0, end: 8.0, text: "500 heartbeats... 400... 300..." }
  ],
  "scene3_silence_frame7.mp4": [
    { start: 1.5, end: 6.0, text: "The ties that bind are never truly strong..." },
    { start: 6.5, end: 9.8, text: "Until nothing is left but the cold silence." }
  ],

  // ==================== ENDINGS ====================
  // --- ending_stone ---
  "ending_stone_frame1.mp4": [
    { start: 5.0, end: 8.5, text: "The weight of their silence finally broke the world." }
  ],
  "ending_stone_frame2.mp4": [
    { start: 3.0, end: 5.0, text: "The boy did not lie." },
    { start: 5.2, end: 9.2, text: "The truth was not a word, but a geometry of survival." }
  ],
  "ending_stone_frame3.mp4": [
    { start: 1.8, end: 4.0, text: "It showed them the way." },
    { start: 5.0, end: 7.0, text: "Not the way they wanted..." },
    { start: 7.5, end: 9.5, text: "...but the way that was." }
  ],
  "ending_stone_frame4.mp4": [],
  "ending_stone_frame5.mp4": [
    { start: 3.5, end: 5.2, text: "In the light of the truth..." },
    { start: 5.5, end: 9.5, text: "...they finally saw the boy they had cast into the dark." }
  ],
  "ending_stone_frame6.mp4": [
    { start: 1.0, end: 3.0, text: "<span class='sub-elder'>Forgive us.</span>" },
    { start: 5.0, end: 7.5, text: "The jagged tongue had cut them deep..." },
    { start: 7.8, end: 9.8, text: "...only so the healing could begin." }
  ],
  "ending_stone_frame7.mp4": [
    { start: 0.8, end: 2.8, text: "The mountain had gone silent." },
    { start: 3.0, end: 4.2, text: "The walls held." },
    { start: 4.5, end: 9.2, text: "But within the stillness of the great hall, a different kind of storm was settling in the boy's heart." }
  ],
  "ending_stone_frame8.mp4": [
    { start: 1.0, end: 4.8, text: "For years, Elian had used the truth like a blade." },
    { start: 5.2, end: 7.0, text: "He had been right, yes..." },
    { start: 7.2, end: 9.5, text: "...but he had been cruel." }
  ],
  "ending_stone_frame9.mp4": [
    { start: 4.8, end: 6.5, text: "I gave them the truth..." },
    { start: 7.0, end: 9.5, text: "...but I gave it to them as a wound." }
  ],
  "ending_stone_frame10.mp4": [
    { start: 0.2, end: 1.5, text: "He saw it then." },
    { start: 1.8, end: 5.0, text: "<span class='sub-narrator'>Truth without grace is just another way to break a person.</span>" },
    { start: 5.5, end: 9.5, text: "<span class='sub-narrator'>But truth held in kindness... that is a light that guides them home.</span>" }
  ],
  "ending_stone_frame11.mp4": [],
  "ending_stone_frame12.mp4": [
    { start: 0.2, end: 2.8, text: "<span class='sub-narrator'>Next time, I will lead with the light.</span>" },
    { start: 3.0, end: 5.2, text: "The boy with the jagged tongue was gone." },
    { start: 5.4, end: 9.5, text: "In his place sat a young man who finally understood the weight of his words." }
  ],
  "ending_stone_frame13.mp4": [
    { start: 3.8, end: 7.5, text: "And for the first time in Oakhaven, the truth didn't hurt..." },
    { start: 7.8, end: 9.5, text: "...it healed." }
  ],

  // --- ending_lantern ---
  "ending_lantern_frame1.mp4": [
    { start: 2.5, end: 4.2, text: "The truth did not break the house." },
    { start: 4.3, end: 7.2, text: "It only revealed where the house was already broken." }
  ],
  "ending_lantern_frame2.mp4": [
    { start: 1.5, end: 4.0, text: "In that moment, they saw not a harbinger of doom..." },
    { start: 4.1, end: 6.5, text: "...but a shepherd of the light." }
  ],
  "ending_lantern_frame3.mp4": [
    { start: 3.5, end: 5.5, text: "<span class='sub-elder'>You saved our lives, Elian.</span>" },
    { start: 5.6, end: 9.5, text: "<span class='sub-elder'>We were blind to the rot, but you gave us the eyes to see.</span>" }
  ],
  "ending_lantern_frame4.mp4": [],
  "ending_lantern_frame5.mp4": [
    { start: 0.5, end: 3.0, text: "<span class='sub-narrator'>Truth is a guiding star, not a blade.</span>" },
    { start: 3.1, end: 5.5, text: "<span class='sub-narrator'>When delivered with kindness, it does not cut...</span>" },
    { start: 5.6, end: 8.8, text: "<span class='sub-narrator'>...it illuminates the path home.</span>" }
  ],
  "ending_lantern_frame6.mp4": [
    { start: 1.0, end: 5.5, text: "And so, the lantern path led him exactly where he needed to be." },
    { start: 6.0, end: 9.2, text: "Not to a destination... but to a neighbor." }
  ],

  // --- ending_silence ---
  "ending_silence_frame1.mp4": [],
  "ending_silence_frame2.mp4": [
    { start: 0.8, end: 2.5, text: "He was safe." },
    { start: 2.6, end: 4.0, text: "He was whole." },
    { start: 4.2, end: 8.0, text: "He was cursed... He was cursed." }
  ],
  "ending_silence_frame3.mp4": [
    { start: 5.0, end: 8.5, text: "<span class='sub-shout'>I let the roof crush them...</span>" }
  ],
  "ending_silence_frame3_b_snow_shiver.mp4": [],
  "ending_silence_frame4.mp4": [
    { start: 4.0, end: 6.2, text: "The Silence path is a long one..." },
    { start: 6.3, end: 9.0, text: "...and Elian walks it alone." }
  ]
};

const subtitleDictionaries = {
  en: subtitlesData, // القاموس الإنجليزي الأصلي
  ar: {
    // ==================== INTRO ====================
    "intro_00_elian_awakening.mp4": [],
    "intro_01_childhood_curse.mp4": [
      { start: 1.0, end: 3.4, text: "لم أكن أرى ما يتمناه الناس." },
      { start: 3.6, end: 6.0, text: "كنت أرى ما هو كائن بالفعل." }
    ],
    "intro_02_village_outcast.mp4": [
      { start: 0.8, end: 2.8, text: "<span class='sub-shout'>انظروا إليه! إنه هو!</span>" },
      { start: 3.0, end: 6.0, text: "<span class='sub-shout'>اخرج!</span>" }
    ],
    "intro_03_cake_unveiling.mp4": [
      { start: 1.8, end: 5.0, text: "<span class='sub-elder'>أيها المواطنون! اشهدوا ذروة مسيرتي!</span>" },
      { start: 5.2, end: 8.5, text: "<span class='sub-elder'>ستة أشهر من السكر والعرق والروح!</span>" }
    ],
    "intro_04_cake_crack_decision.mp4": [
      { start: 1.5, end: 4.8, text: "العين الحادة ترى الشق قبل الانهيار..." },
      { start: 5.0, end: 8.8, text: "...لكن القلب الحكيم يعرف كيف يصلحه بصمت." }
    ],

    // ==================== ACT 1 ====================
    // --- scene1_stone ---
    "scene1_stone_frame1.mp4": [
      { start: 0.0, end: 3.5, text: "في قرية أوكهافن، كان لكل صوت مكانه." },
      { start: 3.8, end: 6.8, text: "رنين السندان، وغناء القبرة..." },
      { start: 7.0, end: 9.5, text: "...وصمت إيليان." }
    ],
    "scene1_stone_frame2.mp4": [
      { start: 0.0, end: 2.5, text: "لم يكن إيليان يتحدث كثيراً." },
      { start: 2.8, end: 5.0, text: "ليس لأنه لا يملك ما يقوله..." },
      { start: 5.2, end: 9.5, text: "...بل لأن كلماته... كانت مختلفة." }
    ],
    "scene1_stone_frame3.mp4": [
      { start: 0.0, end: 2.5, text: "<span class='sub-elder'>عملي... تحطم!</span>" },
      { start: 2.8, end: 5.5, text: "<span class='sub-elder'>كلماتك عبء ثقيل يا إيليان.</span>" },
      { start: 5.6, end: 9.5, text: "في أوكهافن، كانت حقيقة إيليان تُشعر وكأنها ثقل... ظل يطغى على فرحتهم." }
    ],
    "scene1_stone_shards_reaction.mp4": [
      { start: 2.0, end: 4.5, text: "لم يحمل الريح صوته..." },
      { start: 4.8, end: 6.8, text: "...بل قطعها." }
    ],

    // --- scene1_lantern ---
    "scene1_lantern_frame1.mp4": [
      { start: 0.8, end: 4.8, text: "الرشاقة هي اليد التي تثبت العالم عندما يبدأ في الميل..." },
      { start: 5.5, end: 8.8, text: "...غالباً قبل أن تلاحظ أي روح هذا الميل." }
    ],
    "scene1_lantern_frame2_alt_tray.mp4": [
      { start: 0.8, end: 4.2, text: "أيها المعلم ألجنيف، طبقات العسل تذرف الدموع في الزاوية الجنوبية." },
      { start: 4.5, end: 8.8, text: "إذا دعمتها الآن بالصينية الخشبية، فلن يلاحظ أحد أنها مالت." }
    ],
    "scene1_lantern_frame3.mp4": [
      { start: 4.5, end: 9.0, text: "<span class='sub-elder'>يا للنجوم... شكراً لك يا بني، في الوقت المناسب تماماً.</span>" }
    ],
    "scene1_lantern_frame4.mp4": [
      { start: 2.0, end: 5.0, text: "<span class='sub-narrator'>القوة الحقيقية لا تحتاج إلى جمهور.</span>" },
      { start: 5.2, end: 9.0, text: "<span class='sub-narrator'>تجد مكافأتها في الاستقرار الذي تتركه خلفها.</span>" }
    ],

    // --- scene1_silence ---
    "scene1_silence_frame1.mp4": [
      { start: 1.8, end: 5.5, text: "لكن الماضي كمامة لا تنفك أبداً." }
    ],
    "scene1_silence_frame2.mp4": [
      { start: 0.0, end: 3.0, text: "لقد رأى خطوط الصدع قبل أي شخص آخر." },
      { start: 4.0, end: 5.2, text: "ميل بسيط..." },
      { start: 5.4, end: 8.0, text: "كلمة بسيطة كان بإمكانها إصلاح ذلك." }
    ],
    "scene1_silence_frame3.mp4": [
      { start: 3.8, end: 7.5, text: "الأمان هو أثقل عبء يحمله الجبان." }
    ],
    "scene1_silence_frame4.mp4": [
      { start: 0.5, end: 3.5, text: "<span class='sub-shout'>لا يمكنني الاستمرار في هذا بعد الآن...</span>" }
    ],
    "silence_bridge_mine_entrance.mp4": [
      { start: 5.8, end: 7.8, text: "الخشب يتذكر الوزن." },
      { start: 8.0, end: 9.8, text: "هل تتذكر أنت يا إيليان؟" }
    ],

    // ==================== ACT 2 ====================
    // --- scene2_stone ---
    "scene2_stone_frame1.mp4": [
      { start: 0.0, end: 3.8, text: "كان للشتاء أنياب، وكانت القاعة الكبرى قفصه الوحيد." },
      { start: 4.0, end: 8.0, text: "لكن في الداخل، كان هناك نوع آخر من التعفن يتفشى." }
    ],
    "scene2_stone_frame2.mp4": [],
    "scene2_stone_frame3.mp4": [
      { start: 0.8, end: 3.5, text: "سمع إيليان ما تجاهله الآخرون." },
      { start: 3.8, end: 9.5, text: "صوت الأساس وهو ينهار تحت وطأة صمته الخاص." }
    ],
    "scene2_stone_frame4.mp4": [
      { start: 0.8, end: 3.5, text: "<span class='sub-shout'>العارضة! إنها مجوفة بسبب التعفن!</span>" },
      { start: 3.8, end: 8.0, text: "<span class='sub-shout'>ألا تسمعها؟ يجب أن نغادر قبل أن يخضع السقف للثلوج!</span>" }
    ],
    "scene2_stone_frame5.mp4": [
      { start: 0.8, end: 2.5, text: "<span class='sub-elder sub-shout'>اصمت ايها الصبي!</span>" },
      { start: 2.8, end: 5.0, text: "<span class='sub-elder'>أنت تجلب نذير شقسوء حين نحتاج الأمل.</span>" },
      { start: 5.2, end: 9.5, text: "<span class='sub-elder'>لسانك حاد كجليد الخارج، وبارد مثله!</span>" }
    ],
    "scene2_stone_frame6.mp4": [],

    // --- scene2_lantern ---
    "scene2_lantern_frame1.mp4": [
      { start: 1.0, end: 2.5, text: "<span class='sub-narrator'>الحكمة...</span>" },
      { start: 3.5, end: 9.0, text: "<span class='sub-narrator'>الحكمة تسمع همس الخراب قبل أن يتحول إلى هدير.</span>" }
    ],
    "scene2_lantern_frame2.mp4": [
      { start: 3.0, end: 5.5, text: "<span class='sub-narrator'>أيها الشيخ أوروس، اغفر تدخلي.</span>" },
      { start: 5.8, end: 8.8, text: "<span class='sub-narrator'>رياح الموقد تتغير الليلة.</span>" }
    ],
    "scene2_lantern_frame3.mp4": [
      { start: 0.0, end: 3.0, text: "التيارات قوية في المنتصف الليلة." },
      { start: 3.5, end: 8.5, text: "ربما تجد العائلات دفئاً وراحة أكبر بجوار المعلقات في الأطراف؟" }
    ],
    "scene2_lantern_frame4.mp4": [],
    "scene2_lantern_frame5.mp4": [
      { start: 2.0, end: 4.5, text: "<span class='sub-elder'>نحن دافئون، ونحن بخير.</span>" },
      { start: 4.8, end: 9.5, text: "<span class='sub-elder'>القيادة هي إرشاد الآخرين للأمان... بلطف لدرجة أنهم يعتقدون أنهم اختاروا الطريق بانفسهم.</span>" }
    ],

    // --- scene2_silence ---
    "scene2_silence_frame1.mp4": [
      { start: 0.8, end: 2.8, text: "لا أعتقد أننا نستطيع إيقافه." },
      { start: 3.0, end: 5.2, text: "ماذا لو دمر كل شيء؟" },
      { start: 5.5, end: 8.5, text: "<span class='sub-shout'>لا مخرج... نحن محاصرون هنا!</span>" }
    ],
    "scene2_silence_frame2.mp4": [],
    "scene2_silence_frame3.mp4": [
      { start: 3.0, end: 5.0, text: "كانت الكعكة تحذيراً." },
      { start: 5.2, end: 7.5, text: "القاعة... القاعة كانت الثمن." }
    ],
    "scene2_silence_frame4.mp4": [
      { start: 1.8, end: 4.2, text: "<span class='sub-elder sub-shout'>الجميع إلى الأبواب!</span>" },
      { start: 4.5, end: 7.5, text: "<span class='sub-elder sub-shout'>تحركوا بسرعة! تحركوا بسرعة!</span>" }
    ],
    "scene2_silence_frame5.mp4": [],
    "scene2_silence_frame6.mp4": [
      { start: 1.8, end: 4.8, text: "أظهر الضوء الحقيقة. كان الخشب ليناً." },
      { start: 5.0, end: 7.0, text: "كان بإمكان طفل أن يرى ذلك." },
      { start: 7.2, end: 9.0, text: "وفعله جبان." }
    ],
    "scene2_silence_frame7.mp4": [
      { start: 1.5, end: 6.0, text: "لقد اختار صمت القبور، قبل أن تبرد الجثث حتى." }
    ],

    // ==================== ACT 3 ====================
    // --- scene3_stone ---
    "scene3_stone_frame1.mp4": [],
    "scene3_stone_frame2.mp4": [],
    "scene3_stone_frame3.mp4": [],
    "scene3_stone_frame4.mp4": [
      { start: 0.0, end: 4.0, text: "<span class='sub-shout'>انظروا للأعلى أيها العميان! ملجأكم قبر مفتوح!</span>" },
      { start: 4.5, end: 9.5, text: "قلب تلك السنديانة ليس سوى نشارة خشب وتعفن أرضي!" }
    ],
    "scene3_stone_frame5.mp4": [
      { start: 0.0, end: 3.5, text: "<span class='sub-shout'>الفيزياء لا تهتم بملاذكم!</span>" },
      { start: 4.0, end: 9.0, text: "<span class='sub-shout'>أخلوا القاعة المركزية وإلا متّم تحتها!</span>" }
    ],
    "scene3_stone_frame6.mp4": [
      { start: 0.0, end: 4.5, text: "<span class='sub-elder'>أنت! نذير الخراب! لقد حطمت حصاد الخباز!</span>" },
      { start: 5.0, end: 9.5, text: "<span class='sub-elder'>والآن تجرؤ على قيء نذركم المظلمة في ملاذنا الوحيد؟</span>" }
    ],
    "scene3_stone_frame7.mp4": [
      { start: 0.0, end: 4.0, text: "<span class='sub-elder sub-shout'>أمسكوا بالشيّطان! ألقوه في العاصفة!</span>" }
    ],
    "scene3_stone_frame8.mp4": [
      { start: 0.0, end: 4.0, text: "<span class='sub-shout'>خذوه! لا تدعوه يهرب!</span>" },
      { start: 4.5, end: 9.0, text: "<span class='sub-shout'>اجعلوه يدفع الثمن! بلا رحمة!</span>" }
    ],
    "scene3_stone_frame9.mp4": [],
    "scene3_stone_frame10.mp4": [],
    "scene3_stone_frame11.mp4": [],

    // --- scene3_lantern ---
    "scene3_lantern_frame1.mp4": [
      { start: 3.0, end: 9.0, text: "<span class='sub-narrator'>الحقيقة نصل... إن أُمسكت بشكل سيء، جرحت حاملها والشاهد معاً.</span>" }
    ],
    "scene3_lantern_frame2.mp4": [
      { start: 4.5, end: 7.0, text: "لقد رأى التعفن..." },
      { start: 7.1, end: 9.5, text: "ورأى النهاية." }
    ],
    "scene3_lantern_frame3.mp4": [
      { start: 0.0, end: 5.5, text: "أيها الشيخ، اغفر المقاطعة، لكن رياح الشمال تلعب خدعة قاسية بالعوارض الليلة." },
      { start: 5.6, end: 9.0, text: "<span class='sub-elder'>الرياح؟ تحدث بوضوح ايها الولد!</span>" }
    ],
    "scene3_lantern_frame4.mp4": [
      { start: 0.0, end: 4.5, text: "تيار الهواء الشمالي يخترق شق المدخنة..." },
      { start: 5.0, end: 9.5, text: "بدأت العائلات على المقاعد المركزية ترتجف." }
    ],
    "scene3_lantern_frame5.mp4": [
      { start: 0.0, end: 9.5, text: "إذا قمنا بنقل جميع المقاعد المركزية نحو مواقد الجدار الخارجي الآن، يمكننا إبقاء كل طفل دافئاً حتى الصباح." }
    ],
    "scene3_lantern_frame6.mp4": [
      { start: 1.0, end: 4.5, text: "<span class='sub-elder'>أنت تتحدث بحكمة يا بني. استمعوا جيداً!</span>" },
      { start: 4.6, end: 9.5, text: "<span class='sub-elder'>يجب إخلاء جميع المقاعد من الممر المركزي فوراً!</span>" }
    ],
    "scene3_lantern_frame7.mp4": [
      { start: 4.0, end: 9.0, text: "<span class='sub-narrator'>الرشاقة توفر المساحة لكي تقع الحقيقة دون أن تكسر الأرواح.</span>" }
    ],
    "scene3_lantern_frame8.mp4": [],
    "scene3_lantern_frame9.mp4": [],
    "scene3_lantern_frame10.mp4": [
      { start: 6.8, end: 9.8, text: "لم تكسرهم الحقيقة. بل أنقذتهم." }
    ],

    // --- scene3_silence ---
    "scene3_silence_frame1.mp4": [
      { start: 0.0, end: 7.0, text: "لم يقتصر البرد على تجميد جلد إيليان فحسب... بل اخترق روحه." }
    ],
    "scene3_silence_frame2.mp4": [
      { start: 0.0, end: 3.0, text: "إنهم لا يريدون النور." },
      { start: 5.0, end: 9.0, text: "أيقظهم، وسوف يمزقونك إرباً لمقاطعتك حلمهم." }
    ],
    "scene3_silence_frame3.mp4": [
      { start: 0.0, end: 4.5, text: "كانت رؤيته تحلل الواقع بوضوح مؤلم..." },
      { start: 5.5, end: 9.5, text: "كسر دقيق. 400 نبضة قلب متبقية." }
    ],
    "scene3_silence_frame4.mp4": [
      { start: 0.0, end: 5.0, text: "الخوف لديه طريقة لإسكات أوضح الإشارات البصرية..." },
      { start: 5.5, end: 9.5, text: "قبل أن يهرب صوت، سُرق صوته." }
    ],
    "scene3_silence_frame5.mp4": [
      { start: 0.0, end: 4.5, text: "لماذا تموت من أجل أشخاص يحتقرونك؟" },
      { start: 6.5, end: 9.5, text: "أدار ظهره للممر المركزي." }
    ],
    "scene3_silence_frame6.mp4": [
      { start: 0.0, end: 8.0, text: "500 نبضة... 400... 300..." }
    ],
    "scene3_silence_frame7.mp4": [
      { start: 1.5, end: 6.0, text: "الروابط التي تربطنا ليست قوية حقاً..." },
      { start: 6.5, end: 9.8, text: "...حتى لا يتبقى سوى صمت البرد." }
    ],

    // ==================== ENDINGS ====================
    "ending_stone_frame1.mp4": [
      { start: 5.0, end: 8.5, text: "ثقل صمتهم حطم العالم أخيراً." }
    ],
    "ending_stone_frame2.mp4": [
      { start: 3.0, end: 5.0, text: "لم يكذب الصبي." },
      { start: 5.2, end: 9.2, text: "لم تكن الحقيقة كلمة، بل هندسة للبقاء." }
    ],
    "ending_stone_frame3.mp4": [
      { start: 1.8, end: 4.0, text: "لقد دلتهم على الطريق." },
      { start: 5.0, end: 7.0, text: "ليس بالطريق الذي أرادوه..." },
      { start: 7.5, end: 9.5, text: "...بل بالطريق الذي كان قائماً." }
    ],
    "ending_stone_frame4.mp4": [],
    "ending_stone_frame5.mp4": [
      { start: 3.5, end: 5.2, text: "في ضوء الحقيقة..." },
      { start: 5.5, end: 9.5, text: "...رأوا أخيراً الصبي الذي ألقوه في الظلام." }
    ],
    "ending_stone_frame6.mp4": [
      { start: 1.0, end: 3.0, text: "<span class='sub-elder'>اغفر لنا.</span>" },
      { start: 5.0, end: 7.5, text: "لقد جرحهم اللسان الحاد بعمق..." },
      { start: 7.8, end: 9.8, text: "...فقط لكي يبدأ الشفاء." }
    ],
    "ending_stone_frame7.mp4": [
      { start: 0.8, end: 2.8, text: "هدأ الجبل وصمت." },
      { start: 3.0, end: 4.2, text: "صمدت الجدران." },
      { start: 4.5, end: 9.2, text: "ولكن في سكون القاعة الكبرى، استقرت عاصفة أخرى في قلب الصبي." }
    ],
    "ending_stone_frame8.mp4": [
      { start: 1.0, end: 4.8, text: "لسنوات، استخدم إيليان الحقيقة كنصل." },
      { start: 5.2, end: 7.0, text: "لقد كان على حق، نعم..." },
      { start: 7.2, end: 9.5, text: "...لكنه كان قاسياً." }
    ],
    "ending_stone_frame9.mp4": [
      { start: 4.8, end: 6.5, text: "أعطيتهم الحقيقة..." },
      { start: 7.0, end: 9.5, text: "...لكني أعطيتها لهم كجرح." }
    ],
    "ending_stone_frame10.mp4": [
      { start: 0.2, end: 1.5, text: "لقد أدرك ذلك حينها." },
      { start: 1.8, end: 5.0, text: "<span class='sub-narrator'>الحقيقة بلا لطف ليست سوى طريقة أخرى لكسر الإنسان.</span>" },
      { start: 5.5, end: 9.5, text: "<span class='sub-narrator'>لكن الحقيقة المغلفة بالرحمة... هي النوار الذي يرشدهم للمنزل.</span>" }
    ],
    "ending_stone_frame11.mp4": [],
    "ending_stone_frame12.mp4": [
      { start: 0.2, end: 2.8, text: "<span class='sub-narrator'>في المرة القادمة، سأقود بالنور.</span>" },
      { start: 3.0, end: 5.2, text: "ذهب الصبي ذو اللسان الحاد." },
      { start: 5.4, end: 9.5, text: "ومكانه شاب فهم أخيراً ثقل كلماته." }
    ],
    "ending_stone_frame13.mp4": [
      { start: 3.8, end: 7.5, text: "ولأول مرة في أوكهافن، لم تؤذ الحقيقة أحداً..." },
      { start: 7.8, end: 9.5, text: "...بل شفاتهم." }
    ],
    "ending_lantern_frame1.mp4": [
      { start: 2.5, end: 4.2, text: "لم تكسر الحقيقة المنزل." },
      { start: 4.3, end: 7.2, text: "بل كشفت أين كان المنزل مكسوراً بالفعل." }
    ],
    "ending_lantern_frame2.mp4": [
      { start: 1.5, end: 4.0, text: "في تلك اللحظة، لم يروا نذير شؤم..." },
      { start: 4.1, end: 6.5, text: "...بل راعياً للنور." }
    ],
    "ending_lantern_frame3.mp4": [
      { start: 3.5, end: 5.5, text: "<span class='sub-elder'>لقد أنقذت حياتنا يا إيليان.</span>" },
      { start: 5.6, end: 9.5, text: "<span class='sub-elder'>كنا عميان عن التعفن، لكنك أعطيتنا العيون لنرى.</span>" }
    ],
    "ending_lantern_frame4.mp4": [],
    "ending_lantern_frame5.mp4": [
      { start: 0.5, end: 3.0, text: "<span class='sub-narrator'>الحقيقة نجمة هادية وليست نصلًا.</span>" },
      { start: 3.1, end: 5.5, text: "<span class='sub-narrator'>عندما تُقدم بلطف، فإنها لا تجرح...</span>" },
      { start: 5.6, end: 8.8, text: "<span class='sub-narrator'>...بل تنير الطريق إلى الوطن.</span>" }
    ],
    "ending_lantern_frame6.mp4": [
      { start: 1.0, end: 5.5, text: "وهكذا، قاده طريق الفانوس בדיוק إلى حيث يجب أن يكون." },
      { start: 6.0, end: 9.2, text: "ليس إلى وجهة... بل إلى جار." }
    ],
    "ending_silence_frame1.mp4": [],
    "ending_silence_frame2.mp4": [
      { start: 0.8, end: 2.5, text: "كان آمناً." },
      { start: 2.6, end: 4.0, text: "كان كاملاً." },
      { start: 4.2, end: 8.0, text: "كان ملعوناً... لقد كان ملعوناً." }
    ],
    "ending_silence_frame3.mp4": [
      { start: 5.0, end: 8.5, text: "<span class='sub-shout'>لقد تركت السقف يسحقهم...</span>" }
    ],
    "ending_silence_frame3_b_snow_shiver.mp4": [],
    "ending_silence_frame4.mp4": [
      { start: 4.0, end: 6.2, text: "طريق الصمت طويل..." },
      { start: 6.3, end: 9.0, text: "...ويسلكه إيليان وحده." }
    ]
  },
  ru: {
    "intro_00_elian_awakening.mp4": [
      { start: 1.0, end: 3.4, text: "Я не видел, чего желали люди." },
      { start: 3.6, end: 6.0, text: "Я видел только то, что было." }
    ],
    "intro_02_village_outcast.mp4": [
      { start: 0.8, end: 2.8, text: "<span class='sub-shout'>Посмотрите на него! Это он!</span>" },
      { start: 3.0, end: 6.0, text: "<span class='sub-shout'>Выходи! </span>" }
    ],
    "intro_03_cake_unveiling.mp4": [
      { start: 1.8, end: 5.0, text: "<span class='sub-elder'>Граждане! Станьте свидетелями вершины моей карьеры!</span>" },
      { start: 5.2, end: 8.5, text: "<span class='sub-elder'>Шесть месяцев сахара, пота и души!</span>" }
    ],
    "intro_04_cake_crack_decision.mp4": [
      { start: 1.5, end: 4.8, text: "Острый глаз видит трещину до того, как произойдет крушение..." },
      { start: 5.0, end: 8.8, text: "...но мудрое сердце знает, как починить его без единого звука." }
    ],
    "scene1_stone_frame1.mp4": [
      { start: 0.0, end: 3.5, text: "В деревне Оукхейвен каждому звуку было отведено свое место." },
      { start: 3.8, end: 6.8, text: "Звон наковальни, пение жаворонка..." },
      { start: 7.0, end: 9.5, text: "...и молчание Элиана." }
    ],
    "scene1_stone_frame2.mp4": [
      { start: 0.0, end: 2.5, text: "Элиан нечасто говорил." },
      { start: 2.8, end: 5.0, text: "Не потому, что ему нечего было сказать..." },
      { start: 5.2, end: 9.5, text: "...но потому что его слова... ну, они были другими." }
    ],
    "scene1_stone_frame3.mp4": [
      { start: 0.0, end: 2.5, text: "<span class='sub-elder'>Моя работа... уничтожена!</span>" },
      { start: 2.8, end: 5.5, text: "<span class='sub-elder'>Твои слова — тяжелое бремя, Элиан.</span>" },
      { start: 5.6, end: 9.5, text: "В Оукхейвене правда Элиана ощущалась как тяжесть... как тень, нависшая над их радостью." }
    ],
    "scene1_stone_shards_reaction.mp4": [
      { start: 2.0, end: 4.5, text: "Его голос не разносился по ветру..." },
      { start: 4.8, end: 6.8, text: "...он прорезал его." }
    ],
    "scene1_lantern_frame1.mp4": [
      { start: 0.8, end: 4.8, text: "Благодать — это рука, которая поддерживает мир, когда он начинает крениться..." },
      { start: 5.5, end: 8.8, text: "...часто еще до того, как кто-либо заметит наклон." }
    ],
    "scene1_lantern_frame2_alt_tray.mp4": [
      { start: 0.8, end: 4.2, text: "Господин Альгениб, пчелы-восководы плачут в южном углу." },
      { start: 4.5, end: 8.8, text: "Если вы сейчас подкрепите его деревянным подносом, никто никогда не узнает, что он прогнулся." }
    ],
    "scene1_lantern_frame3.mp4": [
      { start: 4.5, end: 9.0, text: "<span class='sub-elder'>О, звезды... Спасибо, парень. Как раз вовремя.</span>" }
    ],
    "scene1_lantern_frame4.mp4": [
      { start: 2.0, end: 5.0, text: "<span class='sub-narrator'>Настоящая сила не нуждается в зрителях.</span>" },
      { start: 5.2, end: 9.0, text: "<span class='sub-narrator'>Его наградой является стабильность, которую он оставляет после себя.</span>" }
    ],
    "scene1_silence_frame1.mp4": [
      { start: 1.8, end: 5.5, text: "Но прошлое — это кляп, который никогда не ослабевает." }
    ],
    "scene1_silence_frame2.mp4": [
      { start: 0.0, end: 3.0, text: "Он увидел линии разлома раньше всех остальных." },
      { start: 4.0, end: 5.2, text: "Простой наклон..." },
      { start: 5.4, end: 8.0, text: "Все можно было исправить одним словом." }
    ],
    "scene1_silence_frame3.mp4": [
      { start: 3.8, end: 7.5, text: "Безопасность — самое тяжелое бремя для труса." }
    ],
    "scene1_silence_frame4.mp4": [
      { start: 0.5, end: 3.5, text: "<span class='sub-shout'>Я больше не могу в этом участвовать...</span>" }
    ],
    "silence_bridge_mine_entrance.mp4": [
      { start: 5.8, end: 7.8, text: "Дерево помнит вес." },
      { start: 8.0, end: 9.8, text: "А ты, Элиан?" }
    ],
    "scene2_stone_frame1.mp4": [
      { start: 0.0, end: 3.8, text: "Зима была суровой, и Большой зал был единственной клеткой, в которой она могла находиться." },
      { start: 4.0, end: 8.0, text: "Но внутри назревал другой вид гнили." }
    ],
    "scene2_stone_frame2.mp4": [
      { start: 0.8, end: 3.5, text: "Элиан слышал то, что другие игнорировали." },
      { start: 3.8, end: 9.5, text: "Звук фундамента, рушащегося под тяжестью собственного молчания." }
    ],
    "scene2_stone_frame4.mp4": [
      { start: 0.8, end: 3.5, text: "<span class='sub-shout'>Балка! Она прогнила!</span>" },
      { start: 3.8, end: 8.0, text: "<span class='sub-shout'>Разве ты не слышишь? Мы должны уйти, пока крыша не прогнулась под снегом!</span>" }
    ],
    "scene2_stone_frame5.mp4": [
      { start: 0.8, end: 2.5, text: "<span class='sub-elder sub-shout'>Молчать, мальчишка!</span>" },
      { start: 2.8, end: 5.0, text: "<span class='sub-elder'>Вы приносите дурные предзнаменования, когда нам нужна надежда.</span>" },
      { start: 5.2, end: 9.5, text: "<span class='sub-elder'>Твой язык такой же острый, как лед снаружи, и такой же холодный!</span>" }
    ],
    "scene2_stone_frame6.mp4": [
      { start: 1.0, end: 2.5, text: "<span class='sub-narrator'>Мудрость</span>" },
      { start: 3.5, end: 9.0, text: "<span class='sub-narrator'>Мудрость слышит шепот разрушения, прежде чем он превратится в рёв.</span>" }
    ],
    "scene2_lantern_frame2.mp4": [
      { start: 3.0, end: 5.5, text: "<span class='sub-narrator'>Старейшина Орус, простите за вторжение.</span>" },
      { start: 5.8, end: 8.8, text: "<span class='sub-narrator'>Сегодня ночью ветер изменит направление.</span>" }
    ],
    "scene2_lantern_frame3.mp4": [
      { start: 0.0, end: 3.0, text: "Сегодня вечером в центре сильные сквозняки." },
      { start: 3.5, end: 8.5, text: "Возможно, семьи найдут больше тепла и уюта у гобеленов по краям?" }
    ],
    "scene2_lantern_frame4.mp4": [
      { start: 2.0, end: 4.5, text: "<span class='sub-elder'>Нам тепло, и мы целы.</span>" },
      { start: 4.8, end: 9.5, text: "<span class='sub-elder'>Руководить — значит вести других к безопасности... так мягко, чтобы они думали, что сами выбрали этот путь.</span>" }
    ],
    "scene2_silence_frame1.mp4": [
      { start: 0.8, end: 2.8, text: "Не думаю, что мы можем это остановить." },
      { start: 3.0, end: 5.2, text: "Что, если это всё разрушит?" },
      { start: 5.5, end: 8.5, text: "<span class='sub-shout'>Выхода нет... Мы здесь в ловушке!</span>" }
    ],
    "scene2_silence_frame2.mp4": [
      { start: 3.0, end: 5.0, text: "Торт был предупреждением." },
      { start: 5.2, end: 7.5, text: "Зал... Зал был ценой." }
    ],
    "scene2_silence_frame4.mp4": [
      { start: 1.8, end: 4.2, text: "<span class='sub-elder sub-shout'>Все к дверям!</span>" },
      { start: 4.5, end: 7.5, text: "<span class='sub-elder sub-shout'>Быстрее! Быстрее!</span>" }
    ],
    "scene2_silence_frame5.mp4": [
      { start: 1.8, end: 4.8, text: "Свет показал правду. Древесина была мягкой." },
      { start: 5.0, end: 7.0, text: "Даже ребёнок мог это заметить." },
      { start: 7.2, end: 9.0, text: "Это сделал трус." }
    ],
    "scene2_silence_frame7.mp4": [
      { start: 1.5, end: 6.0, text: "Он выбрал молчание могилы, еще до того, как тела остыли." }
    ],
    "scene3_stone_frame1.mp4": [
      { start: 0.0, end: 4.0, text: "<span class='sub-shout'>Посмотрите вверх, слепые глупцы! Ваше убежище — это открытая могила!</span>" },
      { start: 4.5, end: 9.5, text: "Сердцевина этого дуба — не что иное, как опилки и труха от термитов!" }
    ],
    "scene3_stone_frame5.mp4": [
      { start: 0.0, end: 3.5, text: "<span class='sub-shout'>Физике плевать на ваше святилище!</span>" },
      { start: 4.0, end: 9.0, text: "<span class='sub-shout'>Освободите центральный зал или умрите под ним!</span>" }
    ],
    "scene3_stone_frame6.mp4": [
      { start: 0.0, end: 4.5, text: "<span class='sub-elder'>Ты! Предвестник разрухи! Ты уничтожил урожай Пекаря!</span>" },
      { start: 5.0, end: 9.5, text: "<span class='sub-elder'>А теперь вы осмеливаетесь извергать свои зловещие предзнаменования в нашем единственном убежище?</span>" }
    ],
    "scene3_stone_frame7.mp4": [
      { start: 0.0, end: 4.0, text: "<span class='sub-elder sub-shout'>Хватайте демона! Бросьте его в метель!</span>" }
    ],
    "scene3_stone_frame8.mp4": [
      { start: 0.0, end: 4.0, text: "<span class='sub-shout'>Держи его! Не дай ему сбежать!</span>" },
      { start: 4.5, end: 9.0, text: "<span class='sub-shout'>Заставьте его заплатить! Никакой пощады!</span>" }
    ],
    "scene3_stone_frame9.mp4": [
      { start: 3.0, end: 9.0, text: "<span class='sub-narrator'>Правда — это лезвие... Если держать его неправильно, оно порежет и того, кто его держит, и того, кто смотрит.</span>" }
    ],
    "scene3_lantern_frame2.mp4": [
      { start: 4.5, end: 7.0, text: "Он видел гниль..." },
      { start: 7.1, end: 9.5, text: "Он видел конец." }
    ],
    "scene3_lantern_frame3.mp4": [
      { start: 0.0, end: 5.5, text: "Старейшина, простите за беспокойство, но сегодня северный ветер жестоко играет с балками." },
      { start: 5.6, end: 9.0, text: "<span class='sub-elder'>Ветер? Говори прямо, мальчик!</span>" }
    ],
    "scene3_lantern_frame4.mp4": [
      { start: 0.0, end: 4.5, text: "Северная тяга проходит через пласт дымохода..." },
      { start: 5.0, end: 9.5, text: "Семьи на центральных скамейках начинают дрожать." }
    ],
    "scene3_lantern_frame5.mp4": [
      { start: 0.0, end: 9.5, text: "Если мы сейчас передвинем все центральные скамьи к очагам у внешней стены, мы сможем согреть всех детей до утра." }
    ],
    "scene3_lantern_frame6.mp4": [
      { start: 1.0, end: 4.5, text: "<span class='sub-elder'>Ты говоришь мудро, парень. Слушай внимательно!</span>" },
      { start: 4.6, end: 9.5, text: "<span class='sub-elder'>Все должны немедленно освободить центральный проход!</span>" }
    ],
    "scene3_lantern_frame7.mp4": [
      { start: 4.0, end: 9.0, text: "<span class='sub-narrator'>Благодать дает возможность истине войти в нашу жизнь, не разрушая ее.</span>" }
    ],
    "scene3_lantern_frame8.mp4": [
      { start: 6.8, end: 9.8, text: "Правда не сломила их. Она спасла их." }
    ],
    "scene3_silence_frame1.mp4": [
      { start: 0.0, end: 7.0, text: "Холод не просто пробирал кожу Элиана... Он проникал в его душу." }
    ],
    "scene3_silence_frame2.mp4": [
      { start: 0.0, end: 3.0, text: "Они не хотят света." },
      { start: 5.0, end: 9.0, text: "Разбудите их, и они разорвут вас на части за то, что вы помешали их сну." }
    ],
    "scene3_silence_frame3.mp4": [
      { start: 0.0, end: 4.5, text: "Его видение анализировало реальность с мучительной ясностью..." },
      { start: 5.5, end: 9.5, text: "Трещина. Осталось 400 ударов сердца." }
    ],
    "scene3_silence_frame4.mp4": [
      { start: 0.0, end: 5.0, text: "Страх способен заглушить даже самые смелые визуальные сигналы..." },
      { start: 5.5, end: 9.5, text: "Прежде чем он успел издать звук, его голос был украден." }
    ],
    "scene3_silence_frame5.mp4": [
      { start: 0.0, end: 4.5, text: "Зачем умирать за людей, которые тебя презирают?" },
      { start: 6.5, end: 9.5, text: "Он повернулся спиной к центральному проходу." }
    ],
    "scene3_silence_frame6.mp4": [
      { start: 0.0, end: 8.0, text: "500 ударов сердца... 400... 300..." }
    ],
    "scene3_silence_frame7.mp4": [
      { start: 1.5, end: 6.0, text: "Узы, которые связывают, никогда не бывают по-настоящему крепкими..." },
      { start: 6.5, end: 9.8, text: "Пока не останется ничего, кроме холодной тишины." }
    ],
    "ending_stone_frame1.mp4": [
      { start: 5.0, end: 8.5, text: "Бремя их молчания, наконец, разрушило мир." }
    ],
    "ending_stone_frame2.mp4": [
      { start: 3.0, end: 5.0, text: "Мальчик не лгал." },
      { start: 5.2, end: 9.2, text: "Истина — это не слово, а геометрия выживания." }
    ],
    "ending_stone_frame3.mp4": [
      { start: 1.8, end: 4.0, text: "Она указала им путь." },
      { start: 5.0, end: 7.0, text: "Не так, как они хотели..." },
      { start: 7.5, end: 9.5, text: "...но так было." }
    ],
    "ending_stone_frame4.mp4": [
      { start: 3.5, end: 5.2, text: "В Свете Истины" },
      { start: 5.5, end: 9.5, text: "...они наконец увидели мальчика, которого бросили в темноту." }
    ],
    "ending_stone_frame6.mp4": [
      { start: 1.0, end: 3.0, text: "<span class='sub-elder'>Так что прости нас.</span>" },
      { start: 5.0, end: 7.5, text: "Острый язык глубоко их порезал..." },
      { start: 7.8, end: 9.8, text: "...только так могло начаться исцеление." }
    ],
    "ending_stone_frame7.mp4": [
      { start: 0.8, end: 2.8, text: "Гора затихла." },
      { start: 3.0, end: 4.2, text: "Стены выдержали." },
      { start: 4.5, end: 9.2, text: "Но в тишине большого зала в сердце мальчика назревала буря иного рода." }
    ],
    "ending_stone_frame8.mp4": [
      { start: 1.0, end: 4.8, text: "Годами Элиан использовал правду как клинок." },
      { start: 5.2, end: 7.0, text: "Он был прав, да..." },
      { start: 7.2, end: 9.5, text: "...но он был жесток." }
    ],
    "ending_stone_frame9.mp4": [
      { start: 4.8, end: 6.5, text: "Я сказал им правду..." },
      { start: 7.0, end: 9.5, text: "...но я подарил им его как рану." }
    ],
    "ending_stone_frame10.mp4": [
      { start: 0.2, end: 1.5, text: "Тогда он это увидел." },
      { start: 1.8, end: 5.0, text: "<span class='sub-narrator'>Правда без милосердия — это просто еще один способ сломить человека.</span>" },
      { start: 5.5, end: 9.5, text: "<span class='sub-narrator'>Но правда, сказанная с добротой... это свет, который ведет их домой.</span>" }
    ],
    "ending_stone_frame11.mp4": [
      { start: 0.2, end: 2.8, text: "<span class='sub-narrator'>В следующий раз я буду вести вас со светом.</span>" },
      { start: 3.0, end: 5.2, text: "Мальчика с зазубренным языком не было." },
      { start: 5.4, end: 9.5, text: "На его месте сидел молодой человек, который наконец понял вес своих слов." }
    ],
    "ending_stone_frame13.mp4": [
      { start: 3.8, end: 7.5, text: "И впервые в Оукхейвене правда не причинила боли..." },
      { start: 7.8, end: 9.5, text: "...она зажила." }
    ],
    "ending_lantern_frame1.mp4": [
      { start: 2.5, end: 4.2, text: "Правда не разрушила дом." },
      { start: 4.3, end: 7.2, text: "Она лишь показала, где дом уже был разрушен." }
    ],
    "ending_lantern_frame2.mp4": [
      { start: 1.5, end: 4.0, text: "В тот момент они увидели не предвестника гибели..." },
      { start: 4.1, end: 6.5, text: "...а пастырем света." }
    ],
    "ending_lantern_frame3.mp4": [
      { start: 3.5, end: 5.5, text: "<span class='sub-elder'>Ты спас нам жизнь, Элиан.</span>" },
      { start: 5.6, end: 9.5, text: "<span class='sub-elder'>Мы были слепы к гнили, но ты дал нам глаза, чтобы видеть.</span>" }
    ],
    "ending_lantern_frame4.mp4": [
      { start: 0.5, end: 3.0, text: "<span class='sub-narrator'>Истина — это путеводная звезда, а не клинок.</span>" },
      { start: 3.1, end: 5.5, text: "<span class='sub-narrator'>Когда это сказано с добротой, это не ранит...</span>" },
      { start: 5.6, end: 8.8, text: "<span class='sub-narrator'>...она освещает путь домой.</span>" }
    ],
    "ending_lantern_frame6.mp4": [
      { start: 1.0, end: 5.5, text: "И вот, путь фонарей привел его именно туда, где ему нужно было быть." },
      { start: 6.0, end: 9.2, text: "Не в пункт назначения... а к соседу." }
    ],
    "ending_silence_frame1.mp4": [
      { start: 0.8, end: 2.5, text: "Он был в безопасности." },
      { start: 2.6, end: 4.0, text: "Он был целым." },
      { start: 4.2, end: 8.0, text: "Он был проклят... Он был проклят." }
    ],
    "ending_silence_frame3.mp4": [
      { start: 5.0, end: 8.5, text: "<span class='sub-shout'>Я позволил крыше раздавить их...</span>" }
    ],
    "ending_silence_frame3_b_snow_shiver.mp4": [],
    "intro_01_childhood_curse.mp4": [
      { start: 1.0, end: 3.4, text: "Я не видел, чего желали люди." },
      { start: 3.6, end: 6.0, text: "Я видел только то, что было." }
    ],
    "scene2_stone_frame3.mp4": [
      { start: 0.8, end: 3.5, text: "Элиан слышал то, что другие игнорировали." },
      { start: 3.8, end: 9.5, text: "Звук фундамента, рушащегося под тяжестью собственного молчания." }
    ],
    "scene2_lantern_frame1.mp4": [
      { start: 1.0, end: 2.5, text: "<span class='sub-narrator'>Мудрость</span>" },
      { start: 3.5, end: 9.0, text: "<span class='sub-narrator'>Мудрость слышит шепот разрушения, прежде чем он превратится в рёв.</span>" }
    ],
    "scene2_lantern_frame5.mp4": [
      { start: 2.0, end: 4.5, text: "<span class='sub-elder'>Нам тепло, и мы целы.</span>" },
      { start: 4.8, end: 9.5, text: "<span class='sub-elder'>Вести — значит направлять других к безопасности... так мягко, чтобы они думали, что сами выбрали этот путь.</span>" }
    ],
    "scene2_silence_frame3.mp4": [
      { start: 3.0, end: 5.0, text: "Торт был предупреждением." },
      { start: 5.2, end: 7.5, text: "Зал... Зал был ценой." }
    ],
    "scene2_silence_frame6.mp4": [
      { start: 1.8, end: 4.8, text: "Свет показал правду. Дерево было мягким." },
      { start: 5.0, end: 7.0, text: "Это даже ребёнок заметил бы." },
      { start: 7.2, end: 9.0, text: "Это сделал трус." }
    ],
    "scene3_stone_frame2.mp4": [
    ],
    "scene3_stone_frame3.mp4": [
    ],
    "scene3_stone_frame4.mp4": [
      { start: 0.0, end: 4.0, text: "<span class='sub-shout'>Посмотрите вверх, слепые глупцы! Ваше убежище — это открытая могила!</span>" },
      { start: 4.5, end: 9.5, text: "Сердцевина этого дуба — не что иное, как опилки и гниль от термитов!" }
    ],
    "scene3_stone_frame10.mp4": [
    ],
    "scene3_stone_frame11.mp4": [
    ],
    "scene3_lantern_frame1.mp4": [
      { start: 3.0, end: 9.0, text: "<span class='sub-narrator'>Правда — это клинок... Если держать его неправильно, он порежет и того, кто им владеет, и того, кто его видит.</span>" }
    ],
    "scene3_lantern_frame9.mp4": [
    ],
    "scene3_lantern_frame10.mp4": [
      { start: 6.8, end: 9.8, text: "Правда не сломала их. Она спасла их." }
    ],
    "ending_stone_frame5.mp4": [
      { start: 3.5, end: 5.2, text: "В Свете Истины" },
      { start: 5.5, end: 9.5, text: "...они наконец увидели мальчика, которого бросили во тьму." }
    ],
    "ending_stone_frame12.mp4": [
      { start: 0.2, end: 2.8, text: "<span class='sub-narrator'>В следующий раз я буду вести вас со светом.</span>" },
      { start: 3.0, end: 5.2, text: "Мальчик с зазубренным языком исчез." },
      { start: 5.4, end: 9.5, text: "На его месте сидел молодой человек, который наконец понял вес своих слов." }
    ],
    "ending_lantern_frame5.mp4": [
      { start: 0.5, end: 3.0, text: "<span class='sub-narrator'>Истина — это путеводная звезда, а не клинок.</span>" },
      { start: 3.1, end: 5.5, text: "<span class='sub-narrator'>Когда это сказано с добротой, это не ранит...</span>" },
      { start: 5.6, end: 8.8, text: "<span class='sub-narrator'>...она освещает путь домой.</span>" }
    ],
    "ending_silence_frame2.mp4": [
      { start: 0.8, end: 2.5, text: "Он был в безопасности." },
      { start: 2.6, end: 4.0, text: "Он был целым." },
      { start: 4.2, end: 8.0, text: "Он был проклят... Он был проклят." }
    ],
    "ending_silence_frame4.mp4": [
      { start: 4.0, end: 6.2, text: "Путь к Тишине — долгий..." },
      { start: 6.3, end: 9.0, text: "...а Элиан проходит его в одиночку." }
    ],
  }
};

const gameTranslations = {
  en: {
    gameTitle: "The Boy With The Jagged Tongue",
    exitGame: "Exit Game",
    systemUpToDate: "SYSTEM UP TO DATE",
    releaseArchive: "Open release archive",
    mainMenuActions: "Main menu actions",
    mainMenu: "Main menu",
    pauseMenuActions: "Pause menu actions",
    detectingPlatform: "DETECTING PLATFORM...",
    platformDesktop: "DESKTOP CLIENT // SYSTEM ACTIVE",
    platformMobile: "MOBILE CLIENT // CAPACITOR",
    platformWeb: "WEB BROWSER // CLIENT",
    enableFullscreen: "ENABLE",
    disableFullscreen: "DISABLE",
    creditRights: "© 2026 ALL RIGHTS RESERVED",
    storyVideo: "Story video",
    shutdownTag: "STATUS // SYSTEM DISCONNECTED",
    shutdownTitle: "SESSION TERMINATED",
    shutdownMessage: "All local states and psych-matrices saved.<br>You can safely close this browser tab now.",
    rebootSession: "REBOOT SESSION",
    decisionPending: "DECISION PENDING //",
    selectAction: "SELECT ACTION",
    systemSuspended: "SYSTEM // SUSPENDED",
    configurationTag: "CONFIGURATION // SYSTEM",
    fullscreen: "FULLSCREEN",
    borderless: "BORDERLESS",
    windowed: "WINDOWED",
    toggleFullscreen: "TOGGLE FULLSCREEN",
    cinematic: "CINEMATIC",
    performance: "PERFORMANCE",
    atmos3d: "ATMOS 3D",
    mono: "MONO",
    darkMode: "DARK MODE",
    labLight: "LAB LIGHT",
    selectLanguage: "Select language",
    creditsTag: "PRODUCTION ARCHIVE // PERSONNEL",
    creditConcept: "ORIGINAL CONCEPT & DIRECTION",
    creditWriter: "LEAD WRITER & NARRATIVE ARCHITECT",
    creditCinematography: "CINEMATOGRAPHY & FMV PRODUCTION",
    creditEngineer: "LEAD SOFTWARE ENGINEER & HUD SYSTEM",
    creditAudio: "AUDIO DIRECTION & SPATIAL SOUND DESIGN",
    creditPsychology: "PSYCHOANALYSIS MATRIX CONSULTANT",
    creditProduced: "PRODUCED BY",
    rotateDevice: "PLEASE ROTATE YOUR DEVICE",
    rotateDeviceHint: "Rotate to landscape mode for the best cinematic FMV experience.",
    loading: "LOADING",
    newGame: "NEW GAME",
    continue: "CONTINUE",
    settings: "SETTINGS",
    credits: "CREDITS",
    terminate: "TERMINATE // EXIT",
    releaseLog: "BUILD //",
    pause: "PAUSE",
    pauseTitle: "GAME PAUSED",
    resume: "RESUME",
    quitToTitle: "QUIT TO TITLE",
    applyClose: "APPLY & CLOSE",
    acknowledge: "ACKNOWLEDGE",
    return: "RETURN",
    releaseArchive: "RELEASE ARCHIVE",
    changelogTitle: "RELEASE ARCHIVE",
    changelogTag: "SYSTEM CHANGELOG // PROTOCOL",
    quitWarningTag: "WARNING // SYSTEM SHUTDOWN",
    quitWarningTitle: "TERMINATE SIMULATION?",
    quitDialogText: "Any unsaved narrative states within this node will be synchronized.<br>Are you sure you want to sever the neural link and exit?",
    abortReturn: "ABORT // RETURN",
    severTerminate: "SEVER // TERMINATE",
    creditsTitle: "PROJECT CREDITS",
    achievements: "ACHIEVEMENTS",
    achievementsArchive: "SYSTEM // RECORDS & TROPHIES",
    achievementUnlocked: "ACHIEVEMENT UNLOCKED //",
    language: "LANGUAGE",
    languageSub: "INTERFACE & SUBTITLES LOCALE",
    visualTheme: "VISUAL THEME",
    themeSub: "DARK CYBER // LAB LIGHT",
    modePrompt: "SELECT SIMULATION PROTOCOL // GAME MODE",
    classic: "MODE // CLASSIC",
    classicDesc: "Standard pace. Timer bar remains static.",
    timed: "MODE // TIMED (10s)",
    timedDesc: "10s timer. Silence is chosen when time expires.",
    random: "MODE // RANDOM (5s)",
    randomDesc: "5s timer. A random path is chosen when time expires.",
    timelineComplete: "TIMELINE TERMINATED // ANALYSIS COMPLETE",
    matrixEvaluation: "PSYCHOLOGICAL MATRIX EVALUATION",
    mainMenu: "MAIN MENU",
    returnTitle: "Return to Title Screen"
  },
  ar: {
    gameTitle: "الصبي ذو اللسان المسنن",
    storyVideo: "فيديو القصة",
    exitGame: "الخروج من اللعبة",
    systemUpToDate: "النظام محدث",
    releaseArchive: "فتح أرشيف الإصدارات",
    mainMenuActions: "أوامر القائمة الرئيسية",
    mainMenu: "القائمة الرئيسية",
    pauseMenuActions: "أوامر قائمة الإيقاف",
    detectingPlatform: "جارٍ اكتشاف المنصة...",
    platformDesktop: "عميل سطح المكتب // النظام نشط",
    platformMobile: "عميل الهاتف // Capacitor",
    platformWeb: "متصفح الويب // العميل",
    enableFullscreen: "تفعيل",
    disableFullscreen: "تعطيل",
    creditRights: "© 2026 جميع الحقوق محفوظة",
    shutdownTag: "الحالة // تم فصل النظام",
    shutdownTitle: "انتهت الجلسة",
    shutdownMessage: "تم حفظ جميع الحالات المحلية والمصفوفات النفسية.<br>يمكنك إغلاق علامة تبويب المتصفح بأمان الآن.",
    rebootSession: "إعادة تشغيل الجلسة",
    decisionPending: "قرار معلّق //",
    selectAction: "اختر إجراءً",
    systemSuspended: "النظام // معلّق",
    configurationTag: "الإعدادات // النظام",
    fullscreen: "ملء الشاشة",
    borderless: "بلا حدود",
    windowed: "نافذة",
    toggleFullscreen: "تبديل ملء الشاشة",
    cinematic: "سينمائي",
    performance: "الأداء",
    atmos3d: "صوت محيطي ثلاثي الأبعاد",
    mono: "أحادي",
    darkMode: "الوضع المظلم",
    labLight: "إضاءة المختبر",
    selectLanguage: "اختر اللغة",
    creditsTag: "أرشيف الإنتاج // فريق العمل",
    creditConcept: "الفكرة الأصلية والإخراج",
    creditWriter: "الكاتب الرئيسي ومهندس السرد",
    creditCinematography: "التصوير والإنتاج السينمائي",
    creditEngineer: "مهندس البرمجيات الرئيسي ونظام الواجهة",
    creditAudio: "الإشراف الصوتي وتصميم الصوت المكاني",
    creditPsychology: "مستشار مصفوفة التحليل النفسي",
    creditProduced: "إنتاج",
    rotateDevice: "يرجى تدوير جهازك",
    rotateDeviceHint: "دوّر الجهاز إلى الوضع الأفقي لأفضل تجربة سينمائية.",
    loading: "جار التحميل",
    newGame: "لعبة جديدة",
    continue: "متابعة",
    settings: "الإعدادات",
    credits: "فريق العمل",
    terminate: "إنهاء // خروج",
    releaseLog: "الإصدار //",
    pause: "إيقاف مؤقت",
    pauseTitle: "اللعبة متوقفة",
    resume: "استئناف",
    quitToTitle: "العودة للعنوان",
    applyClose: "تطبيق وإغلاق",
    acknowledge: "تأكيد",
    return: "عودة",
    releaseArchive: "أرشيف الإصدارات",
    changelogTitle: "أرشيف الإصدارات",
    changelogTag: "سجل تغييرات النظام // بروتوكول",
    quitWarningTag: "تحذير // إيقاف تشغيل النظام",
    quitWarningTitle: "إنهاء المحاكاة؟",
    quitDialogText: "ستتم مزامنة أي حالات سردية غير محفوظة داخل هذه العقدة.<br>هل أنت متأكد من رغبتك في قطع الرابط العصبي والخروج؟",
    abortReturn: "إلغاء // رجوع",
    severTerminate: "قطع // إنهاء",
    creditsTitle: "فريق المشروع",
    achievements: "الإنجازات",
    achievementsArchive: "النظام // السجلات والجوائز",
    achievementUnlocked: "تم فتح إنجاز //",
    language: "اللغة",
    languageSub: "لغة الواجهة والترجمات",
    visualTheme: "المظهر البصري",
    themeSub: "سايبر مظلم // مختبر مضيء",
    modePrompt: "اختر بروتوكول المحاكاة // وضع اللعب",
    classic: "الوضع // كلاسيك",
    classicDesc: "إيقاع قياسي بدون مؤقت.",
    timed: "الوضع // مؤقت (10 ثوانٍ)",
    timedDesc: "مهلة 10 ثوانٍ، ويُختار الصمت عند انتهائها.",
    random: "الوضع // عشوائي (5 ثوانٍ)",
    randomDesc: "مهلة 5 ثوانٍ، ويُختار مسار عشوائي عند انتهائها.",
    timelineComplete: "انتهى المسار الزمني // اكتمل التحليل",
    matrixEvaluation: "تقييم المصفوفة النفسية",
    mainMenu: "القائمة الرئيسية",
    returnTitle: "العودة إلى شاشة العنوان"
  },
  ru: {
    gameTitle: "Мальчик с зазубренным языком",
    storyVideo: "Видео истории",
    exitGame: "Выйти из игры",
    systemUpToDate: "СИСТЕМА АКТУАЛЬНА",
    releaseArchive: "Открыть архив версий",
    mainMenuActions: "Действия главного меню",
    mainMenu: "Главное меню",
    pauseMenuActions: "Действия меню паузы",
    detectingPlatform: "ОПРЕДЕЛЕНИЕ ПЛАТФОРМЫ...",
    platformDesktop: "КЛИЕНТ ПК // СИСТЕМА АКТИВНА",
    platformMobile: "МОБИЛЬНЫЙ КЛИЕНТ // CAPACITOR",
    platformWeb: "БРАУЗЕР // КЛИЕНТ",
    enableFullscreen: "ВКЛЮЧИТЬ",
    disableFullscreen: "ВЫКЛЮЧИТЬ",
    creditRights: "© 2026 ВСЕ ПРАВА ЗАЩИЩЕНЫ",
    shutdownTag: "СТАТУС // СИСТЕМА ОТКЛЮЧЕНА",
    shutdownTitle: "СЕАНС ЗАВЕРШЁН",
    shutdownMessage: "Все локальные состояния и психоматрицы сохранены.<br>Теперь вкладку браузера можно безопасно закрыть.",
    rebootSession: "ПЕРЕЗАПУСТИТЬ СЕАНС",
    decisionPending: "РЕШЕНИЕ ОЖИДАЕТСЯ //",
    selectAction: "ВЫБЕРИТЕ ДЕЙСТВИЕ",
    systemSuspended: "СИСТЕМА // ПРИОСТАНОВЛЕНА",
    configurationTag: "КОНФИГУРАЦИЯ // СИСТЕМА",
    fullscreen: "ПОЛНЫЙ ЭКРАН",
    borderless: "БЕЗ РАМКИ",
    windowed: "ОКОННЫЙ РЕЖИМ",
    toggleFullscreen: "ПЕРЕКЛЮЧИТЬ ПОЛНЫЙ ЭКРАН",
    cinematic: "КИНОМАТИЧЕСКИЙ",
    performance: "ПРОИЗВОДИТЕЛЬНОСТЬ",
    atmos3d: "ATMOS 3D",
    mono: "МОНО",
    darkMode: "ТЁМНЫЙ РЕЖИМ",
    labLight: "СВЕТ ЛАБОРАТОРИИ",
    selectLanguage: "Выберите язык",
    creditsTag: "АРХИВ ПРОИЗВОДСТВА // КОМАНДА",
    creditConcept: "ОРИГИНАЛЬНАЯ ИДЕЯ И РЕЖИССУРА",
    creditWriter: "ГЛАВНЫЙ СЦЕНАРИСТ И АРХИТЕКТОР ПОВЕСТВОВАНИЯ",
    creditCinematography: "ОПЕРАТОРСКАЯ РАБОТА И ПРОИЗВОДСТВО FMV",
    creditEngineer: "ВЕДУЩИЙ ПРОГРАММИСТ И СИСТЕМА HUD",
    creditAudio: "ЗВУКОРЕЖИССУРА И ПРОСТРАНСТВЕННЫЙ ДИЗАЙН",
    creditPsychology: "КОНСУЛЬТАНТ ПО ПСИХОАНАЛИТИЧЕСКИМ МАТРИЦАМ",
    creditProduced: "ПРОИЗВОДСТВО",
    rotateDevice: "ПОВЕРНИТЕ УСТРОЙСТВО",
    rotateDeviceHint: "Поверните устройство горизонтально для лучшего кинематографического FMV.",
    loading: "ЗАГРУЗКА",
    newGame: "НОВАЯ ИГРА",
    continue: "ПРОДОЛЖИТЬ",
    settings: "НАСТРОЙКИ",
    credits: "АВТОРЫ",
    terminate: "ЗАВЕРШИТЬ // ВЫХОД",
    releaseLog: "ВЕРСИЯ //",
    pause: "ПАУЗА",
    pauseTitle: "ИГРА НА ПАУЗЕ",
    resume: "ПРОДОЛЖИТЬ",
    quitToTitle: "ВЫХОД В ГЛАВНОЕ МЕНЮ",
    applyClose: "ПРИМЕНИТЬ И ЗАКРЫТЬ",
    acknowledge: "ПОНЯТНО",
    return: "НАЗАД",
    releaseArchive: "АРХИВ ВЕРСИЙ",
    changelogTitle: "АРХИВ ВЕРСИЙ",
    changelogTag: "ИСТОРИЯ ИЗМЕНЕНИЙ // ПРОТОКОЛ",
    quitWarningTag: "ПРЕДУПРЕЖДЕНИЕ // ЗАВЕРШЕНИЕ РАБОТЫ",
    quitWarningTitle: "ПРЕРВАТЬ СИМУЛЯЦИЮ?",
    quitDialogText: "Все несохраненные состояния в этом узле будут синхронизированы.<br>Вы уверены, что хотите разорвать нейронную связь и выйти?",
    abortReturn: "ОТМЕНА // НАЗАД",
    severTerminate: "РАЗОРВАТЬ // ВЫХОД",
    creditsTitle: "АВТОРЫ ПРОЕКТА",
    achievements: "ДОСТИЖЕНИЯ",
    achievementsArchive: "СИСТЕМА // ЗАПИСИ И НАГРАДЫ",
    achievementUnlocked: "ДОСТИЖЕНИЕ РАЗБЛОКИРОВАНО //",
    language: "ЯЗЫК",
    languageSub: "ЯЗЫК ИНТЕРФЕЙСА И СУБТИТРОВ",
    visualTheme: "ТЕМА ОФОРМЛЕНИЯ",
    themeSub: "ТЁМНЫЙ КИБЕР // СВЕТЛАЯ ЛАБОРАТОРИЯ",
    modePrompt: "ВЫБЕРИТЕ ПРОТОКОЛ СИМУЛЯЦИИ // РЕЖИМ ИГРЫ",
    classic: "РЕЖИМ // КЛАССИЧЕСКИЙ",
    classicDesc: "Стандартный темп. Таймер неактивен.",
    timed: "РЕЖИМ // НА ВРЕМЯ (10 сек)",
    timedDesc: "Таймер 10 секунд. По истечении выбирается молчание.",
    random: "РЕЖИМ // СЛУЧАЙНЫЙ (5 сек)",
    randomDesc: "Таймер 5 секунд. При истечении выбирается случайный путь.",
    timelineComplete: "ХРОНОЛОГИЯ ЗАВЕРШЕНА // АНАЛИЗ ЗАВЕРШЕН",
    matrixEvaluation: "ОЦЕНКА ПСИХОЛОГИЧЕСКОЙ МАТРИЦЫ",
    mainMenu: "ГЛАВНОЕ МЕНЮ",
    returnTitle: "Вернуться на главный экран"
  }
};

const ACHIEVEMENTS_KEY = "jagged_tongue_achievements";
let gameAchievements = [
  {
    id: "first_step",
    title: { en: "AWAKENING PROTOCOL", ar: "بروتوكول الاستيقاظ", ru: "ПРОТОКОЛ ПРОБУЖДЕНИЯ" },
    desc: { en: "Complete the intro sequence and choose a game mode.", ar: "أكمل تسلسل المقدمة واختر وضع اللعب.", ru: "Завершите вступление и выберите игровой режим." }
  },
  {
    id: "act_one_done",
    title: { en: "MARKET FRACTURE", ar: "صدع السوق", ru: "РАСКОЛ НА РЫНКЕ" },
    desc: { en: "Survive the structural fracture at the cake event.", ar: "انجُ من الانهيار الهيكلي في حدث الكعكة.", ru: "Переживите структурный обвал во время события с тортом." }
  },
  {
    id: "act_two_done",
    title: { en: "JOURNEY TO SANCTUARY", ar: "الرحلة إلى الملاذ", ru: "ПУТЬ К УБЕЖИЩУ" },
    desc: { en: "Navigate the moral strain on your way to the Great Hall.", ar: "اجتز التوتر الأخلاقي في طريقك إلى القاعة الكبرى.", ru: "Преодолейте моральное напряжение на пути в Большой зал." }
  },
  {
    id: "game_completed",
    title: { en: "PSYCHOLOGICAL MONOLITH", ar: "النصب النفسي المتكامل", ru: "ПСИХОЛОГИЧЕСКИЙ МОНОЛИТ" },
    desc: { en: "Unlock any complete personality matrix ending.", ar: "افتح أي نهاية لمصفوفة الشخصية الكاملة.", ru: "Откройте любой финал полной матрицы личности." }
  },
  {
    id: "speed_demon",
    title: { en: "TIMED SURVIVOR", ar: "ناجي التوقيت", ru: "ВЫЖИВШИЙ В ТАЙМЕРЕ" },
    desc: { en: "Play and progress through a Timed or Random game mode.", ar: "العب وتقدم عبر الوضع الموقّت أو العشوائي.", ru: "Играйте и продвигайтесь в режиме на время или случайном режиме." }
  },
  {
    id: "ending_stone",
    title: { en: "THE HARD TRUTH", ar: "حقيقة قاسية", ru: "ЖЁСТКАЯ ПРАВДА" },
    desc: { en: "Reach the Stone ending.", ar: "الوصول إلى نهاية الحجر.", ru: "Достигните финала Камня." }
  },
  {
    id: "ending_lantern",
    title: { en: "THE BEACON PATH", ar: "طريق النور", ru: "ПУТЬ МАЯКА" },
    desc: { en: "Reach the Lantern ending.", ar: "الوصول إلى نهاية الفانوس.", ru: "Достигните финала Фонаря." }
  },
  {
    id: "ending_silence",
    title: { en: "THE SILENT VOID", ar: "الصمت الأبدي", ru: "БЕЗМОЛВНАЯ ПУСТОТА" },
    desc: { en: "Reach the Silence ending.", ar: "الوصول إلى نهاية الصمت.", ru: "Достигните финала Молчания." }
  },
  {
    id: "all_endings",
    title: { en: "MASTER OF FATES", ar: "مكتشف الأقدار", ru: "ПОВЕЛИТЕЛЬ СУДЕБ" },
    desc: { en: "Unlock all three game endings.", ar: "افتح النهايات الثلاث بالكامل.", ru: "Откройте все три финала игры." }
  },
  {
    id: "all_matrices",
    title: { en: "PSYCHOLOGICAL ARCHITECT", ar: "محلل النفس البشرية", ru: "АРХИТЕКТОР ПСИХИКИ" },
    desc: { en: "Unlock all 27 personality matrices.", ar: "افتح جميع الأنماط النفسية الـ27.", ru: "Откройте все 27 матриц личности." }
  },
  {
    id: "complete_classic",
    title: { en: "CLASSIC MASTER", ar: "سيد الكلاسيك", ru: "МАСТЕР КЛАССИКИ" },
    desc: { en: "Complete the game in Classic mode.", ar: "أكمل اللعبة في الوضع الكلاسيكي.", ru: "Завершите игру в классическом режиме." }
  },
  {
    id: "complete_timed",
    title: { en: "TIMED SURVIVOR MASTER", ar: "سيد الناجين بالمؤقت", ru: "МАСТЕР ВЫЖИВАНИЯ НА ВРЕМЯ" },
    desc: { en: "Complete the game in Timed mode.", ar: "أكمل اللعبة في الوضع الموقّت.", ru: "Завершите игру в режиме на время." }
  },
  {
    id: "complete_random",
    title: { en: "FATE'S ARCHITECT", ar: "مهندس الأقدار", ru: "АРХИТЕКТОР СУДЬБЫ" },
    desc: { en: "Complete the game in Random mode.", ar: "أكمل اللعبة في الوضع العشوائي.", ru: "Завершите игру в случайном режиме." }
  },
  {
    id: "platinum_master",
    title: { en: "SYSTEM // 100% PROTOCOL", ar: "النظام // بروتوكول 100%", ru: "СИСТЕМА // ПРОТОКОЛ 100%" },
    desc: { en: "Unlock all achievements in the simulation.", ar: "افتح جميع إنجازات المحاكاة بالكامل.", ru: "Откройте все достижения симуляции." }
  },
  {
    id: "explore_cake_all",
    title: { en: "MARKET EXPLORER", ar: "مستكشف السوق", ru: "ИССЛЕДОВАТЕЛЬ РЫНКА" },
    desc: { en: "Explore all three paths in the Cake event.", ar: "استكشف المسارات الثلاثة في حدث الكعكة.", ru: "Исследуйте все три пути в событии с тортом." }
  },
  {
    id: "explore_journey_all",
    title: { en: "SANCTUARY WAYFARER", ar: "جوال الملاذ", ru: "СТРАННИК УБЕЖИЩА" },
    desc: { en: "Explore all three paths in the Journey event.", ar: "استكشف المسارات الثلاثة في حدث الرحلة.", ru: "Исследуйте все три пути в событии путешествия." }
  },
  {
    id: "explore_hall_all",
    title: { en: "GREAT HALL CARTOGRAPHER", ar: "رسام خريطة القاعة الكبرى", ru: "КАРТОГРАФ БОЛЬШОГО ЗАЛА" },
    desc: { en: "Explore all three paths in the Great Hall climax.", ar: "استكشف المسارات الثلاثة في ذروة القاعة الكبرى.", ru: "Исследуйте все три пути в кульминации Большого зала." }
  },
  {
    id: "explore_all_paths",
    title: { en: "TIMELINE OMNISCIENT", ar: "عالم الأكوان الموازية", ru: "ВСЕВЕДУЩИЙ ХРОНОЛИНИИ" },
    desc: { en: "Experience every narrative branch across all events.", ar: "جرب كل فرع سردي عبر جميع الأحداث.", ru: "Пройдите каждую сюжетную ветвь во всех событиях." }
  }
];

const EXPLORED_PATHS_KEY = "jagged_tongue_explored_paths";
let exploredPaths = {
  cake_event: [],
  journey_event: [],
  hall_event: []
};

function loadExploredPaths() {
  const saved = localStorage.getItem(EXPLORED_PATHS_KEY);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    exploredPaths = {
      cake_event: Array.isArray(parsed.cake_event) ? [...new Set(parsed.cake_event)] : [],
      journey_event: Array.isArray(parsed.journey_event) ? [...new Set(parsed.journey_event)] : [],
      hall_event: Array.isArray(parsed.hall_event) ? [...new Set(parsed.hall_event)] : []
    };
  } catch (error) {
    console.warn("Failed to load explored paths:", error);
  }
}

function trackAndUnlockPath(nodeKey, choiceType) {
  if (!exploredPaths[nodeKey]) exploredPaths[nodeKey] = [];
  if (!exploredPaths[nodeKey].includes(choiceType)) {
    exploredPaths[nodeKey].push(choiceType);
    localStorage.setItem(EXPLORED_PATHS_KEY, JSON.stringify(exploredPaths));
  }

  if (exploredPaths.cake_event.length >= 3) unlockAchievement("explore_cake_all");
  if (exploredPaths.journey_event.length >= 3) unlockAchievement("explore_journey_all");
  if (exploredPaths.hall_event.length >= 3) unlockAchievement("explore_hall_all");
  if (
    exploredPaths.cake_event.length >= 3 &&
    exploredPaths.journey_event.length >= 3 &&
    exploredPaths.hall_event.length >= 3
  ) {
    unlockAchievement("explore_all_paths");
  }
}

function loadAchievements() {
  const saved = localStorage.getItem(ACHIEVEMENTS_KEY);
  if (!saved) return;
  try {
    const unlocked = JSON.parse(saved);
    gameAchievements.forEach((achievement) => {
      achievement.unlocked = unlocked[achievement.id] === true;
    });
  } catch (error) {
    console.warn("Failed to load achievements:", error);
  }
}

function unlockAchievement(id) {
  const achievement = gameAchievements.find((item) => item.id === id);
  if (!achievement || achievement.unlocked) return;
  achievement.unlocked = true;
  const unlocked = Object.fromEntries(gameAchievements.map((item) => [item.id, item.unlocked === true]));
  localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(unlocked));
  queueAchievementToast(achievement);
  if (id !== "platinum_master") checkAllAchievementsCompleted();
}

function checkAllAchievementsCompleted() {
  const allUnlocked = gameAchievements
    .filter((achievement) => achievement.id !== "platinum_master")
    .every((achievement) => achievement.unlocked);
  if (allUnlocked) unlockAchievement("platinum_master");
}

const achievementToast = document.getElementById("achievement-toast");
const toastTitle = document.getElementById("toast-title");
const toastQueue = [];
let isShowingToast = false;

function queueAchievementToast(achievement) {
  const language = normalizeLanguage(gameSettings.language);
  toastQueue.push(achievement.title[language] || achievement.title.en);
  processToastQueue();
}

function processToastQueue() {
  if (isShowingToast || toastQueue.length === 0 || !achievementToast || !toastTitle) return;
  isShowingToast = true;
  toastTitle.textContent = toastQueue.shift();
  achievementToast.classList.add("show");

  window.setTimeout(() => {
    achievementToast.classList.remove("show");
    window.setTimeout(() => {
      isShowingToast = false;
      processToastQueue();
    }, 400);
  }, 3500);
}

function renderAchievementsList() {
  if (!achievementsListContainer) return;
  const language = normalizeLanguage(gameSettings.language);
  achievementsListContainer.replaceChildren();
  gameAchievements.forEach((achievement) => {
    const card = document.createElement("article");
    card.className = `achievement-card${achievement.unlocked ? " unlocked" : ""}`;
    const icon = document.createElement("div");
    icon.className = "achievement-icon";
    icon.textContent = achievement.unlocked ? "✦" : "⌖";
    const info = document.createElement("div");
    info.className = "achievement-info";
    const title = document.createElement("span");
    title.className = "achievement-title";
    title.textContent = achievement.title[language] || achievement.title.en;
    const description = document.createElement("span");
    description.className = "achievement-desc";
    description.textContent = achievement.desc[language] || achievement.desc.en;
    info.append(title, description);
    card.append(icon, info);
    achievementsListContainer.appendChild(card);
  });
}

const decisionTranslations = {
  en: {
    cake_event: {
      prompt: "STRUCTURAL FRACTURE IMMINENT // THE CAKE",
      choices: ["CONFRONT [STONE]", "Expose the collapse.", "MERCY [LANTERN]", "Mend it quietly.", "FROST [SILENCE]", "Fade into shadows."]
    },
    journey_event: {
      prompt: "MORAL STRAIN // ENTERING THE SANCTUARY",
      choices: ["HARDEN [STONE]", "Prepare the bitter blow.", "CARRY [LANTERN]", "Hold the fragile light.", "SHRINK [SILENCE]", "Withdraw your warmth."]
    },
    hall_event: {
      prompt: "CEILING TIMBER COLLAPSE // THE GREAT HALL",
      choices: ["DEFIANCE [STONE]", "Scream the fall.", "GUIDE [LANTERN]", "Lead them to light.", "ENDURE [SILENCE]", "Bury your voice."]
    }
  },
  ar: {
    cake_event: {
      prompt: "انهيار هيكلي وشيك // الكعكة",
      choices: ["مواجهة [حجر]", "اكشف الانهيار.", "رحمة [فانوس]", "أصلحها بهدوء.", "صقيع [صمت]", "توارَ في الظلال."]
    },
    journey_event: {
      prompt: "توتر أخلاقي // دخول الملاذ",
      choices: ["تصلّب [حجر]", "استعد للضربة المريرة.", "احمل [فانوس]", "احمِ الضوء الهش.", "انكمش [صمت]", "اسحب دفئك."]
    },
    hall_event: {
      prompt: "انهيار عوارض السقف // القاعة الكبرى",
      choices: ["تحدٍ [حجر]", "أطلق صرخة السقوط.", "إرشاد [فانوس]", "قدهم نحو النور.", "تحمّل [صمت]", "ادفن صوتك."]
    }
  },
  ru: {
    cake_event: {
      prompt: "УГРОЗА СТРУКТУРНОГО ИЗЛОМА // ТОРТ",
      choices: ["ОБЛИЧИТЬ [КАМЕНЬ]", "Раскрыть обрушение.", "МИЛОСЕРДИЕ [ФОНАРЬ]", "Починить тихо.", "МОРОЗ [МОЛЧАНИЕ]", "Раствориться в тени."]
    },
    journey_event: {
      prompt: "МОРАЛЬНОЕ НАПРЯЖЕНИЕ // ВХОД В УБЕЖИЩЕ",
      choices: ["УСТОЯТЬ [КАМЕНЬ]", "Приготовиться к удару.", "НЕСТИ [ФОНАРЬ]", "Держать хрупкий свет.", "СЖАТЬСЯ [МОЛЧАНИЕ]", "Отозвать своё тепло."]
    },
    hall_event: {
      prompt: "ОБРУШЕНИЕ БАЛОК // БОЛЬШОЙ ЗАЛ",
      choices: ["ВЫЗОВ [КАМЕНЬ]", "Закричать о падении.", "ВЕСТИ [ФОНАРЬ]", "Вести их к свету.", "ТЕРПЕТЬ [МОЛЧАНИЕ]", "Похоронить свой голос."]
    }
  }
};

function normalizeLanguage(language) {
  return ["en", "ar", "ru"].includes(language) ? language : "en";
}

function getTranslation(key) {
  const language = normalizeLanguage(gameSettings.language);
  return gameTranslations[language][key] || gameTranslations.en[key] || key;
}

function updateUITexts() {
  document.title = getTranslation("gameTitle");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getTranslation(element.dataset.i18n);
    if (value.includes("<br>")) {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(/\s+/).forEach((mapping) => {
      const separator = mapping.indexOf(":");
      if (separator <= 0) return;
      const attribute = mapping.slice(0, separator);
      const key = mapping.slice(separator + 1);
      element.setAttribute(attribute, getTranslation(key));
    });
  });

  const textMap = {
    ".loading-label": "loading",
    "#btn-new-game": "newGame",
    "#btn-continue": "continue",
    "#btn-settings": "settings",
    "#btn-achievements": "achievements",
    "#btn-credits": "credits",
    ".quit-text": "terminate",
    ".pause-text": "pause",
    "#btn-pause-resume": "resume",
    "#btn-pause-settings": "settings",
    "#btn-pause-quit": "quitToTitle",
    ".pause-title": "pauseTitle",
    "#btn-settings-close": "applyClose",
    "#btn-update-log-close": "acknowledge",
    "#btn-credits-close": "return",
    "#settings-menu .settings-title": "settings",
    "#update-log-modal .settings-title": "changelogTitle",
    "#credits-menu .credits-title": "creditsTitle",
    ".toast-header": "achievementUnlocked",
    ".setting-label": null,
    "#hud-prompt": null
  };

  Object.entries(textMap).forEach(([selector, key]) => {
    if (!key) return;
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = getTranslation(key);
    });
  });

  const labels = document.querySelectorAll(".setting-label");
  const labelKeys = ["audioLevel", "muteSound", "subtitles", "displayMode", "graphics", "audioProfile", "visualTheme", "language"];
  const labelValues = {
    audioLevel: { en: "AUDIO LEVEL", ar: "مستوى الصوت", ru: "ГРОМКОСТЬ" },
    muteSound: { en: "MUTE SOUND", ar: "كتم الصوت", ru: "БЕЗ ЗВУКА" },
    subtitles: { en: "SUBTITLES", ar: "الترجمة", ru: "СУБТИТРЫ" },
    displayMode: { en: "DISPLAY MODE", ar: "وضع العرض", ru: "РЕЖИМ ЭКРАНА" },
    graphics: { en: "GRAPHICS PROFILE", ar: "ملف الرسومات", ru: "ПРОФИЛЬ ГРАФИКИ" },
    audioProfile: { en: "AUDIO PROFILE", ar: "ملف الصوت", ru: "АУДИОПРОФИЛЬ" },
    visualTheme: { en: "VISUAL THEME", ar: "المظهر البصري", ru: "ТЕМА ОФОРМЛЕНИЯ" },
    language: { en: "LANGUAGE", ar: "اللغة", ru: "ЯЗЫК" }
  };
  labels.forEach((element, index) => {
    const key = labelKeys[index];
    if (key) element.textContent = labelValues[key][gameSettings.language] || labelValues[key].en;
  });

  const subtexts = document.querySelectorAll("#settings-menu .setting-subtext");
  const localizedSubtexts = [
    { en: "CINEMATIC DIALOGUE OVERLAY", ar: "ترجمة الحوار السينمائي", ru: "СУБТИТРЫ ДИАЛОГОВ" },
    null,
    { en: "VISUAL BLUR & RENDERING", ar: "الضبابية والعرض البصري", ru: "РАЗМЫТИЕ И РЕНДЕРИНГ" },
    { en: "SPATIAL ATMOS // MONO", ar: "صوت محيطي // أحادي", ru: "ПРОСТРАНСТВЕННЫЙ ЗВУК // МОНО" },
    { en: "DARK CYBER // LAB LIGHT", ar: "سايبر مظلم // مختبر مضيء", ru: "ТЁМНЫЙ КИБЕР // СВЕТЛАЯ ЛАБОРАТОРИЯ" },
    { en: "INTERFACE & SUBTITLES LOCALE", ar: "لغة الواجهة والترجمات", ru: "ЯЗЫК ИНТЕРФЕЙСА И СУБТИТРОВ" }
  ];
  subtexts.forEach((element, index) => {
    const translation = localizedSubtexts[index];
    if (translation) element.textContent = translation[gameSettings.language] || translation.en;
  });

  const versionLabel = document.querySelector(".version-label");
  if (versionLabel) {
    const version = document.getElementById("current-version-display");
    versionLabel.firstChild.textContent = `${getTranslation("releaseLog")} `;
    if (version) versionLabel.appendChild(version);
  }
  const decisionTag = document.querySelector("#dbh-overlay .hud-tag");
  if (decisionTag) decisionTag.textContent = getTranslation("decisionPending");
  const changelogTag = document.querySelector("#update-log-modal .hud-tag");
  if (changelogTag) changelogTag.textContent = getTranslation("changelogTag");
  const quitTag = document.querySelector("#quit-confirm-modal .warning-tag");
  if (quitTag) quitTag.textContent = getTranslation("quitWarningTag");
  const quitTitle = document.querySelector("#quit-confirm-modal .warning-title");
  if (quitTitle) quitTitle.textContent = getTranslation("quitWarningTitle");
  const quitText = document.querySelector("#quit-confirm-modal .dialog-text");
  if (quitText) quitText.innerHTML = getTranslation("quitDialogText");
  const cancelText = document.querySelector("#btn-quit-cancel span:last-child");
  if (cancelText) cancelText.textContent = getTranslation("abortReturn");
  const confirmText = document.querySelector("#btn-quit-confirm span:last-child");
  if (confirmText) confirmText.textContent = getTranslation("severTerminate");
  const achievementsTitle = document.querySelector("#achievements-menu .settings-title");
  if (achievementsTitle) achievementsTitle.textContent = getTranslation("achievements");
  const achievementsTag = document.querySelector("#achievements-menu .hud-tag");
  if (achievementsTag) achievementsTag.textContent = getTranslation("achievementsArchive");
  const achievementsClose = document.getElementById("btn-achievements-close");
  if (achievementsClose) achievementsClose.textContent = getTranslation("return");
  if (achievementsMenu?.classList.contains("active")) renderAchievementsList();

  const changelogEntries = {
    en: [
      "Optimized responsive scaling for web distribution inside iframe elements.",
      "Prevented clipping and overflow across embedded viewports.",
      "Added inner scrolling bounds to settings, changelog, and personality result panels.",
      "Integrated real-time Subtitles toggle with persistent configuration in settings menu.",
      "Complete timecoded cinematic subtitles mapping across all Acts, branches, and Endings.",
      "Optimized audio graph performance and seamless video transitions.",
      "Integrated Act 3 full cinematic multi-branch sequence matrices.",
      "Enabled adaptive mobile landscape orientation locking and full-screen enforcement.",
      "Configured native Windows desktop icon matrices (up to 256x256) and taskbar anchors.",
      "Refined 27 full psych-matrix profiles based on sequential player inputs.",
      "HUD button anchors locked to fixed screen-bounds (Desktop/Web).",
      "Changelog presentation deferred until intro cinematic concludes.",
      "Refined post-intro state transitions.",
      "Fixed desktop resolution clipping and full right-border alignment.",
      "Added a cinema-grade full-screen termination confirmation modal.",
      "Updated production credits.",
      "Enhanced the auto-updater handshake protocol.",
      "Initial system deployment: The Boy with the Jagged Tongue.",
      "Integrated Detroit-inspired frosted glass HUD and 27 personality matrices.",
      "Added real-time Web Audio spatial Atmos and Mono profiles.",
      "Added native Desktop Fullscreen, Borderless, and Windowed modes.",
      "Added strict Escape-key protection during narrative boot sequences."
    ],
    ar: [
      "تحسين التحجيم المتجاوب للتوزيع عبر الويب داخل عناصر iframe.",
      "منع القص والتجاوز داخل مساحات العرض المضمّنة.",
      "إضافة حدود تمرير داخلية للإعدادات وسجل التغييرات ولوحات نتائج الشخصية.",
      "دمج مفتاح ترجمة فوري مع حفظ الإعدادات داخل قائمة الإعدادات.",
      "إكمال خريطة الترجمات السينمائية ذات التوقيت لجميع الفصول والفروع والنهايات.",
      "تحسين أداء مخطط الصوت وانتقالات الفيديو السلسة.",
      "دمج مصفوفات الفصل الثالث السينمائية كاملة متعددة الفروع.",
      "تفعيل قفل الوضع الأفقي التكيفي للهواتف وفرض ملء الشاشة.",
      "تهيئة مصفوفات أيقونات سطح مكتب Windows الأصلية ومثبتات شريط المهام.",
      "تحسين 27 ملفاً كاملاً للمصفوفة النفسية بناءً على اختيارات اللاعب المتتابعة.",
      "تثبيت أزرار HUD ضمن حدود الشاشة على سطح المكتب والويب.",
      "تأجيل عرض سجل التغييرات حتى نهاية المقدمة السينمائية.",
      "تحسين انتقالات الحالة بعد المقدمة.",
      "إصلاح قص دقة سطح المكتب ومحاذاة الحافة اليمنى.",
      "إضافة نافذة تأكيد إنهاء بملء الشاشة بجودة سينمائية.",
      "تحديث بيانات فريق الإنتاج.",
      "تحسين بروتوكول المصافحة للمحدّث التلقائي.",
      "النشر الأولي للنظام: الصبي ذو اللسان المسنن.",
      "دمج واجهة زجاجية مستوحاة من ديترويت و27 مصفوفة شخصية.",
      "إضافة ملفات Atmos وMono المكانية للصوت الفوري عبر الويب.",
      "إضافة أوضاع سطح المكتب: ملء الشاشة وبلا حدود ونافذة.",
      "إضافة حماية صارمة من مفتاح Escape أثناء تسلسل تشغيل القصة."
    ],
    ru: [
      "Оптимизировано адаптивное масштабирование для веб-размещения внутри iframe.",
      "Устранены обрезание и переполнение во встроенных областях просмотра.",
      "Добавлена внутренняя прокрутка для настроек, архива версий и панелей матрицы личности.",
      "Добавлен переключатель субтитров в реальном времени с сохранением настроек.",
      "Завершена карта кинематографических субтитров с таймкодами для всех актов, ветвей и финалов.",
      "Оптимизированы аудиограф и плавные переходы между видео.",
      "Интегрированы полные кинематографические матрицы ветвей третьего акта.",
      "Добавлены адаптивная блокировка альбомной ориентации и принудительный полный экран.",
      "Настроены нативные матрицы значков Windows и закрепление на панели задач.",
      "Улучшены 27 психоматриц на основе последовательных решений игрока.",
      "Кнопки HUD закреплены в пределах экрана на ПК и в веб-версии.",
      "Показ архива версий отложен до завершения вступительной сцены.",
      "Улучшены переходы состояния после вступления.",
      "Исправлены обрезание разрешения ПК и выравнивание правой границы.",
      "Добавлено кинематографическое полноэкранное подтверждение завершения.",
      "Обновлены производственные титры.",
      "Улучшен протокол рукопожатия автообновления.",
      "Первичное развёртывание системы: «Мальчик с зазубренным языком».",
      "Добавлены матовый HUD в духе Детройта и 27 матриц личности.",
      "Добавлены пространственные профили Web Audio Atmos и Mono.",
      "Добавлены нативные режимы ПК: полный экран, без рамки и окно.",
      "Добавлена строгая защита клавиши Escape во время запуска повествования."
    ]
  };
  document.querySelectorAll(".log-list li").forEach((element, index) => {
    if (element.closest('[data-version="1.1.5"]')) return;
    const entries = changelogEntries[gameSettings.language] || changelogEntries.en;
    if (entries[index]) element.textContent = entries[index];
  });
  const changelogDates = {
    en: ["NOVEMBER 2026 // RELEASE", "NOVEMBER 2026 // PATCH", "OCTOBER 2026 // PATCH", "OCTOBER 2026 // PATCH", "OCTOBER 2026 // PATCH", "OCTOBER 2026 // PATCH", "OCTOBER 2026 // STABLE"],
    ar: ["نوفمبر 2026 // إصدار", "نوفمبر 2026 // تحديث", "أكتوبر 2026 // تحديث", "أكتوبر 2026 // تحديث", "أكتوبر 2026 // تحديث", "أكتوبر 2026 // تحديث", "أكتوبر 2026 // مستقر"],
    ru: ["НОЯБРЬ 2026 // РЕЛИЗ", "НОЯБРЬ 2026 // ПАТЧ", "ОКТЯБРЬ 2026 // ПАТЧ", "ОКТЯБРЬ 2026 // ПАТЧ", "ОКТЯБРЬ 2026 // ПАТЧ", "ОКТЯБРЬ 2026 // ПАТЧ", "ОКТЯБРЬ 2026 // СТАБИЛЬНАЯ ВЕРСИЯ"]
  };
  const dates = changelogDates[gameSettings.language] || changelogDates.en;
  document.querySelectorAll(".log-date").forEach((element, index) => {
    if (dates[index]) element.textContent = dates[index];
  });
  const v115 = {
    en: [
      "Enhanced psych-matrix precision across all 27 narrative endings, improving branching and transitions.",
      "Reviewed Arabic, English, and Russian subtitle dictionaries with refined cinematic timing synchronization.",
      "Added cyberpunk visual elements, cyber-glitch effects, and holographic HUD overlays to menus and settings.",
      "Re-architected video sequence caching in preload_2.js to reduce latency and transition stuttering.",
      "Optimized Electron resource consumption in package_2.json for Fullscreen and Borderless modes.",
      "Improved the electron-updater protocol for seamless future release installation.",
      "Resolved subtitle desynchronization during rapid transitions between critical choices in script_4.js.",
      "Fixed occasional screen tearing on high-refresh-rate displays.",
      "Fixed a rare save-state restoration issue across branching checkpoints."
    ],
    ar: [
      "تحسين دقة المصفوفة النفسية عبر النهايات السردية الـ27 لتحسين التفرعات والانتقالات.",
      "مراجعة قواميس الترجمة العربية والإنجليزية والروسية مع ضبط التزامن السينمائي بدقة.",
      "إضافة عناصر بصرية سايبر بانك وتأثيرات تشويش رقمية وطبقات HUD هولوغرافية للقوائم والإعدادات.",
      "إعادة تصميم تخزين تسلسلات الفيديو في preload_2.js لتقليل التأخير والتقطّع أثناء الانتقالات.",
      "تحسين استهلاك موارد Electron في package_2.json لوضعي ملء الشاشة وبلا حدود.",
      "تحسين بروتوكول electron-updater لضمان تثبيت سلس للإصدارات المستقبلية.",
      "إصلاح عدم تزامن الترجمة أثناء الانتقالات السريعة بين القرارات المهمة في script_4.js.",
      "إصلاح تمزق الشاشة الذي كان يظهر أحياناً على الشاشات ذات معدل التحديث العالي.",
      "إصلاح خلل نادر في استعادة الحفظ عبر نقاط التحقق المتفرعة."
    ],
    ru: [
      "Повышена точность психоматрицы для всех 27 сюжетных финалов, улучшены ветвления и переходы.",
      "Проверены словари арабских, английских и русских субтитров, уточнена синхронизация таймингов.",
      "Добавлены киберпанк-элементы, цифровые глитч-эффекты и голографические HUD-слои в меню и настройках.",
      "Переработано кэширование видеопоследовательностей в preload_2.js для снижения задержек и рывков.",
      "Оптимизировано потребление ресурсов Electron в package_2.json для полноэкранного режима и режима без рамки.",
      "Повышена стабильность electron-updater для плавной установки будущих релизов.",
      "Исправлена рассинхронизация субтитров при быстрых переходах между важными решениями в script_4.js.",
      "Исправлено периодическое tearing-искажение на дисплеях с высокой частотой обновления.",
      "Исправлена редкая ошибка восстановления сохранений в разветвлённых контрольных точках."
    ]
  };
  const v115Entries = v115[gameSettings.language] || v115.en;
  document.querySelectorAll('[data-version="1.1.5"] .log-list li').forEach((element, index) => {
    if (v115Entries[index]) element.textContent = v115Entries[index];
  });
  const versionPrefix = { en: "VERSION", ar: "الإصدار", ru: "ВЕРСИЯ" }[gameSettings.language] || "VERSION";
  document.querySelectorAll(".log-version").forEach((element) => {
    element.textContent = element.textContent.replace(/^(VERSION|الإصدار|ВЕРСИЯ)/, versionPrefix);
  });

  document.documentElement.lang = gameSettings.language;
  document.documentElement.dir = gameSettings.language === "ar" ? "rtl" : "ltr";
  const pauseTrigger = document.getElementById("btn-pause-trigger");
  if (pauseTrigger) pauseTrigger.setAttribute("aria-label", getTranslation("pause"));
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) loadingScreen.setAttribute("aria-label", getTranslation("loading"));
  if (languageSelect) languageSelect.value = gameSettings.language;
}

let activeSequence = null;
let activeSequenceName = null;
let activeSequenceIndex = 0;
let isGamePaused = false;
let isIntroActive = true;
let isEndingAnalysisActive = false;
let shouldShowLogAfterIntro = false;
let currentGameMode = "classic";
let decisionTimeoutTimer = null;
let selectedRandomPattern = null;
const RANDOM_DECISION_TIMEOUT_MS = 5000;

const player = document.getElementById("fmv-player");
const loadingScreen = document.getElementById("loading-screen");
const mainMenu = document.getElementById("main-menu");
const btnContinue = document.getElementById("btn-continue");
const btnNewGame = document.getElementById("btn-new-game");
const btnSettings = document.getElementById("btn-settings");
const btnCredits = document.getElementById("btn-credits");
const achievementsMenu = document.getElementById("achievements-menu");
const btnAchievements = document.getElementById("btn-achievements");
const btnAchievementsClose = document.getElementById("btn-achievements-close");
const achievementsListContainer = document.getElementById("achievements-list-container");
const dbhOverlay = document.getElementById("dbh-overlay");
const hudPrompt = document.getElementById("hud-prompt");
const nodesContainer = document.getElementById("nodes-container");
const timerBar = document.getElementById("timer-bar");
const subtitleBox = document.getElementById("subtitle-box");

// Pause & Settings elements
const pauseMenu = document.getElementById("pause-menu");
const btnPauseTrigger = document.getElementById("btn-pause-trigger");
const btnPauseResume = document.getElementById("btn-pause-resume");
const btnPauseSettings = document.getElementById("btn-pause-settings");
const btnPauseQuit = document.getElementById("btn-pause-quit");
const settingsMenu = document.getElementById("settings-menu");
const volumeSlider = document.getElementById("volume-slider");
const volumeValDisplay = document.getElementById("volume-val-display");
const muteToggle = document.getElementById("mute-toggle");
const subtitlesToggle = document.getElementById("subtitles-toggle");
const btnFullscreenToggle = document.getElementById("btn-fullscreen-toggle");
const platformTag = document.getElementById("platform-tag");
const desktopControls = document.getElementById("desktop-display-controls");
const webControls = document.getElementById("web-display-controls");
const displayButtons = document.querySelectorAll(".display-btn");
const btnSettingsClose = document.getElementById("btn-settings-close");
const creditsMenu = document.getElementById("credits-menu");
const btnCreditsClose = document.getElementById("btn-credits-close");
const quitTriggerBtn = document.getElementById("btn-quit") || document.getElementById("btn-desktop-quit");
const quitConfirmModal = document.getElementById("quit-confirm-modal");
const btnQuitCancel = document.getElementById("btn-quit-cancel");
const btnQuitConfirm = document.getElementById("btn-quit-confirm");
const btnVersionLog = document.getElementById("btn-version-log");
const updateLogModal = document.getElementById("update-log-modal");
const btnUpdateLogClose = document.getElementById("btn-update-log-close");
const webShutdownScreen = document.getElementById("web-shutdown-screen");
const btnRebootSession = document.getElementById("btn-reboot-session");
const gfxButtons = document.querySelectorAll(".quality-btn");
const audioProfileButtons = document.querySelectorAll(".audio-profile-btn");
const themeButtons = document.querySelectorAll(".theme-btn");
const themeDarkBtn = document.getElementById("btn-theme-dark");
const themeLightBtn = document.getElementById("btn-theme-light");
const languageSelect = document.getElementById("language-select");

const SETTINGS_KEY = "jagged_tongue_settings";
let gameSettings = {
  volume: 100,
  muted: false,
  subtitles: true,
  graphics: "cinematic",
  audioProfile: "atmos",
  displayMode: "fullscreen",
  theme: "dark",
  language: "en"
};

function applyVideoAudioSettings() {
  player.volume = gameSettings.volume / 100;
  player.muted = gameSettings.muted;
}

const isDesktopApp = Platform.isElectron();
const isCapacitorApp = Platform.isCapacitor();
const CURRENT_VERSION = "1.1.5";
const GITHUB_REPO = "BO1MA/TBJT";
const statusIndicator = document.getElementById("version-status-indicator");
const currentVersionDisplay = document.getElementById("current-version-display");
if (currentVersionDisplay) {
  currentVersionDisplay.textContent = `v${CURRENT_VERSION}`;
}

function parseVersion(value) {
  const match = String(value || "").replace(/^v/i, "").match(/^\d+(?:\.\d+){0,2}/);
  return match ? match[0].split(".").map(Number) : [0];
}

function compareVersions(left, right) {
  const a = parseVersion(left);
  const b = parseVersion(right);
  for (let index = 0; index < 3; index += 1) {
    if ((a[index] || 0) !== (b[index] || 0)) {
      return (a[index] || 0) - (b[index] || 0);
    }
  }
  return 0;
}

function setUpdateBadgeStatus(missedUpdatesCount) {
  if (!statusIndicator) return;
  statusIndicator.className = "status-indicator";
  if (missedUpdatesCount === 0) {
    statusIndicator.classList.add("status-green");
    statusIndicator.textContent = "✓";
    statusIndicator.title = "SYSTEM STATUS // UP TO DATE";
  } else if (missedUpdatesCount === 1) {
    statusIndicator.classList.add("status-yellow");
    statusIndicator.textContent = "!";
    statusIndicator.title = "UPDATE AVAILABLE // 1 BUILD BEHIND";
  } else {
    statusIndicator.classList.add("status-red");
    statusIndicator.textContent = "✕";
    statusIndicator.title = `OUTDATED // ${missedUpdatesCount} BUILDS BEHIND`;
  }
}

function checkVersionStatus() {
  const lastKnownVersion = localStorage.getItem("tbjt_last_run_version");
  if (lastKnownVersion && compareVersions(lastKnownVersion, CURRENT_VERSION) !== 0) {
    shouldShowLogAfterIntro = true;
  }
  localStorage.setItem("tbjt_last_run_version", CURRENT_VERSION);
}

function triggerPostIntroLog() {
  if (!shouldShowLogAfterIntro) return;
  shouldShowLogAfterIntro = false;
  window.setTimeout(() => {
    if (updateLogModal) updateLogModal.classList.add("active");
  }, 500);
}

async function checkGitHubReleases() {
  if (!navigator.onLine) return;
  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases`);
    if (!response.ok) return;
    const releases = await response.json();
    const newerReleases = releases.filter(
      (release) => !release.draft && !release.prerelease && compareVersions(release.tag_name, CURRENT_VERSION) > 0
    );
    setUpdateBadgeStatus(newerReleases.length);
  } catch (error) {
    console.warn("GitHub release check was not available:", error);
  }
}

function handleUpdateStatus(data) {
  if (data.status === "available" || data.status === "downloading" || data.status === "ready") {
    setUpdateBadgeStatus(1);
    if (data.status === "ready") {
      window.setTimeout(openUpdateLog, 500);
    }
  } else if (data.status === "up-to-date") {
    setUpdateBadgeStatus(0);
  }
}

if (isDesktopApp && window.desktopAPI.onUpdateStatus) {
  window.desktopAPI.onUpdateStatus(handleUpdateStatus);
}

function hidePauseButton() {
  btnPauseTrigger.classList.remove("show-btn");
}

function showPauseButton() {
  btnPauseTrigger.classList.add("show-btn");
}

function setGraphicsProfile(profile) {
  const selectedProfile = profile === "performance" ? "performance" : "cinematic";
  gameSettings.graphics = selectedProfile;
  gfxButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.perf === selectedProfile);
  });
  document.body.classList.toggle("perf-mode", selectedProfile === "performance");
  saveSettings();
}

function loadSettings() {
  const saved = localStorage.getItem(SETTINGS_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      gameSettings = {
        ...gameSettings,
        volume: Number.isFinite(Number(parsed.volume)) ? Math.max(0, Math.min(100, Number(parsed.volume))) : gameSettings.volume,
        muted: Boolean(parsed.muted),
        subtitles: parsed.subtitles !== undefined ? Boolean(parsed.subtitles) : true,
        graphics: parsed.graphics === "performance" ? "performance" : "cinematic",
        audioProfile: parsed.audioProfile === "mono" ? "mono" : "atmos",
        displayMode: ["fullscreen", "borderless", "windowed"].includes(parsed.displayMode)
          ? parsed.displayMode
          : "fullscreen",
        theme: parsed.theme === "light" ? "light" : "dark",
        language: normalizeLanguage(parsed.language)
      };
    } catch (error) {
      localStorage.removeItem(SETTINGS_KEY);
    }
  }

  volumeSlider.value = String(gameSettings.volume);
  volumeValDisplay.textContent = `${gameSettings.volume}%`;
  muteToggle.checked = gameSettings.muted;
  if (subtitlesToggle) subtitlesToggle.checked = gameSettings.subtitles;
  player.volume = gameSettings.volume / 100;
  player.muted = gameSettings.muted;
  setGraphicsProfile(gameSettings.graphics);
  setAudioProfile(gameSettings.audioProfile);
  setTheme(gameSettings.theme);
  setGameLanguage(gameSettings.language);
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(gameSettings));
}

function setTheme(theme) {
  const selectedTheme = theme === "light" ? "light" : "dark";
  gameSettings.theme = selectedTheme;
  document.body.classList.toggle("light-theme", selectedTheme === "light");
  themeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.theme === selectedTheme);
  });
  saveSettings();
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.theme));
});

function setGameLanguage(language) {
  const selectedLanguage = normalizeLanguage(language);
  gameSettings.language = selectedLanguage;
  document.documentElement.setAttribute("dir", selectedLanguage === "ar" ? "rtl" : "ltr");
  if (languageSelect) languageSelect.value = selectedLanguage;
  updateUITexts();
  saveSettings();
}

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    setGameLanguage(event.target.value);
  });
}

function applyDesktopDisplayMode(mode) {
  const selectedMode = ["fullscreen", "borderless", "windowed"].includes(mode) ? mode : "fullscreen";
  gameSettings.displayMode = selectedMode;

  displayButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === selectedMode);
  });

  if (isDesktopApp) {
    window.desktopAPI.setDisplayMode(selectedMode);
  }
  saveSettings();
}

function setupPlatformSettings() {
  if (isDesktopApp) {
    platformTag.textContent = "DESKTOP CLIENT // SYSTEM ACTIVE";
    desktopControls.style.display = "flex";
    webControls.style.display = "none";
    applyDesktopDisplayMode(gameSettings.displayMode);
  } else if (isCapacitorApp) {
    platformTag.textContent = "MOBILE CLIENT // CAPACITOR";
    desktopControls.style.display = "none";
    webControls.style.display = "block";
  } else {
    platformTag.textContent = "WEB BROWSER // CLIENT";
    desktopControls.style.display = "none";
    webControls.style.display = "block";
  }
}

// ----------------- Mobile Landscape & Fullscreen Control -----------------
async function triggerMobileLandscapeFullscreen() {
  if (isDesktopApp) return;

  const docEl = document.documentElement;

  try {
    if (!document.fullscreenElement) {
      if (docEl.requestFullscreen) {
        await docEl.requestFullscreen();
      } else if (docEl.webkitRequestFullscreen) {
        await docEl.webkitRequestFullscreen();
      } else if (docEl.msRequestFullscreen) {
        await docEl.msRequestFullscreen();
      }
    }
  } catch (err) {
    console.warn("Fullscreen request not allowed or cancelled:", err);
  }

  try {
    if (screen.orientation && screen.orientation.lock) {
      await screen.orientation.lock("landscape");
    }
  } catch (err) {
    console.warn("Screen orientation lock unavailable on this browser:", err);
  }
}

// ----------------- Web Audio Engine -----------------
let audioCtx = null;
let sourceNode = null;
let bassFilter = null;
let gainNode = null;
let splitterNode = null;
let mergerNode = null;
let isAudioInitialized = false;

function initAudioEngine() {
  if (isAudioInitialized) return;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  audioCtx = new AudioContext();
  sourceNode = audioCtx.createMediaElementSource(player);

  bassFilter = audioCtx.createBiquadFilter();
  bassFilter.type = "lowshelf";
  bassFilter.frequency.value = 160;
  bassFilter.gain.value = 4.5;

  gainNode = audioCtx.createGain();
  gainNode.gain.value = 1;

  splitterNode = audioCtx.createChannelSplitter(2);
  mergerNode = audioCtx.createChannelMerger(2);

  sourceNode.connect(bassFilter);
  bassFilter.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  isAudioInitialized = true;
  setAudioProfile(gameSettings.audioProfile);
}

function setAudioProfile(mode) {
  const selectedMode = mode === "mono" ? "mono" : "atmos";
  gameSettings.audioProfile = selectedMode;

  audioProfileButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.audio === selectedMode);
  });

  if (!audioCtx || !bassFilter || !gainNode) {
    saveSettings();
    return;
  }

  try {
    bassFilter.disconnect();
    gainNode.disconnect();
    if (splitterNode) splitterNode.disconnect();
    if (mergerNode) mergerNode.disconnect();
  } catch (error) {
    console.warn("Audio graph reset failed:", error);
  }

  if (selectedMode === "mono") {
    bassFilter.connect(gainNode);
    gainNode.connect(splitterNode);
    splitterNode.connect(mergerNode, 0, 0);
    splitterNode.connect(mergerNode, 0, 1);
    splitterNode.connect(mergerNode, 1, 0);
    splitterNode.connect(mergerNode, 1, 1);
    mergerNode.connect(audioCtx.destination);
  } else {
    bassFilter.connect(gainNode);
    gainNode.connect(audioCtx.destination);
  }

  saveSettings();
}

function openSettings() {
  settingsMenu.classList.add("active");
  btnFullscreenToggle.textContent = document.fullscreenElement ? "DISABLE" : "ENABLE";
}

function closeSettings() {
  settingsMenu.classList.remove("active");
  saveSettings();
}

const psIcons = {
  stone: { symbol: "◈", class: "ps-stone" },
  lantern: { symbol: "✦", class: "ps-lantern" },
  silence: { symbol: "—", class: "ps-silence" }
};

let choiceHistory = [];

const personalityProfiles = {
  "stone-stone-stone": {
    id: "TYPE 01",
    title: {
      en: "THE UNYIELDING PROMETHEUS",
      ar: "بروميثيوس العنيد"
    },
    traits: {
      en: ["Radical", "Absolute truth", "Confrontational"],
      ar: ["جذري", "حقيقة مطلقة", "تصادمي"]
    },
    desc: {
      en: "You do not believe in compromise. You weigh the world in numbers and bare facts, even if everyone burns beneath them. You reject silence and softening the truth, preferring to be hated for honesty rather than loved for ignorance.",
      ar: "أنت لا تؤمن بالحلول الوسط. تزن العالم بالأرقام والحقائق المجردة، حتى لو احترق الجميع تحتها. ترفض الصمت وتخفيف الحقيقة، وتفضل أن تكون مكروهاً بسبب الصدق على أن تكون محبوباً بسبب الجهل."
    }
  },
  "stone-stone-lantern": {
    id: "TYPE 02",
    title: {
      en: "THE REFORMED CRITIC",
      ar: "الناقد المصلح"
    },
    traits: {
      en: ["Strict", "Self-correcting", "Mature realist"],
      ar: ["صارم", "مصحح لنفسه", "واقعي ناضج"]
    },
    desc: {
      en: "You begin as a merciless storm exposing every flaw, but soon realize that tearing down illusions alone cannot protect people. You become more than a harsh critic: you become a guide toward safety.",
      ar: "تبدأ كعاصفة لا تهادن تكشف كل عيب، لكنك تدرك سريعاً أن هدم الأوهام وحدها لا يمكن أن يحمي الناس. تصبح أكثر من مجرد ناقد قاسي: تصبح مرشداً نحو الأمان."
    }
  },
  "stone-stone-silence": {
    id: "TYPE 03",
    title: {
      en: "THE EXHAUSTED CASSANDRA",
      ar: "كاساندرا المرهقة"
    },
    traits: {
      en: ["Exhausted", "Disillusioned", "Bitterly withdrawn"],
      ar: ["مرهق", "مُخّيبة للأمل", "منسحب بمرارة"]
    },
    desc: {
      en: "You shouted the truth again and again, and no one listened. The world's indifference drove you to abandon them and swallow your voice. Some communities, you learned, choose their own end.",
      ar: "صرخت بالحقيقة مراراً وتكراراً، ولم يستمع أحد. دفعتك مبالاة العالم إلى التخلي عنهم وتجرع صوتك. تعلمت أن بعض المجتمعات تختار نهايتها بنفسها."
    }
  },
  "stone-silence-stone": {
    id: "TYPE 04",
    title: {
      en: "THE CALCULATED STRIKER",
      ar: "المهاجم المحسوب"
    },
    traits: {
      en: ["Tactical", "Unpredictable", "Alert"],
      ar: ["تكتيكي", "غير متوقع", "يقظ"]
    },
    desc: {
      en: "You ignite the truth, retreat into the shadows, and watch the reaction before striking again. You are not reckless; you measure every move and speak only when your words will leave a lasting scar.",
      ar: "تشعل الحقيقة، وتنسحب إلى الظلال، وتراقب رد الفعل قبل أن تضرب مرة أخرى. لست متهوراً؛ بل تقيس كل خطوة ولا تتحدث إلا عندما تترك كلماتك ندبة دائمة."
    }
  },
  "stone-silence-lantern": {
    id: "TYPE 05",
    title: {
      en: "THE WOUNDED SAVIOR",
      ar: "المنقذ الجريح"
    },
    traits: {
      en: ["Cautious", "Deeply compassionate", "Mature"],
      ar: ["حذر", "عميق التعاطف", "ناضج"]
    },
    desc: {
      en: "The world's reaction wounded you into temporary retreat, but you never lost your humanity. You withdrew to heal, then returned quietly to save them without asking for recognition.",
      ar: "جرحتك ردة فعل العالم فانسحبت مؤقتاً، لكنك لم تفقد إنسانيتك أبداً. انسحبت لتتعافى، ثم عدت بهدوء لإنقاذهم دون أن تطلب اعترافاً."
    }
  },
  "stone-silence-silence": {
    id: "TYPE 06",
    title: {
      en: "THE BROKEN ORACLE",
      ar: "العرّاف المكسور"
    },
    traits: {
      en: ["Broken", "Isolated", "Burned out"],
      ar: ["مكسور", "معزول", "مستهلك تماماً"]
    },
    desc: {
      en: "You began believing that truth sets people free, but honesty cost your spirit too much. Every word became a wound until you buried your tongue and voice beneath the ice.",
      ar: "بدأت مؤمناً بأن الحقيقة تحرر الناس، لكن الصدق كلف روحك الكثير. كل كلمة أصبحت جرحاً حتى دفنت لسانك وصوتك تحت الجليد."
    }
  },
  "stone-lantern-stone": {
    id: "TYPE 07",
    title: {
      en: "THE PARADOXICAL REBEL",
      ar: "المتمرد المتناقض"
    },
    traits: {
      en: ["Volatile", "Passionate", "Sharply honest"],
      ar: ["متقلب", "شغوف", "صادق بشدة"]
    },
    desc: {
      en: "You sway between mercy for humanity and fury at its blindness. You try to be warm, but cannot silence the truth when the moment demands a cry that cuts through apathy.",
      ar: "تتأرجح بين الرحمة بالبشرية والغضب من عمها. تحاول أن تكون دافئاً، لكن لا يمكنك إسكات الحقيقة عندما يتطلب الموقف صرخة تخترق اللامبالاة."
    }
  },
  "stone-lantern-lantern": {
    id: "TYPE 08",
    title: {
      en: "THE MARTYR BUILDER",
      ar: "الباني الشهيد"
    },
    traits: {
      en: ["Builder", "Patient", "Nurturing"],
      ar: ["بنّاء", "صبور", "مراعٍ"]
    },
    desc: {
      en: "After your first outburst, you learned that building is harder than destroying. You became a hidden hand that repairs the damage, carrying the weight of others' mistakes with philosophical patience.",
      ar: "بعد ثورتك الأولى، تعلمت أن البناء أسهل من الهدم. أصبحت يداً خفية تصلح الضرر، تحمل وزر أخطاء الآخرين بصبر فلسفي."
    }
  },
  "stone-lantern-silence": {
    id: "TYPE 09",
    title: {
      en: "THE DISILLUSIONED GUARDIAN",
      ar: "الحارس المُحبط"
    },
    traits: {
      en: ["Resigned sage", "Detached", "Lonely"],
      ar: ["حكيم مستسلم", "منفصل", "وحيد"]
    },
    desc: {
      en: "You tried confrontation, then kindness and guidance, and finally saw the same result: ingratitude. You closed your door quietly, knowing you had given everything to those who refused salvation.",
      ar: "حاولت المواجهة، ثم اللطف والإرشاد، وشهدت في النهاية نفس النتيجة: الجحود. أغلقت بابك بهدوء، واثقاً أنك قدمت كل شيء لمن رفضوا النجاة."
    }
  },
  "lantern-stone-stone": {
    id: "TYPE 10",
    title: {
      en: "THE PATIENT VOLCANO",
      ar: "البركان الصبور"
    },
    traits: {
      en: ["Patient until provoked", "Decisive", "Severe"],
      ar: ["صبور حتي يُستفز", "حاسم", "قاسي"]
    },
    desc: {
      en: "You begin endlessly tolerant and diplomatic, but when disorder goes too far, your patience erupts like a volcano. Mercy is not weakness; when withdrawn, its consequences are devastating.",
      ar: "تبدأ متسامحاً ودبلوماسياً بلا حدود، لكن عندما يتجاوز الفوضى الحد، ينفجر صبرك كالبركان. الرحمة ليست ضعفاً؛ وعندما تُسحب، تكون عواقبها مدمرة."
    }
  },
  "lantern-stone-lantern": {
    id: "TYPE 11",
    title: {
      en: "THE CHESSMASTER",
      ar: "لاعب الشطرنج"
    },
    traits: {
      en: ["Flexible", "Strategic", "Precise"],
      ar: ["مرن", "استراتيجي", "دقيق"]
    },
    desc: {
      en: "You balance gentleness and firmness with skill. You know when to offer comfort and when to shout a warning, protecting people from themselves with minimal loss.",
      ar: "توازن بين اللطف والشدة بمهارة. تعرف متى تقدم المواساة ومتى تطلق صيحة تحذير، تحمي الناس من أنفسهم بأقل الخسائر."
    }
  },
  "lantern-stone-silence": {
    id: "TYPE 12",
    title: {
      en: "THE PRAGMATIC GHOST",
      ar: "الشبح البراجماتي"
    },
    traits: {
      en: ["Practical", "Unflappable", "Self-contained"],
      ar: ["عملي", "ثابت الجأش", "مكتفٍ بذاته"]
    },
    desc: {
      en: "You tried to repair things with kindness, confronted danger when necessary, and left calmly when the ship began to sink, certain you had fulfilled your moral duty.",
      ar: "حاولت إصلاح الأمور باللطف، واجهت الخطر عند الضرورة، ورحلت بهدوء عندما بدأت السفينة بالغرق، متأكداً أنك أديت واجبك الأخلاقي."
    }
  },
  "lantern-lantern-stone": {
    id: "TYPE 13",
    title: {
      en: "THE CORNERED SHEPHERD",
      ar: "الراعي المحاصر"
    },
    traits: {
      en: ["Loyal", "Late courage", "Steadfast"],
      ar: ["مخلص", "شجاعة متأخرة", "ثابت"]
    },
    desc: {
      en: "A patient shepherd who prefers peace and quiet protection, you become a fierce defender when the flock is cornered and danger draws near.",
      ar: "راعٍ صبور يفضل السلام والحماية الهادئة، تتحول إلى مدافع شرس عندما تُحاصر القطيع ويقترب الخطر."
    }
  },
  "lantern-lantern-lantern": {
    id: "TYPE 14",
    title: {
      en: "THE EMBODIMENT OF GRACE",
      ar: "تجسيد النعمة واللطف"
    },
    traits: {
      en: ["Pure-hearted", "Selfless", "Warm flame"],
      ar: ["نقي القلب", "مثالي معطاء", "شعلة دافئة"]
    },
    desc: {
      en: "You are the lantern that never dies in the frost. You choose forgiveness, repair, and sacrifice at every turn, trusting love as the only cure for a broken world.",
      ar: "أنت الفانوس الذي لا ينطفئ أبداً وسط الصقيع. تختار الغفران والإصلاح والتضحية في كل منعطف، واثقاً بأن الحب هو العلاج الوحيد لعالم مكسور."
    }
  },
  "lantern-lantern-silence": {
    id: "TYPE 15",
    title: {
      en: "THE QUIET SHADOW",
      ar: "الظل الهادئ"
    },
    traits: {
      en: ["Hidden kindness", "Humble", "Distant"],
      ar: ["لطف خفي", "متواضع", "بعيد"]
    },
    desc: {
      en: "You give your warmth without letting anyone see you. You prefer their survival to remain a quiet mystery, retreating satisfied that you saved at least one life.",
      ar: "تمنح دفئك دون أن تدع أحداً يراك. تفضل أن تظل نجاتهم لغزاً هادئاً، منسحباً باكتفاء لأنك أنقذت حياة واحدة على الأقل."
    }
  },
  "lantern-silence-stone": {
    id: "TYPE 16",
    title: {
      en: "THE SHIELD IN THE DARK",
      ar: "الدرع في الظلام"
    },
    traits: {
      en: ["Cautious observer", "Decisive when needed", "Devoted"],
      ar: ["مراقب حذر", "حاسم عند الحاجة", "مفانٍ"]
    },
    desc: {
      en: "You act with compassion, then watch from a careful distance. When disaster threatens everyone, you step from the shadows and place their safety above your own.",
      ar: "تعمل بتعاطف، ثم تراقب من مسافة حذرة. عندما تهدد الكارثة الجميع، تخرج من الظلال وتضع سلامتهم فوق سلامتك الخاصة."
    }
  },
  "lantern-silence-lantern": {
    id: "TYPE 17",
    title: {
      en: "THE PERSISTENT HEALER",
      ar: "المعالج المثابر"
    },
    traits: {
      en: ["Patient", "Adaptable", "Empathetic"],
      ar: ["صبور", "قابل للتكيف", "متعاطف"]
    },
    desc: {
      en: "When kindness is met with rejection or suspicion, you withdraw without resentment, waiting for another moment to help in a way that protects their safety and dignity.",
      ar: "عندما يقابل اللطف بالرفض أو الشك، تنسحب بلا ضغينة، منتظراً لحظة أخرى للمساعدة بطريقة تحمي سلامتهم وكرامتهم."
    }
  },
  "lantern-silence-silence": {
    id: "TYPE 18",
    title: {
      en: "THE SOLITARY MONK",
      ar: "الراهب المنعزل"
    },
    traits: {
      en: ["Ascetic", "Detached", "Serene"],
      ar: ["زاهد", "منفصل", "هادئ النفس"]
    },
    desc: {
      en: "You began seeking inner repair, then realized this world needs silence and stillness more than words. You chose inner peace and noble isolation over human conflict.",
      ar: "بدأت ساعياً للإصلاح الداخلي، ثم أدركت أن هذا العالم يحتاج إلى الصمت والسكون أكثر من الكلمات. اخترت السلام الداخلي والعزلة النبيلة على الصراع البشري."
    }
  },
  "silence-stone-stone": {
    id: "TYPE 19",
    title: {
      en: "THE AWAKENED SLEEPER",
      ar: "النائم اليقظ"
    },
    traits: {
      en: ["Transformed", "Courage after silence", "Sudden"],
      ar: ["متحول", "شجاعة بعد صمت", "مفاجئ"]
    },
    desc: {
      en: "You began withdrawn to protect yourself, but shock shook away your fear and released one decisive cry of truth. Your first silence was not cowardice, but courage gathering pressure.",
      ar: "بدأت منسحباً لحماية نفسك، لكن الصدمة هزت خوفك وأطلقت صرخة حقيقة حاسمة واحدة. لم يكن صمتك الأول جبناً، بل شجاعة تجمع طاقتها."
    }
  },
  "silence-stone-lantern": {
    id: "TYPE 20",
    title: {
      en: "THE AWAKENED REPAIRER",
      ar: "المصلح اليقظ"
    },
    traits: {
      en: ["Quick learner", "Brave", "Humanistic"],
      ar: ["سريع التعلم", "شجاع", "إنساني"]
    },
    desc: {
      en: "You overcame your first fear of cruelty and chose to help save what could be saved with wisdom and mercy.",
      ar: "تغلبت على خوفك الأول من القسوة واخترت المساعدة في إنقاذ ما يمكن إنقاذه بحكمة ورحمة."
    }
  },
  "silence-stone-silence": {
    id: "TYPE 21",
    title: {
      en: "THE FLASH IN THE STORM",
      ar: "وميض وسط العاصفة"
    },
    traits: {
      en: ["Hesitant", "Overcautious", "Unsteady"],
      ar: ["متردد", "حذر مبالغ فيه", "غير مستقر"]
    },
    desc: {
      en: "You tried courage for a moment, then fear pulled you back into your shell. The struggle between conscience and survival keeps you in perpetual unease.",
      ar: "جربت الشجاعة لحظة، ثم أعادك الخوف إلى قوقعتك. الصراع بين الضمير والبقاء يجعلك في قلق دائم."
    }
  },
  "silence-lantern-stone": {
    id: "TYPE 22",
    title: {
      en: "THE RELUCTANT DEFENDER",
      ar: "المدافع المُتردد"
    },
    traits: {
      en: ["Responsible despite fear", "Realistic", "Resilient"],
      ar: ["مسؤول رغم الخوف", "واقعي", "مرن الصمود"]
    },
    desc: {
      en: "You did not want to intervene, but conscience cornered you step by step until you stood at the front line against the collapse.",
      ar: "لم ترغب في التدخل، لكن الضمير حاصرك خطوة بخطوة حتى وقفت في خط المواجهة الأمامي ضد الانهيار."
    }
  },
  "silence-lantern-lantern": {
    id: "TYPE 23",
    title: {
      en: "THE GENTLE SHADOW",
      ar: "الظل اللطيف"
    },
    traits: {
      en: ["Peaceful", "Secret benefactor", "Survivor"],
      ar: ["مسالم", "فاعل خير خفي", "ناجٍ"]
    },
    desc: {
      en: "You chose a quiet survival. When the chance came to help unseen, you gave everything you could and disappeared once more.",
      ar: "اخترت البقاء هادئاً. عندما حانت الفرصة للمساعدة دون أن تُرى، قدمت كل ما تستطيع واختفيت مرة أخرى."
    }
  },
  "silence-lantern-silence": {
    id: "TYPE 24",
    title: {
      en: "THE SPECTATOR OF FATE",
      ar: "متفرج الأقدار"
    },
    traits: {
      en: ["Observer", "Passive empath", "Cautious"],
      ar: ["مراقب", "متعاطف سلبي", "حذر"]
    },
    desc: {
      en: "You witness the world's tragedies with a wounded heart, reaching out carefully to alter the course before retreating to your safe corner.",
      ar: "تشهد مآسي العالم بقلب مجروح، تمد يداً حذرة لتغيير المسار قبل أن تنسحب إلى زاويتك الآمنة."
    }
  },
  "silence-silence-stone": {
    id: "TYPE 25",
    title: {
      en: "THE FINAL REBELLION",
      ar: "التمرد الأخير"
    },
    traits: {
      en: ["Late resister", "Rebel", "Explosive"],
      ar: ["مقاوم متأخر", "متمرد", "متفجر"]
    },
    desc: {
      en: "You endured in silence until the bow could bend no further. When danger peaked, you broke your silence with an irreversible final cry.",
      ar: "تحملت بصمت حتى بلغ القوس نهايته ولم يعد يحتمل الانحناء. وعندما بلغ الخطر ذروته، كسرت صمتك بصرخة أخيرة لا رجعة فيها."
    }
  },
  "silence-silence-lantern": {
    id: "TYPE 26",
    title: {
      en: "THE SECRET BREADCRUMB",
      ar: "الفتات الخفي"
    },
    traits: {
      en: ["Hidden", "Conscientious survivor", "Wise"],
      ar: ["خفي", "ناجٍ ذو ضمير حي", "حكيم"]
    },
    desc: {
      en: "You chose to stay alive and unseen, but left a small flame in the darkness for anyone who still wanted to find safety.",
      ar: "اخترت أن تبقى حياً وخفياً، لكنك تركت شعلة صغيرة في الظلام لأي شخص ما زال يرغب في العثور على الأمان."
    }
  },
  "silence-silence-silence": {
    id: "TYPE 27",
    title: {
      en: "THE ICE MONOLITH",
      ar: "تمثال الجليد المطلق"
    },
    traits: {
      en: ["Absolute survival", "Completely withdrawn", "Fortified"],
      ar: ["بقاء مطلق", "منسحب كلياً", "حصين"]
    },
    desc: {
      en: "You chose absolute silence at every turn. Your inner world is a fortress untouched by human noise; you would rather live alone than offer your voice to a world that hates the honest.",
      ar: "اخترت الصمت المطلق في كل منعطف. عالمك الداخلي حصن لم يمسه صخب البشر؛ تفضل العيش وحيداً على أن تقدم صوتك لعالم يكره الصادقين."
    }
  }
};

const availablePatternsList = Object.keys(personalityProfiles);
const matrixAchievements = availablePatternsList.map((patternKey) => {
  const profile = personalityProfiles[patternKey];
  return {
    id: `matrix_${patternKey}`,
    title: profile.title,
    desc: {
      en: `Unlock ${profile.id}: ${profile.title.en}`,
      ar: `افتح ${profile.id}: ${profile.title.ar}`
    }
  };
});

gameAchievements = [
  ...gameAchievements.slice(0, 5),
  ...gameAchievements.slice(5, 10),
  ...matrixAchievements,
  ...gameAchievements.slice(10)
];

function checkCollectionAchievements() {
  const endingsComplete = ["ending_stone", "ending_lantern", "ending_silence"]
    .every((id) => gameAchievements.some((achievement) => achievement.id === id && achievement.unlocked));
  if (endingsComplete) unlockAchievement("all_endings");

  const matricesComplete = matrixAchievements
    .every((achievement) => gameAchievements.some((item) => item.id === achievement.id && item.unlocked));
  if (matricesComplete) unlockAchievement("all_matrices");
}

function getPersonalityResult(history) {
  const k1 = history[0] || "silence";
  const k2 = history[1] || "silence";
  const k3 = history[2] || "silence";
  const key = `${k1}-${k2}-${k3}`;

  const profile = personalityProfiles[key] || personalityProfiles["silence-silence-silence"];
  const language = normalizeLanguage(gameSettings.language);

  return {
    keyDisplay: `${k1.toUpperCase()} // ${k2.toUpperCase()} // ${k3.toUpperCase()}`,
    data: {
      id: profile.id,
      title: profile.title[language] || profile.title.en,
      traits: profile.traits[language] || profile.traits.en,
      desc: profile.desc[language] || profile.desc.en
    }
  };
}

// 4. Multi-Tier Decision System (3 Interactive Choice Nodes)
const dbhDecisions = {
  cake_event: {
    prompt: "STRUCTURAL FRACTURE IMMINENT // THE CAKE",
    choices: [
      {
        tag: "CONFRONT [STONE]",
        text: "Expose the collapse.",
        type: "stone",
        nextNode: "journey_event"
      },
      {
        tag: "MERCY [LANTERN]",
        text: "Mend it quietly.",
        type: "lantern",
        nextNode: "journey_event"
      },
      {
        tag: "FROST [SILENCE]",
        text: "Fade into shadows.",
        type: "silence",
        nextNode: "journey_event"
      }
    ]
  },
  journey_event: {
    prompt: "MORAL STRAIN // ENTERING THE SANCTUARY",
    choices: [
      {
        tag: "HARDEN [STONE]",
        text: "Prepare the bitter blow.",
        type: "stone",
        nextNode: "hall_event"
      },
      {
        tag: "CARRY [LANTERN]",
        text: "Hold the fragile light.",
        type: "lantern",
        nextNode: "hall_event"
      },
      {
        tag: "SHRINK [SILENCE]",
        text: "Withdraw your warmth.",
        type: "silence",
        nextNode: "hall_event"
      }
    ]
  },
  hall_event: {
    prompt: "CEILING TIMBER COLLAPSE // THE GREAT HALL",
    choices: [
      {
        tag: "DEFIANCE [STONE]",
        text: "Scream the fall.",
        type: "stone",
        isFinal: true
      },
      {
        tag: "GUIDE [LANTERN]",
        text: "Lead them to light.",
        type: "lantern",
        isFinal: true
      },
      {
        tag: "ENDURE [SILENCE]",
        text: "Bury your voice.",
        type: "silence",
        isFinal: true
      }
    ]
  }
};

// ----------------- Save and load system -----------------
function saveProgressFrame(data) {
  const currentSave = {
    inProgress: true,
    isCompleted: false,
    scores: { ...state },
    sequenceName: data.sequenceName || null,
    frameIndex: data.frameIndex !== undefined ? data.frameIndex : 0,
    currentTime: data.currentTime !== undefined ? data.currentTime : 0,
    isAtDecision: data.isAtDecision || false,
    decisionKey: data.decisionKey || null,
    lastFrameBeforeDecision: data.lastFrameBeforeDecision || null,
    choiceHistory: [...choiceHistory],
    gameMode: currentGameMode,
    randomPattern: selectedRandomPattern ? [...selectedRandomPattern] : null
  };
  localStorage.setItem(SAVE_KEY, JSON.stringify(currentSave));
  updateContinueButtonVisibility();
}

function getSavedGame() {
  const rawSave = localStorage.getItem(SAVE_KEY);
  if (!rawSave) return null;
  try {
    const saved = JSON.parse(rawSave);
    if (!saved || !saved.inProgress || saved.isCompleted) {
      localStorage.removeItem(SAVE_KEY);
      return null;
    }
    return saved;
  } catch (error) {
    localStorage.removeItem(SAVE_KEY);
    return null;
  }
}

function updateContinueButtonVisibility() {
  btnContinue.hidden = !getSavedGame();
}

function completeGameSession() {
  localStorage.removeItem(SAVE_KEY);
  updateContinueButtonVisibility();
}

function saveCurrentState() {
  if (dbhOverlay.classList.contains("active")) return;
  if (activeSequence && activeSequenceName) {
    saveProgressFrame({
      sequenceName: activeSequenceName,
      frameIndex: activeSequenceIndex,
      currentTime: player.currentTime,
      isAtDecision: false
    });
  }
}

// ----------------- Main menu and pause flow -----------------
function showMainMenu() {
  hidePauseButton();
  activeSequence = null;
  activeSequenceName = null;
  activeSequenceIndex = 0;
  if (subtitleBox) subtitleBox.classList.remove("show");
  isEndingAnalysisActive = false;
  loadingScreen.classList.remove("active");
  dbhOverlay.classList.remove("active");
  pauseMenu.classList.remove("active");
  updateContinueButtonVisibility();
  mainMenu.classList.add("active");

  player.src = "videos/boot_03_menu_background.mp4";
  player.loop = true;
  applyVideoAudioSettings();
  player.play().catch(() => {
    window.addEventListener("click", () => player.play(), { once: true });
  });

  triggerPostIntroLog();
}

function togglePauseGame() {
  if (mainMenu.classList.contains("active") || loadingScreen.classList.contains("active")) {
    return;
  }

  isGamePaused = !isGamePaused;

  if (isGamePaused) {
    let targetIndex = activeSequenceIndex;
    if (player.duration && (player.duration - player.currentTime <= 1.0 || player.currentTime / player.duration > 0.9)) {
      targetIndex = activeSequenceIndex + 1;
    }

    if (activeSequence && !dbhOverlay.classList.contains("active")) {
      saveProgressFrame({
        sequenceName: activeSequenceName,
        frameIndex: Math.min(targetIndex, activeSequence.length - 1),
        isAtDecision: false
      });
    }

    player.pause();
    pauseMenu.classList.add("active");
    if (timerBar && (timerBar.classList.contains("running") || timerBar.classList.contains("timed-running"))) {
      timerBar.style.animationPlayState = "paused";
    }
  } else {
    pauseMenu.classList.remove("active");
    if (timerBar && (timerBar.classList.contains("running") || timerBar.classList.contains("timed-running"))) {
      timerBar.style.animationPlayState = "running";
    }
    if (!dbhOverlay.classList.contains("active")) {
      applyVideoAudioSettings();
      player.play().catch((e) => console.warn(e));
    }
  }
}

btnPauseTrigger.addEventListener("click", togglePauseGame);
btnPauseResume.addEventListener("click", togglePauseGame);
btnPauseSettings.addEventListener("click", openSettings);
btnPauseQuit.addEventListener("click", () => {
  isGamePaused = false;
  pauseMenu.classList.remove("active");
  if (timerBar) {
    timerBar.classList.remove("running", "timed-running", "random-running");
    timerBar.style.animationPlayState = "running";
    timerBar.style.width = "100%";
  }
  showMainMenu();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && settingsMenu.classList.contains("active")) {
    closeSettings();
    return;
  }
  if (e.key === "Escape" && creditsMenu.classList.contains("active")) {
    closeCredits();
    return;
  }
  if (e.key === "Escape" && updateLogModal.classList.contains("active")) {
    closeUpdateLog();
    return;
  }
  if (e.key === "Escape" && quitConfirmModal.classList.contains("active")) {
    quitConfirmModal.classList.remove("active");
    return;
  }

  if (e.key !== "Escape" && e.code !== "Escape") return;

  if (
    isIntroActive ||
    isEndingAnalysisActive ||
    mainMenu.classList.contains("active") ||
    loadingScreen.classList.contains("active")
  ) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }

  e.preventDefault();
  togglePauseGame();
});

volumeSlider.addEventListener("input", (event) => {
  gameSettings.volume = Number(event.target.value);
  volumeValDisplay.textContent = `${gameSettings.volume}%`;
  player.volume = gameSettings.volume / 100;
  if (gameSettings.volume > 0 && muteToggle.checked) {
    muteToggle.checked = false;
    gameSettings.muted = false;
    player.muted = false;
  }
  saveSettings();
});

muteToggle.addEventListener("change", (event) => {
  gameSettings.muted = event.target.checked;
  player.muted = gameSettings.muted;
  saveSettings();
});

if (subtitlesToggle) {
  subtitlesToggle.addEventListener("change", (event) => {
    gameSettings.subtitles = event.target.checked;
    if (!gameSettings.subtitles && subtitleBox) {
      subtitleBox.classList.remove("show");
    }
    saveSettings();
  });
}

btnFullscreenToggle.addEventListener("click", async () => {
  if (isDesktopApp) return;
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
    btnFullscreenToggle.textContent = document.fullscreenElement ? "DISABLE" : "ENABLE";
  } catch (error) {
    console.warn("Fullscreen change was not available:", error);
  }
});

document.addEventListener("fullscreenchange", () => {
  btnFullscreenToggle.textContent = document.fullscreenElement ? "DISABLE" : "ENABLE";
});

btnSettingsClose.addEventListener("click", closeSettings);

function openCredits() {
  creditsMenu.classList.add("active");
}
function closeCredits() {
  creditsMenu.classList.remove("active");
}
btnCredits.addEventListener("click", openCredits);
btnCreditsClose.addEventListener("click", closeCredits);

function openAchievements() {
  renderAchievementsList();
  achievementsMenu.classList.add("active");
}

function closeAchievements() {
  achievementsMenu.classList.remove("active");
}

btnAchievements.addEventListener("click", openAchievements);
btnAchievementsClose.addEventListener("click", closeAchievements);

function openUpdateLog() {
  updateLogModal.classList.add("active");
}
function closeUpdateLog() {
  updateLogModal.classList.remove("active");
}

if (quitTriggerBtn) {
  quitTriggerBtn.addEventListener("click", (event) => {
    event.preventDefault();
    quitConfirmModal.classList.add("active");
  });
}

btnQuitCancel.addEventListener("click", () => {
  quitConfirmModal.classList.remove("active");
});

btnQuitConfirm.addEventListener("click", () => {
  quitConfirmModal.classList.remove("active");
  saveCurrentState();

  if (isDesktopApp) {
    window.desktopAPI.quitApp();
    return;
  }

  window.close();
  window.setTimeout(() => {
    player.pause();
    mainMenu.classList.remove("active");
    settingsMenu.classList.remove("active");
    creditsMenu.classList.remove("active");
    updateLogModal.classList.remove("active");
    webShutdownScreen.classList.add("active");
  }, 100);
});

btnVersionLog.addEventListener("click", openUpdateLog);
btnVersionLog.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openUpdateLog();
  }
});
btnUpdateLogClose.addEventListener("click", closeUpdateLog);
btnRebootSession.addEventListener("click", () => {
  webShutdownScreen.classList.remove("active");
  showMainMenu();
});

gfxButtons.forEach((button) => {
  button.addEventListener("click", () => setGraphicsProfile(button.dataset.perf));
});

audioProfileButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
    setAudioProfile(button.dataset.audio);
  });
});

window.addEventListener(
  "pointerdown",
  () => {
    initAudioEngine();
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  },
  { once: true }
);

// ----------------- Video Sequence Playback & Subtitle Hook -----------------
function playBootSequence() {
  loadingScreen.classList.remove("active");
  hidePauseButton();

  if (bootIndex < bootSequence.length) {
    player.loop = false;
    player.src = bootSequence[bootIndex];
    bootIndex++;
    applyVideoAudioSettings();
    player.play().catch(() => {
      player.muted = true;
      player.play().catch((e) => console.error(e));
    });
    player.onended = () => playBootSequence();
  } else {
    player.onended = null;
    showMainMenu();
  }
}

function playSequence(sequenceName, onComplete, startFrameIndex = 0, stopAfterFrameIndex = null) {
  const sequence = videoSequences[sequenceName];
  if (!sequence || sequence.length === 0) {
    if (onComplete) onComplete();
    return;
  }

  player.loop = false;
  activeSequence = sequence;
  activeSequenceName = sequenceName;
  activeSequenceIndex = Math.max(0, Math.min(startFrameIndex, sequence.length - 1));

  player.onended = () => {
    activeSequenceIndex += 1;
    if (
      activeSequenceIndex < activeSequence.length &&
      (stopAfterFrameIndex === null || activeSequenceIndex <= stopAfterFrameIndex)
    ) {
      loadAndPlaySequenceClip(sequenceName, onComplete);
    } else {
      activeSequence = null;
      activeSequenceName = null;
      player.onended = null;
      if (subtitleBox) subtitleBox.classList.remove("show");
      if (onComplete) onComplete();
    }
  };

  loadAndPlaySequenceClip(sequenceName, onComplete);
}

function loadAndPlaySequenceClip(sequenceName, onComplete) {
  if (subtitleBox) subtitleBox.classList.remove("show");

  if (!sequenceName.startsWith("ending_")) {
    saveProgressFrame({
      sequenceName: sequenceName,
      frameIndex: activeSequenceIndex,
      isAtDecision: false
    });
  }

  const source = activeSequence[activeSequenceIndex];
  player.src = source;
  applyVideoAudioSettings();
  player.currentTime = 0;
  player.play().catch((error) => {
    console.warn(`Autoplay audio issue, playing muted:`, error);
    player.muted = true;
    player.play().catch((err) => console.error("Error playing:", err));
  });
}

// ----------------- Real-time Subtitles Sync -----------------
player.addEventListener("timeupdate", () => {
  if (!gameSettings.subtitles || !activeSequence || !activeSequenceName || !subtitleBox) {
    if (subtitleBox) subtitleBox.classList.remove("show");
    return;
  }

  const currentSrc = activeSequence[activeSequenceIndex] || "";
  const filename = currentSrc.split("/").pop();
  const selectedDictionary = subtitleDictionaries[gameSettings.language] || subtitleDictionaries.en;
  const cues = selectedDictionary[filename] || subtitlesData[filename];

  if (!cues || cues.length === 0) {
    subtitleBox.classList.remove("show");
    return;
  }

  const currentTime = player.currentTime;
  const currentCue = cues.find((c) => currentTime >= c.start && currentTime <= c.end);

  if (currentCue) {
    subtitleBox.innerHTML = currentCue.text;
    subtitleBox.classList.add("show");
  } else {
    subtitleBox.classList.remove("show");
  }
});

// ----------------- Decision HUD Nodes -----------------
function displayDBHChoice(nodeKey, previousSequenceName = null) {
  const nodeData = dbhDecisions[nodeKey];
  if (!nodeData) return;
  const localizedNode = decisionTranslations[gameSettings.language]?.[nodeKey] || decisionTranslations.en[nodeKey];

  if (subtitleBox) subtitleBox.classList.remove("show");

  if (nodeKey === "cake_event") {
    isIntroActive = false;
  }

  if (decisionTimeoutTimer) {
    window.clearTimeout(decisionTimeoutTimer);
    decisionTimeoutTimer = null;
  }

  let lastClip = null;
  if (previousSequenceName && videoSequences[previousSequenceName]) {
    const list = videoSequences[previousSequenceName];
    lastClip = list[list.length - 1];
  }

  saveProgressFrame({
    isAtDecision: true,
    decisionKey: nodeKey,
    sequenceName: previousSequenceName,
    frameIndex: previousSequenceName && videoSequences[previousSequenceName]
      ? videoSequences[previousSequenceName].length - 1
      : 0,
    currentTime: 0,
    lastFrameBeforeDecision: lastClip
  });

  hudPrompt.textContent = localizedNode.prompt;
  nodesContainer.replaceChildren();

  if (timerBar) {
    timerBar.classList.remove("running", "timed-running", "random-running");
    timerBar.style.animationPlayState = "running";
    timerBar.style.width = "100%";
    if (currentGameMode === "timed") {
      void timerBar.offsetWidth;
      timerBar.classList.add("timed-running");
      decisionTimeoutTimer = window.setTimeout(() => {
        autoSelectSilenceTimeout(nodeKey);
      }, 10000);
    } else if (currentGameMode === "random") {
      void timerBar.offsetWidth;
      timerBar.classList.add("random-running");
      decisionTimeoutTimer = window.setTimeout(() => {
        autoSelectRandomTimeout(nodeKey);
      }, RANDOM_DECISION_TIMEOUT_MS);
    }
  }

  nodeData.choices.forEach((choice) => {
    const card = document.createElement("button");
    card.className = "dbh-choice-node";
    card.type = "button";

    const iconData = psIcons[choice.type] || { symbol: "✖", class: "ps-cross" };
    const btnIcon = document.createElement("div");
    btnIcon.className = `ps-icon ${iconData.class}`;
    btnIcon.textContent = iconData.symbol;

    const textWrapper = document.createElement("div");
    textWrapper.className = "node-desc-wrapper";

    const tag = document.createElement("span");
    tag.className = "node-action-type";
    const choiceIndex = nodeData.choices.indexOf(choice) * 2;
    tag.textContent = localizedNode.choices[choiceIndex] || choice.tag;

    const description = document.createElement("span");
    description.className = "node-desc";
    description.textContent = localizedNode.choices[choiceIndex + 1] || choice.text;

    textWrapper.append(tag, description);
    card.append(btnIcon, textWrapper);

    card.addEventListener("click", () => {
      if (decisionTimeoutTimer) {
        window.clearTimeout(decisionTimeoutTimer);
        decisionTimeoutTimer = null;
      }
      if (timerBar) {
        timerBar.classList.remove("timed-running", "random-running");
        timerBar.style.animationPlayState = "running";
        timerBar.style.width = "100%";
      }
      dbhOverlay.classList.remove("active");
      if (nodeKey === "cake_event") unlockAchievement("act_one_done");
      if (nodeKey === "journey_event") unlockAchievement("act_two_done");
      trackAndUnlockPath(nodeKey, choice.type);
      state[choice.type] += 1;
      choiceHistory.push(choice.type);
      applyVideoAudioSettings();

      let nextSeqKey;
      if (nodeKey === "cake_event") {
        nextSeqKey = `scene1_${choice.type}`;
      } else if (nodeKey === "journey_event") {
        nextSeqKey = `scene2_${choice.type}`;
      } else {
        nextSeqKey = `scene3_${choice.type}`;
      }

      saveProgressFrame({
        sequenceName: nextSeqKey,
        frameIndex: 0,
        isAtDecision: false
      });

      playSequence(nextSeqKey, () => {
        if (choice.isFinal) {
          resolveDBHEnding();
        } else {
          displayDBHChoice(choice.nextNode, nextSeqKey);
        }
      });
    });

    nodesContainer.appendChild(card);
  });

  dbhOverlay.classList.add("active");
}

function showGameModeSelector() {
  if (subtitleBox) subtitleBox.classList.remove("show");

  hudPrompt.textContent = getTranslation("modePrompt");
  nodesContainer.replaceChildren();
  if (timerBar) {
    timerBar.classList.remove("timed-running", "random-running");
    timerBar.style.animationPlayState = "running";
    timerBar.style.width = "100%";
  }

  [
    {
      mode: "classic",
      icon: "◈",
      iconClass: "ps-stone",
      tag: getTranslation("classic"),
      description: getTranslation("classicDesc")
    },
    {
      mode: "timed",
      icon: "✦",
      iconClass: "ps-lantern",
      tag: getTranslation("timed"),
      description: getTranslation("timedDesc")
    },
    {
      mode: "random",
      icon: "—",
      iconClass: "ps-silence",
      tag: getTranslation("random"),
      description: getTranslation("randomDesc")
    }
  ].forEach((modeOption) => {
    const card = document.createElement("button");
    card.className = "dbh-choice-node";
    card.type = "button";

    const icon = document.createElement("div");
    icon.className = `ps-icon ${modeOption.iconClass}`;
    icon.textContent = modeOption.icon;

    const textWrapper = document.createElement("div");
    textWrapper.className = "node-desc-wrapper";
    const tag = document.createElement("span");
    tag.className = "node-action-type";
    tag.textContent = modeOption.tag;
    const description = document.createElement("span");
    description.className = "node-desc";
    description.textContent = modeOption.description;
    textWrapper.append(tag, description);
    card.append(icon, textWrapper);

    card.addEventListener("click", () => {
      unlockAchievement("first_step");
      if (modeOption.mode === "timed" || modeOption.mode === "random") {
        unlockAchievement("speed_demon");
      }
      currentGameMode = modeOption.mode;
      dbhOverlay.classList.remove("active");
      playSequence("intro", () => {
        displayDBHChoice("cake_event", "intro");
      }, 1);
    });
    nodesContainer.appendChild(card);
  });

  dbhOverlay.classList.add("active");
}

function autoSelectSilenceTimeout(nodeKey) {
  decisionTimeoutTimer = null;
  if (!dbhOverlay.classList.contains("active")) return;
  if (nodeKey === "cake_event") unlockAchievement("act_one_done");
  if (nodeKey === "journey_event") unlockAchievement("act_two_done");

  const silenceChoice = dbhDecisions[nodeKey]?.choices.find((choice) => choice.type === "silence");
  if (!silenceChoice) return;
  trackAndUnlockPath(nodeKey, silenceChoice.type);

  const selectedNode = silenceChoice.nextNode;
  const sequenceName = nodeKey === "cake_event"
    ? "scene1_silence"
    : nodeKey === "journey_event"
      ? "scene2_silence"
      : "scene3_silence";

  if (timerBar) {
    timerBar.classList.remove("timed-running", "random-running");
    timerBar.style.width = "0%";
  }
  dbhOverlay.classList.remove("active");
  state.silence += 1;
  choiceHistory.push("silence");
  applyVideoAudioSettings();
  saveProgressFrame({ sequenceName, frameIndex: 0, isAtDecision: false });

  playSequence(sequenceName, () => {
    if (silenceChoice.isFinal) {
      resolveDBHEnding();
    } else {
      displayDBHChoice(selectedNode, sequenceName);
    }
  });
}

function autoSelectRandomTimeout(nodeKey) {
  decisionTimeoutTimer = null;
  if (!dbhOverlay.classList.contains("active")) return;
  if (nodeKey === "cake_event") unlockAchievement("act_one_done");
  if (nodeKey === "journey_event") unlockAchievement("act_two_done");

  if (!selectedRandomPattern) {
    const availableTypes = ["stone", "lantern", "silence"];
    const patterns = availableTypes.flatMap((first) =>
      availableTypes.flatMap((second) =>
        availableTypes.map((third) => [first, second, third])
      )
    );
    selectedRandomPattern = patterns[Math.floor(Math.random() * patterns.length)];
  }

  const currentStep = nodeKey === "cake_event"
    ? 0
    : nodeKey === "journey_event"
      ? 1
      : 2;
  const randomType = selectedRandomPattern[currentStep];
  const randomChoice = dbhDecisions[nodeKey]?.choices.find((choice) => choice.type === randomType);
  if (!randomChoice) return;
  trackAndUnlockPath(nodeKey, randomChoice.type);

  const nextSeqKey = nodeKey === "cake_event"
    ? `scene1_${randomType}`
    : nodeKey === "journey_event"
      ? `scene2_${randomType}`
      : `scene3_${randomType}`;
  const isFinalNode = nodeKey === "hall_event";

  if (timerBar) {
    timerBar.classList.remove("random-running");
    timerBar.style.width = "0%";
  }
  dbhOverlay.classList.remove("active");
  state[randomType] += 1;
  choiceHistory.push(randomType);
  applyVideoAudioSettings();
  saveProgressFrame({ sequenceName: nextSeqKey, frameIndex: 0, isAtDecision: false });

  playSequence(nextSeqKey, () => {
    if (isFinalNode) {
      selectedRandomPattern = null;
      resolveDBHEnding();
    } else {
      displayDBHChoice(randomChoice.nextNode, nextSeqKey);
    }
  });
}

function resolveDBHEnding() {
  isEndingAnalysisActive = false;

  let endingType = "stone";
  if (state.lantern >= 2 || (state.lantern >= 1 && state.lantern >= state.stone)) {
    endingType = "lantern";
  } else if (state.silence >= 2) {
    endingType = "silence";
  }

  playSequence(`ending_${endingType}`, () => {
    isEndingAnalysisActive = true;
    completeGameSession();
    hidePauseButton();

    const personality = getPersonalityResult(choiceHistory);
    unlockAchievement("game_completed");
    unlockAchievement(`ending_${endingType}`);
    unlockAchievement(`matrix_${choiceHistory.join("-")}`);
    unlockAchievement(`complete_${currentGameMode}`);
    checkCollectionAchievements();
    hudPrompt.textContent = getTranslation("timelineComplete");
    nodesContainer.replaceChildren();

    if (timerBar) {
      timerBar.classList.remove("running", "timed-running", "random-running");
      timerBar.style.width = "100%";
    }

    const card = document.createElement("div");
    card.className = "personality-card";
    card.innerHTML = `
      <div class="matrix-header">
        <div>
          <span class="matrix-tag">${getTranslation("matrixEvaluation")}</span>
          <h3 class="matrix-title">${personality.data.id}: ${personality.data.title}</h3>
        </div>
        <div class="matrix-path">${personality.keyDisplay}</div>
      </div>
      <p class="matrix-desc">${personality.data.desc}</p>
      <div class="matrix-traits">
        ${personality.data.traits.map((trait) => `<span class="trait-badge">${trait}</span>`).join("")}
      </div>
    `;

    const returnButton = document.createElement("button");
    returnButton.className = "dbh-choice-node";
    returnButton.type = "button";

    const btnIcon = document.createElement("div");
    btnIcon.className = "ps-icon ps-cross";
    btnIcon.textContent = "✖";

    const textWrapper = document.createElement("div");
    textWrapper.className = "node-desc-wrapper";

    const tag = document.createElement("span");
    tag.className = "node-action-type";
    tag.textContent = getTranslation("mainMenu");

    const description = document.createElement("span");
    description.className = "node-desc";
    description.textContent = getTranslation("returnTitle");

    textWrapper.append(tag, description);
    returnButton.append(btnIcon, textWrapper);

    returnButton.addEventListener("click", () => {
      completeGameSession();
      choiceHistory = [];
      showMainMenu();
    });

    card.appendChild(returnButton);
    nodesContainer.appendChild(card);
    dbhOverlay.classList.add("active");
  });
}

// ----------------- Startup and Navigation Controls -----------------
window.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(() => playBootSequence(), 1000);
});

btnNewGame.addEventListener("click", () => {
  triggerMobileLandscapeFullscreen();
  choiceHistory = [];
  state.stone = 0;
  state.lantern = 0;
  state.silence = 0;
  currentGameMode = "classic";
  selectedRandomPattern = null;
  isIntroActive = true;
  isEndingAnalysisActive = false;
  mainMenu.classList.remove("active");
  applyVideoAudioSettings();
  showPauseButton();

  playSequence("intro", () => {
    showGameModeSelector();
  }, 0, 0);
});

btnContinue.addEventListener("click", () => {
  triggerMobileLandscapeFullscreen();
  const saved = getSavedGame();
  if (!saved) {
    updateContinueButtonVisibility();
    return;
  }

  state.stone = saved.scores.stone;
  state.lantern = saved.scores.lantern;
  state.silence = saved.scores.silence;
  choiceHistory = Array.isArray(saved.choiceHistory) ? [...saved.choiceHistory] : [];
  currentGameMode = ["classic", "timed", "random"].includes(saved.gameMode)
    ? saved.gameMode
    : "classic";
  selectedRandomPattern = Array.isArray(saved.randomPattern) && saved.randomPattern.length === 3
    ? [...saved.randomPattern]
    : null;
  isIntroActive = !saved.isAtDecision && saved.sequenceName === "intro";
  isEndingAnalysisActive = false;
  mainMenu.classList.remove("active");
  applyVideoAudioSettings();
  showPauseButton();

  if (saved.isAtDecision && saved.decisionKey) {
    const savedSequence = saved.sequenceName && videoSequences[saved.sequenceName];
    const savedFrameIndex = savedSequence
      ? Math.max(0, Math.min(Number(saved.frameIndex) || 0, savedSequence.length - 1))
      : 0;
    const savedFrameSource = savedSequence ? savedSequence[savedFrameIndex] : saved.lastFrameBeforeDecision;

    if (savedFrameSource) {
      activeSequence = savedSequence || null;
      activeSequenceName = saved.sequenceName || null;
      activeSequenceIndex = savedFrameIndex;
      player.loop = false;
      player.src = savedFrameSource;
      applyVideoAudioSettings();
      player.currentTime = 0;
      player.play().catch(() => {
        player.muted = true;
        player.play();
      });

      player.onended = () => {
        player.onended = null;
        displayDBHChoice(saved.decisionKey);
      };
    } else {
      displayDBHChoice(saved.decisionKey);
    }
    return;
  }

  if (saved.sequenceName && videoSequences[saved.sequenceName]) {
    playSequence(
      saved.sequenceName,
      () => {
        if (saved.sequenceName === "intro") {
          displayDBHChoice("cake_event", "intro");
        } else if (saved.sequenceName.startsWith("scene1_")) {
          displayDBHChoice("journey_event", saved.sequenceName);
        } else if (saved.sequenceName.startsWith("scene2_")) {
          displayDBHChoice("hall_event", saved.sequenceName);
        } else if (saved.sequenceName.startsWith("scene3_")) {
          resolveDBHEnding();
        }
      },
      saved.frameIndex
    );
  }
});

btnSettings.addEventListener("click", openSettings);

loadExploredPaths();
loadAchievements();
loadSettings();
checkVersionStatus();
checkGitHubReleases();
window.addEventListener("online", checkGitHubReleases);
displayButtons.forEach((button) => {
  button.addEventListener("click", () => applyDesktopDisplayMode(button.dataset.mode));
});
setupPlatformSettings();

// Fast-forward / Skip current frame
let skipCooldownActive = false;

function skipCurrentFrame() {
  if (
    skipCooldownActive ||
    mainMenu.classList.contains("active") ||
    loadingScreen.classList.contains("active") ||
    pauseMenu.classList.contains("active") ||
    dbhOverlay.classList.contains("active") ||
    isGamePaused ||
    !activeSequence
  ) {
    return;
  }

  const isLastFrameInSequence = activeSequenceIndex >= activeSequence.length - 1;
  const isLeadingToChoice =
    activeSequenceName === "intro" ||
    (activeSequenceName &&
      (activeSequenceName.startsWith("scene1_") ||
        activeSequenceName.startsWith("scene2_") ||
        activeSequenceName.startsWith("scene3_")));
  const isStoryEnding = activeSequenceName && activeSequenceName.startsWith("ending_");

  if (isLastFrameInSequence && (isLeadingToChoice || isStoryEnding)) {
    return;
  }

  if (player && !player.paused && Number.isFinite(player.duration) && player.duration > 0) {
    skipCooldownActive = true;
    player.currentTime = Math.max(0, player.duration - 0.05);
    window.setTimeout(() => {
      skipCooldownActive = false;
    }, 5);
  }
}

// Platform-adaptive narrative controls.
let lastTapTime = 0;

window.addEventListener(
  "touchend",
  (event) => {
    if (!Platform.isCapacitor()) return;

    const currentTime = Date.now();
    const tapLength = currentTime - lastTapTime;

    if (tapLength > 0 && tapLength < 300) {
      event.preventDefault();
      skipCurrentFrame();
    }

    lastTapTime = currentTime;
  },
  { passive: false }
);

window.addEventListener("keydown", (event) => {
  if (
    (Platform.isElectron() || Platform.isWeb()) &&
    (event.code === "Space" || event.key === " " || event.code === "ArrowRight")
  ) {
    event.preventDefault();
    skipCurrentFrame();
  }
});