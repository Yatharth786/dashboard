import React, { useState } from 'react';
import { Link } from 'wouter';
import { ChevronDown, ChevronRight, Check, Users, Store, TrendingUp, ShoppingBag, Briefcase, Target, Zap, AlertCircle } from 'lucide-react';

const SolutionsPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const solutions = [
    {
      id: 'amazon-sellers',
      icon: <ShoppingBag className="w-6 h-6" />,
      title: 'For Amazon Sellers (India)',
      whoItsFor: 'Private label & reseller sellers on Amazon India',
      problems: [
        'Competitor price tracking',
        'Keyword & rank visibility',
        'Review analysis',
        'Pricing decisions'
      ],
      outcome: 'Sell smarter, react faster, protect margins.',
      link: '/solutions/amazon-sellers',
      visual: '🛒'
    },
    {
      id: 'flipkart-sellers',
      icon: <Store className="w-6 h-6" />,
      title: 'For Flipkart Sellers',
      whoItsFor: 'Sellers primarily operating on Flipkart',
      problems: [
        'Price wars',
        'SEO & visibility gaps',
        'Competitor monitoring'
      ],
      outcome: 'Better visibility and faster reactions on Flipkart.',
      link: '/solutions/flipkart-sellers',
      visual: '🏪'
    },
    // {
    //   id: 'meesho-sellers',
    //   icon: <Users className="w-6 h-6" />,
    //   title: 'For Meesho Sellers',
    //   badge: 'NEW',
    //   whoItsFor: 'Meesho-focused sellers in Tier 2–3 markets',
    //   problems: [
    //     'Pricing sensitivity',
    //     'Demand understanding',
    //     'Product selection'
    //   ],
    //   outcome: 'Data-backed selling in price-sensitive markets.',
    //   link: '/solutions/meesho-sellers',
    //   visual: '🎯'
    // },
    {
      id: 'd2c-brands',
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'For Shopify / D2C Brands',
      whoItsFor: 'D2C brands selling via Shopify + marketplaces',
      problems: [
        'Market demand validation',
        'Competitive benchmarking',
        'Product positioning'
      ],
      outcome: 'Smarter launches and better positioning.',
      link: '/solutions/d2c-brands',
      visual: '🚀'
    },
    {
      id: 'ecommerce-agencies',
      icon: <Briefcase className="w-6 h-6" />,
      title: 'For E-commerce Agencies',
      whoItsFor: 'Agencies managing multiple seller accounts',
      problems: [
        'Manual reporting',
        'Data collection across clients',
        'Scaling insights'
      ],
      outcome: 'Save time, scale clients, show impact.',
      link: '/solutions/ecommerce-agencies',
      visual: '💼'
    },
    {
      id: 'brand-managers',
      icon: <Target className="w-6 h-6" />,
      title: 'For Brand Managers',
      whoItsFor: 'Category managers, growth & brand teams',
      problems: [
        'Market intelligence',
        'Competitive positioning',
        'Performance tracking'
      ],
      outcome: 'Better strategic decisions with data.',
      link: '/solutions/brand-managers',
      visual: '📊'
    }
  ];

  const caseStudies = [
    {
      type: 'Amazon Seller',
      problem: 'Losing Buy Box due to sudden competitor price drops',
      outcome: 'Reacted faster with alerts and protected margins',
      icon: <ShoppingBag className="w-5 h-5" />,
      color: 'from-orange-50 to-white border-orange-200'
    },
    {
      type: 'D2C Brand',
      problem: 'Launching products without knowing real marketplace demand',
      outcome: 'Validated demand before launch and reduced risk',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'from-blue-50 to-white border-blue-200'
    },
    {
      type: 'E-commerce Agency',
      problem: 'Manual reporting across multiple client accounts',
      outcome: 'Centralised insights and saved hours every week',
      icon: <Briefcase className="w-5 h-5" />,
      color: 'from-purple-50 to-white border-purple-200'
    }
  ];

  const quickGuide = [
    { condition: 'Selling on Amazon', solution: 'Amazon Seller Solution', link: '/solutions/amazon-sellers' },
    { condition: 'Selling on Flipkart', solution: 'Flipkart Seller Solution', link: '/solutions/flipkart-sellers' },
    // { condition: 'Meesho focused', solution: 'Meesho Solution', link: '/solutions/meesho-sellers' },
    { condition: 'Own brand / Shopify', solution: 'D2C Solution', link: '/solutions/d2c-brands' },
    { condition: 'Managing clients', solution: 'Agency Solution', link: '/solutions/ecommerce-agencies' }
  ];

  const faqs = [
    {
      id: 'faq-1',
      question: 'Can I switch between solutions later?',
      answer: 'Yes! Insydz is flexible. You can start with one solution and switch or add more as your business evolves. Your data stays with you.'
    },
    {
      id: 'faq-2',
      question: 'Do solutions work across multiple platforms?',
      answer: 'Absolutely. While each solution is optimized for specific platforms (Amazon, Flipkart), you can track data across multiple marketplaces from one account.'
    },
    {
      id: 'faq-3',
      question: 'Is pricing different for each solution?',
      answer: 'No. Pricing is based on features and usage, not on which solution you choose. All solutions are available across all pricing tiers.'
    },
    {
      id: 'faq-4',
      question: 'Can agencies access multiple solutions?',
      answer: 'Yes! Agencies can manage multiple client accounts, each with different solutions. The Agency Solution is designed specifically for this use case.'
    },
    {
      id: 'faq-5',
      question: 'Is the free plan available for all solutions?',
      answer: 'Yes. Every solution is accessible on the free plan with core features, so you can explore what works best for your business before upgrading.'
    },
    {
      id: 'faq-6',
      question: 'Which solution is best for Amazon vs Flipkart sellers?',
      answer: 'Each solution is tailored to platform-specific seller behavior. Amazon and Flipkart sellers get different insights even from the same data.'
    },
    {
      id: 'faq-7',
      question: 'Can I use more than one solution at the same time?',
      answer: 'Yes. Insydz is designed to support multiple selling models within the same account.'
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '"Manrope", system-ui, -apple-system, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .gradient-text {
          background: linear-gradient(135deg, #FF6B2C 0%, #FF8F5C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(255, 107, 44, 0.12);
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }

        .sticky-cta {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          animation: slideUp 0.5s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        @media (max-width: 768px) {
          .sticky-cta {
            bottom: 10px;
            left: 10px;
            right: 10px;
            transform: none;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6" style={{ background: 'linear-gradient(180deg, #FFF5F0 0%, #FFFFFF 100%)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 mb-6 transition-colors fade-in group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Home</span>
          </Link>

          <div className="flex items-center gap-2 mb-6 fade-in">
            <span className="px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
              🇮🇳 Built for Indian marketplaces
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 text-sm font-medium">Amazon, Flipkart</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight fade-in stagger-1">
            Solutions Built for <span className="gradient-text">Every Type of Indian Seller</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed fade-in stagger-2">
            Whether you sell on Amazon, Flipkart or run a D2C brand or agency — Insydz adapts to how you sell.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 fade-in stagger-3">
            <Link href="/signup">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                <span>👉</span> Start Free
              </button>
            </Link>
            <button 
              onClick={() => {
                const element = document.getElementById('solutions-grid');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-200 hover:border-orange-500 transition-all"
            >
              Find My Solution →
            </button>
          </div>

          <p className="text-sm text-gray-500 fade-in stagger-4">
            Start free — choose your solution inside the product.
          </p>
        </div>
      </section>

      {/* SEO Support Copy */}
      <section className="py-8 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p className="text-base text-gray-700 leading-relaxed">
            From Amazon and Flipkart sellers to D2C brands and agencies, Insydz provides seller intelligence built specifically for Indian e-commerce marketplaces.
          </p>
        </div>
      </section>

      {/* Why Solutions Are Segmented */}
      <section className="py-16 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Different Sellers. <span className="gradient-text">Different Problems.</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg text-gray-600 leading-relaxed">
              An Amazon seller, a Flipkart seller, and a D2C brand don't struggle with the same challenges.
            </p>
            <p className="text-lg text-gray-700 font-medium">
              That's why Insydz offers solutions tailored to how each seller operates.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions-grid" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Explore Solutions by Seller Type
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {solutions.map((solution) => (
              <div 
                key={solution.id}
                className="card-hover bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-orange-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
                      {solution.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                      </div>
                    </div>
                  </div>
                  <span className="text-4xl">{solution.visual}</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase mb-1">Who It's For</p>
                    <p className="text-gray-700 leading-relaxed">{solution.whoItsFor}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase mb-2">Key Problems Solved</p>
                    <ul className="space-y-2">
                      {solution.problems.map((problem, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase mb-1">Outcome</p>
                    <p className="text-gray-900 font-medium leading-relaxed">{solution.outcome}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <Link href={solution.link}>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all w-full justify-center">
                      View {solution.title.replace('For ', '')} Solution <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Micro Case Studies Section */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              How Different Sellers Use Insydz
            </h2>
            <p className="text-lg text-gray-600 mb-10 text-center">
              Real sellers use Insydz differently based on how they sell. Here are a few common examples.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div 
                  key={index}
                  className={`card-hover bg-gradient-to-br ${study.color} rounded-xl p-6 border-2`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {study.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{study.type}</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Problem</p>
                      <p className="text-sm text-gray-700">{study.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Outcome</p>
                      <p className="text-sm font-semibold text-green-700">{study.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How All Solutions Connect */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            One Platform. <span className="gradient-text">Multiple Solutions.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            No matter your role or platform, Insydz uses the same intelligence engine — customised to your selling model.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Same competitor data</h3>
              <p className="text-sm text-gray-600">Different insights</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Same reviews</h3>
              <p className="text-sm text-gray-600">Different actions</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">Same trends</h3>
              <p className="text-sm text-gray-600">Role-specific decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Which Solution Is Right For Me */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-white border-y border-orange-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Not Sure Which Solution Fits You?
            </h2>
            <p className="text-lg text-gray-600">
              Here's a quick guide to help you choose:
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-gray-200 mb-8">
            <div className="space-y-4">
              {quickGuide.map((guide, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700 font-medium">{guide.condition}</span>
                  </div>
                  <Link href={guide.link}>
                    <span className="text-orange-600 font-semibold hover:text-orange-700 cursor-pointer">
                      {guide.solution} →
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/signup">
              <button className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto">
                <span>👉</span> Start Free & Choose Inside the Product
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Free-First CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Zap className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Free. Pick Your Solution Later.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            You don't need to decide upfront. Start free and Insydz will adapt to how you sell.
          </p>
          <Link href="/signup">
            <button className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto">
              <span>👉</span> Start Free
            </button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">No credit card required.</p>
          <p className="text-sm text-gray-600 mt-2">Start free — choose your solution inside the product.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Solutions – FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {expandedFaq === faq.id ? (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Whatever You Sell. However You Sell.<br />
            <span className="text-orange-100">Insydz Fits.</span>
          </h2>
          <p className="text-xl mb-10 text-orange-100">
            Start free — choose your solution inside the product.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/signup">
              <button className="px-10 py-5 bg-white text-orange-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl flex items-center gap-3">
                <span>👉</span> Start Free
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-10 py-5 bg-orange-700 text-white rounded-lg font-bold text-lg hover:bg-orange-800 transition-all border-2 border-orange-400">
                Explore Use Cases →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="sticky-cta md:hidden">
        <Link href="/signup">
          <button className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-bold shadow-2xl flex items-center justify-center gap-2">
            <span>👉</span> Start Free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SolutionsPage;