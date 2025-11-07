import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Certificate, Code, Lightning, Envelope, GithubLogo, LinkedinLogo, Download } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

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
        </nav>
      </header>

      <main className="pt-16">
        <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-20">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
                  Bhargav Kumar Saha
                </h1>
              </motion.div>
              <motion.p
                className="text-xl sm:text-2xl text-muted-foreground mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                AWS Cloud Enthusiast | Tech Professional
              </motion.p>
              <motion.p
                className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                KNS Institute of Technology Student | Certified in AWS Core Services & Features
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
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
            </motion.div>
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

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-primary to-accent p-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Certificate size={32} weight="bold" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Tech Fundamentals & Employability Skilling Programme</h3>
                      <p className="text-white/90">On-the-Job Training Certificate</p>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">Organization</div>
                        <div className="font-semibold">Magic Bus India Foundation</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">Duration</div>
                        <div className="font-semibold">210 Hours</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">Training Period</div>
                        <div className="font-semibold">May 19, 2025 - July 30, 2025</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground mb-1">Focus Area</div>
                        <div className="font-semibold">AWS Core Services & Features</div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Key Highlights</div>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                          <span className="text-sm">Exposed to various tasks and responsibilities related to AWS Core Services & Features</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                          <span className="text-sm">Exhibited diligence, professionalism, adaptability throughout training</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                          <span className="text-sm">Demonstrated strong willingness to learn and grow</span>
                        </li>
                      </ul>
                    </div>

                    <Separator />

                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="text-sm font-medium text-muted-foreground mb-2">Certified By</div>
                      <div className="font-semibold">Nanda Kumar M</div>
                      <div className="text-sm text-muted-foreground">Sr. Technical Consultant (AWS Re/Start)</div>
                      <div className="text-sm text-muted-foreground">Magic Bus India Foundation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
                      href="mailto:bhargav.saha@example.com" 
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Envelope size={24} weight="bold" className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-muted-foreground">Email</div>
                        <div className="text-foreground">Contact Me</div>
                      </div>
                    </a>

                    <a 
                      href="https://linkedin.com" 
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
                      href="https://github.com" 
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

                    <button
                      onClick={() => window.print()}
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all group"
                    >
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <Download size={24} weight="bold" className="text-accent" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-sm text-muted-foreground">Resume</div>
                        <div className="text-foreground">Download/Print</div>
                      </div>
                    </button>
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