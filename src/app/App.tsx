import { useState, useRef, useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import {
  Palette,
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
  Check,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [heroVisible, setHeroVisible] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    hours: "",
    details: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        hours: "",
        details: "",
      });
    } catch {
      setSubmitStatus("error");
    }
  };

  const scrollToBooking = (hours?: string) => {
    if (hours) setForm((prev: typeof form) => ({ ...prev, hours }));
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const galleryImages = [
    "/photo_1_2026-02-21_16-37-57.jpg",
    "/photo_2_2026-02-21_16-37-57.jpg",
    "/photo_3_2026-02-21_16-37-57.jpg",
    "/photo_4_2026-02-21_16-37-57.jpg",
    "/photo_5_2026-02-21_16-37-57.jpg",
    "/photo_6_2026-02-21_16-37-57.jpg",
    "/photo_7_2026-02-21_16-37-57.jpg",
    "/photo_8_2026-02-21_16-37-57.jpg",
    "/photo_9_2026-02-21_16-37-57.jpg",
    "/photo_10_2026-02-21_16-37-57.jpg",
    "/photo_11_2026-02-21_16-37-57.jpg",
    "/photo_12_2026-02-21_16-37-57.jpg",
    "/photo_13_2026-02-21_16-37-57.jpg",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="mx-auto max-w-[1200px] px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-2">
              <Palette className="w-8 h-8 text-[#06B6D4]" />
              <span className="text-xl lg:text-2xl font-bold text-[#1F2937]">
                ColorSplash
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#about"
                className="text-[#1F2937] hover:text-[#06B6D4] transition-colors"
              >
                About
              </a>
              <a
                href="#gallery"
                className="text-[#1F2937] hover:text-[#06B6D4] transition-colors"
              >
                Gallery
              </a>
              <a
                href="#pricing"
                className="text-[#1F2937] hover:text-[#06B6D4] transition-colors"
              >
                Pricing
              </a>
              <button
                onClick={scrollToBooking}
                className="cursor-pointer bg-[#06B6D4] text-white px-6 py-2.5 rounded-3xl hover:bg-[#0891B2] transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Book Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="cursor-pointer md:hidden p-2 text-[#1F2937] hover:text-[#06B6D4] transition-colors rounded-xl hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col px-4 py-4 gap-4">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#1F2937] hover:text-[#06B6D4]"
              >
                About
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#1F2937] hover:text-[#06B6D4]"
              >
                Gallery
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#1F2937] hover:text-[#06B6D4]"
              >
                Pricing
              </a>
              <button
                onClick={scrollToBooking}
                className="cursor-pointer bg-[#06B6D4] text-white px-6 py-3 rounded-3xl hover:bg-[#0891B2] transition-all hover:shadow-lg hover:-translate-y-0.5 text-left"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[85vh] lg:h-[90vh] flex items-center justify-center mt-16 lg:mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/photo_1_2026-02-21_16-37-57.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block bg-[#FBBF24] text-[#1F2937] px-4 py-2 rounded-full mb-6 text-sm lg:text-base">
            ⭐ 5+ Years Experience
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Face Painting Maryland
            <br />
            &amp; DMV Area
          </h1>

          <p className="text-lg lg:text-xl text-white mb-10 max-w-2xl mx-auto">
            Bringing color and magic to your party ✨ Beautiful, aesthetic
            designs using high-quality, skin-safe products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToBooking}
              className="cursor-pointer bg-[#06B6D4] text-white px-8 py-4 rounded-3xl text-lg hover:bg-[#0891B2] transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Book Now
            </button>
            <button
              onClick={scrollToBooking}
              className="cursor-pointer bg-white text-[#1F2937] px-8 py-4 rounded-3xl text-lg hover:bg-gray-50 transition-all hover:shadow-xl hover:-translate-y-1"
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
                src="/mariana_facepainting.jpg"
                alt="Face painter at work"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#1F2937] mb-6">
                Creating Magical Moments
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                I create beautiful, aesthetic face painting designs that make
                every child (and adult!) feel special. Each design is detailed,
                clean, and professionally done using high-quality, skin-safe
                products.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Perfect for birthdays, events, and special celebrations in the
                DMV area. I take pride in every design — from simple and sweet
                to detailed and dramatic.
              </p>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 text-[#06B6D4] hover:text-[#0891B2] transition-colors text-lg"
              >
                View Gallery <span>→</span>
              </a>
            </div>
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
              <button
                key={index}
                className="relative aspect-square rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer group text-left"
                aria-label={`View face painting example ${index + 1}`}
                onClick={() => setSelectedImage(image)}
              >
                <ImageWithFallback
                  src={image}
                  alt={`Face painting by Mariana - Maryland & DMV area - example ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
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
            className="cursor-pointer absolute top-4 right-4 text-white hover:text-gray-300"
            aria-label="Close image"
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
      <section
        id="pricing"
        className="py-16 lg:py-24 px-4 bg-gradient-to-br from-[#F0FDFA] to-white"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1F2937] mb-4">
              Simple Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Starting from $125/hour — contact us for a custom quote
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "1 Hour",
                price: "125",
                duration: "hour",
                features: [
                  "Up to ~15 designs",
                  "All standard designs",
                  "Skin-safe products",
                  "Professional setup",
                ],
              },
              {
                name: "2 Hours",
                price: "250",
                duration: "2 hours",
                features: [
                  "Up to ~30 designs",
                  "All standard designs",
                  "Skin-safe products",
                  "Glitter add-ons",
                  "Ideal for parties",
                ],
                popular: true,
              },
              {
                name: "3 Hours",
                price: "375",
                duration: "3 hours",
                features: [
                  "Up to ~45 designs",
                  "Premium & custom designs",
                  "Skin-safe products",
                  "Glitter & gems",
                  "Great for festivals",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 ${
                  plan.popular
                    ? "ring-4 ring-[#06B6D4] scale-105 shadow-2xl"
                    : "shadow-lg hover:shadow-xl"
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
                  <span className="text-5xl font-bold text-[#1F2937]">
                    ${plan.price}
                  </span>
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
                  onClick={() => scrollToBooking(plan.name)}
                  className={`cursor-pointer w-full py-3.5 rounded-3xl font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                    plan.popular
                      ? "bg-[#06B6D4] text-white hover:bg-[#0891B2]"
                      : "bg-gray-100 text-[#1F2937] hover:bg-gray-200"
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
              We use only the highest quality, FDA-compliant face paints and
              maintain strict hygiene standards
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Hypoallergenic Paints",
                description:
                  "FDA-approved, non-toxic paints safe for sensitive skin",
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Sanitized Tools",
                description: "All brushes and sponges cleaned after each use",
              },
              {
                icon: <Smile className="w-12 h-12" />,
                title: "Kid-Friendly",
                description: "Patient, gentle approach with every child",
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: "Professional Setup",
                description: "Clean, organized station at every event",
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
            <p className="text-lg text-white">
              Trusted by families across Maryland
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                quote:
                  "Amazing experience! The kids were absolutely thrilled with their face paintings. Professional, punctual, and so creative!",
                name: "Sarah M.",
                event: "Birthday Party",
              },
              {
                quote:
                  "Hired ColorSplash for our company picnic and it was a huge hit. Adults and kids alike loved it. Highly recommend!",
                name: "Michael T.",
                event: "Corporate Event",
              },
              {
                quote:
                  "The quality of work is outstanding. My daughter still talks about her butterfly design weeks later. Will definitely book again!",
                name: "Jennifer L.",
                event: "Birthday Party",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]"
                    />
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
      <section id="booking" className="py-16 lg:py-24 pb-28 lg:pb-24 px-4 bg-white">
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="form-name" className="block text-[#1F2937] mb-2">Your Name *</label>
                <input
                  id="form-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 outline-none transition-all"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label htmlFor="form-email" className="block text-[#1F2937] mb-2">Email *</label>
                <input
                  id="form-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleFormChange}
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 outline-none transition-all"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label htmlFor="form-phone" className="block text-[#1F2937] mb-2">Phone *</label>
                <PhoneInput
                  defaultCountry="us"
                  value={form.phone}
                  onChange={(phone) => setForm((prev: typeof form) => ({ ...prev, phone }))}
                  inputProps={{ id: "form-phone", name: "phone", autoComplete: "tel", required: true }}
                  inputClassName="!w-full !px-4 !py-3 !rounded-r-2xl !bg-gray-50 !border !border-gray-200 focus:!border-[#06B6D4] focus:!ring-2 focus:!ring-[#06B6D4]/20 !outline-none !transition-all"
                  countrySelectorStyleProps={{
                    buttonClassName: "!rounded-l-2xl !bg-gray-50 !border !border-gray-200 !px-3 !h-full",
                  }}
                  style={{ display: "flex", width: "100%" }}
                />
              </div>

              <div>
                <label htmlFor="form-date" className="block text-[#1F2937] mb-2">
                  Event Date *
                </label>
                <input
                  id="form-date"
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleFormChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="form-hours" className="block text-[#1F2937] mb-2">
                  How Many Hours
                </label>
                <select
                  id="form-hours"
                  name="hours"
                  value={form.hours}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 outline-none transition-all"
                >
                  <option value="">Select...</option>
                  <option value="1 Hour">1 Hour — $125</option>
                  <option value="2 Hours">2 Hours — $250</option>
                  <option value="3 Hours">3 Hours — $375</option>
                </select>
              </div>

              <div>
                <label htmlFor="form-details" className="block text-[#1F2937] mb-2">
                  Additional Details
                </label>
                <textarea
                  id="form-details"
                  name="details"
                  value={form.details}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>

              {submitStatus === "success" && (
                <p className="text-green-600 text-center font-medium">
                  ✓ Request sent! We'll get back to you within 24 hours.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 text-center font-medium">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={submitStatus === "sending"}
                className="cursor-pointer w-full bg-[#06B6D4] text-white px-8 py-4 rounded-3xl text-lg hover:bg-[#0891B2] transition-all hover:shadow-xl hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {submitStatus === "sending"
                  ? "Sending…"
                  : "Send Booking Request"}
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
                      <a
                        href="tel:+12407156247"
                        className="text-[#1F2937] font-semibold hover:text-[#06B6D4] transition-colors"
                      >
                        +1 (240) 715-6247
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-2xl">
                      <Mail className="w-6 h-6 text-[#06B6D4]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a
                        href="mailto:marianadrozdiuk9@gmail.com"
                        className="text-[#1F2937] font-semibold hover:text-[#06B6D4] transition-colors"
                      >
                        marianadrozdiuk9@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-2xl">
                      <Instagram className="w-6 h-6 text-[#06B6D4]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">DM to Book</p>
                      <a
                        href="https://www.instagram.com/facepainting_mary_land"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1F2937] font-semibold hover:text-[#06B6D4] transition-colors"
                      >
                        @facepainting_mary_land
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2 font-medium">Working Hours</p>
                    <p className="text-[#1F2937]">Mon – Sat: 9:30 am – 9:30 pm</p>
                    <p className="text-[#1F2937]">Sunday: 11:00 am – 8:30 pm</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#8B5CF6] to-[#EC4899] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Serving Maryland & DMV Area
                </h3>
                <p className="text-white mb-4">
                  Ready to make your event unforgettable? DM on Instagram or
                  send a message — we'll get back to you quickly!
                </p>
                <p className="text-sm text-white">
                  Available Mon–Sat 9:30am–9:30pm • Sun 11am–8:30pm
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
            <a
              href="#about"
              className="text-gray-400 hover:text-[#06B6D4] transition-colors"
            >
              About
            </a>
            <a
              href="#gallery"
              className="text-gray-400 hover:text-[#06B6D4] transition-colors"
            >
              Gallery
            </a>
            <a
              href="#pricing"
              className="text-gray-400 hover:text-[#06B6D4] transition-colors"
            >
              Pricing
            </a>
            <a
              href="#booking"
              className="text-gray-400 hover:text-[#06B6D4] transition-colors"
            >
              Contact
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © 2026 ColorSplash Face Painting. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky Button */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent md:hidden z-40 transition-transform duration-300 ${heroVisible ? "translate-y-full" : "translate-y-0"}`}>
        <button
          onClick={scrollToBooking}
          className="cursor-pointer w-full bg-[#06B6D4] text-white px-8 py-4 rounded-3xl text-lg hover:bg-[#0891B2] transition-all hover:shadow-2xl hover:-translate-y-0.5 shadow-xl"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
