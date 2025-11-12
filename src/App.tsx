import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Certificate, Code, Lightning, Envelope, GithubLogo, LinkedinLogo, Download } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/components/theme-toggle'

type CertificateEntry = {
  id: string
  title: string
  subtitle: string
  details: { label: string; value: string }[]
  highlights: string[]
  codes?: { label: string; value: string }[]
  footnote?: { heading: string; lines: string[] }
  tags?: string[]
  verify?: { label: string; href: string }
  download: { label: string; href: string }
}

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const heroHighlights = [
    {
      id: 'cloud-builds',
      icon: Lightning,
      title: 'Cloud-Native Builds',
      description: 'Designing scalable AWS environments with resilient infrastructure patterns.'
    },
    {
      id: 'automation',
      icon: Code,
      title: 'Automation Mindset',
      description: 'Creating scripted workflows and CI/CD practices for consistent deployments.'
    },
    {
      id: 'credentials',
      icon: Certificate,
      title: 'Verified Credentials',
      description: 'Certified by Magic Bus India Foundation, Forage, and GitHub/DataCamp programs.'
    }
  ]

  const certificates: CertificateEntry[] = [
    {
      id: 'magic-bus',
      title: 'Tech Fundamentals & Employability Skilling Programme',
      subtitle: 'On-the-Job Training Certificate',
      details: [
        { label: 'Organization', value: 'Magic Bus India Foundation' },
        { label: 'Duration', value: '210 Hours' },
        { label: 'Training Period', value: 'May 19, 2025 - July 30, 2025' },
        { label: 'Issued On', value: 'Aug 29, 2025' },
        { label: 'Focus Area', value: 'AWS Core Services & Features' }
      ],
      highlights: [
        'Completed the 210-hour Tech Fundamentals & Employability Skilling Programme (On-the-Job Training).',
        'Exposed to AWS Core Services & Features responsibilities throughout the engagement.',
        'Demonstrated diligence, professionalism, adaptability, and a strong willingness to learn.'
      ],
      footnote: {
        heading: 'Certified By',
        lines: [
          'Nanda Kumar M',
          'Sr. Technical Consultant (AWS Re/Start), Magic Bus India Foundation',
          'System-generated certificate; seal or signature not required.'
        ]
      },
      tags: ['AWS Re/Start', 'Professional Training', 'Employability Skills', 'On-the-Job Experience'],
      download: {
        label: 'Download Certificate',
        href: '/documents/Bhargav_OJT.pdf'
      }
    },
    {
      id: 'forage-solutions-architecture',
      title: 'Solutions Architecture Job Simulation',
      subtitle: 'Certificate of Completion',
      details: [
        { label: 'Issuer', value: 'Forage' },
        { label: 'Completion Date', value: 'Nov 6, 2025' },
        { label: 'Program Window', value: 'Aug 2025 - Nov 2025' },
        { label: 'Focus', value: 'Designing a simple, scalable hosting architecture' }
      ],
      highlights: [
        'Completed practical tasks aligned with AWS solutions architecture scenarios.'
      ],
      codes: [
        { label: 'Enrollment Code', value: 'kuYMnuay5KMSu7cih' },
        { label: 'User Code', value: 'uAQmEZWxdhT6QqPP7' }
      ],
      footnote: {
        heading: 'Signed By',
        lines: ['Tom Brunskill', 'CEO & Co-Founder, Forage']
      },
      tags: ['Architecture Design', 'Elastic Beanstalk', 'Scalability', 'Client Communication'],
      download: {
        label: 'Download Certificate',
        href: '/documents/completion_certificate.pdf'
      }
    },
    {
      id: 'github-foundations',
      title: 'GitHub Foundations',
      subtitle: 'Certificate of Completion',
      details: [
        { label: 'Issuer', value: 'GitHub & DataCamp' },
        { label: 'Completion Date', value: 'Aug 5, 2025' },
        { label: 'Program Length', value: '9 Hours' }
      ],
      highlights: [
        'Completed the GitHub Foundations curriculum hosted by DataCamp.',
        'Practiced collaborative Git workflows including branching, pull requests, and reviews.',
        'Explored GitHub automation fundamentals covering issues, project boards, and GitHub Actions basics.'
      ],
      footnote: {
        heading: 'Signed By',
        lines: ['Jonathan Cornelissen', 'CEO, DataCamp']
      },
      tags: ['Git Fundamentals', 'Collaboration', 'Pull Requests', 'GitHub Actions'],
      download: {
        label: 'Download Certificate',
        href: '/documents/github_foundation.pdf'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-card/80 backdrop-blur-md border-b border-border z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
          <motion.h1 
            className="text-xl font-bold text-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            BKS
          </motion.h1>
          <div className="flex items-center gap-4">
            <motion.div 
              className="hidden md:flex gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Skills</button>
              <button onClick={() => scrollToSection('certifications')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Certifications</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</button>
            </motion.div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section className="relative overflow-hidden bg-gradient-to-b from-muted/40 via-background to-background">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -right-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] max-w-6xl mx-auto">
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerChildren}
                className="space-y-8"
              >
                <motion.div variants={fadeInUp}>
                  <Badge variant="secondary" className="uppercase tracking-[0.2em] text-[0.65rem]">
                    AWS Cloud Enthusiast
                  </Badge>
                </motion.div>
                <motion.div variants={fadeInUp} className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                    Bhargav Kumar Saha
                  </h1>
                  <p className="text-xl sm:text-2xl text-muted-foreground">
                    DevOps & Cloud Infrastructure explorer crafting resilient AWS solutions and automation-first workflows.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
                    Based in Bengaluru, I translate 210+ hours of AWS Re/Start training and hands-on virtual experiences into production-ready cloud architectures.
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection('contact')}>
                    <Envelope className="mr-2" weight="bold" />
                    Get In Touch
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('certifications')}>
                    <Certificate className="mr-2" weight="bold" />
                    View Certifications
                  </Button>
                </motion.div>
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 max-w-xl"
                >
                  <div className="rounded-xl border border-border/60 bg-card/70 p-4 backdrop-blur">
                    <div className="text-3xl font-bold text-primary">210+</div>
                    <div className="text-sm text-muted-foreground">Hours of AWS Immersion</div>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-card/70 p-4 backdrop-blur">
                    <div className="text-3xl font-bold text-accent">3</div>
                    <div className="text-sm text-muted-foreground">Verified Certifications</div>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-card/70 p-4 backdrop-blur">
                    <div className="text-3xl font-bold text-primary">2025</div>
                    <div className="text-sm text-muted-foreground">Ready for Cloud Roles</div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/25 via-transparent to-accent/30 opacity-70 blur-2xl" />
                <Card className="relative overflow-hidden border-border/60 bg-card/90 shadow-2xl backdrop-blur">
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                  <CardContent className="relative p-6 lg:p-7 space-y-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Profile Snapshot</p>
                        <h3 className="text-2xl font-semibold text-foreground">Cloud & DevOps Readiness</h3>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        Open to Work
                      </Badge>
                    </div>
                    <Separator />
                    <div className="space-y-4">
                      {heroHighlights.map(({ id, icon: Icon, title, description }) => (
                        <div key={id} className="flex gap-4 rounded-xl border border-border/60 bg-background/70 p-4">
                          <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15">
                            <Icon size={22} weight="bold" className="text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{title}</div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Separator />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg border border-border/60 bg-muted/40 p-4">
                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Core Stack</div>
                        <p className="text-base font-semibold text-foreground">AWS • Linux • Python • CI/CD</p>
                      </div>
                      <div className="rounded-lg border border-border/60 bg-muted/40 p-4">
                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Location</div>
                        <p className="text-base font-semibold text-foreground">Bengaluru, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl sm:text-5xl font-semibold text-foreground mb-12 text-center">About Me</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <GraduationCap size={24} weight="bold" className="text-primary" />
                      </div>
                      <CardTitle>Education</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold text-lg mb-2">KNS Institute of Technology</h3>
                    <p className="text-muted-foreground">
                      Currently pursuing technical education with a focus on emerging technologies and practical skill development.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Briefcase size={24} weight="bold" className="text-accent" />
                      </div>
                      <CardTitle>Training Experience</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-semibold text-lg mb-2">Magic Bus India Foundation</h3>
                    <p className="text-muted-foreground mb-3">
                      Completed intensive 210-hour Tech Fundamentals & Employability Skilling Programme (On-the-Job Training)
                    </p>
                    <p className="text-sm text-muted-foreground">May 2025 - July 2025</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              className="max-w-6xl mx-auto mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="grid sm:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">210+</div>
                      <div className="text-sm text-muted-foreground">Training Hours</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">AWS</div>
                      <div className="text-sm text-muted-foreground">Core Services Focus</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">2025</div>
                      <div className="text-sm text-muted-foreground">Certified</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Throughout my training, I've been exposed to various tasks and responsibilities related to 
                <span className="font-semibold text-foreground"> AWS Core Services & Features</span>. 
                I've demonstrated <span className="font-semibold text-foreground">diligence</span>, 
                <span className="font-semibold text-foreground"> professionalism</span>, 
                <span className="font-semibold text-foreground"> adaptability</span>, and a 
                <span className="font-semibold text-foreground"> strong willingness to learn</span> throughout the program.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl sm:text-5xl font-semibold text-foreground mb-4 text-center">Skills & Expertise</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Technical competencies and professional qualities developed through intensive training and hands-on experience
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Lightning size={24} weight="bold" className="text-primary" />
                      </div>
                      <div>
                        <CardTitle>Cloud & Technical Skills</CardTitle>
                        <CardDescription>AWS and technology fundamentals</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="px-4 py-2 text-sm">AWS Core Services</Badge>
                      <Badge variant="secondary" className="px-4 py-2 text-sm">AWS Features</Badge>
                      <Badge variant="secondary" className="px-4 py-2 text-sm">Cloud Computing</Badge>
                      <Badge variant="secondary" className="px-4 py-2 text-sm">Tech Fundamentals</Badge>
                      <Badge variant="secondary" className="px-4 py-2 text-sm">On-the-Job Training</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Code size={24} weight="bold" className="text-accent" />
                      </div>
                      <div>
                        <CardTitle>Professional Qualities</CardTitle>
                        <CardDescription>Soft skills and work ethic</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold mb-1">Diligence</h4>
                          <p className="text-sm text-muted-foreground">Consistent attention to detail and commitment to quality</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold mb-1">Professionalism</h4>
                          <p className="text-sm text-muted-foreground">Maintains high standards in work and communication</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold mb-1">Adaptability</h4>
                          <p className="text-sm text-muted-foreground">Quick to learn and adjust to new challenges</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold mb-1">Willingness to Learn</h4>
                          <p className="text-sm text-muted-foreground">Eager to acquire new skills and knowledge</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="certifications" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl sm:text-5xl font-semibold text-foreground mb-4 text-center">Certifications</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Professional training credentials and achievements
              </p>
            </motion.div>
            <div className="grid gap-8 lg:grid-cols-3">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={certificate.id}
                  className="h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                    <div className="bg-gradient-to-r from-primary to-accent p-6">
                      <div className="flex items-center gap-4 text-white">
                        <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                          <Certificate size={32} weight="bold" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{certificate.title}</h3>
                          <p className="text-white/90">{certificate.subtitle}</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="pt-6 flex-1 flex flex-col">
                      <div className="space-y-4 flex-1">
                        <div className="grid sm:grid-cols-2 gap-4">
                          {certificate.details.map((detail) => (
                            <div key={`${certificate.id}-${detail.label}`}>
                              <div className="text-sm font-medium text-muted-foreground mb-1">{detail.label}</div>
                              <div className="font-semibold text-foreground">{detail.value}</div>
                            </div>
                          ))}
                        </div>

                        {certificate.highlights.length > 0 && (
                          <>
                            <Separator />
                            <div>
                              <div className="text-sm font-medium text-muted-foreground mb-2">Highlights</div>
                              <ul className="space-y-2">
                                {certificate.highlights.map((point) => (
                                  <li key={`${certificate.id}-${point}`} className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                                    <span className="text-sm text-foreground">{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        )}

                        {certificate.tags && certificate.tags.length > 0 && (
                          <>
                            <Separator />
                            <div>
                              <div className="text-sm font-medium text-muted-foreground mb-2">Key Skills</div>
                              <div className="flex flex-wrap gap-2">
                                {certificate.tags.map((tag) => (
                                  <Badge
                                    key={`${certificate.id}-${tag}`}
                                    variant="outline"
                                    className="bg-background/70 text-xs font-medium"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </>
                        )}

                        {certificate.codes && (
                          <>
                            <Separator />
                            <div>
                              <div className="text-sm font-medium text-muted-foreground mb-2">Verification Codes</div>
                              <div className="grid gap-3">
                                {certificate.codes.map((code) => (
                                  <div
                                    key={`${certificate.id}-${code.label}`}
                                    className="flex items-center justify-between rounded-md border border-border px-3 py-2"
                                  >
                                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{code.label}</span>
                                    <span className="text-sm font-semibold text-foreground">{code.value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        )}

                        {certificate.footnote && (
                          <>
                            <Separator />
                            <div className="bg-muted/50 rounded-lg p-4 space-y-1">
                              <div className="text-sm font-medium text-muted-foreground">{certificate.footnote.heading}</div>
                              {certificate.footnote.lines.map((line, footnoteIndex) => (
                                <div
                                  key={`${certificate.id}-footnote-${footnoteIndex}`}
                                  className={`text-sm ${footnoteIndex === 0 ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}
                                >
                                  {line}
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                      <div className="pt-4">
                        <div className={`grid gap-3 ${certificate.verify ? 'sm:grid-cols-2' : ''}`}>
                          <Button asChild className="w-full">
                            <a href={certificate.download.href} download>
                              <Download className="mr-2" weight="bold" />
                              {certificate.download.label}
                            </a>
                          </Button>
                          {certificate.verify && (
                            <Button asChild variant="outline" className="w-full">
                              <a href={certificate.verify.href} target="_blank" rel="noopener noreferrer">
                                {certificate.verify.label}
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl sm:text-5xl font-semibold text-foreground mb-4 text-center">Get In Touch</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, or tech conversations
              </p>
            </motion.div>

            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <a 
                      href="mailto:bhargavsah2026@gmail.com" 
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Envelope size={24} weight="bold" className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-muted-foreground">Email</div>
                        <div className="text-foreground">bhargavsah2026@gmail.com</div>
                      </div>
                    </a>

                    <a 
                      href="https://www.linkedin.com/in/bhargavsah/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <LinkedinLogo size={24} weight="bold" className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-muted-foreground">LinkedIn</div>
                        <div className="text-foreground">Connect</div>
                      </div>
                    </a>

                    <a 
                      href="https://github.com/bhargav59" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <GithubLogo size={24} weight="bold" className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-muted-foreground">GitHub</div>
                        <div className="text-foreground">View Projects</div>
                      </div>
                    </a>

                    <a
                      href="/documents/bhargav_resume.pdf"
                      download
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all group"
                    >
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Download size={24} weight="bold" className="text-accent" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-sm text-muted-foreground">Resume</div>
                        <div className="text-foreground">Download/Print</div>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">© 2025 Bhargav Kumar Saha. All rights reserved.</p>
            <p className="text-xs mt-2">Built with passion for technology and continuous learning</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App