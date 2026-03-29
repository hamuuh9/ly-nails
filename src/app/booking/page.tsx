'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const services = ['Nail Extensions', 'Gel Polish Manicure', 'Classic Manicure', 'Nail Art', 'Pedicure', 'Nail Repair & Removal'];
const timeSlots = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM'];

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  if (submitted) {
    return (
      <div className="pt-32 pb-16 min-h-screen flex items-center justify-center bg-gray-950">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Booking Request Sent!</h1>
          <p className="text-gray-400 mb-2">Thank you, {formData.name}! We&apos;ve received your request.</p>
          <p className="text-gray-500 text-sm">We&apos;ll confirm at <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> via phone.</p>
          <button onClick={() => { setSubmitted(false); setSelectedService(''); setSelectedDate(''); setSelectedTime(''); setFormData({ name: '', email: '', phone: '', notes: '' }); }} className="btn-secondary mt-8">
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-6">
                Booking
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Book an <span className="gradient-text">Appointment</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Choose your service, pick a date and time — we can&apos;t wait to see you!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking Form */}
      <section className="relative py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Step 1 */}
            <AnimatedSection>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">1. Choose a Service</h2>
                <p className="text-gray-500 text-sm mb-6">Select the service you&apos;d like to book.</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`p-5 rounded-xl border text-left transition-all duration-300 ${
                        selectedService === service
                          ? 'border-rose-500 bg-rose-500/10 text-white shadow-lg shadow-rose-500/10'
                          : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:bg-white/[0.07]'
                      }`}
                    >
                      <span className="font-medium">{service}</span>
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Step 2 */}
            <AnimatedSection delay={100}>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">2. Pick a Date &amp; Time</h2>
                <p className="text-gray-500 text-sm mb-6">Choose your preferred appointment slot.</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-400 mb-2">Date</label>
                    <input
                      type="date"
                      id="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Time Slot</label>
                    <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                            selectedTime === time
                              ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Step 3 */}
            <AnimatedSection delay={200}>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">3. Your Details</h2>
                <p className="text-gray-500 text-sm mb-6">We&apos;ll use this to confirm your appointment.</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                    <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone *</label>
                    <input type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="+44..." required />
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email (optional)</label>
                  <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="your@email.com" />
                </div>
                <div className="mt-6">
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-400 mb-2">Special Requests</label>
                  <textarea id="notes" rows={3} value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none" placeholder="Design ideas or special requests..." />
                </div>
              </div>
            </AnimatedSection>

            {/* Summary */}
            {(selectedService || selectedDate || selectedTime) && (
              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6">
                <h3 className="font-semibold text-white mb-3">Booking Summary</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  {selectedService && <p><strong className="text-rose-400">Service:</strong> {selectedService}</p>}
                  {selectedDate && <p><strong className="text-rose-400">Date:</strong> {selectedDate}</p>}
                  {selectedTime && <p><strong className="text-rose-400">Time:</strong> {selectedTime}</p>}
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={!selectedService || !selectedDate || !selectedTime || !formData.name || !formData.phone}
              className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
            >
              Request Booking
            </button>
            <p className="text-center text-sm text-gray-500">We&apos;ll confirm via phone. No payment required now.</p>
          </form>
        </div>
      </section>
    </>
  );
}
