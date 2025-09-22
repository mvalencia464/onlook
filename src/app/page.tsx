"use client";

import React from "react";
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import the booking iframe to avoid hydration issues
const BookingIframe = dynamic(() => import('@/components/BookingIframe'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-gray-500">Loading booking form...</div>
    </div>
  )
});

// Simple, composable primitives
const Container = ({
  children,
  className = ""



}: {children: React.ReactNode;className?: string;}) =>
<div
  className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
  data-oid="eha-wfm">

    {children}
  </div>;


const SectionHeading = ({
  kicker,
  title,
  subtitle




}: {kicker?: string;title: string;subtitle?: string;}) =>
<div className="mb-8 text-center" data-oid="5i-js0f">
    {kicker ?
  <p
    className="text-xs font-semibold uppercase tracking-widest text-teal-600"
    data-oid="1cntbn-">

        {kicker}
      </p> :
  null}
    <h2
    className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
    data-oid="zn495ve">

      {title}
    </h2>
    {subtitle ?
  <p
    className="mx-auto mt-3 max-w-3xl text-base text-gray-700"
    data-oid=":r8hpir">

        {subtitle}
      </p> :
  null}
  </div>;


const Rating = ({ className = "" }: {className?: string;}) =>
<div
  className={`inline-flex items-center gap-2 ${className}`}
  data-oid="3cxwtz:">

    <div
    className="flex items-center text-amber-500"
    aria-hidden="true"
    data-oid="nu5ol5c">

      {Array.from({ length: 5 }).map((_, i) =>
    <svg
      key={i}
      viewBox="0 0 20 20"
      fill={i < 5 ? "currentColor" : "none"}
      className="h-5 w-5"
      data-oid="vfgihlw">

          <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"
        data-oid=":xqy-2o" />

        </svg>
    )}
    </div>
    <span className="text-sm font-medium text-gray-800" data-oid="w4p1.ff">
      4.8/5 • 50+ Google Reviews
    </span>
  </div>;


// Contact constants
const PHONE = "252-937-3276";
const EMAIL = "Anthonywilkins777@gmail.com";
const ADDRESS = "1357 N Wesleyan Blvd, Rocky Mount, NC 27804";

// Header
function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      data-oid="af3chmq">

      <Container
        className="flex items-center justify-between py-3"
        data-oid="p486m2b">

        <a
          href="#"
          className="flex items-center gap-3"
          aria-label="Wilkins Carpet Cleaning Logo"
          data-oid="ajd4koc">

          <div
            className="grid h-9 w-9 place-content-center rounded-md bg-teal-600 text-white"
            data-oid="96.q9:e">

            <span className="text-sm font-bold" data-oid="9taozjg">
              W
            </span>
          </div>
          <div className="leading-tight" data-oid="d_6g6pt">
            <p
              className="text-sm font-semibold text-gray-900"
              data-oid="xmv264d">

              Wilkins Carpet Cleaning
            </p>
            <p className="text-xs text-gray-600" data-oid="5_a7blw">
              Family-Owned Service Since 2003
            </p>
          </div>
        </a>
        <nav
          className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex"
          data-oid="y8w5_di">

          <a
            href="#services"
            className="hover:text-teal-700"
            data-oid="vfs_koo">

            Services
          </a>
          <a href="#about" className="hover:text-teal-700" data-oid="cp30zcs">
            About
          </a>
          <a href="#gallery" className="hover:text-teal-700" data-oid="gallery-nav">
            Gallery
          </a>
          <a href="#reviews" className="hover:text-teal-700" data-oid="2r5_..7">
            Reviews
          </a>
          <a href="/blog/why-wilkins" className="hover:text-teal-700" data-oid="t.kyhu.">
            Why Wilkins?
          </a>
          <a href="#contact" className="hover:text-teal-700" data-oid="6u-6o:-">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2" data-oid="i27_eji">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-teal-700/10 transition hover:bg-teal-700"
            data-oid="7xei-1m">

            Call Now
          </a>
        </div>
      </Container>
    </header>);

}

// Hero
function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white"
      data-oid="icnm7tg">

      <div
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_50%_at_50%_30%,black,transparent)]"
        data-oid="ova18xm">

        <div
          className="absolute -left-20 -top-10 h-72 w-72 rounded-full bg-teal-200/60 blur-3xl"
          data-oid="lp52vk2" />


        <div
          className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-200/60 blur-3xl"
          data-oid=".er5b10" />

      </div>
      <Container
        className="grid grid-cols-1 items-center gap-10 py-14 sm:py-20 lg:grid-cols-2"
        data-oid="nczotk-">

        <div data-oid="2620q9v">
          <h1
            className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
            data-oid="o-gxkr.">

            Professional Carpet Cleaning in Rocky Mount & Wilson NC
          </h1>
          <p className="mt-4 text-lg text-gray-700" data-oid="ytw3bpa">
            Don't replace your carpets - restore them to like-new condition!
          </p>
          <div
            className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-800"
            data-oid="ernadfy">

            <span
              className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200"
              data-oid="g4gp_yf">

              <span className="text-teal-600" data-oid="i4wz9l.">
                ✓
              </span>{" "}
              FREE written estimates - no bait & switch
            </span>
            <span
              className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200"
              data-oid="-lorxj3">

              <span className="text-teal-600" data-oid="uur03bj">
                ✓
              </span>{" "}
              Licensed, bonded & insured
            </span>
            <span
              className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-gray-200"
              data-oid="7v6rtb9">

              <span className="text-teal-600" data-oid="2q-m6uk">
                ✓
              </span>{" "}
              20+ years serving Rocky Mount
            </span>
          </div>
          <div
            className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center"
            data-oid="uyg796v">

            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center rounded-md bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-teal-700/10 transition hover:bg-teal-700"
              data-oid="m338grh">

              Call {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-teal-700 ring-1 ring-inset ring-teal-600/20 transition hover:bg-teal-50"
              data-oid="gd300_9">

              Get a FREE Estimate
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-700" data-oid="fr5.rv-">
            Serving Rocky Mount, Wilson, Nashville, Tarboro & surrounding areas
          </p>
          <Rating className="mt-3" data-oid="eic_rut" />
        </div>
        <div className="relative" data-oid="lwwxnkm">
          {/* Accessible decorative block acting as hero image */}
          <div
            role="img"
            aria-label="Professional carpet cleaning service in action"
            className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            data-oid="3b40-hj">

            <div className="relative h-full w-full" data-oid="vm8wqah">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(13,148,136,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(8,145,178,0.15),transparent_45%)]"
                data-oid="r71pcs5" />


              <div
                className="absolute inset-6 rounded-lg border border-dashed border-teal-300/60"
                data-oid="f3ocn6x" />


              <div
                className="absolute bottom-4 left-4 rounded-md bg-white/90 px-3 py-2 text-xs font-medium text-gray-700 ring-1 ring-gray-200"
                data-oid="9gz1hg2">

                "We bring carpets back to life."
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>);

}

// Services
function ServicesSection() {
  const services: Array<{title: string;desc: string;}> = [
  {
    title: "Carpet Steam Cleaning",
    desc: "Deep steam cleaning that removes tough stains, dirt, and odors. Our superior process brings carpets back to life."
  },
  {
    title: "Commercial Carpet Cleaning",
    desc: "Professional cleaning for offices, restaurants, and businesses. Flexible scheduling to minimize disruption."
  },
  {
    title: "Upholstery Cleaning",
    desc: "Restore your furniture to like-new condition. Safe for all fabric types, including delicate materials."
  },
  {
    title: "Carpet & Upholstery Protection",
    desc: "Protective treatments that extend the life of your carpets and furniture while making future cleaning easier."
  },
  {
    title: "Tile & Grout Cleaning",
    desc: "Professional tile and grout cleaning with sealers to restore and protect your hard surfaces."
  },
  {
    title: "Grout Line Re-coloring",
    desc: "Transform old, discolored grout lines with professional re-coloring services for a fresh, new look."
  },
  {
    title: "Janitorial Services",
    desc: "Complete janitorial services for businesses, including regular maintenance and deep cleaning."
  },
  {
    title: "Floor Stripping & Waxing",
    desc: "Professional floor care, including stripping old wax and applying new protective coatings."
  }];


  return (
    <section
      id="services"
      className="bg-white py-16 sm:py-20"
      data-oid="poue8iw">

      <Container data-oid="m-5xhgu">
        <SectionHeading
          kicker="Services"
          title="Complete Cleaning Solutions"
          subtitle="From residential carpets to commercial facilities, we provide comprehensive cleaning services that exceed expectations. Don't be fooled by low prices - you get what you pay for!"
          data-oid="6-rz92x" />


        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          data-oid="-qhux-l">

          {services.map((s) =>
          <div
            key={s.title}
            className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            data-oid="j6gd6ok">

              <div className="flex items-start gap-3" data-oid="tzjeams">
                <span
                className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-md bg-teal-600/10 text-teal-700 ring-1 ring-teal-600/20"
                data-oid="aewp-du">

                  {/* sparkle icon */}
                  <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  data-oid="wl-:73l">

                    <path
                    d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4L12 2z"
                    data-oid="k9gpnd:" />

                  </svg>
                </span>
                <div data-oid="82b37o_">
                  <h3
                  className="text-base font-semibold text-gray-900"
                  data-oid="qr3pcc1">

                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700" data-oid="zaurbn0">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>);

}

// About
function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-16 sm:py-20"
      data-oid="ja6h_bn">

      <Container data-oid="zp_.n._">
        <SectionHeading
          kicker="About"
          title="Family-Owned Excellence Since 2003"
          data-oid="if104m3" />


        <div
          className="grid grid-cols-1 gap-10 lg:grid-cols-2"
          data-oid="0gi_:sw">

          <div className="text-base text-gray-800" data-oid="4ncwkuk">
            <p className="mb-4" data-oid="u6zr37i">
              Dear Friend, Wilkins Carpet Cleaning is a local, family-owned
              business proudly serving the Rocky Mount area and beyond for over
              20 years. We're Carolina's #1 preferred carpet cleaning specialist
              with a commitment that sets us apart.
            </p>
            <blockquote
              className="mb-4 rounded-lg border-l-4 border-teal-600 bg-white p-4 text-gray-800 shadow-sm"
              data-oid="o8icnka">

              “We treat every homeowner's property as if it was our very own
              home. We're NOT going to cut corners just to get your money!” —{" "}
              <span className="font-semibold" data-oid="f_reqrj">
                Anthony Wilkins
              </span>
              , Owner/Operator
            </blockquote>
            <p className="mb-6" data-oid="kvwo35i">
              Our superior cleaning process and commitment to excellence have
              earned us countless 5-star reviews from satisfied customers. When
              others say it can't be cleaned, we prove them wrong.
            </p>
            <ul
              className="grid list-none grid-cols-1 gap-3 sm:grid-cols-2"
              data-oid="n0yyptk">

              {[
              "Award-Winning Service: 20+ years of excellence",
              "Licensed & Bonded: Fully insured for peace of mind",
              "Punctual & Reliable: We respect your time",
              "Certified Technicians: Advanced equipment & training"].
              map((item) =>
              <li
                key={item}
                className="flex items-start gap-3 text-sm"
                data-oid="69gc.g:">

                  <span className="mt-1 text-teal-600" data-oid=":bs8u5g">
                    ✓
                  </span>
                  <span className="text-gray-800" data-oid="vggvrce">
                    {item}
                  </span>
                </li>
              )}
            </ul>
          </div>
          <div data-oid="zpfh9pm">
            <div
              role="img"
              aria-label="Anthony Wilkins professional carpet cleaning"
              className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              data-oid="t_3-0:l">

              <div className="relative h-full w-full" data-oid="a20d5n-">
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(20,184,166,0.15),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.15),transparent_40%)]"
                  data-oid="k0q10sh" />


                <div
                  className="absolute inset-6 rounded-lg border border-dashed border-teal-300/60"
                  data-oid="gx81u:i" />


                <div
                  className="absolute bottom-4 left-4 rounded-md bg-white/90 px-3 py-2 text-xs font-medium text-gray-700 ring-1 ring-gray-200"
                  data-oid="cye8__4">

                  Family-owned • Licensed • Insured
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>);

}

// Gallery
function GallerySection() {
  const galleryImages = [
    {
      id: 1,
      title: "Before & After Carpet Restoration",
      description: "Living room carpet transformation - from heavily stained to like-new condition",
      category: "Before & After"
    },
    {
      id: 2,
      title: "Commercial Office Cleaning",
      description: "Professional carpet cleaning for a busy office space in Rocky Mount",
      category: "Commercial"
    },
    {
      id: 3,
      title: "Upholstery Cleaning Results",
      description: "Sofa and chair cleaning showing dramatic improvement in fabric appearance",
      category: "Upholstery"
    },
    {
      id: 4,
      title: "Tile & Grout Restoration",
      description: "Kitchen tile and grout cleaning with protective sealing application",
      category: "Tile & Grout"
    },
    {
      id: 5,
      title: "Pet Stain Removal",
      description: "Complete pet stain and odor removal from bedroom carpet",
      category: "Stain Removal"
    },
    {
      id: 6,
      title: "Area Rug Cleaning",
      description: "Delicate Persian rug cleaning with specialized techniques",
      category: "Area Rugs"
    }
  ];

  return (
    <section
      id="gallery"
      className="bg-white py-16 sm:py-20"
      data-oid="gallery-section">

      <Container data-oid="gallery-container">
        <SectionHeading
          kicker="Gallery"
          title="See the Amazing Results"
          subtitle="Real transformations from our satisfied customers across Rocky Mount, Wilson, and surrounding areas. These results speak for themselves!"
          data-oid="gallery-heading" />

        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          data-oid="gallery-grid">

          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              data-oid={`gallery-item-${image.id}`}>

              {/* Placeholder image with gradient background */}
              <div
                className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50"
                data-oid={`gallery-image-${image.id}`}>

                <div className="relative h-full w-full">
                  <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(13,148,136,0.1),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(8,145,178,0.1),transparent_45%)]"
                    data-oid={`gallery-bg-${image.id}`} />

                  <div
                    className="absolute inset-6 rounded-lg border border-dashed border-teal-300/40"
                    data-oid={`gallery-border-${image.id}`} />

                  {/* Category badge */}
                  <div
                    className="absolute top-3 left-3 rounded-md bg-teal-600/90 px-2 py-1 text-xs font-medium text-white"
                    data-oid={`gallery-category-${image.id}`}>
                    {image.category}
                  </div>

                  {/* Placeholder icon */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    data-oid={`gallery-icon-${image.id}`}>
                    <div className="rounded-full bg-white/80 p-4 shadow-sm">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-8 w-8 text-teal-600"
                        data-oid={`gallery-svg-${image.id}`}>
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="9" cy="9" r="2"/>
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4"
                data-oid={`gallery-overlay-${image.id}`}>

                <h3
                  className="text-sm font-semibold text-white"
                  data-oid={`gallery-title-${image.id}`}>
                  {image.title}
                </h3>
                <p
                  className="mt-1 text-xs text-white/90"
                  data-oid={`gallery-desc-${image.id}`}>
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center" data-oid="gallery-cta">
          <p className="text-sm text-gray-600 mb-4">
            Ready to see these results in your own home or business?
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center rounded-md bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-teal-700/10 transition hover:bg-teal-700"
              data-oid="gallery-cta-phone">
              Call {PHONE} for FREE Estimate
            </a>
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-teal-700 ring-1 ring-inset ring-teal-600/20 transition hover:bg-teal-50"
              data-oid="gallery-cta-booking">
              Schedule Online
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Testimonials
function TestimonialsSection() {
  const testimonials = [
  {
    author: "Christy O'Leary",
    text: "I just got home today after having my carpets cleaned and I really could not believe my eyes!! ...Anthony did his magic and they have NEVER looked so good! ...Thank you, Anthony. I appreciate all your hard work and dedication to doing your job to superior status! Well done!! 🤩"
  },
  {
    author: "Asbury Park",
    text: "I must say, I have been very impressed with the quality of Mr. Wilkins' work. He brings the life back to any carpet... He recently cleaned a carpet that I thought would have to be replaced, but after his work was done, I was literally blown away! ...He assess the work, he keeps everything in order, he's prompt and efficient, very personable and most important, he's honest."
  },
  {
    author: "Gerri Brown",
    text: "I scheduled to have my 88 year old mom's carpet cleaned with Wilkins. Her carpet is at least 6+ years old if not older. So needless to say, it really needed to be replaced. However, Wilkins made it look new. I couldn't believe it, my mom was very pleased!! ...It's a very professional & thorough carpet cleaning company."
  },
  {
    author: "Chelsea Richardson",
    text: "Mr. Wilkins comes highly recommended. He is prompt, friendly, and does an outstanding job on my carpet. He is the ONLY company I recommend! ...He has superb customer service and I will be back again!!!!!"
  },
  {
    author: "Kasia Hunter-Parker",
    text: "We were about to throw in the towel and purchase new carpet! I was embarrassed at how dirty our carpet had become! Mr. Wilkins came in made the carpets look as new. He also cleaned an area rug! It looks brighter than the day we purchased it! I will be using him for future and I highly recommend his services!"
  },
  {
    author: "Summer Macaluso",
    text: "Mr.Wilkins is super nice ! Carpets look great , very pleased . 10/10 recommend . Will be contacting Wilkins in the future for more work ."
  }];


  return (
    <section
      id="reviews"
      className="bg-white py-16 sm:py-20"
      data-oid="vffi8e1">

      <Container data-oid="ssindl:">
        <SectionHeading
          kicker="Testimonials"
          title="Don't Take Our Word For It"
          subtitle="See what our satisfied customers are saying about the amazing results and exceptional service that keeps them coming back year after year."
          data-oid="wyv.san" />


        <Rating className="mx-auto mb-8 block text-center" data-oid="8swoys5" />
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          data-oid="1zko7h9">

          {testimonials.map((t) =>
          <figure
            key={t.author}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            data-oid="75qef:j">

              <blockquote className="text-sm text-gray-800" data-oid="ul2aga1">
                {t.text}
              </blockquote>
              <figcaption
              className="mt-4 text-sm font-semibold text-gray-900"
              data-oid="g_aqcch">

                — {t.author}
              </figcaption>
            </figure>
          )}
        </div>
      </Container>
    </section>);

}

// Why Wilkins / Pain Points
function WhySection() {
  const points = [
  {
    title: "Embarrassed by Stained Carpets?",
    desc: "Don't hide from guests or consider expensive replacements.",
    emoji: "😫"
  },
  {
    title: "Tired of DIY Failures?",
    desc: "Home cleaners and rental machines just push dirt deeper.",
    emoji: "💸"
  },
  {
    title: "Fed Up with Unreliable Service?",
    desc: "No more waiting around or dealing with bait-and-switch tactics.",
    emoji: "⏰"
  }];


  return (
    <section id="why" className="bg-gray-50 py-16 sm:py-20" data-oid="zkywmr:">
      <Container data-oid="ic5-xx0">
        <SectionHeading
          title="Stop Wasting Time & Money on Solutions That Don't Work"
          subtitle="Get it done RIGHT the first time with Carolina's #1 carpet cleaning specialist"
          data-oid="f6hivvf" />


        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
          data-oid="r_z.gay">

          {points.map((p) =>
          <div
            key={p.title}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            data-oid="302zgw.">

              <div className="text-2xl" data-oid="4_yqe5l">
                {p.emoji}
              </div>
              <h3
              className="mt-2 text-base font-semibold text-gray-900"
              data-oid="actrnfl">

                {p.title}
              </h3>
              <p className="mt-1 text-sm text-gray-700" data-oid="e7atp:9">
                {p.desc}
              </p>
            </div>
          )}
        </div>

        {/* Link to detailed blog post */}
        <div className="mt-12 text-center">
          <Link
            href="/blog/why-wilkins"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Learn About Our 12-Step Process
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>);

}

// Contact
function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white py-16 sm:py-20"
      data-oid="1hduds5">

      <Container data-oid="gdnr50i">
        <SectionHeading
          kicker="Contact"
          title="Ready for Amazing Results?"
          subtitle="Don't wait until your carpets are beyond help. Get your FREE estimate today and discover why customers say we're the best in the business."
          data-oid=".9aacal" />


        <div
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          data-oid="74ww6t4">

          <div
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2"
            data-oid="y74o7og">

            <ul className="space-y-3 text-sm text-gray-800" data-oid="c73t.jt">
              <li data-oid="nqdb6d7">
                <span
                  className="font-semibold text-gray-900"
                  data-oid="jl0zndq">

                  Phone:
                </span>{" "}
                <a
                  className="text-teal-700 underline-offset-2 hover:underline"
                  href={`tel:${PHONE}`}
                  data-oid="c_nzzkq">

                  {PHONE} (Call or Text Anytime - Fast response guaranteed)
                </a>
              </li>
              <li data-oid="s8zlpw0">
                <span
                  className="font-semibold text-gray-900"
                  data-oid=":nmt.t7">

                  Email:
                </span>{" "}
                <a
                  className="text-teal-700 underline-offset-2 hover:underline"
                  href={`mailto:${EMAIL}`}
                  data-oid=":vkbt5u">

                  {EMAIL}
                </a>{" "}
                <span className="text-gray-700" data-oid="q60kn0t">
                  (Professional written estimates)
                </span>
              </li>
              <li data-oid="t_-d1c1">
                <span
                  className="font-semibold text-gray-900"
                  data-oid="-e2f9t:">

                  Address:
                </span>{" "}
                {ADDRESS}
              </li>
              <li data-oid="_6m5o12">
                <span
                  className="font-semibold text-gray-900"
                  data-oid="hcyd3sh">

                  Service Areas:
                </span>{" "}
                Rocky Mount, Wilson, Tarboro, Nashville, Roanoke Rapids,
                Louisburg, Springhope, Whitakers, Greenville & surrounding areas
              </li>
              <li data-oid="q0.b92p">
                <span
                  className="font-semibold text-gray-900"
                  data-oid="ojzyiyn">

                  Hours:
                </span>{" "}
                Monday - Saturday • Emergency service available • No lengthy
                wait periods
              </li>
            </ul>
            <div
              className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
              data-oid="0z3z4cw">

              {[
              "No bait and switch - written estimates honored",
              "Punctual service - we respect your time",
              "Licensed, bonded & insured for your protection",
              "Quality guarantee on all services"].
              map((g) =>
              <div
                key={g}
                className="flex items-start gap-3 text-sm"
                data-oid="uido1mz">

                  <span className="mt-1 text-teal-600" data-oid="n6j_5km">
                    ✓
                  </span>
                  <span className="text-gray-800" data-oid="pgsz7w1">
                    {g}
                  </span>
                </div>
              )}
            </div>
            <div
              className="mt-6 rounded-lg bg-teal-50 p-4 text-sm text-teal-900 ring-1 ring-inset ring-teal-200"
              data-oid="4tu9-2s">

              <span className="font-semibold" data-oid="ppoxb84">
                Water Damage Emergency?
              </span>{" "}
              We respond quickly to minimize damage and restore your property.
            </div>
          </div>
          <div
            className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
            data-oid="jfeq734">

            <h3
              className="text-base font-semibold text-gray-900"
              data-oid="237wwp0">

              Call Now
            </h3>
            <a
              href={`tel:${PHONE}`}
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-teal-700/10 transition hover:bg-teal-700"
              data-oid="a35_b8_">

              {PHONE}
            </a>
            <h3
              className="mt-6 text-base font-semibold text-gray-900"
              data-oid="yo86xf_">

              Or Email Us
            </h3>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-teal-700 ring-1 ring-inset ring-teal-600/20 transition hover:bg-teal-50"
              data-oid="1z1nlnb">

              {EMAIL}
            </a>
            <p className="mt-4 text-xs text-gray-600" data-oid="j30xt4m">
              Average response time: under 1 hour.
            </p>
          </div>
        </div>
      </Container>
    </section>);

}

// Booking
function BookingSection() {
  return (
    <section
      id="booking"
      className="bg-gray-50 py-16 sm:py-20"
      data-oid="booking-section">

      <Container data-oid="booking-container">
        <SectionHeading
          kicker="Book Online"
          title="Schedule Your Carpet Cleaning"
          subtitle="Choose a convenient time that works for you. We'll send confirmation and reminders so you never miss your appointment."
          data-oid="booking-heading" />


        <div
          className="mx-auto max-w-6xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          data-oid="booking-embed-container">

          <BookingIframe />

        </div>
      </Container>

      <script
        src="https://link.msgsndr.com/js/form_embed.js"
        type="text/javascript"
        data-oid="booking-script" />

    </section>);

}

// Footer
function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50" data-oid="-cq7l16">
      <Container className="py-10" data-oid=".w7oa:e">
        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-3"
          data-oid="dodevt:">

          <div data-oid="y06ka30">
            <div className="flex items-center gap-3" data-oid="b08oy1-">
              <div
                className="grid h-9 w-9 place-content-center rounded-md bg-teal-600 text-white"
                data-oid="5qoxup:">

                <span className="text-sm font-bold" data-oid="vtdb.ih">
                  W
                </span>
              </div>
              <div className="leading-tight" data-oid="s6:i:4l">
                <p
                  className="text-sm font-semibold text-gray-900"
                  data-oid="6ibj:cp">

                  Wilkins Carpet Cleaning
                </p>
                <p className="text-xs text-gray-600" data-oid="vp5q0mc">
                  Family-Owned Service Since 2003
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-700" data-oid="7pffqus">
              Carolina's #1 preferred carpet cleaning specialist. Family-owned
              and operated, serving the Rocky Mount area with honest, dependable
              service for over 20 years.
            </p>
            <p className="mt-3 text-xs text-gray-600" data-oid="8o:7fj9">
              Credentials: Licensed • Bonded • Insured
            </p>
            <p
              className="mt-2 text-xs font-medium text-gray-700"
              data-oid="hzl124m">

              “If we can't help you... We will refer someone who can.”
            </p>
          </div>
          <div data-oid="e2f.1s9">
            <h4
              className="text-sm font-semibold text-gray-900"
              data-oid="9ds8e37">

              Services
            </h4>
            <ul
              className="mt-3 space-y-1 text-sm text-gray-700"
              data-oid="v116p5u">

              <li data-oid="b9cepm5">Carpet Steam Cleaning</li>
              <li data-oid="50u1nh.">Commercial Carpet Cleaning</li>
              <li data-oid="we4fre8">Upholstery Cleaning</li>
              <li data-oid="lh7ubg:">Tile & Grout Cleaning</li>
              <li data-oid="28q87e.">Carpet Protection</li>
              <li data-oid="dqf_qfd">Janitorial Services</li>
              <li data-oid="pd7at1b">Floor Stripping & Waxing</li>
              <li data-oid="8x4rafz">Grout Re-coloring</li>
            </ul>
          </div>
          <div data-oid="6fgcc81">
            <h4
              className="text-sm font-semibold text-gray-900"
              data-oid="g_wiaxp">

              Contact
            </h4>
            <ul
              className="mt-3 space-y-1 text-sm text-gray-700"
              data-oid="_w_pv7m">

              <li data-oid="b4bs:ln">
                <a
                  className="text-teal-700 underline-offset-2 hover:underline"
                  href={`tel:${PHONE}`}
                  data-oid="oa7p4.5">

                  {PHONE}
                </a>{" "}
                (Call or text anytime)
              </li>
              <li data-oid="m3c75s7">
                <a
                  className="text-teal-700 underline-offset-2 hover:underline"
                  href={`mailto:${EMAIL}`}
                  data-oid="bjuhcdy">

                  {EMAIL}
                </a>
              </li>
              <li data-oid="-vgxdsq">{ADDRESS}</li>
              <li data-oid="mbm9sm_">
                Service Areas: Rocky Mount, Wilson, Tarboro, Nashville, Roanoke
                Rapids, Louisburg, Springhope, Whitakers, Greenville and
                surrounding areas in North Carolina.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-600 sm:flex-row"
          data-oid="7jug.pc">

          <span data-oid="ilreqy7">
            © {new Date().getFullYear()} Wilkins Carpet Cleaning. All rights
            reserved.
          </span>
          <span data-oid="x.ovb0f">
            Site by Onlook • Rating: 4.8/5 Stars with 50+ Google Reviews
          </span>
        </div>
      </Container>
    </footer>);

}

export default function Page() {
  return (
    <div
      className="w-full min-h-screen scroll-smooth bg-white text-gray-900"
      data-oid="m-238_z">

      <Header data-oid="8x0b2jg" />
      <main data-oid="xmmt0c6">
        <Hero data-oid=":wrse9t" />
        <ServicesSection data-oid="-8pg3tz" />
        <AboutSection data-oid="o-c8w7r" />
        <GallerySection data-oid="gallery-main" />
        <TestimonialsSection data-oid="_396xsi" />
        <WhySection data-oid="pcbnqu8" />
        <ContactSection data-oid="aj6raq4" />
        <BookingSection data-oid="booking-main" />
      </main>
      <Footer data-oid="-8hy6rx" />
    </div>);

}