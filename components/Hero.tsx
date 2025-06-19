import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative hero-section-height flex items-center justify-center overflow-hidden padding-top-hero-section sm:pt-24">
      {/* Animated background with gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-cyan-500/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 backdrop-blur-sm">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm text-gray-300">
              Next-Generation AI Automation
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              AUTOMATE
            </span>
            <br />
            <span className="text-white">YOUR BUSINESS</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              WITH AI
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 sm:mb-16 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4">
            Transform your business with intelligent AI chat agents, automated
            lead generation, seamless CRM integrations, and AI-powered phone
            systems that work 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6 px-4">
            <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg lg:text-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-2 w-full sm:w-auto justify-center">
              <span>Book Your Free Consultation</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-gray-300 hover:text-white border border-gray-600 hover:border-cyan-500 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg lg:text-xl font-semibold transition-all duration-300 w-full sm:w-auto">
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-32 sm:top-40 right-8 sm:right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-500"></div>
      <div className="absolute bottom-32 sm:bottom-40 left-8 sm:left-20 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-300 rounded-full animate-ping delay-1000"></div>
    </section>
  );
};

export default Hero;
