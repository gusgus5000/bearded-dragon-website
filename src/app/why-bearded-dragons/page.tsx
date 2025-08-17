'use client'

import { useState } from 'react'

export default function WhyBeardedDragons() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  
  const reasons = [
    {
      title: "Perfect Size & Temperament",
      icon: "🤗",
      gradient: "from-rose-400 to-pink-500",
      points: [
        "Adult size: 16-24 inches - ideal for home environments",
        "Incredibly calm and docile personality",
        "Love being handled and enjoy human interaction",
        "Silent pets - no barking or loud noises",
        "Content to relax with you while studying or watching TV"
      ]
    },
    {
      title: "Easy Care Requirements",
      icon: "✨",
      gradient: "from-emerald-400 to-teal-500",
      points: [
        "Simple diet of vegetables, fruits, and insects",
        "Adults only need feeding once daily",
        "Weekly habitat cleaning is sufficient",
        "No daily walks or constant attention needed",
        "Perfect for busy family schedules"
      ]
    },
    {
      title: "Educational Benefits",
      icon: "🎓",
      gradient: "from-violet-400 to-purple-500",
      points: [
        "Learn about reptile biology and ecosystems",
        "Develop responsibility through daily care",
        "Perfect for science fair projects",
        "Understand temperature regulation and UV requirements",
        "Study animal behavior and communication"
      ]
    },
    {
      title: "Health & Safety",
      icon: "💚",
      gradient: "from-blue-400 to-cyan-500",
      points: [
        "Hypoallergenic - no fur or dander",
        "Minimal disease transmission risk",
        "Won't damage furniture or belongings",
        "Secure in their habitat",
        "Annual vet visits are typically sufficient"
      ]
    },
    {
      title: "Emotional Benefits",
      icon: "😊",
      gradient: "from-amber-400 to-orange-500",
      points: [
        "Proven to reduce stress and anxiety",
        "Provide companionship without being demanding",
        "Teach empathy and compassion",
        "Create family bonding opportunities",
        "Build confidence in animal handling"
      ]
    },
    {
      title: "Long-term Commitment",
      icon: "📅",
      gradient: "from-teal-400 to-green-500",
      points: [
        "10-15 year lifespan with proper care",
        "Lower maintenance than traditional pets",
        "Predictable costs after initial setup",
        "Don't require companions",
        "Perfect first reptile for families"
      ]
    }
  ]
  
  const comparisons = [
    { pet: "Dogs", beardedDragon: "Silent, no walks needed, less expensive", otherPet: "Barking, daily walks, higher costs" },
    { pet: "Cats", beardedDragon: "Hypoallergenic, no litter box, contained", otherPet: "Allergies common, litter maintenance, roaming" },
    { pet: "Hamsters", beardedDragon: "Live 10-15 years, interactive, diurnal", otherPet: "Live 2-3 years, less interactive, nocturnal" },
    { pet: "Fish", beardedDragon: "Can handle and interact, recognizes owners", otherPet: "Observation only, no physical interaction" },
    { pet: "Birds", beardedDragon: "Quiet, contained, easy to manage", otherPet: "Loud, messy, can escape" }
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
            Why Bearded Dragons?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover why bearded dragons are the perfect addition to our family
          </p>
        </div>
      </section>

      {/* Main Reasons Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  expandedCard === index ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${reason.gradient}`}></div>
                
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <span className="text-3xl text-white">{reason.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{reason.title}</h3>
                  
                  <div className={`transition-all duration-500 ${expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <ul className="space-y-3">
                      {reason.points.map((point, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <span className={`mr-3 text-transparent bg-clip-text bg-gradient-to-r ${reason.gradient} font-bold`}>✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    {expandedCard === index ? '← Click to collapse' : 'Click to learn more →'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            How They Compare to Other Pets
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-purple-200">
                  <th className="p-4 text-left text-lg font-bold text-gray-800">Pet Type</th>
                  <th className="p-4 text-left text-lg font-bold text-green-600">Bearded Dragon ✓</th>
                  <th className="p-4 text-left text-lg font-bold text-red-600">Other Pet ✗</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comp, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-purple-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-700">{comp.pet}</td>
                    <td className="p-4 text-green-600">{comp.beardedDragon}</td>
                    <td className="p-4 text-red-600">{comp.otherPet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            What Other Families Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                <div className="ml-4">
                  <p className="font-bold text-gray-800">Sarah M.</p>
                  <p className="text-sm text-gray-500">Mom of 3</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Our bearded dragon has been the perfect pet for our kids. He's gentle, 
                easy to care for, and has taught them so much about responsibility!"
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full"></div>
                <div className="ml-4">
                  <p className="font-bold text-gray-800">Mike T.</p>
                  <p className="text-sm text-gray-500">First-time reptile owner</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I was worried about the commitment, but bearded dragons are so much 
                easier than I expected. Our whole family loves watching him!"
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full"></div>
                <div className="ml-4">
                  <p className="font-bold text-gray-800">Jennifer L.</p>
                  <p className="text-sm text-gray-500">Working mom</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Best decision ever! Our beardie is like a scaly puppy - loves attention 
                but doesn't need constant care like a dog would."
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full"></div>
                <div className="ml-4">
                  <p className="font-bold text-gray-800">David K.</p>
                  <p className="text-sm text-gray-500">Proud dad</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "My son's grades improved after getting his bearded dragon. He's more 
                responsible and even did his science fair project on reptile care!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Activities */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 gradient-text">
            Amazing Activities We Can Do Together
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-white">📸</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Photo Sessions</h3>
              <p className="text-gray-600">Create amazing memories with themed photoshoots and holiday pictures</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-white">🎬</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Social Media Star</h3>
              <p className="text-gray-600">Share our dragon's adventures on TikTok and YouTube</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-white">☀️</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Outdoor Adventures</h3>
              <p className="text-gray-600">Supervised outdoor time for natural sunlight and exploration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}