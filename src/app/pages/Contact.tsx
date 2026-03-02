import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Briefcase, Calendar } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: 'demo',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Merci pour votre message ! Notre équipe vous contactera sous 24h.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      subject: 'demo',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'contact@alterix.fr',
      link: 'mailto:contact@alterix.fr',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Téléphone',
      content: '+33 1 23 45 67 89',
      link: 'tel:+33123456789',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adresse',
      content: '123 Avenue de l\'Innovation\n75001 Paris, France',
      link: '#',
    },
  ];

  const offices = [
    { city: 'Paris', address: '123 Avenue de l\'Innovation, 75001', type: 'Siège Social' },
    { city: 'Lyon', address: '45 Rue de la Tech, 69002', type: 'Bureau Régional' },
    { city: 'Bruxelles', address: '78 Boulevard Européen, 1000', type: 'Bureau International' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0E1B2E] to-[#1a2d4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nous sommes là pour répondre à vos questions et transformer vos idées en réalité
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-start p-6 rounded-xl hover:bg-gray-50 transition-all group"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: '#1F5EFF15', color: '#1F5EFF' }}
                >
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#0E1B2E' }}>
                    {info.title}
                  </h3>
                  <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#0E1B2E' }}>
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#0E1B2E' }}>
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none transition-all"
                      placeholder="Jean"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#0E1B2E' }}>
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none transition-all"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2" style={{ color: '#0E1B2E' }}>
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none transition-all"
                    placeholder="jean.dupont@entreprise.fr"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#0E1B2E' }}>
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none transition-all"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2" style={{ color: '#0E1B2E' }}>
                      Entreprise
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none transition-all"
                      placeholder="Nom de l'entreprise"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2" style={{ color: '#0E1B2E' }}>
                    Objet de votre demande *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none transition-all"
                  >
                    <option value="demo">Demander une démo</option>
                    <option value="devis">Demander un devis</option>
                    <option value="recrutement">Candidature spontanée</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2" style={{ color: '#0E1B2E' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 outline-none transition-all resize-none"
                    placeholder="Décrivez votre projet ou votre besoin..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-bold text-white transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#1F5EFF' }}
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Nous vous répondrons sous 24h ouvrées
                </p>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-[#1F5EFF] to-[#5FA8FF] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Actions Rapides</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 mr-3" />
                      <span className="font-semibold">Planifier une démo</span>
                    </div>
                    <p className="text-sm text-white/80">
                      Découvrez nos solutions en action lors d'une démo personnalisée
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                    <div className="flex items-center mb-2">
                      <Briefcase className="w-5 h-5 mr-3" />
                      <span className="font-semibold">Demander un devis</span>
                    </div>
                    <p className="text-sm text-white/80">
                      Obtenez une estimation gratuite pour votre projet
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                    <div className="flex items-center mb-2">
                      <Mail className="w-5 h-5 mr-3" />
                      <span className="font-semibold">Candidature</span>
                    </div>
                    <p className="text-sm text-white/80">
                      Rejoignez notre équipe de talents passionnés
                    </p>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#0E1B2E' }}>
                  Nos Bureaux
                </h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-l-4 pl-4" style={{ borderColor: '#1F5EFF' }}>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold" style={{ color: '#0E1B2E' }}>
                          {office.city}
                        </h4>
                        <span
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ backgroundColor: '#5FA8FF15', color: '#5FA8FF' }}
                        >
                          {office.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#0E1B2E' }}>
                  Horaires
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lundi - Vendredi</span>
                    <span className="font-semibold" style={{ color: '#0E1B2E' }}>
                      9h - 18h
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Samedi - Dimanche</span>
                    <span className="font-semibold text-gray-400">Fermé</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      Support client 24/7 disponible pour nos clients en production
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-300 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4" style={{ color: '#1F5EFF' }} />
            <p className="text-xl font-semibold" style={{ color: '#0E1B2E' }}>
              123 Avenue de l'Innovation, 75001 Paris
            </p>
            <p className="text-gray-600 mt-2">Carte interactive disponible</p>
          </div>
        </div>
      </section>
    </div>
  );
}
