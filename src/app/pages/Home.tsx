import { Link } from 'react-router';
import { ArrowRight, Lightbulb, Users, Rocket, Target } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const activities = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'SaaS',
      description: 'Solutions cloud innovantes et évolutives pour digitaliser vos processus métier',
      color: '#1F5EFF',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Conseil',
      description: 'Accompagnement stratégique pour accélérer votre transformation digitale',
      color: '#5FA8FF',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Développement Custom',
      description: 'Applications sur mesure parfaitement adaptées à vos besoins spécifiques',
      color: '#1F5EFF',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation & R&D',
      description: 'Recherche et développement de solutions technologiques de pointe',
      color: '#5FA8FF',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0E1B2E] to-[#1a2d4d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Transformez votre vision en{' '}
                <span className="text-[#5FA8FF]">réalité digitale</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                ALTERIX conçoit et déploie des solutions technologiques innovantes qui propulsent
                votre entreprise vers l'excellence numérique.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#1F5EFF' }}
                >
                  Demander une démo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  Découvrir nos solutions
                </Link>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NzIwNTY1NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Innovation technologique"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: '#0E1B2E' }}>
              Nos 4 Activités Clés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise complète pour accompagner chaque étape de votre transformation digitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${activity.color}15`, color: activity.color }}
                >
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0E1B2E' }}>
                  {activity.title}
                </h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518729908-d4220a678d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjB0ZWFtfGVufDF8fHx8MTc3MjAxNDA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Équipe Conseil"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#0E1B2E' }}>
                Pourquoi choisir ALTERIX ?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: '#1F5EFF' }}
                  >
                    <span className="text-white font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2" style={{ color: '#0E1B2E' }}>
                      Excellence Technique
                    </h4>
                    <p className="text-gray-600">
                      Une équipe d'experts maîtrisant les technologies les plus avancées
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: '#5FA8FF' }}
                  >
                    <span className="text-white font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2" style={{ color: '#0E1B2E' }}>
                      Approche Personnalisée
                    </h4>
                    <p className="text-gray-600">
                      Des solutions sur mesure qui s'adaptent à vos objectifs spécifiques
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: '#1F5EFF' }}
                  >
                    <span className="text-white font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2" style={{ color: '#0E1B2E' }}>
                      Résultats Mesurables
                    </h4>
                    <p className="text-gray-600">
                      Un ROI tangible et des KPIs clairs pour chaque projet
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: '#5FA8FF' }}
                  >
                    <span className="text-white font-bold">04</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2" style={{ color: '#0E1B2E' }}>
                      Support Continu
                    </h4>
                    <p className="text-gray-600">
                      Un accompagnement permanent pour garantir votre succès
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{ backgroundColor: '#1F5EFF' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Discutons de vos projets et découvrez comment ALTERIX peut vous accompagner
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-[#1F5EFF] rounded-lg font-bold hover:shadow-xl transition-all hover:scale-105"
          >
            Contactez-nous
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
