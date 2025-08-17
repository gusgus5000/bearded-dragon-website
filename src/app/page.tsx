'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [currentFact, setCurrentFact] = useState(0)
  
  const funFacts = [
    "Bearded dragons wave to show submission - it's adorable!",
    "They can live 10-15 years with proper care",
    "Beardies recognize their owners and can be trained",
    "They're diurnal - awake during the day just like us!",
    "Bearded dragons can see in color and UV light"
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-300 via-yellow-300 to-green-300">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating dragon emojis */}
        <div className="absolute top-20 left-10 text-6xl animate-float">🦎</div>
        <div className="absolute top-40 right-20 text-5xl animate-float" style={{ animationDelay: '1s' }}>🦎</div>
        <div className="absolute bottom-20 left-1/4 text-4xl animate-float" style={{ animationDelay: '2s' }}>🦎</div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-pulse">
            Dear Mom...
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8">
            We have something amazing to share with you!
          </p>
          <p className="text-xl text-white/80 mb-12">
            Dad, my sisters (age 10), and I (age 12) all agree - 
            we're ready for a special new family member
          </p>
          <Link 
            href="/why-bearded-dragons"
            className="inline-block bg-white text-orange-500 px-8 py-4 rounded-full text-xl font-bold hover:scale-110 transition-transform shadow-2xl"
          >
            Discover Why a Bearded Dragon! 🦎
          </Link>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Did You Know?
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="text-center">
              <p className="text-2xl text-gray-700 min-h-[60px] transition-all duration-500">
                {funFacts[currentFact]}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold mb-2 text-orange-600">Perfect Family Pet</h3>
              <p className="text-gray-600">
                Gentle, docile, and great with kids. They love being handled and are very social!
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2 text-green-600">Educational</h3>
              <p className="text-gray-600">
                Learn about responsibility, biology, and animal care. Great for school projects!
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2 text-blue-600">Affordable</h3>
              <p className="text-gray-600">
                One-time setup cost of around $300, then just food and occasional supplies!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Agreement Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-400 to-pink-400">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">We're All In This Together!</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur rounded-xl p-4">
              <div className="text-3xl mb-2">👨</div>
              <p className="font-bold">Dad</p>
              <p className="text-sm">Ready to help!</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl p-4">
              <div className="text-3xl mb-2">🧒</div>
              <p className="font-bold">Me (12)</p>
              <p className="text-sm">Lead caretaker!</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl p-4">
              <div className="text-3xl mb-2">👧</div>
              <p className="font-bold">Sister (10)</p>
              <p className="text-sm">Excited helper!</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl p-4">
              <div className="text-3xl mb-2">👧</div>
              <p className="font-bold">Sister (10)</p>
              <p className="text-sm">Can't wait!</p>
            </div>
          </div>
          <p className="text-xl">
            We've all researched and discussed this together. 
            We're committed to giving a bearded dragon the best life possible!
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-100 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Ready to Learn More?</h2>
          <p className="text-xl text-gray-700 mb-8">
            We've prepared everything you need to know about caring for a bearded dragon!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/why-bearded-dragons"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors"
            >
              Why They're Perfect Pets
            </Link>
            <Link 
              href="/care-and-costs"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
            >
              See the Budget Plan
            </Link>
            <Link 
              href="/our-promise"
              className="bg-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-600 transition-colors"
            >
              Read Our Promise
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}