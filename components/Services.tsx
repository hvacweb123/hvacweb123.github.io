import React from 'react';
import {
  MessageSquare,
  TrendingUp,
  Database,
  Phone,
  Clock,
  Shield,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'AI Chat Agents',
      description:
        'Deploy intelligent conversational AI that understands context, handles complex queries, and provides personalized responses to your customers 24/7.',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Automated Lead Generation',
      description:
        'Capture, qualify, and nurture leads automatically with AI systems that work around the clock to identify and convert prospects.',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: Database,
      title: 'CRM Integration & Automation',
      description:
        'Seamlessly connect your existing CRM systems with AI automation to streamline workflows and enhance customer relationship management.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: Phone,
      title: 'AI Phone Call Bots',
      description:
        'Handle inbound and outbound calls with sophisticated voice AI that can schedule appointments, answer questions, and qualify leads naturally.',
      gradient: 'from-pink-500 to-red-600',
    },
    {
      icon: Clock,
      title: '24/7 Business Operations',
      description:
        'Your AI systems never sleep, ensuring your business is always responsive to customer needs and opportunities, maximizing revenue potential.',
      gradient: 'from-red-500 to-orange-600',
    },
    {
      icon: Shield,
      title: 'Enterprise Security & Compliance',
      description:
        'Built with enterprise-grade security standards and compliance protocols to protect your business data and customer information.',
      gradient: 'from-orange-500 to-cyan-600',
    },
  ];

  return (
    <section
      id="services"
      className="py-20 sm:py-24 bg-gradient-to-b from-gray-900 via-black to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              OUR SERVICES
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover how our comprehensive AI automation solutions can transform
            your business operations and drive unprecedented growth across every
            aspect of your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900/40 border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2 mx-auto">
            <span>Get Started Today</span>
            <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
