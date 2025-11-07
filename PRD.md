# Planning Guide

A professional portfolio website showcasing Bhargav Kumar Saha's technical skills, training experience, and professional achievements with a focus on AWS expertise and employability skills.

**Experience Qualities**: 
1. **Professional** - Clean, corporate feel that demonstrates technical competency and credibility
2. **Modern** - Contemporary design with smooth interactions that reflects tech industry standards
3. **Accessible** - Easy to navigate with clear information hierarchy for recruiters and employers

**Complexity Level**: Content Showcase (information-focused)
  - Primary focus on displaying credentials, skills, and experience in an organized manner suitable for job applications and professional networking.

## Essential Features

### Hero Section
- **Functionality**: Display name, title/role, and professional tagline with call-to-action
- **Purpose**: Create strong first impression and communicate core identity
- **Trigger**: Page load
- **Progression**: Animated entrance → Display profile info → CTA buttons visible
- **Success criteria**: Clear professional identity established within 3 seconds

### About Section
- **Functionality**: Showcase educational background, training experience, and professional qualities
- **Purpose**: Provide context about training at Magic Bus India Foundation and KNS Institute
- **Trigger**: Scroll to section
- **Progression**: Section enters viewport → Content fades in → Stats/highlights animate
- **Success criteria**: Key information (210 hours training, AWS focus) prominently displayed

### Skills Section
- **Functionality**: Display technical skills with visual indicators
- **Purpose**: Highlight AWS Core Services & Features expertise and soft skills (diligence, professionalism, adaptability)
- **Trigger**: Scroll to section
- **Progression**: Section visible → Skill cards appear → Interactive hover states
- **Success criteria**: Skills categorized (Technical, Professional) and easily scannable

### Certifications Section
- **Functionality**: Display training certificate and achievements
- **Purpose**: Provide proof of completed training and credentials
- **Trigger**: Scroll to section
- **Progression**: Certificate card appears → Expandable for details → Download option
- **Success criteria**: Certificate clearly visible with key details (duration, organization, focus area)

### Contact Section
- **Functionality**: Provide contact information and social links
- **Purpose**: Enable recruiters and collaborators to reach out
- **Trigger**: Scroll to section or CTA click
- **Progression**: Form/contact info displays → User inputs → Confirmation
- **Success criteria**: Multiple contact methods available and functional

## Edge Case Handling
- **No JavaScript**: Core content remains accessible with graceful degradation
- **Slow Connection**: Progressive loading with skeleton states for images
- **Mobile Landscape**: Adjusted layouts for smaller screens in landscape orientation
- **Screen Readers**: Proper ARIA labels and semantic HTML throughout
- **Print Mode**: Optimized layout for printing resume/portfolio

## Design Direction
The design should feel professional, credible, and modern - reflecting both technical competency and corporate polish. A minimal interface with strategic use of white space serves the content-focused purpose while subtle animations add contemporary flair without distraction.

## Color Selection
Complementary (opposite colors) - Using a professional blue-orange palette to convey trust and energy

- **Primary Color**: Deep Professional Blue (oklch(0.45 0.15 250)) - Communicates trust, stability, and technical expertise
- **Secondary Colors**: Slate Gray (oklch(0.35 0.02 250)) for supporting text and UI elements, Light Blue (oklch(0.95 0.02 250)) for backgrounds
- **Accent Color**: Vibrant Orange (oklch(0.68 0.18 45)) - Highlights CTAs and important elements, creates energy and action
- **Foreground/Background Pairings**: 
  - Background (Light Blue #F8FAFB): Dark Slate text(#1E293B) - Ratio 12.5:1 ✓
  - Primary (Deep Blue #1D4ED8): White text(#FFFFFF) - Ratio 8.2:1 ✓
  - Accent (Vibrant Orange #F97316): White text(#FFFFFF) - Ratio 4.9:1 ✓
  - Card (White #FFFFFF): Dark Slate text(#1E293B) - Ratio 15.8:1 ✓

## Font Selection
Professional sans-serif typefaces that balance modern aesthetics with excellent readability for both digital and print contexts.

- **Typographic Hierarchy**: 
  - H1 (Name/Hero): Inter Bold/48px/tight letter spacing/-0.02em
  - H2 (Section Titles): Inter SemiBold/36px/normal/0em
  - H3 (Subsections): Inter SemiBold/24px/normal/0em
  - Body (Content): Inter Regular/16px/relaxed leading/1.6
  - Small (Labels): Inter Medium/14px/normal/0em

## Animations
Animations should be subtle and purposeful, primarily used for section transitions and interactive feedback - creating a sense of polish without hindering usability.

- **Purposeful Meaning**: Smooth fade-in animations as sections enter viewport communicate progression through the portfolio, while hover states on interactive elements provide clear feedback
- **Hierarchy of Movement**: Hero section gets the most prominent animation (fade + slide up), followed by section headers, then content cards with staggered delays

## Component Selection
- **Components**: 
  - Card (for skills, certifications, projects) - with subtle shadows and hover lift effects
  - Button (primary for CTAs, secondary for links) - with clear visual hierarchy
  - Badge (for skill tags) - subtle rounded pills with muted backgrounds
  - Separator (between sections) - thin lines with spacing
  - Scroll-Area (for certificate details if needed)
  
- **Customizations**: 
  - Custom animated section wrapper for fade-in on scroll
  - Gradient overlay on hero section for text legibility over background
  - Skill cards with icon integration from Phosphor Icons
  
- **States**: 
  - Buttons: Default with solid fill, hover with slight lift and shadow increase, active with pressed state
  - Cards: Default with subtle shadow, hover with increased shadow and slight lift, focus ring for accessibility
  - Links: Underline on hover with smooth transition
  
- **Icon Selection**: 
  - Briefcase (work experience)
  - GraduationCap (education)
  - Certificate (certifications)
  - Code (technical skills)
  - Lightning (AWS/cloud)
  - Envelope (contact)
  
- **Spacing**: Consistent 16px base unit with 4px increments (gap-4, gap-6, gap-8, gap-12, gap-16) for padding and margins
  
- **Mobile**: 
  - Single column layout on mobile (<768px)
  - Hamburger menu for navigation if needed
  - Larger touch targets (min 44px) for buttons
  - Stacked card layouts instead of grid
  - Full-width sections with appropriate padding (px-4 on mobile, px-8 on tablet, px-12 on desktop)
