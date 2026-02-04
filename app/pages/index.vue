<template>
  <section class="antialiased text-navy">
    <!-- Navigation -->
    <nav
      id="navbar"
      class="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-champagne-light transition-all duration-300"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <a
            href="#home"
            class="font-serif text-2xl md:text-3xl font-semibold tracking-wide"
          >
            Eva <span class="text-[#c9a87c]">Karen</span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              class="text-sm font-medium text-gray-600 hover:text-[#c9a87c] transition-colors duration-300 tracking-wide uppercase"
              >Home</a
            >
            <a
              href="#about"
              class="text-sm font-medium text-gray-600 hover:text-[#c9a87c] transition-colors duration-300 tracking-wide uppercase"
              >About</a
            >
            <a
              href="#practice"
              class="text-sm font-medium text-gray-600 hover:text-[#c9a87c] transition-colors duration-300 tracking-wide uppercase"
              >Practice Areas</a
            >
            <a
              href="#testimonials"
              class="text-sm font-medium text-gray-600 hover:text-[#c9a87c] transition-colors duration-300 tracking-wide uppercase"
              >Testimonials</a
            >
            <a
              href="#contact"
              class="text-sm font-medium text-gray-600 hover:text-[#c9a87c] transition-colors duration-300 tracking-wide uppercase"
              >Contact</a
            >
            <a
              href="#contact"
              class="px-6 py-2.5 bg-[#1e293b] text-white text-sm font-medium tracking-wide uppercase hover:bg-[#c9a87c] transition-colors duration-300"
            >
              Free Consultation
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMenu()"
            class="md:hidden block p-2 text-navy hover:text-[#c9a87c] transition-colors"
          >
            <svg
              id="menu-icon"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              id="close-icon"
              class="w-6 h-6 hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div
          v-if="mobileMenuOpen"
          class="md:hidden block pb-6 transition-all duration-300"
        >
          <div class="space-y-4">
            <a
              href="#home"
              @click="closeMenu()"
              class="block py-2 text-gray-600 hover:text-[#c9a87c] transition-colors tracking-wide uppercase text-sm"
              >Home</a
            >
            <a
              href="#about"
              @click="closeMenu()"
              class="block py-2 text-gray-600 hover:text-[#c9a87c] transition-colors tracking-wide uppercase text-sm"
              >About</a
            >
            <a
              href="#practice"
              @click="closeMenu()"
              class="block py-2 text-gray-600 hover:text-[#c9a87c] transition-colors tracking-wide uppercase text-sm"
              >Practice Areas</a
            >
            <a
              href="#testimonials"
              @click="closeMenu()"
              class="block py-2 text-gray-600 hover:text-[#c9a87c] transition-colors tracking-wide uppercase text-sm"
              >Testimonials</a
            >
            <a
              href="#contact"
              @click="closeMenu()"
              class="block py-2 text-gray-600 hover:text-[#c9a87c] transition-colors tracking-wide uppercase text-sm"
              >Contact</a
            >
            <a
              href="#contact"
              @click="closeMenu()"
              class="block mt-4 px-6 py-3 bg-navy text-white text-sm font-medium tracking-wide uppercase hover:bg-[#c9a87c]-dark transition-colors text-center"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section
      id="home"
      class="min-h-screen bg-gradient-to-br from-cream via-champagne-light to-cream flex items-center pt-20"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Text Content -->
          <div class="order-2 lg:order-1 animate-fade-in-up">
            <div class="flex items-center gap-3 mb-6">
              <svg
                class="w-5 h-5 text-[#c9a87c]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
              <span
                class="text-sm font-medium tracking-widest uppercase text-gray-500"
                >Attorney at Law</span
              >
            </div>

            <h1
              class="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-6"
            >
              Dedicated Legal<br />
              <span class="text-[#c9a87c]">Representation</span>
            </h1>

            <p class="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              With over 15 years of experience, I provide compassionate and
              strategic legal counsel to clients navigating life's most
              challenging moments. Your story matters, and I'm here to fight for
              your rights.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                class="group px-8 py-4 bg-[#1e293b] text-white font-medium tracking-wide uppercase hover:bg-[#c9a87c] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <svg
                  class="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#about"
                class="px-8 py-4 border-2 border-[#c9a87c] text-navy font-medium tracking-wide uppercase hover:bg-[#c9a87c] transition-all duration-300 text-center"
              >
                Learn More
              </a>
            </div>

            <!-- Stats -->
            <div
              class="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-champagne"
            >
              <div>
                <p class="font-serif text-3xl lg:text-4xl font-semibold">15+</p>
                <p class="text-sm text-gray-500 mt-1">Years Experience</p>
              </div>
              <div>
                <p class="font-serif text-3xl lg:text-4xl font-semibold">
                  500+
                </p>
                <p class="text-sm text-gray-500 mt-1">Cases Won</p>
              </div>
              <div>
                <p class="font-serif text-3xl lg:text-4xl font-semibold">98%</p>
                <p class="text-sm text-gray-500 mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <!-- Image -->
          <div class="order-1 lg:order-2">
            <div class="relative">
              <!-- Decorative frame -->
              <div
                class="absolute -top-4 -right-4 w-full h-full border-2 border-[#c9a87c] pointer-events-none"
              ></div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop&crop=face"
                alt="Eva karen - Attorney at Law"
                class="relative w-full max-w-md mx-auto lg:max-w-none object-cover shadow-2xl"
              />
              <!-- Floating badge -->
              <div
                class="absolute -bottom-6 -left-6 bg-navy text-white p-6 shadow-xl"
              >
                <p class="font-serif text-2xl font-semibold">Top Rated</p>
                <p class="text-sm text-white/80">Family Law Attorney</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-10 lg:py-32 bg-cream">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Image -->
          <div class="relative">
            <div
              class="absolute -top-6 -left-6 w-full h-full bg-champagne-light"
            ></div>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
              alt="Victoria Hayes Law Office"
              class="relative w-full object-cover shadow-xl"
            />
          </div>

          <!-- Content -->
          <div>
            <span
              class="text-sm font-medium tracking-widest uppercase text-[#c9a87c] mb-4 block"
              >About Me</span
            >
            <h2
              class="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6"
            >
              A Passion for Justice,<br />
              <span class="text-[#c9a87c]">A Heart for People</span>
            </h2>

            <p class="text-gray-600 leading-relaxed mb-6">
              I believe every client deserves an attorney who truly listens and
              cares. After witnessing how the legal system can overwhelm
              families during difficult times, I dedicated my career to
              providing personalized, compassionate representation.
            </p>

            <p class="text-gray-600 leading-relaxed mb-8">
              My approach combines aggressive advocacy with genuine empathy. I
              take the time to understand your unique situation, explain your
              options clearly, and develop strategies tailored to your goals.
              Together, we'll navigate the complexities of the law while keeping
              your family's best interests at heart.
            </p>

            <!-- Credentials -->
            <div class="space-y-4">
              <div class="flex items-start gap-4 p-4 bg-cream-dark rounded">
                <div class="p-3 bg-[#c9a87c]-light rounded shrink-0">
                  <svg
                    class="w-5 h-5 text-[#c9a87c]-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Harvard Law Graduate</h3>
                  <p class="text-sm text-gray-500">Juris Doctor with honors</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-cream-dark rounded">
                <div class="p-3 bg-[#c9a87c]-light rounded shrink-0">
                  <svg
                    class="w-5 h-5 text-[#c9a87c]-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">State Bar Certified</h3>
                  <p class="text-sm text-gray-500">
                    Licensed in New York & California
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-cream-dark rounded">
                <div class="p-3 bg-[#c9a87c]-light rounded shrink-0">
                  <svg
                    class="w-5 h-5 text-[#c9a87c]-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Pro Bono Champion</h3>
                  <p class="text-sm text-gray-500">
                    500+ volunteer hours annually
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Templates section-->
    <section id="templates" class="py-20 bg-background">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-bold mb-4">Legal Templates</h2>
        <p class="text-muted mb-10 max-w-2xl">
          Ready-to-use legal documents to protect your website and business.
          Preview and download instantly.
        </p>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(template, key) in templates"
            :key="key"
            @click="openModal(template)"
            class="cursor-pointer bg-surface border border-border rounded-xl p-6 hover:border-[#c9a87c] hover:shadow-xl transition-all duration-300"
          >
            <h3 class="text-xl font-semibold mb-2">{{ template.title }}</h3>
            <p class="text-muted text-sm mb-4">{{ template.description }}</p>
            <div class="text-black hover:text-[#c9a87c] text-sm font-mono flex gap-2 items-center"
              >Preview & Download

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <Dialog
        v-model:open="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center"
      >
        <DialogOverlay class="fixed inset-0 bg-black/60" />

        <div
          class="bg-white max-w-3xl w-full mx-6 rounded-xl shadow-xl relative z-10"
        >
          <div
            class="flex justify-between items-center p-6 border-b border-border"
          >
            <DialogTitle class="text-xl font-semibold">{{
              activeTemplate.title
            }}</DialogTitle>
            <button
              @click="isOpen = false"
              class="text-muted hover:text-foreground cursor-pointer hover:bg-[#e8dcc8] p-1 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="overflow-y-scroll max-h-[70vh] min-w-full">
            <div
              class="p-6 h-100 sm:h-225 overflow-y-auto text-sm text-muted bg-[url('/Privacy.png')]   bg-contain md:bg-cover bg-center bg-no-repeat min-w-full"
            ></div>
          </div>

          <div class="p-6 border-t border-border flex justify-end gap-4">
            <button
              @click="isOpen = false"
              class="px-4 py-2 rounded-lg border border-border text-muted hover:text-foreground cursor-pointer hover:text-white hover:bg-[#c9a87c]"
            >
              Close
            </button>
            <a
              :href="activeTemplate.file"
              download
              class="px-5 py-2 bg-[#1e293b] text-white text-sm font-medium tracking-wide uppercase hover:bg-[#c9a87c] transition-colors duration-300 flex items-center"
            >
              Download
            </a>
          </div>
        </div>
      </Dialog>
    </section>

    <!-- Practice Areas Section -->
    <section
      id="practice"
      class="py-10 bg-gradient-to-b from-cream to-cream-dark"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span
            class="text-sm font-medium tracking-widest uppercase text-[#c9a87c] mb-4 block"
            >Practice Areas</span
          >
          <h2
            class="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6"
          >
            Legal Services <span class="text-[#c9a87c]">Tailored</span> to Your
            Needs
          </h2>
          <p class="text-gray-600">
            Comprehensive legal solutions designed with your unique
            circumstances in mind. Each case receives personalized attention and
            strategic planning.
          </p>
        </div>

        <!-- Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Family Law -->
          <div
            class="group p-8 bg-cream rounded border border-champagne-light hover:border-[#c9a87c] hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-[#c9a87c]-light rounded flex items-center justify-center mb-6 group-hover:bg-[#c9a87c] transition-colors duration-300"
            >
              <svg
                class="w-6 h-6 text-[#c9a87c]-dark group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 class="font-serif text-xl font-semibold mb-3">Family Law</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Divorce, child custody, support agreements, and adoption
              proceedings handled with care and discretion.
            </p>
          </div>

          <!-- Estate Planning -->
          <div
            class="group p-8 bg-cream rounded border border-champagne-light hover:border-[#c9a87c] hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-[#c9a87c]-light rounded flex items-center justify-center mb-6 group-hover:bg-[#c9a87c] transition-colors duration-300"
            >
              <svg
                class="w-6 h-6 text-[#c9a87c]-dark group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h3 class="font-serif text-xl font-semibold mb-3">
              Estate Planning
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Wills, trusts, and estate administration to protect your family's
              future and legacy.
            </p>
          </div>

          <!-- Mediation -->
          <div
            class="group p-8 bg-cream rounded border border-champagne-light hover:border-[#c9a87c] hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-[#c9a87c]-light rounded flex items-center justify-center mb-6 group-hover:bg-[#c9a87c] transition-colors duration-300"
            >
              <svg
                class="w-6 h-6 text-[#c9a87c]-dark group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 class="font-serif text-xl font-semibold mb-3">
              Mediation Services
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Alternative dispute resolution for amicable settlements without
              costly litigation.
            </p>
          </div>

          <!-- Business Formation -->
          <div
            class="group p-8 bg-cream rounded border border-champagne-light hover:border-[#c9a87c] hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-[#c9a87c]-light rounded flex items-center justify-center mb-6 group-hover:bg-[#c9a87c] transition-colors duration-300"
            >
              <svg
                class="w-6 h-6 text-[#c9a87c]-dark group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="font-serif text-xl font-semibold mb-3">
              Business Formation
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Legal guidance for entrepreneurs launching and protecting their
              business ventures.
            </p>
          </div>

          <!-- Personal Injury -->
          <div
            class="group p-8 bg-cream rounded border border-champagne-light hover:border-[#c9a87c] hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-[#c9a87c]-light rounded flex items-center justify-center mb-6 group-hover:bg-[#c9a87c] transition-colors duration-300"
            >
              <svg
                class="w-6 h-6 text-[#c9a87c]-dark group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 class="font-serif text-xl font-semibold mb-3">
              Personal Injury
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Compassionate representation for accident victims seeking fair
              compensation.
            </p>
          </div>

          <!-- Civil Litigation -->
          <div
            class="group p-8 bg-cream rounded border border-champagne-light hover:border-[#c9a87c] hover:shadow-xl transition-all duration-300"
          >
            <div
              class="w-14 h-14 bg-[#c9a87c]-light rounded flex items-center justify-center mb-6 group-hover:bg-[#c9a87c] transition-colors duration-300"
            >
              <svg
                class="w-6 h-6 text-[#c9a87c]-dark group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <h3 class="font-serif text-xl font-semibold mb-3">
              Civil Litigation
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Strategic advocacy in complex civil disputes and contract matters.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-10 lg:py-32 bg-navy">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span
            class="text-sm font-medium tracking-widest uppercase text-[#c9a87c] mb-4 block"
            >Client Stories</span
          >
          <h2
            class="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6"
          >
            What My Clients <span class="text-[#c9a87c]">Say</span>
          </h2>
          <p class="text-white/70">
            Real stories from real clients who trusted me with their most
            important legal matters.
          </p>
        </div>

        <!-- Testimonials Grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div
            class="bg-white/10 backdrop-blur-sm p-8 rounded border border-white/20 hover:border-[#c9a87c]/50 transition-colors"
          >
            <svg
              class="w-10 h-10 text-[#c9a87c] mb-6 opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
              />
            </svg>

            <!-- Rating -->
            <div class="flex gap-1 mb-4">
              <svg
                class="w-4 h-4 fill-[#c9a87c] text-[#c9a87c]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#c9a87c] text-[#c9a87c]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#c9a87c] text-[#c9a87c]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#c9a87c] text-[#c9a87c]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#c9a87c] text-[#c9a87c]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>

            <p class="text-white/90 leading-relaxed mb-6 italic">
              "Eva guided me through the most difficult time of my life with
              grace and strength. Her compassion and expertise made all the
              difference in my custody case. I couldn't have asked for a better
              advocate."
            </p>

            <div class="border-t border-white/20 pt-4">
              <p class="font-semibold text-white">Sarah Mitchell</p>
              <p class="text-sm text-[#c9a87c]">Family Law Client</p>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div
            class="bg-white/10 backdrop-blur-sm p-8 rounded border border-white/20 hover:border-[#c9a87c]/50 transition-colors"
          >
            <svg
              class="w-10 h-10 text-[#c9a87c] mb-6 opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
              />
            </svg>

            <div class="flex gap-1 mb-4">
              <svg
                class="w-4 h-4 fill-[#c9a87c] text-[#c9a87c]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#c9a87c] text-[#c9a87c]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#c9a87c] text-[#c9a87c]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#c9a87c] text-[#c9a87c]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#c9a87c] text-[#c9a87c]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>

            <p class="text-white/90 leading-relaxed mb-6 italic">
              "Working with Eva on our family trust was a wonderful experience.
              She explained everything clearly and made sure we understood every
              decision. Her attention to detail gave us peace of mind."
            </p>

            <div class="border-t border-white/20 pt-4">
              <p class="font-semibold text-white">Jennifer Adams</p>
              <p class="text-sm text-[#c9a87c]">Estate Planning Client</p>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div
            class="bg-white/10 backdrop-blur-sm p-8 rounded border border-white/20 hover:border-[#c9a87c]/50 transition-colors"
          >
            <svg
              class="w-10 h-10 text-[#c9a87c] mb-6 opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
              />
            </svg>

            <div class="flex gap-1 mb-4">
              <svg
                class="w-4 h-4 fill-[#c9a87c] text-[#c9a87c]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#c9a87c] text-[#c9a87c]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#c9a87c] text-[#c9a87c]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#c9a87c] text-[#c9a87c]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <svg
                class="w-4 h-4 fill-[#c9a87c] text-[#c9a87c]"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>

            <p class="text-white/90 leading-relaxed mb-6 italic">
              "Eva made our dream of adoption a reality. Her dedication and
              thorough preparation helped us navigate a complex process. We're
              forever grateful for her support during this life-changing
              journey."
            </p>

            <div class="border-t border-white/20 pt-4">
              <p class="font-semibold text-white">Michael & Lisa Thompson</p>
              <p class="text-sm text-[#c9a87c]">Adoption Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-10 lg:py-32 bg-cream">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span
            class="text-sm font-medium tracking-widest uppercase text-[#c9a87c] mb-4 block"
            >Get in Touch</span
          >
          <h2
            class="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6"
          >
            Schedule Your <span class="text-[#c9a87c]">Free Consultation</span>
          </h2>
          <p class="text-gray-600">
            Take the first step toward resolving your legal matters. I offer a
            complimentary initial consultation to discuss your case.
          </p>
        </div>

        <div class="grid lg:grid-cols-5 gap-12">
          <!-- Contact Info -->
          <div class="lg:col-span-2 space-y-6">
            <div class="flex items-start gap-4 p-4 bg-cream-dark rounded">
              <div class="p-3 bg-[#c9a87c]-light rounded shrink-0">
                <svg
                  class="w-5 h-5 text-[#c9a87c]-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold mb-1">Office Location</h3>
                <p class="text-sm text-gray-600">
                  123 Madison Avenue, Suite 500<br />New York, NY 10016
                </p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 bg-cream-dark rounded">
              <div class="p-3 bg-[#c9a87c]-light rounded shrink-0">
                <svg
                  class="w-5 h-5 text-[#c9a87c]-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold mb-1">Phone Number</h3>
                <p class="text-sm text-gray-600">(212) 555-0123</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 bg-cream-dark rounded">
              <div class="p-3 bg-[#c9a87c]-light rounded shrink-0">
                <svg
                  class="w-5 h-5 text-[#c9a87c]-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold mb-1">Email Address</h3>
                <p class="text-sm text-gray-600">Evakaren@law.com</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-4 bg-cream-dark rounded">
              <div class="p-3 bg-[#c9a87c]-light rounded shrink-0">
                <svg
                  class="w-5 h-5 text-[#c9a87c]-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold mb-1">Office Hours</h3>
                <p class="text-sm text-gray-600">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: By Appointment
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-3">
            <form
              id="contact-form"
              class="bg-white p-8 rounded border border-champagne-light shadow-lg"
            >
              <div class="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="name" class="block text-sm font-medium mb-2"
                    >Full Name *</label
                  >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    class="w-full px-4 py-3 bg-cream border border-champagne-light rounded focus:outline-none focus:border-[#c9a87c] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium mb-2"
                    >Email Address *</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    class="w-full px-4 py-3 bg-cream border border-champagne-light rounded focus:outline-none focus:border-[#c9a87c] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label for="phone" class="block text-sm font-medium mb-2"
                    >Phone Number</label
                  >
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="w-full px-4 py-3 bg-cream border border-champagne-light rounded focus:outline-none focus:border-[#c9a87c] transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label for="subject" class="block text-sm font-medium mb-2"
                    >Subject *</label
                  >
                  <select
                    id="subject"
                    name="subject"
                    required
                    class="w-full px-4 py-3 bg-cream border border-champagne-light rounded focus:outline-none focus:border-[#c9a87c] transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="family-law">Family Law</option>
                    <option value="estate-planning">Estate Planning</option>
                    <option value="mediation">Mediation Services</option>
                    <option value="business">Business Formation</option>
                    <option value="personal-injury">Personal Injury</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div class="mb-6">
                <label for="message" class="block text-sm font-medium mb-2"
                  >Your Message *</label
                >
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 bg-cream border border-champagne-light rounded focus:outline-none focus:border-[#c9a87c] transition-colors resize-none"
                  placeholder="Please describe your legal matter..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="cursor-pointer w-full sm:w-auto px-8 py-4 bg-[#1e293b] text-white font-medium tracking-wide uppercase hover:bg-[#c9a87c] transition-colors duration-300 flex items-center justify-center gap-2 rounded"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-navy py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-12 mb-12">
          <!-- Brand -->
          <div class="md:col-span-2">
            <div class="flex items-center gap-2 mb-4">
              <svg
                class="w-6 h-6 text-[#c9a87c]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
              <span class="font-serif text-2xl font-semibold text-white">
                Eva <span class="text-[#c9a87c]">Karen</span>
              </span>
            </div>
            <p class="text-white/70 text-sm leading-relaxed max-w-md mb-6">
              Providing compassionate and strategic legal representation for
              families and individuals in New York. Your trusted advocate in
              times of need.
            </p>
            <p class="text-xs text-white/50">
              Attorney Advertising. Prior results do not guarantee a similar
              outcome.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-serif text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul class="space-y-2">
              <li>
                <a
                  href="#home"
                  class="text-sm text-white/70 hover:text-[#c9a87c] transition-colors"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="#about"
                  class="text-sm text-white/70 hover:text-[#c9a87c] transition-colors"
                  >About</a
                >
              </li>
              <li>
                <a
                  href="#practice"
                  class="text-sm text-white/70 hover:text-[#c9a87c] transition-colors"
                  >Practice Areas</a
                >
              </li>
              <li>
                <a
                  href="#testimonials"
                  class="text-sm text-white/70 hover:text-[#c9a87c] transition-colors"
                  >Testimonials</a
                >
              </li>
              <li>
                <a
                  href="#contact"
                  class="text-sm text-white/70 hover:text-[#c9a87c] transition-colors"
                  >Contact</a
                >
              </li>
            </ul>
          </div>

          <!-- Practice Areas -->
          <div>
            <h4 class="font-serif text-lg font-semibold text-white mb-4">
              Practice Areas
            </h4>
            <ul class="space-y-2">
              <li>
                <a
                  href="#practice"
                  class="text-sm text-white/70 hover:text-[#c9a87c] transition-colors"
                  >Family Law</a
                >
              </li>
              <li>
                <a
                  href="#practice"
                  class="text-sm text-white/70 hover:text-[#c9a87c] transition-colors"
                  >Estate Planning</a
                >
              </li>
              <li>
                <a
                  href="#practice"
                  class="text-sm text-white/70 hover:text-[#c9a87c] transition-colors"
                  >Mediation</a
                >
              </li>
              <li>
                <a
                  href="#practice"
                  class="text-sm text-white/70 hover:text-[#c9a87c] transition-colors"
                  >Business Law</a
                >
              </li>
              <li>
                <a
                  href="#practice"
                  class="text-sm text-white/70 hover:text-[#c9a87c] transition-colors"
                  >Civil Litigation</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div
          class="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-sm text-white/50">
            © 2025 Eva Karen Law. All rights reserved.
          </p>
          <div class="flex gap-6">
            <a
              href="#"
              class="text-sm text-white/50 hover:text-[#c9a87c] transition-colors"
              >Privacy Policy</a
            >
            <a
              href="#"
              class="text-sm text-white/50 hover:text-[#c9a87c] transition-colors"
              >Terms of Service</a
            >
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogOverlay, DialogTitle } from "@headlessui/vue";

// Mobile menu state
const mobileMenuOpen = ref(false);
const isOpen = ref(false);
const activeTemplate = ref({});

const templates = {
  privacy: {
    title: "Privacy Policy Preview",
    description: "Explains how user data is collected, used, and protected.",
    content: `PRIVACY POLICY

We value your privacy. This policy explains how we collect, use,
and protect your personal information when you use our website.

1. Information We Collect
- Name
- Email address
- Usage data

2. How We Use Information
- To provide and improve our services
- To communicate with users

3. Data Protection
We take reasonable measures to protect your data.`,
    file: "/templates/privacy-policy.txt",
  },
  terms: {
    title: "Terms & Conditions Preview",
    description: "Rules and guidelines for using your website or service.",
    content: `TERMS & CONDITIONS

By using this website, you agree to the following terms and conditions.

1. Use of Website
2. Intellectual Property
3. Limitation of Liability`,
    file: "/templates/terms-and-conditions.txt",
  },
  cookie: {
    title: "Cookie Policy Preview",
    description: "Details how cookies and tracking technologies are used.",
    content: `COOKIE POLICY

This website uses cookies to improve user experience and analytics.

1. What Are Cookies?
2. How We Use Cookies
3. Managing Cookies`,
    file: "/templates/cookie-policy.txt",
  },
};

function openModal(template) {
  activeTemplate.value = template;
  isOpen.value = true;
}

// Navigation links
const navLinks = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#practice", text: "Practice Areas" },
  { href: "#testimonials", text: "Testimonials" },
  { href: "#contact", text: "Contact" },
];

// Form data
const formData = ref({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

// Methods
const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMenu = () => {
  mobileMenuOpen.value = false;
};

const handleSubmit = () => {
  alert("Thank you for your message! I will get back to you within 24 hours.");
  formData.value = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
};
</script>

<style>
/* Custom color definitions */
.text-cream {
  color: #fdfbf7;
}
.bg-cream {
  background-color: #fdfbf7;
}
.border-cream {
  border-color: #fdfbf7;
}

.text-cream-dark {
  color: #f7f3ed;
}
.bg-cream-dark {
  background-color: #f7f3ed;
}
.border-cream-dark {
  border-color: #f7f3ed;
}

.text-navy {
  color: #1e293b;
}
.bg-navy {
  background-color: #1e293b;
}
.border-navy {
  border-color: #1e293b;
}

.text-navy-dark {
  color: #0f172a;
}
.bg-navy-dark {
  background-color: #0f172a;
}
.border-navy-dark {
  border-color: #0f172a;
}

.text-rose-gold {
  color: #c9a87c;
}
.bg-rose-gold {
  background-color: #c9a87c;
}
.border-rose-gold {
  border-color: #c9a87c;
}

.text-rose-gold-light {
  color: #e8dcc8;
}
.bg-rose-gold-light {
  background-color: #e8dcc8;
}
.border-rose-gold-light {
  border-color: #e8dcc8;
}

.text-rose-gold-dark {
  color: #a68a5b;
}
.bg-rose-gold-dark {
  background-color: #a68a5b;
}
.border-rose-gold-dark {
  border-color: #a68a5b;
}

.text-champagne {
  color: #d4c4a8;
}
.bg-champagne {
  background-color: #d4c4a8;
}
.border-champagne {
  border-color: #d4c4a8;
}

.text-champagne-light {
  color: #efe9dd;
}
.bg-champagne-light {
  background-color: #efe9dd;
}
.border-champagne-light {
  border-color: #efe9dd;
}

/* Animation classes */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
