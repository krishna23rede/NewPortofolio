const PORTFOLIO_DATA = {
  site: {
    title: 'Krishna | Game Developer',
    description:
      'Clean, interactive game developer portfolio showcasing gameplay systems and technical implementations.'
  },
  header: {
    logo: 'Krishna',
    navLinks: [
      { name: 'Home', href: '#home' },
      { name: 'Projects', href: '#projects' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' }
    ],
    resume: {
      label: 'Download Resume',
      href: 'Assets/KrishnaRede_Updated_CV.pdf'
    }
  },
  hero: {
    name: 'Krishna Rede',
    designation: 'Game Developer',
    taglineLines: [
      'I build responsive gameplay systems and interactive combat experiences.',
      'Focused on performance, polish, and reusable technical architecture.'
    ],
    cta: { label: 'View Projects', href: '#projects' }
  },
  sections: {
    techStack: { id: 'stack', eyebrow: 'Core Toolkit', title: 'Tech Stack' },
    projects: {
      id: 'projects',
      eyebrow: 'Showcase',
      title: 'Projects',
      categories: [
        { id: 'Unity', title: 'Unity Projects', limit: 6, showMoreBtn: 'Show More' },
        { id: 'Unreal', title: 'Unreal Projects' }
      ]
    },
    about: {
      id: 'about',
      eyebrow: 'About',
      title: 'Who I Am',
      blocks: {
        introduction: 'Introduction',
        skills: 'Skills',
        experience: 'Work Experience + Expertise',
        additionalSkills: 'Additional Skills'
      }
    },
    contact: { id: 'contact', eyebrow: 'Contact', title: 'Let’s Connect' }
  },
  techStack: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Git', '3D Physics', 'Blueprints', 'Profiling'],
  about: {
    introduction:
      "My name is Krishna, and I am a Game Developer specializing in Unity and Unreal Engine with a Bachelor's degree in Computer Science. I live in Pune, Maharashtra, and have a deep passion for both playing and developing games. I am particularly interested in gameplay mechanics, systems architecture, AI behaviors, and everything that drives interactive experiences. My work involves not just building games but also exploring the underlying technologies that make them possible. I enjoy experimenting with different frameworks, optimizing performance, and constantly learning to refine my craft.",
    skills: [
      { category: 'Programming', items: 'C++, C#, HTML, CSS, JavaScript' },
      {
        category: 'Engines & Technologies',
        items: 'Unity, Unreal Engine, Blueprints, 3D Physics, Mirror & Netcode (Multiplayer)'
      },
      { category: 'Tools & Services', items: 'Git, GitHub, Firebase' },
      {
        category: 'Game Design',
        items: 'AI Behaviors, Game mechanics, UI/UX logic, level design, procedural generation'
      }
    ],
    experience: [
      {
        title: 'Unity Projects',
        points: [
          'Developed 8-10 games ranging across different genres, including shop management simulators, hyper-casual games, and puzzle-based experiences.',
          'Built complex systems with dynamic user interactions and resource management.',
          'Focused on simplicity, polish, and optimizing user engagement in fast-paced designs.',
          'Genre focus: Hyper-Casual, Management Simulations, Racing, Puzzle, Farming, and 2D Platformers.'
        ]
      },
      {
        title: 'Unreal Engine Projects',
        points: [
          'Developed advanced player movement and combat systems, including dash/evade mechanics, multi-shot attacks, and auto-firing weapons.',
          'Built complete boss fight systems with multi-phase behavior, special abilities, and dynamic AI reactions.',
          'Designed AI using state-based behaviors (Idle, Patrol, Chase, Attack, Ranged Attack, Hit React, Death).',
          'Implemented combat feedback (camera shake, hit reactions) and procedural animation elements like basic leg IK.',
          'Created Blueprint-driven interaction systems (doors, pickups, elevators) and diverse prototypes (car driving, flying drones, platformers).'
        ]
      }
    ],
    additionalSkills: [
      'C++ & Blueprint Visual Scripting Architecture',
      'State-Machine & Behavior Tree driven AI Development',
      'Gameplay Systems Architecture (Combat, Movement, Interactions)',
      'Game Loop Design and Optimization',
      'Testing and Debugging for Performance',
      'Problem Solving and Analytical Thinking'
    ]
  },
  contact: {
    description:
      'Available for gameplay programming roles, freelance systems work, and collaborative game projects.',
    links: [
      { id: 'email', label: 'Email', href: 'mailto:krishna34rede@gmail.com' },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/krishna-rede-a4ab81242/',
        target: '_blank',
        rel: 'noreferrer'
      }
    ]
  },
  modal: {
    technicalHighlightsTitle: 'Technical Highlights',
    techStackTitle: 'Tech Stack'
  },
  projects: [
    {
      id: 'unity-1',
      category: 'Unity',
      title: 'BomberMan',
      video: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/BomberMan-1.mp4',
      poster: 'Assets/HeadIcons/BomberGame.jpg',
      description: 'Grid-based action game with procedural levels, destructible environments, strategic bomb mechanics, and dynamic power-up systems.',
      highlightGroups: [
        {
          title: 'Procedurally Generated Maps',
          points: [
            'Outer walls are generated automatically around the map.',
            'Inner walls are placed at even grid coordinates.',
            'Breakable objects spawn randomly across the level.',
            'Breakables avoid spawning near player start positions.',
            'Player spawn points are placed fairly for balanced gameplay.',
            'Goals and doors are generated with controlled randomness.',
            'The system ensures progression and replayability.'
          ]
        },
        {
          title: 'Joystick and Bomb Button Controls',
          points: [
            'A joystick controls player movement within map boundaries.',
            'A dedicated bomb button handles bomb placement.',
            'Bombs spawn in front of the player’s facing direction.',
            'Bomb positions are rounded to fit the grid perfectly.',
            'Grid alignment ensures consistent explosions and collisions.'
          ]
        },
        {
          title: 'Bomb Explosion VFX',
          points: [
            'Explosion VFX changes to random bright colors on detonation.',
            'A color array drives randomized visual effects.',
            'Particle systems create dynamic destruction feedback.',
            'Visual randomness improves gameplay excitement and variety.'
          ]
        },
        {
          title: 'Mystery Box Rewards',
          points: [
            'Mystery boxes contain an array of power-up types.',
            'A random power-up spawns when a box is destroyed.',
            'Power-ups automatically attach to the triggering entity.',
            'The responsible player or AI receives instant activation.',
            'Object references determine reward ownership accurately.'
          ]
        },
        {
          title: 'Power-ups and Boosts',
          points: [
            'Power-up duration is managed using IEnumerator systems.',
            'Expired power-ups deactivate and destroy automatically.',
            'Shield power-ups prevent incoming damage using a boolean state.',
            'Power boosts increase bomb damage by 1 level.',
            'Enhanced bombs can destroy two blocks simultaneously.',
            'Power-ups improve both offense and survivability.'
          ]
        }
      ],
      tech: [
        'Unity',
        'C#',
        'Procedural Generation',
        'Grid-Based Systems',
        'Coroutine System',
        'Particle System',
        '2D Physics',
        'State Management',
        'Component-Based Architecture',
        'Mobile Input System'
      ],
      github: 'https://github.com/',
      live: '',
      featured: true,
      media: [
        { type: 'image', src: 'Assets/BomberGame/1.jpg', alt: 'Procedural map' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/BomberMan-1.mp4' },
        { type: 'image', src: 'Assets/BomberGame/2.jpg', alt: 'Explosion VFX' }
      ]
    },
    {
      id: 'unity-2',
      category: 'Unity',
      title: 'Burger Shop',
      video: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/BurgerGame-2.mp4',
      poster: 'Assets/HeadIcons/BurgerGame.jpg',
      description: 'Grid-based action game with procedural levels, destructible environments, and strategic bomb mechanics.',
      highlightGroups: [
        {
          title: 'Serve Burgers to Customers',
          points: [
            'Customers spawn and navigate using NavMeshAgent.',
            'Customers move toward the reception queue.',
            'A stack point system manages burger placement.',
            'Entry and exit reference points handle smooth movement flow.',
            'The receptionist serves customers while the queue is not empty.',
            'Service order depends on each customer\'s "burger_taken" variable.'
          ]
        },
        {
          title: 'Faster Service, Happier Customers',
          points: [
            'The grill spawns burgers in a grid formation.',
            'Burgers spawn only when the player is nearby.',
            'Collected burgers attach to the player as parent objects.',
            'The player can stack burgers at the reception counter.',
            'The player has a limited carrying capacity.',
            'Carry capacity is upgradeable for progression mechanics.'
          ]
        },
        {
          title: 'Dine-in with Customizable Chairs',
          points: [
            'Each customer follows an array of assigned tasks.',
            'Tasks include taking a burger, finding a table, sitting, and leaving.',
            'A separate array tracks available seats.',
            'Seating logic ensures customers only use free chairs.'
          ]
        },
        {
          title: 'Provide Drive-Thru Service',
          points: [
            'Drive-thru customers spawn automatically.',
            'Customers move along a Dolly Track path.',
            'Customers become ready for ordering at the counter.',
            'AI helpers manage multiple assigned tasks.',
            'Tasks include supplying burgers to counters and drive-thru stations.',
            'Helpers prioritize the first available task dynamically.',
            'Helpers remain idle if no task is available.'
          ]
        },
        {
          title: 'Drive-Thru and Reception Service',
          points: [
            'Drive-thru reception uses the same logic as walk-in reception.',
            'Both systems share identical serving mechanics.',
            'The system manages both service areas efficiently.',
            'Shared mechanics reduce redundant implementations.'
          ]
        },
        {
          title: 'Parcel and Serve at Drive-Thru Counter',
          points: [
            'An order preparation area stacks burgers onto trays.',
            'Burgers are arranged in a predefined formation.',
            'The player transports prepared trays to the drive-thru counter.',
            'Delivery mechanics match the regular counter service system.'
          ]
        },
        {
          title: 'Fast Service Leads to Happy Customers',
          points: [
            'The drive-thru receptionist follows the same reception logic.',
            'Both reception systems operate seamlessly together.',
            'Shared functionality avoids duplicated mechanics.'
          ]
        },
        {
          title: 'Clear Trash After Customer Leaves',
          points: [
            'Trash paper prefabs spawn after customers leave tables.',
            'Tables become marked as "uncleaned".',
            'Uncleaned tables are excluded from available seating.',
            'Players or AI helpers can clean the trash.',
            'Cleaned tables return to the available seats array.',
            'The system maintains realistic cleanup mechanics.'
          ]
        }
      ],
      tech: [
        'Unity',
        'C#',
        'NavMesh',
        'AI Task System',
        'State Management',
        'Queue Management System',
        'Coroutine System',
        'Transform Hierarchy',
        'Spline/Dolly Track System',
        'Grid-Based Placement',
        'Object Pooling',
        'Component-Based Architecture',
        'NPC AI',
        'Event-Driven Systems'
      ],
      github: 'https://github.com/',
      live: '',
      featured: true,
      media: [
        { type: 'image', src: 'Assets/burgerGame/1.jpg', alt: 'Customer system' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/BurgerGame-1.mp4' },
        { type: 'image', src: 'Assets/burgerGame/3.jpg', alt: 'Drive-thru' }
      ]
    },
    {
      id: 'unity-3',
      category: 'Unity',
      title: 'Hide N Seek',
      video: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HideGame-1.mp4',
      poster: 'Assets/HeadIcons/HideGame.jpg',
      description: 'Stealth-based multiplayer-style game with seeker vs hider mechanics and dynamic abilities.',
      highlightGroups: [
        {
          title: 'Seeker Catches and Hider Hides',
          points: [
            'Players move using random NavMesh point selection.',
            'Movement points are generated within a defined range.',
            'Characters continuously navigate around the environment.',
            'Hiders use a radar system to detect nearby seekers.',
            'Seekers cannot directly see hiders during gameplay.',
            'Limited visibility increases challenge and strategy.'
          ]
        },
        {
          title: 'Collect and Drop Gems',
          points: [
            'Collision detection is used for gem collection.',
            'Collected gems attach near the player hand position.',
            'Hiders transport gems to designated drop boxes.',
            'Gems are placed inside the box when nearby.',
            'The hider moves into a cardboard box interaction point.',
            'Deposited gems are destroyed and reduce the remaining gem count.'
          ]
        },
        {
          title: 'Gameplay Overview and Game Loop',
          points: [
            'The gameplay loop revolves around seekers and hiders.',
            'Players actively navigate dynamic environments.',
            'Randomized movement creates unpredictable gameplay scenarios.',
            'Player interactions drive the core game mechanics.',
            'Power-ups introduce strategic gameplay variation.',
            'Each round is designed to remain engaging and replayable.'
          ]
        },
        {
          title: 'Rescue Caged Hiders',
          points: [
            'Seekers use a radar system with dual raycast spreads.',
            'Detected hiders have their movement disabled.',
            'A cage prefab spawns at the captured hider position.',
            'Captured hiders remain trapped until rescued.',
            'Other hiders can free teammates through collision interaction.',
            'Destroying the cage restores the trapped hider.'
          ]
        },
        {
          title: 'Interactive Environment',
          points: [
            'Doors rotate dynamically based on collision direction.',
            'Door movement reacts opposite to the collision point.',
            'Doors return smoothly using oscillatory dampening.',
            'Swimming pools trigger swimming animations on contact.',
            'Environmental interactions increase gameplay immersion.'
          ]
        },
        {
          title: 'Speed Boost Power-up',
          points: [
            'Speed boosts temporarily increase player movement speed.',
            'The effect lasts for a limited duration.',
            'Players switch to running animations during activation.',
            'Movement returns to normal after the timer expires.',
            'The power-up benefits both seekers and hiders strategically.'
          ]
        },
        {
          title: 'Camouflage Power-up',
          points: [
            'Camouflage replaces player materials with transparent materials.',
            'The player layer changes to avoid seeker raycast detection.',
            'Seekers cannot detect camouflaged players normally.',
            'The stealth effect lasts for a fixed duration.',
            'Original materials and layers restore after expiration.'
          ]
        },
        {
          title: 'Mutant Ability Power-up',
          points: [
            'The mutant ability changes the player physics layer.',
            'Players remain visible to raycast detection systems.',
            'The power-up allows phasing through selected objects.',
            'Players can escape seekers using unconventional paths.',
            'The mechanic enables advanced movement strategies.'
          ]
        },
        {
          title: 'Interesting Level Designs',
          points: [
            'The game contains 10 uniquely designed levels.',
            'Levels feature bright and visually engaging environments.',
            'Map layouts support dynamic seeker and hider gameplay.',
            'Different hiding spots encourage varied strategies.',
            'Level design enhances replayability and player engagement.'
          ]
        }
      ],
      tech: [
        'Unity',
        'C#',
        'NavMesh',
        'AI State Machine',
        'Raycasting',
        'Stealth Mechanics',
        'Collision Detection',
        'Physics Layers',
        'Coroutine System',
        'Material Swapping',
        'Animator Controller',
        'Component-Based Architecture',
        'NPC AI',
        'Dynamic Interaction Systems',
        'Power-Up System',
        'State Management'
      ],
      github: 'https://github.com/',
      live: '',
      featured: false,
      media: [
        { type: 'image', src: 'Assets/hideGame/1.jpg', alt: 'Seeker gameplay' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HideGame-1.mp4' },
        { type: 'image', src: 'Assets/hideGame/6.jpg', alt: 'Camouflage' }
      ]
    },
    {
      id: 'unity-4',
      category: 'Unity',
      title: 'Hitman GO',
      video: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HitmanGame.mp4',
      poster: 'Assets/HeadIcons/HitmanGame.jpg',
      description: 'Turn-based strategy game with grid movement and predictable enemy patterns.',
      highlightGroups: [
        {
          title: 'Move Strategically',
          points: [
            'Player movement is restricted to adjacent grid nodes.',
            'Characters rotate one face direction per move.',
            'Enemy rotation patterns are predefined individually.',
            'Some enemies rotate only forward and right.',
            'Other enemies rotate toward left and backward directions.',
            'Grid-based movement encourages tactical planning.'
          ]
        },
        {
          title: 'Assassinate Guards',
          points: [
            'Players can eliminate enemies from behind silently.',
            'Enemy direction determines assassination success.',
            'Moving onto an enemy node triggers combat logic.',
            'Enemies facing away are automatically eliminated.',
            'Enemies kill the player upon successful detection.',
            'Enemy pursuit mechanics increase gameplay tension.'
          ]
        },
        {
          title: 'Reach the Destination in Time',
          points: [
            'Game logic validates actions after every movement.',
            'Enemy detection checks occur after each player move.',
            'The system verifies if the player has been caught.',
            'Destination nodes determine level completion.',
            'Players must navigate efficiently under time pressure.',
            'Movement and detection systems drive progression.'
          ]
        },
        {
          title: 'Unique Level Designs',
          points: [
            'The game contains 10 handcrafted strategic levels.',
            'Enemy placements vary across different stages.',
            'Each level includes predefined enemy movement patterns.',
            'Nodes are positioned strategically to shape gameplay.',
            'Players must reach a predefined end node.',
            'Levels remain completable without eliminating every enemy.'
          ]
        }
      ],
      tech: [
        'Unity',
        'C#',
        'Turn-Based Systems',
        'Grid-Based Movement',
        'Node-Based Pathing',
        'AI State Logic',
        'Raycasting',
        'Game State Management',
        'Finite State Machine',
        'Collision Detection',
        'Component-Based Architecture',
        'Strategic Level Design'
      ],
      github: 'https://github.com/',
      live: '',
      featured: false,
      media: [
        { type: 'image', src: 'Assets/hitmanGame/1.jpg', alt: 'Grid system' },
        { type: 'image', src: 'Assets/hitmanGame/2.jpg', alt: 'Enemy logic' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HitmanGame.mp4' }
      ]
    },
    {
      id: 'unity-5',
      category: 'Unity',
      title: 'Perfect Hotel',
      video: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HotelGame-2.mp4',
      poster: 'Assets/HeadIcons/HotelGame.jpg',
      description: 'Simulation game managing customers, rooms, and services with automated AI systems.',
      highlightGroups: [
        {
          title: 'Welcome and Check-in Customers',
          points: [
            'The reception system manages customer check-ins.',
            'Customer behavior follows sequential task execution.',
            'Actions and animations vary depending on the activity.',
            'Customer tasks are queued after successful check-in.',
            'The system ensures smooth customer flow management.'
          ]
        },
        {
          title: 'Check-in and Customer Arrival',
          points: [
            'Customers perform predefined actions after check-in.',
            'Actions include sleeping, dining, restroom usage, and exiting.',
            'Tasks execute sequentially based on conditions.',
            'Availability systems determine valid customer actions.',
            'The gameplay loop simulates hotel guest routines.'
          ]
        },
        {
          title: 'Customer Uses Toilets',
          points: [
            'Toilet interactions use dedicated entry and exit points.',
            'A toilet paper counter tracks restroom supplies.',
            'Customers leave cash rewards after restroom usage.',
            'Toilet paper stock decreases after each use.',
            'Players must refill supplies when depleted.'
          ]
        },
        {
          title: 'Rooms and Tips',
          points: [
            'Bedroom interactions use predefined entry and exit points.',
            'Customers remain in rooms for a timed duration.',
            'Guests leave tips after completing their stay.',
            'Rooms become marked as uncleaned after use.',
            'Players or cleaners must restore room cleanliness.'
          ]
        },
        {
          title: 'Hire Cleaners',
          points: [
            'AI cleaners use behavior systems similar to customers.',
            'Cleaner tasks are limited specifically to cleaning duties.',
            'Each cleaner operates independently across the hotel.',
            'Cleaners can manage different rooms simultaneously.',
            'AI automation improves hotel maintenance efficiency.'
          ]
        },
        {
          title: 'Toilet Paper Supplies',
          points: [
            'Players collect toilet paper from the supply room.',
            'Collected supplies attach to the player stacker.',
            'The stacker has a limited carrying capacity.',
            'Players transport supplies to restroom areas.',
            'Toilet paper stock is replenished through player interaction.'
          ]
        },
        {
          title: 'Restaurants and Shops',
          points: [
            'Restaurant systems use logic similar to reception mechanics.',
            'Customers perform dining actions sequentially.',
            'Dining interactions reward players with tips.',
            'Queued actions manage customer behavior flow.',
            'The system integrates seamlessly with other hotel activities.'
          ]
        },
        {
          title: 'Parking and Tolls',
          points: [
            'Cars spawn automatically into the parking system.',
            'Vehicles move along predefined dolly tracks.',
            'Parking queues advance when the player is available.',
            'Reception logic controls toll management flow.',
            'The parking system mirrors mechanics from previous games.'
          ]
        },
        {
          title: 'Manage Parking Tolls',
          points: [
            'Parking queues are managed using sequential logic.',
            'Cars advance once toll interactions are completed.',
            'Player availability controls queue progression.',
            'Vehicle movement follows predefined dolly track paths.',
            'The toll system reuses optimized parking mechanics.'
          ]
        }
      ],
      tech: [
        'Unity',
        'C#',
        'AI Task System',
        'Queue Management System',
        'State Management',
        'NPC AI',
        'NavMesh',
        'Coroutine System',
        'Transform Hierarchy',
        'Spline/Dolly Track System',
        'Simulation Systems',
        'Resource Management',
        'Component-Based Architecture',
        'Event-Driven Systems',
        'Interaction Systems'
      ],
      github: 'https://github.com/',
      live: '',
      featured: false,
      media: [
        { type: 'image', src: 'Assets/hotelGame/1.jpg', alt: 'Reception' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HotelGame-1.mp4' },
        { type: 'image', src: 'Assets/hotelGame/3.jpg', alt: 'Cleaner AI' }
      ]
    },
    {
      id: 'unity-6',
      category: 'Unity',
      title: 'Hunter Assassin 3D',
      video: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HunterGame-1.mp4',
      poster: 'Assets/HeadIcons/HunterGame.jpg',
      description: 'Stealth action game featuring enemy AI states, detection systems, and tactical eliminations.',
      highlightGroups: [
        {
          title: 'Stealth Kills',
          points: [
            'Players move smoothly using joystick-based controls.',
            'Enemies remain unaware unless the player is detected.',
            'Enemy collisions trigger stealth elimination logic.',
            'Successful eliminations increase the player kill count.',
            'Enemies switch between idle and alert states dynamically.',
            'Defeated enemies drop collectible gems.',
            'Gems are collected automatically through collision detection.'
          ]
        },
        {
          title: 'Eliminate Guards and Collect Gems',
          points: [
            'Enemies patrol using NavMesh navigation systems.',
            'Patrol movement follows predefined waypoint routes.',
            'Defeated enemies spawn gems at death locations.',
            'Gems move toward the player using tween or Lerp movement.',
            'Collected gems increase the player gem counter.',
            'Kills trigger nearby guard alert systems.',
            'Guards share the player’s last known position dynamically.'
          ]
        },
        {
          title: 'Smart Guard AI',
          points: [
            'Guards operate using multiple AI behavior states.',
            'Enemy states include idle, patrol, hunting, and shooting.',
            'Kill detection alerts nearby enemies automatically.',
            'Guards investigate the player’s last known position.',
            'AI scans corners and surrounding areas intelligently.',
            'Enemies return to patrol after cooldown expiration.',
            'The system creates adaptive stealth gameplay encounters.'
          ]
        },
        {
          title: 'Power-ups for Strategic Gameplay',
          points: [
            'Power-ups use cooldown-based activation systems.',
            'World-space progress bars display remaining cooldown time.',
            'Cooldown visuals are attached to the player object.',
            'Equipping power-ups automatically starts cooldown timers.',
            'The UI provides real-time ability availability feedback.'
          ]
        },
        {
          title: 'Camouflage Abilities',
          points: [
            'Camouflage replaces player materials with transparent versions.',
            'Original materials are stored for later restoration.',
            'The player physics layer changes during camouflage activation.',
            'Enemy radar systems ignore the camouflage layer.',
            'Effects expire automatically after the timer duration.',
            'Original visuals and layers restore after expiration.'
          ]
        },
        {
          title: 'Security and Laser Traps',
          points: [
            'Security systems detect players using raycast logic.',
            'Laser traps function similarly to enemy radar systems.',
            'Detection triggers nearby guard alert events.',
            'Guards switch into hunting mode after alerts.',
            'Enemies move toward the player’s last known location.',
            'Trap systems increase stealth gameplay difficulty.'
          ]
        },
        {
          title: 'Variety of Guards and Weapons',
          points: [
            'Enemy variations include unique animations and behaviors.',
            'Different guards deal different damage values.',
            'Enemy types use distinct sound effects.',
            'Weapon variety changes attack ranges dynamically.',
            'Bullet speed varies depending on enemy type.',
            'Combat encounters become more diverse and challenging.'
          ]
        },
        {
          title: 'Advanced Power-ups and Mutant Abilities',
          points: [
            'Mutant abilities modify the player physics layer only.',
            'The mutant state allows players to phase through walls.',
            'Radar systems ignore the mutant movement layer.',
            'Landmine power-ups spawn explosive trap prefabs.',
            'Enemy collisions trigger instant mine explosions.',
            'Explosion effects eliminate nearby enemies immediately.'
          ]
        }
      ],
      tech: [
        'Unity',
        'C#',
        'NavMesh',
        'Finite State Machine',
        'Stealth AI',
        'Raycasting',
        'AI Perception System',
        'Coroutine System',
        'Physics Layers',
        'Material Swapping',
        'Waypoint Navigation',
        'Tweening/Lerp',
        'Collision Detection',
        'Event-Driven Systems',
        'Power-Up System',
        'Animator Controller',
        'Component-Based Architecture',
        'State Management'
      ],
      github: 'https://github.com/',
      live: '',
      featured: false,
      media: [
        { type: 'image', src: 'Assets/hunterGame/1.jpg', alt: 'Stealth gameplay' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HunterGame-1.mp4' },
        { type: 'image', src: 'Assets/hunterGame/2.jpg', alt: 'AI states' }
      ]
    },
    {
      id: 'unity-7',
      category: 'Unity',
      title: 'Kart Racer',
      video: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/KartGame-2.mp4',
      poster: 'Assets/HeadIcons/KartGame.jpg',
      description: 'Arcade-style racing game with combat mechanics, weapons, and physics-based interactions.',
      highlightGroups: [
        {
          title: 'Exciting Racing Track Maps',
          points: [
            'Tracks use mesh colliders for accurate surface interaction.',
            'Vehicle physics react dynamically to track curvature.',
            'Different surfaces apply unique friction values.',
            'Road surfaces allow higher kart speeds.',
            'Grass and off-road areas reduce movement speed.',
            'Surface physics improve driving realism and control.'
          ]
        },
        {
          title: 'Weaponized Kart Battles',
          points: [
            'Weapons use a modular inheritance-based system.',
            'Each weapon shares base collision and damage properties.',
            'Weapon types include missiles, machine guns, and nukes.',
            'Projectiles use raycasts or physics collisions for hits.',
            'Successful attacks reduce enemy kart health.',
            'Targeting systems manage projectile direction and tracking.'
          ]
        },
        {
          title: 'Smash and Bash Mechanics',
          points: [
            'Kart collisions apply physics-based impact forces.',
            'Enemy karts lose speed after collisions.',
            'Attacking karts receive a slight movement boost.',
            'Impacts also reduce opponent health values.',
            'Particle effects provide collision feedback.',
            'Sound effects enhance combat interactions.'
          ]
        },
        {
          title: 'Machine Guns in Action',
          points: [
            'Machine guns detect enemies using proximity systems.',
            'Nearby targets are identified through colliders or arrays.',
            'Weapons rotate automatically toward selected targets.',
            'Projectiles fire using predefined fire rates.',
            'Bullets use physics-based movement systems.',
            'Each hit applies small amounts of damage.'
          ]
        },
        {
          title: 'Unique Power-ups and Weapons',
          points: [
            'Power-ups spawn randomly at designated track positions.',
            'Collected items are stored in kart inventories.',
            'Power-ups activate automatically under set conditions.',
            'Available boosts include healing and speed upgrades.',
            'Weapon pickups introduce different combat strategies.',
            'The system encourages dynamic gameplay variation.'
          ]
        },
        {
          title: 'Battle Mode with Epic Smashes',
          points: [
            'Battle mode uses a free-for-all gameplay structure.',
            'AI aggressively attacks nearby opponents.',
            'Weapons are used immediately when available.',
            'AI movement relies on reference point navigation.',
            'Pathfinding includes random variation for unpredictability.',
            'Combat behavior creates chaotic battle scenarios.'
          ]
        },
        {
          title: 'Mid-Bullet Guns for Precision',
          points: [
            'Mid-range guns use raycasts for hit detection.',
            'Weapons prioritize the nearest available target.',
            'Detection operates within a predefined radius.',
            'Bullets travel in straight-line trajectories.',
            'Projectiles move at medium speed.',
            'Successful hits deal moderate damage.'
          ]
        },
        {
          title: 'Defensive and Offensive Strategies',
          points: [
            'Shield power-ups provide temporary invincibility.',
            'Defensive colliders block incoming damage.',
            'Speed boosts increase kart maximum velocity temporarily.',
            'Landmines can be deployed as traps.',
            'Traps slow down or eliminate opponents.',
            'Power-ups support both offensive and defensive gameplay.'
          ]
        },
        {
          title: 'Long-Range Missile Mayhem',
          points: [
            'Missiles and nukes target enemies over long distances.',
            'Projectiles travel with high accuracy.',
            'Missiles are unaffected by gravity.',
            'Direct trajectories improve target tracking.',
            'High-speed movement increases hit reliability.',
            'Explosions deal heavy damage upon impact.'
          ]
        }
      ],
      tech: [
        'Unity',
        'C#',
        'Vehicle Physics',
        'Raycasting',
        'Physics-Based Combat',
        'NavMesh',
        'AI Behavior System',
        'Inheritance-Based Architecture',
        'Projectile Systems',
        'Collision Detection',
        'State Management',
        'Power-Up System',
        'Particle System',
        'Mesh Colliders',
        'Component-Based Architecture',
        'Event-Driven Systems'
      ],
      github: 'https://github.com/',
      live: '',
      featured: false,
      media: [
        { type: 'image', src: 'Assets/kartGame/1.jpg', alt: 'Track' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/KartGame-1.mp4' },
        { type: 'image', src: 'Assets/kartGame/3.jpg', alt: 'Weapons' }
      ]
    },
    {
      id: 'unity-8',
      category: 'Unity',
      title: 'Shopping Mall',
      video: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/MallGame-2.mp4',
      poster: 'Assets/HeadIcons/MallGame.jpg',
      description: 'Management simulation with resource systems, AI helpers, and customizable store environments.',
      highlightGroups: [
        {
          title: 'Welcoming Reception with AI Assistants',
          points: [
            'The reception system follows queue-based customer handling.',
            'Customers check in before entering shopping areas.',
            'Predefined movement routes guide customers through the mall.',
            'Customer behavior depends on shopping requirements.',
            'AI assistants help manage reception flow efficiently.',
            'The system reduces congestion during high traffic.'
          ]
        },
        {
          title: 'Diverse Store Stands for Customer Shopping',
          points: [
            'Each store uses a stacker system for item management.',
            'Customers can only collect available products.',
            'Empty shelves require manual or AI restocking.',
            'Store logic prevents purchases when stock reaches zero.',
            'Restocking maintains uninterrupted sales flow.',
            'Inventory systems encourage active resource management.'
          ]
        },
        {
          title: 'Well-Managed Item Godowns',
          points: [
            'Godowns use stacker systems for each item category.',
            'Automated drones refill depleted inventory dynamically.',
            'Drone behavior adapts to current store demand.',
            'Different item types refill proportionally.',
            'The system maintains continuous supply distribution.',
            'Automation reduces manual inventory maintenance.'
          ]
        },
        {
          title: 'Customizing Store Stands to Enhance Shopping',
          points: [
            'Store customization uses child GFX activation systems.',
            'Different visual elements can be enabled dynamically.',
            'Selected upgrades activate corresponding child objects.',
            'Buff VFX effects highlight customization changes.',
            'Visual upgrades improve store presentation variety.'
          ]
        },
        {
          title: 'Dual Receptions for Handling More Customers',
          points: [
            'Two reception desks operate simultaneously.',
            'Customers distribute dynamically between queues.',
            'Shared reception logic manages customer flow.',
            'Dual receptions reduce waiting congestion.',
            'The system supports high customer traffic efficiently.'
          ]
        },
        {
          title: 'Item and Tile Customization Options',
          points: [
            'Floor tiles support customizable visual appearances.',
            'Tile materials change based on player selection.',
            'Customization uses indexed material switching.',
            'Visual variety improves mall presentation.',
            'The system allows flexible environment styling.'
          ]
        },
        {
          title: 'Hire Helpers and Upgrade Rooms',
          points: [
            'AI helpers automatically perform available tasks.',
            'Helpers restock store shelves from the godown.',
            'Task execution follows automated priority systems.',
            'Upgrade rooms improve player and helper performance.',
            'Speed and carrying capacity can be upgraded.',
            'HR systems manage helper progression mechanics.'
          ]
        }
      ],
      tech: [
        'Unity',
        'C#',
        'Simulation Systems',
        'AI Task System',
        'Queue Management System',
        'Inventory Management',
        'Resource Management',
        'State Management',
        'NavMesh',
        'Automation Systems',
        'Transform Hierarchy',
        'Material Switching',
        'Component-Based Architecture',
        'Event-Driven Systems',
        'NPC AI'
      ],
      github: 'https://github.com/',
      live: '',
      featured: false,
      media: [
        { type: 'image', src: 'Assets/mallGame/1.jpg', alt: 'Reception' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/MallGame-1.mp4' },
        { type: 'image', src: 'Assets/mallGame/3.jpg', alt: 'Inventory' }
      ]
    },
    {
      id: 'unity-9',
      category: 'Unity',
      title: 'Ski Resort',
      video: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/SkiGame-1.mp4',
      poster: 'Assets/HeadIcons/SkiGame.jpg',
      description: 'Simulation game combining customer management, logistics, and interactive systems.',
      highlightGroups: [
        {
          title: 'Reception for Seamless Check-ins',
          points: [
            'Customers queue automatically at the reception area.',
            'Reception logic follows queue systems from previous games.',
            'Customer journeys trigger after successful check-ins.',
            'Visitors move toward attractions using predefined routes.',
            'AI helpers can assist with reception tasks.',
            'Upgrades improve reception handling efficiency.'
          ]
        },
        {
          title: 'Parking System Management',
          points: [
            'Vehicles enter through a parking toll system.',
            'Cars drop cash rewards after successful parking.',
            'Vehicle AI uses NavMesh navigation for movement.',
            'Cars occupy the nearest available parking slots.',
            'Vehicles exit automatically after a timed duration.',
            'Parking upgrades increase toll processing speed.'
          ]
        },
        {
          title: 'Ski Board Supply for Adventurous Customers',
          points: [
            'AI helpers collect ski boards from nearby stacks.',
            'A randomizer distributes retrieval across multiple stacks.',
            'The system prevents overuse of individual stacks.',
            'Helpers transport ski boards to waiting customers.',
            'Supply routes focus on ski lift demand areas.'
          ]
        },
        {
          title: 'Ski Board Supply Near Ski Lift',
          points: [
            'The ski lift station acts as a customer collection point.',
            'Customers automatically receive ski boards when nearby.',
            'Board supply deducts dynamically from stack inventory.',
            'AI helpers restock empty supply stations.',
            'The system maintains continuous ski board availability.'
          ]
        },
        {
          title: 'Ski Lift Ride for Customers',
          points: [
            'Customers navigate to the ski lift using NavMesh paths.',
            'Lift animations trigger automatically during boarding.',
            'Customers are transported to the top of the slope.',
            'Visitors jump off and begin downhill movement.',
            'Dolly tracks control skiing movement sequences.',
            'Customers exit the resort after completing the ride.'
          ]
        },
        {
          title: 'Parking Tolls at Entry Point',
          points: [
            'Parking tolls process vehicles using queue systems.',
            'Multiple vehicles can be handled simultaneously.',
            'Cars trigger toll events upon entering the resort.',
            'Vehicles proceed to available parking spots automatically.',
            'Toll upgrades increase processing efficiency.',
            'The system supports higher traffic volumes dynamically.'
          ]
        },
        {
          title: 'Ski Mobile for Snow Shoveling and Sales',
          points: [
            'The snowmobile uses custom movement physics.',
            'Vehicle movement supports larger operational ranges.',
            'Trail renderers create dynamic tire trail effects.',
            'Collected snow forms a growing snowball in front.',
            'Snowball size scales dynamically during collection.',
            'Larger snowballs generate higher vendor rewards.'
          ]
        },
        {
          title: 'Happy Customers Enjoying Skiing',
          points: [
            'Customers follow automated routes after skiing.',
            'Movement transitions between NavMesh and dolly tracks.',
            'Customer states include skiing, idle, and exiting.',
            'Fast service improves customer satisfaction levels.',
            'Efficient ski board supply increases happiness.',
            'Smooth reception and parking systems enhance experience.'
          ]
        },
        {
          title: 'Hire AI Helpers and Upgrade Efficiency',
          points: [
            'The HR room manages helper spawning and upgrades.',
            'Additional helpers become available through progression.',
            'Upgrades improve helper movement speed.',
            'Helper carrying capacity increases dynamically.',
            'Player movement and collection stats are upgradeable.',
            'Efficiency systems scale with gameplay progression.'
          ]
        }
      ],
      tech: [
        'Unity',
        'C#',
        'Simulation Systems',
        'NavMesh',
        'AI Task System',
        'Queue Management System',
        'Resource Management',
        'State Management',
        'Spline/Dolly Track System',
        'Vehicle Physics',
        'Trail Renderer',
        'Inventory Systems',
        'Automation Systems',
        'NPC AI',
        'Component-Based Architecture',
        'Event-Driven Systems'
      ],
      github: 'https://github.com/',
      live: '',
      featured: false,
      media: [
        { type: 'image', src: 'Assets/skiGame/1.jpg', alt: 'Reception' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/SkiGame-1.mp4' },
        { type: 'image', src: 'Assets/skiGame/3.jpg', alt: 'Ski lift' }
      ]
    },
    {
      id: 'unity-10',
      category: 'Unity',
      title: 'Track & Field',
      video: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/TrackGame-1.mp4',
      poster: 'Assets/HeadIcons/TrackGame.jpg',
      description: 'Arcade sports game focused on stamina management, timing, and obstacle-based challenges.',
      highlightGroups: [
        {
          title: 'Run Dash to the Finish Line',
          points: [
            'Player movement follows a predefined dolly track path.',
            'Tap inputs dynamically adjust running speed.',
            'Each tap slightly reduces stamina values.',
            'Movement speed decreases gradually with stamina usage.',
            'Speed values never drop below a defined minimum.',
            'Stamina regenerates slowly when tapping stops.',
            'Regeneration is capped at a maximum stamina limit.'
          ]
        },
        {
          title: 'Pass the Hurdles While Managing Stamina',
          points: [
            'Hurdle mode uses upward force for jump mechanics.',
            'Jumping is triggered through player input.',
            'Colliding with hurdles instantly resets speed to zero.',
            'Players must rebuild momentum after failed jumps.',
            'Stamina directly affects race pacing.',
            'Accurate timing is essential for maintaining speed.'
          ]
        },
        {
          title: 'Hurdle Dash Challenge',
          points: [
            'Hurdles are positioned at fixed intervals on the track.',
            'Obstacle colliders detect failed jump attempts.',
            'Unsuccessful jumps trigger speed reset penalties.',
            'Jump animations use controlled local vertical force.',
            'Missing multiple hurdles impacts overall race ranking.',
            'The system rewards precision and rhythm-based gameplay.'
          ]
        },
        {
          title: 'Stadium with Vibrant City Environment',
          points: [
            'The stadium is surrounded by animated city environments.',
            'Background traffic follows predefined looping paths.',
            'Cars simulate active city movement dynamically.',
            'Environmental animations enhance scene immersion.',
            'Ambient sound effects create a lively atmosphere.'
          ]
        },
        {
          title: 'Lively Crowd Cheering for Players',
          points: [
            'Crowds use looping pre-animated cheering sequences.',
            'Multiple cheering variations improve visual diversity.',
            'Randomized sound effects play at timed intervals.',
            'Crowd excitement scales dynamically during races.',
            'Animation speed changes near the finish line.',
            'The system increases tension and excitement naturally.'
          ]
        },
        {
          title: 'Player Celebrates with Victory Dance',
          points: [
            'Victory sequences trigger at the end of the dolly track.',
            'Players perform rank-based celebration animations.',
            'Different dances exist for 1st, 2nd, and 3rd positions.',
            'Dance sequences begin automatically after race completion.',
            'Custom victory animations support player variation.'
          ]
        },
        {
          title: 'Sportsmanship and Stamina Balance',
          points: [
            'Stamina dynamically controls player movement speed.',
            'Frequent tapping increases speed temporarily.',
            'Continuous tapping drains stamina reserves.',
            'Stopping input allows stamina recovery over time.',
            'Zero stamina dramatically slows the player.',
            'Optimal pacing requires balancing speed and stamina usage.'
          ]
        }
      ],
      tech: [
        'Unity',
        'C#',
        'Dolly Track System',
        'Input System',
        'Stamina System',
        'Animation Controller',
        'Coroutine System',
        'State Management',
        'Event-Driven Systems',
        'Collision Detection',
        'Game Balancing Systems'
      ],
      github: 'https://github.com/',
      live: '',
      featured: false,
      media: [
        { type: 'image', src: 'Assets/trackGame/1.jpg', alt: 'Running' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/TrackGame-1.mp4' },
        { type: 'image', src: 'Assets/trackGame/4.jpg', alt: 'Crowd' }
      ]
    },
    {
      id: 'unreal-1',
      category: 'Unreal',
      title: 'Obstacle Assault',
      video: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AssaultObstacle/Obstacle_1.mp4',
      poster: 'Assets/HeadIcons/Obstacle.png',
      description: 'Physics-based platformer featuring synchronized movement mechanics and high-stakes environmental navigation.',
      highlightGroups: [
        {
          title: 'Responsive Player Controller with Leg IK',
          points: [
            'The player controller supports smooth movement and jumping mechanics.',
            'Character movement is fully physics-driven for responsive gameplay.',
            'Leg IK dynamically adjusts foot placement based on surface height.',
            'Foot positioning adapts automatically on uneven platforms and slopes.',
            'Animation blending improves natural locomotion transitions.',
            'Movement systems are optimized for platform traversal gameplay.'
          ]
        },
        {
          title: 'Dynamic Moving Platform System',
          points: [
            'Platforms move using actor-based movement systems.',
            'Multiple moving platforms are chained together across the level.',
            'Platform timing and movement paths are synchronized dynamically.',
            'Players can jump between continuously moving platform sections.',
            'Movement logic ensures stable player attachment during traversal.',
            'The system creates flowing single-player parkour-style navigation.'
          ]
        },
        {
          title: 'Platform Traversal Gameplay',
          points: [
            'Gameplay focuses on movement precision and timing.',
            'Players navigate interconnected platform sequences.',
            'Jump mechanics are tuned for smooth aerial control.',
            'Level flow encourages continuous forward movement.',
            'Traversal systems support momentum-based gameplay interactions.'
          ]
        }
      ],
      tech: [
        'Unreal Engine',
        'Blueprints',
        'Physics-Based Movement',
        'Character Movement Component',
        'Animation Blueprint',
        'IK System (Leg IK)',
        'Motion Matching / Animation Blending',
        'Moving Platforms System',
        'Actor-Based Architecture',
        'Level Design (Scripting + Triggers)'
      ],
      github: 'https://github.com/',
      live: '',
      featured: true,
      media: [
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AssaultObstacle/Obstacle_1.mp4' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AssaultObstacle/Obstacle_2.mp4' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AssaultObstacle/Obstacle_3.mp4' }
      ]
    },
    {
      id: 'unreal-2',
      category: 'Unreal',
      title: 'Blaze In Blaze Out',
      video: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/TwinBlastGame/ShooterGame_1.mp4',
      poster: 'Assets/HeadIcons/Blaze.png',
      description: 'Fast-paced third-person shooter featuring a heat-managed arsenal and a sophisticated weighted AI reaction system.',
      highlightGroups: [
        {
          title: 'Third-Person Two-Handed Shooter Combat',
          points: [
            'The player uses a third-person strafe-based movement system.',
            'Combat supports smooth aiming and directional shooting mechanics.',
            'Primary laser attacks use a heat buildup system instead of ammo.',
            'Continuous firing increases weapon heat dynamically.',
            'Overheating triggers a temporary cooldown state.',
            'Movement and shooting systems are designed for fast-paced combat.'
          ]
        },
        {
          title: 'Advanced Combat Abilities',
          points: [
            'The player has access to multiple combat abilities.',
            'An infused grenade launcher delivers explosive area damage.',
            'Multi-shot abilities fire projectiles in multiple directions simultaneously.',
            'An ultimate machine gun ability enables rapid automatic firing.',
            'Abilities operate alongside uninterrupted strafe movement.',
            'Cooldown systems balance combat pacing and ability usage.'
          ]
        },
        {
          title: 'Evade Dash Movement System',
          points: [
            'Players can perform high-speed evade dash movements.',
            'Dash mechanics support rapid repositioning during combat.',
            'Movement abilities improve survivability against enemy attacks.',
            'Evade timing encourages skill-based defensive gameplay.',
            'Dash transitions blend smoothly with combat animations.'
          ]
        },
        {
          title: 'Dynamic Enemy AI Behaviors',
          points: [
            'Enemies are divided into melee and ranged combat types.',
            'Guard enemies defend fixed positions until player detection.',
            'Detected players trigger chase and attack behaviors.',
            'Enemies return to their original location if the player escapes.',
            'Patrol enemies move between predefined patrol points.',
            'Rusher enemies aggressively chase the player continuously.',
            'Ranged enemies maintain strategic combat distance dynamically.'
          ]
        },
        {
          title: 'Reactive Combat Animation System',
          points: [
            'Enemies use weighted randomness for hit reaction animations.',
            'Different reactions improve combat visual variety.',
            'Death animations trigger dynamically upon elimination.',
            'Animation blending enhances combat responsiveness.',
            'Combat feedback systems improve gameplay impact and immersion.'
          ]
        },
        {
          title: 'Prime Helix Boss Fight',
          points: [
            'The game features a large mech gorilla-inspired boss enemy.',
            'The Prime Helix boss uses multiple attack phases.',
            'Death beam attacks deal sustained directional damage.',
            'Shockwave blasts damage players within an area radius.',
            'Ground smash attacks create damaging cracked surfaces.',
            'Boss attacks encourage movement and dodge-based gameplay.',
            'Attack variety creates multi-phase combat encounters.'
          ]
        },
        {
          title: 'Combat UI and Feedback Systems',
          points: [
            'Health bar systems display player combat status dynamically.',
            'Cooldown UI tracks ability availability in real time.',
            'Combat interfaces provide responsive gameplay feedback.',
            'UI systems improve player awareness during high-action encounters.'
          ]
        }
      ],
      tech: [
        'Unreal Engine',
        'C++',
        'Blueprints',
        'Third-Person Character Controller',
        'Strafe-Based Movement System',
        'Animation Blueprint',
        'Animation Blending',
        'IK System',
        'Ability System (Cooldown-Based)',
        'Projectile System',
        'State Machines',
        'NavMesh AI',
        'Enemy Perception System',
        'Weighted Random Animation System',
        'Boss AI System',
        'Combat VFX Systems',
        'UI/HUD Systems'
      ],
      github: 'https://github.com/',
      live: '',
      featured: true,
      media: [
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/TwinBlastGame/ShooterGame_1.mp4' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/TwinBlastGame/ShooterGame_2.mp4' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/TwinBlastGame/ShooterGame_3.mp4' }
      ]
    },
    {
      id: 'unreal-3',
      category: 'Unreal',
      title: 'Drone Strike',
      video: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/DroneGame/Drone_2.mp4',
      poster: 'Assets/HeadIcons/Drone.png',
      description: 'Aerial combat shooter focused on trigger-based wave management and high-precision drone warfare.',
      highlightGroups: [
        {
          title: 'Drone Flight Controller',
          points: [
            'The player controls a fully dynamic flying drone.',
            'Movement supports smooth aerial navigation in 3D space.',
            'Flight mechanics allow directional hovering and acceleration.',
            'Drone controls are tuned for responsive airborne combat.',
            'Movement blending creates fluid transitions during flight.',
            'The system supports fast-paced vertical gameplay.'
          ]
        },
        {
          title: 'Laser Blast Combat System',
          points: [
            'The drone uses laser-based projectile attacks.',
            'Laser blasts fire continuously with responsive shooting controls.',
            'Projectile systems support high-speed combat encounters.',
            'Combat mechanics are optimized for aerial targeting.',
            'Visual effects enhance weapon impact and feedback.',
            'The shooting system integrates seamlessly with drone movement.'
          ]
        },
        {
          title: 'Enemy Combat Bots',
          points: [
            'Enemy bots use AI-driven flight and combat behaviors.',
            'Bots actively chase the player during encounters.',
            'Enemy AI tracks player movement dynamically in the air.',
            'Attack systems trigger automatically when within range.',
            'Bots maintain pressure through continuous pursuit mechanics.',
            'Combat encounters focus on aerial mobility and positioning.'
          ]
        },
        {
          title: 'Aerial Combat Gameplay',
          points: [
            'Gameplay revolves around fast-moving aerial battles.',
            'Players balance movement and precision shooting simultaneously.',
            'Enemy pursuit systems create constant combat pressure.',
            'Flight combat encourages quick reaction and positioning.',
            'Dynamic movement patterns improve encounter variety.'
          ]
        }
      ],
      tech: [
        'Unreal Engine',
        'Blueprints',
        'Floating Component',
        'Projectile System',
        'AI Behavior Trees',
        'Combat VFX Systems',
        'Animation Blueprint',
        'Event-Driven Systems'
      ],
      github: 'https://github.com/',
      live: '',
      featured: false,
      media: [
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/DroneGame/Drone_1.mp4' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/DroneGame/Drone_2.mp4' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/DroneGame/Drone_3.mp4' }
      ]
    },
    {
      id: 'unreal-4',
      category: 'Unreal',
      title: 'Shooter Sam',
      video: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/ShooterSam/ShooterSam_1.mp4',
      poster: 'Assets/HeadIcons/Shooter.png',
      description: 'Third-person shooter focused on core AI combat loops and behavior tree-driven engagement.',
      highlightGroups: [
        {
          title: 'Third-Person Shooter Gameplay',
          points: [
            'The game features a third-person shooter combat system.',
            'Players use responsive movement and aiming mechanics.',
            'Combat supports continuous shooting during movement.',
            'Character controls are designed for fast-paced encounters.',
            'Movement and combat systems blend smoothly together.'
          ]
        },
        {
          title: 'AI Enemy Perception System',
          points: [
            'Enemy AI uses perception-based player detection.',
            'Enemies begin chasing once the player is detected.',
            'AI navigation uses dynamic pathfinding toward the target.',
            'Enemies automatically transition from chase to attack states.',
            'Shooting behaviors activate within combat range.',
            'Combat AI maintains pressure through continuous pursuit.'
          ]
        },
        {
          title: 'Space Ship Environment',
          points: [
            'Gameplay takes place inside a sci-fi spaceship environment.',
            'Level design focuses on futuristic corridors and combat zones.',
            'The environment supports close-range and mid-range firefights.',
            'Sci-fi atmosphere enhances immersion during encounters.',
            'Interior layouts are designed for tactical movement and combat flow.'
          ]
        },
        {
          title: 'Cyborg Character Design',
          points: [
            'Both the player and enemies use cyborg-themed character designs.',
            'Character visuals combine robotic and human-inspired elements.',
            'Enemy presentation supports the futuristic combat setting.',
            'Animations and combat feedback reinforce the sci-fi theme.'
          ]
        }
      ],
      tech: [
        'Unreal Engine',
        'C++',
        'Blueprints',
        'Third-Person Shooter Framework',
        'AI Behavior Trees',
        'AI Perception System',
        'NavMesh Pathfinding',
        'Animation Blueprint',
        'Combat System',
        'Projectile/Hit Detection System',
        'Character Movement Component'
      ],
      github: 'https://github.com/',
      live: '',
      featured: false,
      media: [
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/ShooterSam/ShooterSam_1.mp4' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/ShooterSam/ShooterSam_2.mp4' }
      ]
    },
    {
      id: 'unreal-5',
      category: 'Unreal',
      title: 'Neon Drift',
      video: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/CarGame/Car_1.mp4',
      poster: 'Assets/HeadIcons/Car.png',
      description: 'An experimental driving simulation exploring high-contrast aesthetics and high-latency handling models.',
      highlightGroups: [
        {
          title: 'Custom Vehicle Controller System',
          points: [
            'The vehicle uses a fully custom driving controller.',
            'Movement physics are tuned for responsive handling.',
            'Acceleration behavior is controlled using custom curves.',
            'Torque values dynamically affect speed and traction.',
            'Vehicle movement balances arcade and realistic driving feel.',
            'Physics systems improve stability during turns and acceleration.'
          ]
        },
        {
          title: 'Advanced Driving Mechanics',
          points: [
            'Acceleration curves control gradual speed buildup.',
            'Torque systems influence wheel power distribution.',
            'Handling logic improves cornering responsiveness.',
            'Movement systems support smooth drifting and steering.',
            'Speed transitions feel natural across different velocities.',
            'Driving mechanics are optimized for high-speed gameplay.'
          ]
        },
        {
          title: 'Neon SUV Design',
          points: [
            'The project features a futuristic neon-styled SUV vehicle.',
            'Vehicle visuals use glowing neon-inspired aesthetics.',
            'The SUV design supports a modern cyber-themed atmosphere.',
            'Lighting and reflections enhance the futuristic appearance.',
            'Visual styling complements high-speed driving gameplay.'
          ]
        }
      ],
      tech: [
        'Unreal Engine',
        'Blueprints',
        'Custom Vehicle Physics System',
        'Physics-Based Vehicle Controller',
        'Curve-Based Acceleration System',
        'Torque & Traction Simulation',
        'Suspension Physics',
        'Wheel Movement Simulation'
      ],
      github: 'https://github.com/',
      live: '',
      featured: false,
      media: [
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/CarGame/Car_1.mp4' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/CarGame/Car_2.mp4' },
        { type: 'video', src: 'https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/CarGame/Car_3.mp4' }
      ]
    }
  ]
};

