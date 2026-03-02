import { BookOpen, FileText, Download, Calendar, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function Ressources() {
  const blogPosts = [
    {
      title: 'L\'IA dans l\'éducation : Révolution ou évolution ?',
      excerpt:
        'Découvrez comment l\'intelligence artificielle transforme les méthodes d\'apprentissage et le suivi pédagogique.',
      category: 'Intelligence Artificielle',
      date: '15 Février 2026',
      readTime: '8 min',
      color: '#1F5EFF',
    },
    {
      title: 'RGPD et données de santé : Le guide complet 2026',
      excerpt:
        'Tout ce que vous devez savoir sur la conformité RGPD dans le secteur de la santé numérique.',
      category: 'Conformité',
      date: '10 Février 2026',
      readTime: '12 min',
      color: '#5FA8FF',
    },
    {
      title: 'Architecture microservices : Retour d\'expérience',
      excerpt:
        'Les leçons apprises lors de la migration d\'un monolithe vers une architecture distribuée.',
      category: 'Architecture',
      date: '5 Février 2026',
      readTime: '10 min',
      color: '#1F5EFF',
    },
    {
      title: 'Blockchain et certifications : Use cases concrets',
      excerpt:
        'Comment la blockchain révolutionne la certification et la traçabilité des documents.',
      category: 'Blockchain',
      date: '28 Janvier 2026',
      readTime: '6 min',
      color: '#5FA8FF',
    },
  ];

  const whitepapers = [
    {
      title: 'Transformation Digitale dans l\'Éducation',
      description:
        'Guide complet pour digitaliser votre établissement : stratégie, technologies, ROI.',
      pages: '45 pages',
      format: 'PDF',
      category: 'Éducation',
    },
    {
      title: 'Télémédecine : Implémentation et Conformité',
      description:
        'Les étapes clés pour déployer une solution de télémédecine conforme HDS et RGPD.',
      pages: '38 pages',
      format: 'PDF',
      category: 'Santé',
    },
    {
      title: 'ERP Moderne : Critères de Sélection 2026',
      description:
        'Choisir le bon ERP pour votre entreprise : fonctionnalités, intégrations, coûts.',
      pages: '52 pages',
      format: 'PDF',
      category: 'Corporate',
    },
  ];

  const documentation = [
    { title: 'API Documentation', icon: '📚', link: '#' },
    { title: 'Guides Techniques', icon: '⚙️', link: '#' },
    { title: 'Best Practices', icon: '✨', link: '#' },
    { title: 'Tutoriels Vidéo', icon: '🎥', link: '#' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0E1B2E] to-[#1a2d4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Centre de Ressources</h1>
            <p className="text-xl text-gray-300">
              Insights, guides et documentation pour vous accompagner dans votre transformation
              digitale.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#0E1B2E' }}>
                Blog
              </h2>
              <p className="text-xl text-gray-600">
                Articles d'experts sur les tendances tech et les bonnes pratiques
              </p>
            </div>
            <BookOpen className="w-12 h-12 text-[#1F5EFF] hidden lg:block" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: `${post.color}15`, color: post.color }}
                  >
                    <Tag className="inline w-3 h-3 mr-1" />
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0E1B2E' }}>
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime} de lecture</span>
                  <button
                    className="inline-flex items-center font-semibold transition-all hover:gap-2 gap-1"
                    style={{ color: post.color }}
                  >
                    Lire plus
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#0E1B2E' }}>
                Livres Blancs
              </h2>
              <p className="text-xl text-gray-600">
                Guides approfondis pour maîtriser votre transformation digitale
              </p>
            </div>
            <FileText className="w-12 h-12 text-[#5FA8FF] hidden lg:block" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#1F5EFF] to-[#5FA8FF] flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#0E1B2E' }}>
                  {paper.title}
                </h3>
                <p className="text-gray-600 mb-4">{paper.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{paper.pages}</span>
                  <span>{paper.format}</span>
                  <span
                    className="px-2 py-1 rounded text-xs"
                    style={{ backgroundColor: '#1F5EFF15', color: '#1F5EFF' }}
                  >
                    {paper.category}
                  </span>
                </div>
                <button
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#1F5EFF' }}
                >
                  <Download className="w-5 h-5" />
                  Télécharger
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#0E1B2E' }}>
              Documentation Technique
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Toutes les ressources pour développeurs et équipes techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentation.map((doc, index) => (
              <a
                key={index}
                href={doc.link}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gradient-to-br hover:from-[#1F5EFF] hover:to-[#5FA8FF] hover:text-white transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {doc.icon}
                </div>
                <h3 className="font-bold" style={{ color: '#0E1B2E' }} className="group-hover:text-white">
                  {doc.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20" style={{ backgroundColor: '#1F5EFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Restez informé de nos dernières publications
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Recevez nos articles, livres blancs et actualités tech directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Votre email professionnel"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="px-8 py-4 bg-white text-[#1F5EFF] rounded-lg font-bold hover:shadow-xl transition-all whitespace-nowrap">
              S'abonner
            </button>
          </div>
          <p className="text-sm text-white/70 mt-4">
            Pas de spam, désinscription en un clic
          </p>
        </div>
      </section>
    </div>
  );
}
