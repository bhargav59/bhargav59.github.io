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
  Boxes,
  Zap,
  Globe,
  Radio,
  Lock,
  ArrowRight,
  Sliders,
  Sparkles,
  Command
} from 'lucide-react'

// Brand Icons
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

interface CommandOutput {
  command: string
  output: string | React.ReactNode
}

interface TopologyNode {
  id: string
  label: string
  tier: string
  service: string
  details: string
  ports: string
  cidr: string
  sgRule: string
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [selectedCertModal, setSelectedCertModal] = useState<string | null>(null)
  const [projectFilter, setProjectFilter] = useState<'all' | 'aws' | 'devops' | 'serverless'>('all')

  // Architecture Blueprint State
  const [activeArchTab, setActiveArchTab] = useState<'vpc' | 'serverless' | 'cicd'>('vpc')
  const [selectedNodeId, setSelectedNodeId] = useState<string>('alb')

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
      output: '[OK] Plan: 0 to add, 0 to change, 0 to destroy. Infrastructure matches desired state.'
    }
  ])

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
            <p className="text-slate-400 font-semibold">Available commands:</p>
            <p><span className="text-sky-400">whoami</span> - Display engineer profile summary</p>
            <p><span className="text-sky-400">aws status</span> - Check regional AWS services status</p>
            <p><span className="text-sky-400">skills</span> - List primary technical stack</p>
            <p><span className="text-sky-400">projects</span> - View flagship cloud architectures</p>
            <p><span className="text-sky-400">contact</span> - Get direct email & social links</p>
            <p><span className="text-sky-400">clear</span> - Clear terminal session</p>
          </div>
        )
        break
      case 'whoami':
        out = 'Bhargav Kumar Saha — Cloud & DevOps Engineer based in Bengaluru, India. Specialized in AWS architecture, Linux systems, serverless platforms, and automated CI/CD pipelines.'
        break
      case 'aws status':
        out = (
          <div className="space-y-1 text-emerald-400 font-mono text-xs">
            <p>● us-east-1 (N. Virginia): Operational (Latency: 18ms)</p>
            <p>● ap-south-1 (Mumbai): Operational (Latency: 5ms)</p>
            <p>● VPC Peering & Route 53 DNS: Health Checks passing (100% SLA)</p>
          </div>
        )
        break
      case 'skills':
        out = 'AWS (EC2, VPC, ALB, RDS, S3, IAM, CloudWatch, Lambda, API Gateway), Linux (Ubuntu/Amazon Linux), Bash, Python, Docker, GitHub Actions, Terraform, Ansible.'
        break
      case 'projects':
        out = '1. Automated EC2 Deployment Pipeline (80% provisioning time cut)\n2. High-Availability Multi-Tier VPC (99.9% uptime design)\n3. HEPro AI Serverless Microservices Platform (AWS Lambda + DynamoDB)\n4. GitOps Automated CI/CD Pipeline (GitHub Actions + Docker)'
        break
      case 'contact':
        out = 'Email: bhargavsah2026@gmail.com | LinkedIn: linkedin.com/in/bhargavsah | GitHub: github.com/bhargav59'
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

  // Topology node specifications
  const vpcNodes: TopologyNode[] = [
    {
      id: 'igw',
      label: 'Internet Gateway',
      tier: 'Public Edge',
      service: 'AWS IGW + Route 53',
      details: 'Direct internet entry point with global Route 53 DNS failover routing policy.',
      ports: '443 / 80',
      cidr: '0.0.0.0/0',
      sgRule: 'Inbound HTTPS/HTTP allowed from world; outbound to public subnets.'
    },
    {
      id: 'alb',
      label: 'Application Load Balancer',
      tier: 'Public Subnets (AZ-1 / AZ-2)',
      service: 'AWS ALB (Dual-AZ)',
      details: 'Terminates SSL/TLS certificates and distributes traffic dynamically with path-based routing.',
      ports: '443 (SSL) -> 8080 Target',
      cidr: '10.0.1.0/24, 10.0.2.0/24',
      sgRule: 'Inbound 443 from Internet -> Outbound forward to private EC2 target group.'
    },
    {
      id: 'ec2',
      label: 'Auto Scaling EC2 Cluster',
      tier: 'Private Subnets',
      service: 'AWS EC2 + Auto Scaling Group',
      details: 'Isolated application compute tier. Scales between 2 and 6 instances based on CPU utilization metrics.',
      ports: '8080 App Port',
      cidr: '10.0.10.0/24, 10.0.20.0/24',
      sgRule: 'Inbound 8080 restricted strictly to ALB Security Group ID. No public IPs.'
    },
    {
      id: 'rds',
      label: 'RDS MySQL Multi-AZ',
      tier: 'Database Subnets (Isolated)',
      service: 'AWS RDS Multi-AZ Standby',
      details: 'Synchronous replication across secondary AZ with automated 60-second failover standby.',
      ports: '3306 MySQL',
      cidr: '10.0.100.0/24, 10.0.200.0/24',
      sgRule: 'Inbound 3306 restricted solely to EC2 App Security Group. Zero internet route.'
    }
  ]

  const serverlessNodes: TopologyNode[] = [
    {
      id: 'apigw',
      label: 'HTTP API Gateway',
      tier: 'API Ingress',
      service: 'Amazon API Gateway v2',
      details: 'Handles JWT authorization, throttle limits, and routing to serverless compute functions.',
      ports: '443 HTTPS',
      cidr: 'Managed AWS Edge',
      sgRule: 'IAM Authorizer + CORS policy enforced.'
    },
    {
      id: 'lambda',
      label: 'Microservices Lambda',
      tier: 'Serverless Compute',
      service: 'AWS Lambda (Python 3.12)',
      details: 'Stateless execution environment automatically provisioned per request. Zero idle compute charge.',
      ports: 'Internal VPC ENI',
      cidr: 'Private Microservice Subnets',
      sgRule: 'Least-privilege IAM execution role scoped to specific DynamoDB table partitions.'
    },
    {
      id: 'dynamo',
      label: 'DynamoDB Storage',
      tier: 'Data Layer',
      service: 'Amazon DynamoDB (On-Demand)',
      details: 'NoSQL persistent store with single-digit millisecond latency at any throughput scale.',
      ports: 'HTTPS AWS SDK',
      cidr: 'VPC Gateway Endpoint',
      sgRule: 'Encrypted at rest with AWS KMS managed keys. Fine-grained IAM attribute access.'
    }
  ]

  const activeNodes = activeArchTab === 'vpc' ? vpcNodes : serverlessNodes
  const currentNode = activeNodes.find(n => n.id === selectedNodeId) || activeNodes[0]

  // Projects list from latest resume
  const projects = [
    {
      id: 'serverless-task',
      category: 'serverless',
      title: 'Serverless Cloud Task Management Platform',
      badge: 'AWS S3 • Cognito • Lambda • DynamoDB',
      metric: 'Zero Server Overhead',
      metricColor: 'text-purple-400',
      description: 'Architected a fully serverless application utilizing Amazon S3 for static frontend hosting and AWS Cognito for secure user authentication, completely eliminating server management overhead. Developed scalable, event-driven RESTful APIs using AWS Lambda and Amazon API Gateway to process backend CRUD operations, backed by a performant Amazon DynamoDB NoSQL schema secured via IAM least-privilege policies.',
      tech: ['Amazon S3', 'AWS Cognito', 'AWS Lambda', 'Amazon API Gateway', 'Amazon DynamoDB', 'IAM Policies'],
      link: 'https://github.com/bhargav59'
    },
    {
      id: 'hepro-serverless',
      category: 'serverless',
      title: 'HEPro AI Production Serverless Web Platform',
      badge: 'AWS Lambda • API Gateway • Python • S3',
      metric: 'End-to-End Delivery',
      metricColor: 'text-emerald-400',
      description: 'Designed and implemented production-grade serverless web application architecture on AWS at HEPro (AI Product Development). Built event-driven Python backend on Lambda with RESTful APIs via API Gateway, configured S3 asset management with lifecycle rules, enforced least-privilege IAM policies, and delivered complete full-stack app (HTML/CSS/JS frontend + Python backend) end-to-end.',
      tech: ['Python', 'AWS Lambda', 'Amazon API Gateway', 'Amazon S3', 'AWS IAM', 'AWS CloudWatch'],
      link: '/documents/hepro_certificate.pdf'
    },
    {
      id: 'ec2-pipeline',
      category: 'aws',
      title: 'Automated Cloud Infrastructure Pipeline',
      badge: 'AWS EC2 • Bash • Python • IAM',
      metric: '80% Manual Effort Cut',
      metricColor: 'text-sky-400',
      description: 'Developed Bash and Python automation scripts for AWS resource lifecycle management (EC2 provisioning, storage configuration, security group rules), reducing manual operational effort by 80%. Built and validated end-to-end deployment workflows under guidance of AWS technical consultants, applying CI/CD fundamentals and CloudWatch system health monitoring.',
      tech: ['AWS EC2', 'Shell Scripting (Bash)', 'Python', 'IAM Roles', 'AWS CloudWatch', 'Storage Automation'],
      link: 'https://github.com/bhargav59'
    },
    {
      id: 'multi-tier-vpc',
      category: 'aws',
      title: 'Scalable Multi-Tier VPC Architecture',
      badge: 'AWS VPC • ALB • Multi-AZ RDS',
      metric: '99.9% High Availability',
      metricColor: 'text-cyan-400',
      description: 'Designed scalable, fault-tolerant hosting infrastructure applying cloud best practices for auto-scaling and high availability. Configured custom VPC public and private subnet topologies, Application Load Balancers for traffic distribution, and isolated RDS Multi-AZ databases with automated backup & recovery and defense-in-depth security groups.',
      tech: ['AWS VPC', 'Subnet Masking', 'ALB Load Balancer', 'RDS MySQL Multi-AZ', 'Security Groups'],
      link: 'https://github.com/bhargav59'
    }
  ]

  const filteredProjects = projects.filter(p => projectFilter === 'all' || p.category === projectFilter)

  // Certifications list
  const certs = [
    {
      id: 'hepro',
      title: 'Cloud Engineering Internship',
      issuer: 'HEPro (AI Product Development)',
      period: 'Nov 2025 – Jan 2026',
      badge: 'Serverless AWS & AI Platform',
      file: '/documents/hepro_certificate.pdf',
      skills: ['AWS Lambda', 'API Gateway', 'Serverless', 'Cloud Security', 'Cost Optimization'],
      description: 'Two-month project internship in Cloud Engineering contributing to scalable serverless microservices for HEPro AI human-centric mentoring platform.'
    },
    {
      id: 'magicbus',
      title: 'AWS Re/Start - Tech Fundamentals & OJT',
      issuer: 'Magic Bus India Foundation',
      period: '210 Hours (May – July 2025)',
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
      badge: 'Sim ID: kuYMnuay5KMSu7cih',
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
    <div className="min-h-screen bg-background text-foreground selection:bg-sky-500/20 selection:text-sky-300">
      
      {/* LINEAR-STYLE SUBTLE RADIAL SPOTLIGHT */}
      <div className="fixed inset-0 pointer-events-none radial-spotlight z-0" />
      <div className="fixed inset-0 pointer-events-none linear-grid opacity-60 z-0" />

      {/* TOP NAVIGATION (Linear minimal bar) */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/80 h-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 group-hover:border-sky-400/40 transition-colors">
              <Cloud className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-sm tracking-tight text-foreground">
              Bhargav Sah
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AWS Cloud Engineer
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#topology" className="hover:text-foreground transition-colors">Topology</a>
            <a href="#terminal" className="hover:text-foreground transition-colors">Terminal</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
            <a href="#credentials" className="hover:text-foreground transition-colors">Credentials</a>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-1.5 rounded-md border border-border bg-card/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
            </button>

            <a
              href="/documents/bhargav_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-white/5 text-foreground border border-white/10 hover:border-white/20 transition-all"
            >
              <Download className="w-3 h-3 text-sky-400" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-md border border-border text-muted-foreground hover:text-foreground"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl px-6 py-4 space-y-3 text-xs font-medium">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-sky-400">About</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-sky-400">Projects</a>
            <a href="#topology" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-sky-400">Topology</a>
            <a href="#terminal" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-sky-400">Terminal</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-sky-400">Skills</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-sky-400">Experience</a>
            <a href="#credentials" onClick={() => setMobileMenuOpen(false)} className="block py-1 hover:text-sky-400">Credentials</a>
            <div className="pt-2 border-t border-border flex gap-3">
              <a
                href="/documents/bhargav_resume.pdf"
                className="w-full text-center py-2 rounded-md text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/30"
              >
                Download Resume PDF
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-28 space-y-32">

        {/* HERO SECTION (Linear / HashiCorp Design Language) */}
        <section className="space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-xs font-mono">
            <Radio className="w-3 h-3 animate-pulse text-emerald-400" />
            <span>Open to Cloud & DevOps Roles 2026 • Bengaluru, India</span>
          </div>

          <div className="space-y-5 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
              Architecting cloud systems with <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                zero single point of failure.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I'm <strong className="text-foreground font-medium">Bhargav Kumar Saha</strong>. 
              DevOps & Cloud Engineer specializing in AWS infrastructure automation, serverless microservices, Linux internals, and automated GitOps CI/CD delivery.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-xs bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="/documents/bhargav_resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-xs border border-border bg-card/60 hover:bg-muted text-foreground transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono border border-border bg-card/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Email Copied!' : 'bhargavsah2026@gmail.com'}</span>
            </button>
          </div>

          {/* Linear Hairline Metric Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 border-t border-border">
            <div className="linear-card p-4 rounded-xl space-y-1">
              <span className="text-[11px] font-mono text-muted-foreground">AWS Immersion</span>
              <div className="text-2xl font-bold font-mono tracking-tight text-sky-400">210+ Hrs</div>
              <p className="text-[11px] text-muted-foreground">OJT AWS Core Services</p>
            </div>

            <div className="linear-card p-4 rounded-xl space-y-1">
              <span className="text-[11px] font-mono text-muted-foreground">EC2 Automation</span>
              <div className="text-2xl font-bold font-mono tracking-tight text-emerald-400">-80%</div>
              <p className="text-[11px] text-muted-foreground">Provisioning time cut</p>
            </div>

            <div className="linear-card p-4 rounded-xl space-y-1">
              <span className="text-[11px] font-mono text-muted-foreground">Architecture SLA</span>
              <div className="text-2xl font-bold font-mono tracking-tight text-cyan-400">99.9%</div>
              <p className="text-[11px] text-muted-foreground">Multi-AZ target uptime</p>
            </div>

            <div className="linear-card p-4 rounded-xl space-y-1">
              <span className="text-[11px] font-mono text-muted-foreground">Verified Credentials</span>
              <div className="text-2xl font-bold font-mono tracking-tight text-purple-400">4 Badges</div>
              <p className="text-[11px] text-muted-foreground">HEPro, AWS OJT, Forage, Git</p>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-20 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" />
            <span>Profile & Engineering Philosophy</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 linear-card p-6 rounded-2xl space-y-4 text-sm text-muted-foreground leading-relaxed">
              <h2 className="text-xl font-bold text-foreground tracking-tight">
                Architecting resilient cloud solutions that power modern applications.
              </h2>
              <p>
                Motivated Cloud Engineer and AWS practitioner with hands-on experience designing, deploying, and automating cloud-native infrastructure at scale. Proven ability to architect serverless applications, build CI/CD workflows, manage secure multi-tier AWS environments, and optimize infrastructure for high availability and cost efficiency.
              </p>
              <p>
                Strong foundation in Linux, Python scripting, infrastructure-as-code principles, and networking. Following 210 hours of structured AWS Re/Start training, I served as a <strong className="text-foreground">Cloud Engineering Intern at HEPro</strong> (AI Product Development), delivering full-stack serverless architectures on AWS end-to-end.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-secondary text-foreground border border-border/80">AWS Architecture</span>
                <span className="px-2.5 py-1 rounded bg-secondary text-foreground border border-border/80">Serverless Microservices</span>
                <span className="px-2.5 py-1 rounded bg-secondary text-foreground border border-border/80">IAM Least-Privilege</span>
                <span className="px-2.5 py-1 rounded bg-secondary text-foreground border border-border/80">Python & Bash Automation</span>
              </div>
            </div>

            {/* Snapshot Card */}
            <div className="linear-card p-6 rounded-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">Fast Facts</h3>
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-muted-foreground block">Education</span>
                    <span className="font-semibold text-foreground">B.E. Computer Science (VTU, 2022–2026)</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Location</span>
                    <span className="font-semibold text-foreground">Bengaluru, Karnataka, India</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Recent Role</span>
                    <span className="font-semibold text-emerald-400">Cloud Engineering Intern (HEPro)</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Active Credentials</span>
                    <span className="font-semibold text-sky-400">AWS Re/Start OJT • GitHub Foundations</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border/80 text-[11px] text-muted-foreground font-mono">
                Available for on-site & remote engagements.
              </div>
            </div>
          </div>

          {/* Key Strengths Grid (from latest resume) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="linear-card p-4 rounded-xl space-y-1.5">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase font-mono">
                <Cloud className="w-4 h-4" />
                <span>AWS Hands-On</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Deployed real serverless and multi-tier production infrastructure on AWS with zero single point of failure.
              </p>
            </div>

            <div className="linear-card p-4 rounded-xl space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase font-mono">
                <Zap className="w-4 h-4" />
                <span>Automation-First</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Built 10+ scripted cloud workflows in Python and Bash, reducing manual provisioning and ops effort by 80%.
              </p>
            </div>

            <div className="linear-card p-4 rounded-xl space-y-1.5">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase font-mono">
                <Shield className="w-4 h-4" />
                <span>Security-Minded</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Consistently applies IAM least-privilege, defense-in-depth security groups, and encryption at rest/transit.
              </p>
            </div>

            <div className="linear-card p-4 rounded-xl space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase font-mono">
                <Sparkles className="w-4 h-4" />
                <span>Rapid Learner</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Actively pursuing AWS Solutions Architect & Cloud Practitioner certifications while mastering Terraform & K8s.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE CLOUD TOPOLOGY INSPECTOR (Showcase) */}
        <section id="topology" className="scroll-mt-20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
                <Boxes className="w-3.5 h-3.5" />
                <span>Interactive Cloud Architecture</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Deep-Dive Infrastructure Blueprints
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Click any architectural node to inspect network specifications, security groups, and design decisions.
              </p>
            </div>

            {/* Blueprint Switcher */}
            <div className="flex p-1 rounded-lg bg-secondary border border-border text-xs font-mono">
              <button
                onClick={() => { setActiveArchTab('vpc'); setSelectedNodeId('alb'); }}
                className={`px-3 py-1 rounded-md transition-all ${activeArchTab === 'vpc' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Multi-Tier VPC
              </button>
              <button
                onClick={() => { setActiveArchTab('serverless'); setSelectedNodeId('apigw'); }}
                className={`px-3 py-1 rounded-md transition-all ${activeArchTab === 'serverless' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Serverless (HEPro)
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Interactive Nodes Flow (Left 2 cols) */}
            <div className="lg:col-span-2 linear-card p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border text-xs font-mono text-muted-foreground">
                <span>Architecture Flow: Click node to inspect</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Active Configuration
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {activeNodes.map(node => {
                  const isSelected = selectedNodeId === node.id
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        isSelected
                          ? 'border-sky-500/80 bg-sky-500/10 shadow-sm'
                          : 'border-border/70 bg-card/60 hover:border-border hover:bg-muted/40'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-semibold">
                          {node.tier}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-sky-400" />}
                      </div>
                      <div className="font-bold text-sm text-foreground mt-1">{node.label}</div>
                      <div className="text-xs text-muted-foreground font-mono mt-0.5">{node.service}</div>
                      <div className="mt-3 text-[11px] text-muted-foreground line-clamp-2">
                        {node.details}
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="p-3 rounded-lg bg-secondary/50 border border-border text-xs font-mono text-muted-foreground flex items-center justify-between">
                <span>Network Protocol: TLS 1.3 / HTTPS</span>
                <span className="text-sky-400">Zero Public Database Access</span>
              </div>
            </div>

            {/* Inspector Panel (Right 1 col) */}
            <div className="linear-card p-6 rounded-2xl space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-xs font-mono uppercase text-sky-400 tracking-wider">Node Inspector</span>
                  <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                    {currentNode.id.toUpperCase()}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-base text-foreground">{currentNode.label}</h3>
                  <p className="text-xs text-sky-400 font-mono mt-0.5">{currentNode.service}</p>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <span className="text-muted-foreground block text-[11px] font-mono uppercase">Tier & Placement</span>
                    <span className="font-medium text-foreground">{currentNode.tier}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px] font-mono uppercase">Subnet CIDR / Scope</span>
                    <span className="font-mono text-foreground bg-secondary px-1.5 py-0.5 rounded text-[11px]">
                      {currentNode.cidr}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px] font-mono uppercase">Ports & Protocol</span>
                    <span className="font-mono text-emerald-400 text-[11px]">{currentNode.ports}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px] font-mono uppercase">Security Group Policy</span>
                    <p className="text-muted-foreground leading-relaxed text-[11px] bg-secondary/60 p-2 rounded border border-border">
                      {currentNode.sgRule}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span>Verified in code</span>
                <a href="#projects" className="text-sky-400 hover:underline">View in project →</a>
              </div>
            </div>

          </div>
        </section>

        {/* FEATURED PROJECTS WITH FILTER TABS */}
        <section id="projects" className="scroll-mt-20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
                <Server className="w-3.5 h-3.5" />
                <span>Production Workloads</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Cloud Infrastructure & DevOps Projects
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 text-xs font-mono">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'aws', label: 'AWS Cloud' },
                { id: 'serverless', label: 'Serverless' },
                { id: 'devops', label: 'CI/CD & GitOps' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setProjectFilter(t.id as any)}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    projectFilter === t.id
                      ? 'bg-foreground text-background font-semibold'
                      : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {filteredProjects.map(project => (
              <div key={project.id} className="linear-card p-6 rounded-2xl flex flex-col justify-between space-y-4 group">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[11px] font-mono text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded">
                      {project.badge}
                    </span>
                    <span className={`text-[11px] font-mono font-semibold ${project.metricColor}`}>
                      {project.metric}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-foreground group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-mono text-[11px]">Production Tested</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-sky-400 hover:underline"
                  >
                    <span>View Resource</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IN-BROWSER CLOUD TERMINAL */}
        <section id="terminal" className="scroll-mt-20 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive Cloud CLI</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Run Infrastructure Diagnostics
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Test simulated AWS CLI commands or inspect system configs directly in your browser.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#090b10] shadow-2xl overflow-hidden font-mono text-xs">
            {/* Window Chrome */}
            <div className="bg-[#10131a] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="text-slate-400 text-[11px] ml-2">bhargav@aws-control-plane:~</span>
              </div>
              <span className="text-slate-500 text-[11px] hidden sm:inline">zsh • session active</span>
            </div>

            {/* Quick Chips */}
            <div className="p-2.5 bg-[#0d0f15] border-b border-white/5 flex flex-wrap gap-1.5 text-[11px]">
              <span className="text-slate-500 self-center mr-1">Suggestions:</span>
              <button onClick={() => handleCommand('whoami')} className="px-2 py-0.5 rounded bg-white/5 text-sky-400 hover:bg-white/10">whoami</button>
              <button onClick={() => handleCommand('aws status')} className="px-2 py-0.5 rounded bg-white/5 text-emerald-400 hover:bg-white/10">aws status</button>
              <button onClick={() => handleCommand('skills')} className="px-2 py-0.5 rounded bg-white/5 text-cyan-400 hover:bg-white/10">skills</button>
              <button onClick={() => handleCommand('projects')} className="px-2 py-0.5 rounded bg-white/5 text-purple-400 hover:bg-white/10">projects</button>
              <button onClick={() => handleCommand('contact')} className="px-2 py-0.5 rounded bg-white/5 text-amber-400 hover:bg-white/10">contact</button>
              <button onClick={() => handleCommand('clear')} className="px-2 py-0.5 rounded bg-white/5 text-slate-400 hover:bg-white/10">clear</button>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-5 space-y-3 max-h-[340px] overflow-y-auto">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-emerald-400">bhargav@aws-control-plane:~$</span>
                    <span className="text-slate-100 font-semibold">{item.command}</span>
                  </div>
                  <div className="text-slate-300 pl-4 border-l border-white/10 py-0.5 whitespace-pre-wrap">
                    {item.output}
                  </div>
                </div>
              ))}

              {/* Active Prompt */}
              <form onSubmit={(e) => { e.preventDefault(); handleCommand(); }} className="flex items-center gap-2 pt-1">
                <span className="text-emerald-400 font-bold">bhargav@aws-control-plane:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type 'help' or click any suggestion above..."
                  className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-600 font-mono text-xs"
                />
              </form>
            </div>
          </div>
        </section>

        {/* TECHNICAL MATRIX (HashiCorp Toolchain Identity Style) */}
        <section id="skills" className="scroll-mt-20 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5" />
              <span>Competencies</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Technical Stack & Toolchain Matrix
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* AWS Cloud */}
            <div className="linear-card p-5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <Cloud className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-bold text-sm">AWS Cloud Core</h3>
              </div>
              <ul className="space-y-1.5 text-xs text-muted-foreground font-mono">
                <li>• EC2 & Auto Scaling</li>
                <li>• VPC, Subnets & Nat GW</li>
                <li>• ALB Load Balancers</li>
                <li>• RDS MySQL Multi-AZ</li>
                <li>• DynamoDB (NoSQL)</li>
                <li>• AWS Lambda Serverless</li>
                <li>• IAM Policies & Roles</li>
                <li>• CloudWatch Alarms</li>
              </ul>
            </div>

            {/* DevOps & IaC */}
            <div className="linear-card p-5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <GitBranch className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-bold text-sm">DevOps & Delivery</h3>
              </div>
              <ul className="space-y-1.5 text-xs text-muted-foreground font-mono">
                <li>• GitHub Actions CI/CD</li>
                <li>• Docker Containerization</li>
                <li>• Terraform IaC (Foundations)</li>
                <li>• Ansible Fundamentals</li>
                <li>• Git Branching & PRs</li>
                <li>• Automated Lint & Test</li>
                <li>• Multi-Stage Builds</li>
                <li>• Automated Rollbacks</li>
              </ul>
            </div>

            {/* Linux & Systems */}
            <div className="linear-card p-5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Server className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-bold text-sm">Linux Systems</h3>
              </div>
              <ul className="space-y-1.5 text-xs text-muted-foreground font-mono">
                <li>• Ubuntu / Amazon Linux</li>
                <li>• Bash & Shell Automation</li>
                <li>• Systemd & Cron Services</li>
                <li>• SSH Keys & Bastion Access</li>
                <li>• User / Permission ACLs</li>
                <li>• Storage & EBS Mounting</li>
                <li>• Log Parsing & Audits</li>
                <li>• Kernel Metric Monitoring</li>
              </ul>
            </div>

            {/* Networking & DB */}
            <div className="linear-card p-5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <h3 className="font-bold text-sm">Network & Data</h3>
              </div>
              <ul className="space-y-1.5 text-xs text-muted-foreground font-mono">
                <li>• CIDR Block Planning</li>
                <li>• Security Groups & NACLs</li>
                <li>• Route 53 DNS Routing</li>
                <li>• SSL/TLS Termination</li>
                <li>• MySQL Administration</li>
                <li>• DynamoDB Single-Table</li>
                <li>• Automated Snapshots</li>
                <li>• Zero-Trust Isolation</li>
              </ul>
            </div>

          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="experience" className="scroll-mt-20 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Internship Experience & Immersion
            </h2>
          </div>

          <div className="relative border-l border-border/80 ml-3.5 pl-6 space-y-8">
            
            {/* Item 1: HEPro */}
            <div className="relative space-y-2">
              <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-background" />
              <div className="linear-card p-5 rounded-2xl space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="font-bold text-base text-foreground">Cloud Engineering Intern • HEPro</div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Nov 2025 – Jan 2026
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Contributed to HEPro AI product development (HEPro AI / HEPro+), focusing on scalable, secure, and cost-efficient cloud-native solutions. Assisted in the design and deployment of serverless AWS components, API Gateway integrations, DynamoDB schemas, and automated CI/CD deployment routines.
                </p>
                <div className="pt-1">
                  <a
                    href="/documents/hepro_certificate.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:underline"
                  >
                    <span>View Official Internship Certificate</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Item 2: Magic Bus */}
            <div className="relative space-y-2">
              <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-sky-400 border-2 border-background" />
              <div className="linear-card p-5 rounded-2xl space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="font-bold text-base text-foreground">AWS Re/Start Program (210 Hours) • Magic Bus India</div>
                  <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                    May 2025 – July 2025
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Completed intensive 210-hour technical training focused on core AWS services (EC2, S3, VPC, RDS, IAM, CloudWatch). Developed automation scripts and deployment workflows under direct mentorship of Senior AWS Technical Consultants. Commended for diligence, adaptability, and high technical quality.
                </p>
                <div className="pt-1">
                  <a
                    href="/documents/Bhargav_OJT.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:underline"
                  >
                    <span>View OJT Credential</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Item 3: Forage */}
            <div className="relative space-y-2">
              <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-purple-400 border-2 border-background" />
              <div className="linear-card p-5 rounded-2xl space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="font-bold text-base text-foreground">AWS APAC Solutions Architecture • Forage</div>
                  <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                    Nov 2025
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Executed practical tasks designing a scalable hosting architecture using Elastic Beanstalk for a client experiencing rapid traffic growth. Prepared comprehensive technical documentation explaining functionality, high availability principles, and projected AWS cloud cost calculations.
                </p>
              </div>
            </div>

            {/* Item 4: Education */}
            <div className="relative space-y-2">
              <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-slate-400 border-2 border-background" />
              <div className="linear-card p-5 rounded-2xl space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="font-bold text-base text-foreground">B.E. in Computer Science • KNSIT (VTU)</div>
                  <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                    Expected 2026
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Core curriculum covering Operating Systems, Distributed Systems, Computer Networks, Database Management Systems, and Object-Oriented Software Design.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* VERIFIED CREDENTIALS */}
        <section id="credentials" className="scroll-mt-20 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>Certificates & Verification</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Verified Industry Certifications
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certs.map(cert => (
              <div key={cert.id} className="linear-card p-5 rounded-2xl flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {cert.badge}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">{cert.period}</span>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm text-foreground">{cert.title}</h3>
                    <p className="text-xs text-muted-foreground font-medium">{cert.issuer}</p>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {cert.skills.map(s => (
                      <span key={s} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-secondary text-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border flex items-center justify-between gap-3 text-xs">
                  <button
                    onClick={() => setSelectedCertModal(cert.file)}
                    className="inline-flex items-center gap-1 font-semibold text-sky-400 hover:underline"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Preview Document</span>
                  </button>

                  <a
                    href={cert.file}
                    download
                    className="inline-flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Continuous Learning & Active Pursuits (from latest resume) */}
          <div className="linear-card p-5 rounded-2xl border-white/10 space-y-3">
            <div className="flex items-center justify-between border-b border-border pb-2.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
                  Continuous Learning & Active Roadmap
                </h3>
              </div>
              <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                In Progress 2026
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-1">
                <span className="text-muted-foreground font-mono block text-[11px] uppercase">Actively Pursuing Certifications</span>
                <p className="font-semibold text-foreground">AWS Certified Solutions Architect – Associate</p>
                <p className="text-muted-foreground">AWS Certified Cloud Practitioner</p>
              </div>

              <div className="space-y-1">
                <span className="text-muted-foreground font-mono block text-[11px] uppercase">Self-Study & Tooling</span>
                <p className="font-semibold text-foreground">Terraform (Infrastructure as Code)</p>
                <p className="text-muted-foreground">Kubernetes Fundamentals • Ansible • Docker</p>
              </div>

              <div className="space-y-1">
                <span className="text-muted-foreground font-mono block text-[11px] uppercase">Specialization Roadmap</span>
                <p className="font-semibold text-foreground">AWS DevOps Engineer Professional Path</p>
                <p className="text-muted-foreground">Cloud Cost Optimization • Multi-Region Architectures</p>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION & FOOTER BANNER */}
        <section id="contact" className="scroll-mt-20">
          <div className="linear-card p-8 sm:p-12 rounded-3xl text-center space-y-5 border-white/10 relative overflow-hidden">
            <div className="max-w-xl mx-auto space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">Ready to Deploy</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Let's discuss infrastructure.</h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Seeking opportunities in Cloud Engineering, DevOps, and Infrastructure Automation. Let's connect.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
              <a
                href="mailto:bhargavsah2026@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-xs bg-foreground text-background hover:opacity-90 transition-opacity"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>bhargavsah2026@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/bhargavsah"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-xs border border-border bg-card/60 hover:bg-muted text-foreground transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/bhargav59"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-xs border border-border bg-card/60 hover:bg-muted text-foreground transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>

            <p className="text-[11px] text-muted-foreground pt-3">
              Bengaluru, Karnataka, India • Immediate availability for hiring discussions
            </p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/80 py-8 text-xs font-mono text-muted-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 Bhargav Kumar Saha. Designed with Linear & HashiCorp craft principles.
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

      {/* PDF PREVIEW MODAL */}
      {selectedCertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#0f1115] border border-white/10 w-full max-w-4xl h-[85vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl">
            <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>{selectedCertModal}</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={selectedCertModal}
                  download
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setSelectedCertModal(null)}
                  className="p-1 rounded-md text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-black">
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
