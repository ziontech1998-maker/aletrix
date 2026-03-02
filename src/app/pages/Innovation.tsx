import { Link } from 'react-router';
import { Cpu, Zap, Layers, GitBranch, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Innovation() {
  const approach = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Veille Technologique',
      description: 'Surveillance constante des innovations et tendances technologiques mondiales',
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Prototypage Rapide',
      description: 'Validation rapide de concepts avec des POC et MVP en quelques semaines',
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: 'R&D Collaborative',
      description: 'Co-création avec nos clients et partenaires académiques',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Industrialisation',
      description: 'Passage du prototype à la production avec excellence',
    },
  ];

  const technologies = [
    {
      category: 'Intelligence Artificielle',
      items: ['Machine Learning', 'Computer Vision', 'NLP', 'Deep Learning'],
      icon: '🤖',
      color: '#1F5EFF',
    },
    {
      category: 'Blockchain & Web3',
      items: ['Smart Contracts', 'DeFi', 'NFTs', 'DAOs'],
      icon: '⛓️',
      color: '#5FA8FF',
    },
    {
      category: 'Cloud & Infrastructure',
      items: ['Kubernetes', 'Serverless', 'Edge Computing', 'Multi-cloud'],
      icon: '☁️',
      color: '#1F5EFF',
    },
    {
      category: 'IoT & Connected Devices',
      items: ['Sensors', 'MQTT', 'Edge AI', 'Industrial IoT'],
      icon: '📡',
      color: '#5FA8FF',
    },
    {
      category: 'Data & Analytics',
      items: ['Big Data', 'Real-time Analytics', 'Data Lake', 'Predictive Analytics'],
      icon: '📊',
      color: '#1F5EFF',
    },
    {
      category: 'DevOps & Automation',
      items: ['CI/CD', 'Infrastructure as Code', 'Monitoring', 'Auto-scaling'],
      icon: '⚙️',
      color: '#5FA8FF',
    },
  ];

  const projects = [
    {
      title: 'IA Prédictive pour la Santé',
      description: 'Algorithme de détection précoce de maladies avec 92% de précision',
      status: 'Production',
      impact: 'Sauve des vies',
    },
    {
      title: 'Blockchain Éducation',
      description: 'Certification des diplômes sur blockchain pour lutter contre la fraude',
      status: 'Pilote',
      impact: '10K+ certificats',
    },
    {
      title: 'IoT Industriel 4.0',
      description: 'Maintenance prédictive avec capteurs connectés et IA',
      status: 'Production',
      impact: '-40% downtime',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0E1B2E] to-[#1a2d4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Innovation & R&D
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Notre laboratoire d'innovation explore les technologies de demain pour créer
                les solutions d'aujourd'hui.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
                style={{ backgroundColor: '#1F5EFF' }}
              >
                Collaborer avec notre lab
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NzIwNTY1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Innovation Lab"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: '#0E1B2E' }}>
              Notre Approche R&D
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour transformer l'innovation en valeur
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all"
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: index % 2 === 0 ? '#1F5EFF15' : '#5FA8FF15',
                    color: index % 2 === 0 ? '#1F5EFF' : '#5FA8FF',
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0E1B2E' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: '#0E1B2E' }}>
              Technologies Explorées
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre stack technologique de pointe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#0E1B2E' }}>
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: tech.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: '#0E1B2E' }}>
              Projets Innovants
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quelques innovations récentes de notre lab
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: project.status === 'Production' ? '#10b98115' : '#5FA8FF15',
                      color: project.status === 'Production' ? '#10b981' : '#5FA8FF',
                    }}
                  >
                    {project.status}
                  </span>
                  <Cpu className="w-6 h-6 text-[#1F5EFF]" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0E1B2E' }}>
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div
                  className="text-sm font-semibold"
                  style={{ color: '#1F5EFF' }}
                >
                  Impact: {project.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#0E1B2E' }}>
                Partenariats & Collaborations
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nous collaborons avec des universités, centres de recherche et entreprises
                innovantes pour rester à la pointe de la technologie.
              </p>
              <ul className="space-y-4">
                {[
                  'Laboratoires de recherche universitaires',
                  'Startups deep-tech',
                  'Incubateurs et accélérateurs',
                  'Consortiums technologiques',
                ].map((partner, index) => (
                  <li key={index} className="flex items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: '#1F5EFF' }}
                    >
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1672385277648-85eddc237a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kZXxlbnwxfHx8fDE3NzIwMTI3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Collaboration"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#1F5EFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Un projet innovant en tête ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Travaillons ensemble pour transformer votre idée en innovation concrète
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-[#1F5EFF] rounded-lg font-bold hover:shadow-xl transition-all"
          >
            Proposer un projet R&D
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
