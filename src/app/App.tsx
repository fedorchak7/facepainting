import { useState } from 'react';
import { 
  Palette, 
  Users, 
  Building2, 
  Music, 
  Sparkles,
  Heart,
  Shield,
  Smile,
  Star,
  Phone,
  Mail,
  Instagram,
  Menu,
  X,
  Check
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const galleryImages = [
    'https://images.unsplash.com/photo-1765947386189-975769d0f162?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGZhY2UlMjBwYWludGluZyUyMGNvbG9yZnVsJTIwcGFydHl8ZW58MXx8fHwxNzcxNTM1MzQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1628016354739-6c65f0e11c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXJsJTIwYnV0dGVyZmx5JTIwZmFjZSUyMHBhaW50fGVufDF8fHx8MTc3MTUzNTM0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1767783703531-536ea0c32478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGhhcHB5JTIwcGFpbnRlZCUyMGZhY2VzfGVufDF8fHx8MTc3MTUzNTM0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1652635254625-c49d83b310bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3klMjBzdXBlcmhlcm8lMjBmYWNlJTIwcGFpbnR8ZW58MXx8fHwxNzcxNTM1MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1762912913371-ccc0a5fca0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYmlydGhkYXklMjBwYXJ0eSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3MTUzNTM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1761145275111-e62cbdba6f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5JTIwYXJ0JTIwcGFpbnRpbmclMjBhcnRpc3RpY3xlbnwxfHx8fDE3NzE1MzUzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="mx-auto max-w-[1200px] px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-2">
              <Palette className="w-8 h-8 text-[#06B6D4]" />
              <span className="text-xl lg:text-2xl font-bold text-[#1F2937]">ColorSplash</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-[#1F2937] hover:text-[#06B6D4] transition-colors">About</a>
              <a href="#services" className="text-[#1F2937] hover:text-[#06B6D4] transition-colors">Services</a>
              <a href="#gallery" className="text-[#1F2937] hover:text-[#06B6D4] transition-colors">Gallery</a>
              <a href="#pricing" className="text-[#1F2937] hover:text-[#06B6D4] transition-colors">Pricing</a>
              <button
                onClick={scrollToBooking}
                className="bg-[#06B6D4] text-white px-6 py-2.5 rounded-3xl hover:bg-[#0891B2] transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Book Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1F2937]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col px-4 py-4 gap-4">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-[#1F2937] hover:text-[#06B6D4]">About</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-[#1F2937] hover:text-[#06B6D4]">Services</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-[#1F2937] hover:text-[#06B6D4]">Gallery</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-[#1F2937] hover:text-[#06B6D4]">Pricing</a>
              <button
                onClick={scrollToBooking}
                className="bg-[#06B6D4] text-white px-6 py-3 rounded-3xl hover:bg-[#0891B2] transition-all text-left"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[85vh] lg:h-[90vh] flex items-center justify-center mt-16 lg:mt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1765947386189-975769d0f162?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGZhY2UlMjBwYWludGluZyUyMGNvbG9yZnVsJTIwcGFydHl8ZW58MXx8fHwxNzcxNTM1MzQzfDA&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block bg-[#FBBF24] text-[#1F2937] px-4 py-2 rounded-full mb-6 text-sm lg:text-base">
            ⭐ 5+ Years Experience
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Face Painting in Maryland<br />for Kids Parties
          </h1>
          
          <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Professional face painting that brings joy and color to every celebration. Safe, fun, and unforgettable!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToBooking}
              className="bg-[#06B6D4] text-white px-8 py-4 rounded-3xl text-lg hover:bg-[#0891B2] transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Book Now
            </button>
            <button
              onClick={scrollToBooking}
              className="bg-white text-[#1F2937] px-8 py-4 rounded-3xl text-lg hover:bg-gray-50 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 px-4">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative h-[300px] lg:h-[400px] rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1611253291108-bca55a6dfadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlJTIwcGFpbnRlciUyMGFydGlzdCUyMHdvcmtpbmclMjBraWRzfGVufDF8fHx8MTc3MTUzNTM0NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Face painter at work"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#1F2937] mb-6">
                Creating Magical Moments Since 2019
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Hi! I'm a professional face painter based in Maryland, specializing in bringing imagination to life at children's parties, corporate events, and festivals.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every child deserves to feel special, and with safe, hypoallergenic paints and years of experience, I create designs that spark joy and make memories that last a lifetime.
              </p>
              <a href="#gallery" className="inline-flex items-center gap-2 text-[#06B6D4] hover:text-[#0891B2] transition-colors text-lg">
                View Gallery <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 px-4 bg-[#F0FDFA]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1F2937] mb-4">
              Services We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From birthday parties to corporate events, we bring color and creativity to every occasion
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: <Users className="w-10 h-10" />,
                title: 'Kids Parties',
                description: 'Transform birthdays into magical adventures with colorful face designs',
                color: '#EC4899',
              },
              {
                icon: <Building2 className="w-10 h-10" />,
                title: 'Corporate Events',
                description: 'Add a fun touch to company picnics and family days',
                color: '#8B5CF6',
              },
              {
                icon: <Music className="w-10 h-10" />,
                title: 'Festivals',
                description: 'Entertain crowds at fairs, festivals, and community events',
                color: '#FBBF24',
              },
              {
                icon: <Sparkles className="w-10 h-10" />,
                title: 'Body Art',
                description: 'Creative body painting for special occasions and photoshoots',
                color: '#06B6D4',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div 
                  className="inline-flex p-4 rounded-2xl mb-6"
                  style={{ backgroundColor: `${service.color}20`, color: service.color }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={scrollToBooking}
                  className="text-sm px-6 py-2.5 rounded-full border-2 hover:bg-gray-50 transition-all"
                  style={{ borderColor: service.color, color: service.color }}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 lg:py-24 px-4">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1F2937] mb-4">
              Our Work
            </h2>
            <p className="text-lg text-gray-600">
              See the magic we create at every event
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <ImageWithFallback
                  src={image}
                  alt={`Face painting example ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery fullscreen"
            className="max-w-full max-h-full rounded-2xl"
          />
        </div>
      )}

      {/* Pricing Section */}
      <section id="pricing" className="py-16 lg:py-24 px-4 bg-gradient-to-br from-[#F0FDFA] to-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1F2937] mb-4">
              Simple Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect package for your event
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Basic',
                price: '150',
                duration: '1 hour',
                features: ['Up to 15 kids', 'Simple designs', 'Basic color palette', 'Professional setup'],
              },
              {
                name: 'Popular',
                price: '275',
                duration: '2 hours',
                features: ['Up to 30 kids', 'Advanced designs', 'Full color palette', 'Photo opportunities', 'Design book'],
                popular: true,
              },
              {
                name: 'Premium',
                price: '400',
                duration: '3 hours',
                features: ['Unlimited kids', 'Premium designs', 'Full color palette', 'Custom designs', 'Photo props', 'Glitter & gems'],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 ${
                  plan.popular 
                    ? 'ring-4 ring-[#06B6D4] scale-105 shadow-2xl' 
                    : 'shadow-lg hover:shadow-xl'
                } transition-all`}
              >
                {plan.popular && (
                  <div className="bg-[#06B6D4] text-white text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#1F2937] mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-[#1F2937]">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/ {plan.duration}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToBooking}
                  className={`w-full py-3.5 rounded-3xl font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                    plan.popular
                      ? 'bg-[#06B6D4] text-white hover:bg-[#0891B2]'
                      : 'bg-gray-100 text-[#1F2937] hover:bg-gray-200'
                  }`}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 lg:py-24 px-4 bg-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1F2937] mb-4">
              Your Child's Safety First
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use only the highest quality, FDA-compliant face paints and maintain strict hygiene standards
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: 'Hypoallergenic Paints',
                description: 'FDA-approved, non-toxic paints safe for sensitive skin',
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Sanitized Tools',
                description: 'All brushes and sponges cleaned after each use',
              },
              {
                icon: <Smile className="w-12 h-12" />,
                title: 'Kid-Friendly',
                description: 'Patient, gentle approach with every child',
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: 'Professional Setup',
                description: 'Clean, organized station at every event',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-6 rounded-full bg-[#F0FDFA] text-[#06B6D4] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 px-4 bg-gradient-to-br from-[#8B5CF6] to-[#EC4899]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              What Parents Say
            </h2>
            <p className="text-lg text-white/90">
              Trusted by families across Maryland
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                quote: "Amazing experience! The kids were absolutely thrilled with their face paintings. Professional, punctual, and so creative!",
                name: "Sarah M.",
                event: "Birthday Party",
              },
              {
                quote: "Hired ColorSplash for our company picnic and it was a huge hit. Adults and kids alike loved it. Highly recommend!",
                name: "Michael T.",
                event: "Corporate Event",
              },
              {
                quote: "The quality of work is outstanding. My daughter still talks about her butterfly design weeks later. Will definitely book again!",
                name: "Jennifer L.",
                event: "Birthday Party",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-[#1F2937]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Booking Section */}
      <section id="booking" className="py-16 lg:py-24 px-4 bg-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1F2937] mb-4">
              Book Your Event Today
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-[#1F2937] mb-2">Your Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 outline-none transition-all"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label className="block text-[#1F2937] mb-2">Email *</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 outline-none transition-all"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-[#1F2937] mb-2">Phone *</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 outline-none transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-[#1F2937] mb-2">Event Date *</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[#1F2937] mb-2">Event Type</label>
                <select className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 outline-none transition-all">
                  <option>Birthday Party</option>
                  <option>Corporate Event</option>
                  <option>Festival</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[#1F2937] mb-2">Additional Details</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#06B6D4] text-white px-8 py-4 rounded-3xl text-lg hover:bg-[#0891B2] transition-all hover:shadow-xl hover:-translate-y-1"
              >
                Send Booking Request
              </button>
            </form>

            <div className="space-y-8">
              <div className="bg-[#F0FDFA] rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-[#1F2937] mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-2xl">
                      <Phone className="w-6 h-6 text-[#06B6D4]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Call or Text</p>
                      <p className="text-[#1F2937] font-semibold">(555) 789-1234</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-2xl">
                      <Mail className="w-6 h-6 text-[#06B6D4]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="text-[#1F2937] font-semibold">hello@colorsplashmd.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-2xl">
                      <Instagram className="w-6 h-6 text-[#06B6D4]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Follow Us</p>
                      <p className="text-[#1F2937] font-semibold">@colorsplashmd</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Same-Day Booking Available!
                </h3>
                <p className="text-white/90 mb-4">
                  Need a last-minute face painter? We often have same-day availability. Give us a call!
                </p>
                <p className="text-sm text-white/80">
                  Available 7 days a week • Serving all of Maryland
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-12 px-4">
        <div className="mx-auto max-w-[1200px] text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Palette className="w-8 h-8 text-[#06B6D4]" />
            <span className="text-2xl font-bold">ColorSplash</span>
          </div>
          <p className="text-gray-400 mb-6">
            Professional Face Painting in Maryland • Making Every Event Colorful
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#about" className="text-gray-400 hover:text-[#06B6D4] transition-colors">About</a>
            <a href="#services" className="text-gray-400 hover:text-[#06B6D4] transition-colors">Services</a>
            <a href="#gallery" className="text-gray-400 hover:text-[#06B6D4] transition-colors">Gallery</a>
            <a href="#pricing" className="text-gray-400 hover:text-[#06B6D4] transition-colors">Pricing</a>
            <a href="#booking" className="text-gray-400 hover:text-[#06B6D4] transition-colors">Contact</a>
          </div>
          <p className="text-sm text-gray-500">
            © 2026 ColorSplash Face Painting. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent md:hidden z-40">
        <button
          onClick={scrollToBooking}
          className="w-full bg-[#06B6D4] text-white px-8 py-4 rounded-3xl text-lg hover:bg-[#0891B2] transition-all shadow-xl"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
