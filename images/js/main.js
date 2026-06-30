/* ===========================
   FORK THROUGH HISTORY
   Main JavaScript
   =========================== */

// ===========================
// PAGE TRANSITION
// ===========================
const overlay = document.getElementById('page-transition');

function navigateTo(url) {
  if (!overlay) { window.location.href = url; return; }
  overlay.classList.add('active');
  setTimeout(() => { window.location.href = url; }, 350);
}

// Intercept all internal links
document.addEventListener('DOMContentLoaded', () => {
  // Page in animation
  if (overlay) {
    overlay.style.opacity = '1';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.style.transition = 'opacity 0.45s ease';
        overlay.style.opacity = '0';
      });
    });
  }

  // Hook links
  document.querySelectorAll('a[data-nav]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(link.getAttribute('href'));
    });
  });

  // ===========================
  // PARALLAX
  // ===========================
  const parallaxImages = document.querySelectorAll('.parallax-img');

  if (parallaxImages.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;

    function updateParallax() {
      parallaxImages.forEach(img => {
        const wrap = img.closest('.parallax-wrap');
        if (!wrap) return;
        const rect = wrap.getBoundingClientRect();
        const windowH = window.innerHeight;
        // Only animate when in viewport
        if (rect.bottom < 0 || rect.top > windowH) return;
        const progress = (windowH - rect.top) / (windowH + rect.height);
        const shift = (progress - 0.5) * 60; // -30 to +30 px
        img.style.transform = `translateY(${shift}px)`;
      });
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });

    updateParallax();
  }

  // ===========================
  // INGREDIENT CHECKBOXES
  // ===========================
  document.querySelectorAll('.ingredient-check').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const li = checkbox.closest('li');
      if (li) li.classList.toggle('checked', checkbox.checked);
    });
  });

  // ===========================
  // STAMP PERFORATION GENERATOR
  // ===========================
  // Generates SVG perforated border around .postage-stamp elements
  document.querySelectorAll('.postage-stamp').forEach(stamp => {
    const wrap = stamp.querySelector('.stamp-img-wrap');
    if (!wrap) return;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'stamp-perf');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.style.position = 'absolute';
    svg.style.inset = '-14px';
    svg.style.width = 'calc(100% + 28px)';
    svg.style.height = 'calc(100% + 28px)';
    svg.style.pointerEvents = 'none';
    svg.style.zIndex = '10';

    // We'll draw the perforated rect using a pattern of circles punched out
    // Using a rect with a dashed stroke that looks like perforations
    const w = wrap.offsetWidth + 28;
    const h = wrap.offsetHeight + 28;
    const r = 5; // perforation radius
    const spacing = 16;

    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

    // Background border rect fill
    const borderRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    borderRect.setAttribute('x', '0');
    borderRect.setAttribute('y', '0');
    borderRect.setAttribute('width', w);
    borderRect.setAttribute('height', h);
    borderRect.setAttribute('fill', 'none');
    borderRect.setAttribute('stroke', 'rgba(252, 250, 232, 0.30)');
    borderRect.setAttribute('stroke-width', '1');

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
    mask.setAttribute('id', `stamp-mask-${Math.random().toString(36).substr(2,5)}`);

    // White rect = visible
    const maskRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    maskRect.setAttribute('fill', 'white');
    maskRect.setAttribute('x', '0');
    maskRect.setAttribute('y', '0');
    maskRect.setAttribute('width', w);
    maskRect.setAttribute('height', h);
    mask.appendChild(maskRect);

    const borderThickness = 14;

    // Create perforations along all 4 edges
    const createCircle = (cx, cy) => {
      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('cx', cx);
      c.setAttribute('cy', cy);
      c.setAttribute('r', r);
      c.setAttribute('fill', 'black');
      mask.appendChild(c);
    };

    // Top edge
    for (let x = spacing; x < w - spacing * 0.5; x += spacing) {
      createCircle(x, borderThickness / 2);
    }
    // Bottom edge
    for (let x = spacing; x < w - spacing * 0.5; x += spacing) {
      createCircle(x, h - borderThickness / 2);
    }
    // Left edge
    for (let y = spacing; y < h - spacing * 0.5; y += spacing) {
      createCircle(borderThickness / 2, y);
    }
    // Right edge
    for (let y = spacing; y < h - spacing * 0.5; y += spacing) {
      createCircle(w - borderThickness / 2, y);
    }

    defs.appendChild(mask);
    svg.appendChild(defs);

    // The colored border band with perforations cut out
    const colorRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    colorRect.setAttribute('x', '0');
    colorRect.setAttribute('y', '0');
    colorRect.setAttribute('width', w);
    colorRect.setAttribute('height', h);
    colorRect.setAttribute('fill', 'rgba(252, 250, 232, 0.28)');
    colorRect.setAttribute('mask', `url(#${mask.getAttribute('id')})`);

    // Inner clip (transparent middle) — subtract the inner area
    const innerClipDef = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
    innerClipDef.setAttribute('id', `inner-clip-${mask.getAttribute('id')}`);
    const innerR = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    innerR.setAttribute('x', borderThickness);
    innerR.setAttribute('y', borderThickness);
    innerR.setAttribute('width', w - borderThickness * 2);
    innerR.setAttribute('height', h - borderThickness * 2);
    innerClipDef.appendChild(innerR);
    defs.appendChild(innerClipDef);

    // Use a path to make only the border region visible
    const borderPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const outerPath = `M0,0 H${w} V${h} H0 Z`;
    const innerPath = `M${borderThickness},${borderThickness} H${w - borderThickness} V${h - borderThickness} H${borderThickness} Z`;
    borderPath.setAttribute('d', `${outerPath} ${innerPath}`);
    borderPath.setAttribute('fill-rule', 'evenodd');
    borderPath.setAttribute('fill', 'rgba(252, 250, 232, 0.28)');
    borderPath.setAttribute('mask', `url(#${mask.getAttribute('id')})`);

    svg.appendChild(borderPath);
    wrap.style.position = 'relative';
    wrap.appendChild(svg);
  });

  // ===========================
  // GLOW CURSOR EFFECT ON LINKS
  // ===========================
  document.querySelectorAll('.glow-link, [data-nav], .btn-link').forEach(link => {
    link.addEventListener('mousemove', e => {
      const rect = link.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      link.style.setProperty('--glow-x', `${x}px`);
      link.style.setProperty('--glow-y', `${y}px`);
    });
  });
});
