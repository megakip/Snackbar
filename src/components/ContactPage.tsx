import React from 'react'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'
import { Language, getTranslation } from '../lib/translations'

interface ContactPageProps {
  language: Language
}

export const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Hero Section with Image */}
      <div className="relative h-64 bg-gradient-to-r from-orange-400 to-red-500 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <img
          src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Snackbar interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold mb-2">
              {getTranslation(language, 'contactTitle')}
            </h1>
            <p className="text-lg opacity-90">
              {getTranslation(language, 'contactSubtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Story Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {getTranslation(language, 'ourStory')}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {getTranslation(language, 'storyText1')}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {getTranslation(language, 'storyText2')}
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Contact Details */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {getTranslation(language, 'contactInfo')}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">
                    {getTranslation(language, 'address')}
                  </p>
                  <p className="text-gray-600">
                    Hoofdstraat 123<br />
                    1234 AB Voorbeeldstad<br />
                    Nederland
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">
                    {getTranslation(language, 'phone')}
                  </p>
                  <p className="text-gray-600">+31 12 345 6789</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">
                    {getTranslation(language, 'email')}
                  </p>
                  <p className="text-gray-600">info@snackresto.nl</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              <Clock className="h-5 w-5 text-orange-500 inline mr-2" />
              {getTranslation(language, 'openingHours')}
            </h3>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">{getTranslation(language, 'monday')}</span>
                <span className="text-gray-900 font-medium">11:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">{getTranslation(language, 'tuesday')}</span>
                <span className="text-gray-900 font-medium">11:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">{getTranslation(language, 'wednesday')}</span>
                <span className="text-gray-900 font-medium">11:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">{getTranslation(language, 'thursday')}</span>
                <span className="text-gray-900 font-medium">11:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">{getTranslation(language, 'friday')}</span>
                <span className="text-gray-900 font-medium">11:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">{getTranslation(language, 'saturday')}</span>
                <span className="text-gray-900 font-medium">12:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">{getTranslation(language, 'sunday')}</span>
                <span className="text-red-600 font-medium">{getTranslation(language, 'closed')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {getTranslation(language, 'location')}
          </h3>
          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.123456789!2d4.123456789!3d52.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDA3JzI0LjQiTiA0wrAwNycyNC40IkU!5e0!3m2!1snl!2snl!4v1234567890123!5m2!1snl!2snl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Snackresto Location"
            ></iframe>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {getTranslation(language, 'mapDescription')}
          </p>
        </div>
      </div>
    </div>
  )
}