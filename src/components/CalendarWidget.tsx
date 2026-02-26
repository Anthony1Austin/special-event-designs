'use client'

import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Clock } from 'lucide-react'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export default function CalendarWidget() {
  const [date, setDate] = useState<Value>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>('')

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  const handleDateChange = (value: Value) => {
    setDate(value)
    setSelectedTime('')
  }

  const handleBooking = () => {
    if (date && selectedTime) {
      alert(`Consultation scheduled for ${date.toString()} at ${selectedTime}`)
      // Here you would typically send this to your backend
    } else {
      alert('Please select both a date and time')
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-serif font-bold mb-6">Schedule a Consultation</h3>
      
      <div className="mb-6">
        <Calendar
          onChange={handleDateChange}
          value={date}
          minDate={new Date()}
          className="w-full border-0"
        />
      </div>

      {date && (
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            <Clock className="h-4 w-4 inline mr-2" />
            Available Times
          </label>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                  selectedTime === time
                    ? 'border-primary-600 bg-primary-600 text-white'
                    : 'border-gray-300 hover:border-primary-400'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={handleBooking}
        disabled={!date || !selectedTime}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Book Consultation
      </button>
    </div>
  )
}


