export const modules = [
  {
    id: 'module-1',
    number: 1,
    title: 'Typhoon Communication Systems Fundamentals',
    description: 'Introduction to modern fighter communication systems and Typhoon architecture',
    lessons: [
      {
        id: 'lesson-1-1',
        number: 1,
        title: 'Why Modern Fighters Need Advanced Comms',
        objectives: [
          'Understand the evolution of fighter communications',
          'Recognize the operational requirements for modern combat',
          'Identify key challenges in tactical communication'
        ],
        content: `
Modern fighter aircraft operate in complex, multi-domain battlespaces where information superiority is as critical as kinetic capability. The Typhoon/Eurofighter represents a 4th generation+ multirole combat aircraft that relies heavily on advanced communication systems to achieve mission success.

**Evolution of Fighter Communications**

Early fighter aircraft relied solely on voice communications, typically UHF/VHF radio systems with limited range and no data exchange capability. As warfare evolved from single-aircraft engagements to complex, coordinated operations, the need for real-time tactical data sharing became paramount.

The introduction of tactical data links revolutionized air combat by enabling:
- Sharing of radar tracks and sensor data between platforms
- Coordinated engagement of multiple targets
- Enhanced situational awareness through fused tactical picture
- Reduced radio chatter and electromagnetic signatures
- Improved command and control in contested environments

**Modern Operational Requirements**

Today's combat scenarios require fighters to operate as nodes in a networked force. A Typhoon pilot must simultaneously:
- Maintain awareness of friendly and hostile air, ground, and maritime forces
- Coordinate with AWACS, ground control, and other fighters
- Employ weapons using off-board sensor data
- Operate in electronic warfare environments with jamming threats
- Participate in coalition operations with standardized protocols

**Typhoon Communication Architecture**

The Typhoon integrates multiple communication systems into a cohesive architecture:
- Tactical data links (Link 16, Link 22)
- Voice communications (UHF/VHF, HAVE QUICK, SATURN)
- Identification systems (IFF Mode 5)
- SATCOM capabilities
- Cryptographic security systems

These systems work together to provide the pilot with a comprehensive tactical picture while maintaining operational security and interoperability with coalition partners.
        `,
        keyTakeaways: [
          'Modern fighters require integrated communication systems for information superiority',
          'Tactical data links enable coordinated operations and enhanced situational awareness',
          'The Typhoon architecture integrates multiple communication systems for comprehensive capability',
          'Communication systems are as critical as weapons systems in modern air combat'
        ]
      },
      {
        id: 'lesson-1-2',
        number: 2,
        title: "Typhoon's Communication Architecture",
        objectives: [
          'Identify the major communication subsystems on Typhoon',
          'Understand system integration and data flow',
          'Recognize the role of the Mission Computer in managing communications'
        ],
        content: `
The Typhoon communication architecture is designed around a federated system approach where specialized subsystems connect through high-speed data buses to the Mission Computer and cockpit displays.

**Core Communication Subsystems**

1. **MIDS-JTRS (Multifunctional Information Distribution System - Joint Tactical Radio System)**
   - Provides Link 16 tactical data link capability
   - Primary means of exchanging tactical data with other platforms
   - Integrated with sensors and weapons systems

2. **V/UHF Radio System**
   - Two independent V/UHF transceivers for voice communications
   - HAVE QUICK II anti-jam capability
   - SATURN secure voice encryption

3. **IFF Interrogator/Transponder**
   - Mode 5 Level 1 and Level 2 capability
   - Integrated with radar and Link 16 for identification
   - Automatic target classification

4. **SATCOM Terminal**
   - Beyond line-of-sight communications
   - Data and voice capability
   - Integration with mission planning and intelligence systems

**System Integration**

The Mission Computer serves as the central hub for communication management:
- Processes and routes data between subsystems
- Manages communication priorities
- Provides unified interface to cockpit displays
- Implements security policies and encryption

Data flows through the Typhoon architecture as follows:
- Sensor data (radar, IRST, etc.) → Mission Computer → MIDS for Link 16 transmission
- Received Link 16 data → MIDS → Mission Computer → Tactical display
- Voice communications → Radio system → Helmet/headset
- IFF data → Integrated with radar returns and Link 16 tracks

**Cockpit Interface**

The pilot interacts with communication systems through:
- Multi-Function Head Down Displays (MFHDDs)
- Voice Throttle and Stick (VTAS) commands
- Hands-On-Throttle-And-Stick (HOTAS) controls
- Communication management pages

This integration allows the pilot to maintain focus on tactical operations while the systems automatically manage routine communication tasks.
        `,
        keyTakeaways: [
          'Typhoon uses a federated architecture with specialized communication subsystems',
          'The Mission Computer integrates all communication systems',
          'Multiple data buses connect sensors, communications, and displays',
          'Cockpit interface provides unified access to all communication functions'
        ]
      },
      {
        id: 'lesson-1-3',
        number: 3,
        title: 'Integration with Mission Systems',
        objectives: [
          'Understand how communications integrate with sensors and weapons',
          'Recognize data fusion concepts',
          'Identify the role of communications in weapons employment'
        ],
        content: `
The true power of Typhoon's communication systems lies not in standalone capability, but in their deep integration with sensors, weapons, and mission planning systems.

**Sensor-Communication Integration**

The Typhoon's CAPTOR radar and other sensors are tightly coupled with communication systems:

**Track Correlation and Fusion**
- Own-ship radar tracks are automatically formatted and transmitted via Link 16
- Received Link 16 tracks are correlated with local sensor data
- The Mission Computer fuses multiple sources to create single integrated track
- IFF data is automatically associated with radar and Link 16 tracks

**Shared Situational Awareness**
When multiple Typhoons operate together with AWACS support:
- Each platform contributes sensor data to the network
- AWACS provides long-range surveillance and track management
- Individual fighters see composite picture from all participants
- Reduces sensor footprint while maintaining awareness

**Weapons Integration**

Communication systems play a critical role in modern weapons employment:

**Data Link Assisted Weapons**
- AIM-120 AMRAAM receives mid-course guidance updates via Link 16
- Target data can come from off-board sensors (AWACS, other fighters)
- Enables Beyond Visual Range (BVR) engagements with higher probability of kill
- Reduces need for own-ship radar emissions

**Collaborative Targeting**
- Multiple fighters can engage targets using shared sensor data
- One aircraft can illuminate a target while another fires weapon
- Improves survivability and tactical flexibility
- Requires precise timing and coordination via data link

**Mission Planning Integration**

Pre-flight mission planning data is loaded into aircraft systems:
- Link 16 network participation groups and time slots
- Crypto keys and authentication data
- Comm frequencies and backup plans
- Identification procedures and ROE parameters

During flight, this data can be updated:
- Re-tasking via SATCOM or data link
- Dynamic network reconfiguration
- Emergency procedure updates

**Electronic Warfare Coordination**

Communication systems coordinate with EW suite:
- Threat warnings distributed via Link 16
- Coordinated jamming and deception
- Emission control (EMCON) procedures
- Automatic LPI (Low Probability of Intercept) modes

This integration transforms the Typhoon from an individual platform into a networked sensor and shooter in a larger system-of-systems approach to air combat.
        `,
        keyTakeaways: [
          'Communication systems are deeply integrated with sensors and weapons',
          'Data fusion creates a shared tactical picture from multiple sources',
          'Link 16 enables data-link assisted weapons for improved effectiveness',
          'Electronic warfare coordination enhances survivability',
          'Typhoon operates as part of a larger networked force'
        ]
      }
    ],
    quiz: {
      id: 'quiz-1',
      questions: [
        {
          id: 'q1-1',
          question: 'What was the primary limitation of early fighter aircraft communication systems?',
          options: [
            'Limited to voice communications with no data exchange capability',
            'Could not transmit beyond visual range',
            'Required large external antennas',
            'Only worked at high altitudes'
          ],
          correctAnswer: 0,
          explanation: 'Early fighters relied solely on voice communications (UHF/VHF radio) with no capability to exchange tactical data automatically.'
        },
        {
          id: 'q1-2',
          question: 'What is the primary role of the Mission Computer in Typhoon communications?',
          options: [
            'Encrypting voice communications',
            'Serving as central hub for integrating and routing data between subsystems',
            'Storing mission plans',
            'Controlling the radar system'
          ],
          correctAnswer: 1,
          explanation: 'The Mission Computer serves as the central hub that processes and routes data between communication subsystems, sensors, and displays.'
        },
        {
          id: 'q1-3',
          question: 'Which system provides Link 16 capability on the Typhoon?',
          options: [
            'SATURN',
            'HAVE QUICK II',
            'MIDS-JTRS',
            'CAPTOR'
          ],
          correctAnswer: 2,
          explanation: 'MIDS-JTRS (Multifunctional Information Distribution System - Joint Tactical Radio System) provides Link 16 tactical data link capability.'
        },
        {
          id: 'q1-4',
          question: 'How do communication systems enhance Beyond Visual Range (BVR) weapons employment?',
          options: [
            'By increasing missile fuel capacity',
            'By providing target data from off-board sensors via Link 16',
            'By improving radar detection range',
            'By encrypting weapon commands'
          ],
          correctAnswer: 1,
          explanation: 'Communication systems enable data-link assisted weapons like AMRAAM to receive target updates from off-board sensors via Link 16, improving effectiveness.'
        },
        {
          id: 'q1-5',
          question: 'What is the purpose of track correlation and fusion?',
          options: [
            'To reduce fuel consumption',
            'To create a single integrated track from multiple sensor sources',
            'To jam enemy radar systems',
            'To improve voice communication clarity'
          ],
          correctAnswer: 1,
          explanation: 'Track correlation and fusion combines data from own-ship sensors, Link 16, and IFF to create a single integrated track, providing better situational awareness.'
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 'module-2',
    number: 2,
    title: 'Link 16 Basics for Typhoon Operators',
    description: 'Understanding Link 16 fundamentals including network participation, J-Series messages, and TDMA',
    lessons: [
      {
        id: 'lesson-2-1',
        number: 1,
        title: 'What is Link 16?',
        objectives: [
          'Define Link 16 and its purpose',
          'Understand the standardization (STANAG 5516)',
          'Recognize key characteristics of Link 16'
        ],
        content: `
Link 16 is a NATO standardized tactical data link that enables real-time exchange of tactical information between aircraft, ships, and ground stations. Developed in the 1970s-1980s, it addresses the fundamental challenge of creating a shared tactical picture across coalition forces.

**Key Characteristics**

Link 16 provides:
- **Jam-resistant digital communications**: Uses spread-spectrum techniques and frequency hopping to resist electronic warfare
- **Standardized message formats (J-Series)**: Ensures interoperability across different platforms and nations
- **Time Division Multiple Access (TDMA)**: Allows multiple users to share the same frequency without interference
- **Cryptographic security**: All transmissions are encrypted to prevent unauthorized access
- **Multi-service and multinational interoperability**: Enables joint and coalition operations

**STANAG 5516**

Link 16 is defined by NATO Standardization Agreement (STANAG) 5516, which ensures all NATO members can communicate seamlessly. This standardization covers:
- Message formats and content
- Network timing and synchronization
- Frequency hopping patterns
- Cryptographic requirements
- Terminal performance specifications

**Operational Benefits**

For a Typhoon pilot, Link 16 provides:
- Real-time tactical picture of airborne, surface, and ground tracks
- Automated track updates without voice communications
- Coordinated engagement information
- Command and control instructions
- Electronic warfare threat warnings
- Mission management data

**Technical Implementation**

Link 16 operates in the UHF band (960-1215 MHz) using:
- 51 discrete frequencies
- Frequency hopping at very high rates (70,000+ hops per second)
- Spread spectrum modulation for jam resistance
- Error correction coding for reliability

The system is designed to operate in contested electromagnetic environments where jamming and interference are expected threats.

**Evolution and Modern Use**

Originally developed as JTIDS (Joint Tactical Information Distribution System), Link 16 has evolved to become the primary tactical data link for NATO and allied forces. Modern implementations like MIDS (Multifunctional Information Distribution System) provide enhanced capability while maintaining backward compatibility with legacy terminals.
        `,
        keyTakeaways: [
          'Link 16 is the NATO standard tactical data link defined by STANAG 5516',
          'It provides jam-resistant, encrypted exchange of tactical data',
          'TDMA allows multiple users to share the network efficiently',
          'Link 16 creates a shared tactical picture across coalition forces',
          'Modern MIDS terminals provide Link 16 capability on Typhoon'
        ]
      },
      {
        id: 'lesson-2-2',
        number: 2,
        title: 'Network Participation & NPGs',
        objectives: [
          'Understand Network Participation Groups (NPGs)',
          'Learn how networks are organized',
          'Recognize the concept of STNID and track numbers'
        ],
        content: `
Link 16 networks are organized using Network Participation Groups (NPGs) that control when and how platforms can transmit and receive data.

**Network Participation Groups (NPGs)**

An NPG is a logical grouping of Link 16 participants that share a common operational purpose. Each platform is assigned membership in one or more NPGs based on mission requirements.

**NPG Structure**
- NPG numbers range from 0 to 127
- A platform can participate in multiple NPGs simultaneously
- Different NPGs can operate on the same or different frequency bands
- NPG membership determines message routing and network access

**Common NPG Usage**

Typical NPG assignments in coalition operations:
- NPG 0: Often used for surveillance (AWACS, ground radars)
- NPG 1-10: Fighter groups by mission or nationality
- NPG 11-20: Surface vessels
- NPG 21-30: Ground units
- NPG 31+: Special mission assignments

**Surveillance Track Number ID (STNID)**

Each platform on a Link 16 network is identified by a unique STNID:
- 5-digit octal number (00000-77777 in octal = 0-32767 decimal)
- Assigned during mission planning
- Remains constant throughout the mission
- Used to identify message source and track ownership

**Track Number Format**

Link 16 tracks are numbered using a specific format:
- First two digits: NPG/Unit assignment
- Last three digits: Sequential track number
- Example: STNID 12345 might report track 12001, 12002, etc.

**Network Design Principles**

Effective network design considers:
- **Bandwidth allocation**: Higher priority NPGs receive more timeslots
- **Geographic distribution**: Platforms in same area often share NPG
- **Mission role**: Similar roles grouped together (CAP, CAS, ISR)
- **Command relationships**: C2 platforms in dedicated NPGs
- **Coalition structure**: Separate NPGs for different nations if needed

**Dynamic Network Participation**

While NPGs are typically assigned during mission planning, changes can occur:
- Platforms can be added to networks in-flight
- NPG membership can be modified for re-tasking
- Emergency procedures may require switching NPGs
- Backup networks provide redundancy

**Typhoon Network Participation**

A Typhoon typically participates as:
- Member of a fighter NPG with other aircraft in the package
- Receiver of surveillance NPG data (AWACS tracks)
- Potential relay for other platforms
- Coordinated with GCI and command networks

Understanding NPG structure is essential for effective network operations and ensuring the right information reaches the right platforms at the right time.
        `,
        keyTakeaways: [
          'NPGs organize Link 16 participants into logical groups',
          'Each platform has a unique STNID for identification',
          'NPG membership determines network access and message routing',
          'Track numbers follow a standardized format',
          'Effective network design optimizes bandwidth and information flow'
        ]
      },
      {
        id: 'lesson-2-3',
        number: 3,
        title: 'J-Series Messages in Typhoon Context',
        objectives: [
          'Understand J-Series message structure',
          'Identify common messages used by Typhoon',
          'Recognize message categories and purposes'
        ],
        content: `
J-Series messages are the standardized data formats used on Link 16 to exchange tactical information. Each message type serves a specific purpose and contains defined data fields.

**Message Naming Convention**

J-Series messages are numbered as:
- J + major category + . + minor variant
- Example: J3.2 = Category 3 (Reference), variant 2 (Air Track)
- Higher-frequency messages have lower numbers

**Major Message Categories**

**Initial Entry Messages (J0.x)**
- Network initialization and time synchronization
- Not typically used by fighter aircraft

**Precision Participant Location (J2.x)**
- J2.0: Indirect Interface Unit PPLI
- J2.2: Air PPLI - Typhoon transmits own position
- J2.3: Surface PPLI
- J2.5: Land Point PPLI

**Surveillance Messages (J3.x)**
- J3.0: Emergency Point
- J3.2: Air Track - Most common, reports airborne contacts
- J3.3: Surface Track
- J3.5: Land Track
- J3.7: Track Management

**Control Messages (J7.x)**
- J7.0: Weapons Coordination
- J7.1: Weapons Assignment
- J7.2: Mission Assignment
- J7.3: Control

**Engagement Messages (J12.x)**
- J12.0: Engagement Status
- J12.2: Handover
- J12.3: Controlling Unit Report
- J12.6: Pairing

**Electronic Warfare Messages (J13.x)**
- J13.0: EW Product
- J13.2: EW Report

**Typhoon Common Message Usage**

**Transmitted by Typhoon:**
- **J2.2 (Air PPLI)**: Own position, altitude, speed, heading
  - Transmitted periodically (typically 5-12 second intervals)
  - Allows other platforms to track friendly position

- **J3.2 (Air Track)**: Radar contacts detected by own sensors
  - Quality and detail depends on radar mode
  - Updates existing tracks or creates new ones

- **J12.0 (Engagement Status)**: Weapons employment information
  - Launch, impact, kill assessment
  - Prevents duplicate engagements

**Received by Typhoon:**
- **J3.2 (Air Track)**: Tracks from AWACS and other fighters
  - Provides beyond-horizon awareness
  - Integrated into tactical display

- **J7.x (Control)**: Tasking and coordination from C2
  - Mission assignments
  - Target designations
  - Airspace coordination

- **J13.x (EW)**: Threat warnings
  - SAM activities
  - Radar emissions
  - Jamming reports

**Message Structure**

Each J-Series message contains:
- Header: Source STNID, message type, time tag
- Data fields: Specific to message type
- Error correction: Ensures data integrity

Example J3.2 Air Track fields:
- Track number
- Position (latitude/longitude)
- Altitude
- Heading
- Speed
- Track quality/classification
- IFF response

**Message Rates and Priorities**

Different messages have different transmission priorities:
- PPLI: High rate, lower priority (periodic updates)
- Emergency tracks: Immediate, highest priority
- Standard tracks: Medium priority, as needed
- C2 messages: High priority when transmitted

The MIDS terminal automatically manages message priorities based on network loading and tactical situation.
        `,
        keyTakeaways: [
          'J-Series messages are standardized formats for Link 16 data',
          'Messages are categorized by function (PPLI, surveillance, control, etc.)',
          'J2.2 and J3.2 are the most common messages for fighters',
          'Each message type has defined fields and update rates',
          'MIDS terminal automatically manages message priorities'
        ]
      },
      {
        id: 'lesson-2-4',
        number: 4,
        title: 'TDMA and Network Timing',
        objectives: [
          'Understand Time Division Multiple Access principles',
          'Learn about timeslot allocation',
          'Recognize network synchronization requirements'
        ],
        content: `
Time Division Multiple Access (TDMA) is the core technology that allows Link 16 to support multiple users on a shared frequency without interference.

**TDMA Fundamentals**

TDMA divides time into discrete slots, allowing multiple platforms to transmit sequentially on the same frequency:
- Each transmission occupies a specific timeslot
- Time is precisely synchronized across all network participants
- Platforms transmit only in their assigned slots
- Prevents signal collisions and interference

**Time Structure**

Link 16 time is organized hierarchically:

**Epoch (Coarse Time)**
- 12-second repeating cycle
- Synchronized to precise time reference (GPS)
- All networks use same epoch timing

**Frame**
- 7.8125 milliseconds
- 1536 frames per epoch
- Basic unit of timeslot allocation

**Timeslot**
- 7.8125 milliseconds (same as frame)
- Each frame can be assigned to different users
- Multiple transmissions per epoch for high-rate data

**Network Timing Synchronization**

Precise timing is critical for TDMA:
- All participants must maintain accuracy within ±100 microseconds
- GPS provides primary time reference
- Network Time Updates (NTU) provide backup synchronization
- Initial time may come from mission planning or entered manually

**Time Synchronization Process**
1. Platform acquires GPS time
2. MIDS terminal synchronizes to network epoch
3. Monitors received transmissions for timing accuracy
4. Makes fine adjustments to maintain synchronization
5. Transmits Network Time Updates to help other platforms

**Timeslot Assignment**

Timeslots are allocated during network design based on:

**Transmit Slots**
- Each platform assigned specific timeslots for transmission
- Number of slots based on data rate requirements
- AWACS/C2 platforms typically get more slots
- Fighters get fewer slots but sufficient for PPLI and tracks

**Receive Slots**
- Platforms monitor all non-transmit slots
- Selective reception based on NPG membership
- Filtering based on message type and geographic area

**Contention Slots**
- Some slots allocated for random access
- Used for emergency transmissions
- Lower reliability but immediate access

**Stacked Networks**

Multiple Link 16 networks can operate simultaneously:
- Different networks use different timeslot patterns
- Same frequency can support multiple stacked nets
- MIDS terminal can participate in multiple nets
- Useful for coalition operations with different security levels

**Example Timeslot Pattern**

Simplified example for a 4-ship fighter flight:
- Lead: Slots 10, 20, 30, 40... (every 10th slot)
- #2: Slots 11, 21, 31, 41...
- #3: Slots 12, 22, 32, 42...
- #4: Slots 13, 23, 33, 43...
- Remaining slots: AWACS, other units, contention

Actual patterns are more complex and optimized for network efficiency.

**Dynamic Slot Reallocation**

Modern MIDS terminals support:
- Adaptive slot assignment based on traffic loading
- Priority escalation for urgent messages
- Relay capability using multiple timeslots
- Bandwidth on demand for high-volume transfers

**Timing Accuracy Impact**

Poor timing synchronization causes:
- Transmission collisions (data loss)
- Reduced network capacity
- Potential security vulnerabilities
- Degraded situational awareness

Maintaining timing is a critical continuous background function of the MIDS terminal.
        `,
        keyTakeaways: [
          'TDMA allows multiple users to share Link 16 frequency without interference',
          'Time is divided into 7.8125ms timeslots within 12-second epochs',
          'Precise synchronization (±100μs) is essential for network operation',
          'Timeslots are pre-assigned based on platform role and data requirements',
          'GPS provides primary time reference for network synchronization'
        ]
      },
      {
        id: 'lesson-2-5',
        number: 5,
        title: 'Track Management on Typhoon',
        objectives: [
          'Understand track lifecycle',
          'Learn track quality and classification',
          'Recognize track correlation principles'
        ],
        content: `
Track management is the process of creating, maintaining, updating, and correlating tactical tracks from multiple sources including own-ship sensors and Link 16.

**Track Lifecycle**

**1. Track Initiation**
A track begins when:
- Own radar detects a contact (local track)
- Link 16 message received reporting a new contact (remote track)
- IFF response correlates with existing data

**2. Track Propagation**
Tracks are updated through:
- Continued radar surveillance
- Link 16 updates from originating platform
- IFF interrogations
- Correlation with other sensor data

**3. Track Coasting**
When updates cease:
- Track position is predicted based on last known vector
- Track quality degrades over time
- Coasted track eventually times out and drops

**4. Track Deletion**
Tracks are removed when:
- Confirmed destroyed/landed
- Exceeded maximum coast time
- Determined to be false/duplicate
- Manually deleted by operator

**Track Quality Levels**

Link 16 tracks have quality indicators:

**Level 1 - Firm Track**
- High confidence in position and identification
- Based on multiple sensor correlations
- Recent update (< 30 seconds typically)

**Level 2 - Probable Track**
- Moderate confidence
- Single sensor or older update
- Requires confirmation

**Level 3 - Possible Track**
- Low confidence
- Very old update or single uncorrelated detection
- May be false alarm

**Track Classification**

Tracks are classified by:

**Platform Type**
- Fixed-wing aircraft
- Rotary-wing aircraft
- Missile
- Unknown airborne

**Altitude Band**
- High (> 25,000 ft typical)
- Medium (5,000 - 25,000 ft)
- Low (< 5,000 ft)

**Identification**
- Friendly (IFF positive response)
- Hostile (confirmed enemy)
- Suspect (probable enemy)
- Unknown (no identification)
- Assumed Friend (based on behavior/location)

**Track Correlation**

The Typhoon Mission Computer correlates tracks from multiple sources:

**Own Radar + Link 16**
- If local radar contact matches Link 16 track position
- System creates single fused track
- Combines best quality data from each source
- Reduces display clutter

**Multiple Link 16 Sources**
- Different platforms may report same contact
- Correlation algorithms merge duplicate reports
- Retained track uses data from highest quality source
- Updates from any source refresh the fused track

**IFF Integration**
- IFF responses automatically associated with tracks
- Mode 5 provides cryptographic identification
- Positive IFF changes track to Friendly classification
- IFF failure may require visual identification

**Typhoon Track Display**

Tracks appear on tactical display with symbology indicating:
- Platform type (shape)
- Altitude (fill pattern)
- Heading (velocity vector)
- Identification (color/symbol)
- Track number
- Data quality/age

**Display Filtering**
Pilots can filter displayed tracks by:
- Altitude band
- Range from own-ship
- Classification (show only hostile/unknown)
- Track quality
- Specific NPG or platform

**Track Management Operations**

**Manual Track Correlation**
- Pilot can force correlation of tracks believed to be same contact
- Useful when automatic correlation fails
- Requires tactical judgment

**Track Deletion**
- Remove false tracks or clutter
- Typically requires confirmation to prevent accidental deletion

**Track Hook/Designation**
- Select specific track for weapons employment
- Designate track for further sensor investigation
- Share track designation with wingman

**Reference Point Creation**
- Convert track to reference point
- Use for navigation or mission planning
- Share reference points via Link 16

**Track Data Prioritization**

In high-density environments:
- Nearest/highest threat tracks prioritized
- Engaged tracks highlighted
- Tracks outside tactical area may be filtered
- Display density management prevents clutter

Effective track management is essential for maintaining situational awareness and preventing fratricide in complex battlespace.
        `,
        keyTakeaways: [
          'Tracks progress through lifecycle: initiate, update, coast, delete',
          'Track quality levels indicate confidence and recency',
          'Classification includes platform type, altitude, and identification',
          'Correlation merges data from radar, Link 16, and IFF',
          'Display filtering helps manage information in dense environments'
        ]
      }
    ],
    quiz: {
      id: 'quiz-2',
      questions: [
        {
          id: 'q2-1',
          question: 'What does TDMA allow Link 16 to achieve?',
          options: [
            'Increased transmission power',
            'Multiple users to share the same frequency without interference',
            'Automatic encryption of messages',
            'Longer communication range'
          ],
          correctAnswer: 1,
          explanation: 'Time Division Multiple Access (TDMA) divides time into slots, allowing multiple platforms to transmit on the same frequency at different times, preventing signal collisions.'
        },
        {
          id: 'q2-2',
          question: 'Which J-Series message does a Typhoon use to transmit its own position?',
          options: [
            'J3.2 Air Track',
            'J2.2 Air PPLI',
            'J7.0 Weapons Coordination',
            'J12.0 Engagement Status'
          ],
          correctAnswer: 1,
          explanation: 'J2.2 (Air PPLI - Precise Participant Location and Identification) is used to transmit own-ship position, altitude, speed, and heading.'
        },
        {
          id: 'q2-3',
          question: 'What is the purpose of an NPG (Network Participation Group)?',
          options: [
            'To encrypt all network traffic',
            'To organize Link 16 participants into logical groups for network access',
            'To increase transmission power',
            'To provide GPS navigation'
          ],
          correctAnswer: 1,
          explanation: 'NPGs organize Link 16 participants into logical groups that share a common operational purpose and control when and how platforms can transmit and receive data.'
        },
        {
          id: 'q2-4',
          question: 'How long is a Link 16 timeslot?',
          options: [
            '1 millisecond',
            '7.8125 milliseconds',
            '12 seconds',
            '100 microseconds'
          ],
          correctAnswer: 1,
          explanation: 'A Link 16 timeslot is 7.8125 milliseconds, the same duration as a frame. There are 1536 frames in a 12-second epoch.'
        },
        {
          id: 'q2-5',
          question: 'What happens during track correlation?',
          options: [
            'Tracks are transmitted to other platforms',
            'Multiple sensor sources reporting the same contact are merged into a single fused track',
            'Tracks are deleted from the system',
            'Track numbers are reassigned'
          ],
          correctAnswer: 1,
          explanation: 'Track correlation merges data from multiple sources (own radar, Link 16, IFF) that are reporting the same contact into a single integrated track with the best available data.'
        },
        {
          id: 'q2-6',
          question: 'Which NATO standardization agreement defines Link 16?',
          options: [
            'STANAG 4586',
            'STANAG 5516',
            'STANAG 3910',
            'STANAG 7085'
          ],
          correctAnswer: 1,
          explanation: 'STANAG 5516 is the NATO standardization agreement that defines Link 16, ensuring interoperability across all NATO members.'
        },
        {
          id: 'q2-7',
          question: 'What is the primary time reference for Link 16 synchronization?',
          options: [
            'AWACS time broadcasts',
            'GPS (Global Positioning System)',
            'Atomic clocks in each terminal',
            'Ground station time signals'
          ],
          correctAnswer: 1,
          explanation: 'GPS provides the primary time reference for Link 16 network synchronization, with all participants maintaining accuracy within ±100 microseconds.'
        }
      ],
      passingScore: 80
    }
  },
  {
    id: 'module-3',
    number: 3,
    title: 'MIDS-JTRS on Typhoon',
    description: 'Detailed examination of the MIDS terminal, cockpit integration, and operational procedures',
    lessons: [
      {
        id: 'lesson-3-1',
        number: 1,
        title: 'MIDS Terminal Overview',
        objectives: [
          'Understand MIDS-JTRS capabilities',
          'Recognize terminal components',
          'Identify key specifications'
        ],
        content: `
The Multifunctional Information Distribution System - Joint Tactical Radio System (MIDS-JTRS) is the modern implementation of Link 16 used on the Typhoon and other NATO platforms.

**MIDS Evolution**

**JTIDS (Joint Tactical Information Distribution System)**
- Original Link 16 implementation from 1980s-1990s
- Large, heavy terminals
- Limited functionality

**MIDS (Multifunctional Information Distribution System)**
- Developed in 1990s-2000s
- Smaller, lighter than JTIDS
- Enhanced processing capability
- Backward compatible with JTIDS

**MIDS-JTRS (Joint Tactical Radio System)**
- Current generation terminal
- Software-defined radio architecture
- Multi-waveform capable (Link 16 + future waveforms)
- Advanced cryptography
- Improved anti-jam performance

**Terminal Components**

**Radio Frequency (RF) Module**
- Transmitter/receiver for UHF band (960-1215 MHz)
- Frequency hopping synthesizer
- Power amplification
- Antenna interface

**Processing Module**
- Mission Computer interface
- Message processing and routing
- Cryptographic functions
- Network timing management
- Track correlation

**Cryptographic Unit**
- Integrated crypto processor
- Key storage and management
- Authentication
- Emissions security (EMSEC)

**Antenna System**
- Top and bottom antennas for omnidirectional coverage
- Designed for high-G maneuvers
- Low drag aerodynamic profile

**MIDS-JTRS Capabilities**

**Link 16 Functions**
- Full TDMA network participation
- All J-Series message types
- Multiple network participation
- Relay capability

**Enhanced Features**
- Concurrent Multinet (CMN): Participate in multiple networks simultaneously
- Enhanced Throughput (ET): Higher data rates for specific applications
- Flexible data links: Support for future waveforms beyond Link 16
- GPS integration: Precision timing and navigation

**Performance Specifications**

**Transmission**
- Frequency range: 960-1215 MHz
- 51 discrete frequencies
- Hopping rate: >70,000 hops/second
- Output power: Up to 200W (platform dependent)

**Data Rates**
- Standard messages: 28.8 - 57.6 kbps (information rate)
- Enhanced throughput modes: Up to 115.2 kbps

**Range**
- Line of sight: 300+ nautical miles (altitude dependent)
- Beyond line of sight via relay

**Reliability**
- Operates in severe jamming environments
- Error correction coding
- Automatic retransmission for critical messages
- Redundant system architecture

**Integration on Typhoon**

The MIDS terminal interfaces with:
- **Mission Computer**: Primary data exchange
- **Radar**: Track data integration
- **IFF**: Identification correlation
- **Sensors**: IRST, DASS integration
- **Weapons**: Employment coordination
- **Navigation**: GPS time and position
- **Cockpit Displays**: Tactical picture presentation

**Power and Cooling**
- Powered by aircraft electrical system
- Liquid cooling integration
- Operates throughout flight envelope
- High-G rated for fighter maneuvers

**Built-In Test (BIT)**

MIDS includes comprehensive self-test:
- Continuous BIT (CBIT): Monitors during operation
- Initiated BIT (IBIT): Detailed test on demand
- Reports faults to Mission Computer
- Facilitates maintenance and troubleshooting

**Cryptographic Security**

MIDS implements multiple security layers:
- Transmission Security (TRANSEC): Anti-exploit features
- Communications Security (COMSEC): Message encryption
- Emissions Security (EMSEC): Low probability of intercept
- Authentication: Prevents spoofing and intrusion

**Software Architecture**

MIDS-JTRS uses software-defined radio:
- Waveforms implemented in software
- Can be updated/enhanced via software load
- Supports multiple simultaneous waveforms
- Future-proof architecture

This flexibility allows MIDS to adapt to new threats and requirements without hardware changes, ensuring long-term viability as the tactical data link environment evolves.
        `,
        keyTakeaways: [
          'MIDS-JTRS is the modern software-defined radio implementation of Link 16',
          'Terminal includes RF module, processor, crypto unit, and antenna system',
          'Supports concurrent multinetworking and enhanced throughput modes',
          'Integrated with Typhoon sensors, weapons, and displays',
          'Software-defined architecture provides future-proof capability'
        ]
      },
      {
        id: 'lesson-3-2',
        number: 2,
        title: 'Typhoon MIDS Integration',
        objectives: [
          'Understand physical installation',
          'Learn data flow through aircraft systems',
          'Recognize power and cooling requirements'
        ],
        content: `
The MIDS terminal is deeply integrated into the Typhoon's avionics architecture, requiring careful coordination of data, power, and cooling systems.

**Physical Installation**

**Terminal Location**
- MIDS-JTRS unit mounted in avionics bay
- Vibration-isolated mounting
- Accessible for maintenance
- Connected via aircraft data buses

**Antenna System**
- Upper antenna: Dorsal spine mounting
- Lower antenna: Ventral fuselage
- Provides omnidirectional coverage
- Maintains performance during high-G maneuvers

**Cooling Integration**
- Liquid cooling from aircraft system
- Heat exchanger for RF power amplifier
- Critical for sustained high-power operation
- Cooling loss results in reduced capability/shutdown

**Data Bus Architecture**

**MIL-STD-1553 Interface**
- Primary connection to Mission Computer
- Dual-redundant bus for reliability
- Real-time data exchange
- Deterministic timing

**Data Flow Pathways**

**Outbound (Typhoon → Link 16)**
1. Radar detects airborne contact
2. Track data sent to Mission Computer
3. Mission Computer formats J3.2 message
4. Message sent to MIDS via 1553 bus
5. MIDS encrypts and schedules transmission
6. RF transmission during assigned timeslot

**Inbound (Link 16 → Typhoon)**
1. MIDS receives Link 16 transmission
2. Decryption and validation
3. J-message extracted and formatted
4. Sent to Mission Computer via 1553 bus
5. Mission Computer correlates with local tracks
6. Fused track displayed on tactical display

**Sensor Integration**

**Radar Integration**
- CAPTOR radar tracks automatically shared
- Track quality assessment
- Deconfliction to prevent duplicate reports
- Radar mode impacts track update rate

**IFF Integration**
- Mode 5 interrogator responses
- Automatic track correlation
- Identification updates via Link 16
- Coordinated interrogation schedule

**IRST (Infrared Search and Track)**
- Passive sensor data correlation
- Track quality enhancement
- EMCON-friendly operation
- Complementary to radar tracks

**Defensive Aids Sub-System (DASS)**
- EW threat warnings distributed via Link 16
- Coordinated jamming information
- Missile warning integration
- Automated response coordination

**Mission Computer Role**

The Mission Computer serves as central integrator:
- **Data Fusion**: Combines radar, Link 16, IFF, IRST data
- **Priority Management**: Determines message transmission priority
- **Resource Allocation**: Manages bandwidth usage
- **Track Correlation**: Merges duplicate reports
- **Display Management**: Formats data for cockpit presentation
- **Security**: Enforces access controls and classification

**Power System Integration**

**Electrical Requirements**
- Primary AC power from aircraft generators
- Backup power during emergency
- Clean power for crypto components
- Surge protection

**Power Management**
- MIDS draws 800-1200W depending on mode
- Higher power during transmission
- Reduced power in receive-only mode
- Automatic power scaling

**Startup Sequence**
1. Aircraft power applied
2. MIDS initiates Built-In Test
3. Crypto key loading (automatic or manual)
4. GPS time acquisition
5. Network synchronization
6. Full operational capability

**Redundancy and Fault Tolerance**

**Dual-Redundant Systems**
- Two independent 1553 buses
- Automatic failover
- Degraded mode operation possible
- Continuous health monitoring

**Degraded Operations**
If MIDS fails:
- Voice communications remain available
- Own-ship sensors continue to function
- IFF operates independently
- Tactical data link capability lost

**Maintenance Interface**

**Ground Maintenance**
- Laptop connection via maintenance bus
- Software updates and configuration
- Fault diagnosis and log download
- Performance verification

**Airborne Monitoring**
- Built-In Test results to cockpit
- Fault annunciation
- Performance indicators
- Optional detailed status pages

**Configuration Management**

**Mission Planning Integration**
- Data transfer cartridge (DTC) loading
- Network participation data
- Crypto keys and authentication
- Frequency assignments
- NPG membership

**In-Flight Reconfiguration**
- Some parameters adjustable in flight
- Network switching
- Emergency procedures
- COMSEC rekey

The tight integration of MIDS with Typhoon systems creates a cohesive capability where the data link is a natural extension of the aircraft's sensors and weapons rather than a standalone system.
        `,
        keyTakeaways: [
          'MIDS physically integrated in avionics bay with dual antennas',
          'MIL-STD-1553 bus connects MIDS to Mission Computer',
          'Data flows bidirectionally between sensors, MIDS, and displays',
          'Mission Computer fuses data from multiple sources',
          'Redundant systems provide fault tolerance',
          'Mission planning data loaded via DTC'
        ]
      },
      {
        id: 'lesson-3-3',
        number: 3,
        title: 'Cockpit Controls & Displays',
        objectives: [
          'Identify MIDS control interfaces',
          'Understand tactical display symbology',
          'Learn common control procedures'
        ],
        content: `
Typhoon pilots interact with MIDS and Link 16 through integrated cockpit displays and controls designed for minimal workload during combat operations.

**Primary Display Interfaces**

**Multi-Function Head Down Displays (MFHDD)**
- Left and Right color displays
- Tactical Situation Display (TSD) primary for Link 16
- Configurable format selection
- Touch-screen and HOTAS control

**Head-Up Display (HUD)**
- Selected tactical information
- Track designators and range
- Minimal clutter for combat
- Integrated with sensors

**Control Interfaces**

**HOTAS (Hands-On-Throttle-And-Stick)**
- Track designation
- Sensor control
- Display management
- No need to move hands from controls

**VTAS (Voice Throttle and Stick)**
- Voice command capability
- Backup to manual controls
- Reduces head-down time

**Direct Voice Input (DVI)**
- Voice commands for system control
- "Select TSD", "Designate track", etc.
- Reduces button presses
- Operates in high-G environment

**Tactical Situation Display (TSD)**

The TSD is the primary Link 16 interface showing:

**Own-Ship Symbol**
- Aircraft position at display center (ownship-centered mode)
- Or fixed position (north-up mode)
- Heading indicator
- Altitude and speed data

**Track Symbology**

Different symbols represent track types:
- **Triangle**: Unknown/suspect air track
- **Circle**: Friendly air track
- **Diamond**: Hostile air track
- **Square**: Ground/surface track
- **Rotated symbols**: Indicate track altitude band

**Color Coding**
- Blue: Friendly
- Red: Hostile
- Yellow: Unknown/Suspect
- White: Neutral/Assumed Friend

**Track Data Tags**
- Track number
- Altitude (in hundreds of feet)
- Speed (optional)
- Heading vector
- Track age indicator

**Range Rings and Scale**
- Selectable range: 20nm, 50nm, 100nm, 200nm+
- Range rings for quick distance estimation
- Bearing scale around perimeter

**Tactical Display Modes**

**Ownship-Centered**
- Aircraft always at display center
- Display rotates with heading changes
- Most common for tactical operations

**North-Up Fixed**
- North always at top
- Ownship moves on display
- Useful for planning and coordination

**Track-Centered**
- Selected track at display center
- Used for detailed examination
- Target development and weapons employment

**Display Filtering Options**

Pilots can filter display to reduce clutter:

**Altitude Filters**
- High only (>25,000 ft)
- Medium only (5,000-25,000 ft)
- Low only (<5,000 ft)
- All altitudes

**Classification Filters**
- Hostile only
- Unknown/Hostile
- All tracks
- Friendly only (rare)

**Range Filters**
- Within specified range ring
- All tracks regardless of range

**Quality Filters**
- Firm tracks only (high confidence)
- All track qualities

**Link 16 Status Indications**

**Network Status**
- Network participation active
- NPG membership
- Crypto status (secure/insecure)
- Time synchronization status

**Data Link Status**
- Transmitting
- Receiving
- Number of tracks on link
- Own-ship PPLI transmission rate

**Fault Indications**
- MIDS failure modes
- Degraded capability
- Crypto faults
- Loss of timing

**Track Interaction**

**Track Designation**
- HOTAS cursor control
- Move cursor over desired track
- Designate button assigns to sensor/weapon

**Track Hook**
- Select track for detailed information
- Expands data tag
- Shows track history
- Source information (Link 16, radar, IFF)

**Track Management**
- Manual correlation
- Track deletion
- Classification override (with authentication)
- Create reference point from track

**Communication Management Pages**

**Link 16 Control Page**
- Network selection
- NPG display
- Message rate settings
- Crypto status

**Radio Control Page**
- Frequency selection
- HAVE QUICK status
- SATURN activation
- Volume and squelch

**Integrated Functions**

**Sensor Cueing**
- Designate Link 16 track to radar
- Radar slews to track location
- Enables rapid target acquisition
- Reduces search time

**Weapons Employment**
- Select Link 16 track as target
- Weapons system accepts remote target data
- AMRAAM receives mid-course guidance
- Engagement coordination via J12.x messages

**Navigation Integration**
- Convert tracks to waypoints
- Display reference points from Link 16
- Correlation with planned route
- Threat avoidance planning

**Workload Management**

Design philosophy minimizes pilot workload:
- Automatic track updates (no pilot action required)
- Intelligent filtering reduces clutter
- HOTAS keeps hands on controls
- Voice commands for routine tasks
- Automatic prioritization of critical information
- Alerts for high-priority threats

**Emergency Procedures**

**Loss of Link 16**
- Automatic fallback to voice communications
- Sensor data still available
- Manual coordination required
- Reduced situational awareness

**Crypto Failure**
- Secure data loss
- May continue in unclassified mode (mission dependent)
- Rekey procedures

**Display Failure**
- Backup display available
- Essential information on HUD
- Voice communications for coordination

The cockpit integration ensures Link 16 enhances rather than complicates the pilot's task, providing critical information with minimal interaction required.
        `,
        keyTakeaways: [
          'TSD is primary display for Link 16 tactical picture',
          'Track symbology uses shapes and colors for classification',
          'HOTAS and voice commands minimize head-down time',
          'Display filtering manages information density',
          'Automatic integration with sensors and weapons reduces workload',
          'Status indications show network health and capability'
        ]
      },
      {
        id: 'lesson-3-4',
        number: 4,
        title: 'Network Initialization & Configuration',
        objectives: [
          'Understand startup procedures',
          'Learn network entry process',
          'Recognize common configuration issues'
        ],
        content: `
Proper initialization and configuration of MIDS is essential for successful Link 16 operations. The process involves several automated and manual steps.

**Pre-Flight Configuration**

**Mission Planning System**
Mission planning generates Link 16 parameters:
- Network designation and NPG assignments
- Timeslot allocation
- STNID assignment
- Frequency assignments
- Crypto key references

**Data Transfer Cartridge (DTC)**
- Mission data loaded into DTC
- Includes all Link 16 parameters
- Waypoints, threats, ROE
- Inserted into aircraft during preflight

**Alternative Manual Entry**
If DTC unavailable:
- Critical parameters entered via cockpit interface
- Time-consuming process
- Error-prone
- Should be backup only

**Power-Up Sequence**

**1. Aircraft Power Application**
- MIDS receives primary power
- Initiates Built-In Test (BIT)
- Loads software
- Approximately 30-60 seconds

**2. BIT Execution**
Tests performed:
- RF transmitter/receiver
- Processor functionality
- Memory integrity
- Crypto module
- Antenna system
- Results reported to cockpit

**3. Configuration Loading**
- Reads DTC data
- Validates mission parameters
- Loads crypto keys
- Configures network settings

**4. GPS Time Acquisition**
- MIDS acquires GPS signal
- Establishes precise time reference
- Critical for network synchronization
- May take 1-5 minutes for initial acquisition

**Network Entry Process**

**Gross Time Entry**
If GPS unavailable or degraded:
- Pilot enters current time manually
- Format: Hours:Minutes:Seconds
- Accuracy impacts network entry time
- GPS acquisition should occur quickly after

**Coarse Time Synchronization**
- MIDS synchronizes to network epoch
- Monitors received transmissions
- Adjusts local time reference
- Achieves ±100 microsecond accuracy

**Fine Timing and Network Lock**
- Precise synchronization achieved
- MIDS ready to transmit
- Network status changes to "Net Ready"
- Typically 2-5 minutes after power-up

**Crypto Key Management**

**Key Loading Methods**

**1. Automated Key Distribution**
- Keys pre-loaded in MIDS memory
- Selected based on mission date/time
- Automatic rollover at scheduled times
- Preferred method

**2. Manual Key Entry**
- Backup if automated fails
- Pilot enters key via cockpit interface
- Tedious and error-prone
- Used only when necessary

**3. Over-The-Air Rekey (OTAR)**
- New keys distributed via secure Link 16 message
- Automatic background process
- Enables extended operations
- Requires functioning network

**Key Verification**
- System confirms key validity
- Checks authentication
- Verifies crypto compatibility
- Failure requires key reload

**Network Participation Activation**

**NPG Selection**
- Primary NPG from mission plan
- May participate in multiple NPGs
- Pilot can switch between NPGs
- Each NPG may have different membership

**Transmit Enable**
- Final pilot action to begin transmitting
- Confirms ready to enter network
- Begins PPLI transmission
- "Silent" receive-only mode also available

**Status Verification**

Pilot verifies:
- Crypto status: Secure
- Time sync: Synchronized
- Network participation: Active
- Own-ship PPLI transmitting
- Receiving tracks from network

**Common Configuration Issues**

**Time Synchronization Problems**
- **Cause**: GPS failure, incorrect manual time entry
- **Symptom**: Cannot enter network, "Time Sync Failed"
- **Solution**: Verify GPS, re-enter time, check antenna

**Crypto Failures**
- **Cause**: Wrong key loaded, expired key, crypto module fault
- **Symptom**: "Crypto Fail", received data garbled
- **Solution**: Reload key, verify key schedule, BIT crypto system

**NPG Mismatch**
- **Cause**: Mission plan error, wrong DTC loaded
- **Symptom**: Not receiving expected tracks, isolation from flight
- **Solution**: Verify NPG settings, coordinate with flight, manual NPG entry

**STNID Conflicts**
- **Cause**: Duplicate STNID in network
- **Symptom**: Track confusion, system alerts
- **Solution**: Change STNID, coordinate with other platforms

**Antenna Problems**
- **Cause**: Physical damage, connector issues
- **Symptom**: Poor reception, cannot transmit, BIT failures
- **Solution**: Check BIT results, inspect antennas, maintenance action

**In-Flight Reconfiguration**

**Network Switching**
- Change to alternate network
- Different NPG for different mission phase
- May require crypto rekey
- Brief interruption in Link 16 service

**Emergency Procedures**
- Rapid crypto key change
- Network isolation (stop transmitting)
- Switch to backup network
- Coordinated network-wide changes

**DTC Update**
- Load new mission data in flight
- Update waypoints, threats, Link 16 parameters
- Requires brief system reset
- Not common during combat ops

**Post-Flight Procedures**

**Data Download**
- Mission data logged by MIDS
- Downloaded for analysis
- Track history, message logs
- Supports debrief and training

**Crypto Key Zeroization**
- Security procedure after flight
- Ensures keys not compromised if aircraft captured
- Automatic or manual process
- Required by security regulations

Proper initialization is critical - a fully functional aircraft with improperly configured MIDS loses significant combat capability. Understanding the process enables rapid troubleshooting and ensures successful network participation.
        `,
        keyTakeaways: [
          'Mission planning data loaded via DTC during preflight',
          'MIDS executes BIT and loads configuration at power-up',
          'GPS provides time reference for network synchronization',
          'Crypto keys loaded automatically or manually',
          'Common issues include time sync, crypto, and NPG problems',
          'Pilots must verify network status before operations'
        ]
      },
      {
        id: 'lesson-3-5',
        number: 5,
        title: 'Common Operational Issues',
        objectives: [
          'Identify frequent MIDS problems',
          'Learn troubleshooting procedures',
          'Understand degraded mode operations'
        ],
        content: `
Despite robust design, MIDS terminals can experience operational issues. Understanding common problems and solutions enables rapid recovery and mission continuation.

**Timing and Synchronization Issues**

**Problem: Cannot Achieve Time Sync**

**Symptoms:**
- "Time Sync Failed" indication
- Cannot transmit on network
- Received tracks appear erratic
- Network participation shows "Not Synced"

**Common Causes:**
- GPS signal loss or degradation
- Incorrect manual time entry
- Extremely high jamming environment
- Antenna blockage

**Troubleshooting Steps:**
1. Verify GPS status and signal strength
2. Check if other aircraft report timing issues (environmental)
3. Re-enter coarse time manually if GPS unavailable
4. Try receiving from known good transmitter
5. Verify antenna system via BIT
6. Consider switching to backup network

**Workarounds:**
- Use voice communications for coordination
- Rely on own-ship sensors only
- Rejoin network when timing reestablished

**Cryptographic Issues**

**Problem: Crypto Failure**

**Symptoms:**
- "Crypto Fail" or "Crypto Mismatch"
- Cannot decrypt received messages
- Transmissions rejected by network
- Garbled data on display

**Common Causes:**
- Wrong crypto key loaded
- Expired keys
- Key not synchronized with network
- Crypto module hardware fault

**Troubleshooting Steps:**
1. Verify correct key for date/time
2. Check if issue affects multiple aircraft (network-wide problem)
3. Attempt manual key reload
4. Verify key variables match mission plan
5. Execute crypto BIT
6. Consider over-the-air rekey if available

**Workarounds:**
- Switch to alternate key schedule if available
- Coordinate key change with flight
- May be able to receive unclassified data only
- Voice communications for critical information

**Track Management Problems**

**Problem: Tracks Not Appearing**

**Symptoms:**
- MIDS shows active but no tracks on display
- Own PPLI transmitting but not seeing others
- Network count shows platforms but no tracks visible

**Common Causes:**
- Display filtering too restrictive
- NPG mismatch with transmitting platforms
- Geographic filtering excluding tracks
- Altitude filtering excluding relevant tracks

**Troubleshooting Steps:**
1. Check and adjust display filters (altitude, range, classification)
2. Verify NPG participation matches expected platforms
3. Expand range scale on tactical display
4. Check if filters set to "hostile only" (friendlies hidden)
5. Verify network participation with voice check

**Problem: Duplicate or Conflicting Tracks**

**Symptoms:**
- Same target appears multiple times
- Track jumps between positions
- Rapidly changing track numbers

**Common Causes:**
- Failed track correlation
- Multiple platforms reporting same contact with poor position accuracy
- STNID conflict (rare)
- Poor data quality from reporting platforms

**Troubleshooting Steps:**
1. Manually correlate tracks if confident they're same contact
2. Report issue to AWACS or network control
3. Use track quality indicators to select best track
4. Verify no STNID duplication in network

**Transmission Problems**

**Problem: Cannot Transmit**

**Symptoms:**
- MIDS shows net ready but no PPLI transmission
- Other platforms report not seeing own-ship
- Transmit status shows disabled

**Common Causes:**
- Transmit not enabled in configuration
- Timeslot assignment issue
- RF power amplifier fault
- Antenna system failure
- Exceed power/thermal limits

**Troubleshooting Steps:**
1. Verify transmit enable switch active
2. Check BIT results for RF system
3. Verify timeslot assignment in configuration
4. Check for thermal shutdown (cooling system)
5. Cycle MIDS power if safe to do so
6. Check external antenna for damage

**Workarounds:**
- Continue receiving Link 16 data
- Transmit position via voice
- Rely on IFF for identification
- RTB if mission requires transmission

**Reception Problems**

**Problem: Poor Reception / Missing Messages**

**Symptoms:**
- Intermittent track updates
- Some platforms heard, others not
- High message error rate
- "Poor Link Quality" indication

**Common Causes:**
- Range/line-of-sight limitations
- Jamming or interference
- Antenna issues
- Low transmitter power from other platform
- Terrain masking

**Troubleshooting Steps:**
1. Check range to other platforms (may be LOS issue)
2. Coordinate with flight to determine if others affected (jamming)
3. Change altitude if possible (terrain masking)
4. Verify antenna BIT
5. Check jamming status indications

**Workarounds:**
- Use relay via other platforms at higher altitude
- Increase spacing to improve geometry
- Supplement with voice reports
- Accept degraded picture in jammed environment

**Mission Computer Interface Issues**

**Problem: MIDS Operational but Data Not on Display**

**Symptoms:**
- MIDS shows net ready and receiving
- No tracks appear on tactical display
- Display shows "No Link 16 Data"

**Common Causes:**
- 1553 bus communication failure
- Mission Computer software issue
- Display format configuration
- Tactical display not selected

**Troubleshooting Steps:**
1. Verify tactical situation display selected
2. Cycle display format
3. Check BIT for bus communication
4. Select alternate display if available
5. May require Mission Computer reset (coordinate with flight)

**Environmental Challenges**

**High Jamming Environment**
- Expect degraded performance
- Reduced range and message success rate
- May lose some tracks
- Continue operations with best available data
- MIDS anti-jam features automatically engage

**Extreme Maneuvers**
- Brief loss of antenna coverage during high-G turns
- Tracks may coast temporarily
- System automatically recovers
- Normal operational characteristic

**Low Altitude Operations**
- Reduced line-of-sight range
- Terrain masking
- Rely more on air-to-air relay
- Expect fewer tracks visible

**Degraded Mode Operations**

If MIDS completely fails:
- **Voice Communications**: Primary coordination method
- **Own Sensors**: Radar, IRST, IFF still functional
- **Visual Identification**: Increased importance
- **Flight Integrity**: Close formation, visual contact
- **Reduced SA**: Limited to own sensor range
- **Manual Coordination**: All deconfliction via voice

**Best Practices for Issue Prevention**

1. **Thorough Preflight**: Verify DTC data, complete BIT
2. **Status Monitoring**: Regular checks of MIDS health
3. **Coordination**: Voice backup plans with flight
4. **Understanding Limitations**: Know environmental impacts
5. **Training**: Practice degraded mode operations
6. **Maintenance**: Report faults for ground troubleshooting

Most operational issues can be resolved in-flight with proper troubleshooting. When issues persist, understanding degraded mode operations and having voice communication backup plans ensures mission continuation with reduced capability.
        `,
        keyTakeaways: [
          'Common issues include timing, crypto, track management, and transmission problems',
          'Systematic troubleshooting follows: verify settings, check BIT, coordinate with flight',
          'Display filtering often causes apparent loss of tracks',
          'Environmental factors (jamming, terrain, range) affect performance',
          'Degraded mode operations rely on voice and own sensors',
          'Backup communication plans essential for mission success'
        ]
      }
    ],
    quiz: {
      id: 'quiz-3',
      questions: [
        {
          id: 'q3-1',
          question: 'What does MIDS-JTRS stand for?',
          options: [
            'Multiple Information Data System - Joint Tactical Radio System',
            'Multifunctional Information Distribution System - Joint Tactical Radio System',
            'Military Integrated Data System - Joint Tactical Relay System',
            'Multifunctional Integrated Distribution System - Joint Tactical Relay System'
          ],
          correctAnswer: 1,
          explanation: 'MIDS-JTRS is the Multifunctional Information Distribution System - Joint Tactical Radio System, the modern software-defined radio implementation of Link 16.'
        },
        {
          id: 'q3-2',
          question: 'What is the primary interface between MIDS and the Mission Computer?',
          options: [
            'Ethernet',
            'RS-232 serial',
            'MIL-STD-1553 data bus',
            'Wireless connection'
          ],
          correctAnswer: 2,
          explanation: 'MIDS connects to the Mission Computer via MIL-STD-1553 dual-redundant data bus for real-time deterministic communication.'
        },
        {
          id: 'q3-3',
          question: 'What provides the primary time reference for MIDS network synchronization?',
          options: [
            'AWACS time broadcasts',
            'GPS (Global Positioning System)',
            'Internal atomic clock',
            'Ground station time signals'
          ],
          correctAnswer: 1,
          explanation: 'GPS provides the primary time reference for Link 16 synchronization, with MIDS maintaining accuracy within ±100 microseconds of network time.'
        },
        {
          id: 'q3-4',
          question: 'On the Tactical Situation Display, what symbol typically represents a hostile air track?',
          options: [
            'Triangle',
            'Circle',
            'Diamond',
            'Square'
          ],
          correctAnswer: 2,
          explanation: 'A diamond symbol typically represents a hostile air track on the TSD, usually displayed in red color.'
        },
        {
          id: 'q3-5',
          question: 'What is loaded via the Data Transfer Cartridge (DTC) during preflight?',
          options: [
            'Only waypoints',
            'Only crypto keys',
            'Mission data including Link 16 parameters, waypoints, crypto keys, and NPG assignments',
            'Only fuel calculations'
          ],
          correctAnswer: 2,
          explanation: 'The DTC contains comprehensive mission data including Link 16 network parameters, NPG assignments, timeslots, crypto keys, waypoints, threats, and ROE information.'
        },
        {
          id: 'q3-6',
          question: 'If you see no tracks on your tactical display but MIDS shows "Net Ready", what should you check first?',
          options: [
            'Restart the aircraft',
            'Display filters (altitude, range, classification)',
            'Land immediately',
            'Switch to a different radio frequency'
          ],
          correctAnswer: 1,
          explanation: 'Display filtering is the most common cause of tracks not appearing. Check altitude filters, range scale, and classification filters before suspecting system failures.'
        },
        {
          id: 'q3-7',
          question: 'What advantage does MIDS-JTRS software-defined radio architecture provide?',
          options: [
            'Lower cost only',
            'Ability to update waveforms via software and support multiple simultaneous waveforms',
            'Smaller physical size only',
            'No advantages over hardware radios'
          ],
          correctAnswer: 1,
          explanation: 'Software-defined radio architecture allows MIDS-JTRS to be updated with new waveforms via software loads, support multiple simultaneous waveforms, and adapt to new requirements without hardware changes.'
        },
        {
          id: 'q3-8',
          question: 'What is the typical power-up to network-ready time for MIDS?',
          options: [
            '10-15 seconds',
            '2-5 minutes',
            '15-20 minutes',
            '30-45 minutes'
          ],
          correctAnswer: 1,
          explanation: 'MIDS typically requires 2-5 minutes from power-up to achieve network synchronization and be ready for operations, including BIT, GPS acquisition, and network timing lock.'
        }
      ],
      passingScore: 80
    }
  }
];

// Helper functions for progress tracking
export const getModuleProgress = (moduleId) => {
  const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
  return progress[moduleId] || {
    completedLessons: [],
    quizScore: null,
    quizPassed: false
  };
};

export const markLessonComplete = (moduleId, lessonId) => {
  const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
  if (!progress[moduleId]) {
    progress[moduleId] = { completedLessons: [], quizScore: null, quizPassed: false };
  }
  if (!progress[moduleId].completedLessons.includes(lessonId)) {
    progress[moduleId].completedLessons.push(lessonId);
  }
  localStorage.setItem('courseProgress', JSON.stringify(progress));
};

export const saveQuizScore = (moduleId, score, passed) => {
  const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
  if (!progress[moduleId]) {
    progress[moduleId] = { completedLessons: [], quizScore: null, quizPassed: false };
  }
  progress[moduleId].quizScore = score;
  progress[moduleId].quizPassed = passed;
  localStorage.setItem('courseProgress', JSON.stringify(progress));
};

export const getOverallProgress = () => {
  const progress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
  let totalLessons = 0;
  let completedLessons = 0;
  let passedQuizzes = 0;

  modules.forEach(module => {
    totalLessons += module.lessons.length;
    const moduleProgress = progress[module.id] || { completedLessons: [], quizPassed: false };
    completedLessons += moduleProgress.completedLessons.length;
    if (moduleProgress.quizPassed) passedQuizzes++;
  });

  return {
    totalModules: modules.length,
    totalLessons,
    completedLessons,
    passedQuizzes,
    percentComplete: Math.round((completedLessons / totalLessons) * 100)
  };
};
