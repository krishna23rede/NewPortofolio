const appContent = document.querySelector('#app-content');
const headerRoot = document.querySelector('#site-header');
const modal = document.querySelector('#project-modal');
const modalTitle = document.querySelector('#modal-title');
const modalDescription = document.querySelector('.modal-description');
const modalHighlights = document.querySelector('.modal-highlights');
const modalStack = document.querySelector('.modal-stack');
const modalHighlightsTitle = document.querySelector('#modal-highlights-title');
const modalStackTitle = document.querySelector('#modal-stack-title');
const carouselTrack = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
const closeButtons = document.querySelectorAll('[data-close-modal]');
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

const projectData = Object.fromEntries(PORTFOLIO_DATA.projects.map((project) => [project.id, project]));
let activeProject = null;
let mediaIndex = 0;
let activeMediaElement = null;
let modalCloseTimer = null;
let controlsHideTimer = null;
let hero = null;
let heroCanvas = null;

function setSiteMeta() {
  document.title = PORTFOLIO_DATA.site.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute('content', PORTFOLIO_DATA.site.description);
}

function renderHeader() {
  if (!headerRoot) return;
  const { header } = PORTFOLIO_DATA;
  headerRoot.innerHTML = `
    <a class="logo" href="#home">${header.logo}</a>
    <nav>
      ${header.navLinks.map((link) => `<a href="${link.href}">${link.name}</a>`).join('')}
      <a class="resume-btn" href="${header.resume.href}" download>${header.resume.label}</a>
    </nav>
  `;
}

function renderHero() {
  const { hero: heroData } = PORTFOLIO_DATA;
  return `
    <section id="home" class="hero">
      <canvas class="hero-canvas" aria-hidden="true"></canvas>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>${heroData.name}</h1>
        <p class="designation">${heroData.designation}</p>
        <p class="tagline">${heroData.taglineLines.join('<br>')}</p>
        <a class="hero-cta" href="${heroData.cta.href}">${heroData.cta.label}</a>
      </div>
    </section>
  `;
}

function renderSkills() {
  const { sections, techStack } = PORTFOLIO_DATA;
  return `
    <section class="section tech-stack" id="${sections.techStack.id}">
      <div class="section-heading reveal">
        <p class="eyebrow">${sections.techStack.eyebrow}</p>
        <h2>${sections.techStack.title}</h2>
      </div>
      <div class="stack-grid reveal">
        ${techStack.map((item) => `<span>${item}</span>`).join('')}
      </div>
    </section>
  `;
}

function renderProjectTile(project, extraClass) {
  return `
    <button class="project-tile ${extraClass}" type="button" data-project-id="${project.id}" ${extraClass ? 'style="display:none"' : ''}>
      <video autoplay muted loop playsinline preload="metadata" poster="${project.poster}">
        <source src="${project.video}" type="video/mp4">
      </video>
      <span>${project.title}</span>
    </button>
  `;
}

function renderProjects() {
  const { sections, projects } = PORTFOLIO_DATA;
  return `
    <section id="${sections.projects.id}" class="section">
      <div class="section-heading reveal">
        <p class="eyebrow">${sections.projects.eyebrow}</p>
        <h2>${sections.projects.title}</h2>
      </div>
      ${sections.projects.categories
        .map((category) => {
          const categoryProjects = projects.filter((project) => project.category === category.id);
          const gridClass = `${category.id.toLowerCase()}-grid`;
          const tiles = categoryProjects
            .map((project, index) => renderProjectTile(project, category.limit !== undefined && index >= category.limit ? 'unity-extra' : ''))
            .join('');
          const showMore =
            category.limit !== undefined && categoryProjects.length > category.limit
              ? `<div class="project-more-wrap"><button class="show-more-btn" type="button" data-show-more="${category.id.toLowerCase()}">${category.showMoreBtn}</button></div>`
              : '';
          return `
            <div class="project-category reveal">
              <h3>${category.title}</h3>
              <div class="tile-grid ${gridClass}">
                ${tiles}
              </div>
              ${showMore}
            </div>
          `;
        })
        .join('')}
    </section>
  `;
}

function renderAbout() {
  const { sections, about } = PORTFOLIO_DATA;
  return `
    <section id="${sections.about.id}" class="section">
      <div class="section-heading reveal">
        <p class="eyebrow">${sections.about.eyebrow}</p>
        <h2>${sections.about.title}</h2>
      </div>
      <div class="about-stack">
        <article class="about-block reveal">
          <h3>${sections.about.blocks.introduction}</h3>
          <p>${about.introduction}</p>
        </article>
        <article class="about-block reveal">
          <h3>${sections.about.blocks.skills}</h3>
          <ul>
            ${about.skills.map((skill) => `<li><strong>${skill.category}:</strong> ${skill.items}</li>`).join('')}
          </ul>
        </article>
        <article class="about-block reveal">
          <h3>${sections.about.blocks.experience}</h3>
          ${about.experience
            .map(
              (exp) => `
                <h4>${exp.title}</h4>
                <ul>${exp.points.map((point) => `<li>${point}</li>`).join('')}</ul>
              `
            )
            .join('')}
        </article>
        <article class="about-block reveal">
          <h3>${sections.about.blocks.additionalSkills}</h3>
          <ul>${about.additionalSkills.map((skill) => `<li>${skill}</li>`).join('')}</ul>
        </article>
      </div>
    </section>
  `;
}

function renderContact() {
  const { sections, contact } = PORTFOLIO_DATA;
  return `
    <section id="${sections.contact.id}" class="section contact reveal">
      <div class="section-heading">
        <p class="eyebrow">${sections.contact.eyebrow}</p>
        <h2>${sections.contact.title}</h2>
      </div>
      <p>${contact.description}</p>
      <div class="contact-links">
        ${contact.links
          .map(
            (link) =>
              `<a href="${link.href}"${link.target ? ` target="${link.target}"` : ''}${link.rel ? ` rel="${link.rel}"` : ''}>${link.label}</a>`
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderPage() {
  if (!appContent) return;
  appContent.innerHTML = [renderHero(), renderSkills(), renderProjects(), renderAbout(), renderContact()].join('');
  hero = document.querySelector('.hero');
  heroCanvas = document.querySelector('.hero-canvas');
  modalHighlightsTitle.textContent = PORTFOLIO_DATA.modal.technicalHighlightsTitle;
  modalStackTitle.textContent = PORTFOLIO_DATA.modal.techStackTitle;
}

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
  const projectTiles = document.querySelectorAll('.project-tile');
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
  const showMoreUnityButton = document.querySelector("[data-show-more='unity']");
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
  project.tech.forEach((item) => {
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

function bindProjectTileEvents() {
  const projectTiles = document.querySelectorAll('.project-tile');
  projectTiles.forEach((tile) => tile.addEventListener('click', () => openModal(tile.dataset.projectId)));
}

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

setSiteMeta();
renderHeader();
renderPage();
bindProjectTileEvents();
setupCustomCursor();
setupHeroParallaxAndCanvas();
setupTileTilt();
setupScrollReveal();
setupUnityShowMore();
setupVisiblePreviewPlayback();

