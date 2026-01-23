// Reference materials for quick lookup

export const jSeriesMessages = [
  {
    id: 'J2.0',
    category: 'Precision Participant Location (PPLI)',
    name: 'Indirect Interface Unit PPLI',
    description: 'Position report from ground unit or system not directly on network',
    frequency: 'Variable',
    commonUse: 'Ground station reporting'
  },
  {
    id: 'J2.2',
    category: 'Precision Participant Location (PPLI)',
    name: 'Air PPLI',
    description: 'Own-ship position, altitude, speed, and heading report',
    frequency: '5-12 second intervals',
    commonUse: 'Automatic position reporting by all airborne platforms',
    fields: ['Position (Lat/Long)', 'Altitude', 'Speed', 'Heading', 'STNID']
  },
  {
    id: 'J2.3',
    category: 'Precision Participant Location (PPLI)',
    name: 'Surface PPLI',
    description: 'Position report from maritime surface platforms',
    frequency: 'Variable',
    commonUse: 'Ship position reporting'
  },
  {
    id: 'J2.5',
    category: 'Precision Participant Location (PPLI)',
    name: 'Land Point/Track PPLI',
    description: 'Ground unit position reporting',
    frequency: 'Variable',
    commonUse: 'Ground forces, SAM sites, ground control'
  },
  {
    id: 'J3.0',
    category: 'Surveillance',
    name: 'Emergency Point',
    description: 'Emergency or reference point location',
    frequency: 'As needed',
    commonUse: 'Downed aircraft, SAR, emergency reference'
  },
  {
    id: 'J3.2',
    category: 'Surveillance',
    name: 'Air Track',
    description: 'Airborne contact detected by sensors',
    frequency: 'Continuous updates',
    commonUse: 'Primary air-to-air track reporting',
    fields: ['Track Number', 'Position', 'Altitude', 'Heading', 'Speed', 'Classification', 'IFF Status', 'Track Quality']
  },
  {
    id: 'J3.3',
    category: 'Surveillance',
    name: 'Surface Track',
    description: 'Maritime surface contact',
    frequency: 'As detected',
    commonUse: 'Ship tracking'
  },
  {
    id: 'J3.5',
    category: 'Surveillance',
    name: 'Land Track',
    description: 'Ground-based track (vehicles, units)',
    frequency: 'As detected',
    commonUse: 'Ground target tracking'
  },
  {
    id: 'J3.7',
    category: 'Surveillance',
    name: 'Track Management',
    description: 'Track deletion, correlation, and management functions',
    frequency: 'As needed',
    commonUse: 'Managing track database'
  },
  {
    id: 'J7.0',
    category: 'Command and Control',
    name: 'Weapons Coordination',
    description: 'Coordination of weapons employment between platforms',
    frequency: 'Pre-engagement',
    commonUse: 'Deconflict targets, coordinate salvos',
    fields: ['Engaging Unit', 'Target Track', 'Weapon Type', 'Launch Time']
  },
  {
    id: 'J7.1',
    category: 'Command and Control',
    name: 'Mission Assignment',
    description: 'Assign mission or target to specific platform',
    frequency: 'As needed',
    commonUse: 'AWACS assigning targets to fighters',
    fields: ['Assigned Unit', 'Mission Type', 'Target', 'Time']
  },
  {
    id: 'J7.2',
    category: 'Command and Control',
    name: 'Mission Coordination',
    description: 'Coordinate mission execution',
    frequency: 'As needed',
    commonUse: 'Package coordination, timeline management'
  },
  {
    id: 'J7.3',
    category: 'Command and Control',
    name: 'Control',
    description: 'General command and control instructions',
    frequency: 'As needed',
    commonUse: 'GCI vectors, tactical instructions'
  },
  {
    id: 'J12.0',
    category: 'Weapon Engagement',
    name: 'Engagement Status',
    description: 'Weapon launch and engagement status reporting',
    frequency: 'At launch, impact, kill assessment',
    commonUse: 'Automatic transmission on weapon release',
    fields: ['Weapon Type', 'Target', 'Launch Time', 'Status']
  },
  {
    id: 'J12.2',
    category: 'Weapon Engagement',
    name: 'Handover',
    description: 'Hand off target engagement to another platform',
    frequency: 'As needed',
    commonUse: 'Transfer target responsibility'
  },
  {
    id: 'J12.3',
    category: 'Weapon Engagement',
    name: 'Controlling Unit Report',
    description: 'Report controlling unit for engagement',
    frequency: 'As needed',
    commonUse: 'Identify platform controlling engagement'
  },
  {
    id: 'J12.6',
    category: 'Weapon Engagement',
    name: 'Pairing',
    description: 'Pair weapon with target for mid-course guidance',
    frequency: 'During engagement',
    commonUse: 'AMRAAM datalink guidance coordination'
  },
  {
    id: 'J13.0',
    category: 'Electronic Warfare',
    name: 'EW Product',
    description: 'Electronic warfare threat information',
    frequency: 'Continuous',
    commonUse: 'Radar emissions, SAM activations'
  },
  {
    id: 'J13.2',
    category: 'Electronic Warfare',
    name: 'EW Report',
    description: 'Electronic warfare situation report',
    frequency: 'As detected',
    commonUse: 'Jamming, threat warnings'
  }
];

export const glossary = [
  {
    term: 'AWACS',
    definition: 'Airborne Warning and Control System - Aircraft providing airborne surveillance, command and control',
    category: 'Systems'
  },
  {
    term: 'BVR',
    definition: 'Beyond Visual Range - Engagement of targets beyond visual identification distance',
    category: 'Tactics'
  },
  {
    term: 'CAPTOR',
    definition: 'Typhoon\'s multi-mode pulse-doppler radar system',
    category: 'Systems'
  },
  {
    term: 'COMAO',
    definition: 'Composite Air Operations - Large force package with multiple mission types',
    category: 'Operations'
  },
  {
    term: 'COMSEC',
    definition: 'Communications Security - Protection of communications from exploitation',
    category: 'Security'
  },
  {
    term: 'DCA',
    definition: 'Defensive Counter-Air - Operations to defend against air and missile attack',
    category: 'Operations'
  },
  {
    term: 'DTC',
    definition: 'Data Transfer Cartridge - Device for loading mission data into aircraft',
    category: 'Systems'
  },
  {
    term: 'EMCON',
    definition: 'Emissions Control - Discipline of limiting radio/radar transmissions',
    category: 'Procedures'
  },
  {
    term: 'GCI',
    definition: 'Ground Controlled Intercept - Ground-based control of fighter intercepts',
    category: 'Operations'
  },
  {
    term: 'HAVE QUICK',
    definition: 'Frequency-hopping anti-jam voice communication system',
    category: 'Systems'
  },
  {
    term: 'HOTAS',
    definition: 'Hands On Throttle And Stick - Control system allowing pilot to operate systems without removing hands from throttle and stick',
    category: 'Systems'
  },
  {
    term: 'IADS',
    definition: 'Integrated Air Defense System - Coordinated air defense network',
    category: 'Systems'
  },
  {
    term: 'IFF',
    definition: 'Identification Friend or Foe - Electronic identification system',
    category: 'Systems'
  },
  {
    term: 'JTIDS',
    definition: 'Joint Tactical Information Distribution System - Original Link 16 terminal',
    category: 'Systems'
  },
  {
    term: 'KEK',
    definition: 'Key Encryption Key - Top-level cryptographic key that encrypts other keys',
    category: 'Security'
  },
  {
    term: 'Link 16',
    definition: 'NATO tactical data link defined by STANAG 5516',
    category: 'Systems'
  },
  {
    term: 'LPI',
    definition: 'Low Probability of Intercept - Signals difficult to detect or intercept',
    category: 'EW'
  },
  {
    term: 'MDO',
    definition: 'Multi-Domain Operations - Integrated operations across air, land, sea, space, and cyber',
    category: 'Operations'
  },
  {
    term: 'MFHDD',
    definition: 'Multi-Function Head Down Display - Cockpit displays for tactical information',
    category: 'Systems'
  },
  {
    term: 'MIDS',
    definition: 'Multifunctional Information Distribution System - Modern Link 16 terminal',
    category: 'Systems'
  },
  {
    term: 'MIDS-JTRS',
    definition: 'MIDS Joint Tactical Radio System - Software-defined radio implementation of Link 16',
    category: 'Systems'
  },
  {
    term: 'MUM-T',
    definition: 'Manned-Unmanned Teaming - Manned aircraft controlling unmanned systems',
    category: 'Operations'
  },
  {
    term: 'NPG',
    definition: 'Network Participation Group - Logical grouping of Link 16 participants',
    category: 'Link 16'
  },
  {
    term: 'OTAR',
    definition: 'Over-The-Air Rekey - Automatic distribution of crypto keys via radio',
    category: 'Security'
  },
  {
    term: 'PPLI',
    definition: 'Precise Participant Location and Identification - Position reporting messages',
    category: 'Link 16'
  },
  {
    term: 'ROE',
    definition: 'Rules of Engagement - Guidelines for use of force',
    category: 'Procedures'
  },
  {
    term: 'SATURN',
    definition: 'Secure Audio Terminal Unit - Voice encryption system',
    category: 'Systems'
  },
  {
    term: 'SEAD',
    definition: 'Suppression of Enemy Air Defenses - Attacks on enemy air defense systems',
    category: 'Operations'
  },
  {
    term: 'STANAG',
    definition: 'Standardization Agreement - NATO standards documentation',
    category: 'Standards'
  },
  {
    term: 'STNID',
    definition: 'Surveillance Track Number ID - Unique 5-digit identifier for Link 16 participants',
    category: 'Link 16'
  },
  {
    term: 'TDMA',
    definition: 'Time Division Multiple Access - Method for multiple users to share frequency',
    category: 'Link 16'
  },
  {
    term: 'TEK',
    definition: 'Transmission Encryption Key - Operational crypto key for voice/data encryption',
    category: 'Security'
  },
  {
    term: 'TOD',
    definition: 'Time of Day - Precise time required for Link 16 and HAVE QUICK synchronization',
    category: 'Link 16'
  },
  {
    term: 'TSD',
    definition: 'Tactical Situation Display - Primary Link 16 cockpit display',
    category: 'Systems'
  },
  {
    term: 'VTAS',
    definition: 'Voice Throttle and Stick - Voice command capability',
    category: 'Systems'
  },
  {
    term: 'WOD',
    definition: 'Word of Day - Daily crypto variable for HAVE QUICK frequency hopping',
    category: 'Security'
  }
];

export const tdmaReference = {
  title: 'TDMA Time Structure',
  description: 'Link 16 time organization for network coordination',
  structure: [
    {
      level: 'Epoch',
      duration: '12 seconds',
      description: 'Repeating cycle synchronized to GPS time',
      contains: '1536 frames'
    },
    {
      level: 'Frame',
      duration: '7.8125 milliseconds',
      description: 'Basic unit of timeslot allocation',
      contains: '1 timeslot per frame'
    },
    {
      level: 'Timeslot',
      duration: '7.8125 milliseconds',
      description: 'Period assigned to specific platform for transmission',
      contains: 'One or more messages'
    }
  ],
  synchronization: {
    requirement: '±100 microseconds',
    source: 'GPS primary, Network Time Updates backup',
    impact: 'Loss of sync prevents network participation'
  },
  example: {
    scenario: '4-ship fighter flight',
    allocation: [
      'Lead: Slots 10, 20, 30, 40... (every 10th slot)',
      '#2: Slots 11, 21, 31, 41...',
      '#3: Slots 12, 22, 32, 42...',
      '#4: Slots 13, 23, 33, 43...',
      'AWACS: Slots 1, 2, 3, 4, 5... (multiple consecutive)',
      'Contention: Remaining slots for emergency access'
    ]
  }
};

export const trackManagementReference = {
  title: 'Track Management Quick Reference',
  lifecycle: [
    {
      phase: 'Initiation',
      description: 'Track created from radar detection or Link 16 message',
      displaySymbol: 'Flashing or highlighted'
    },
    {
      phase: 'Propagation',
      description: 'Track updated with new sensor data',
      displaySymbol: 'Solid symbol with velocity vector'
    },
    {
      phase: 'Coasting',
      description: 'No recent updates, position predicted',
      displaySymbol: 'Degraded symbol or different color'
    },
    {
      phase: 'Deletion',
      description: 'Track removed due to timeout or manual action',
      displaySymbol: 'Disappears from display'
    }
  ],
  qualityLevels: [
    {
      level: 'Level 1 - Firm',
      criteria: 'Multiple sensor correlation, recent update (<30s)',
      confidence: 'High',
      use: 'Weapons employment authorized'
    },
    {
      level: 'Level 2 - Probable',
      criteria: 'Single sensor or moderate age update',
      confidence: 'Medium',
      use: 'Further confirmation recommended'
    },
    {
      level: 'Level 3 - Possible',
      criteria: 'Old update or single uncorrelated detection',
      confidence: 'Low',
      use: 'Treat as tentative, verify before action'
    }
  ],
  classifications: [
    {
      type: 'Friendly',
      criteria: 'Positive IFF, known position, Link 16 correlation',
      symbol: 'Blue circle',
      action: 'Do not engage'
    },
    {
      type: 'Hostile',
      criteria: 'Confirmed enemy by intelligence, ROE, or behavior',
      symbol: 'Red diamond',
      action: 'Engage per ROE'
    },
    {
      type: 'Unknown',
      criteria: 'No IFF, unidentified',
      symbol: 'Yellow triangle',
      action: 'Identify before engagement'
    },
    {
      type: 'Suspect',
      criteria: 'Behavior or location suggests hostile',
      symbol: 'Red triangle',
      action: 'High priority identification'
    },
    {
      type: 'Assumed Friend',
      criteria: 'Behavior indicates friendly, no IFF confirmation',
      symbol: 'White circle',
      action: 'Verify if possible'
    }
  ]
};

export const troubleshootingGuide = [
  {
    issue: 'Cannot Achieve Time Sync',
    symptoms: ['Time Sync Failed indication', 'Cannot transmit on network', 'Received tracks erratic'],
    causes: ['GPS signal loss', 'Incorrect manual time', 'Jamming', 'Antenna blockage'],
    solutions: [
      'Verify GPS status and signal strength',
      'Re-enter coarse time manually',
      'Check if other aircraft affected (environmental)',
      'Verify antenna system via BIT',
      'Consider switching to backup network'
    ]
  },
  {
    issue: 'Crypto Failure',
    symptoms: ['Crypto Fail indication', 'Cannot decrypt received messages', 'Garbled data'],
    causes: ['Wrong crypto key', 'Expired keys', 'Key mismatch', 'Hardware fault'],
    solutions: [
      'Verify correct key for date/time',
      'Check if multiple aircraft affected',
      'Attempt manual key reload',
      'Execute crypto BIT',
      'Consider over-the-air rekey if available'
    ]
  },
  {
    issue: 'Tracks Not Appearing',
    symptoms: ['MIDS active but no tracks', 'Own PPLI transmitting but not seeing others'],
    causes: ['Display filtering too restrictive', 'NPG mismatch', 'Geographic filtering', 'Altitude filtering'],
    solutions: [
      'Check and adjust display filters',
      'Verify NPG participation',
      'Expand range scale',
      'Check altitude filters',
      'Verify network participation with voice check'
    ]
  },
  {
    issue: 'Cannot Transmit',
    symptoms: ['Net ready but no PPLI', 'Others report not seeing own-ship', 'Transmit disabled'],
    causes: ['Transmit not enabled', 'Timeslot issue', 'RF amplifier fault', 'Antenna failure', 'Thermal shutdown'],
    solutions: [
      'Verify transmit enable active',
      'Check BIT for RF system',
      'Verify timeslot assignment',
      'Check for thermal shutdown',
      'Cycle MIDS power',
      'Check external antenna'
    ]
  },
  {
    issue: 'Poor Reception / Missing Messages',
    symptoms: ['Intermittent track updates', 'Some platforms not heard', 'High error rate'],
    causes: ['Range/LOS limitations', 'Jamming', 'Antenna issues', 'Low transmit power', 'Terrain masking'],
    solutions: [
      'Check range to other platforms',
      'Coordinate with flight for jamming assessment',
      'Change altitude if possible',
      'Verify antenna BIT',
      'Check jamming indicators'
    ]
  },
  {
    issue: 'HAVE QUICK Not Working',
    symptoms: ['Cannot enter HQ net', 'Garbled HQ voice', 'HQ mode failed'],
    causes: ['Incorrect WOD', 'Time not synchronized', 'Wrong net number', 'GPS failure'],
    solutions: [
      'Verify correct WOD loaded',
      'Check GPS time sync',
      'Confirm net number',
      'Manual time entry',
      'Revert to Mode 1 (fixed frequency) as backup'
    ]
  }
];

export const abbreviations = {
  'A': ['AWACS - Airborne Warning and Control System', 'AMRAAM - Advanced Medium-Range Air-to-Air Missile', 'ATC - Air Traffic Control'],
  'B': ['BIT - Built-In Test', 'BVR - Beyond Visual Range', 'BDA - Battle Damage Assessment'],
  'C': ['CAP - Combat Air Patrol', 'CAPTOR - Cassidian Advanced Phased-array Tracking and Optimised Radar', 'CAS - Close Air Support', 'COMAO - Composite Air Operations', 'COMSEC - Communications Security'],
  'D': ['DASS - Defensive Aids Sub-System', 'DCA - Defensive Counter-Air', 'DTC - Data Transfer Cartridge'],
  'E': ['EMCON - Emissions Control', 'EMSEC - Emissions Security', 'EW - Electronic Warfare'],
  'F': ['FCAS - Future Combat Air System'],
  'G': ['GCI - Ground Controlled Intercept', 'GPS - Global Positioning System'],
  'H': ['HOTAS - Hands On Throttle And Stick', 'HUD - Head-Up Display'],
  'I': ['IADS - Integrated Air Defense System', 'IFF - Identification Friend or Foe', 'IRST - Infrared Search and Track'],
  'J': ['JADC2 - Joint All-Domain Command and Control', 'JTAC - Joint Terminal Attack Controller', 'JTIDS - Joint Tactical Information Distribution System'],
  'K': ['KEK - Key Encryption Key'],
  'L': ['LOS - Line of Sight', 'LPI - Low Probability of Intercept'],
  'M': ['MADL - Multifunction Advanced Data Link', 'MDO - Multi-Domain Operations', 'MFHDD - Multi-Function Head Down Display', 'MIDS - Multifunctional Information Distribution System', 'MUM-T - Manned-Unmanned Teaming'],
  'N': ['NATO - North Atlantic Treaty Organization', 'NPG - Network Participation Group', 'NTU - Network Time Update'],
  'O': ['OPSEC - Operational Security', 'OTAR - Over-The-Air Rekey'],
  'P': ['PPLI - Precise Participant Location and Identification'],
  'Q': ['QKD - Quantum Key Distribution'],
  'R': ['RF - Radio Frequency', 'ROE - Rules of Engagement'],
  'S': ['SAM - Surface-to-Air Missile', 'SAR - Search and Rescue', 'SATCOM - Satellite Communications', 'SATURN - Secure Audio Terminal Unit', 'SDR - Software-Defined Radio', 'SEAD - Suppression of Enemy Air Defenses', 'STANAG - Standardization Agreement', 'STNID - Surveillance Track Number ID'],
  'T': ['TDMA - Time Division Multiple Access', 'TEK - Transmission Encryption Key', 'TOD - Time of Day', 'TSD - Tactical Situation Display'],
  'U': ['UAV - Unmanned Aerial Vehicle', 'UHF - Ultra High Frequency'],
  'V': ['VHF - Very High Frequency', 'VTAS - Voice Throttle and Stick'],
  'W': ['WEZ - Weapons Employment Zone', 'WOD - Word of Day', 'WVR - Within Visual Range']
};
