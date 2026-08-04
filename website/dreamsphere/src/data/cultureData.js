export const CULTURES_DATA = [
  {
    id: 'egypt',
    name: 'Ancient Egypt',
    location: 'Thebes & Memphis',
    coords: { top: '38%', left: '56%' },
    period: '2000 BCE - 30 BCE',
    title: 'Divine Incubations & The Book of Dreams',
    summary: 'Egyptians believed dreams (Rwt) were messages from gods and spirits, accessed via specialized dream temples (Incubation).',
    detail: 'The Chester Beatty Papyrus (1350 BCE) contains the world\'s oldest preserved dream interpretation manual, categorizing dreams into good omens (sent by Horus) and bad omens (sent by Seth). Priests known as "Masters of Secret Things" performed ritual sleep incubations in sacred temples.',
    artifact: 'Hieroglyphic Chester Beatty Papyrus',
    keyConcept: 'Mkt-Rwt (Divine Protection in Sleep)'
  },
  {
    id: 'greece',
    name: 'Ancient Greece',
    location: 'Epidaurus & Delphi',
    coords: { top: '34%', left: '53%' },
    period: '800 BCE - 300 CE',
    title: 'Asclepieion Temples & Oneirocritica',
    summary: 'Greeks sought medical healing in sacred sleep sanctuaries dedicated to Asclepius, God of Medicine.',
    detail: 'Sick pilgrims traveled to Asclepieion temples, fasted, and slept in the Enkoimeterion dormitory. Dreams of Asclepius or his sacred serpents were believed to provide instant miraculous cures or exact surgical instructions. Artemidorus of Daldis later authored "Oneirocritica", a landmark 5-volume empirical dream study.',
    artifact: 'Votive Relief of Asclepius Healing Dreamers',
    keyConcept: 'Enkoimesis (Sacred Sleep Incubation)'
  },
  {
    id: 'india',
    name: 'Vedic & Hindu Traditions',
    location: 'Varanasi & Rishikesh',
    coords: { top: '44%', left: '68%' },
    period: '1500 BCE - Present',
    title: 'Mandukya Upanishad & The Four States of Being',
    summary: 'Vedic philosophy views dreaming (Svapna) as an intermediate realm between waking physical reality and deep dreamless consciousness.',
    detail: 'The Mandukya Upanishad maps consciousness into four quarters: Jagrat (Waking/Physical), Svapna (Dreaming/Subtle Astral), Sushupti (Deep Dreamless/Causal), and Turiya (Pure Transcendent Consciousness). Dreams demonstrate the mind\'s intrinsic power to create entire light worlds without external sensory input.',
    artifact: 'Sacred Mandala of Turiya Consciousness',
    keyConcept: 'Svapna-Sthan (The Dream Consciousness Realm)'
  },
  {
    id: 'tibet',
    name: 'Tibetan Buddhism',
    location: 'Lhasa, Tibet',
    coords: { top: '38%', left: '72%' },
    period: '8th Century CE - Present',
    title: 'Milam: The Art of Dream Yoga',
    summary: 'A advanced Vajrayana practice designed to maintain lucidity during sleep to realize the illusionary nature of all phenomena.',
    detail: 'Developed by masters like Naropa and Padmasambhava, Dream Yoga (Milam) trains monks to recognize dream states, transform dream forms (flying, expanding to cosmic size), and experience the "Clear Light" of primordial awareness. This prepares the practitioner for navigating the Bardo (after-death state).',
    artifact: 'Thangka Painting of the Six Yogas of Naropa',
    keyConcept: 'Milam (Dream Yoga & Illusory Body)'
  },
  {
    id: 'australia',
    name: 'Aboriginal Australia',
    location: 'Central Red Centre',
    coords: { top: '75%', left: '86%' },
    period: '60,000+ Years Ago - Present',
    title: 'Jukurrpa: The Eternal Dreamtime',
    summary: 'The Dreamtime (Jukurrpa or Tjukurpa) is not a past event, but an eternal sacred continuum underpinning physical existence.',
    detail: 'For Australian First Nations people, the Dreamtime encompasses creation, ancestral songlines, ecological law, and personal spiritual identity. Dreams serve as direct channels to communicate with ancestral spirits, discover new songlines, and maintain balance with the land.',
    artifact: 'Aboriginal Dot Painting of Ancestral Songlines',
    keyConcept: 'Jukurrpa (The Uncreated Eternal Real)'
  },
  {
    id: 'americas',
    name: 'Native American Ojibwe',
    location: 'Great Lakes Region',
    coords: { top: '32%', left: '22%' },
    period: 'Ancient Traditions',
    title: 'Sacred Vision Quests & Asabikeshiinh',
    summary: 'Dreams are essential guides for life decisions, guardian spirit connections, and medicine work.',
    detail: 'Youth engaged in Vision Quests through fasting in nature to receive their sacred dream song and spirit helper. The Ojibwe spider woman (Asabikeshiinh) legend birthed the dreamcatcher (Bwaajige Nagwaagan), woven to filter harmful nightmares while allowing positive inspiration to pass through.',
    artifact: 'Handcrafted Ojibwe Sacred Dreamcatcher',
    keyConcept: 'Bwaajige (Sacred Dream Seeking)'
  }
];

export const EXPERIENCE_TYPES = [
  {
    id: 'lucid',
    title: 'Lucid Dreaming',
    badge: 'Conscious Awareness',
    tagline: 'Awakening inside the simulation of your mind.',
    description: 'The rare state where the dreamer becomes fully aware they are dreaming while remaining inside the dream environment. Lucidity grants the power to control dream physics, fly, interact with subconscious archetypes, and solve complex real-world creative problems.',
    color: 'from-cyan-500/20 to-blue-600/20 border-cyan-500/40',
    techniques: [
      { name: 'MILD (Mnemonic Induction)', desc: 'Repeat intent before sleep: "Next time I dream, I will remember I am dreaming."' },
      { name: 'WILD (Wake-Initiated Lucid Dream)', desc: 'Transition directly from waking consciousness into a dream without losing awareness.' },
      { name: 'Reality Checks', desc: 'Perform regular habit tests (count fingers, read text twice) throughout the day.' }
    ]
  },
  {
    id: 'nightmares',
    title: 'Nightmares & Threat Simulation',
    badge: 'Emotional Surge',
    tagline: 'High-intensity hyper-arousal during REM sleep.',
    description: 'Distressing dream experiences triggering autonomic fear responses, racing heart, and sudden awakenings. Modern cognitive science views nightmares as over-activated threat rehearsal or incomplete emotional processing of waking stressors.',
    color: 'from-rose-500/20 to-purple-900/20 border-rose-500/40',
    techniques: [
      { name: 'Imagery Rehearsal Therapy (IRT)', desc: 'Rewrite nightmare endings during waking hours and mentally rehearse the empowered version.' },
      { name: 'Desensitization Protocol', desc: 'Gradually confront nightmare symbols with relaxed breathing techniques.' },
      { name: 'Sleep Hygiene & Stress Pruning', desc: 'Reduce late-night cortisol and blue light exposure before bedtime.' }
    ]
  },
  {
    id: 'recurring',
    title: 'Recurring Dreams',
    badge: 'Subconscious Loops',
    tagline: 'The mind repeating an unexamined psychological message.',
    description: 'Dreams featuring identical storylines, settings, or themes repeated over months or years. Typically signal unresolved internal conflicts, persistent anxiety themes, or core emotional dilemmas requiring conscious integration.',
    color: 'from-amber-500/20 to-purple-600/20 border-amber-500/40',
    techniques: [
      { name: 'Pattern Recognition Journaling', desc: 'Document recurring symbols and trace back emotional triggers in waking life.' },
      { name: 'Active Imagination (Jungian)', desc: 'Re-enter the dream scenario while awake to converse directly with dream characters.' },
      { name: 'Cognitive Reframing', desc: 'Identify core emotional needs beneath the repeated narrative loop.' }
    ]
  },
  {
    id: 'paralysis',
    title: 'Sleep Paralysis',
    badge: 'Threshold Phenomena',
    tagline: 'Trapped between waking mind and REM motor paralysis.',
    description: 'A transient state occurring during sleep onset or awakening. Consciousness wakes up, but REM muscle atonia remains active. Often accompanied by hypnagogic auditory hallucinations, chest pressure, and sensing a intruder presence.',
    color: 'from-indigo-900/30 to-violet-950/30 border-purple-500/40',
    techniques: [
      { name: 'Wiggle Focus Technique', desc: 'Focus all attention on moving a single tiny muscle (like the big toe or eye blink).' },
      { name: 'Calm Reassurance Protocol', desc: 'Remind yourself: "My brain is just in REM atonia. This is harmless and will pass in 30 seconds."' },
      { name: 'Rhythm Breathing Control', desc: 'Control deep diaphragmatic breathing to signal safety to the autonomic nervous system.' }
    ]
  }
];
