'use client'

import { useState } from 'react'

export default function CareAndCosts() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const setupItems = [
    { category: 'Enclosure', item: '40 Gallon Breeder Tank', cost: 55, essential: true, note: 'Minimum size for adult. Front-opening is even better!' },
    { category: 'Lighting', item: 'Basking Bulb (100-150W)', cost: 12, essential: true, note: 'Creates warm spot for digestion' },
    { category: 'Lighting', item: 'UVB Tube Light', cost: 25, essential: true, note: 'CRUCIAL for calcium absorption - prevents disease' },
    { category: 'Lighting', item: 'Dome Light Fixture', cost: 15, essential: true, note: 'For basking bulb' },
    { category: 'Lighting', item: 'UVB Fixture', cost: 50, essential: true, note: 'Houses the UVB tube light' },
    { category: 'Monitoring', item: 'Digital Thermometers (2)', cost: 25, essential: true, note: 'Monitor cool and warm sides' },
    { category: 'Monitoring', item: 'Infrared Temp Gun', cost: 20, essential: true, note: 'Check exact basking spot temp' },
    { category: 'Substrate', item: 'Safe Substrate (Zen Mat)', cost: 30, essential: true, note: 'No loose substrate to prevent impaction' },
    { category: 'Decor', item: 'Basking Platform', cost: 15, essential: true, note: 'Flat surface for basking' },
    { category: 'Decor', item: 'Hides (2)', cost: 20, essential: true, note: 'One warm, one cool side' },
    { category: 'Decor', item: 'Food & Water Bowls', cost: 8, essential: true, note: 'Shallow to prevent drowning' },
    { category: 'Supplements', item: 'Calcium with D3', cost: 8, essential: true, note: 'Dust insects 3-5x weekly' },
    { category: 'Supplements', item: 'Multivitamin', cost: 7, essential: true, note: 'Dust insects 1-2x weekly' },
    { category: 'Misc', item: 'Reptile Carrier', cost: 20, essential: false, note: 'For vet visits' },
    { category: 'Misc', item: 'Cleaning Supplies', cost: 8, essential: true, note: 'Reptile-safe disinfectant' },
  ]
  
  const monthlyExpenses = [
    { item: 'Feeder Insects', cost: '20-30', note: 'Dubia roaches, crickets, or black soldier fly larvae' },
    { item: 'Fresh Vegetables', cost: '10-15', note: 'Collard greens, mustard greens, squash' },
    { item: 'Electricity', cost: '5-10', note: 'For lights and heating' },
  ]
  
  const totalSetupCost = setupItems.reduce((sum, item) => sum + item.cost, 0)
  const essentialCost = setupItems.filter(item => item.essential).reduce((sum, item) => sum + item.cost, 0)
  
  const categories = ['all', ...new Set(setupItems.map(item => item.category))]
  
  const filteredItems = selectedCategory === 'all' 
    ? setupItems 
    : setupItems.filter(item => item.category === selectedCategory)
  
  const careSchedule = {
    daily: [
      'Check temperatures (basking spot: 95-110°F, cool side: 75-85°F)',
      'Provide fresh water',
      'Feed appropriate amount based on age',
      'Remove uneaten food and spot clean',
      'Observe for any health issues'
    ],
    weekly: [
      'Deep clean water and food bowls',
      'Clean glass/walls of enclosure',
      'Replace substrate if using paper towels',
      'Trim nails if needed'
    ],
    monthly: [
      'Deep clean entire enclosure',
      'Check UVB bulb effectiveness',
      'Weight check for growth tracking',
      'Rearrange decor for enrichment'
    ],
    yearly: [
      'Replace UVB bulb',
      'Annual vet checkup',
      'Update enclosure as dragon grows'
    ]
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in">
            Care Guide & Budget Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our comprehensive research on costs and care requirements
          </p>
        </div>
      </section>

      {/* Budget Overview Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center card-hover border border-green-100">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-white">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Total Setup Cost</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">${totalSetupCost}</p>
              <p className="text-gray-600 mt-2">Complete setup</p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center card-hover border border-blue-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-white">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Essential Items</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">${essentialCost}</p>
              <p className="text-gray-600 mt-2">Minimum needed</p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 text-center card-hover border border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl text-white">📅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Monthly Cost</h3>
              <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">$35-55</p>
              <p className="text-gray-600 mt-2">Ongoing expenses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Setup List */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">
            Complete Shopping List
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-green-400 to-blue-400 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                {cat === 'all' ? 'All Items' : cat}
              </button>
            ))}
          </div>
          
          {/* Items Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-green-400 to-blue-400 text-white">
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Item</th>
                  <th className="p-4 text-center">Cost</th>
                  <th className="p-4 text-left">Important Notes</th>
                  <th className="p-4 text-center">Essential?</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-gray-200 rounded text-sm">
                        {item.category}
                      </span>
                    </td>
                    <td className="p-4 font-medium">{item.item}</td>
                    <td className="p-4 text-center font-bold text-green-600">${item.cost}</td>
                    <td className="p-4 text-sm text-gray-600">{item.note}</td>
                    <td className="p-4 text-center">
                      {item.essential ? (
                        <span className="text-2xl">✅</span>
                      ) : (
                        <span className="text-gray-400">Optional</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Monthly Expenses */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-100 to-orange-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Monthly Running Costs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {monthlyExpenses.map((expense, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center card-hover">
                <h3 className="text-xl font-bold mb-2">{expense.item}</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">${expense.cost}</p>
                <p className="text-sm text-gray-600">{expense.note}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
            <p className="text-center text-lg">
              <span className="font-bold">Total Monthly Cost:</span>{' '}
              <span className="text-2xl font-bold text-green-600">$35-55</span>{' '}
              <span className="text-gray-600">(Less than a phone plan!)</span>
            </p>
          </div>
        </div>
      </section>

      {/* Care Schedule */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Our Care Commitment Schedule
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Daily Tasks (10 mins)</h3>
              <ul className="space-y-2">
                {careSchedule.daily.map((task, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-green-600">Weekly Tasks (30 mins)</h3>
              <ul className="space-y-2">
                {careSchedule.weekly.map((task, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Monthly Tasks (1 hour)</h3>
              <ul className="space-y-2">
                {careSchedule.monthly.map((task, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-600">Yearly Tasks</h3>
              <ul className="space-y-2">
                {careSchedule.yearly.map((task, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Money Saving Tips */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-200 to-blue-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Smart Ways We Can Save Money!
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-2xl mr-4">💡</span>
                <div>
                  <p className="font-bold">Buy in bulk:</p>
                  <p className="text-gray-600">Order insects online in larger quantities for better prices</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">🌱</span>
                <div>
                  <p className="font-bold">Grow our own greens:</p>
                  <p className="text-gray-600">Plant collard greens and mustard greens in the garden</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">🛍️</span>
                <div>
                  <p className="font-bold">Shop sales:</p>
                  <p className="text-gray-600">Watch for pet store sales and use coupons</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">♻️</span>
                <div>
                  <p className="font-bold">DIY decorations:</p>
                  <p className="text-gray-600">Make safe hides and platforms from household items</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-4">🏪</span>
                <div>
                  <p className="font-bold">Compare prices:</p>
                  <p className="text-gray-600">Check online vs local stores for best deals</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}