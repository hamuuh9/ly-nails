'use client';

import { useState } from 'react';

const services = [
  'Nail Extensions',
  'Gel Polish Manicure',
  'Classic Manicure',
  'Nail Art',
  'Pedicure',
  'Nail Repair & Removal',
];

const timeSlots = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM',
];

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Booking Request Sent!</h1>
          <p className="text-gray-600 mb-2">
            Thank you, {formData.name}! We&apos;ve received your booking request.
          </p>
          <p className="text-gray-500 text-sm">
            We&apos;ll confirm your appointment at <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> via phone or email.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setSelectedService('');
              setSelectedDate('');
              setSelectedTime('');
              setFormData({ name: '', email: '', phone: '', notes: '' });
            }}
            className="btn-secondary mt-8"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book an <span className="text-gradient">Appointment</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Choose your service, pick a date and time, and we&apos;ll confirm your appointment. We can&apos;t wait to see you!
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Step 1: Service */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                1. Choose a Service
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      selectedService === service
                        ? 'border-rose-500 bg-rose-50 text-rose-700'
                        : 'border-gray-200 hover:border-rose-300 text-gray-700'
                    }`}
                  >
                    <span className="font-medium">{service}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Date & Time */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                2. Pick a Date & Time
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedTime === time
                            ? 'bg-rose-500 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-rose-100 hover:text-rose-600'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Your Details */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                3. Your Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="+44..."
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mt-6">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests (optional)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
                  placeholder="Any design ideas, reference photos, or special requests..."
                />
              </div>
            </div>

            {/* Summary & Submit */}
            {(selectedService || selectedDate || selectedTime) && (
              <div className="bg-rose-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Booking Summary</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  {selectedService && <p><strong>Service:</strong> {selectedService}</p>}
                  {selectedDate && <p><strong>Date:</strong> {selectedDate}</p>}
                  {selectedTime && <p><strong>Time:</strong> {selectedTime}</p>}
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={!selectedService || !selectedDate || !selectedTime || !formData.name || !formData.phone}
              className="btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Request Booking
            </button>

            <p className="text-center text-sm text-gray-400">
              We&apos;ll confirm your appointment via phone. No payment required now.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
