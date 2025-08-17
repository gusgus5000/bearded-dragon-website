'use client'

import { useState } from 'react'

export default function OurPromise() {
  const [checkedPromises, setCheckedPromises] = useState<number[]>([])
  
  const togglePromise = (index: number) => {
    setCheckedPromises(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }
  
  const promises = [
    {
      person: "Me (12 years old)",
      icon: "🧒",
      responsibilities: [
        "Feed the dragon every morning before school",
        "Clean the enclosure every week",
        "Monitor temperatures daily",
        "Keep a health journal",
        "Research and learn about bearded dragon care",
        "Save allowance for monthly food costs"
      ]
    },
    {
      person: "Sister #1 (10 years old)",
      icon: "👧",
      responsibilities: [
        "Help with weekly water changes",
        "Assist with vegetable preparation",
        "Help with handling and socialization",
        "Take photos for our dragon diary",
        "Help spot-clean daily"
      ]
    },
    {
      person: "Sister #2 (10 years old)",
      icon: "👧",
      responsibilities: [
        "Help with feeding on weekends",
        "Assist with monthly deep cleaning",
        "Help monitor dragon behavior",
        "Create enrichment activities",
        "Help with bath time"
      ]
    },
    {
      person: "Dad",
      icon: "👨",
      responsibilities: [
        "Drive to pet store for supplies",
        "Help with initial setup",
        "Supervise vet visits",
        "Assist with any emergencies",
        "Help with costs when needed",
        "Support and guide us in care"
      ]
    }
  ]
  
  const familyContract = [
    "We will NEVER neglect our bearded dragon",
    "We will maintain a consistent feeding schedule",
    "We will keep the habitat clean and safe",
    "We will save money for food and supplies",
    "We will take them to the vet when needed",
    "We will research before making any changes",
    "We will give them love and attention daily",
    "We will work together as a team",
    "We will ask for help when we need it",
    "We will treat our dragon with respect and gentleness"
  ]
  
  const learningGoals = [
    { subject: "Biology", topics: ["Reptile anatomy", "Digestion", "Temperature regulation", "UV light importance"] },
    { subject: "Responsibility", topics: ["Daily routines", "Time management", "Financial planning", "Long-term commitment"] },
    { subject: "Nutrition", topics: ["Balanced diet", "Calcium/vitamin needs", "Safe vs unsafe foods", "Portion control"] },
    { subject: "Problem Solving", topics: ["Health monitoring", "Habitat optimization", "Behavioral understanding", "Emergency response"] }
  ]
  
  const whyWeAreReady = [
    "We've spent weeks researching bearded dragon care",
    "We've watched dozens of care videos together",
    "We've calculated all the costs and saved money",
    "We've visited pet stores to learn about supplies",
    "We've talked to bearded dragon owners online",
    "We understand this is a 10-15 year commitment",
    "We have the space and time for proper care",
    "We're excited to learn and grow with our pet"
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
            Our Promise to You
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our commitment to being responsible pet owners
          </p>
        </div>
      </section>

      {/* Individual Responsibilities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Everyone's Responsibilities
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {promises.map((promise, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all border border-purple-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-3xl text-white">{promise.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{promise.person}</h3>
                </div>
                
                <ul className="space-y-3">
                  {promise.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Contract */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Our Family Contract
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-center text-gray-600 mb-8">
              Click each promise to check it off - we agree to all of these!
            </p>
            
            <div className="space-y-4">
              {familyContract.map((item, index) => (
                <div
                  key={index}
                  onClick={() => togglePromise(index)}
                  className="flex items-center p-4 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-6 h-6 rounded border-2 mr-4 flex items-center justify-center transition-colors ${
                    checkedPromises.includes(index) 
                      ? 'bg-green-500 border-green-500' 
                      : 'border-gray-300'
                  }`}>
                    {checkedPromises.includes(index) && (
                      <span className="text-white text-sm">✓</span>
                    )}
                  </div>
                  <span className={`text-lg ${
                    checkedPromises.includes(index) ? 'text-green-600 font-medium' : 'text-gray-700'
                  }`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
            
            {checkedPromises.length === familyContract.length && (
              <div className="mt-8 p-4 bg-green-100 rounded-lg text-center">
                <p className="text-green-700 font-bold text-xl">
                  ✅ We promise to follow through with everything!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Educational Benefits */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-100 to-green-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            What We'll Learn
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningGoals.map((goal, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover">
                <h3 className="text-xl font-bold mb-4 text-blue-600">{goal.subject}</h3>
                <ul className="space-y-2">
                  {goal.topics.map((topic, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Ready */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Why We Know We're Ready
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {whyWeAreReady.map((reason, index) => (
              <div key={index} className="flex items-start p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <span className="text-2xl mr-4">🌟</span>
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Plan */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-100 to-orange-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Our Emergency Plan
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-red-600">If the dragon seems sick:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Document symptoms immediately</li>
                  <li>Call the exotic vet right away</li>
                  <li>Isolate if we have other pets in future</li>
                  <li>Follow vet instructions exactly</li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-orange-600">If power goes out:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Use battery-powered heat packs</li>
                  <li>Move to warmest room in house</li>
                  <li>Cover enclosure with blankets</li>
                  <li>Monitor temperature closely</li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-yellow-600">If we go on vacation:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Arrange experienced pet sitter in advance</li>
                  <li>Leave detailed care instructions</li>
                  <li>Provide vet contact information</li>
                  <li>Check in daily via video call</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-8">Thank You for Considering!</h2>
          
          <div className="bg-white/20 backdrop-blur rounded-2xl p-8 mb-8">
            <p className="text-2xl mb-6">
              Mom, we know this is a big decision. We want you to know that we're 
              serious about this commitment and we'll make you proud!
            </p>
            
            <p className="text-xl mb-6">
              We promise to be the best bearded dragon parents ever, and we'll 
              show you every day that you made the right choice in trusting us.
            </p>
            
            <div className="flex justify-center space-x-8 mt-8">
              <div>
                <p className="text-3xl mb-2">❤️</p>
                <p className="font-bold">With love,</p>
              </div>
              <div>
                <p className="text-3xl mb-2">🦎</p>
                <p className="font-bold">Your future dragon family</p>
              </div>
            </div>
          </div>
          
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-xl font-bold hover:scale-110 transition-transform shadow-2xl">
            We're Ready for Our Dragon! 🎉
          </button>
        </div>
      </section>
    </div>
  )
}