<template>
      <div class="whitepaper-layout">
        <!-- Main Layout -->
        <div class="main-content">
          <!-- Sidebar (Left) -->
          <aside class="sidebar">
            <ul>
              <li
                v-for="section in sections"
                :key="section.id"
                :class="{ active: activeSection === section.id }"
                @click="changeSection(section.id)"
              >
                {{ section.title }}
              </li>
            </ul>
          </aside>
    
          <!-- Main Content -->
          <div class="content">
  
            <transition
  name="fade-slide"
>
  <MarkdownRenderer
    :fileName="activeSection"
    @rendered="generateTOC"
    :key="activeSection"
  />
</transition>


  <!-- Navigation Buttons -->
  <div class="navigation-buttons">
  <!-- Previous Button -->
  <button
    class="button prev"
    :class="{ 'is-hidden': !previousSection }"
    @click="changeSection(previousSection?.id)"
  >
    <span class="arrow"><img src="/src/assets/icons/prev.svg" alt="arrow"></span>
    <small>Previous</small>
    <span>{{ previousSection?.title }}</span>
  </button>

  <!-- Next Button -->
  <button
    class="button next"
    :class="{ 'is-hidden': !nextSection }"
    @click="changeSection(nextSection?.id)"
  >
    <small>Next</small>
    <span>{{ nextSection?.title }}</span>
    <span class="arrow"><img src="/src/assets/icons/next.svg" alt="arrow"></span>
  </button>
</div>



          </div>
          <!-- Right Sidebar -->
          <aside class="right-sidebar">
            <ul>
              <li
                v-for="cue in toc"
                :key="cue.id"
                @click="scrollToHeading(cue.id)"
              >
                {{ cue.text }}
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </template>
    
    <script>
    import MarkdownRenderer from "@/components/MarkdownRenderer.vue";
    
    export default {
      components: {
        MarkdownRenderer,
      },
      data() {
            return {
    activeSection: "welcome",
    delayedPreviousSection: null,
    delayedNextSection: null,
    sections: [
      { id: "welcome", title: "Welcome" },
      { id: "executive-summary", title: "Executive Summary" },
      { id: "core-features", title: "Core Features" },
      { id: "architecture", title: "Architecture" },
    ],
    toc: [],
  };
},
computed: {
  previousSection() {
    const currentIndex = this.sections.findIndex(
      (section) => section.id === this.activeSection
    );
    return currentIndex > 0 ? this.sections[currentIndex - 1] : null;
  },
  nextSection() {
    const currentIndex = this.sections.findIndex(
      (section) => section.id === this.activeSection
    );
    return currentIndex < this.sections.length - 1
      ? this.sections[currentIndex + 1]
      : null;
  },
},
watch: {
  previousSection(newVal) {
    this.updateDelayedSections("previous", newVal);
  },
  nextSection(newVal) {
    this.updateDelayedSections("next", newVal);
  },
},
methods: {
  changeSection(sectionId) {
    this.activeSection = sectionId;
    this.toc = [];
    this.scrollToTop();
  },
  scrollToTop() {
    const contentElement = document.querySelector(".content");
    if (contentElement) {
      contentElement.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll animation
      });
    }
      },updateDelayedSections(type, value) {
    setTimeout(() => {
      if (type === "previous") this.delayedPreviousSection = value;
      if (type === "next") this.delayedNextSection = value;
    }, 600);
  },

  
        generateTOC() {
          const headings = document.querySelectorAll(".content h2, .content h3");
    
          // Ensure unique IDs and populate TOC
          this.toc = Array.from(headings).map((heading, index) => {
            if (!heading.id) {
              heading.id = `heading-${index}`; // Assign a unique ID if missing
            }
            return {
              id: heading.id,
              text: heading.textContent,
            };
          });
        },
        scrollToHeading(id) {
          const target = document.getElementById(id);
          if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        },
      },
    };
    </script>
    
    <style scoped>
    .whitepaper-layout {
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
    }
    
    .main-content {
      display: flex;
      flex: 1;
      color: white;
      overflow: hidden;
      background: linear-gradient(90deg, #08090cda, rgba(29, 37, 55, 0.913), #08090cd8),
                  url('@/assets/webp/daomission.webp') no-repeat center center;
      background-size: cover; /* Ensure the image covers the area */
      background-blend-mode: normal; /* Use normal blend */
      opacity: 0.8;
      }

    
    .sidebar {
      position: fixed;
      left: 0;
      width: 15%;
      height: 100vh;
      background: linear-gradient(90deg, #121725f8, #1d263cf8, #121725f8),
                  url('@/assets/webp/hero.webp') no-repeat center center;
      background-size: cover; /* Ensure the image covers the area */
      background-blend-mode: normal; /* Use normal blend */

      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center; /* Center horizontally */
      border-right: 1px solid #3a3a3a;
      }
    
    .sidebar ul {
      font-size: .9rem;
      justify-content: center;
      align-items: center;
      margin-top: 5rem;
      list-style: none;
      padding: 0;
    }
    
    .sidebar li {
      cursor: pointer;
      margin-bottom: 1rem;
    }
    
    .sidebar li.active {
      font-weight: bold;
      color: #00c3ff;
    }
    
    /* Content */
    .content {
      flex: 1;
      margin-left: 15%;
      margin-right: 12%;
      padding: 4.5rem 6rem 6rem;
      overflow-y: auto;
      
    }
    
    /* Right Sidebar */
    .right-sidebar {
      position: fixed;
      right: 0;
      width: 12%;
      height: 100vh;
      background: linear-gradient(90deg, #171d2bf8, #1d2537f8, #171d2bf8),
                  url('@/assets/webp/bg-adventures.webp') no-repeat center center;
      background-size: cover; /* Ensure the image covers the area */
      background-blend-mode: normal; /* Use normal blend */

      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-left: 1px solid #3a3a3a;
      }
    
    .right-sidebar ul {
      font-size: .8rem;
      margin-top: 5rem;
      list-style: none;
      padding: 0;
    }
    
    .right-sidebar li {
      cursor: pointer;
      margin-bottom: 0.75rem;
    }
    
    .right-sidebar li:hover {
      color: #00c3ff;
    }
    
    /* Navigation Buttons */
    .navigation-buttons {
      display: flex;
      justify-content: center; /* Center the buttons horizontally */
      gap: 2rem; /* Add space between the buttons */
      margin-top: 2rem;
    }
    
    .navigation-buttons .button {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  justify-content: center;
  padding: 1rem 2rem;
  border: 1px solid #3a3a3a;
  background: linear-gradient(180deg, #252C3F, #191e2b);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.4s ease, opacity 0.8s ease-in, transform 0.4s ease-out;
  position: relative;
  opacity: 1;
  transform: translateY(0);
}

/* Hidden Buttons */
.navigation-buttons .button.is-hidden {
  opacity: 0;
  pointer-events: none; /* Prevent interactions */
  transition: opacity 0.05s ease-out; /* Separate leave timings */
}

.navigation-buttons .button:hover {
      background: linear-gradient(180deg, #265ef9, #007bff);
}

.navigation-buttons .button.prev {
  align-items: flex-end; /* Align text to the right for previous button */
  text-align: right; /* Ensure text aligns properly */
}

.navigation-buttons .button.small {
  color: #ccc;
}

.navigation-buttons .button span {
  font-size: 1rem;
  font-weight: bold;
  margin-top: .25rem;
}

/* Arrows */
.navigation-buttons .button .arrow {
  position: absolute;
  top: 50%; /* Center vertically */
  transform: translateY(-50%);
}

.navigation-buttons .button.prev .arrow {
  left: 1rem; /* Position the arrow on the far left */
}

.navigation-buttons .button.next .arrow {
  right: 1rem; /* Position the arrow on the far right */
}


.fade-slide-leave-active {
  top: 0;
  left: 0;
  width: 100%;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-active {
  top: 0;
  left: 0;
  width: 100%;
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px); /* Enter from the right and slightly down */
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0); /* Settle into place */
}

.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0); /* Start from its position */
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px); /* Exit to the left and slightly up */
}


    /* Responsive Adjustments */
    @media (max-width: 768px) {
  .sidebar,
  .right-sidebar {
    display: none; /* Hide sidebars on smaller screens */
  }

  .content {
    margin: 0;
    padding: 4.5rem 1rem 1rem;
    width: 100%;
  }

  .navigation-buttons .button {
      padding: 1rem 1rem;
      position: relative;
      }
  
  .navigation-buttons {
    display: flex;
    gap: 1rem;
  }
  
}
    </style>
    