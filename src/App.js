import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, ChevronDown, Briefcase, GraduationCap, Award, TrendingUp, Users, Target, Code, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedJob, setExpandedJob] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const stats = [
    { icon: TrendingUp, label: 'NRR Achievement', value: '128%' },
    { icon: Users, label: 'Years Experience', value: '7+' },
    { icon: Target, label: 'Portfolio Value', value: '$20M+' }
  ];

  const experience = [
    {
      company: 'InvestiNet, LLC',
      location: 'Greenville, SC',
      role: 'Client Services Performance Manager',
      period: 'June 2025 - Present',
      achievements: [
        'Manage portfolio of 5 high-value financial services clients representing $20M+ in annual portfolio value',
        'Partner with leadership using SQL and HubSpot dashboards, contributing to 30% projected revenue increase',
        'Reduced churn risk by 15% through data-driven performance reviews',
        'Improved portfolio retention by 12% through strategic quarterly business reviews'
      ]
    },
    {
      company: 'Artifact Uprising',
      location: 'Remote',
      role: 'Customer Experience Lead Coordinator',
      period: 'October 2023 - June 2025',
      achievements: [
        'Led remote CX team of 3 supporting 100K+ active customers, improving CSAT from 88% to 95%',
        'Sustained NPS of 96 through proactive customer engagement',
        'Reduced ticket backlog by 40% with Zendesk workflow automations',
        'Influenced 3 major product updates, increasing repeat order rate by 18%'
      ]
    },
    {
      company: 'Noonlight',
      location: 'Remote',
      role: 'Principal Customer Success Manager',
      period: 'April 2022 - September 2023',
      achievements: [
        'Built Customer Success function from zero, serving 40+ SaaS API clients representing $3M ARR',
        'Achieved 128% NRR through strategic account management',
        'Increased customer API utilization by 42% through cross-functional collaboration',
        'Maintained 99% retention rate during Alarm.com acquisition with zero churn'
      ]
    },
    {
      company: 'Poll Everywhere',
      location: 'Remote',
      role: 'Customer Success Manager',
      period: 'February 2021 - April 2022',
      achievements: [
        'Managed 140 educational SaaS accounts representing $800K ARR',
        'Achieved 124% net revenue expansion',
        'Increased customer adoption by 40% through data-driven initiatives',
        'Built video training series reducing onboarding time by 30%'
      ]
    },
    {
      company: 'Dell Technologies',
      location: 'South Florida',
      role: 'Account Manager',
      period: '2019 - 2021',
      achievements: [
        'Achieved 144% quota attainment through strategic territory management',
        'Drove market share growth in South Florida territory through hybrid cloud and client solutions',
        'Mentored new hires on sales methodologies and Salesforce CRM best practices',
        'Developed consultative approach to position Dell infrastructure and endpoint solutions',
        'Built strong relationships with enterprise IT decision-makers across multiple verticals'
      ]
    },
    {
      company: 'AT&T',
      location: 'Southeast Region',
      role: 'Retail Sales Consultant',
      period: '2017 - 2019',
      achievements: [
        'Ranked in top 10% of sales representatives nationwide',
        'Recognized in top five regionally for quarterly performance',
        'Achieved 160% average quota attainment through consultative selling',
        'Exceeded targets for wireless, fiber internet, and DirecTV bundles',
        'Provided exceptional customer service resulting in high satisfaction scores and referrals'
      ]
    }
  ];

  const skills = {
    'Customer Success': ['Customer Retention & Expansion', 'Renewal Management', 'Onboarding Strategy', 'QBRs', 'Churn Reduction'],
    'Technical Tools': ['HubSpot', 'Gainsight', 'Zendesk', 'Looker', 'SQL', 'Salesforce'],
    'Development': ['JavaScript', 'ReactJS', 'Node.js', 'MongoDB', 'HTML5', 'CSS3', 'Bootstrap']
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-violet-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-rose-400/20 to-orange-400/20 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-full blur-3xl"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              {/* Custom Logo */}
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 via-orange-500 to-amber-500 flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-6 transition-transform">
                  <span className="text-white font-black text-xl" style={{ fontFamily: 'Impact, sans-serif' }}>CS</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-rose-600 via-orange-500 to-amber-600 bg-clip-text text-transparent tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.02em' }}>
                  CARSON SAVAGE
                </h1>
                <p className="text-xs text-gray-600 font-medium tracking-wide">Customer Success Expert</p>
              </div>
            </div>
            <div className="flex gap-6">
              {['home', 'experience', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-bold tracking-wide transition-all ${
                    activeSection === section 
                      ? 'text-rose-600 scale-110' 
                      : 'text-gray-700 hover:text-orange-600 hover:scale-105'
                  }`}
                  style={{ fontFamily: 'system-ui, sans-serif' }}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Eye-Catching Banner */}
      <section id="home" className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Striking Hero Banner */}
          <div className="relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-rose-200/50 to-orange-200/50 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-violet-200/50 to-purple-200/50 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 text-center">
                {/* Profile Circle */}
                <div className="w-52 h-52 mx-auto mb-8 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-amber-200 to-rose-200 flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-orange-500/20 group-hover:scale-110 transition-transform duration-300"></div>
                  <span className="text-8xl font-black bg-gradient-to-br from-rose-600 via-orange-500 to-amber-600 bg-clip-text text-transparent relative z-10" style={{ fontFamily: 'Impact, sans-serif' }}>CS</span>
                  <Sparkles className="absolute top-4 right-4 w-6 h-6 text-amber-400 animate-pulse" />
                </div>
                
                <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.03em' }}>
                  <span className="block bg-gradient-to-r from-rose-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                    CUSTOMER SUCCESS MANAGER
                  </span>
                </h2>
                
                <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
                  <span className="px-4 py-2 bg-gradient-to-r from-rose-100 to-orange-100 rounded-full text-rose-700 font-bold text-sm border-2 border-rose-300">
                    SaaS Specialist
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full text-orange-700 font-bold text-sm border-2 border-orange-300">
                    Retention & Growth
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full text-amber-700 font-bold text-sm border-2 border-amber-300">
                    120%+ NRR
                  </span>
                </div>
                
                <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  I help SaaS companies keep customers happy and growing. With 7+ years in Customer Success, 
                  I've built programs from scratch, driven 120%+ NRR, and turned feedback into results using 
                  HubSpot, Gainsight, and SQL. I'm at my best when solving tough problems, scaling relationships, 
                  and helping customers see the value they signed up for.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-4 border-transparent hover:border-amber-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <stat.icon className="w-12 h-12 text-rose-600 mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-black bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-700 font-bold tracking-wide text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Links */}
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="mailto:carsonesavage@gmail.com" className="group flex items-center gap-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full hover:from-rose-600 hover:to-pink-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 font-bold">
              <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Email Me
            </a>
            <a href="tel:9045214779" className="group flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full hover:from-amber-600 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 font-bold">
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Call
            </a>
            <a href="https://linkedin.com/in/carson-savage-584992b0/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-violet-600 hover:to-purple-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 font-bold">
              <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              LinkedIn
            </a>
          </div>

          <div className="text-center mt-12">
            <ChevronDown className="w-10 h-10 text-gray-600 mx-auto animate-bounce cursor-pointer hover:text-rose-600 transition-colors" onClick={() => scrollToSection('experience')} />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white/70 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.02em' }}>
              Professional Experience
            </h2>
          </div>

          <div className="space-y-6">
            {experience.map((job, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-white via-amber-50/30 to-rose-50/30 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-l-8 border-rose-500 hover:border-orange-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-rose-200/30 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 mb-1 tracking-tight" style={{ fontFamily: 'system-ui, sans-serif' }}>
                        {job.role}
                      </h3>
                      <p className="text-lg text-rose-600 font-bold mb-1">{job.company}</p>
                      <p className="text-gray-600 font-medium">{job.location}</p>
                    </div>
                    <span className="text-sm font-bold text-gray-700 bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-3 rounded-full border-2 border-amber-300 shadow-md">
                      {job.period}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => setExpandedJob(expandedJob === idx ? null : idx)}
                    className="text-rose-600 font-bold mb-3 hover:text-orange-600 flex items-center gap-2 group/btn"
                  >
                    {expandedJob === idx ? 'Hide' : 'Show'} Key Achievements
                    <ChevronDown className={`w-5 h-5 transition-transform group-hover/btn:translate-y-1 ${expandedJob === idx ? 'rotate-180' : ''}`} />
                  </button>

                  {expandedJob === idx && (
                    <ul className="space-y-3 mt-4">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white/60 p-3 rounded-xl">
                          <span className="text-rose-500 mt-1 text-xl">●</span>
                          <span className="text-gray-800 font-medium">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.02em' }}>
              Skills & Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-t-8 border-orange-400 hover:border-rose-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-orange-200/30 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3 tracking-tight" style={{ fontFamily: 'system-ui, sans-serif' }}>
                    {category === 'Development' && <Code className="w-7 h-7 text-violet-600" />}
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((skill, i) => (
                      <li key={i} className="text-gray-800 font-medium flex items-center gap-3 group/item">
                        <span className="w-3 h-3 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full group-hover/item:scale-125 transition-transform"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-amber-300 mb-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight" style={{ fontFamily: 'system-ui, sans-serif' }}>
                Education & Certifications
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-2xl">
                <div className="w-4 h-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <p className="font-black text-gray-900 text-lg">Florida State University</p>
                  <p className="text-gray-700 font-medium">Information, Communication, and Technology</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-2xl">
                <div className="w-4 h-4 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <p className="font-black text-gray-900 text-lg">Vanderbilt University</p>
                  <p className="text-gray-700 font-medium">Full Stack Web Development Certificate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-3xl p-8 border-4 border-violet-300 shadow-xl">
            <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight" style={{ fontFamily: 'system-ui, sans-serif' }}>
              Interests & Community
            </h3>
            <p className="text-gray-800 font-medium mb-3">
              <span className="font-black">Professional Interests:</span> SaaS, EdTech, FinTech, AI & Machine Learning, Web Development
            </p>
            <p className="text-gray-800 font-medium">
              <span className="font-black">Community:</span> Fundraising, Community Outreach, and Photography with Hands On United Way of Nashville
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-rose-600 via-orange-600 to-amber-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-black mb-6 tracking-tight" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Let's Connect
          </h2>
          <p className="text-xl mb-12 text-white/95">
            I'm always open to discussing new opportunities, partnerships, or just talking shop about Customer Success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:carsonesavage@gmail.com" className="group bg-white text-rose-600 px-8 py-4 rounded-full font-bold hover:bg-amber-50 transition-all flex items-center gap-3 shadow-2xl hover:scale-105">
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              carsonesavage@gmail.com
            </a>
            <a href="tel:9045214779" className="group bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-amber-50 transition-all flex items-center gap-3 shadow-2xl hover:scale-105">
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              (904) 521-4779
            </a>
            <a href="https://linkedin.com/in/carson-savage-584992b0/" target="_blank" rel="noopener noreferrer" className="group bg-white text-violet-600 px-8 py-4 rounded-full font-bold hover:bg-amber-50 transition-all flex items-center gap-3 shadow-2xl hover:scale-105">
              <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-6 text-center">
        <p className="font-bold text-lg">© 2026 Carson Savage. Built with React.</p>
      </footer>
    </div>
  );
}