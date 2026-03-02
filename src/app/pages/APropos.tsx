import { Target, Users, Award, Heart, Rocket, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function APropos() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque ligne de code et chaque interaction client',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion',
      description: 'La technologie est notre passion, votre succès notre motivation',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Nous explorons constamment de nouvelles solutions pour rester à la pointe',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Impact',
      description: 'Créer des solutions qui ont un impact positif sur la société',
    },
  ];

  const team = [
    {
      name: 'Sophie Durand',
      role: 'CEO & Co-fondatrice',
      bio: '15 ans d\'expérience en transformation digitale',
      avatar: '👩‍💼',
    },
    {
      name: 'Marc Lefebvre',
      role: 'CTO & Co-fondateur',
      bio: 'Expert architecture cloud et IA',
      avatar: '👨‍💻',
    },
    {
      name: 'Julie Martin',
      role: 'Directrice Innovation',
      bio: 'Spécialiste R&D et technologies émergentes',
      avatar: '👩‍🔬',
    },
    {
      name: 'Thomas Bernard',
      role: 'Directeur Conseil',
      bio: 'Stratégie digitale et accompagnement client',
      avatar: '👨‍💼',
    },
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Fondation',
      description: 'Création d\'ALTERIX avec la vision de démocratiser l\'innovation technologique',
    },
    {
      year: '2020',
      title: 'Expansion',
      description: 'Ouverture de notre lab R&D et passage à 50 collaborateurs',
    },
    {
      year: '2023',
      title: 'Reconnaissance',
      description: 'Prix "Innovation Digitale" et 200+ clients satisfaits',
    },
    {
      year: '2026',
      title: 'Aujourd\'hui',
      description: 'Leader français avec 150 collaborateurs et présence européenne',
    },
  ];

  const stats = [
    { number: '150+', label: 'Collaborateurs experts' },
    { number: '8', label: 'Ans d\'expérience' },
    { number: '300+', label: 'Clients accompagnés' },
    { number: '500+', label: 'Projets réalisés' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0E1B2E] to-[#1a2d4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">À Propos d'ALTERIX</h1>
              <p className="text-xl text-gray-300 mb-8">
                Nous sommes une équipe passionnée qui transforme les défis digitaux en opportunités
                de croissance depuis 2018.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
                style={{ backgroundColor: '#1F5EFF' }}
              >
                Rejoindre l'aventure
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518729908-d4220a678d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjB0ZWFtfGVufDF8fHx8MTc3MjAxNDA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Équipe ALTERIX"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: '#1F5EFF' }}>
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: '#0E1B2E' }}>
              Notre Histoire
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un parcours guidé par l'innovation et la passion de la technologie
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#5FA8FF]" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={index % 2 === 0 ? 'lg:text-right' : 'lg:order-2'}>
                    <div
                      className="inline-block px-4 py-2 rounded-full font-bold text-white mb-4"
                      style={{ backgroundColor: '#1F5EFF' }}
                    >
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#0E1B2E' }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className={index % 2 === 0 ? '' : 'lg:order-1'} />
                  
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white" style={{ backgroundColor: '#1F5EFF' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: '#0E1B2E' }}>
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0E1B2E' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4" style={{ color: '#0E1B2E' }}>
              L'Équipe Dirigeante
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des experts passionnés qui guident la vision d'ALTERIX
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold mb-1" style={{ color: '#0E1B2E' }}>
                  {member.name}
                </h3>
                <div className="text-sm mb-3" style={{ color: '#1F5EFF' }}>
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#0E1B2E' }}>
              Certifications & Partenaires
            </h2>
            <p className="text-xl text-gray-600">
              Reconnus par les leaders de l'industrie
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {['ISO 27001', 'HDS', 'AWS Partner', 'Microsoft Gold', 'Google Cloud'].map(
              (cert, index) => (
                <div
                  key={index}
                  className="px-8 py-4 rounded-xl border-2 border-gray-200 font-bold text-gray-700 hover:border-[#1F5EFF] hover:text-[#1F5EFF] transition-all"
                >
                  <Award className="inline w-5 h-5 mr-2" />
                  {cert}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#1F5EFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Envie de rejoindre l'aventure ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nous recherchons constamment des talents passionnés pour renforcer notre équipe
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-[#1F5EFF] rounded-lg font-bold hover:shadow-xl transition-all"
          >
            Voir nos offres d'emploi
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
