import React, { useState, useEffect } from 'react'
import {
  Terminal,
  Cloud,
  Server,
  Shield,
  Cpu,
  Layers,
  Database,
  GitBranch,
  ExternalLink,
  Download,
  Mail,
  CheckCircle2,
  Copy,
  ChevronRight,
  Sun,
  Moon,
  Menu,
  X,
  FileText,
  Activity,
  ArrowUpRight,
  Code2,
  Check,
  Award,
  Calendar,
  Building2,
  Boxes
} from 'lucide-react'

// Clean Brand Icons
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.2a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
    </svg>
  )
}

// Terminal Command Definition
interface CommandOutput {
  command: string
  output: string | React.ReactNode
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [selectedCertModal, setSelectedCertModal] = useState<string | null>(null)
  
  // Terminal state
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState<CommandOutput[]>([
    {
      command: 'aws sts get-caller-identity',
      output: JSON.stringify({
        UserId: "AROA2EXAMPLEDEVUSER",
        Account: "115895969590",
        Arn: "arn:aws:iam::115895969590:user/bhargav-sah",
        Role: "Cloud & DevOps Engineer"
      }, null, 2)
    },
    {
      command: 'terraform plan -compact-warnings',
      output: '[OK] Infrastructure matches desired state. 0 to add, 0 to change, 0 to destroy. Status: Resilient.'
    }
  ])

  // Active architecture tab state
  const [activeArchTab, setActiveArchTab] = useState<'vpc' | 'serverless' | 'cicd'>('vpc')

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null
    if (saved) {
      setTheme(saved)
      if (saved === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('portfolio-theme', newTheme)
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('bhargavsah2026@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleCommand = (cmdStr?: string) => {
    const query = (cmdStr || terminalInput).trim().toLowerCase()
    if (!query) return

    let out: React.ReactNode = ''
    switch (query) {
      case 'help':
        out = (
          <div className="space-y-1 text-slate-300">
            <p>Available commands:</p>
            <p><span className="text-cyan-400">whoami</span> - Display engineer profile summary</p>
            <p><span className="text-cyan-400">aws status</span> - Check mock AWS services status</p>
            <p><span className="text-cyan-400">skills</span> - List primary technical stack</p>
            <p><span className="text-cyan-400">projects</span> - List flagship cloud projects</p>
            <p><span className="text-cyan-400">contact</span> - Get direct contact information</p>
            <p><span className="text-cyan-400">clear</span> - Clear terminal session</p>
          </div>
        )
        break
      case 'whoami':
        out = 'Bhargav Kumar Saha — Cloud & DevOps Engineer based in Bengaluru. Specializing in AWS Architecture, Serverless, and IaC automation.'
        break
      case 'aws status':
        out = (
          <div className="space-y-1 text-emerald-400 font-mono text-xs">
            <p>● us-east-1 (N. Virginia): Operational (Latency: 18ms)</p>
            <p>● ap-south-1 (Mumbai): Operational (Latency: 6ms)</p>
            <p>● Services: EC2 [Active], VPC [Healthy], ALB [Routing], RDS [Multi-AZ Synchronized]</p>
          </div>
        )
        break
      case 'skills':
        out = 'AWS (EC2, VPC, ALB, RDS, S3, Lambda, IAM), Docker, Kubernetes, Terraform, Python, Bash, CI/CD, Linux (Ubuntu/Amazon Linux).'
        break
      case 'projects':
        out = '1. Automated EC2 Deployment Pipeline (80% time cut)\n2. High-Availability Multi-Tier VPC (99.9% uptime)\n3. HEPro AI Serverless Microservices Platform'
        break
      case 'contact':
        out = 'Email: bhargavsah2026@gmail.com | LinkedIn: /in/bhargavsah | GitHub: @bhargav59'
        break
      case 'clear':
        setTerminalHistory([])
        setTerminalInput('')
        return
      default:
        out = `bash: command not found: ${query}. Type 'help' for available commands.`
    }

    setTerminalHistory(prev => [...prev, { command: query, output: out }])
    setTerminalInput('')
  }

  // Certifications list
  const certs = [
    {
      id: 'hepro',
      title: 'Cloud Engineering Internship',
      issuer: 'HEPro (AI Product Development)',
      period: 'Nov 2025 - Jan 2026',
      badge: 'Serverless AWS & AI Platform',
      file: '/documents/hepro_certificate.pdf',
      skills: ['AWS Lambda', 'API Gateway', 'Serverless', 'Cloud Security', 'Cost Optimization'],
      description: 'Two-month project internship in Cloud Engineering contributing to scalable serverless microservices for HEPro AI human-centric mentoring platform.'
    },
    {
      id: 'magicbus',
      title: 'AWS Re/Start - Tech Fundamentals & OJT',
      issuer: 'Magic Bus India Foundation',
      period: '210 Hours (May - July 2025)',
      badge: '210 Hours Immersion',
      file: '/documents/Bhargav_OJT.pdf',
      skills: ['AWS Core Services', 'EC2 & S3', 'VPC & RDS', 'IAM Security', 'Shell Scripting'],
      description: 'Intensive 210-hour On-the-Job Training focused on AWS Core Services, automation workflows, and production infrastructure under senior AWS technical consultants.'
    },
    {
      id: 'forage',
      title: 'AWS APAC Solutions Architecture',
      issuer: 'Forage (AWS Job Simulation)',
      period: 'Completed Nov 2025',
      badge: 'Verified Sim: kuYMnuay5KMSu7cih',
      file: '/documents/completion_certificate.pdf',
      skills: ['Elastic Beanstalk', 'Scalability Analysis', 'Cost Calculations', 'Architecture Design'],
      description: 'Engineered scalable hosting infrastructure for a rapidly scaling client application experiencing high latency, drafting comprehensive functional blueprints and cost estimations.'
    },
    {
      id: 'github',
      title: 'GitHub Foundations',
      issuer: 'DataCamp & GitHub',
      period: 'Completed Aug 2025',
      badge: 'Credential #677,923',
      file: '/documents/github_foundation.pdf',
      skills: ['Git Branching', 'GitHub Actions', 'Code Review Workflows', 'CI/CD Automation'],
      description: 'Comprehensive curriculum on professional version control workflows, repository security, collaborative team practices, and GitHub Actions continuous integration.'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      
      {/* BACKGROUND DECORATIVE GRID */}
      <div className="fixed inset-0 pointer-events-none cloud-grid opacity-75 z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-sky-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none z-0" />

      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
              <Cloud className="w-4 h-4" />
            </div>
            <span className="font-mono font-bold tracking-tight text-base sm:text-lg">
              bhargav<span className="text-sky-400">.cloud</span>
            </span>
            <span className="flex items-center gap-1.5 ml-2 text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Live
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#architecture" className="hover:text-foreground transition-colors">Architecture</a>
            <a href="#terminal" className="hover:text-foreground transition-colors">Terminal</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#certifications" className="hover:text-foreground transition-colors">Credentials</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg border border-border bg-card/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <a
              href="/documents/bhargav_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30 hover:bg-sky-500/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-md px-6 py-4 space-y-3 font-medium">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-sky-400">About</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-sky-400">Projects</a>
            <a href="#architecture" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-sky-400">Architecture</a>
            <a href="#terminal" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-sky-400">Terminal</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-sky-400">Skills</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-sky-400">Experience</a>
            <a href="#certifications" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-sky-400">Credentials</a>
            <div className="pt-2 border-t border-border flex gap-3">
              <a
                href="/documents/bhargav_resume.pdf"
                className="w-full text-center py-2 rounded-lg text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-24 space-y-28">

        {/* HERO SECTION */}
        <section className="space-y-8">
          
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-mono">
            <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>Open to Cloud & DevOps Roles 2026 • Bengaluru, India</span>
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Architecting Resilient <br />
              <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                AWS Cloud Infrastructure
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Hi, I'm <strong className="text-foreground font-semibold">Bhargav Kumar Saha</strong>. 
              DevOps and Cloud Infrastructure practitioner turning complex systems into automated, scalable, and cost-effective cloud architectures.
            </p>
          </div>

          {/* Key CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-sky-500 text-slate-950 hover:bg-sky-400 shadow-glow-cyan transition-all"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="/documents/bhargav_resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-border bg-card/70 hover:bg-muted text-foreground transition-colors"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-mono border border-border bg-card/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? 'Email Copied!' : 'bhargavsah2026@gmail.com'}</span>
            </button>
          </div>

          {/* Metric Highlights Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/80">
            <div className="p-4 rounded-xl border border-border/60 bg-card/40">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">210+ Hrs</div>
              <div className="text-xs text-muted-foreground mt-1">AWS Re/Start Immersion</div>
            </div>
            <div className="p-4 rounded-xl border border-border/60 bg-card/40">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">80%</div>
              <div className="text-xs text-muted-foreground mt-1">Provisioning Time Cut</div>
            </div>
            <div className="p-4 rounded-xl border border-border/60 bg-card/40">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">99.9%</div>
              <div className="text-xs text-muted-foreground mt-1">Target VPC Uptime</div>
            </div>
            <div className="p-4 rounded-xl border border-border/60 bg-card/40">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">4 Verified</div>
              <div className="text-xs text-muted-foreground mt-1">Industry Certifications</div>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About My Engineering Journey</h2>
              <p className="text-sm text-muted-foreground">Practical hands-on training, internships, and cloud specialization</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed bg-card/40 border border-border/70 p-6 rounded-2xl">
              <p>
                I am a final-year Computer Science student at <strong className="text-foreground">KNS Institute of Technology (Visvesvaraya Technological University)</strong> in Bengaluru, with dedicated training and internship experience in Cloud Architecture and DevOps engineering.
              </p>
              <p>
                Following my completion of the intensive <strong className="text-foreground">210-hour AWS Re/Start</strong> program with Magic Bus India Foundation, I served as a <strong className="text-foreground">Cloud Engineering Intern at HEPro</strong>, where I developed and deployed cloud-native serverless solutions on AWS powering AI mentoring platforms.
              </p>
              <p>
                My passion lies in <strong className="text-foreground">Infrastructure as Code (IaC)</strong>, automated CI/CD pipelines, container orchestration, and multi-tier high-availability infrastructure design.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-md bg-secondary text-foreground border border-border">AWS Solutions</span>
                <span className="px-3 py-1 rounded-md bg-secondary text-foreground border border-border">Serverless (Lambda)</span>
                <span className="px-3 py-1 rounded-md bg-secondary text-foreground border border-border">Terraform & Bash</span>
                <span className="px-3 py-1 rounded-md bg-secondary text-foreground border border-border">Docker & GitOps</span>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="space-y-4 bg-card/50 border border-border/80 p-6 rounded-2xl flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="font-semibold text-sm tracking-wide uppercase text-muted-foreground">Snapshot</h3>
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div>
                    <span className="text-muted-foreground block text-xs">Degree</span>
                    <span className="font-medium text-foreground">B.E. Computer Science (VTU, 2026)</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-xs">Location</span>
                    <span className="font-medium text-foreground">Bengaluru, Karnataka, India</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-xs">Specialization</span>
                    <span className="font-medium text-foreground">AWS Cloud, Linux, CI/CD, IaC</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-xs">Recent Role</span>
                    <span className="font-medium text-emerald-400">Cloud Engineering Intern (HEPro)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>Domain</span>
                <a href="https://bhargav-sah.me" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                  bhargav-sah.me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Cloud & DevOps Projects</h2>
                <p className="text-sm text-muted-foreground">Production-grade architectures, automation pipelines, and infrastructure deployments</p>
              </div>
            </div>
            <a
              href="https://github.com/bhargav59"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300"
            >
              <span>Explore GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Project 1 */}
            <div className="group rounded-2xl border border-border/80 bg-card/60 p-6 flex flex-col justify-between hover:border-sky-500/40 hover:shadow-glow-cyan transition-all">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    -80% Provisioning Time
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-sky-400 transition-colors">
                    Automated Cloud Infrastructure Deployment Pipeline
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">AWS EC2 • Bash • Python • IAM • CloudWatch</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Engineered automated EC2 deployment workflows using Bash and Python scripts, slashing manual resource provisioning time by 80%. Implemented automated instance lifecycle management, automated EBS storage attach, and proactive CloudWatch health monitoring daemons.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['AWS EC2', 'Shell Scripting', 'Python Boto3', 'IAM Policies', 'CloudWatch'].map(tag => (
                    <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-border/60 mt-6 flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono">Infrastructure Automation</span>
                <a
                  href="https://github.com/bhargav59"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group rounded-2xl border border-border/80 bg-card/60 p-6 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-glow-emerald transition-all">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    99.9% High Availability
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-emerald-400 transition-colors">
                    Scalable Multi-Tier VPC Application Architecture
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">AWS VPC • ALB • RDS Multi-AZ • EC2 Auto Scaling</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Designed and configured an enterprise-grade 2-tier AWS infrastructure featuring custom public/private subnets across multiple Availability Zones. Placed Application Load Balancers for traffic distribution, paired with isolated RDS MySQL instances with automated snapshot backups.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['AWS VPC', 'Subnet Masking', 'ALB Load Balancer', 'RDS MySQL', 'Security Groups'].map(tag => (
                    <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-border/60 mt-6 flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono">Resilient Cloud Network</span>
                <a
                  href="#architecture"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:underline"
                >
                  <span>View Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group rounded-2xl border border-border/80 bg-card/60 p-6 flex flex-col justify-between hover:border-purple-500/40 transition-all">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Boxes className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    Serverless Production
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-purple-400 transition-colors">
                    HEPro AI Serverless Microservices Platform
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">AWS Lambda • API Gateway • DynamoDB • S3</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Developed during my Cloud Engineering Internship at HEPro. Built serverless backend workflows powering AI mentoring tools, providing zero-idle-cost compute, auto-scaling capabilities, and fine-grained IAM security policies.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['AWS Lambda', 'API Gateway', 'DynamoDB', 'Serverless', 'HEPro AI'].map(tag => (
                    <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-border/60 mt-6 flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono">Internship Engineering</span>
                <a
                  href="/documents/hepro_certificate.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:underline"
                >
                  <span>Verify HEPro Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group rounded-2xl border border-border/80 bg-card/60 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    GitOps & CI/CD
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-amber-400 transition-colors">
                    Continuous Delivery & Container Build Automation
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">GitHub Actions • Docker • Linux • Automated Testing</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Configured end-to-end GitHub Actions workflow triggers building lightweight Docker containers, performing automated security linting, and delivering versioned build artifacts across staging and production branches.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['GitHub Actions', 'Docker', 'Linux CLI', 'Container Registry', 'CI/CD'].map(tag => (
                    <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-border/60 mt-6 flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-mono">Automated Delivery</span>
                <a
                  href="https://github.com/bhargav59"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:underline"
                >
                  <span>Explore Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* INTERACTIVE CLOUD ARCHITECTURE BLUEPRINT */}
        <section id="architecture" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Boxes className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Interactive Cloud Topology</h2>
              <p className="text-sm text-muted-foreground">Architectural design patterns designed and implemented across my projects</p>
            </div>
          </div>

          {/* Blueprint Container */}
          <div className="border border-border/80 bg-card/60 rounded-2xl p-6 space-y-6">
            
            {/* Tab Selectors */}
            <div className="flex flex-wrap gap-2 border-b border-border/80 pb-4">
              <button
                onClick={() => setActiveArchTab('vpc')}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                  activeArchTab === 'vpc'
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-glow-cyan'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                1. Multi-Tier High-Availability VPC
              </button>
              <button
                onClick={() => setActiveArchTab('serverless')}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                  activeArchTab === 'serverless'
                    ? 'bg-purple-500 text-slate-950 font-bold'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                2. Serverless Microservices (HEPro AI)
              </button>
              <button
                onClick={() => setActiveArchTab('cicd')}
                className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                  activeArchTab === 'cicd'
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-glow-emerald'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                3. GitOps Automated CI/CD Pipeline
              </button>
            </div>

            {/* TAB 1: VPC */}
            {activeArchTab === 'vpc' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 rounded-xl border border-sky-500/30 bg-sky-500/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-sky-400 font-semibold">Tier 1: Ingress</span>
                    <h4 className="font-bold text-sm text-foreground">Internet Gateway + Route 53</h4>
                    <p className="text-xs text-muted-foreground">DNS resolution with health checks & latency routing.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-cyan-400 font-semibold">Tier 2: Public Subnet</span>
                    <h4 className="font-bold text-sm text-foreground">Application Load Balancer</h4>
                    <p className="text-xs text-muted-foreground">SSL/TLS termination & SSL certs across AZ-1 & AZ-2.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-emerald-400 font-semibold">Tier 3: Private Subnet</span>
                    <h4 className="font-bold text-sm text-foreground">EC2 Auto Scaling Group</h4>
                    <p className="text-xs text-muted-foreground">Zero direct internet access; NAT Gateway outbound updates.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-purple-400 font-semibold">Tier 4: Isolated Data</span>
                    <h4 className="font-bold text-sm text-foreground">RDS MySQL Multi-AZ</h4>
                    <p className="text-xs text-muted-foreground">Synchronous replication with automatic failover standby.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-background/50 border border-border/80 font-mono text-xs text-muted-foreground space-y-2">
                  <div className="flex items-center gap-2 text-sky-400 font-semibold">
                    <Shield className="w-4 h-4" />
                    <span>Security Group Defense-in-Depth Specification</span>
                  </div>
                  <p>• ALB Security Group: Inbound 443/80 from 0.0.0.0/0 → Outbound to EC2 SG only</p>
                  <p>• Compute EC2 Security Group: Inbound Port 8080 ONLY from ALB SG → No direct public traffic</p>
                  <p>• Database RDS Security Group: Inbound Port 3306 ONLY from EC2 SG → Isolated private subnet</p>
                </div>
              </div>
            )}

            {/* TAB 2: Serverless */}
            {activeArchTab === 'serverless' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-purple-400 font-semibold">Frontend Client</span>
                    <h4 className="font-bold text-sm text-foreground">S3 + CloudFront CDN</h4>
                    <p className="text-xs text-muted-foreground">Global cached edge delivery of web assets.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-purple-400 font-semibold">API Layer</span>
                    <h4 className="font-bold text-sm text-foreground">Amazon API Gateway</h4>
                    <p className="text-xs text-muted-foreground">REST endpoint routing, rate limiting, and JWT auth.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-purple-400 font-semibold">Serverless Compute</span>
                    <h4 className="font-bold text-sm text-foreground">AWS Lambda (Python)</h4>
                    <p className="text-xs text-muted-foreground">Stateless execution triggered on-demand with zero idle fees.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-purple-400 font-semibold">Persistence</span>
                    <h4 className="font-bold text-sm text-foreground">Amazon DynamoDB</h4>
                    <p className="text-xs text-muted-foreground">Single-digit millisecond NoSQL response time at any scale.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-background/50 border border-border/80 font-mono text-xs text-muted-foreground space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Cost & Operational Highlights</span>
                  </div>
                  <p>• Scales instantaneously from 0 to thousands of concurrent requests without server administration.</p>
                  <p>• Validated in production workloads during HEPro AI career platform internship.</p>
                </div>
              </div>
            )}

            {/* TAB 3: CI/CD */}
            {activeArchTab === 'cicd' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-emerald-400 font-semibold">Source</span>
                    <h4 className="font-bold text-sm text-foreground">GitHub PR / Push</h4>
                    <p className="text-xs text-muted-foreground">Branch protection rules & mandatory review gates.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-emerald-400 font-semibold">Automated CI</span>
                    <h4 className="font-bold text-sm text-foreground">GitHub Actions Runner</h4>
                    <p className="text-xs text-muted-foreground">Linting, unit tests, code coverage, vulnerability scan.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-emerald-400 font-semibold">Container Packaging</span>
                    <h4 className="font-bold text-sm text-foreground">Docker Build & Tag</h4>
                    <p className="text-xs text-muted-foreground">Multi-stage minimal image build pushed to AWS ECR / Registry.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-emerald-400 font-semibold">Deployment</span>
                    <h4 className="font-bold text-sm text-foreground">Zero-Downtime Release</h4>
                    <p className="text-xs text-muted-foreground">Automated rollouts with instant rollback on health check fail.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-background/50 border border-border/80 font-mono text-xs text-muted-foreground space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <GitBranch className="w-4 h-4" />
                    <span>GitOps Principles</span>
                  </div>
                  <p>• Git repository acts as the single source of truth for all infrastructure and code states.</p>
                  <p>• Automated GitHub Actions workflow prevents human configuration drift.</p>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* INTERACTIVE DEVOPS TERMINAL */}
        <section id="terminal" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Interactive Cloud CLI</h2>
              <p className="text-sm text-muted-foreground">Test simulated AWS CLI commands or inspect system configs directly in your browser</p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-slate-950 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
            {/* Terminal Top Bar */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-slate-400 text-xs ml-2">bhargav@aws-bastion:~</span>
              </div>
              <span className="text-slate-500 text-xs hidden sm:inline">zsh • session active</span>
            </div>

            {/* Quick Command Suggestion Pills */}
            <div className="p-3 bg-slate-900/40 border-b border-slate-800/80 flex flex-wrap gap-2 text-xs">
              <span className="text-slate-500 self-center">Try:</span>
              <button onClick={() => handleCommand('whoami')} className="px-2.5 py-1 rounded bg-slate-800 text-sky-400 hover:bg-slate-700">whoami</button>
              <button onClick={() => handleCommand('aws status')} className="px-2.5 py-1 rounded bg-slate-800 text-emerald-400 hover:bg-slate-700">aws status</button>
              <button onClick={() => handleCommand('skills')} className="px-2.5 py-1 rounded bg-slate-800 text-cyan-400 hover:bg-slate-700">skills</button>
              <button onClick={() => handleCommand('projects')} className="px-2.5 py-1 rounded bg-slate-800 text-purple-400 hover:bg-slate-700">projects</button>
              <button onClick={() => handleCommand('contact')} className="px-2.5 py-1 rounded bg-slate-800 text-amber-400 hover:bg-slate-700">contact</button>
              <button onClick={() => handleCommand('clear')} className="px-2.5 py-1 rounded bg-slate-800 text-slate-400 hover:bg-slate-700">clear</button>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-6 space-y-4 max-h-[380px] overflow-y-auto">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-emerald-400">bhargav@aws-bastion:~$</span>
                    <span className="text-slate-100 font-semibold">{item.command}</span>
                  </div>
                  <div className="text-slate-300 pl-4 border-l border-slate-800 py-0.5 whitespace-pre-wrap">
                    {item.output}
                  </div>
                </div>
              ))}

              {/* Active prompt input */}
              <form onSubmit={(e) => { e.preventDefault(); handleCommand(); }} className="flex items-center gap-2 pt-2">
                <span className="text-emerald-400 font-bold">bhargav@aws-bastion:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type 'help' or any command above..."
                  className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-600 font-mono text-xs sm:text-sm"
                />
              </form>
            </div>
          </div>
        </section>

        {/* SKILLS MATRIX */}
        <section id="skills" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Technical Competencies</h2>
              <p className="text-sm text-muted-foreground">Core toolchain across cloud, automation, networking, and system engineering</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Cloud */}
            <div className="p-5 rounded-2xl border border-border/80 bg-card/60 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                  <Cloud className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base">AWS Cloud</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground font-mono">
                <li>• EC2 & Auto Scaling</li>
                <li>• VPC, Subnets & Routing</li>
                <li>• ALB & Elastic Beanstalk</li>
                <li>• RDS (MySQL) & DynamoDB</li>
                <li>• S3 & EBS Storage</li>
                <li>• IAM Policies & Roles</li>
                <li>• CloudWatch Monitoring</li>
                <li>• AWS Lambda (Serverless)</li>
              </ul>
            </div>

            {/* DevOps & IaC */}
            <div className="p-5 rounded-2xl border border-border/80 bg-card/60 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <GitBranch className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base">DevOps & IaC</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground font-mono">
                <li>• GitHub Actions (CI/CD)</li>
                <li>• Docker & Containers</li>
                <li>• Terraform (IaC Basics)</li>
                <li>• Ansible Fundamentals</li>
                <li>• Git Branching & PRs</li>
                <li>• Automated Testing</li>
                <li>• Infrastructure Automation</li>
                <li>• Zero-Downtime Rollouts</li>
              </ul>
            </div>

            {/* Linux & Systems */}
            <div className="p-5 rounded-2xl border border-border/80 bg-card/60 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base">Linux & Systems</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground font-mono">
                <li>• Ubuntu / Amazon Linux</li>
                <li>• Bash & Shell Scripting</li>
                <li>• Systemd & Cron Jobs</li>
                <li>• SSH Keys & Bastion Hosts</li>
                <li>• User / Permission Mgmt</li>
                <li>• Storage & Volume Mounting</li>
                <li>• Log Parsing & Auditing</li>
                <li>• Performance Tuning</li>
              </ul>
            </div>

            {/* Networking & DB */}
            <div className="p-5 rounded-2xl border border-border/80 bg-card/60 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base">Networking & DB</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground font-mono">
                <li>• VPC CIDR Architecture</li>
                <li>• NAT Gateways & IGW</li>
                <li>• Security Groups & NACLs</li>
                <li>• DNS & Route 53</li>
                <li>• TCP/IP & SSL/TLS</li>
                <li>• MySQL Database Admin</li>
                <li>• DynamoDB NoSQL Modeling</li>
                <li>• Automated Backups</li>
              </ul>
            </div>

          </div>
        </section>

        {/* WORK & TRAINING EXPERIENCE */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Experience & Professional Training</h2>
              <p className="text-sm text-muted-foreground">Practical internships, immersion programs, and formal computer science education</p>
            </div>
          </div>

          <div className="relative border-l-2 border-border/80 ml-4 pl-6 space-y-10">
            
            {/* Timeline Item 1 */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-4 border-background" />
              <div className="bg-card/60 border border-border/80 rounded-2xl p-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-emerald-400">Production Internship</span>
                    <h3 className="text-lg font-bold text-foreground">Cloud Engineering Intern • HEPro</h3>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-secondary px-2.5 py-1 rounded">Nov 2025 – Jan 2026</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Contributed to HEPro AI product development (HEPro AI / HEPro+), focusing on scalable, secure, and cost-efficient cloud-native solutions. Assisted in the design and deployment of serverless AWS components, API Gateway integrations, DynamoDB schemas, and automated CI/CD deployment routines.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="/documents/hepro_certificate.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:underline"
                  >
                    <span>View Internship Certificate</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-sky-400 border-4 border-background" />
              <div className="bg-card/60 border border-border/80 rounded-2xl p-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-sky-400">210 Hours Immersion</span>
                    <h3 className="text-lg font-bold text-foreground">AWS Re/Start Program (On-the-Job Training) • Magic Bus India</h3>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-secondary px-2.5 py-1 rounded">May 2025 – July 2025</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Completed intensive 210-hour technical training focused on core AWS services (EC2, S3, VPC, RDS, IAM, CloudWatch). Developed automation scripts and deployment workflows under direct mentorship of Senior AWS Technical Consultants. Commended for diligence, adaptability, and high technical quality.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="/documents/Bhargav_OJT.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    <span>View OJT Credential</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-400 border-4 border-background" />
              <div className="bg-card/60 border border-border/80 rounded-2xl p-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-purple-400">Job Simulation</span>
                    <h3 className="text-lg font-bold text-foreground">AWS APAC Solutions Architecture • Forage</h3>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-secondary px-2.5 py-1 rounded">Nov 2025</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Executed practical tasks designing a simple, scalable hosting architecture using Elastic Beanstalk for a client experiencing rapid traffic growth. Prepared comprehensive technical documentation explaining functionality, high availability principles, and projected AWS cloud cost calculations.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-400 border-4 border-background" />
              <div className="bg-card/60 border border-border/80 rounded-2xl p-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-muted-foreground">Formal Education</span>
                    <h3 className="text-lg font-bold text-foreground">Bachelor of Engineering in Computer Science • KNSIT (VTU)</h3>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-secondary px-2.5 py-1 rounded">Expected 2026</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rigorous computer science curriculum covering Operating Systems, Distributed Systems, Computer Networks, Database Management Systems, and Object-Oriented Software Design.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* VERIFIED CREDENTIALS */}
        <section id="certifications" className="scroll-mt-24 space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Verified Certifications</h2>
              <p className="text-sm text-muted-foreground">Validated training credentials and industry certifications with downloadable PDFs</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {certs.map(cert => (
              <div key={cert.id} className="border border-border/80 bg-card/60 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-500/40 transition-all">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {cert.badge}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">{cert.period}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">{cert.issuer}</p>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map(s => (
                      <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border/60 mt-6 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedCertModal(cert.file)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Preview Certificate</span>
                  </button>

                  <a
                    href={cert.file}
                    download
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT & GET IN TOUCH */}
        <section id="contact" className="scroll-mt-24 space-y-8">
          <div className="border border-sky-500/20 bg-gradient-to-br from-card/80 via-card/50 to-sky-500/5 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">Let's Connect</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Ready to Build Scalable Cloud Systems</h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Whether you're hiring for a Cloud Engineer, DevOps specialist, or want to discuss AWS infrastructure architectures — my inbox is always open.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
              <a
                href="mailto:bhargavsah2026@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-sky-500 text-slate-950 hover:bg-sky-400 shadow-glow-cyan transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>bhargavsah2026@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/bhargavsah"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border border-border bg-card/80 hover:bg-muted text-foreground transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/bhargav59"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border border-border bg-card/80 hover:bg-muted text-foreground transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>

            <p className="text-xs text-muted-foreground pt-4">
              Currently located in Bengaluru, Karnataka, India • Available for immediate on-site or remote engagement
            </p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/80 bg-card/30 backdrop-blur-md py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <div>
            © 2026 Bhargav Kumar Saha. Built with React 19, Vite & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://bhargav-sah.me" className="hover:text-foreground">bhargav-sah.me</a>
            <span>•</span>
            <a href="/documents/bhargav_resume.pdf" download className="text-sky-400 hover:underline">Resume</a>
            <span>•</span>
            <a href="https://github.com/bhargav59/bhargav59.github.io" target="_blank" rel="noreferrer" className="hover:text-foreground">Source Code</a>
          </div>
        </div>
      </footer>

      {/* PDF MODAL VIEWER */}
      {selectedCertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-card border border-border w-full max-w-4xl h-[85vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-border flex items-center justify-between bg-muted/30">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <FileText className="w-4 h-4 text-sky-400" />
                <span>{selectedCertModal}</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={selectedCertModal}
                  download
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
                <button
                  onClick={() => setSelectedCertModal(null)}
                  className="p-1 rounded-md text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-slate-900">
              <iframe
                src={`${selectedCertModal}#toolbar=0`}
                className="w-full h-full border-none"
                title="Certificate Preview"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
