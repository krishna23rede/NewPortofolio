const modal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector(".modal-description");
const modalHighlights = document.querySelector(".modal-highlights");
const modalStack = document.querySelector(".modal-stack");
const showMoreUnityButton = document.querySelector("[data-show-more='unity']");
const carouselTrack = document.querySelector(".carousel-track");
const prevButton = document.querySelector(".carousel-btn.prev");
const nextButton = document.querySelector(".carousel-btn.next");
const closeButtons = document.querySelectorAll("[data-close-modal]");
const projectTiles = document.querySelectorAll(".project-tile");
const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");
const hero = document.querySelector(".hero");
const heroCanvas = document.querySelector(".hero-canvas");

const projectData = {
  "unity-1": {
    title: "BomberMan",
    description: "Grid-based action game with procedural levels, destructible environments, and strategic bomb mechanics.",
    highlights: [
      "Procedural grid map generation with balanced spawn logic.",
      "Joystick-based movement and precise grid-aligned bomb placement.",
      "Explosion system with dynamic VFX and area damage logic.",
      "Randomized power-up system with timed effects."
    ],
    stack: ["Unity", "C#", "Coroutines", "Particle System"],
    codeUrl: "https://github.com/",
    snippet: `// State-driven enemy update loop
switch (state) {
  case EnemyState.Chase:
    MoveTowards(player.position);
    if (CanFlank()) state = EnemyState.Flank;
    break;
}`,
    media: [
      { type: "image", src: "Assets/BomberGame/1.jpg", alt: "Procedural map" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/BomberMan-1.mp4" },
      { type: "image", src: "Assets/BomberGame/2.jpg", alt: "Explosion VFX" }
    ]
  },
  "unity-2": {
    title: "Burger Shop",
    description: "Fast-paced restaurant simulation focused on customer flow, stacking systems, and service efficiency.",
    highlights: [
      "NavMesh-based customer AI with queue and service handling.",
      "Stack-based item pickup and delivery system.",
      "Task-driven AI helpers with priority execution.",
      "Drive-thru and dine-in systems with shared logic."
    ],
    stack: ["Unity", "C#", "NavMesh", "AI Task System"],
    codeUrl: "https://github.com/",
    snippet: `float score = (threat * 0.7f) + ((1f / distance) * 0.3f);
if (score > bestScore) bestTarget = candidate;`,
    media: [
      { type: "image", src: "Assets/burgerGame/1.jpg", alt: "Customer system" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/BurgerGame-1.mp4" },
      { type: "image", src: "Assets/burgerGame/3.jpg", alt: "Drive-thru" }
    ]
  },
  "unity-3": {
    title: "Hide N Seek",
    description: "Stealth-based multiplayer-style game with seeker vs hider mechanics and dynamic abilities.",
    highlights: [
      "NavMesh AI with randomized roaming behavior.",
      "Radar-based detection and stealth gameplay.",
      "Interactive environment with physics-based triggers.",
      "Power-ups including camouflage, speed, and phasing."
    ],
    stack: ["Unity", "C#", "NavMesh", "Raycasting", "Physics"],
    codeUrl: "https://github.com/",
    snippet: `if (jumpBuffer > 0 && coyoteTime > 0) {
  ApplyJumpImpulse();
  jumpBuffer = 0f;
}`,
    media: [
      { type: "image", src: "Assets/hideGame/1.jpg", alt: "Seeker gameplay" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HideGame-1.mp4" },
      { type: "image", src: "Assets/hideGame/6.jpg", alt: "Camouflage" }
    ]
  },
  "unity-4": {
    title: "Hitman Go",
    description: "Turn-based strategy game with grid movement and predictable enemy patterns.",
    highlights: [
      "Node-based grid movement with step validation.",
      "Enemy rotation patterns and directional detection.",
      "Stealth kill and fail-state detection logic.",
      "Level design with predefined AI behaviors."
    ],
    stack: ["Unity", "C#", "Grid System", "Turn-Based Logic"],
    codeUrl: "https://github.com/",
    snippet: `if (isLockedOn) {
  cameraRig.Damping = Mathf.Lerp(6f, 2f, lockStrength);
}`,
    media: [
      { type: "image", src: "Assets/hitmanGame/1.jpg", alt: "Grid system" },
      { type: "image", src: "Assets/hitmanGame/2.jpg", alt: "Enemy logic" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HitmanGame.mp4" }
    ]
  },
  "unity-5": {
    title: "Perfect Hotel",
    description: "Simulation game managing customers, rooms, and services with automated AI systems.",
    highlights: [
      "Task-based customer lifecycle and action sequencing.",
      "Room state system with cleaning and reset logic.",
      "AI helpers for automation and efficiency.",
      "Multi-service systems including dining and parking."
    ],
    stack: ["Unity", "C#", "AI Systems", "Task Queues"],
    codeUrl: "https://github.com/",
    snippet: `speed = Mathf.MoveTowards(speed, targetSpeed, accel * dt);
if (isBoosting) speed += boostForce * dt;`,
    media: [
      { type: "image", src: "Assets/hotelGame/1.jpg", alt: "Reception" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HotelGame-1.mp4" },
      { type: "image", src: "Assets/hotelGame/3.jpg", alt: "Cleaner AI" }
    ]
  },
  "unity-6": {
    title: "Hunter Assassin 3D",
    description: "Stealth action game featuring enemy AI states, detection systems, and tactical eliminations.",
    highlights: [
      "Enemy AI with patrol, alert, hunt, and attack states.",
      "Stealth kill system with detection and alert propagation.",
      "Gem reward and collection system with dynamic spawning.",
      "Power-ups with cooldowns and visual feedback UI."
    ],
    stack: ["Unity", "C#", "NavMesh", "State Machines", "UI Systems"],
    codeUrl: "https://github.com/",
    snippet: `if (bufferedDash && canDash) {
  ExecuteDash();
  bufferedDash = false;
}`,
    media: [
      { type: "image", src: "Assets/hunterGame/1.jpg", alt: "Stealth gameplay" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/HunterGame-1.mp4" },
      { type: "image", src: "Assets/hunterGame/2.jpg", alt: "AI states" }
    ]
  },
  "unity-7": {
    title: "Kart Game",
    description: "Arcade-style racing game with combat mechanics, weapons, and physics-based interactions.",
    highlights: [
      "Physics-based kart movement with surface-dependent handling.",
      "Modular weapon system with multiple attack types.",
      "Collision-based combat and damage system.",
      "AI racers with dynamic targeting and behavior."
    ],
    stack: ["Unity", "C#", "Physics", "AI Systems"],
    codeUrl: "https://github.com/",
    snippet: `threat = Mathf.Clamp(threat + spawnWeight - decay * dt, 0f, 100f);`,
    media: [
      { type: "image", src: "Assets/kartGame/1.jpg", alt: "Track" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/KartGame-1.mp4" },
      { type: "image", src: "Assets/kartGame/3.jpg", alt: "Weapons" }
    ]
  },
  "unity-8": {
    title: "Shopping Mall",
    description: "Management simulation with resource systems, AI helpers, and customizable store environments.",
    highlights: [
      "Customer flow system with reception and store routing.",
      "Inventory and restocking system with stack mechanics.",
      "AI helpers for automated task execution.",
      "Store and environment customization system."
    ],
    stack: ["Unity", "C#", "AI Systems", "Resource Management"],
    codeUrl: "https://github.com/",
    snippet: `if (IsServer) {
  objectiveState.Value = ObjectiveState.Captured;
}`,
    media: [
      { type: "image", src: "Assets/mallGame/1.jpg", alt: "Reception" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/MallGame-1.mp4" },
      { type: "image", src: "Assets/mallGame/3.jpg", alt: "Inventory" }
    ]
  },
  "unity-9": {
    title: "Ski Resort",
    description: "Simulation game combining customer management, logistics, and interactive systems.",
    highlights: [
      "Customer lifecycle from entry to activity completion.",
      "Parking and toll system with queue management.",
      "Ski equipment distribution and restocking system.",
      "AI helpers and upgrade-based efficiency scaling."
    ],
    stack: ["Unity", "C#", "NavMesh", "Queue Systems"],
    codeUrl: "https://github.com/",
    snippet: `rng = new System.Random(seed);
nextRoom = roomPool[rng.Next(roomPool.Count)];`,
    media: [
      { type: "image", src: "Assets/skiGame/1.jpg", alt: "Reception" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/SkiGame-1.mp4" },
      { type: "image", src: "Assets/skiGame/3.jpg", alt: "Ski lift" }
    ]
  },
  "unity-10": {
    title: "Track & Field",
    description: "Arcade sports game focused on stamina management, timing, and obstacle-based challenges.",
    highlights: [
      "Tap-based speed control with stamina system.",
      "Hurdle jumping with timing and penalty logic.",
      "Dolly track movement system for linear progression.",
      "Dynamic animation and feedback system."
    ],
    stack: ["Unity", "C#", "Animation", "Input System"],
    codeUrl: "https://github.com/",
    snippet: `if (triggerA && triggerB && !doorOpen) {
  OpenDoor();
}`,
    media: [
      { type: "image", src: "Assets/trackGame/1.jpg", alt: "Running" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AllRecording/TrackGame-1.mp4" },
      { type: "image", src: "Assets/trackGame/4.jpg", alt: "Crowd" }
    ]
  },
  "unreal-1": {
    title: "Obstacle Assault",
    description: "Physics-based platformer featuring synchronized movement mechanics and high-stakes environmental navigation.",
    highlights: [
      "Custom physics constraints for realistic 'chained' player movement.",
      "Dynamic obstacle course with moving platforms and swinging pendulums.",
      "Asynchronous or local multiplayer synchronization logic.",
      "Punishing 'fall-reset' mechanics designed for high-tension gameplay."
    ],
    stack: ["Unreal Engine 5", "C++", "Blueprints", "EQS"],
    codeUrl: "https://github.com/",
    snippet: "joint.connectedBody = playerTwoRB; joint.linearLimit = new SoftJointLimit { limit = maxDistance };",
    media: [
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AssaultObstacle/Obstacle_1.mp4" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AssaultObstacle/Obstacle_2.mp4" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/AssaultObstacle/Obstacle_3.mp4" }
    ]
  },
  "unreal-2": {
    title: "Blaze In Blaze Out",
    description: "Fast-paced third-person shooter featuring a heat-managed arsenal and a sophisticated weighted AI reaction system.",
    highlights: [
      "Thermal-regulated primary laser with tactical heat-buildup mechanics.",
      "Versatile ability kit including infused grenade launchers, multi-directional volleys, and an auto-firing ultimate.",
      "Hierarchical AI system with Guard, Patrol, and Rusher archetypes for melee and ranged units.",
      "Prime Helix Boss encounter with complex attack patterns: Death Ray, Shockwave, and AOE Ground Smash.",
      "Weighted randomness for hit-react animations, providing organic combat feedback."
    ],
    stack: ["Unreal Engine", "Blueprints", "C++", "AI Navigation", "AI Perception"],
    codeUrl: "https://github.com/",
    snippet: "CurrentHeat = FMath::Clamp(CurrentHeat + HeatPerShot, 0.0f, MaxHeat); if (CurrentHeat >= MaxHeat) Overheat();",
    media: [
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/TwinBlastGame/ShooterGame_1.mp4" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/TwinBlastGame/ShooterGame_2.mp4" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/TwinBlastGame/ShooterGame_3.mp4" }
    ]
  },
  "unreal-3": {
    title: "Drone Strike",
    description: "Aerial combat shooter focused on trigger-based wave management and high-precision drone warfare.",
    highlights: [
      "Dynamic laser-based projectile system with custom collision detection.",
      "Trigger-box encounter logic for automated enemy squadron spawning.",
      "Aggressive bot AI designed for proximity-based engagement and suppression.",
      "Static Boss Drone featuring high-accuracy targeting and heavy damage scaling.",
      "Integrated VFX and SFX modules for immersive mechanical combat feedback."
    ],
    stack: ["Unreal Engine", "Blueprints", "AI Behaviour", "Niagara VFX"],
    codeUrl: "https://github.com/",
    snippet: "void ADrone::FireLaser() { FVector SpawnLoc = GetActorLocation(); FRotator SpawnRot = GetActorRotation(); SpawnProjectile(SpawnLoc, SpawnRot); }",
    media: [
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/DroneGame/Drone_1.mp4" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/DroneGame/Drone_2.mp4" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/DroneGame/Drone_3.mp4" }
    ]
  },
  "unreal-4": {
    title: "Shooter Sam",
    description: "Third-person shooter focused on core AI combat loops and behavior tree-driven engagement.",
    highlights: [
      "Modular Behavior Tree architecture for responsive enemy decision-making.",
      "Perception-based chase logic utilizing Unreal's AI Sensing component.",
      "Dynamic movement-to-fire transitions for seamless bot combat behavior.",
      "NavMesh-optimized pathfinding for persistent player tracking across complex terrain."
    ],
    stack: ["Unreal Engine", "Blueprints", "C++", "Behavior Trees", "AI Perception"],
    codeUrl: "https://github.com/",
    snippet: "BT_Enemy->RunBehaviorTree(EnemyBehaviorAsset); // Execute logic to find and chase player",
    media: [
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/ShooterSam/ShooterSam_1.mp4" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/ShooterSam/ShooterSam_2.mp4" }
    ]
  },
  "unreal-5": {
    title: "Neon Drift",
    description: "An experimental driving simulation exploring high-contrast aesthetics and high-latency handling models.",
    highlights: [
      "Intentional 'Stiff-Control' physics model to simulate weighted toy car mechanics.",
      "Extreme acceleration curves designed for rapid-response twitch gameplay.",
      "Custom post-processing stack featuring heavy Bloom and emissive Neon materials.",
      "Experimental physics-to-visual feedback loop to enhance the sense of speed despite rigid handling."
    ],
    stack: ["Unreal Engine"],
    codeUrl: "https://github.com/",
    snippet: "rb.AddForce(transform.forward * instantAcceleration, ForceMode.VelocityChange);",
    media: [
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/CarGame/Car_1.mp4" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/CarGame/Car_2.mp4" },
      { type: "video", src: "https://media.githubusercontent.com/media/krishna23rede/NewPortofolio/main/Assets/CarGame/Car_3.mp4" }
    ]
  }
};

let activeProject = null;
let mediaIndex = 0;
let activeMediaElement = null;
let modalCloseTimer = null;
let controlsHideTimer = null;

function setupScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !targets.length) {
    targets.forEach((node) => node.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, io) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      io.unobserve(entry.target);
    });
  }, { threshold: 0.14 });
  targets.forEach((node) => observer.observe(node));
}

function setupTileTilt() {
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
  const maxTilt = 5;
  projectTiles.forEach((tile) => {
    tile.addEventListener("mousemove", (event) => {
      const rect = tile.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      tile.style.transform = `translateY(-5px) scale(1.04) rotateX(${(-y * maxTilt).toFixed(2)}deg) rotateY(${(x * maxTilt).toFixed(2)}deg)`;
    });
    tile.addEventListener("mouseleave", () => {
      tile.style.transform = "";
    });
  });
}

function setupUnityShowMore() {
  if (!showMoreUnityButton) return;
  const hiddenTiles = document.querySelectorAll(".unity-grid .unity-extra");
  showMoreUnityButton.addEventListener("click", () => {
    hiddenTiles.forEach((tile, index) => {
      tile.style.display = "block";
      window.setTimeout(() => tile.classList.add("reveal-in"), index * 55);
    });
    showMoreUnityButton.remove();
  });
}

function setupVisiblePreviewPlayback() {
  const previews = document.querySelectorAll(".project-tile video");
  if (!previews.length) return;
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (!(video instanceof HTMLVideoElement)) return;
      if (entry.isIntersecting) {
        video.play().catch(() => { });
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.35 });

  previews.forEach((video) => observer.observe(video));
}

function setupCustomCursor() {
  if (!cursorDot || !cursorRing) return;
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  document.body.classList.add("custom-cursor-enabled");
  let mouseX = window.innerWidth * 0.5;
  let mouseY = window.innerHeight * 0.5;
  let ringX = mouseX;
  let ringY = mouseY;
  const lerp = 0.2;
  const clickableSelector = "a, button, input, textarea, select, [role='button']";
  const trailPoints = Array.from({ length: 9 }, () => ({ x: mouseX, y: mouseY }));
  const trailElements = trailPoints.map(() => {
    const dot = document.createElement("span");
    dot.className = "cursor-trail";
    document.body.append(dot);
    return dot;
  });

  function onMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
    document.body.classList.add("cursor-visible");
    document.body.classList.toggle("cursor-clickable", Boolean(event.target.closest(clickableSelector)));  
  }

  function animate() {
    ringX += (mouseX - ringX) * lerp;
    ringY += (mouseY - ringY) * lerp;
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
    trailPoints.forEach((point, index) => {
      const followStrength = 0.22 - index * 0.015;
      const prev = index === 0 ? { x: mouseX, y: mouseY } : trailPoints[index - 1];
      point.x += (prev.x - point.x) * Math.max(0.08, followStrength);
      point.y += (prev.y - point.y) * Math.max(0.08, followStrength);
      const scale = Math.max(0.3, 1 - index * 0.08);
      // Brighter, more visible trail for a clearer "cursor echo" effect.
      const alpha = Math.max(0.24, 0.68 - index * 0.04);
      trailElements[index].style.left = `${point.x}px`;
      trailElements[index].style.top = `${point.y}px`;
      trailElements[index].style.opacity = String(alpha);
      trailElements[index].style.transform = `translate(-50%, -50%) scale(${scale.toFixed(2)})`;
    });
    window.requestAnimationFrame(animate);
  }

  window.addEventListener("mousemove", onMove, { passive: true });
  document.addEventListener("mouseleave", () => {
    document.body.classList.remove("cursor-visible", "cursor-clickable");
  });
  animate();
}

function setupHeroParallaxAndCanvas() {
  if (!hero || !heroCanvas) return;
  const ctx = heroCanvas.getContext("2d");
  if (!ctx) return;

  const pointer = { x: 0, y: 0, active: false };
  let width = 0;
  let height = 0;
  const particles = Array.from({ length: 34 }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.0004,
    vy: (Math.random() - 0.5) * 0.0004,
    r: 1 + Math.random() * 2
  }));

  const resize = () => {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    heroCanvas.width = width;
    heroCanvas.height = height;
  };

  const updateParallax = (event) => {
    const rect = hero.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    const content = hero.querySelector(".hero-content");
    if (content) {
      content.style.transform = `translate3d(${(relX * 10).toFixed(2)}px, ${(relY * 10).toFixed(2)}px, 0)`;
    }
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
    pointer.active = true;
  };

  const render = () => {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > 1) p.vx *= -1;
      if (p.y < 0 || p.y > 1) p.vy *= -1;
      const px = p.x * width;
      const py = p.y * height;
      let highlightBoost = 0;
      if (pointer.active) {
        const dx = px - pointer.x;
        const dy = py - pointer.y;
        const d = Math.hypot(dx, dy);
        if (d < 100 && d > 0.01) {
          p.vx += (dx / d) * 0.00003;
          p.vy += (dy / d) * 0.00003;
        }
        if (d < 160) {
          highlightBoost = (160 - d) / 160;
        }
      }
      p.vx *= 0.996;
      p.vy *= 0.996;
      const glowRadius = p.r * (4.4 + highlightBoost * 2.2);
      const gradient = ctx.createRadialGradient(px, py, 0, px, py, glowRadius);
      gradient.addColorStop(0, `rgba(150, 215, 255, ${0.62 + highlightBoost * 0.32})`);
      gradient.addColorStop(1, "rgba(0, 255, 255, 0.26)");
      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(px, py, glowRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = `rgba(208, 240, 255, ${0.82 + highlightBoost * 0.18})`;
      ctx.arc(px, py, p.r + highlightBoost * 0.6, 0, Math.PI * 2);
      ctx.fill();
    });
    window.requestAnimationFrame(render);
  };

  resize();
  render();
  hero.addEventListener("mousemove", updateParallax, { passive: true });
  hero.addEventListener("mouseleave", () => {
    pointer.active = false;
    const content = hero.querySelector(".hero-content");
    if (content) content.style.transform = "";
  });
  window.addEventListener("resize", resize);
}

function setupVideoControls(video, shell) {
  const controls = document.createElement("div");
  controls.className = "video-controls";
  controls.innerHTML = `
    <input class="video-progress" type="range" min="0" max="1000" value="0" aria-label="Seek video">
    <div class="video-controls-row">
      <button class="video-btn video-play" type="button" aria-label="Play/pause"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l10-6.5z"/></svg></button>
      <span class="video-time">0:00 / 0:00</span>
      <span></span>
      <button class="video-btn video-mute" type="button" aria-label="Mute/unmute"><svg viewBox="0 0 24 24"><path d="M14 7.8v8.4L10.6 13H7v-2h3.6z"/></svg></button>
    </div>
  `;
  shell.append(controls);
  const progress = controls.querySelector(".video-progress");
  const play = controls.querySelector(".video-play");
  const mute = controls.querySelector(".video-mute");
  const time = controls.querySelector(".video-time");

  const setProgressFill = () => {
    const ratio = Number(progress.value) / 1000;
    progress.style.background = `linear-gradient(90deg, rgba(110,183,242,0.95) ${ratio * 100}%, rgba(51,80,106,0.18) ${ratio * 100}%)`;
  };

  const format = (secs) => {
    if (!Number.isFinite(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${String(s).padStart(2, "0")}`;
  };

  const sync = () => {
    if (Number.isFinite(video.duration) && video.duration > 0) {
      progress.value = String((video.currentTime / video.duration) * 1000);
      setProgressFill();
    }
    time.textContent = `${format(video.currentTime)} / ${format(video.duration)}`;
    play.innerHTML = video.paused
      ? '<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10-6.5z"/></svg>'
      : '<svg viewBox="0 0 24 24"><path d="M7 5h4v14H7zm6 0h4v14h-4z"/></svg>';
  };

  const show = () => {
    shell.classList.add("is-active-controls");
    window.clearTimeout(controlsHideTimer);
    if (!video.paused) {
      controlsHideTimer = window.setTimeout(() => shell.classList.remove("is-active-controls"), 2200);
    }
  };

  play.addEventListener("click", () => {
    if (video.paused) video.play().catch(() => { });
    else video.pause();
    show();
  });
  mute.addEventListener("click", () => { video.muted = !video.muted; show(); });
  progress.addEventListener("input", () => {
    if (!Number.isFinite(video.duration) || video.duration <= 0) return;
    video.currentTime = (Number(progress.value) / 1000) * video.duration;
    setProgressFill();
    show();
  });
  shell.addEventListener("mousemove", show, { passive: true });
  video.addEventListener("timeupdate", sync);
  video.addEventListener("loadedmetadata", sync);
  video.addEventListener("play", sync);
  video.addEventListener("pause", sync);
  show();
}

function renderMediaItem(item) {
  if (!carouselTrack) return;
  if (activeMediaElement && activeMediaElement.tagName === "VIDEO") activeMediaElement.pause();
  carouselTrack.classList.add("is-transitioning");

  window.setTimeout(() => {
    carouselTrack.innerHTML = "";
    if (item.type === "video") {
      const shell = document.createElement("div");
      shell.className = "video-shell";
      const video = document.createElement("video");
      video.className = "carousel-media";
      video.src = item.src;
      video.poster = item.poster || "";
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = "metadata";
      shell.append(video);
      carouselTrack.append(shell);
      setupVideoControls(video, shell);
      video.play().catch(() => { });
      activeMediaElement = video;
    } else {
      const image = document.createElement("img");
      image.className = "carousel-media";
      image.src = item.src;
      image.alt = item.alt || "Project media";
      image.loading = "lazy";
      image.decoding = "async";
      carouselTrack.append(image);
      activeMediaElement = image;
    }
    carouselTrack.classList.remove("is-transitioning");
  }, 90);
}

function renderProject(projectId) {
  const project = projectData[projectId];
  if (!project) return;
  modal?.classList.toggle("is-unreal-project", projectId.startsWith("unreal-"));
  activeProject = project;
  mediaIndex = 0;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalHighlights.innerHTML = "";
  project.highlights.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    modalHighlights.append(li);
  });
  modalStack.innerHTML = "";
  project.stack.forEach((item) => {
    const chip = document.createElement("span");
    chip.textContent = item;
    modalStack.append(chip);
  });
  renderMediaItem(project.media[mediaIndex]);
}

function showNextMedia(step) {
  if (!activeProject) return;
  mediaIndex = (mediaIndex + step + activeProject.media.length) % activeProject.media.length;
  renderMediaItem(activeProject.media[mediaIndex]);
}

function openModal(projectId) {
  if (!modal) return;
  renderProject(projectId);
  modal.classList.add("is-open");
  requestAnimationFrame(() => modal.classList.add("is-visible"));
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("is-visible");
  modal.classList.remove("is-unreal-project");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (activeMediaElement && activeMediaElement.tagName === "VIDEO") activeMediaElement.pause();
  activeMediaElement = null;
  modalCloseTimer = window.setTimeout(() => {
    modal.classList.remove("is-open");
    carouselTrack.innerHTML = "";
  }, 180);
}

projectTiles.forEach((tile) => tile.addEventListener("click", () => openModal(tile.dataset.projectId)));
closeButtons.forEach((button) => button.addEventListener("click", closeModal));
if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => showNextMedia(-1));
  nextButton.addEventListener("click", () => showNextMedia(1));
}
window.addEventListener("keydown", (event) => {
  if (!modal?.classList.contains("is-open")) return;
  if (event.key === "Escape") closeModal();
  if (event.key === "ArrowLeft") showNextMedia(-1);
  if (event.key === "ArrowRight") showNextMedia(1);
});

document.addEventListener("visibilitychange", () => {
  if (!activeMediaElement || activeMediaElement.tagName !== "VIDEO") return;
  if (document.hidden || !modal.classList.contains("is-open")) activeMediaElement.pause();
  else activeMediaElement.play().catch(() => { });
});

setupCustomCursor();
setupHeroParallaxAndCanvas();
setupTileTilt();
setupScrollReveal();
setupUnityShowMore();
setupVisiblePreviewPlayback();

