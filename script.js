const modal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector(".modal-description");
const modalSystems = document.querySelector(".modal-systems");
const modalStack = document.querySelector(".modal-stack");
const carouselTrack = document.querySelector(".carousel-track");
const prevButton = document.querySelector(".carousel-btn.prev");
const nextButton = document.querySelector(".carousel-btn.next");
const closeButtons = document.querySelectorAll("[data-close-modal]");
const projectTiles = document.querySelectorAll(".project-tile");
const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");
const aboutTabs = document.querySelectorAll(".about-tab");
const aboutPanels = document.querySelectorAll(".about-panel");

// const projectData = {
const projectData = {
  "unity-1": {
    title: "Rift Protocol",
    description: "Sci-fi action prototype focused on fast traversal and layered combat encounters.",
    systems: [
      "Built movement controller with dash, ledge vault, and momentum conservation.",
      "Implemented enemy finite-state AI with patrol, chase, and flank logic.",
      "Designed modular weapon recoil and hit reaction system."
    ],
    stack: "Tech Stack: Unity, C#, Cinemachine, Scriptable Objects",
    media: [
      { type: "image", src: "https://picsum.photos/800/600?random=7", alt: "Rift Protocol gameplay screenshot" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://picsum.photos/800/600?random=8" },
      { type: "image", src: "https://picsum.photos/800/600?random=9", alt: "Rift Protocol combat scene" }
    ]
  },
  "unity-2": {
    title: "Warden Zero",
    description: "Tactical arena experience with heavy emphasis on readable combat and timing windows.",
    systems: [
      "Built target selection and threat scoring for wave pacing.",
      "Implemented animation event driven combo system.",
      "Added lightweight physics reactions for impact readability."
    ],
    stack: "Tech Stack: Unity, C#, DOTween, Timeline",
    media: [
      { type: "image", src: "https://picsum.photos/800/600?random=10", alt: "Warden Zero arena shot" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://picsum.photos/800/600?random=11" }
    ]
  },
  "unity-3": {
    title: "Arc Grid",
    description: "Stylized platformer prototype blending puzzle routing with fast movement mechanics.",
    systems: [
      "Implemented grid powered puzzle state machine.",
      "Built jump buffering and coyote-time for precision platforming.",
      "Integrated checkpoint and respawn flow with replay hooks."
    ],
    stack: "Tech Stack: Unity, C#, URP, Addressables",
    media: [
      { type: "image", src: "https://picsum.photos/800/600?random=12", alt: "Arc Grid environment" },
      { type: "image", src: "https://picsum.photos/800/600?random=13", alt: "Arc Grid puzzle flow" }
    ]
  },
  "unreal-1": {
    title: "Neon Siege",
    description: "Co-op action shooter prototype designed around emergent ability interactions.",
    systems: [
      "Built ability cooldown orchestration with combo triggers.",
      "Implemented AI behavior trees for coordinated enemy pressure.",
      "Optimized projectile pooling and hit event dispatch."
    ],
    stack: "Tech Stack: Unreal Engine, C++, GAS, Behavior Trees",
    media: [
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://picsum.photos/800/600?random=14" },
      { type: "image", src: "https://picsum.photos/800/600?random=15", alt: "Neon Siege encounter" }
    ]
  },
  "unreal-2": {
    title: "Vaultline",
    description: "Stealth-action vertical slice with systemic AI investigation and traversal options.",
    systems: [
      "Implemented perception based suspicion and alert propagation.",
      "Created traversal blueprint set for climb, vault, and slide actions.",
      "Designed mission scripting events for branching outcomes."
    ],
    stack: "Tech Stack: Unreal Engine 5, C++, Blueprints, EQS",
    media: [
      { type: "image", src: "https://picsum.photos/800/600?random=16", alt: "Vaultline stealth scene" },
      { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://picsum.photos/800/600?random=17" }
    ]
  },
  "unreal-3": {
    title: "Drifter Sector",
    description: "Third-person survival prototype balancing scavenging systems and dynamic threats.",
    systems: [
      "Built weather-driven AI aggression modifiers.",
      "Implemented inventory weight affecting movement and stamina systems.",
      "Added procedural event spawner for encounter variation."
    ],
    stack: "Tech Stack: Unreal Engine, C++, Niagara, Data Assets",
    media: [
      { type: "image", src: "https://picsum.photos/800/600?random=18", alt: "Drifter Sector environment" },
      { type: "image", src: "https://picsum.photos/800/600?random=19", alt: "Drifter Sector combat" }
    ]
  }
};

let activeProject = null;
let mediaIndex = 0;
let activeMediaElement = null;
let modalCloseTimer = null;

function setupAboutPanels() {
  if (!aboutTabs.length || !aboutPanels.length) {
    return;
  }

  const activatePanel = (tab) => {
    const targetPanelId = tab.getAttribute("aria-controls");
    if (!targetPanelId) {
      return;
    }

    aboutTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    aboutPanels.forEach((panel) => {
      const isActive = panel.id === targetPanelId;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  };

  aboutTabs.forEach((tab) => {
    tab.addEventListener("click", () => activatePanel(tab));
  });
}

function setupScrollReveal() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealTargets = document.querySelectorAll(
    ".section-heading, .project-category, .project-tile, .about-tabs, .about-panel, .contact p, .contact-links"
  );

  if (!revealTargets.length) {
    return;
  }

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  revealTargets.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.transitionDelay = `${Math.min(index % 6, 5) * 45}ms`;
  });

  const observer = new IntersectionObserver(
    (entries, io) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealTargets.forEach((element) => observer.observe(element));
}

function setupTileTilt() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarsePointer = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  if (reducedMotion || coarsePointer) {
    return;
  }

  const maxTilt = 6;
  const lift = 5;

  projectTiles.forEach((tile) => {
    tile.addEventListener("mousemove", (event) => {
      const rect = tile.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((offsetX - centerX) / centerX) * maxTilt;
      const rotateX = -((offsetY - centerY) / centerY) * maxTilt;

      tile.style.transform = `perspective(900px) translateY(-${lift}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    });

    tile.addEventListener("mouseleave", () => {
      tile.style.transform = "perspective(900px) translateY(0) rotateX(0deg) rotateY(0deg)";
      window.requestAnimationFrame(() => {
        tile.style.transform = "";
      });
    });
  });
}

function setupCustomCursor() {
  if (!cursorDot || !cursorRing) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarsePointer = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  if (reducedMotion || coarsePointer) {
    return;
  }

  document.body.classList.add("custom-cursor-enabled");

  let mouseX = window.innerWidth * 0.5;
  let mouseY = window.innerHeight * 0.5;
  let ringX = mouseX;
  let ringY = mouseY;
  const lerpFactor = 0.22;

  const clickableSelector = "a, button, [role='button'], input, textarea, select, label";

  function markClickableState(target) {
    const isTile = Boolean(target?.closest(".project-tile"));
    const isClickable = Boolean(target?.closest(clickableSelector));
    document.body.classList.toggle("cursor-tile-hover", isTile);
    document.body.classList.toggle("cursor-clickable", isClickable);
  }

  function onMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
    document.body.classList.add("cursor-visible");
    markClickableState(event.target);
  }

  function animateRing() {
    ringX += (mouseX - ringX) * lerpFactor;
    ringY += (mouseY - ringY) * lerpFactor;
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
    window.requestAnimationFrame(animateRing);
  }

  window.addEventListener("mousemove", onMouseMove, { passive: true });
  document.addEventListener("mouseleave", () => {
    document.body.classList.remove("cursor-visible", "cursor-clickable", "cursor-tile-hover");
  });
  document.addEventListener("mouseenter", () => {
    document.body.classList.add("cursor-visible");
  });
  animateRing();
}

function renderMediaItem(item) {
  if (!carouselTrack) {
    return;
  }

  if (activeMediaElement && activeMediaElement.tagName === "VIDEO") {
    activeMediaElement.pause();
  }

  carouselTrack.classList.add("is-transitioning");

  const mountMedia = () => {
    carouselTrack.innerHTML = "";

    if (item.type === "video") {
      const video = document.createElement("video");
      video.dataset.src = item.src;
      video.poster = item.poster || "";
      video.controls = true;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = "none";
      video.className = "carousel-media";
      carouselTrack.append(video);

      video.src = video.dataset.src;
      video.load();
      video.play().catch(() => {
        // Autoplay can fail in some environments.
      });

      activeMediaElement = video;
      carouselTrack.classList.remove("is-transitioning");
      return;
    }

    const image = document.createElement("img");
    image.dataset.src = item.src;
    image.alt = item.alt || "Project media";
    image.loading = "lazy";
    image.decoding = "async";
    image.className = "carousel-media";
    carouselTrack.append(image);

    image.src = image.dataset.src;
    activeMediaElement = image;
    carouselTrack.classList.remove("is-transitioning");
  };

  window.setTimeout(mountMedia, 90);
}

function renderProject(projectId) {
  const project = projectData[projectId];
  if (!project || !modalTitle || !modalDescription || !modalSystems || !modalStack) {
    return;
  }

  activeProject = project;
  mediaIndex = 0;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  const normalizedStack = project.stack.replace(/^Tech Stack:\s*/i, "");
  modalStack.innerHTML = `<strong>Tech Stack</strong><br>${normalizedStack}`;
  modalSystems.innerHTML = "";

  project.systems.forEach((system) => {
    const li = document.createElement("li");
    li.textContent = system;
    modalSystems.append(li);
  });

  renderMediaItem(project.media[mediaIndex]);
}

function showNextMedia(step) {
  if (!activeProject) {
    return;
  }

  mediaIndex = (mediaIndex + step + activeProject.media.length) % activeProject.media.length;
  renderMediaItem(activeProject.media[mediaIndex]);
}

function openModal(projectId) {
  if (!modal) {
    return;
  }

  window.clearTimeout(modalCloseTimer);
  renderProject(projectId);
  modal.classList.add("is-open");
  window.requestAnimationFrame(() => {
    modal.classList.add("is-visible");
  });
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal) {
    return;
  }

  modal.classList.remove("is-visible");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (activeMediaElement && activeMediaElement.tagName === "VIDEO") {
    activeMediaElement.pause();
  }
  activeMediaElement = null;
  modalCloseTimer = window.setTimeout(() => {
    modal.classList.remove("is-open");
    if (carouselTrack) {
      carouselTrack.innerHTML = "";
      carouselTrack.classList.remove("is-transitioning");
    }
  }, 180);
}

projectTiles.forEach((tile) => {
  tile.addEventListener("click", () => openModal(tile.dataset.projectId));
});

closeButtons.forEach((button) => button.addEventListener("click", closeModal));

if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => showNextMedia(-1));
  nextButton.addEventListener("click", () => showNextMedia(1));
}

document.addEventListener("visibilitychange", () => {
  if (!activeMediaElement || activeMediaElement.tagName !== "VIDEO") {
    return;
  }

  const modalOpen = Boolean(modal && modal.classList.contains("is-open"));
  if (document.hidden || !modalOpen) {
    activeMediaElement.pause();
    return;
  }

  activeMediaElement.play().catch(() => {
    // Resume can fail due to browser policy.
  });
});

window.addEventListener("keydown", (event) => {
  if (!modal || !modal.classList.contains("is-open")) {
    return;
  }

  if (event.key === "Escape") {
    closeModal();
  } else if (event.key === "ArrowLeft") {
    showNextMedia(-1);
  } else if (event.key === "ArrowRight") {
    showNextMedia(1);
  }
});

setupCustomCursor();
setupTileTilt();
setupAboutPanels();
setupScrollReveal();
