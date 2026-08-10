import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="flex-grow flex flex-col items-center justify-center w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
      <div className="text-center mb-12">
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">Get in Touch</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          We're here to answer any questions and help you schedule your next visit. Reach out to us through any of the channels below.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter w-full">
        {/* Left Side: Contact Info & Map */}
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Address */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/10">
              <span className="material-symbols-outlined text-secondary text-3xl mb-3 block" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Visit Us</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Santragachi Station Rd,<br />
                Opp. Bank of Baroda, GIP Colony, Jagacha<br />
                Howrah, West Bengal 711112
              </p>
              <button className="mt-4 text-primary font-label-md text-label-md flex items-center gap-1 hover:text-secondary transition-colors group">
                Get Directions
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
            
            {/* Contact */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/10">
              <span className="material-symbols-outlined text-secondary text-3xl mb-3 block" style={{ fontVariationSettings: "'FILL' 1" }}>phone_in_talk</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Contact</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-1">P: +91 98300 12345</p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-1">W: +91 98300 12345</p>
              <p className="font-body-md text-body-md text-on-surface-variant">E: hello@luminadental.com</p>
            </div>
            
            {/* Hours */}
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient border border-outline-variant/10 sm:col-span-2">
              <span className="material-symbols-outlined text-secondary text-3xl mb-3 block" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Opening Hours</h3>
              <ul className="font-body-md text-body-md text-on-surface-variant space-y-2">
                <li className="flex justify-between border-b border-outline-variant/20 pb-1"><span>Monday - Friday</span> <span>8:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between border-b border-outline-variant/20 pb-1"><span>Saturday</span> <span>9:00 AM - 2:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
              </ul>
            </div>
            
            {/* Embedded Map */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient border border-outline-variant/10 sm:col-span-2 h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3683.773465330061!2d88.28147697500269!3d22.587574479480928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1786366340136!5m2!1sen!2sin" 
                className="w-full h-full" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin">
              </iframe>
            </div>
          </div>
        </div>
        
        {/* Right Side: Contact Form */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-ambient border border-outline-variant/10 flex flex-col justify-center h-full">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Send a Message</h2>
          <form className="space-y-6" id="appointment">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="firstName">First Name</label>
                <input className="rounded-lg border-outline-variant/50 bg-surface focus:border-secondary focus:ring-secondary/20 transition-colors py-3 px-4 font-body-md text-body-md" id="firstName" placeholder="Rahul" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="lastName">Last Name</label>
                <input className="rounded-lg border-outline-variant/50 bg-surface focus:border-secondary focus:ring-secondary/20 transition-colors py-3 px-4 font-body-md text-body-md" id="lastName" placeholder="Sharma" type="text" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="email">Email Address</label>
              <input className="rounded-lg border-outline-variant/50 bg-surface focus:border-secondary focus:ring-secondary/20 transition-colors py-3 px-4 font-body-md text-body-md" id="email" placeholder="rahul@example.com" type="email" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="phone">Phone Number (Optional)</label>
              <input className="rounded-lg border-outline-variant/50 bg-surface focus:border-secondary focus:ring-secondary/20 transition-colors py-3 px-4 font-body-md text-body-md" id="phone" placeholder="+91 98300 12345" type="tel" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="inquiryType">Inquiry Type</label>
              <select className="rounded-lg border-outline-variant/50 bg-surface focus:border-secondary focus:ring-secondary/20 transition-colors py-3 px-4 font-body-md text-body-md" id="inquiryType">
                <option>Book Appointment</option>
                <option>General Question</option>
                <option>Emergency Service</option>
                <option>Billing Inquiry</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="message">Message</label>
              <textarea className="rounded-lg border-outline-variant/50 bg-surface focus:border-secondary focus:ring-secondary/20 transition-colors py-3 px-4 font-body-md text-body-md resize-none" id="message" placeholder="How can we help you?" rows={4}></textarea>
            </div>
            
            <button className="w-full h-14 bg-primary-container hover:bg-primary/90 text-on-primary rounded-xl font-label-md text-label-md hover:shadow-ambient-hover transition-all flex items-center justify-center gap-2" type="submit" onClick={(e) => e.preventDefault()}>
              Send Message
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
