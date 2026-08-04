export const RESEARCH_TOPICS = [
  {
    id: 'neuroscience-rem',
    title: 'Neurobiology of REM Sleep',
    category: 'Neuroscience',
    summary: 'How pontine-geniculate-occipital (PGO) waves trigger vivid sensory experiences during rapid eye movement.',
    detail: 'During REM sleep, cholinergic neurons in the pons fire intensely, activating the visual cortex while muscle atonia prevents physical execution of dream actions. The prefrontal cortex shows decreased activation, accounting for the uncritical acceptance of surreal dream events.',
    metrics: { brainwaveFreq: '15-30 Hz (Desynchronized)', primaryNeurotransmitter: 'Acetylcholine', activeRegions: 5 }
  },
  {
    id: 'memory-consolidation',
    title: 'Synaptic Pruning & Memory',
    category: 'Cognitive Science',
    summary: 'The two-stage model of memory transfer from hippocampal temporary storage to neocortical integration.',
    detail: 'Slow-wave sleep consolidates declarative memories, while REM sleep rewires emotional associations and integrates novel experiences into pre-existing schema through synaptic downsizing.',
    metrics: { brainwaveFreq: '0.5-4 Hz (Delta Waves)', primaryNeurotransmitter: 'GABA & Serotonin', activeRegions: 4 }
  },
  {
    id: 'lucid-consciousness',
    title: 'Lucid Dreaming & Metacognition',
    category: 'Consciousness',
    summary: 'Gamma-band 40Hz synchronization in the dorsolateral prefrontal cortex during self-reflective lucid states.',
    detail: 'Lucid dreaming represents a hybrid state of consciousness where executive awareness awakens within an active REM sleep state, enabling volitional navigation of dream topographies.',
    metrics: { brainwaveFreq: '40 Hz (Gamma Synchronization)', primaryNeurotransmitter: 'Dopamine & ACh', activeRegions: 6 }
  },
  {
    id: 'threat-simulation',
    title: 'Evolutionary Threat Simulation',
    category: 'Psychology',
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
  { stage: 'Wakefulness', short: 'WAKE', duration: '0-5% of night', brainwave: 'Alpha (8-12Hz) & Beta (13-30Hz)', description: 'High frequency, low amplitude brainwaves with active sensorimotor input.', eegType: 'beta' },
  { stage: 'N1 (Light Sleep)', short: 'N1', duration: '5% of night', brainwave: 'Theta (4-7Hz)', description: 'Drowsiness transition stage. Hypnagogic jerks and floating sensations.', eegType: 'theta' },
  { stage: 'N2 (Intermediate)', short: 'N2', duration: '45-55% of night', brainwave: 'Sleep Spindles (12-14Hz)', description: 'Body temperature drops, heart rate slows. Spindles protect memory consolidation.', eegType: 'spindle' },
  { stage: 'N3 (Slow-Wave Deep)', short: 'N3', duration: '15-25% of night', brainwave: 'Delta (0.5-3Hz)', description: 'Deepest restorative sleep. Growth hormone release and glymphatic brain clearance.', eegType: 'delta' },
  { stage: 'REM (Vivid Dreaming)', short: 'REM', duration: '20-25% of night', brainwave: 'Sawtooth Theta / Desynchronized', description: 'Vivid narrative dreaming state. Muscle paralysis (atonia), rapid eye movement.', eegType: 'rem' }
];

export const BRAIN_REGIONS = [
  { id: 'pfc', name: 'Prefrontal Cortex', status: 'Deactivated in REM / Active in Lucid', function: 'Logic, self-monitoring, working memory.', dreamImpact: 'Suppression during REM explains surrealism and lack of critical judgment in standard dreams.', coordinates: { x: 30, y: 35 }, color: '#8B5CF6' },
  { id: 'amygdala', name: 'Amygdala & Limbic System', status: 'Hyperactive during REM', function: 'Emotional processing, fear response, instinct.', dreamImpact: 'Generates intense emotional themes, threat scenarios, and vivid feeling tones.', coordinates: { x: 48, y: 55 }, color: '#EC4899' },
  { id: 'hippocampus', name: 'Hippocampus', status: 'Synchronized with Neocortex', function: 'Episodic memory indexing and consolidation.', dreamImpact: 'Replays recent memories, recombining day residues into novel narrative metaphors.', coordinates: { x: 55, y: 60 }, color: '#06B6D4' },
  { id: 'visual-cortex', name: 'Visual Association Cortex', status: 'Highly Active', function: 'Internal visual imagery synthesis.', dreamImpact: 'Fires internal visual signals despite closed eyes, creating hyper-realistic scenery.', coordinates: { x: 75, y: 50 }, color: '#3B82F6' },
  { id: 'pons', name: 'Brainstem & Pontine Nuclei', status: 'Master REM Switch', function: 'Triggers REM sleep, PGO spikes, and motor inhibition.', dreamImpact: 'Blocks motor signals to spinal cord to prevent physical acting out of dream movements.', coordinates: { x: 50, y: 78 }, color: '#10B981' }
];
