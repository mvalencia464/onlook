"use client";

import React from "react";
import Link from "next/link";

// Simple, composable primitives
const Container = ({
  children,
  className = ""
}: {children: React.ReactNode;className?: string;}) =>
<div
  className={`mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>;

const SectionHeading = ({
  children,
  className = ""
}: {children: React.ReactNode;className?: string;}) =>
<h2
  className={`text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ${className}`}>
    {children}
  </h2>;

export default function WhyWilkinsBlogPost() {
  const steps = [
    {
      number: 1,
      title: "Pre-Inspection",
      description: "Thorough assessment of carpet condition and customized cleaning approach"
    },
    {
      number: 2,
      title: "Pre-Vacuum",
      description: "Commercial-grade vacuuming removes 85% of dry soil before wet cleaning"
    },
    {
      number: 3,
      title: "Furniture Protection",
      description: "Careful furniture movement and protection with disposable blocks"
    },
    {
      number: 4,
      title: "Pre-Spot Treatment",
      description: "Professional-grade stain removal solutions for maximum effectiveness"
    },
    {
      number: 5,
      title: "Pre-Spray Application",
      description: "Specialized traffic lane treatment breaks down embedded soil"
    },
    {
      number: 6,
      title: "Pre-Grooming",
      description: "Mechanical action loosens soil that other cleaners miss"
    },
    {
      number: 7,
      title: "Hot Water Extraction",
      description: "Truck-mounted system thoroughly flushes carpet with controlled pressure"
    },
    {
      number: 8,
      title: "pH Neutralization",
      description: "Balanced pH prevents residue that attracts future soil"
    },
    {
      number: 9,
      title: "Post-Spot Treatment",
      description: "Advanced techniques for any remaining stubborn stains"
    },
    {
      number: 10,
      title: "Post-Grooming",
      description: "Carpet pile restoration for original appearance and faster drying"
    },
    {
      number: 11,
      title: "Speed Drying",
      description: "High-velocity air movers reduce drying time to hours, not days"
    },
    {
      number: 12,
      title: "Final Inspection",
      description: "Quality assurance walkthrough ensures complete satisfaction"
    }
  ];

  const services = [
    "Residential Carpet Cleaning",
    "Commercial Carpet Cleaning", 
    "Upholstery Cleaning",
    "Tile & Grout Cleaning",
    "Carpet Protection",
    "Janitorial Services"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <Container>
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-bold text-teal-600">
              Wilkins Carpet Cleaning
            </Link>
            <Link 
              href="/" 
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </Container>
      </nav>

      {/* Article Content */}
      <article className="py-12">
        <Container>
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Our 12-Step Carpet Cleaning Process Gets Results Others Can't
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Most carpet cleaning companies in Rocky Mount, Wilson, and Tarboro use basic 3-4 step methods that only clean the surface. Our comprehensive 12-step process ensures your carpets are deeply cleaned, sanitized, and protected for lasting results.
            </p>
          </header>

          {/* YouTube Video */}
          <div className="mb-16">
            <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/3HiOGF_v6oI"
                title="Wilkins Carpet Cleaning Process"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-gray-500 mt-4 text-sm">
              Watch our comprehensive carpet cleaning process in action
            </p>
          </div>

          {/* 12-Step Process */}
          <section className="mb-16">
            <SectionHeading className="text-center mb-12">
              Our Comprehensive 12-Step Process
            </SectionHeading>
            
            <div className="grid gap-6 md:gap-8">
              {steps.map((step) => (
                <div 
                  key={step.number}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Benefits */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Comprehensive Approach
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Deep soil extraction beyond surface cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Professional pre-treatment for maximum stain removal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Controlled moisture to prevent mold and mildew</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Accelerated drying for your convenience</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Family-Owned Difference
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Personal attention from the business owner</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">20+ years serving Eastern North Carolina</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Honest pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Licensed, bonded, and insured</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Complete Services */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Complete Services List
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="p-4 bg-teal-50 rounded-lg border border-teal-200 text-center"
                >
                  <span className="text-teal-800 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-teal-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Wilkins Difference?
            </h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Don't settle for surface-level cleaning. Get the deep, thorough results that only our 12-step process can deliver.
            </p>
            <Link 
              href="/#booking"
              className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Your Cleaning Today
            </Link>
          </section>
        </Container>
      </article>
    </div>
  );
}
