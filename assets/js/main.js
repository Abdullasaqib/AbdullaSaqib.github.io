(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGsap = typeof window.gsap !== "undefined";
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  document.getElementById("year").textContent = new Date().getFullYear();

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (!location.hash) window.scrollTo(0, 0);

  // Load Drive videos only when the showreel is near the viewport
  var reelFrames = document.querySelectorAll("iframe[data-src]");
  var reelSection = document.getElementById("showreel");
  if (reelSection && "IntersectionObserver" in window) {
    var reelObs = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      reelFrames.forEach(function (f) { f.src = f.dataset.src; });
      reelObs.disconnect();
    }, { rootMargin: "600px 0px" });
    reelObs.observe(reelSection);
  } else {
    reelFrames.forEach(function (f) { f.src = f.dataset.src; });
  }

  // Marquees: duplicate each track so the loop is seamless
  document.querySelectorAll(".marquee").forEach(function (m) {
    var track = m.querySelector(".marquee__track");
    if (track) m.appendChild(track.cloneNode(true)).setAttribute("aria-hidden", "true");
  });

  if (!hasGsap || reduceMotion) {
    document.documentElement.classList.add("no-motion");
    var pre = document.getElementById("preloader");
    if (pre) pre.remove();
    document.querySelectorAll("[data-count]").forEach(function (el) {
      el.textContent = el.dataset.count + (el.dataset.suffix || "");
    });
    initSwipers();
    initNav(null);
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  document.body.classList.add("is-loading");

  // Smooth scroll (Lenis)
  var lenis = null;
  if (typeof window.Lenis !== "undefined") {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    lenis.stop();
  }

  initNav(lenis);
  initCursor();
  initSwipers();
  initTilt();

  // Preloader (with a hard time limit so slow devices never get stuck on it)
  var counter = { v: 0 };
  var preCount = document.getElementById("preCount");
  var preBar = document.getElementById("preBar");
  var started = false;
  var safety = setTimeout(intro, 2500);
  gsap.timeline({ onComplete: intro })
    .to(counter, {
      v: 100, duration: 1.2, ease: "power2.inOut",
      onUpdate: function () {
        preCount.textContent = Math.round(counter.v);
        preBar.style.width = counter.v + "%";
      }
    })
    .to("#preloader", { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "+=0.15");

  function intro() {
    if (started) return;
    started = true;
    clearTimeout(safety);
    var pre = document.getElementById("preloader");
    if (pre) pre.remove();
    initNeural();
    initOrb();
    document.body.classList.remove("is-loading");
    if (lenis) lenis.start();

    var tl = gsap.timeline();
    tl.from(".hero__title .line-in", { yPercent: 110, rotate: 4, stagger: 0.15, duration: 1.1, ease: "power4.out" })
      .from(".eyebrow", { y: 20, opacity: 0, duration: 0.6 }, 0.1)
      .from(".hero__roles, .hero__lead, .hero__cta", { y: 30, opacity: 0, stagger: 0.12, duration: 0.8, ease: "power3.out" }, 0.5)
      .from(".hero__orb, .orbit, .hero__mono", { scale: 0.6, opacity: 0, stagger: 0.1, duration: 1.4, ease: "power3.out" }, 0.2)
      .from(".chip", { scale: 0.6, opacity: 0, stagger: 0.15, duration: 0.6, ease: "back.out(2)" }, 0.9);

    gsap.to(".chip--a", { y: -14, duration: 2.6, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".chip--b", { y: 12, duration: 3.1, repeat: -1, yoyo: true, ease: "sine.inOut" });
    gsap.to(".chip--c", { y: -10, duration: 2.3, repeat: -1, yoyo: true, ease: "sine.inOut" });

    rotateRoles();
    scrollAnimations();
  }

  function rotateRoles() {
    var roles = gsap.utils.toArray(".role");
    if (roles.length < 2) return;
    gsap.set(roles, { yPercent: 100, opacity: 0 });
    gsap.set(roles[0], { yPercent: 0, opacity: 1 });
    var i = 0;
    setInterval(function () {
      var cur = roles[i];
      i = (i + 1) % roles.length;
      var next = roles[i];
      gsap.to(cur, { yPercent: -100, opacity: 0, duration: 0.6, ease: "power3.in" });
      gsap.fromTo(next, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.6, delay: 0.25, ease: "power3.out" });
    }, 2600);
  }

  function scrollAnimations() {
    // Section titles: letters rise in
    document.querySelectorAll("[data-split]").forEach(function (el) {
      if (typeof window.SplitType === "undefined") return;
      var s = new SplitType(el, { types: "words,chars" });
      gsap.from(s.chars, {
        yPercent: 100, opacity: 0, stagger: 0.02, duration: 0.8, ease: "power4.out",
        scrollTrigger: { trigger: el, start: "top 85%" }
      });
    });

    // Generic reveals
    gsap.utils.toArray(".reveal").forEach(function (el) {
      gsap.to(el, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" }
      });
    });

    // Counters
    document.querySelectorAll("[data-count]").forEach(function (el) {
      var target = +el.dataset.count;
      var suffix = el.dataset.suffix || "";
      var o = { v: 0 };
      gsap.to(o, {
        v: target, duration: 1.8, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
        onUpdate: function () { el.textContent = Math.round(o.v) + suffix; }
      });
    });

    // Hero parallax
    gsap.to(".hero__visual", { yPercent: 18, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    gsap.to(".hero__text", { yPercent: -10, opacity: 0.3, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

    // Big outlined line moves with scroll
    gsap.fromTo(".bigline__track", { xPercent: 0 }, { xPercent: -35, ease: "none", scrollTrigger: { trigger: ".bigline", start: "top bottom", end: "bottom top", scrub: true } });

    // Pinned horizontal "What I build" on wider screens
    var mm = gsap.matchMedia();
    mm.add("(min-width: 961px)", function () {
      var track = document.querySelector(".build__track");
      var dist = function () { return track.scrollWidth - window.innerWidth; };
      gsap.to(track, {
        x: function () { return -dist(); },
        ease: "none",
        scrollTrigger: {
          trigger: ".build__pin", start: "center center", end: function () { return "+=" + dist(); },
          pin: true, scrub: 1, invalidateOnRefresh: true
        }
      });
    });
    mm.add("(max-width: 960px)", function () {
      document.querySelector(".build__pin").style.overflowX = "auto";
    });

    // Timeline fill
    gsap.to("#timelineFill", {
      height: "100%", ease: "none",
      scrollTrigger: { trigger: ".timeline", start: "top 70%", end: "bottom 70%", scrub: true }
    });
    gsap.utils.toArray(".job__dot").forEach(function (d) {
      gsap.from(d, { scale: 0, duration: 0.5, ease: "back.out(3)", scrollTrigger: { trigger: d, start: "top 80%" } });
    });

    // Marquee strip skews with scroll velocity
    var skewTo = gsap.quickTo(".marquee-wrap .marquee__track", "skewX", { duration: 0.4, ease: "power3" });
    ScrollTrigger.create({
      onUpdate: function (self) { skewTo(gsap.utils.clamp(-12, 12, self.getVelocity() / -250)); }
    });

    ScrollTrigger.refresh();
  }

  function initNav(lenis) {
    var nav = document.getElementById("nav");
    var burger = document.getElementById("burger");
    burger.addEventListener("click", function () { nav.classList.toggle("is-open"); });

    document.querySelectorAll("[data-scroll]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        nav.classList.remove("is-open");
        if (lenis) lenis.scrollTo(target, { offset: id === "#top" ? 0 : -80, duration: 1.4 });
        else target.scrollIntoView({ behavior: "smooth" });
      });
    });

    var last = 0;
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      nav.classList.toggle("is-hidden", y > last && y > 300 && !nav.classList.contains("is-open"));
      last = y;
    }, { passive: true });
  }

  function initCursor() {
    if (!finePointer) return;
    var c = document.getElementById("cursor");
    var d = document.getElementById("cursorDot");
    var xTo = gsap.quickTo(c, "x", { duration: 0.45, ease: "power3" });
    var yTo = gsap.quickTo(c, "y", { duration: 0.45, ease: "power3" });
    window.addEventListener("mousemove", function (e) {
      xTo(e.clientX); yTo(e.clientY);
      gsap.set(d, { x: e.clientX, y: e.clientY });
    });
    document.querySelectorAll("a, button, .tilt").forEach(function (el) {
      el.addEventListener("mouseenter", function () { c.classList.add("is-hover"); });
      el.addEventListener("mouseleave", function () { c.classList.remove("is-hover"); });
    });

    // Magnetic buttons
    document.querySelectorAll(".magnetic").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.4, duration: 0.4, ease: "power3.out" });
      });
      el.addEventListener("mouseleave", function () {
        gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
      });
    });
  }

  function initTilt() {
    if (!finePointer || typeof window.VanillaTilt === "undefined") return;
    VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 7, speed: 600, glare: true, "max-glare": 0.12, scale: 1.01 });
  }

  function initSwipers() {
    if (typeof window.Swiper === "undefined") return;
    new Swiper(".projects-swiper", {
      slidesPerView: "auto",
      spaceBetween: 24,
      grabCursor: true,
      loop: true,
      speed: 700,
      autoplay: reduceMotion ? false : { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true },
      navigation: { prevEl: "#projPrev", nextEl: "#projNext" },
      pagination: { el: ".projects-pagination", clickable: true }
    });
    new Swiper(".reel-swiper", {
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: "auto",
      initialSlide: 1,
      grabCursor: true,
      coverflowEffect: { rotate: 18, stretch: 0, depth: 220, modifier: 1, slideShadows: true },
      pagination: { el: ".reel-pagination", clickable: true }
    });
  }

  // Rotating 3D neural sphere in the hero
  function initOrb() {
    var canvas = document.getElementById("orb");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var size, R, pts = [], links = [];
    var N = 140;
    var rotX = 0.3, rotY = 0, targetX = 0.3, targetY = 0, spin = 0.0035;
    var visible = true;

    // Even points on a sphere (Fibonacci lattice)
    var golden = Math.PI * (3 - Math.sqrt(5));
    for (var i = 0; i < N; i++) {
      var y = 1 - (i / (N - 1)) * 2;
      var r = Math.sqrt(1 - y * y);
      var t = golden * i;
      pts.push({ x: Math.cos(t) * r, y: y, z: Math.sin(t) * r, p: Math.random() * Math.PI * 2 });
    }
    for (var a = 0; a < N; a++) {
      for (var b = a + 1; b < N; b++) {
        var dx = pts[a].x - pts[b].x, dy = pts[a].y - pts[b].y, dz = pts[a].z - pts[b].z;
        if (dx * dx + dy * dy + dz * dz < 0.09) links.push([a, b]);
      }
    }

    function resize() {
      size = canvas.clientWidth;
      canvas.width = size * dpr; canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      R = size * 0.42;
    }
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", function (e) {
      targetY = (e.clientX / window.innerWidth - 0.5) * 1.2;
      targetX = 0.3 + (e.clientY / window.innerHeight - 0.5) * 0.8;
    });
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(canvas);

    var proj = new Array(N);
    var time = 0;
    function frame() {
      requestAnimationFrame(frame);
      if (!visible) return;
      time += 0.016;
      rotX += (targetX - rotX) * 0.05;
      rotY += spin + (targetY - rotY) * 0.02;
      var cx = size / 2, cy = size / 2;
      var sx = Math.sin(rotX), cxr = Math.cos(rotX), sy = Math.sin(rotY), cyr = Math.cos(rotY);
      for (var i = 0; i < N; i++) {
        var p = pts[i];
        var breathe = 1 + Math.sin(time * 1.5 + p.p) * 0.03;
        var x1 = p.x * cyr - p.z * sy, z1 = p.x * sy + p.z * cyr;
        var y1 = p.y * cxr - z1 * sx, z2 = p.y * sx + z1 * cxr;
        var persp = 1.8 / (2.6 - z2);
        proj[i] = { x: cx + x1 * R * breathe * persp, y: cy + y1 * R * breathe * persp, z: z2 };
      }
      ctx.clearRect(0, 0, size, size);
      ctx.lineWidth = 0.8;
      for (var k = 0; k < links.length; k++) {
        var A = proj[links[k][0]], B = proj[links[k][1]];
        var depth = (A.z + B.z + 2) / 4;
        ctx.strokeStyle = "rgba(" + Math.round(34 + 105 * (1 - depth)) + "," + Math.round(211 - 119 * (1 - depth)) + ",246," + (0.08 + depth * 0.45) + ")";
        ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke();
      }
      // Signal pulses travelling along a few links
      for (var s = 0; s < 6; s++) {
        var L = links[(s * 37 + Math.floor(time * 0.5) * 11) % links.length];
        var P = proj[L[0]], Q = proj[L[1]], f = (time * 0.9 + s * 0.17) % 1;
        if ((P.z + Q.z) / 2 < -0.2) continue;
        ctx.fillStyle = "#f472b6";
        ctx.beginPath(); ctx.arc(P.x + (Q.x - P.x) * f, P.y + (Q.y - P.y) * f, 2.4, 0, Math.PI * 2); ctx.fill();
      }
      for (var j = 0; j < N; j++) {
        var q = proj[j], d = (q.z + 1) / 2;
        ctx.fillStyle = d > 0.55 ? "rgba(34,211,238," + (0.4 + d * 0.6) + ")" : "rgba(139,92,246," + (0.25 + d * 0.5) + ")";
        ctx.beginPath(); ctx.arc(q.x, q.y, 0.8 + d * 2.2, 0, Math.PI * 2); ctx.fill();
      }
    }
    frame();
  }

  // Neural network background
  function initNeural() {
    var canvas = document.getElementById("neural");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w, h, nodes = [];
    var mouse = { x: -9999, y: -9999 };
    var visible = true;

    function resize() {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.round(Math.min(w < 700 ? 40 : 90, (w * h) / 16000));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35, r: Math.random() * 1.6 + 0.6 });
      }
    }
    resize();
    window.addEventListener("resize", resize);
    canvas.parentElement.addEventListener("mousemove", function (e) {
      var r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    });
    canvas.parentElement.addEventListener("mouseleave", function () { mouse.x = mouse.y = -9999; });
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(canvas);

    var maxDist = 140;
    function frame() {
      requestAnimationFrame(frame);
      if (!visible) return;
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        var mdx = mouse.x - n.x, mdy = mouse.y - n.y, md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 180) { n.x += mdx * 0.004; n.y += mdy * 0.004; }
        for (var j = i + 1; j < nodes.length; j++) {
          var m = nodes[j], dx = n.x - m.x, dy = n.y - m.y, dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.strokeStyle = "rgba(139,92,246," + (1 - dist / maxDist) * 0.35 + ")";
            ctx.lineWidth = 0.7;
            ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(m.x, m.y); ctx.stroke();
          }
        }
        if (md < 180) {
          ctx.strokeStyle = "rgba(34,211,238," + (1 - md / 180) * 0.6 + ")";
          ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.fillStyle = md < 180 ? "#22d3ee" : "rgba(232,237,245,0.7)";
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      }
    }
    frame();
  }
})();
