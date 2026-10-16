import './style.css';
import { STUDIO_DATA } from './data/studioData';

// Application State
interface AppState {
  selectedStyleFilter: string;
  activeLightboxIndex: number;
  isMobileMenuOpen: boolean;
  preselectedBookingStyle: string;
}

const state: AppState = {
  selectedStyleFilter: 'all',
  activeLightboxIndex: 0,
  isMobileMenuOpen: false,
  preselectedBookingStyle: 'Hip Hop & Urban'
};

// Safe String Escaping to prevent XSS
function escapeHtml(str: string): string {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Generate prefilled WhatsApp Link
function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${STUDIO_DATA.phoneRaw}?text=${encoded}`;
}

// Render Navigation
function renderNavbar(): string {
  return `
    <header class="site-nav" id="site-header" role="banner">
      <div class="container">
        <div class="site-nav-inner">
          <a href="#" class="brand-monogram" aria-label="AS DANCE STUDIO Home">
            <div class="brand-logo-mark">AS</div>
            <div class="brand-text-wrap">
              <span class="brand-title">${STUDIO_DATA.name}</span>
              <span class="brand-sub">HYDERABAD · KPHB</span>
            </div>
          </a>

          <nav class="nav-links-desktop" aria-label="Main Navigation">
            <a href="#about" class="nav-link">CHOREOGRAPHER</a>
            <a href="#classes" class="nav-link">DISCIPLINES</a>
            <a href="#personal-training" class="nav-link">1-ON-1 TRAINING</a>
            <a href="#gallery" class="nav-link">MOVEMENT</a>
            <a href="#reviews" class="nav-link">REVIEWS</a>
            <a href="#pricing" class="nav-link">PRICING</a>
          </nav>

          <div class="nav-cta-wrap">
            <button type="button" class="btn btn-primary btn-sm open-booking-modal" data-style="General Trial" aria-haspopup="dialog">
              <span>BOOK TRIAL</span>
              <span class="btn-icon-wrapper" aria-hidden="true">→</span>
            </button>
            <button type="button" class="mobile-menu-btn" id="mobile-menu-toggle" aria-expanded="false" aria-controls="mobile-nav-drawer" aria-label="Toggle navigation menu">
              <span class="mobile-menu-bar"></span>
              <span class="mobile-menu-bar"></span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    <div class="mobile-nav-drawer" id="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      <div class="mobile-nav-links">
        <a href="#about" class="mobile-nav-link close-mobile-nav">
          <span>01</span> CHOREOGRAPHER
        </a>
        <a href="#classes" class="mobile-nav-link close-mobile-nav">
          <span>02</span> DISCIPLINES
        </a>
        <a href="#personal-training" class="mobile-nav-link close-mobile-nav">
          <span>03</span> 1-ON-1 TRAINING
        </a>
        <a href="#gallery" class="mobile-nav-link close-mobile-nav">
          <span>04</span> MOVEMENT
        </a>
        <a href="#reviews" class="mobile-nav-link close-mobile-nav">
          <span>05</span> REVIEWS
        </a>
        <a href="#pricing" class="mobile-nav-link close-mobile-nav">
          <span>06</span> PRICING
        </a>
      </div>

      <div class="mobile-nav-footer">
        <button type="button" class="btn btn-primary open-booking-modal" style="width: 100%; margin-bottom: 16px;">
          <span>BOOK TRIAL SESSION</span>
          <span class="btn-icon-wrapper">→</span>
        </button>
        <p class="meta-label text-center">${STUDIO_DATA.address.area}, ${STUDIO_DATA.address.city}</p>
      </div>
    </div>
  `;
}

// Render Hero Section
function renderHero(): string {
  return `
    <section class="hero-section section-darker" id="hero" aria-labelledby="hero-title">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-tag">
              <span class="hero-tag-pulse" aria-hidden="true"></span>
              <span>NOW ENROLLING · KPHB STUDIO BATCHES</span>
            </div>

            <h1 id="hero-title" class="hero-headline text-fluid-hero">
              <span class="hero-word-break">MOVE</span>
              <span class="hero-word-break">WITHOUT</span>
              <span class="hero-word-break">LIMITS.</span>
            </h1>

            <p class="hero-lead">
              Founded &amp; directed by <strong>Master Arjun Punnani</strong> in Kukatpally, Hyderabad.
              A premier dance institution engineering authentic street technique, high-energy commercial performance, and bespoke personal training.
            </p>

            <div class="hero-actions">
              <a href="#classes" class="btn btn-primary">
                <span>EXPLORE DISCIPLINES</span>
                <span class="btn-icon-wrapper" aria-hidden="true">→</span>
              </a>
              <button type="button" class="btn btn-secondary open-booking-modal" data-style="Trial Session">
                <span>BOOK A SESSION</span>
              </button>
            </div>

            <div class="hero-stats-row">
              ${STUDIO_DATA.stats.map(stat => `
                <div class="hero-stat-item">
                  <span class="hero-stat-val">${stat.value}</span>
                  <span class="hero-stat-lbl">${stat.label}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="hero-media-wrapper">
            <div class="hero-image-frame">
              <img 
                src="/images/hero.jpg" 
                alt="Explosive athletic dancer captured mid-air at AS Dance Studio" 
                class="hero-image"
                width="800"
                height="1000"
                fetchpriority="high"
                loading="eager"
              />
              <div class="hero-watermark">TRAIN.<br>CREATE.<br>PERFORM.</div>
              <div class="hero-stamp-badge">KPHB PHASE 9</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Render Choreographer Section
function renderChoreographer(): string {
  return `
    <section class="section choreographer-section" id="about" aria-labelledby="choreographer-title">
      <div class="container">
        <div class="choreographer-grid">
          <div class="choreographer-portrait-wrap">
            <div class="choreographer-image-card">
              <img 
                src="/images/arjun.jpg" 
                alt="Master Arjun Punnani, Founder and Master Choreographer of AS Dance Studio" 
                class="choreographer-image"
                width="600"
                height="800"
                loading="lazy"
              />
              <div class="choreographer-badge-dock">
                <div>
                  <h3 style="font-size: 1.4rem;">${STUDIO_DATA.founder}</h3>
                  <p class="meta-label" style="color: var(--color-chalk); margin-top: 4px;">FOUNDER &amp; MASTER CHOREOGRAPHER</p>
                </div>
                <span class="meta-num">01</span>
              </div>
            </div>
          </div>

          <div class="choreographer-info">
            <div class="section-eyebrow">
              <span class="section-eyebrow-line"></span>
              <span class="meta-label">ARTISTIC DIRECTION</span>
            </div>

            <h2 id="choreographer-title" class="text-fluid-headline" style="margin-bottom: var(--space-md);">
              PRECISION MEETS RAW EXPRESSION.
            </h2>

            <blockquote class="choreographer-quote">
              "Dance is not simply learning routines for a camera. It is mastering gravity, tempo, and finding an authentic physical voice that demands attention."
            </blockquote>

            <p class="choreographer-bio">
              With over a decade of hands-on choreography and mentorship across Hyderabad's street, collegiate, and commercial dance circuits, <strong>Arjun Punnani</strong> has built AS Dance Studio into Kukatpally's most respected training floor.
            </p>
            <p class="choreographer-bio">
              Whether coaching a student who has never taken a single dance step or fine-tuning professional audition choreography, Arjun's teaching methodology is renowned for its patience, anatomical precision, and infectious encouragement.
            </p>

            <div class="choreographer-pillars">
              <div class="pillar-item">
                <div class="pillar-title">BIOMECHANICAL BREAKDOWN</div>
                <div class="pillar-desc">Every isolation, weight-shift, and spin is deconstructed step-by-step so your body internalizes muscle memory without strain.</div>
              </div>
              <div class="pillar-item">
                <div class="pillar-title">STAGE &amp; CYPHER CONFIDENCE</div>
                <div class="pillar-desc">Overcoming stage fright through targeted performance drills, eye-line projection, and live freestyle cyphers.</div>
              </div>
            </div>

            <div>
              <button type="button" class="btn btn-primary open-booking-modal" data-style="1-on-1 with Arjun Punnani">
                <span>TRAIN WITH ARJUN</span>
                <span class="btn-icon-wrapper">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Render Dance Styles Section
function renderDanceStyles(): string {
  const filteredStyles = state.selectedStyleFilter === 'all'
    ? STUDIO_DATA.styles
    : STUDIO_DATA.styles.filter(s => s.id === state.selectedStyleFilter);

  return `
    <section class="section styles-section" id="classes" aria-labelledby="classes-title">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">
            <span class="section-eyebrow-line"></span>
            <span class="meta-label">CORE DISCIPLINES</span>
          </div>
          <h2 id="classes-title" class="text-fluid-headline">
            DISCIPLINES &amp; BATCHES
          </h2>
          <p style="max-width: 620px; margin-top: 12px;">
            Structured, progressive dance curriculums for beginners through advanced performers. Morning, evening, and weekend batches available.
          </p>
        </div>

        <div class="styles-filter-bar" role="tablist" aria-label="Dance style filters">
          <button type="button" class="style-filter-btn ${state.selectedStyleFilter === 'all' ? 'is-active' : ''}" data-filter="all" role="tab" aria-selected="${state.selectedStyleFilter === 'all'}">
            ALL DISCIPLINES (${STUDIO_DATA.styles.length})
          </button>
          ${STUDIO_DATA.styles.map(style => `
            <button type="button" class="style-filter-btn ${state.selectedStyleFilter === style.id ? 'is-active' : ''}" data-filter="${style.id}" role="tab" aria-selected="${state.selectedStyleFilter === style.id}">
              ${style.name}
            </button>
          `).join('')}
        </div>

        <div class="styles-container">
          ${filteredStyles.map(style => `
            <article class="style-row" id="style-${style.id}">
              <div class="style-row-content">
                <div>
                  <div class="style-row-head">
                    <span class="meta-label">DISCIPLINE ${style.number}</span>
                    <span class="meta-num">${style.number}</span>
                  </div>
                  <h3 style="font-size: clamp(1.8rem, 3.5vw, 2.6rem); margin-bottom: 8px;">
                    ${style.name}
                  </h3>
                  <p style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--color-white); margin-bottom: 14px;">
                    ${style.tagline}
                  </p>
                  <p style="font-size: 0.95rem; line-height: 1.6;">
                    ${style.description}
                  </p>

                  <div class="style-tags-strip">
                    <span class="style-tag-pill">LEVEL: ${style.level}</span>
                    <span class="style-tag-pill">TIME: ${style.duration}</span>
                    <span class="style-tag-pill">INTENSITY: ${style.intensity}</span>
                  </div>

                  <ul class="style-focus-list">
                    ${style.focus.map(item => `
                      <li class="style-focus-item">
                        <span class="style-focus-dot"></span>
                        <span>${item}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <div style="display: flex; flex-wrap: wrap; gap: 14px; align-items: center; border-top: 1px solid var(--color-border); padding-top: 20px;">
                  <button type="button" class="btn btn-primary btn-sm open-booking-modal" data-style="${style.name}">
                    <span>ENQUIRE FOR ${style.name.split('&')[0].trim()}</span>
                    <span class="btn-icon-wrapper">→</span>
                  </button>
                  <span class="meta-label">${style.schedule}</span>
                </div>
              </div>

              <div class="style-row-media">
                <img 
                  src="${style.image}" 
                  alt="${style.name} training at AS Dance Studio" 
                  class="style-image"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// Render Personal Training Section
function renderPersonalTraining(): string {
  const pt = STUDIO_DATA.personalTraining;
  return `
    <section class="section pt-section" id="personal-training" aria-labelledby="pt-title">
      <div class="container">
        <div class="pt-card-banner">
          <div class="pt-grid">
            <div>
              <div class="section-eyebrow">
                <span class="section-eyebrow-line"></span>
                <span class="meta-label">${pt.eyebrow}</span>
              </div>
              <h2 id="pt-title" class="text-fluid-subhead" style="font-size: clamp(2rem, 4.5vw, 3.8rem); margin-bottom: var(--space-md);">
                ${pt.title}
              </h2>
              <p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: var(--space-md);">
                ${pt.description}
              </p>

              <div class="pt-features-grid">
                ${pt.features.map(f => `
                  <div class="pt-feature-box">
                    <h4>${f.title}</h4>
                    <p>${f.desc}</p>
                  </div>
                `).join('')}
              </div>

              <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
                <button type="button" class="btn btn-primary open-booking-modal" data-style="1-on-1 Personal Training">
                  <span>TRAIN ONE-TO-ONE</span>
                  <span class="btn-icon-wrapper">→</span>
                </button>
                <a href="${getWhatsAppLink('Hi Master Arjun, I would like to inquire about 1-on-1 Personal Training at AS Dance Studio KPHB.')}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                  <span>WHATSAPP CONSULT</span>
                </a>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 20px;">
              <div style="border: 1px solid var(--color-border); overflow: hidden; aspect-ratio: 4/5; background: var(--color-surface-1);">
                <img 
                  src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Personal 1-on-1 choreography training session in studio" 
                  style="width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%) contrast(115%);"
                  loading="lazy"
                />
              </div>
              <div style="padding: 16px; background-color: var(--color-surface-2); border: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center;">
                <span class="meta-label">EXCLUSIVE SLOTS</span>
                <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--color-white);">LIMITED TO 6 STUDENTS / MONTH</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Render Gallery Section
function renderGallery(): string {
  return `
    <section class="section gallery-section" id="gallery" aria-labelledby="gallery-title">
      <div class="container">
        <div class="section-header" style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 20px;">
          <div>
            <div class="section-eyebrow">
              <span class="section-eyebrow-line"></span>
              <span class="meta-label">VISUAL ARCHIVE</span>
            </div>
            <h2 id="gallery-title" class="text-fluid-headline">
              SHOW THE MOVEMENT
            </h2>
          </div>
          <p class="meta-label">CLICK ANY FRAME TO EXPAND</p>
        </div>

        <div class="gallery-grid">
          ${STUDIO_DATA.gallery.map((item, index) => `
            <div 
              class="gallery-card ${item.aspect === 'large' ? 'gallery-card-lg' : ''}" 
              tabindex="0" 
              role="button" 
              aria-label="View ${item.title} photograph"
              data-gallery-index="${index}"
            >
              <img 
                src="${item.image}" 
                alt="${item.title} — ${item.style}" 
                width="800"
                height="600"
                loading="lazy"
              />
              <div class="gallery-card-overlay">
                <h4 class="gallery-card-title">${item.title}</h4>
                <p class="gallery-card-subtitle">${item.style}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Accessible Lightbox Dialog -->
    <dialog class="lightbox-dialog" id="lightbox-dialog" aria-label="Image Lightbox">
      <div class="lightbox-content-box">
        <button type="button" class="lightbox-close-btn" id="lightbox-close" aria-label="Close lightbox">
          ✕ CLOSE [ESC]
        </button>
        <div class="lightbox-img-wrap">
          <img id="lightbox-img" src="" alt="Enlarged movement gallery photograph" />
        </div>
        <div class="lightbox-footer-bar">
          <div>
            <h4 id="lightbox-caption-title" style="font-size: 1.15rem;"></h4>
            <p id="lightbox-caption-style" class="meta-label" style="margin-top: 4px;"></p>
          </div>
          <div style="display: flex; gap: 10px;">
            <button type="button" class="btn btn-secondary btn-sm" id="lightbox-prev" aria-label="Previous photograph">← PREV</button>
            <button type="button" class="btn btn-secondary btn-sm" id="lightbox-next" aria-label="Next photograph">NEXT →</button>
          </div>
        </div>
      </div>
    </dialog>
  `;
}

// Render Reviews Section
function renderReviews(): string {
  return `
    <section class="section reviews-section" id="reviews" aria-labelledby="reviews-title">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">
            <span class="section-eyebrow-line"></span>
            <span class="meta-label">AUTHENTIC SOCIAL PROOF</span>
          </div>
          <h2 id="reviews-title" class="text-fluid-headline">
            VOICES FROM THE FLOOR
          </h2>
        </div>

        <div class="reviews-summary-dock">
          <div class="reviews-stars-score">
            <span class="stars-score-big">5.0</span>
            <div>
              <div class="review-rating-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p class="meta-label">VERIFIED STUDENT RATING · 170+ REVIEWS</p>
            </div>
          </div>

          <a href="${STUDIO_DATA.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
            <span>VIEW ALL GOOGLE REVIEWS</span>
            <span class="btn-icon-wrapper" aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="reviews-grid">
          ${STUDIO_DATA.reviews.map((rev) => `
            <article class="review-card">
              <div>
                <div class="review-rating-stars" aria-label="${rev.rating} stars">
                  ${'★'.repeat(rev.rating)}
                </div>
                <p class="review-quote-text">
                  "${rev.text}"
                </p>
              </div>

              <div class="review-author-wrap">
                <div>
                  <h4 class="review-author-name">${rev.author}</h4>
                  <p class="review-author-role">${rev.role}</p>
                </div>
                <span class="meta-label" style="font-size: 0.7rem;">${rev.verifiedSource}</span>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// Render Pricing Section
function renderPricing(): string {
  return `
    <section class="section pricing-section" id="pricing" aria-labelledby="pricing-title">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">
            <span class="section-eyebrow-line"></span>
            <span class="meta-label">MEMBERSHIP &amp; ENROLLMENT</span>
          </div>
          <h2 id="pricing-title" class="text-fluid-headline">
            TRANSPARENT TRAINING TIERS
          </h2>
          <p style="max-width: 600px; margin-top: 12px;">
            Zero hidden fees or lock-ins. Choose between flexible trial visits, dedicated monthly batch enrollments, or private 1-on-1 mentorship.
          </p>
        </div>

        <div class="pricing-grid">
          ${STUDIO_DATA.pricingTiers.map((tier) => `
            <div class="pricing-card ${tier.popular ? 'is-popular' : ''}">
              ${tier.badge ? `<div class="pricing-badge-pill">${tier.badge}</div>` : ''}
              
              <div>
                <h3 class="pricing-card-title">${tier.name}</h3>
                <div class="pricing-sessions-txt">${tier.sessions}</div>
                <p style="font-size: 0.88rem; color: var(--color-text-secondary);">${tier.suitableFor}</p>

                <ul class="pricing-features-list">
                  ${tier.features.map((f: string) => `
                    <li class="pricing-feature-item">
                      <span class="pricing-feature-check">✓</span>
                      <span>${f}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <div>
                <button type="button" class="btn ${tier.popular ? 'btn-primary' : 'btn-secondary'} open-booking-modal" data-style="${tier.name}" style="width: 100%;">
                  <span>${tier.ctaText}</span>
                  <span class="btn-icon-wrapper">→</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// Render FAQs Section
function renderFAQs(): string {
  return `
    <section class="section faqs-section" id="faqs" aria-labelledby="faqs-title">
      <div class="container">
        <div class="section-header text-center" style="margin-bottom: var(--space-xl);">
          <div class="section-eyebrow" style="justify-content: center;">
            <span class="section-eyebrow-line"></span>
            <span class="meta-label">CLARITY FIRST</span>
            <span class="section-eyebrow-line"></span>
          </div>
          <h2 id="faqs-title" class="text-fluid-headline">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <div class="faq-list">
          ${STUDIO_DATA.faqs.map((faq, i) => `
            <div class="faq-item ${i === 0 ? 'is-open' : ''}">
              <button type="button" class="faq-trigger" aria-expanded="${i === 0 ? 'true' : 'false'}">
                <span class="faq-question-text">${faq.q}</span>
                <span class="faq-icon" aria-hidden="true">+</span>
              </button>
              <div class="faq-body" ${i === 0 ? 'style="display:block;"' : ''}>
                <p>${faq.a}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// Render Conclusion / Final CTA Section
function renderConclusion(): string {
  return `
    <section class="conclusion-section" id="conclusion" aria-labelledby="conclusion-title">
      <div class="container">
        <div class="conclusion-wrap">
          <div class="section-eyebrow" style="justify-content: center; margin-bottom: 20px;">
            <span class="section-eyebrow-line"></span>
            <span class="meta-label">YOUR NEXT LEVEL STARTS HERE</span>
            <span class="section-eyebrow-line"></span>
          </div>

          <h2 id="conclusion-title" class="conclusion-title text-fluid-headline">
            THE FLOOR IS YOURS.<br>READY TO MOVE?
          </h2>

          <p class="conclusion-desc">
            No more watching choreography videos on a screen. Step into AS Dance Studio, learn from Master Arjun, and build real discipline, stage confidence, and musicality.
          </p>

          <div class="conclusion-actions">
            <button type="button" class="btn btn-primary open-booking-modal" data-style="Trial Class">
              <span>START YOUR JOURNEY</span>
              <span class="btn-icon-wrapper" aria-hidden="true">→</span>
            </button>
            <a href="${getWhatsAppLink('Hi Master Arjun, I want to book a trial class at AS Dance Studio in KPHB.')}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
              <span>WHATSAPP STUDIO DIRECT</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Render Footer
function renderFooter(): string {
  const addr = STUDIO_DATA.address;
  return `
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-top-grid">
          <div>
            <div class="brand-monogram">
              <div class="brand-logo-mark">AS</div>
              <div class="brand-text-wrap">
                <span class="brand-title">${STUDIO_DATA.name}</span>
                <span class="brand-sub">KPHB · HYDERABAD</span>
              </div>
            </div>
            <p class="footer-brand-desc">
              Premier movement culture, urban choreography, and personal dance mentorship directed by Master Arjun Punnani.
            </p>
            <div style="margin-top: 20px;">
              <a href="${STUDIO_DATA.instagramUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="Follow AS Dance Studio on Instagram">
                <span>INSTAGRAM @${STUDIO_DATA.instagram}</span>
                <span class="btn-icon-wrapper" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div>
            <h4 class="footer-col-title">NAVIGATION</h4>
            <ul class="footer-links-list">
              <li class="footer-link-item"><a href="#about">The Choreographer</a></li>
              <li class="footer-link-item"><a href="#classes">Dance Disciplines</a></li>
              <li class="footer-link-item"><a href="#personal-training">1-on-1 Mentorship</a></li>
              <li class="footer-link-item"><a href="#gallery">Movement Archive</a></li>
              <li class="footer-link-item"><a href="#reviews">Verified Reviews</a></li>
              <li class="footer-link-item"><a href="#pricing">Pricing &amp; Batches</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-col-title">DISCIPLINES</h4>
            <ul class="footer-links-list">
              <li class="footer-link-item"><a href="#style-hiphop">Hip Hop &amp; Urban</a></li>
              <li class="footer-link-item"><a href="#style-bollywood">Bollywood &amp; Commercial</a></li>
              <li class="footer-link-item"><a href="#style-contemporary">Contemporary Flow</a></li>
              <li class="footer-link-item"><a href="#style-western">Western Freestyle</a></li>
              <li class="footer-link-item"><a href="#style-salsa">Salsa Partnering</a></li>
              <li class="footer-link-item"><a href="#style-zumba">Zumba Fitness</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-col-title">STUDIO LOCATION</h4>
            <p class="footer-address-text">
              ${addr.unit}<br>
              ${addr.landmark}<br>
              ${addr.area}<br>
              ${addr.city}, ${addr.state} - ${addr.pincode}
            </p>
            <p class="meta-label" style="margin-top: 14px; margin-bottom: 6px;">TIMINGS</p>
            <p style="font-size: 0.85rem; color: var(--color-muted);">
              Mon–Sat: ${STUDIO_DATA.timings.weekdays}<br>
              Sun: ${STUDIO_DATA.timings.weekends}
            </p>
            <div style="margin-top: 16px;">
              <a href="${STUDIO_DATA.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="font-size: 0.72rem;">
                <span>OPEN ON GOOGLE MAPS</span>
                <span class="btn-icon-wrapper" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom-row">
          <div class="footer-copy-text">
            © ${new Date().getFullYear()} AS DANCE STUDIO. All Rights Reserved. Crafted with pride for Hyderabad dance culture.
          </div>
          <button type="button" class="back-to-top-btn" id="back-to-top" aria-label="Scroll back to top">
            ↑ TOP
          </button>
        </div>
      </div>
    </footer>

    <!-- Interactive Booking & Inquiry Modal -->
    <dialog class="booking-dialog" id="booking-dialog" aria-labelledby="booking-modal-title">
      <div class="booking-dialog-card">
        <button type="button" class="booking-dialog-close" id="booking-modal-close" aria-label="Close booking modal">✕</button>
        
        <div style="margin-bottom: 24px;">
          <div class="section-eyebrow">
            <span class="section-eyebrow-line"></span>
            <span class="meta-label">DIRECT ENQUIRY</span>
          </div>
          <h3 id="booking-modal-title" style="font-size: 1.8rem; margin-top: 6px;">
            JOIN AS DANCE STUDIO
          </h3>
          <p style="font-size: 0.9rem; color: var(--color-muted); margin-top: 4px;">
            Book a trial session or inquire directly with Master Arjun.
          </p>
        </div>

        <form id="booking-form" novalidate>
          <div class="form-group">
            <label for="book-name" class="form-label">Full Name *</label>
            <input type="text" id="book-name" class="form-input" placeholder="e.g. Rahul Sharma" required />
          </div>

          <div class="form-group">
            <label for="book-phone" class="form-label">WhatsApp Number *</label>
            <input type="tel" id="book-phone" class="form-input" placeholder="e.g. 9876543210" required />
          </div>

          <div class="form-group">
            <label for="book-style" class="form-label">Selected Discipline / Training</label>
            <select id="book-style" class="form-select">
              <option value="Hip Hop & Urban">Hip Hop &amp; Urban Choreography</option>
              <option value="Bollywood & Commercial">Bollywood &amp; Commercial</option>
              <option value="Contemporary & Lyrical">Contemporary &amp; Lyrical</option>
              <option value="Western Freestyle">Western Freestyle</option>
              <option value="Salsa & Social Partnering">Salsa &amp; Latin Partnering</option>
              <option value="Zumba & Cardio Flow">Zumba &amp; High-Energy Cardio</option>
              <option value="1-on-1 Personal Training">1-on-1 Private Mentorship with Arjun</option>
              <option value="Wedding / Sangeet Choreography">Wedding / Sangeet Choreography</option>
            </select>
          </div>

          <div class="form-group">
            <label for="book-level" class="form-label">Experience Level</label>
            <select id="book-level" class="form-select">
              <option value="Beginner (Zero prior experience)">Beginner (Zero prior experience)</option>
              <option value="Intermediate (Some experience/freestyle)">Intermediate (Some experience/freestyle)</option>
              <option value="Advanced / Performing artist">Advanced / Performing artist</option>
            </select>
          </div>

          <div class="form-group">
            <label for="book-batch" class="form-label">Preferred Timing</label>
            <select id="book-batch" class="form-select">
              <option value="Morning Batch (6:30 AM - 9:00 AM)">Morning Batch (6:30 AM - 9:00 AM)</option>
              <option value="Evening Batch (6:00 PM - 8:30 PM)">Evening Batch (6:00 PM - 8:30 PM)</option>
              <option value="Weekend Intensive (Sat & Sun)">Weekend Intensive (Sat &amp; Sun)</option>
            </select>
          </div>

          <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px;">
            <button type="submit" class="btn btn-primary" style="width: 100%;">
              <span>SEND WHATSAPP ENQUIRY DIRECT</span>
              <span class="btn-icon-wrapper">→</span>
            </button>
            <p class="meta-label text-center" style="font-size: 0.7rem;">
              DIRECTLY CONNECTS YOU TO MASTER ARJUN ON WHATSAPP
            </p>
          </div>
        </form>
      </div>
    </dialog>
  `;
}

// Main Render Function
function renderApp(): void {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    ${renderNavbar()}
    <main id="main-content">
      ${renderHero()}
      ${renderChoreographer()}
      ${renderDanceStyles()}
      ${renderPersonalTraining()}
      ${renderGallery()}
      ${renderReviews()}
      ${renderPricing()}
      ${renderFAQs()}
      ${renderConclusion()}
    </main>
    ${renderFooter()}
  `;

  attachEventListeners();
}

// Attach Event Listeners for Interactivity & Modals
function attachEventListeners(): void {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
      mobileToggle.setAttribute('aria-expanded', String(state.isMobileMenuOpen));
      mobileDrawer.classList.toggle('is-active', state.isMobileMenuOpen);
    });

    document.querySelectorAll('.close-mobile-nav').forEach(link => {
      link.addEventListener('click', () => {
        state.isMobileMenuOpen = false;
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.classList.remove('is-active');
      });
    });
  }

  // Styles Filter Buttons
  document.querySelectorAll('.style-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const filter = target.getAttribute('data-filter') || 'all';
      state.selectedStyleFilter = filter;
      const stylesSection = document.getElementById('classes');
      if (stylesSection) {
        stylesSection.outerHTML = renderDanceStyles();
        attachEventListeners();
      }
    });
  });

  // Lightbox Modal Handling
  const lightboxDialog = document.getElementById('lightbox-dialog') as HTMLDialogElement | null;
  const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement | null;
  const lightboxTitle = document.getElementById('lightbox-caption-title');
  const lightboxStyle = document.getElementById('lightbox-caption-style');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  function updateLightbox(index: number): void {
    if (index < 0) index = STUDIO_DATA.gallery.length - 1;
    if (index >= STUDIO_DATA.gallery.length) index = 0;
    state.activeLightboxIndex = index;
    const item = STUDIO_DATA.gallery[index];
    if (lightboxImg && lightboxTitle && lightboxStyle) {
      lightboxImg.src = item.image;
      lightboxImg.alt = `${item.title} — ${item.style}`;
      lightboxTitle.textContent = item.title;
      lightboxStyle.textContent = item.style;
    }
  }

  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const el = e.currentTarget as HTMLElement;
      const idx = parseInt(el.getAttribute('data-gallery-index') || '0', 10);
      updateLightbox(idx);
      if (lightboxDialog && typeof lightboxDialog.showModal === 'function') {
        lightboxDialog.showModal();
      }
    });

    card.addEventListener('keydown', (e: Event) => {
      const keyEvt = e as KeyboardEvent;
      if (keyEvt.key === 'Enter' || keyEvt.key === ' ') {
        keyEvt.preventDefault();
        const el = e.currentTarget as HTMLElement;
        const idx = parseInt(el.getAttribute('data-gallery-index') || '0', 10);
        updateLightbox(idx);
        if (lightboxDialog && typeof lightboxDialog.showModal === 'function') {
          lightboxDialog.showModal();
        }
      }
    });
  });

  if (lightboxClose && lightboxDialog) {
    lightboxClose.addEventListener('click', () => lightboxDialog.close());
    lightboxDialog.addEventListener('click', (e) => {
      if (e.target === lightboxDialog) lightboxDialog.close();
    });
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => updateLightbox(state.activeLightboxIndex - 1));
  }
  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => updateLightbox(state.activeLightboxIndex + 1));
  }

  // Keyboard navigation for lightbox
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (lightboxDialog && lightboxDialog.open) {
      if (e.key === 'ArrowLeft') updateLightbox(state.activeLightboxIndex - 1);
      if (e.key === 'ArrowRight') updateLightbox(state.activeLightboxIndex + 1);
    }
  });

  // Booking Modal Handling
  const bookingDialog = document.getElementById('booking-dialog') as HTMLDialogElement | null;
  const bookingClose = document.getElementById('booking-modal-close');
  const bookingSelect = document.getElementById('book-style') as HTMLSelectElement | null;

  document.querySelectorAll('.open-booking-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const el = e.currentTarget as HTMLElement;
      const styleName = el.getAttribute('data-style');
      if (bookingSelect && styleName) {
        // Attempt to match select option
        for (let i = 0; i < bookingSelect.options.length; i++) {
          if (bookingSelect.options[i].text.toLowerCase().includes(styleName.toLowerCase())) {
            bookingSelect.selectedIndex = i;
            break;
          }
        }
      }
      if (bookingDialog && typeof bookingDialog.showModal === 'function') {
        bookingDialog.showModal();
      }
    });
  });

  if (bookingClose && bookingDialog) {
    bookingClose.addEventListener('click', () => bookingDialog.close());
    bookingDialog.addEventListener('click', (e) => {
      if (e.target === bookingDialog) bookingDialog.close();
    });
  }

  // Booking Form Submission to direct WhatsApp
  const bookingForm = document.getElementById('booking-form') as HTMLFormElement | null;
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('book-name') as HTMLInputElement | null;
      const phoneInput = document.getElementById('book-phone') as HTMLInputElement | null;
      const styleInput = document.getElementById('book-style') as HTMLSelectElement | null;
      const levelInput = document.getElementById('book-level') as HTMLSelectElement | null;
      const batchInput = document.getElementById('book-batch') as HTMLSelectElement | null;

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const style = styleInput ? styleInput.value : '';
      const level = levelInput ? levelInput.value : '';
      const batch = batchInput ? batchInput.value : '';

      if (!name || !phone) {
        alert('Please provide your name and WhatsApp number.');
        return;
      }

      const safeName = escapeHtml(name);
      const safePhone = escapeHtml(phone);
      const safeStyle = escapeHtml(style);
      const safeLevel = escapeHtml(level);
      const safeBatch = escapeHtml(batch);

      const msg = `Hi Master Arjun! I would like to enquire about AS Dance Studio.\n\nName: ${safeName}\nPhone: ${safePhone}\nDiscipline: ${safeStyle}\nLevel: ${safeLevel}\nPreferred Timing: ${safeBatch}\n\nPlease let me know the upcoming batch availability!`;
      
      const whatsappUrl = getWhatsAppLink(msg);
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (bookingDialog) bookingDialog.close();
    });
  }

  // FAQs Accordion Logic
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      const button = e.currentTarget as HTMLButtonElement;
      const item = button.closest('.faq-item');
      if (!item) return;

      const isOpen = item.classList.contains('is-open');

      // Close all other faqs
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('is-open');
          const btn = other.querySelector('.faq-trigger');
          if (btn) btn.setAttribute('aria-expanded', 'false');
          const body = other.querySelector('.faq-body') as HTMLElement | null;
          if (body) body.style.display = 'none';
        }
      });

      // Toggle current
      if (isOpen) {
        item.classList.remove('is-open');
        button.setAttribute('aria-expanded', 'false');
        const body = item.querySelector('.faq-body') as HTMLElement | null;
        if (body) body.style.display = 'none';
      } else {
        item.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
        const body = item.querySelector('.faq-body') as HTMLElement | null;
        if (body) body.style.display = 'block';
      }
    });
  });

  // Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
