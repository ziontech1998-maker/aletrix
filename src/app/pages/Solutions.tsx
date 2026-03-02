import { Link } from 'react-router';
import { Cloud, Users, Code, Sparkles, ArrowRight, Check } from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'SaaS',
      tagline: 'Solutions cloud évolutives',
      description:
        'Nos plateformes SaaS offrent flexibilité, scalabilité et performance pour transformer vos opérations.',
      features: [
        'Architecture cloud-native',
        'Mise à jour automatique',
        'Disponibilité 99.9%',
        'Sécurité renforcée',
      ],
      color: '#1F5EFF',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Conseil',
      tagline: 'Expertise stratégique',
      description:
        'Accompagnement de A à Z dans votre transformation digitale avec des experts métiers.',
      features: [
        'Audit digital complet',
        'Stratégie sur mesure',
        'Change management',
        'Formation équipes',
      ],
      color: '#5FA8FF',
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Développement Custom',
      tagline: 'Solutions sur mesure',
      description:
        'Développement d\'applications métier parfaitement adaptées à vos processus uniques.',
      features: [
        'Architecture moderne',
        'Code maintenable',
        'Intégrations API',
        'Support dédié',
      ],
      color: '#1F5EFF',
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Innovation & R&D',
      tagline: 'Technologies émergentes',
      description:
        'Exploration et implémentation des technologies de demain : IA, blockchain, IoT.',
      features: [
        'IA et Machine Learning',
        'Blockchain & Web3',
        'IoT & Edge Computing',
        'Prototypage rapide',
      ],
      color: '#5FA8FF',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0E1B2E] to-[#1a2d4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Nos Solutions
            </h1>
            <p className="text-xl text-gray-300">
              Un éventail complet de services pour répondre à tous vos besoins digitaux,
              de la stratégie à la mise en œuvre.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${solution.color}15`, color: solution.color }}
                >
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#0E1B2E' }}>
                  {solution.title}
                </h3>
                <p className="text-lg mb-4" style={{ color: solution.color }}>
                  {solution.tagline}
                </p>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check
                        className="w-5 h-5 mr-3 flex-shrink-0"
                        style={{ color: solution.color }}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center font-semibold transition-all hover:gap-3 gap-2"
                  style={{ color: solution.color }}
                >
                  En savoir plus
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: '#0E1B2E' }}>
              Notre Méthodologie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus éprouvé pour garantir le succès de vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Analyse', desc: 'Comprendre vos besoins et objectifs' },
              { step: '02', title: 'Conception', desc: 'Designer la solution optimale' },
              { step: '03', title: 'Développement', desc: 'Créer avec agilité et qualité' },
              { step: '04', title: 'Déploiement', desc: 'Livrer et accompagner' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white"
                  style={{ backgroundColor: index % 2 === 0 ? '#1F5EFF' : '#5FA8FF' }}
                >
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-2" style={{ color: '#0E1B2E' }}>
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#1F5EFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Besoin d'une solution sur mesure ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nos experts sont à votre écoute pour concevoir la solution parfaite
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-[#1F5EFF] rounded-lg font-bold hover:shadow-xl transition-all"
          >
            Demander un devis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
