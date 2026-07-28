// DreamSphere Comprehensive Database

export const RESEARCH_TOPICS = [
  {
    id: 'neuroscience-rem',
    title: 'Neurobiology of REM Sleep',
    category: 'Neuroscience',
    icon: 'Brain',
    summary: 'How pontine-geniculate-occipital (PGO) waves trigger vivid sensory experiences during rapid eye movement.',
    detail: 'During REM sleep, cholinergic neurons in the pons fire intensely, activating the visual cortex while muscle atonia prevents physical execution of dream actions. The prefrontal cortex shows decreased activation, accounting for the uncritical acceptance of surreal dream events.',
    metrics: { brainwaveFreq: '15-30 Hz (Desynchronized)', primaryNeurotransmitter: 'Acetylcholine', activeRegions: 5 }
  },
  {
    id: 'memory-consolidation',
    title: 'Synaptic Pruning & Memory',
    category: 'Cognitive Science',
    icon: 'Database',
    summary: 'The two-stage model of memory transfer from hippocampal temporary storage to neocortical integration.',
    detail: 'Slow-wave sleep consolidates declarative memories, while REM sleep rewires emotional associations and integrates novel experiences into pre-existing schema through synaptic downsizing.',
    metrics: { brainwaveFreq: '0.5-4 Hz (Delta Waves)', primaryNeurotransmitter: 'GABA & Serotonin', activeRegions: 4 }
  },
  {
    id: 'lucid-consciousness',
    title: 'Lucid Dreaming & Metacognition',
    category: 'Consciousness',
    icon: 'Sparkles',
    summary: 'Gamma-band 40Hz synchronization in the dorsolateral prefrontal cortex during self-reflective lucid states.',
    detail: 'Lucid dreaming represents a hybrid state of consciousness where executive awareness awakens within an active REM sleep state, enabling volitional navigation of dream topographies.',
    metrics: { brainwaveFreq: '40 Hz (Gamma Synchronization)', primaryNeurotransmitter: 'Dopamine & ACh', activeRegions: 6 }
  },
  {
    id: 'threat-simulation',
    title: 'Evolutionary Threat Simulation',
    category: 'Psychology',
    icon: 'Shield',
    summary: 'Revonsuo\'s TST hypothesis positioning dreams as ancestral virtual reality threat rehearsal mechanisms.',
    detail: 'Neurocognitive evidence demonstrates that dreams selectively overrepresent threat-perceiving emotions like anxiety and fear, allowing low-risk motor and cognitive rehearsal for survival.',
    metrics: { brainwaveFreq: 'Theta 4-8 Hz', primaryNeurotransmitter: 'Norepinephrine', activeRegions: 4 }
  }
];

export const LATEST_ARTICLES = [
  {
    id: 'bci-fmri-decoding',
    title: 'Reconstructing Dream Visuals via fMRI Deep Neural Networks',
    date: 'July 2026',
    author: 'Dr. Elena Rostova',
    journal: 'Nature Neuroscience',
    image: 'https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=800&q=80',
    tags: ['BCI', 'AI', 'fMRI', 'Neuroimaging'],
    snippet: 'Researchers at the Kyoto Neural Decoding Lab have achieved 84% accuracy in reconstructing coarse visual semantic categories from human subjects during hypnagogic sleep onset.'
  },
  {
    id: 'sleep-paralysis-neurobiology',
    title: 'The Hypnagogic Threshold: Sensorimotor Dissociation Explained',
    date: 'June 2026',
    author: 'Prof. Marcus Vance',
    journal: 'Frontiers in Human Neuroscience',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    tags: ['Sleep Paralysis', 'REM Atonia', 'Neurochemistry'],
    snippet: 'Exploring how delayed GABAergic motor pathway inhibition interacts with hyperactive amygdalar threat detection during abrupt awakenings.'
  },
  {
    id: 'cross-cultural-oneirocritics',
    title: 'Universal Symbols vs. Cultural Schemas in Dreams',
    date: 'May 2026',
    author: 'Dr. Amara Singh',
    journal: 'Journal of Cross-Cultural Psychology',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    tags: ['Anthropology', 'Jungian Archetypes', 'Mythology'],
    snippet: 'A global comparative analysis of 12,000 dream narratives reveals striking archetype structural overlaps across isolated Indigenous and urban populations.'
  }
];

export const SLEEP_STAGES = [
  {
    stage: 'Wakefulness',
    short: 'WAKE',
    duration: '0-5% of night',
    brainwave: 'Alpha (8-12Hz) & Beta (13-30Hz)',
    description: 'High frequency, low amplitude brainwaves with active sensorimotor input.',
    eegType: 'beta',
    color: 'from-amber-500 to-orange-500'
  },
  {
    stage: 'N1 (Light Sleep)',
    short: 'N1',
    duration: '5% of night',
    brainwave: 'Theta (4-7Hz)',
    description: 'Drowsiness transition stage. Hypnagogic jerks, floating sensations, and drifting thoughts.',
    eegType: 'theta',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    stage: 'N2 (Intermediate Sleep)',
    short: 'N2',
    duration: '45-55% of night',
    brainwave: 'Sleep Spindles (12-14Hz) & K-Complexes',
    description: 'Body temperature drops, heart rate slows. Spindles protect memory consolidation from disruption.',
    eegType: 'spindle',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    stage: 'N3 (Slow-Wave Deep Sleep)',
    short: 'N3',
    duration: '15-25% of night',
    brainwave: 'Delta (0.5-3Hz)',
    description: 'Deepest restorative sleep. Growth hormone release, cellular repair, and metabolic waste clearance via glymphatic system.',
    eegType: 'delta',
    color: 'from-purple-600 to-violet-900'
  },
  {
    stage: 'REM (Rapid Eye Movement)',
    short: 'REM',
    duration: '20-25% of night',
    brainwave: 'Sawtooth Theta / Beta-like',
    description: 'Vivid narrative dreaming state. Muscle atonia (paralysis), rapid saccadic eye movements, intense emotional brain activity.',
    eegType: 'rem',
    color: 'from-pink-500 to-rose-600'
  }
];

export const BRAIN_REGIONS = [
  {
    id: 'pfc',
    name: 'Prefrontal Cortex',
    status: 'Deactivated in Normal REM / Active in Lucid',
    function: 'Logic, self-monitoring, working memory.',
    dreamImpact: 'Suppression during REM explains surrealism and lack of critical judgment in standard dreams.',
    coordinates: { x: 30, y: 35 },
    color: '#8B5CF6'
  },
  {
    id: 'amygdala',
    name: 'Amygdala & Limbic System',
    status: 'Hyperactive during REM',
    function: 'Emotional processing, fear response, instinct.',
    dreamImpact: 'Generates intense emotional themes, threat scenarios, and vivid feeling tones.',
    coordinates: { x: 48, y: 55 },
    color: '#EC4899'
  },
  {
    id: 'hippocampus',
    name: 'Hippocampus',
    status: 'Synchronized with Neocortex',
    function: 'Episodic memory indexing and consolidation.',
    dreamImpact: 'Replays recent memories, recombining day residues into novel narrative metaphors.',
    coordinates: { x: 55, y: 60 },
    color: '#06B6D4'
  },
  {
    id: 'visual-cortex',
    name: 'Visual Association Cortex (PGO)',
    status: 'Highly Active',
    function: 'Internal visual imagery synthesis.',
    dreamImpact: 'Fires internal visual signals despite closed eyes, creating hyper-realistic scenery.',
    coordinates: { x: 75, y: 50 },
    color: '#3B82F6'
  },
  {
    id: 'pons',
    name: 'Brainstem & Pontine Nuclei',
    status: 'Master REM Switch',
    function: 'Triggers REM sleep, PGO spikes, and motor inhibition.',
    dreamImpact: 'Blocks motor signals to spinal cord to prevent physical acting out of dream movements.',
    coordinates: { x: 50, y: 78 },
    color: '#10B981'
  }
];

export const PSYCHOLOGY_THEORIES = [
  {
    era: '1900',
    title: 'Freudian Psychoanalysis',
    thinker: 'Sigmund Freud',
    concept: 'Wish Fulfillment & Manifest vs. Latent Content',
    description: 'Dreams act as the "royal road to the unconscious", disguising repressed instinctive desires through manifest imagery to protect sleep.',
    quote: '"The interpretation of dreams is the royal road to a knowledge of the unconscious activities of the mind."',
    keyPoints: ['Manifest Content (surface story)', 'Latent Content (hidden wish)', 'Dream-work mechanisms: Condensation, Displacement, Symbolism']
  },
  {
    era: '1916 - 1961',
    title: 'Analytical Psychology',
    thinker: 'Carl Gustav Jung',
    concept: 'Collective Unconscious & Archetypal Compensation',
    description: 'Dreams are non-disguised natural self-representations of the psyche aimed at psychic balance (individuation) using primordial archetypes.',
    quote: '"Dreams are impartial, spontaneous products of the unconscious psyche... secret messages from our nocturnal souls."',
    keyPoints: ['Collective Unconscious', 'Archetypes (Shadow, Anima/Animus, Self)', 'Prospective & Compensatory Functions']
  },
  {
    era: '1977',
    title: 'Activation-Synthesis Model',
    thinker: 'Allan Hobson & Robert McCarley',
    concept: 'Neurobiological Signal Interpretation',
    description: 'Random cholinergic signals originating from the brainstem are synthesized by the cortex into coherent narratives.',
    quote: '"Dreaming is not a psychological disguise, but a synthesis of random neural noise."',
    keyPoints: ['PGO Spikes generate visual cues', 'Cortex acts as storyteller', 'No hidden secret code required']
  },
  {
    era: '2000 - Present',
    title: 'Threat & Social Simulation Theory',
    thinker: 'Antti Revonsuo',
    concept: 'Evolutionary Virtual Reality Rehearsal',
    description: 'Dreams evolved as an immersive virtual reality training environment to rehearse threat detection and complex social bonds.',
    quote: '"The dream production mechanism is an evolutionary adaptation for threat rehearsal."',
    keyPoints: ['Rehearsing dangerous situations safely', 'Enhancing emotional social navigation', 'Predictive processing framework']
  }
];

export const JUNG_ARCHETYPES = [
  {
    name: 'The Shadow',
    symbol: '🌙',
    subtitle: 'The Unconscious Dark Twin',
    description: 'Represents hidden, disowned, or taboo aspects of personality. In dreams, often appears as a pursuer, antagonist, or mysterious dark figure.',
    integration: 'Facing and integrating the shadow unlocks untapped energy, creativity, and self-acceptance.'
  },
  {
    name: 'The Anima / Animus',
    symbol: '☯️',
    subtitle: 'The Inner Counter-Gender Soul',
    description: 'The Anima (female principle in men) or Animus (male principle in women) guides the conscious ego toward intuition, emotional depth, and logic balance.',
    integration: 'Fosters spiritual connection, empathy, and harmonious relationships.'
  },
  {
    name: 'The Persona',
    symbol: '🎭',
    subtitle: 'The Social Mask',
    description: 'The face presented to the public world. Dreams of losing clothes, teeth, or failing exams reflect anxieties around mask disintegration.',
    integration: 'Distinguishing true self-identity from external social roles and expectations.'
  },
  {
    name: 'The Wise Old Man / Crone',
    symbol: '🧙‍♂️',
    subtitle: 'The Archetype of Wisdom & Guidance',
    description: 'Appears as a sage, teacher, ancient tree, or guiding light offering profound intuitive insight during life crises.',
    integration: 'Connects the individual to deep transpersonal wisdom and moral clarity.'
  },
  {
    name: 'The Self',
    symbol: '🏵️',
    subtitle: 'The Mandala of Wholeness',
    description: 'The supreme archetype of psychological unification. Symbolized in dreams by mandalas, luminous spheres, gold, or sacred geometry.',
    integration: 'Achieving psychic wholeness, balance, and transcendent peace.'
  }
];

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
    glowColor: '#06B6D4',
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
    glowColor: '#F43F5E',
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
    glowColor: '#F59E0B',
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
    glowColor: '#8B5CF6',
    techniques: [
      { name: 'Wiggle Focus Technique', desc: 'Focus all attention on moving a single tiny muscle (like the big toe or eye blink).' },
      { name: 'Calm Reassurance Protocol', desc: 'Remind yourself: "My brain is just in REM atonia. This is harmless and will pass in 30 seconds."' },
      { name: 'Rhythm Breathing Control', desc: 'Control deep diaphragmatic breathing to signal safety to the autonomic nervous system.' }
    ]
  }
];

export const AI_DREAM_TOPICS = [
  {
    title: 'AI Dream Interpretation Neural Networks',
    desc: 'Combining large language models with psychological archetype classifiers to map personal dream journals to scientific, historical, and emotional metrics.',
    badge: 'LLM & NLP Science'
  },
  {
    title: 'fMRI Neural Image Reconstruction',
    desc: 'Using generative AI diffusion models paired with high-field brain scanners to decode visual stream activity during sleep into real-time digital video renderings.',
    badge: 'Gallant Lab & Kyoto BCI'
  },
  {
    title: 'Closed-Loop Lucid Induction Wearables',
    desc: 'Smart headband neural sensors detecting REM onset and delivering real-time subtle gamma light/binaural cues to awaken metacognition without waking the body.',
    badge: 'Neurotech Hardware'
  }
];

export const REFERENCE_PAPERS = [
  {
    id: 1,
    title: 'Neural decoding of visual imagery during sleep',
    authors: 'Horikawa, T., Tamaki, M., Miyawaki, Y., & Kamitani, Y.',
    journal: 'Science',
    year: 2013,
    vol: '340(6132), 639-642',
    doi: '10.1126/science.1234330',
    field: 'Neuroscience & BCI',
    abstract: 'Demonstrated that visual contents during sleep onset can be decoded using pattern recognition over fMRI activity in human visual cortex.'
  },
  {
    id: 2,
    title: 'The functions of dream sleep: Memory consolidation and emotional regulation',
    authors: 'Walker, M. P., & van der Helm, E.',
    journal: 'Psychological Bulletin',
    year: 2009,
    vol: '135(5), 731-748',
    doi: '10.1037/a0016570',
    field: 'Cognitive Neuroscience',
    abstract: 'Synthesizes empirical evidence demonstrating how REM sleep processes emotional experiences and selectively consolidates associative memories.'
  },
  {
    id: 3,
    title: 'Lucid dreaming: Physiological correlates of consciousness during sleep',
    authors: 'Voss, U., Holzmann, R., Tuin, I., & Hobson, J. A.',
    journal: 'Sleep',
    year: 2009,
    vol: '32(9), 1191-1200',
    doi: '10.1093/sleep/32.9.1191',
    field: 'Consciousness Studies',
    abstract: 'Identified 40Hz EEG gamma band power surges in frontopolar regions during volitional lucid dreaming states.'
  },
  {
    id: 4,
    title: 'The Threat Simulation Theory of dreaming: Empirical status and future directions',
    authors: 'Revonsuo, A., Tuominen, J., & Valli, K.',
    journal: 'Behavioral and Brain Sciences',
    year: 2015,
    vol: '38, e73',
    doi: '10.1017/S0140525X1500003X',
    field: 'Evolutionary Psychology',
    abstract: 'Evaluates neurocognitive evidence for dreams as evolved virtual reality threat rehearsal simulations.'
  },
  {
    id: 5,
    title: 'Cross-cultural dream content analysis across six continents',
    authors: 'Domhoff, G. W., & Schneider, A.',
    journal: 'Dreaming',
    year: 2018,
    vol: '28(4), 289-307',
    doi: '10.1037/drm0000091',
    field: 'Anthropology & Psychology',
    abstract: 'Analyzed thousands of dream logs using Hall/Van de Castle coding, demonstrating universal threat and social patterns alongside cultural variations.'
  }
];
