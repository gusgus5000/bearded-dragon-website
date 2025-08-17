'use client'

import { useState } from 'react'

export default function WhyBeardedDragons() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  
  const reasons = [
    {
      title: "Perfect Size & Temperament",
      icon: "🤗",
      color: "from-orange-400 to-red-400",
      points: [
        "Adult size: 16-24 inches - not too big, not too small",
        "Calm and docile personality - rarely aggressive",
        "Love being handled and petted",
        "Don't make noise - perfect for our home",
        "No running away - they enjoy sitting with you"
      ]
    },
    {
      title: "Easy to Care For",
      icon: "✨",
      color: "from-green-400 to-teal-400",
      points: [
        "Simple diet: vegetables, fruits, and insects",
        "Only need feeding once a day as adults",
        "Clean habitat once a week",
        "Don't need walks like dogs",
        "Can be left alone during school/work"
      ]
    },
    {
      title: "Educational Benefits",
      icon: "🎓",
      color: "from-purple-400 to-pink-400",
      points: [
        "Learn about reptile biology and ecosystems",
        "Develop responsibility through daily care",
        "Great for science fair projects",
        "Teaches temperature and UV light importance",
        "Understanding animal behavior and needs"
      ]
    },
    {
      title: "Health & Safety",
      icon: "❤️",
      color: "from-blue-400 to-indigo-400",
      points: [
        "Hypoallergenic - no fur or dander",
        "Low risk of disease transmission",
        "Don't scratch furniture or belongings",
        "Can't escape easily from enclosure",
        "Vet visits only once a year"
      ]
    },
    {
      title: "Social & Emotional Benefits",
      icon: "😊",
      color: "from-yellow-400 to-orange-400",
      points: [
        "Reduce stress and anxiety",
        "Provide companionship",
        "Teach empathy and compassion",
        "Create family bonding moments",
        "Build confidence in handling animals"
      ]
    },
    {
      title: "Long-term Commitment We're Ready For",
      icon: "📅",
      color: "from-teal-400 to-green-400",
      points: [
        "Live 10-15 years - grow up with us",
        "Low maintenance compared to dogs/cats",
        "Predictable costs after initial setup",
        "Don't need multiple pets for company",
        "Perfect first reptile pet"
      ]
    }
  ]
  
  const comparisons = [
    { pet: "Dog", beardedDragon: "No barking, no walks needed", otherPet: "Barks, needs daily walks" },
    { pet: "Cat", beardedDragon: "No litter box, hypoallergenic", otherPet: "Litter box smell, allergies" },
    { pet: "Hamster", beardedDragon: "Lives 10-15 years, interactive", otherPet: "Lives 2-3 years, nocturnal" },
    { pet: "Fish", beardedDragon: "Can handle and interact with", otherPet: "Only observe, can't pet" },
    { pet: "Bird", beardedDragon: "Quiet, contained", otherPet: "Loud, messy, can fly away" }
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-400 to-yellow-400">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Why Bearded Dragons Make Amazing Pets
          </h1>
          <p className="text-xl md:text-2xl">
            Here's everything that makes them perfect for our family!
          </p>
        </div>
      </section>

      {/* Main Reasons Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <div className={`bg-gradient-to-br ${reason.color} p-6`}>
                  <div className="text-5xl mb-4">{reason.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
                  
                  <div className={`transition-all duration-500 ${expandedCard === index ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
                    <ul className="text-white/90 space-y-2">
                      {reason.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-white/80 mt-4 text-sm">
                    {expandedCard === index ? 'Click to collapse' : 'Click to learn more'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Bearded Dragons vs Other Pets
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white">
                  <th className="p-4 text-left">Pet Type</th>
                  <th className="p-4 text-left">Bearded Dragon ✅</th>
                  <th className="p-4 text-left">Other Pet ❌</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comp, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-bold">{comp.pet}</td>
                    <td className="p-4 text-green-600">{comp.beardedDragon}</td>
                    <td className="p-4 text-red-600">{comp.otherPet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            What Bearded Dragon Owners Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-700 mb-4 italic">
                "Our bearded dragon has been the perfect pet for our kids. He's gentle, 
                easy to care for, and has taught them so much about responsibility!"
              </p>
              <p className="font-bold text-orange-600">- Sarah, Mom of 3</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-700 mb-4 italic">
                "I was worried about the commitment, but bearded dragons are so much 
                easier than I expected. Our whole family loves watching him!"
              </p>
              <p className="font-bold text-orange-600">- Mike, First-time reptile owner</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-700 mb-4 italic">
                "Best decision ever! Our beardie is like a scaly puppy - loves attention 
                but doesn't need constant care like a dog would."
              </p>
              <p className="font-bold text-orange-600">- Jennifer, Working mom</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-700 mb-4 italic">
                "My son's grades improved after getting his bearded dragon. He's more 
                responsible and even did his science fair project on reptile care!"
              </p>
              <p className="font-bold text-orange-600">- David, Proud dad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Activities Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-green-100 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 gradient-text">
            Fun Things We Can Do Together!
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg animate-wiggle hover:animate-none">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="font-bold mb-2">Photo Shoots</h3>
              <p className="text-gray-600">Dress them up for holidays and take adorable pictures!</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg animate-wiggle hover:animate-none" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="font-bold mb-2">Make Videos</h3>
              <p className="text-gray-600">Create fun TikToks and YouTube videos together!</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg animate-wiggle hover:animate-none" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">🏖️</div>
              <h3 className="font-bold mb-2">Outdoor Time</h3>
              <p className="text-gray-600">Take them outside for supervised sunshine and exploration!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}