import React, { useState } from 'react';
import { Link } from 'wouter';
import { ChevronDown, ChevronRight, Check, Zap, TrendingUp, Star, Search, Package, DollarSign, BarChart3, AlertCircle } from 'lucide-react';

const UseCasesPage = () => {
  const [expandedCase, setExpandedCase] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const useCases = [
    {
      id: 'track-competitor-prices',
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Track Competitor Prices',
      category: 'pricing',
      isPrimary: true,
      tag: 'Most Common',
      problem: 'Competitors change prices suddenly and steal sales before you can react.',
      solution: 'Track competitor price changes in real time and get instant alerts before Buy Box or sales are lost.',
      outcomes: ['Faster reactions', 'Protected margins', 'No panic discounting'],
      context: 'Common in price-sensitive categories',
      link: '/use-cases/track-competitor-prices',
      example: {
        insight: 'Competitor dropped price to ₹899 (was ₹1,299)',
        action: 'WhatsApp alert sent within 2 minutes',
        result: 'Seller adjusted price to ₹949 & retained Buy Box'
      },
      visual: '📊'
    },
    {
      id: 'find-profitable-products',
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Find Profitable Products',
      category: 'product',
      isPrimary: true,
      tag: 'Popular',
      problem: 'Launching products without knowing real demand leads to losses.',
      solution: 'Identify high-demand, low-competition product opportunities using real marketplace data.',
      outcomes: ['Smarter launches', 'Lower risk', 'Better margins'],
      context: 'Ideal for seasonal & festive sellers',
      link: '/use-cases/find-profitable-products',
      example: {
        insight: 'High demand keyword with 45% competition gap',
        action: 'Product opportunity score: 8.2/10',
        result: 'Launched with 3x margin vs. initial estimate'
      },
      visual: '🎯'
    },
    {
      id: 'improve-amazon-flipkart-seo',
      icon: <Search className="w-6 h-6" />,
      title: 'Improve Amazon & Flipkart SEO',
      category: 'seo',
      isPrimary: true,
      tag: 'Popular',
      problem: 'Your products don\'t rank for the keywords that actually drive sales.',
      solution: 'Track keyword rankings, discover competitor keywords, and optimise listings based on real data.',
      outcomes: ['Higher visibility', 'More organic sales', 'Faster SEO decisions'],
      context: 'Best for high-competition keywords',
      link: '/use-cases/improve-seo',
      example: {
        insight: 'Competitor ranking #3 for "wireless earbuds under 2000"',
        action: 'Title & backend keywords optimized',
        result: 'Moved from page 4 to page 1 in 2 weeks'
      },
      visual: '🔍'
    },
    {
      id: 'analyze-customer-reviews',
      icon: <Star className="w-6 h-6" />,
      title: 'Analyze Customer Reviews',
      category: 'product',
      problem: 'Thousands of reviews hide insights you don\'t have time to read.',
      solution: 'Analyse reviews at scale to uncover pain points, feature gaps, and improvement opportunities.',
      outcomes: ['Better ratings', 'Fewer returns', 'Smarter product improvements'],
      context: 'Critical for listings with 100+ reviews',
      link: '/use-cases/analyze-customer-reviews',
      example: {
        insight: '67% of 1-star reviews mention "charging cable quality"',
        action: 'Updated product with better cable',
        result: 'Rating improved from 3.8 to 4.4 stars'
      },
      visual: '⭐'
    },
    {
      id: 'avoid-stockouts-missed-sales',
      icon: <Package className="w-6 h-6" />,
      title: 'Avoid Stockouts & Missed Sales',
      category: 'inventory',
      problem: 'Stockouts during high demand kill momentum and rankings.',
      solution: 'Monitor demand signals, competitor stock status, and sales trends to plan inventory better.',
      outcomes: ['Fewer stockouts', 'Better inventory planning', 'Protected rankings'],
      context: 'Essential during festive & sale periods',
      link: '/use-cases/avoid-stockouts',
      example: {
        insight: 'Demand spike detected 5 days before Diwali',
        action: 'Early restock alert triggered',
        result: 'Zero stockouts during peak season'
      },
      visual: '📦'
    }
  ];

  const categories = [
    { id: 'pricing', label: 'Pricing & Competition', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'product', label: 'Product & Demand', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'seo', label: 'SEO & Visibility', icon: <Search className="w-4 h-4" /> },
    { id: 'inventory', label: 'Inventory & Operations', icon: <Package className="w-4 h-4" /> }
  ];

  const faqs = [
    {
      id: 'faq-1',
      question: 'Can I access multiple use cases on the free plan?',
      answer: 'Yes! The free plan gives you access to core features across multiple use cases so you can explore what works for your business before upgrading.'
    },
    {
      id: 'faq-2',
      question: 'Do these use cases work for Amazon India & Flipkart?',
      answer: 'Absolutely. Insydz is built specifically for Indian marketplaces including Amazon India and Flipkart.'
    },
    {
      id: 'faq-3',
      question: 'Are these separate tools or one platform?',
      answer: 'One unified platform. All use cases work together and share the same data, so insights flow seamlessly across different problems you\'re solving.'
    },
    {
      id: 'faq-4',
      question: 'Which use case should I start with?',
      answer: 'It depends on your situation: New sellers should start with Find Profitable Products. Active sellers benefit most from Track Competitor Prices. If you\'re struggling with visibility, start with SEO & Reviews.'
    },
    {
      id: 'faq-5',
      question: 'Can agencies use these use cases for clients?',
      answer: 'Yes! Many agencies use Insydz to manage multiple client accounts and deliver data-driven insights across all use cases.'
    },
    {
      id: 'faq-6',
      question: 'Which use case gives the fastest ROI?',
      answer: 'Track Competitor Prices typically delivers the fastest ROI as it helps you respond to market changes immediately and protect your margins.'
    },
    {
      id: 'faq-7',
      question: 'Do I need to use all use cases together?',
      answer: 'Not at all. Start with the problem that\'s most urgent for you. Many sellers begin with one use case and gradually add more as they grow.'
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

        .primary-card {
          animation: subtle-pulse 3s ease-in-out infinite;
        }

        @keyframes subtle-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.01); }
        }

        .pill-selector {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .pill-selector:hover {
          background: linear-gradient(135deg, #FF6B2C 0%, #FF8F5C 100%);
          color: white;
          transform: translateY(-2px);
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

        .example-panel {
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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
              🇮🇳 Built for Indian sellers
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 text-sm font-medium">Amazon & Flipkart</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight fade-in stagger-1">
            How Sellers Use Insydz to <span className="gradient-text">Make Better Decisions</span>
          </h1>

          <p className="text-xl text-gray-600 mb-6 max-w-3xl leading-relaxed fade-in stagger-2">
            From tracking competitors to avoiding stockouts, Insydz helps Indian sellers solve real, everyday marketplace problems — not just analyse data.
          </p>

          <p className="text-base text-gray-700 mb-8 font-medium fade-in stagger-3">
            Choose the problem you're trying to solve — and see how sellers fix it with Insydz.
          </p>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mb-10 fade-in stagger-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className="pill-selector flex items-center gap-2 px-5 py-3 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-medium hover:border-orange-500"
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 fade-in stagger-4">
            <Link href="/signup">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                <span>👉</span> Start Free
              </button>
            </Link>
            <button 
              onClick={() => {
                const element = document.getElementById('use-cases-grid');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold border-2 border-gray-200 hover:border-orange-500 transition-all"
            >
              Explore Use Cases →
            </button>
          </div>
        </div>
      </section>

      {/* Why Use Cases Matter */}
      <section className="py-16 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Different Problems. <span className="gradient-text">One Intelligence Platform.</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg text-gray-600 leading-relaxed">
              Sellers don't wake up looking for "features".<br />
              They look for answers to specific problems.
            </p>
            <p className="text-lg text-gray-700 font-medium">
              Insydz is designed around how sellers actually think and operate.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section id="use-cases-grid" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Explore Seller Use Cases
          </h2>

          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <div key={useCase.id} id={useCase.category}>
                <div 
                  className={`card-hover bg-white rounded-2xl border-2 p-8 ${
                    useCase.isPrimary 
                      ? 'border-orange-200 bg-gradient-to-br from-orange-50 to-white primary-card' 
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${
                        useCase.isPrimary ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {useCase.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">{useCase.title}</h3>
                          {useCase.tag && (
                            <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                              {useCase.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 italic mb-4">{useCase.context}</p>
                      </div>
                    </div>
                    <span className="text-4xl">{useCase.visual}</span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase mb-1">Problem</p>
                      <p className="text-gray-700 leading-relaxed">{useCase.problem}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase mb-1">How Insydz Helps</p>
                      <p className="text-gray-900 font-medium leading-relaxed">{useCase.solution}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-500 uppercase mb-2">Key Outcomes</p>
                      <div className="flex flex-wrap gap-2">
                        {useCase.outcomes.map((outcome, i) => (
                          <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
                            <Check className="w-4 h-4" /> {outcome}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* See Example Toggle */}
                  <div className="border-t border-gray-200 pt-4">
                    <button
                      onClick={() => setExpandedCase(expandedCase === useCase.id ? null : useCase.id)}
                      className="flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                    >
                      {expandedCase === useCase.id ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                      <span>See example</span>
                    </button>

                    {expandedCase === useCase.id && (
                      <div className="example-panel mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Insight</p>
                            <p className="text-sm text-gray-700">{useCase.example.insight}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Action</p>
                            <p className="text-sm text-gray-700">{useCase.example.action}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Result</p>
                            <p className="text-sm font-semibold text-green-700">{useCase.example.result}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    <Link href={useCase.link}>
                      <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all">
                        View Use Case <ChevronRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Should I Start Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-white border-y border-orange-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Not Sure Which Use Case to Start With?
            </h2>
            <p className="text-lg text-gray-600">
              Here's what we recommend based on where you are in your seller journey:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-500 transition-all card-hover">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">New Sellers</h3>
              <p className="text-gray-600 mb-4">Start with Find Profitable Products to launch smart and avoid costly mistakes.</p>
              <Link href="/use-cases/find-profitable-products">
                <button className="inline-flex items-center gap-1 text-orange-600 font-semibold hover:text-orange-700">
                  Explore This Use Case <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-500 transition-all card-hover">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Active Sellers</h3>
              <p className="text-gray-600 mb-4">Track Competitor Prices to protect margins and respond to market changes instantly.</p>
              <Link href="/use-cases/track-competitor-prices">
                <button className="inline-flex items-center gap-1 text-orange-600 font-semibold hover:text-orange-700">
                  Explore This Use Case <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-500 transition-all card-hover">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Struggling Listings</h3>
              <p className="text-gray-600 mb-4">Improve SEO & Reviews to boost visibility and convert more browsers into buyers.</p>
              <Link href="/use-cases/improve-seo">
                <button className="inline-flex items-center gap-1 text-orange-600 font-semibold hover:text-orange-700">
                  Explore This Use Case <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/signup">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
                <span>👉</span> Start Free & Explore
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* How Use Cases Connect */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Use Cases That <span className="gradient-text">Work Better Together</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Most sellers face more than one problem at the same time.<br />
            Insydz connects insights across use cases so decisions are faster and clearer.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
              <p className="text-gray-700 font-medium">
                <span className="text-blue-600 font-bold">Profitable product</span> → <span className="text-orange-600 font-bold">Price tracking</span>
              </p>
              <p className="text-sm text-gray-600 mt-2">Launch smart, then stay competitive</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-5 h-5 text-purple-600" />
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <Search className="w-5 h-5 text-green-600" />
              </div>
              <p className="text-gray-700 font-medium">
                <span className="text-purple-600 font-bold">Review issues</span> → <span className="text-green-600 font-bold">SEO & listing fixes</span>
              </p>
              <p className="text-sm text-gray-600 mt-2">Fix problems, improve visibility</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="w-5 h-5 text-green-600" />
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-gray-700 font-medium">
                <span className="text-green-600 font-bold">Demand spike</span> → <span className="text-blue-600 font-bold">Inventory planning</span>
              </p>
              <p className="text-sm text-gray-600 mt-2">Catch trends before stockouts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Is Insydz Right for You?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Best For</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Active marketplace sellers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Competitive categories</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Sellers making data-driven decisions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-700 text-xl">⚠️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Not Ideal For</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0">•</span>
                  <span className="text-gray-600">One-time sellers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0">•</span>
                  <span className="text-gray-600">Non-ecommerce businesses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Free-First CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Zap className="w-16 h-16 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Try These Use Cases for Free
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            You don't need to commit upfront. Start free and explore real insights across multiple use cases before upgrading.
          </p>
          <Link href="/signup">
            <button className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto">
              <span>👉</span> Start Free
            </button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">No credit card required.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Use Cases – FAQs
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
                  <div className="px-6 pb-5 example-panel">
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
            Solve Real Seller Problems with Insydz.
          </h2>
          <p className="text-xl mb-10 text-orange-100">
            Start with one use case. Expand as you grow.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/signup">
              <button className="px-10 py-5 bg-white text-orange-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl flex items-center gap-3">
                <span>👉</span> Start Free
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-10 py-5 bg-orange-700 text-white rounded-lg font-bold text-lg hover:bg-orange-800 transition-all border-2 border-orange-400">
                Explore Features →
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

export default UseCasesPage;