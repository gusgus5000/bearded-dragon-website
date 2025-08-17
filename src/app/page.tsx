'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [currentFact, setCurrentFact] = useState(0)
  
  const funFacts = [
    "Bearded dragons can live up to 15 years with proper care",
    "They recognize their owners and form strong bonds",
    "Beardies are diurnal - active during the day like us",
    "They're one of the most docile and friendly reptiles",
    "Bearded dragons can learn their names and come when called"
  ]
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [funFacts.length])
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 gradient-animate"></div>
        
        {/* Geometric patterns instead of floating lizards */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow">
              Dear Mom,
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white/90 mb-8 text-shadow">
              We Have a Dream...
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-white/95 mb-8 font-light max-w-3xl mx-auto">
            Our entire family has come together with an exciting proposal that we'd love to share with you
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/why-bearded-dragons" className="btn-primary">
              Discover Our Proposal
            </Link>
            <Link href="/care-and-costs" className="btn-secondary">
              View Our Research
            </Link>
          </div>
          
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mt-16">
            <div className="glass-effect rounded-2xl p-4 text-white">
              <div className="text-2xl mb-2">👨</div>
              <p className="text-sm font-semibold">Dad</p>
              <p className="text-xs opacity-80">Supports</p>
            </div>
            <div className="glass-effect rounded-2xl p-4 text-white">
              <div className="text-2xl mb-2">🙋‍♂️</div>
              <p className="text-sm font-semibold">Me (12)</p>
              <p className="text-xs opacity-80">Leading</p>
            </div>
            <div className="glass-effect rounded-2xl p-4 text-white">
              <div className="text-2xl mb-2">👧</div>
              <p className="text-sm font-semibold">Sister (10)</p>
              <p className="text-xs opacity-80">Excited</p>
            </div>
            <div className="glass-effect rounded-2xl p-4 text-white">
              <div className="text-2xl mb-2">👧</div>
              <p className="text-sm font-semibold">Sister (10)</p>
              <p className="text-xs opacity-80">Ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Did You Know?
            </h2>
            <p className="text-gray-600 text-lg">Amazing facts about bearded dragons</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl p-8 mb-16 shadow-xl">
            <div className="text-center">
              <p className="text-2xl text-gray-800 font-medium min-h-[60px] transition-all duration-500">
                {funFacts[currentFact]}
              </p>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {funFacts.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentFact ? 'w-8 bg-purple-600' : 'w-2 bg-purple-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl card-hover border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">❤️</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Perfect Family Pet</h3>
              <p className="text-gray-600 leading-relaxed">
                Gentle, calm, and amazing with children. They love interaction and form strong bonds with their families.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl card-hover border border-green-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🎓</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Educational Value</h3>
              <p className="text-gray-600 leading-relaxed">
                Teaches responsibility, biology, and animal care. Perfect for science projects and learning opportunities.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl card-hover border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">💎</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Smart Investment</h3>
              <p className="text-gray-600 leading-relaxed">
                One-time setup of ~$300, then just $35-55 monthly. Much more affordable than dogs or cats!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Ready Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">We've Done Our Homework</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass-effect rounded-2xl p-6 text-left">
              <h3 className="text-xl font-bold mb-3">📚 Weeks of Research</h3>
              <p className="opacity-90">We've studied care guides, watched educational videos, and consulted with current owners</p>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-left">
              <h3 className="text-xl font-bold mb-3">💰 Financial Planning</h3>
              <p className="opacity-90">We've calculated all costs and have a savings plan for monthly expenses</p>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-left">
              <h3 className="text-xl font-bold mb-3">📋 Responsibility Chart</h3>
              <p className="opacity-90">Everyone has assigned duties and we're committed to following through</p>
            </div>
            <div className="glass-effect rounded-2xl p-6 text-left">
              <h3 className="text-xl font-bold mb-3">🏥 Emergency Ready</h3>
              <p className="opacity-90">We've researched exotic vets and have emergency care plans in place</p>
            </div>
          </div>
          
          <p className="text-xl mb-8 opacity-95">
            This isn't just a whim - we're serious about providing the best possible care
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Explore our complete research and commitment plan
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/why-bearded-dragons" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white">✨</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Why Dragons?</h3>
                <p className="text-gray-600">Discover why bearded dragons are perfect for our family</p>
              </div>
            </Link>
            
            <Link href="/care-and-costs" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Budget Plan</h3>
                <p className="text-gray-600">See our detailed cost breakdown and care schedule</p>
              </div>
            </Link>
            
            <Link href="/our-promise" className="group">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Our Promise</h3>
                <p className="text-gray-600">Read our commitment and responsibility plan</p>
              </div>
            </Link>
          </div>
          
          <div className="mt-16">
            <p className="text-gray-600 mb-4">With love from your future dragon family</p>
            <div className="flex justify-center space-x-4">
              <span className="text-3xl">❤️</span>
              <span className="text-3xl">🏠</span>
              <span className="text-3xl">✨</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}