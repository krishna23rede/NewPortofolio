export const portfolioData = {
  "hero": {
    "name": "Krishna Rede",
    "designation": "Game Developer",
    "tagline": "I build responsive gameplay systems and interactive combat experiences.\nFocused on performance, polish, and reusable technical architecture.",
    "resumeLink": "Assets/KrishnaRede_Updated_CV.pdf",
    "cta": {
      "label": "View Projects",
      "href": "#projects"
    }
  },
  "techStack": [
    "Unity",
    "Unreal Engine",
    "C#",
    "C++",
    "Git",
    "3D Physics",
    "Blueprints",
    "Profiling"
  ],
  "about": {
    "introduction": "My name is Krishna, and I am a Game Developer specializing in Unity and Unreal Engine with a Bachelor's degree in Computer Science. I live in Pune, Maharashtra, and have a deep passion for both playing and developing games. I am particularly interested in gameplay mechanics, systems architecture, AI behaviors, and everything that drives interactive experiences. My work involves not just building games but also exploring the underlying technologies that make them possible. I enjoy experimenting with different frameworks, optimizing performance, and constantly learning to refine my craft.",
    "skills": [
      {
        "category": "Programming",
        "items": "C++, C#, HTML, CSS, JavaScript"
      },
      {
        "category": "Engines & Technologies",
        "items": "Unity, Unreal Engine, Blueprints, 3D Physics, Mirror & Netcode (Multiplayer)"
      },
      {
        "category": "Tools & Services",
        "items": "Git, GitHub, Firebase"
      },
      {
        "category": "Game Design",
        "items": "AI Behaviors, Game mechanics, UI/UX logic, level design, procedural generation"
      }
    ],
    "experience": [
      {
        "title": "Unity Projects",
        "points": [
          "Developed 8-10 games ranging across different genres, including shop management simulators, hyper-casual games, and puzzle-based experiences.",
          "Built complex systems with dynamic user interactions and resource management.",
          "Focused on simplicity, polish, and optimizing user engagement in fast-paced designs.",
          "Genre focus: Hyper-Casual, Management Simulations, Racing, Puzzle, Farming, and 2D Platformers."
        ]
      },
      {
        "title": "Unreal Engine Projects",
        "points": [
          "Developed advanced player movement and combat systems, including dash/evade mechanics, multi-shot attacks, and auto-firing weapons.",
          "Built complete boss fight systems with multi-phase behavior, special abilities, and dynamic AI reactions.",
          "Designed AI using state-based behaviors (Idle, Patrol, Chase, Attack, Ranged Attack, Hit React, Death).",
          "Implemented combat feedback (camera shake, hit reactions) and procedural animation elements like basic leg IK.",
          "Created Blueprint-driven interaction systems (doors, pickups, elevators) and diverse prototypes (car driving, flying drones, platformers)."
        ]
      }
    ],
    "additionalSkills": [
      "C++ & Blueprint Visual Scripting Architecture",
      "State-Machine & Behavior Tree driven AI Development",
      "Gameplay Systems Architecture (Combat, Movement, Interactions)",
      "Game Loop Design and Optimization",
      "Testing and Debugging for Performance",
      "Problem Solving and Analytical Thinking"
    ]
  },
  "contact": {
    "description": "Available for gameplay programming roles, freelance systems work, and collaborative game projects.",
    "email": "krishna34rede@gmail.com",
    "linkedin": "https://www.linkedin.com/in/krishna-rede-a4ab81242/",
    "links": [
      {
        "id": "contact-email",
        "type": "email",
        "label": "Email",
        "newTab": false
      },
      {
        "id": "contact-linkedin",
        "type": "linkedin",
        "label": "LinkedIn",
        "newTab": true
      }
    ]
  },
  "projects": [
    {
      "id": "unity-1",
      "title": "BomberMan",
      "description": "Grid-based action game with procedural levels, destructible environments, and strategic bomb mechanics.",
      "category": "Unity",
      "tech": [
        "Unity",
        "C#",
        "Coroutines",
        "Particle System"
      ],
      "github": "https://github.com/",
      "live": "",
      "image": "Assets/BomberGame/1.jpg",
      "video": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/BomberMan-1.mp4",
      "highlights": [
        "Procedural grid map generation with balanced spawn logic.",
        "Joystick-based movement and precise grid-aligned bomb placement.",
        "Explosion system with dynamic VFX and area damage logic.",
        "Randomized power-up system with timed effects."
      ],
      "media": [
        {
          "type": "image",
          "src": "Assets/BomberGame/1.jpg",
          "alt": "Procedural map"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/BomberMan-1.mp4"
        },
        {
          "type": "image",
          "src": "Assets/BomberGame/2.jpg",
          "alt": "Explosion VFX"
        }
      ],
      "snippet": "// State-driven enemy update loop\nswitch (state) {\n  case EnemyState.Chase:\n    MoveTowards(player.position);\n    if (CanFlank()) state = EnemyState.Flank;\n    break;\n}",
      "poster": "Assets/HeadIcons/BomberGame.jpg"
    },
    {
      "id": "unity-2",
      "title": "Burger Shop",
      "description": "Fast-paced restaurant simulation focused on customer flow, stacking systems, and service efficiency.",
      "category": "Unity",
      "tech": [
        "Unity",
        "C#",
        "NavMesh",
        "AI Task System"
      ],
      "github": "https://github.com/",
      "live": "",
      "image": "Assets/burgerGame/1.jpg",
      "video": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/BurgerGame-1.mp4",
      "highlights": [
        "NavMesh-based customer AI with queue and service handling.",
        "Stack-based item pickup and delivery system.",
        "Task-driven AI helpers with priority execution.",
        "Drive-thru and dine-in systems with shared logic."
      ],
      "media": [
        {
          "type": "image",
          "src": "Assets/burgerGame/1.jpg",
          "alt": "Customer system"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/BurgerGame-1.mp4"
        },
        {
          "type": "image",
          "src": "Assets/burgerGame/3.jpg",
          "alt": "Drive-thru"
        }
      ],
      "snippet": "float score = (threat * 0.7f) + ((1f / distance) * 0.3f);\nif (score > bestScore) bestTarget = candidate;",
      "poster": "Assets/HeadIcons/BurgerGame.jpg"
    },
    {
      "id": "unity-3",
      "title": "Hide N Seek",
      "description": "Stealth-based multiplayer-style game with seeker vs hider mechanics and dynamic abilities.",
      "category": "Unity",
      "tech": [
        "Unity",
        "C#",
        "NavMesh",
        "Raycasting",
        "Physics"
      ],
      "github": "https://github.com/",
      "live": "",
      "image": "Assets/hideGame/1.jpg",
      "video": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HideGame-1.mp4",
      "highlights": [
        "NavMesh AI with randomized roaming behavior.",
        "Radar-based detection and stealth gameplay.",
        "Interactive environment with physics-based triggers.",
        "Power-ups including camouflage, speed, and phasing."
      ],
      "media": [
        {
          "type": "image",
          "src": "Assets/hideGame/1.jpg",
          "alt": "Seeker gameplay"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HideGame-1.mp4"
        },
        {
          "type": "image",
          "src": "Assets/hideGame/6.jpg",
          "alt": "Camouflage"
        }
      ],
      "snippet": "if (jumpBuffer > 0 && coyoteTime > 0) {\n  ApplyJumpImpulse();\n  jumpBuffer = 0f;\n}",
      "poster": "Assets/HeadIcons/HideGame.jpg"
    },
    {
      "id": "unity-4",
      "title": "Hitman Go",
      "description": "Turn-based strategy game with grid movement and predictable enemy patterns.",
      "category": "Unity",
      "tech": [
        "Unity",
        "C#",
        "Grid System",
        "Turn-Based Logic"
      ],
      "github": "https://github.com/",
      "live": "",
      "image": "Assets/hitmanGame/1.jpg",
      "video": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HitmanGame.mp4",
      "highlights": [
        "Node-based grid movement with step validation.",
        "Enemy rotation patterns and directional detection.",
        "Stealth kill and fail-state detection logic.",
        "Level design with predefined AI behaviors."
      ],
      "media": [
        {
          "type": "image",
          "src": "Assets/hitmanGame/1.jpg",
          "alt": "Grid system"
        },
        {
          "type": "image",
          "src": "Assets/hitmanGame/2.jpg",
          "alt": "Enemy logic"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HitmanGame.mp4"
        }
      ],
      "snippet": "if (isLockedOn) {\n  cameraRig.Damping = Mathf.Lerp(6f, 2f, lockStrength);\n}",
      "poster": "Assets/HeadIcons/HitmanGame.jpg"
    },
    {
      "id": "unity-5",
      "title": "Perfect Hotel",
      "description": "Simulation game managing customers, rooms, and services with automated AI systems.",
      "category": "Unity",
      "tech": [
        "Unity",
        "C#",
        "AI Systems",
        "Task Queues"
      ],
      "github": "https://github.com/",
      "live": "",
      "image": "Assets/hotelGame/1.jpg",
      "video": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HotelGame-1.mp4",
      "highlights": [
        "Task-based customer lifecycle and action sequencing.",
        "Room state system with cleaning and reset logic.",
        "AI helpers for automation and efficiency.",
        "Multi-service systems including dining and parking."
      ],
      "media": [
        {
          "type": "image",
          "src": "Assets/hotelGame/1.jpg",
          "alt": "Reception"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HotelGame-1.mp4"
        },
        {
          "type": "image",
          "src": "Assets/hotelGame/3.jpg",
          "alt": "Cleaner AI"
        }
      ],
      "snippet": "speed = Mathf.MoveTowards(speed, targetSpeed, accel * dt);\nif (isBoosting) speed += boostForce * dt;",
      "poster": "Assets/HeadIcons/HotelGame.jpg"
    },
    {
      "id": "unity-6",
      "title": "Hunter Assassin 3D",
      "description": "Stealth action game featuring enemy AI states, detection systems, and tactical eliminations.",
      "category": "Unity",
      "tech": [
        "Unity",
        "C#",
        "NavMesh",
        "State Machines",
        "UI Systems"
      ],
      "github": "https://github.com/",
      "live": "",
      "image": "Assets/hunterGame/1.jpg",
      "video": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HunterGame-1.mp4",
      "highlights": [
        "Enemy AI with patrol, alert, hunt, and attack states.",
        "Stealth kill system with detection and alert propagation.",
        "Gem reward and collection system with dynamic spawning.",
        "Power-ups with cooldowns and visual feedback UI."
      ],
      "media": [
        {
          "type": "image",
          "src": "Assets/hunterGame/1.jpg",
          "alt": "Stealth gameplay"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HunterGame-1.mp4"
        },
        {
          "type": "image",
          "src": "Assets/hunterGame/2.jpg",
          "alt": "AI states"
        }
      ],
      "snippet": "if (bufferedDash && canDash) {\n  ExecuteDash();\n  bufferedDash = false;\n}",
      "poster": "Assets/HeadIcons/HunterGame.jpg"
    },
    {
      "id": "unity-7",
      "title": "Kart Game",
      "description": "Arcade-style racing game with combat mechanics, weapons, and physics-based interactions.",
      "category": "Unity",
      "tech": [
        "Unity",
        "C#",
        "Physics",
        "AI Systems"
      ],
      "github": "https://github.com/",
      "live": "",
      "image": "Assets/kartGame/1.jpg",
      "video": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/KartGame-1.mp4",
      "highlights": [
        "Physics-based kart movement with surface-dependent handling.",
        "Modular weapon system with multiple attack types.",
        "Collision-based combat and damage system.",
        "AI racers with dynamic targeting and behavior."
      ],
      "media": [
        {
          "type": "image",
          "src": "Assets/kartGame/1.jpg",
          "alt": "Track"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/KartGame-1.mp4"
        },
        {
          "type": "image",
          "src": "Assets/kartGame/3.jpg",
          "alt": "Weapons"
        }
      ],
      "snippet": "threat = Mathf.Clamp(threat + spawnWeight - decay * dt, 0f, 100f);",
      "poster": "Assets/HeadIcons/KartGame.jpg"
    },
    {
      "id": "unity-8",
      "title": "Shopping Mall",
      "description": "Management simulation with resource systems, AI helpers, and customizable store environments.",
      "category": "Unity",
      "tech": [
        "Unity",
        "C#",
        "AI Systems",
        "Resource Management"
      ],
      "github": "https://github.com/",
      "live": "",
      "image": "Assets/mallGame/1.jpg",
      "video": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/MallGame-1.mp4",
      "highlights": [
        "Customer flow system with reception and store routing.",
        "Inventory and restocking system with stack mechanics.",
        "AI helpers for automated task execution.",
        "Store and environment customization system."
      ],
      "media": [
        {
          "type": "image",
          "src": "Assets/mallGame/1.jpg",
          "alt": "Reception"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/MallGame-1.mp4"
        },
        {
          "type": "image",
          "src": "Assets/mallGame/3.jpg",
          "alt": "Inventory"
        }
      ],
      "snippet": "if (IsServer) {\n  objectiveState.Value = ObjectiveState.Captured;\n}",
      "poster": "Assets/HeadIcons/MallGame.jpg"
    },
    {
      "id": "unity-9",
      "title": "Ski Resort",
      "description": "Simulation game combining customer management, logistics, and interactive systems.",
      "category": "Unity",
      "tech": [
        "Unity",
        "C#",
        "NavMesh",
        "Queue Systems"
      ],
      "github": "https://github.com/",
      "live": "",
      "image": "Assets/skiGame/1.jpg",
      "video": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/SkiGame-1.mp4",
      "highlights": [
        "Customer lifecycle from entry to activity completion.",
        "Parking and toll system with queue management.",
        "Ski equipment distribution and restocking system.",
        "AI helpers and upgrade-based efficiency scaling."
      ],
      "media": [
        {
          "type": "image",
          "src": "Assets/skiGame/1.jpg",
          "alt": "Reception"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/SkiGame-1.mp4"
        },
        {
          "type": "image",
          "src": "Assets/skiGame/3.jpg",
          "alt": "Ski lift"
        }
      ],
      "snippet": "rng = new System.Random(seed);\nnextRoom = roomPool[rng.Next(roomPool.Count)];",
      "poster": "Assets/HeadIcons/SkiGame.jpg"
    },
    {
      "id": "unity-10",
      "title": "Track & Field",
      "description": "Arcade sports game focused on stamina management, timing, and obstacle-based challenges.",
      "category": "Unity",
      "tech": [
        "Unity",
        "C#",
        "Animation",
        "Input System"
      ],
      "github": "https://github.com/",
      "live": "",
      "image": "Assets/trackGame/1.jpg",
      "video": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/TrackGame-1.mp4",
      "highlights": [
        "Tap-based speed control with stamina system.",
        "Hurdle jumping with timing and penalty logic.",
        "Dolly track movement system for linear progression.",
        "Dynamic animation and feedback system."
      ],
      "media": [
        {
          "type": "image",
          "src": "Assets/trackGame/1.jpg",
          "alt": "Running"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/TrackGame-1.mp4"
        },
        {
          "type": "image",
          "src": "Assets/trackGame/4.jpg",
          "alt": "Crowd"
        }
      ],
      "snippet": "if (triggerA && triggerB && !doorOpen) {\n  OpenDoor();\n}",
      "poster": "Assets/HeadIcons/TrackGame.jpg"
    },
    {
      "id": "unreal-1",
      "title": "Obstacle Assault",
      "description": "Physics-based platformer featuring synchronized movement mechanics and high-stakes environmental navigation.",
      "category": "Unreal",
      "tech": [
        "Unreal Engine 5",
        "C++",
        "Blueprints",
        "EQS"
      ],
      "github": "https://github.com/",
      "live": "",
      "image": "Assets/HeadIcons/Obstacle.png",
      "video": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AssaultObstacle/Obstacle_1.mp4",
      "highlights": [
        "Custom physics constraints for realistic 'chained' player movement.",
        "Dynamic obstacle course with moving platforms and swinging pendulums.",
        "Asynchronous or local multiplayer synchronization logic.",
        "Punishing 'fall-reset' mechanics designed for high-tension gameplay."
      ],
      "media": [
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AssaultObstacle/Obstacle_1.mp4"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AssaultObstacle/Obstacle_2.mp4"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AssaultObstacle/Obstacle_3.mp4"
        }
      ],
      "snippet": "joint.connectedBody = playerTwoRB; joint.linearLimit = new SoftJointLimit { limit = maxDistance };",
      "poster": "Assets/HeadIcons/Obstacle.png"
    },
    {
      "id": "unreal-2",
      "title": "Blaze In Blaze Out",
      "description": "Fast-paced third-person shooter featuring a heat-managed arsenal and a sophisticated weighted AI reaction system.",
      "category": "Unreal",
      "tech": [
        "Unreal Engine",
        "Blueprints",
        "C++",
        "AI Navigation",
        "AI Perception"
      ],
      "github": "https://github.com/",
      "live": "",
      "image": "Assets/HeadIcons/Blaze.png",
      "video": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/TwinBlastGame/ShooterGame_1.mp4",
      "highlights": [
        "Thermal-regulated primary laser with tactical heat-buildup mechanics.",
        "Versatile ability kit including infused grenade launchers, multi-directional volleys, and an auto-firing ultimate.",
        "Hierarchical AI system with Guard, Patrol, and Rusher archetypes for melee and ranged units.",
        "Prime Helix Boss encounter with complex attack patterns: Death Ray, Shockwave, and AOE Ground Smash.",
        "Weighted randomness for hit-react animations, providing organic combat feedback."
      ],
      "media": [
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/TwinBlastGame/ShooterGame_1.mp4"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/TwinBlastGame/ShooterGame_2.mp4"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/TwinBlastGame/ShooterGame_3.mp4"
        }
      ],
      "snippet": "CurrentHeat = FMath::Clamp(CurrentHeat + HeatPerShot, 0.0f, MaxHeat); if (CurrentHeat >= MaxHeat) Overheat();",
      "poster": "Assets/HeadIcons/Blaze.png"
    },
    {
      "id": "unreal-3",
      "title": "Drone Strike",
      "description": "Aerial combat shooter focused on trigger-based wave management and high-precision drone warfare.",
      "category": "Unreal",
      "tech": [
        "Unreal Engine",
        "Blueprints",
        "AI Behaviour",
        "Niagara VFX"
      ],
      "github": "https://github.com/",
      "live": "",
      "image": "Assets/HeadIcons/Drone.png",
      "video": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/DroneGame/Drone_1.mp4",
      "highlights": [
        "Dynamic laser-based projectile system with custom collision detection.",
        "Trigger-box encounter logic for automated enemy squadron spawning.",
        "Aggressive bot AI designed for proximity-based engagement and suppression.",
        "Static Boss Drone featuring high-accuracy targeting and heavy damage scaling.",
        "Integrated VFX and SFX modules for immersive mechanical combat feedback."
      ],
      "media": [
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/DroneGame/Drone_1.mp4"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/DroneGame/Drone_2.mp4"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/DroneGame/Drone_3.mp4"
        }
      ],
      "snippet": "void ADrone::FireLaser() { FVector SpawnLoc = GetActorLocation(); FRotator SpawnRot = GetActorRotation(); SpawnProjectile(SpawnLoc, SpawnRot); }",
      "poster": "Assets/HeadIcons/Drone.png"
    },
    {
      "id": "unreal-4",
      "title": "Shooter Sam",
      "description": "Third-person shooter focused on core AI combat loops and behavior tree-driven engagement.",
      "category": "Unreal",
      "tech": [
        "Unreal Engine",
        "Blueprints",
        "C++",
        "Behavior Trees",
        "AI Perception"
      ],
      "github": "https://github.com/",
      "live": "",
      "image": "Assets/HeadIcons/Shooter.png",
      "video": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/ShooterSam/ShooterSam_1.mp4",
      "highlights": [
        "Modular Behavior Tree architecture for responsive enemy decision-making.",
        "Perception-based chase logic utilizing Unreal's AI Sensing component.",
        "Dynamic movement-to-fire transitions for seamless bot combat behavior.",
        "NavMesh-optimized pathfinding for persistent player tracking across complex terrain."
      ],
      "media": [
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/ShooterSam/ShooterSam_1.mp4"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/ShooterSam/ShooterSam_2.mp4"
        }
      ],
      "snippet": "BT_Enemy->RunBehaviorTree(EnemyBehaviorAsset); // Execute logic to find and chase player",
      "poster": "Assets/HeadIcons/Shooter.png"
    },
    {
      "id": "unreal-5",
      "title": "Neon Drift",
      "description": "An experimental driving simulation exploring high-contrast aesthetics and high-latency handling models.",
      "category": "Unreal",
      "tech": [
        "Unreal Engine"
      ],
      "github": "https://github.com/",
      "live": "",
      "image": "Assets/HeadIcons/Car.png",
      "video": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/CarGame/Car_1.mp4",
      "highlights": [
        "Intentional 'Stiff-Control' physics model to simulate weighted toy car mechanics.",
        "Extreme acceleration curves designed for rapid-response twitch gameplay.",
        "Custom post-processing stack featuring heavy Bloom and emissive Neon materials.",
        "Experimental physics-to-visual feedback loop to enhance the sense of speed despite rigid handling."
      ],
      "media": [
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/CarGame/Car_1.mp4"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/CarGame/Car_2.mp4"
        },
        {
          "type": "video",
          "src": "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/CarGame/Car_3.mp4"
        }
      ],
      "snippet": "rb.AddForce(transform.forward * instantAcceleration, ForceMode.VelocityChange);",
      "poster": "Assets/HeadIcons/Car.png"
    }
  ],
  "header": {
    "logo": "Krishna",
    "navLinks": [
      {
        "name": "Home",
        "href": "#home"
      },
      {
        "name": "Projects",
        "href": "#projects"
      },
      {
        "name": "About",
        "href": "#about"
      },
      {
        "name": "Contact",
        "href": "#contact"
      }
    ],
    "resumeBtn": {
      "label": "Download Resume",
      "href": "Assets/KrishnaRede_Updated_CV.pdf"
    }
  },
  "sections": {
    "techStack": {
      "eyebrow": "Core Toolkit",
      "title": "Tech Stack"
    },
    "projects": {
      "eyebrow": "Showcase",
      "title": "Projects",
      "categories": [
        {
          "id": "Unity",
          "title": "Unity Projects",
          "limit": 6,
          "showMoreBtn": "Show More"
        },
        {
          "id": "Unreal",
          "title": "Unreal Projects"
        }
      ]
    },
    "about": {
      "eyebrow": "About",
      "title": "Who I Am",
      "blocks": {
        "introduction": "Introduction",
        "skills": "Skills",
        "experience": "Work Experience + Expertise",
        "additionalSkills": "Additional Skills"
      }
    },
    "contact": {
      "eyebrow": "Contact",
      "title": "Let’s Connect"
    }
  },
  "footer": {
    "text": "© {year} Krishna Rede. All Rights Reserved."
  }
};
