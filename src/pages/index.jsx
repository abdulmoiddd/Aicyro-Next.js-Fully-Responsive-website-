import Head from "next/head";
import Hero from "../Components/Home/Hero";
import KeyFeature from "../Components/Home/keyfeature";
import Counter from "../Components/Home/counter";
import WeOffer from "../Components/Home/weoffer";
import Steps from "../Components/Home/steps";
import Exploring from "../Components/Home/exploring";
import Testimonial from "../Components/Home/Testimonial";
import Experience from "../Components/Home/Experience";
import Faqs from "../Components/Home/faqs";
import Footer from "../Components/Essntials/footer";
import Favicon from "../assets/favicon.png";
// import Ogimage from "./og-image.jpg";

const HomePage = () => {
  return (
    <div className="bg-[#0B0219]">
      <header>
        <Head>
          {/* --- DYNAMIC FAVICON --- */}
          <meta
            name="google-site-verification"
            content="H3IiET-R1ROp6Mc2C-542EEtOVyXboeB1knzQkRVOx0"
          />
          <link rel="icon" href={Favicon.src} />

          {/* --- LANGUAGE TAG --- */}
          <meta httpEquiv="Content-Language" content="en" />
          <meta name="language" content="English" />

          {/* --- PRIMARY META TAGS --- */}
          <title>Aicyro Solutions-SaaS Development</title>
          <meta
            name="description"
            content="Aicyro Solutions transforms businesses with intelligent SaaS development, AI-driven innovation, and robust cybersecurity. We build scalable, secure cloud products for startups and enterprises."
            // viewport="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="keywords"
            content="Aicyro Solutions, SaaS Development, AI Solutions, Cybersecurity, VAPT, Machine Learning, Cloud Architecture, Web Development, App Development, Software Agency, Pakistan"
          />
          <meta name="author" content="Aicyro Solutions" />

          {/* UPDATED: Canonical URL */}
          <link rel="canonical" href="https://aicyronextjs.netlify.app/" />

          {/* --- OPEN GRAPH (SOCIAL SHARING) --- */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Aicyro Solutions | Revolutionizing Intelligence & Security Innovation"
          />
          <meta
            property="og:description"
            content="Your partner for end-to-end digital transformation. Specializing in rapid SaaS MVPs, AI integration, and advanced cybersecurity services."
          />

          {/* UPDATED: Open Graph URL */}
          <meta property="og:url" content="https://aicyronextjs.netlify.app/" />

          {/* UPDATED: Image Path */}
          <meta
            property="og:image"
            content="https://aicyronextjs.netlify.app/og-image.jpg"
          />
          <meta property="og:site_name" content="Aicyro Solutions" />

          {/* --- TWITTER CARD --- */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Aicyro Solutions | AI, SaaS & Cybersecurity Experts"
          />
          <meta
            name="twitter:description"
            content="Building smart, secure, and scalable software. Explore our services in AI, Cloud, and App Development."
          />

          {/* UPDATED: Twitter Image Path */}
          <meta
            name="twitter:image"
            content="https://aicyronextjs.netlify.app/og-image.jpg"
          />

          {/* --- JSON-LD SCHEMA MARKUP --- */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Aicyro Solutions",
                url: "https://aicyronextjs.netlify.app/", // Updated URL
                logo: "https://aicyronextjs.netlify.app/logo.png", // Updated Logo Path
                slogan: "Revolutionizing Intelligence Security Innovation",
                description:
                  "Aicyro Solutions is a software development firm specializing in SaaS architecture, Artificial Intelligence, and Cybersecurity. We help clients launch MVPs and scale enterprise solutions.",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "PK",
                  addressRegion: "Islamabad Capital Territory",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+92-51-6122768",
                  contactType: "customer service",
                  areaServed: "World",
                  availableLanguage: ["English"],
                },
                sameAs: [
                  "https://www.linkedin.com/company/aicyro-solutions",
                  "https://www.facebook.com/aicyro",
                  "https://x.com/aicyro",
                  "https://www.instagram.com/aicyro",
                ],
              }),
            }}
          />
        </Head>

        <Hero />
      </header>

      <main>
        <KeyFeature />
        <Counter />
        <WeOffer />
        <Steps />
        <Exploring />
        <Testimonial />
        <Experience />
        <Faqs />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
