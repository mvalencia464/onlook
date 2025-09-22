"use client";

import React from "react";
import Link from "next/link";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

// Simple, composable primitives matching homepage style
const Container = ({
  children,
  className = ""
}: {children: React.ReactNode;className?: string;}) =>
<div
  className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
  data-oid="gallery-container">
    {children}
  </div>;

const SectionHeading = ({
  kicker,
  title,
  subtitle
}: {kicker?: string;title: string;subtitle?: string;}) =>
<div className="mb-8 text-center" data-oid="gallery-section-heading">
    {kicker ?
  <p
    className="text-xs font-semibold uppercase tracking-widest text-teal-600"
    data-oid="gallery-kicker">
        {kicker}
      </p> :
  null}
    <h2
    className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
    data-oid="gallery-title">
      {title}
    </h2>
    {subtitle ?
  <p
    className="mx-auto mt-3 max-w-3xl text-base text-gray-700"
    data-oid="gallery-subtitle">
        {subtitle}
      </p> :
  null}
  </div>;

// Contact constants
const PHONE = "252-937-3276";
const EMAIL = "Anthonywilkins777@gmail.com";

// Header component matching homepage style
function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      data-oid="gallery-header">
      <Container
        className="flex items-center justify-between py-3"
        data-oid="gallery-header-container">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Wilkins Carpet Cleaning Logo"
          data-oid="gallery-logo">
          <div
            className="grid h-9 w-9 place-content-center rounded-md bg-teal-600 text-white"
            data-oid="gallery-logo-icon">
            <span className="text-sm font-bold" data-oid="gallery-logo-text">
              W
            </span>
          </div>
          <div className="leading-tight" data-oid="gallery-logo-text-container">
            <p
              className="text-sm font-semibold text-gray-900"
              data-oid="gallery-company-name">
              Wilkins Carpet Cleaning
            </p>
            <p className="text-xs text-gray-600" data-oid="gallery-tagline">
              Family-Owned Service Since 2003
            </p>
          </div>
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex"
          data-oid="gallery-nav">
          <Link href="/#services" className="hover:text-teal-700" data-oid="gallery-nav-services">
            Services
          </Link>
          <Link href="/#about" className="hover:text-teal-700" data-oid="gallery-nav-about">
            About
          </Link>
          <Link href="/gallery" className="text-teal-700 font-semibold" data-oid="gallery-nav-gallery">
            Gallery
          </Link>
          <Link href="/#reviews" className="hover:text-teal-700" data-oid="gallery-nav-reviews">
            Reviews
          </Link>
          <Link href="/blog/why-wilkins" className="hover:text-teal-700" data-oid="gallery-nav-why">
            Why Wilkins?
          </Link>
          <Link href="/#contact" className="hover:text-teal-700" data-oid="gallery-nav-contact">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2" data-oid="gallery-header-cta">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-teal-700/10 transition hover:bg-teal-700"
            data-oid="gallery-call-button">
            Call Now
          </a>
        </div>
      </Container>
    </header>
  );
}

// Gallery data with before/after images
const galleryProjects = [
  {
    id: 1,
    title: "Living Room Carpet Transformation",
    description: "Heavy traffic area restored to like-new condition using our 12-step cleaning process. This carpet was heavily soiled from years of foot traffic and pet accidents.",
    category: "Residential",
    beforeImage: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a3409fa3e9db0b40e4d.jpeg",
    afterImage: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a344fae2c19abdd1210.jpeg"
  },
  {
    id: 2,
    title: "Commercial Office Deep Clean",
    description: "Professional office carpet cleaning with minimal business disruption. Years of coffee spills and daily wear transformed back to professional appearance.",
    category: "Commercial",
    beforeImage: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a34b800037b792a3a4a.jpeg",
    afterImage: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a34d74f6b28ab5dd12e.jpeg"
  },
  {
    id: 3,
    title: "Stain Removal Success Story",
    description: "Tough stains that other companies said couldn't be cleaned - we proved them wrong! Deep-set stains from food, drinks, and pets completely eliminated.",
    category: "Stain Removal",
    beforeImage: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a34eaa0586d7ca94628.jpeg",
    afterImage: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a34f782ba7833b4bfdb.jpeg"
  },
  {
    id: 4,
    title: "Bedroom Carpet Restoration",
    description: "Master bedroom carpet that looked beyond saving brought back to life. Our advanced cleaning techniques removed years of accumulated dirt and allergens.",
    category: "Residential",
    beforeImage: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a34eaa0586d7ca94628.jpeg",
    afterImage: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a3409fa3e9db0b40e4d.jpeg"
  },
  {
    id: 5,
    title: "Restaurant Carpet Deep Clean",
    description: "High-traffic restaurant carpet cleaned during off-hours. Food stains, grease, and heavy soiling completely removed without disrupting business operations.",
    category: "Commercial",
    beforeImage: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a34f782ba7833b4bfdb.jpeg",
    afterImage: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_320/u_https://storage.googleapis.com/msgsndr/L5t2LlW1L90yYr78gOVn/media/68cc5a344fae2c19abdd1210.jpeg"
  }
];

// Breadcrumb component
function Breadcrumb() {
  return (
    <div className="bg-gray-50 border-b border-gray-200" data-oid="gallery-breadcrumb">
      <Container className="py-4" data-oid="gallery-breadcrumb-container">
        <nav className="flex" aria-label="Breadcrumb" data-oid="gallery-breadcrumb-nav">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li data-oid="gallery-breadcrumb-home">
              <Link href="/" className="hover:text-teal-600 transition-colors">
                Home
              </Link>
            </li>
            <li data-oid="gallery-breadcrumb-separator">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li className="text-gray-900 font-medium" data-oid="gallery-breadcrumb-current">
              Gallery
            </li>
          </ol>
        </nav>
      </Container>
    </div>
  );
}

// Main Gallery Section
function GallerySection() {
  return (
    <section
      className="bg-white py-16 sm:py-20"
      data-oid="main-gallery-section">
      <Container data-oid="main-gallery-container">
        <SectionHeading
          kicker="Before & After Gallery"
          title="See the Amazing Transformations"
          subtitle="Real results from our satisfied customers across Rocky Mount, Wilson, and surrounding areas. These dramatic before and after comparisons show the power of our professional cleaning process."
          data-oid="main-gallery-heading" />

        <div
          className="grid grid-cols-1 gap-12 lg:gap-16"
          data-oid="gallery-projects-grid">
          {galleryProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              data-oid={`gallery-project-${project.id}`}>
              
              {/* Project Header */}
              <div className="mb-6 text-center">
                <div
                  className="inline-flex items-center rounded-full bg-teal-600/10 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-600/20 mb-3"
                  data-oid={`project-category-${project.id}`}>
                  {project.category}
                </div>
                <h3
                  className="text-xl font-semibold text-gray-900 mb-2"
                  data-oid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p
                  className="text-sm text-gray-700 max-w-2xl mx-auto"
                  data-oid={`project-description-${project.id}`}>
                  {project.description}
                </p>
              </div>

              {/* Before/After Slider */}
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                beforeLabel="Before"
                afterLabel="After"
                data-oid={`slider-${project.id}`}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center" data-oid="gallery-cta-section">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready for Your Own Amazing Results?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Don't wait until your carpets are beyond help. Get your FREE estimate today and discover why customers say we're the best in the business.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-teal-700/10 transition hover:bg-teal-700"
                data-oid="gallery-cta-phone">
                Call {PHONE} for FREE Estimate
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-teal-700 ring-1 ring-inset ring-teal-600/20 transition hover:bg-teal-50"
                data-oid="gallery-cta-email">
                Get Written Estimate
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Footer component matching homepage style
function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50" data-oid="gallery-footer">
      <Container className="py-10" data-oid="gallery-footer-container">
        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-3"
          data-oid="gallery-footer-grid">
          <div data-oid="gallery-footer-brand">
            <div className="flex items-center gap-3" data-oid="gallery-footer-logo">
              <div
                className="grid h-9 w-9 place-content-center rounded-md bg-teal-600 text-white"
                data-oid="gallery-footer-logo-icon">
                <span className="text-sm font-bold" data-oid="gallery-footer-logo-text">
                  W
                </span>
              </div>
              <div className="leading-tight" data-oid="gallery-footer-brand-text">
                <p
                  className="text-sm font-semibold text-gray-900"
                  data-oid="gallery-footer-company-name">
                  Wilkins Carpet Cleaning
                </p>
                <p className="text-xs text-gray-600" data-oid="gallery-footer-tagline">
                  Family-Owned Service Since 2003
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-700" data-oid="gallery-footer-description">
              Carolina's #1 preferred carpet cleaning specialist. Family-owned
              and operated, serving the Rocky Mount area with honest, dependable
              service for over 20 years.
            </p>
          </div>
          <div data-oid="gallery-footer-services">
            <h4
              className="text-sm font-semibold text-gray-900"
              data-oid="gallery-footer-services-title">
              Services
            </h4>
            <ul
              className="mt-3 space-y-1 text-sm text-gray-700"
              data-oid="gallery-footer-services-list">
              <li data-oid="gallery-footer-service-1">Carpet Steam Cleaning</li>
              <li data-oid="gallery-footer-service-2">Commercial Carpet Cleaning</li>
              <li data-oid="gallery-footer-service-3">Upholstery Cleaning</li>
              <li data-oid="gallery-footer-service-4">Tile & Grout Cleaning</li>
              <li data-oid="gallery-footer-service-5">Carpet Protection</li>
              <li data-oid="gallery-footer-service-6">Janitorial Services</li>
            </ul>
          </div>
          <div data-oid="gallery-footer-contact">
            <h4
              className="text-sm font-semibold text-gray-900"
              data-oid="gallery-footer-contact-title">
              Contact
            </h4>
            <ul
              className="mt-3 space-y-1 text-sm text-gray-700"
              data-oid="gallery-footer-contact-list">
              <li data-oid="gallery-footer-phone">
                <a
                  className="text-teal-700 underline-offset-2 hover:underline"
                  href={`tel:${PHONE}`}
                  data-oid="gallery-footer-phone-link">
                  {PHONE}
                </a>{" "}
                (Call or text anytime)
              </li>
              <li data-oid="gallery-footer-email">
                <a
                  className="text-teal-700 underline-offset-2 hover:underline"
                  href={`mailto:${EMAIL}`}
                  data-oid="gallery-footer-email-link">
                  {EMAIL}
                </a>
              </li>
              <li data-oid="gallery-footer-areas">
                Service Areas: Rocky Mount, Wilson, Tarboro, Nashville, and
                surrounding areas in North Carolina.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-600 sm:flex-row"
          data-oid="gallery-footer-bottom">
          <span data-oid="gallery-footer-copyright">
            © {new Date().getFullYear()} Wilkins Carpet Cleaning. All rights
            reserved.
          </span>
          <span data-oid="gallery-footer-credits">
            <Link href="/" className="hover:text-teal-600">← Back to Home</Link> • Rating: 4.8/5 Stars with 50+ Google Reviews
          </span>
        </div>
      </Container>
    </footer>
  );
}

export default function GalleryPage() {
  return (
    <div
      className="w-full min-h-screen scroll-smooth bg-white text-gray-900"
      data-oid="gallery-page">
      <Header data-oid="gallery-page-header" />
      <Breadcrumb data-oid="gallery-page-breadcrumb" />
      <main data-oid="gallery-page-main">
        <GallerySection data-oid="gallery-page-section" />
      </main>
      <Footer data-oid="gallery-page-footer" />
    </div>
  );
}
