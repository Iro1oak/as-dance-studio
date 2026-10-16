export interface DanceStyle {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  level: string;
  duration: string;
  intensity: string;
  focus: string[];
  image: string;
  schedule: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  text: string;
  verifiedSource: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  sessions: string;
  popular?: boolean;
  features: string[];
  suitableFor: string;
  ctaText: string;
}

export interface ScheduleItem {
  time: string;
  style: string;
  instructor: string;
  level: string;
  room: string;
}

export const STUDIO_DATA = {
  name: 'AS DANCE STUDIO',
  founder: 'Arjun Punnani',
  title: 'Artistic Director & Master Choreographer',
  tagline: 'MOVE WITHOUT LIMITS.',
  subtagline: 'Train. Create. Perform.',
  rating: '5.0',
  totalReviews: '170+',
  established: 'Hyderabad, Telangana',
  instagram: 'asdancestudio01',
  instagramUrl: 'https://www.instagram.com/asdancestudio01/',
  mapsUrl: 'https://www.google.com/maps/place/AS+DANCE+STUDIO/@17.4850275,78.3801166,17z/data=!4m15!1m8!3m7!1s0x3bcb93b87394d409:0x29041a6835052eef!2sAS+DANCE+STUDIO!8m2!3d17.4845117!4d78.3807997!10e5!16s%2Fg%2F11fj9vhjnd!3m5!1s0x3bcb93b87394d409:0x29041a6835052eef!8m2!3d17.4845117!4d78.3807997!16s%2Fg%2F11fj9vhjnd',
  phone: '+91 99638 21450', // Studio official enquiry contact
  phoneRaw: '919963821450',
  address: {
    unit: 'Flat No. 101, 1st Floor, Pragathi Heights',
    landmark: 'Near Geetha Theatre, Beside Lakme Salon, Opp. Lepakshi College',
    area: 'KPHB Phase 9, Kukatpally',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500085'
  },
  timings: {
    weekdays: '06:30 AM – 09:30 PM',
    weekends: '08:00 AM – 02:00 PM / Evening Batches'
  },
  stats: [
    { label: 'Verified Google Rating', value: '5.0★' },
    { label: 'Student Reviews', value: '170+' },
    { label: 'Disciplines Taught', value: '08' },
    { label: 'Choreography Mentorship', value: '1-on-1' }
  ],
  styles: [
    {
      id: 'hiphop',
      number: '01',
      name: 'HIP HOP & URBAN',
      tagline: 'Groove, isolations, bounce, and street choreography discipline.',
      description: 'Built on authentic foundation: body isolations, locking, popping, dynamic weight-shifting, and sharp musicality. From street cyphers to commercial video routines, develop raw energy with surgical control.',
      level: 'Beginner to Advanced',
      duration: '60 Mins / Session',
      intensity: 'High',
      focus: ['Bounce & Groove Foundations', 'Micro-Isolations & Textures', 'Speed Drills & Musicality', 'Cypher Freestyle Confidence'],
      image: '/images/hiphop.jpg',
      schedule: 'Mon / Wed / Fri · 07:00 PM'
    },
    {
      id: 'bollywood',
      number: '02',
      name: 'BOLLYWOOD & COMMERCIAL',
      tagline: 'High-octane stage performance and cinematic choreographic precision.',
      description: 'Dynamic, infectious choreography combining modern commercial dance, film trends, and expressive Indian aesthetics. Learn stage projection, facial energy, and crisp synchronization in group dynamics.',
      level: 'All Experience Levels',
      duration: '60 Mins / Session',
      intensity: 'High',
      focus: ['Cinematic Projection & Dynamics', 'Choreography Speed Learning', 'Expressive Facial Performance', 'Stage Group Formations'],
      image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=1200',
      schedule: 'Tue / Thu / Sat · 06:30 PM'
    },
    {
      id: 'contemporary',
      number: '03',
      name: 'CONTEMPORARY & LYRICAL',
      tagline: 'Defying gravity through floorwork, extensions, and emotional movement.',
      description: 'Explore the fluid space between release technique, balletic lines, and athletic ground recovery. Develop core strength, spine articulation, and raw emotional storytelling without spoken words.',
      level: 'Open Level & Intermediate',
      duration: '75 Mins / Session',
      intensity: 'Medium',
      focus: ['Floorwork Recovery & Flow', 'Spinal Articulation & Balance', 'Weight Suspension & Leaps', 'Lyrical Narrative Building'],
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1200',
      schedule: 'Sat & Sun · 09:30 AM'
    },
    {
      id: 'western',
      number: '04',
      name: 'WESTERN FREESTYLE',
      tagline: 'Spontaneous rhythm recognition and authentic personal expression.',
      description: 'Break free from rigid memory routines. Learn how to instantly decipher syncopated percussion, command spatial awareness, and build an unmistakable dance signature that is uniquely yours.',
      level: 'All Levels',
      duration: '60 Mins / Session',
      intensity: 'High',
      focus: ['Rhythm Syncopation Reading', 'Improvisational Instincts', 'Level Changes & Speed Variations', 'Performance Body Language'],
      image: 'https://images.unsplash.com/photo-1545959570-a9438e88867a?auto=format&fit=crop&q=80&w=1200',
      schedule: 'Mon / Wed · 06:00 PM'
    },
    {
      id: 'salsa',
      number: '05',
      name: 'SALSA & LATIN SOCIAL',
      tagline: 'Connection, timing, spins, and effortless social partner confidence.',
      description: 'Master the fundamental Clave timing, frame tension, cross-body leads, intricate turn patterns, and footwork shines. Build effortless social dance floor charisma with zero partner required to start.',
      level: 'Beginner & Improver',
      duration: '60 Mins / Session',
      intensity: 'Medium',
      focus: ['Frame & Tension Principles', 'Clave Rhythm Synchronization', 'Spin Mechanics & Spotting', 'Social Lead & Follow Nuances'],
      image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80&w=1200',
      schedule: 'Fri & Sun · 07:30 PM'
    },
    {
      id: 'zumba',
      number: '06',
      name: 'ZUMBA & CARDIO FLOW',
      tagline: 'Calorie-torching rhythm conditioning that never feels like a workout.',
      description: 'An explosive fusion of world rhythms, high-bpm dance intervals, core engagement, and full-body conditioning. Elevate your cardiovascular endurance, flexibility, and post-session endorphins.',
      level: 'All Fitness Levels',
      duration: '50 Mins / Session',
      intensity: 'Very High',
      focus: ['High-Intensity Interval Dance', 'Core & Leg Conditioning', 'Cardiovascular Stamina', 'Stretching & Muscle Recovery'],
      image: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&q=80&w=1200',
      schedule: 'Mon to Sat · 06:30 AM & 08:00 AM'
    }
  ],
  personalTraining: {
    title: 'PRIVATE 1-ON-1 CHOREOGRAPHY MENTORSHIP',
    eyebrow: 'DIRECT INSTRUCTION WITH MASTER ARJUN',
    description: 'When standard group classes cannot deliver the custom speed, audition preparation, or granular biomechanical corrections you demand. A bespoke training program designed around your exact anatomy, musicality, and artistic ambitions.',
    features: [
      {
        title: 'Granular Biomechanical Correction',
        desc: 'Instant frame-by-frame analysis of your posture, foot angles, isolation control, and energy dispersion.'
      },
      {
        title: 'Audition & Competition Repertoire',
        desc: 'Original, non-recycled custom choreography engineered specifically for your strengths to win judges and casting directors.'
      },
      {
        title: 'Bespoke Wedding & Sangeet Sets',
        desc: 'High-concept choreography for couples and families that looks effortless, graceful, and cinematic on video.'
      },
      {
        title: 'Flexible Studio Scheduling',
        desc: 'Dedicated private floor time in our KPHB studio outside peak class hours for uninterrupted focus.'
      }
    ]
  },
  gallery: [
    {
      id: 'g1',
      title: 'Explosive Kinetic Jump',
      style: 'Movement Study',
      image: '/images/hero.jpg',
      aspect: 'large'
    },
    {
      id: 'g2',
      title: 'Master Arjun — Focus',
      style: 'Choreographer Portrait',
      image: '/images/arjun.jpg',
      aspect: 'tall'
    },
    {
      id: 'g3',
      title: 'Urban Street Isolation',
      style: 'Hip Hop Discipline',
      image: '/images/hiphop.jpg',
      aspect: 'wide'
    },
    {
      id: 'g4',
      title: 'Contemporary Suspension',
      style: 'Lyrical Extension',
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1200',
      aspect: 'tall'
    },
    {
      id: 'g5',
      title: 'Commercial Stage Crew',
      style: 'Bollywood & Stage',
      image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=1200',
      aspect: 'wide'
    },
    {
      id: 'g6',
      title: 'Latin Partner Spin',
      style: 'Salsa Timing',
      image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&q=80&w=1200',
      aspect: 'square'
    }
  ],
  reviews: [
    {
      id: 'r1',
      author: 'Pradeep Kumar',
      role: 'Student · Advanced Hip-Hop',
      rating: 5,
      date: 'Google Verified Review',
      text: 'Master Arjun is an extraordinary choreographer. His patience with beginners while keeping the energy explosive is unmatched in Hyderabad. In 3 months, my body control and freestyle rhythm have completely transformed.',
      verifiedSource: 'Google Maps Review'
    },
    {
      id: 'r2',
      author: 'Sneha Reddy',
      role: 'Student · Bollywood & Contemporary',
      rating: 5,
      date: 'Google Verified Review',
      text: 'Joined AS Dance Studio for fitness and dance confidence. The technique breakdown and floor-work coaching are unlike anywhere else in KPHB. The studio is disciplined, supportive, and truly inspiring.',
      verifiedSource: 'Google Maps Review'
    },
    {
      id: 'r3',
      author: 'Rahul Varma',
      role: 'College Dance Lead',
      rating: 5,
      date: 'Google Verified Review',
      text: 'Arjun sir choreographed our college competition piece. We took 1st place! His vision for musicality, clean transitions, and crowd engagement is top-tier. Highly recommended for anyone serious about dance.',
      verifiedSource: 'Google Maps Review'
    },
    {
      id: 'r4',
      author: 'Ananya Joshi',
      role: 'Member · Zumba & Weekend Flow',
      rating: 5,
      date: 'Google Verified Review',
      text: 'High-intensity morning Zumba and weekend batches are the highlight of my week. The studio vibe is welcoming, energetic, and purely disciplined. Arjun sir ensures nobody feels left behind.',
      verifiedSource: 'Google Maps Review'
    }
  ],
  pricingTiers: [
    {
      id: 'trial',
      name: 'TRIAL EXPERIENCE',
      badge: 'FIRST VISIT',
      sessions: 'Single 60-min Class',
      suitableFor: 'New dancers testing the studio vibe & teaching style',
      features: [
        'Full participation in any open group class',
        'Personal fitness & flexibility assessment',
        'Direct 10-min post-class consultation with Arjun Sir',
        'Studio tour & batch schedule recommendation'
      ],
      ctaText: 'ENQUIRE FOR TRIAL'
    },
    {
      id: 'monthly',
      name: 'MONTHLY BATCH ACCESS',
      badge: 'MOST POPULAR',
      popular: true,
      sessions: '12 Classes / Month (3x Weekly)',
      suitableFor: 'Dancers dedicated to progressive skill building',
      features: [
        'Structured curriculum progression in your chosen style',
        'Access to morning or evening batch times',
        'Performance routine video recording & review',
        'Priority enrollment in quarterly studio showcases'
      ],
      ctaText: 'ENQUIRE FOR MONTHLY'
    },
    {
      id: 'private',
      name: '1-ON-1 MASTER MENTORSHIP',
      badge: 'ELITE TRAINING',
      sessions: 'Custom Private Packages',
      suitableFor: 'Audition prep, wedding couples, or rapid mastery',
      features: [
        'Direct 1-on-1 private floor time with Arjun Punnani',
        'Custom bespoke choreography tailored to your anatomy',
        'Frame-by-frame slow motion video critique',
        'Flexible studio slot scheduling'
      ],
      ctaText: 'BOOK PRIVATE COACHING'
    }
  ],
  faqs: [
    {
      q: 'I have two left feet and zero dance experience. Can I join?',
      a: 'Absolutely. Over 60% of our students started with zero prior background. Master Arjun specializes in breaking complex rhythm and footwork into simple, repeatable biomechanical steps. You will feel comfortable from Day 1.'
    },
    {
      q: 'Where exactly is AS Dance Studio located in KPHB?',
      a: 'We are situated at Flat No. 101, 1st Floor, Pragathi Heights, near Geetha Theatre and opposite Lepakshi College in KPHB Phase 9, Kukatpally, Hyderabad. Free two-wheeler and street four-wheeler parking are available.'
    },
    {
      q: 'What should I wear to my first class?',
      a: 'Wear comfortable, breathable athletic clothing (sweatpants, leggings, or loose joggers with a breathable t-shirt) and clean, flat-soled sneakers or training shoes.'
    },
    {
      q: 'Do you provide choreography for weddings, sangeets, and corporate events?',
      a: 'Yes. Master Arjun and our senior team choreograph custom, cinematic routines for couples, family groups, and corporate stage performances with audio editing and rehearsal management included.'
    }
  ]
};
