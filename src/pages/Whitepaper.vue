<template>
      <div class="whitepaper-layout animated">
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
  @after-leave="() => { generateTOC(); this.observeSections(); }"
>
  <MarkdownRenderer
    :fileName="activeSection"
    @rendered="generateTOC"
    @navigateToSection="handleNavigateToSection"
    :key="activeSection"
  />
</transition>

<!-- Navigation Buttons -->
<div class="navigation-buttons">
          <!-- Previous Button -->
          <transition name="fade-button">
  <button
    v-if="showPreviousButton"
    class="button prev"
    @click="navigatePrevious"
  >
    <span class="arrow"><img src="/src/assets/icons/prev.svg" alt="arrow"></span>
    <small>Previous</small>
    <span>{{ previousSection?.title }}</span>
  </button>
</transition>

<transition name="fade-button">
  <button
    v-if="showNextButton"
    class="button next"
    @click="navigateNext"
  >
    <small>Next</small>
    <span>{{ nextSection?.title }}</span>
    <span class="arrow"><img src="/src/assets/icons/next.svg" alt="arrow"></span>
  </button>
</transition>

        </div>
          </div>


          <!-- Right Sidebar -->
          <aside class="right-sidebar">
  <transition name="fade-slide-toc">
    <ul v-if="toc.length > 0">
      <li
        v-for="cue in toc"
        :key="cue.id"
        :class="{ active: cue.id === activeHeading }"
        @click="scrollToHeading(cue.id)"
      >
        {{ cue.text }}
      </li>
    </ul>
  </transition>
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
      activeSection: "introduction",
      sections: [
        { id: "introduction", title: "Introduction" },
        { id: "executive-summary", title: "Executive Summary" },
        { id: "core-features", title: "Core Features" },
        { id: "architecture", title: "Architecture" },
      ],
      toc: [],
      activeHeading: null,
      showPreviousButton: false,
      showNextButton: false,
      observer: null,
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
    activeSection() {
      this.updateButtonVisibility();
    },
  },
  methods: {
    changeSection(sectionId) {
      this.activeSection = sectionId;
      this.toc = []; // Reset TOC when switching sections
      this.$nextTick(() => {
      this.generateTOC(); // Generate TOC and re-attach observer
      });
    // Smooth scroll to the top of the content
    const contentElement = this.$el.querySelector('.content');
    if (contentElement) {
      contentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    },
    navigatePrevious() {
      if (this.previousSection) this.changeSection(this.previousSection.id);
    },
    navigateNext() {
      if (this.nextSection) this.changeSection(this.nextSection.id);
    },
    handleNavigateToSection(sectionId) {
    const section = this.sections.find((s) => s.id === sectionId);
    if (section) {
      // Change to a new section
      this.changeSection(sectionId);
    } else {
      // Scroll to heading within the current section
      this.scrollToHeading(sectionId);
    }
  },
    updateButtonVisibility() {
      setTimeout(() => {
        this.showPreviousButton = !!this.previousSection;
      }, 100);
      setTimeout(() => {
        this.showNextButton = !!this.nextSection;
      }, 100);
    },
    generateTOC() {
  this.toc = []; // Clear old TOC entries
  const contentElement = this.$el.querySelector('.content');
  const headings = contentElement.querySelectorAll('h2');
  
  this.toc = Array.from(headings).map((heading, index) => {
    if (!heading.id) heading.id = `heading-${index}`; // Ensure each heading has an ID
    return { id: heading.id, text: heading.textContent };
  });

  // Highlight the first heading if available
  if (this.toc.length > 0) {
    this.activeHeading = this.toc[0].id;
  }

  // Re-attach the observer after generating TOC
  this.$nextTick(() => this.observeSections());
},
  scrollToHeading(id) {
    const contentElement = this.$el.querySelector('.content');
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 80; // Adjust for header
      const targetPosition = target.offsetTop - headerOffset;

      contentElement.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      this.activeHeading = id; // Update the active heading
    }
  },
  observeSections() {
  // Clean up any previous observer
  if (this.observer) {
    this.observer.disconnect();
  }

  const contentElement = this.$el.querySelector('.content');
  if (!contentElement) return;

  const options = {
    root: contentElement,
    rootMargin: "0px",
    threshold: [0.4], // Trigger when 40% of the heading is visible
  };

  // Create a new IntersectionObserver
  this.observer = new IntersectionObserver((entries) => {
    const visibleEntries = entries.filter((entry) => entry.isIntersecting);
    if (visibleEntries.length > 0) {
      // Sort entries by intersection ratio (most visible first)
      visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      this.activeHeading = visibleEntries[0].target.id;
    }
  }, options);

  // Observe all headings in the content
  const headings = contentElement.querySelectorAll('h2');
  headings.forEach((heading) => this.observer.observe(heading));

    // Automatically highlight the first heading if available
    if (headings.length > 0) {
      this.activeHeading = headings[0].id;
    }
  },
},
mounted() {
  this.updateButtonVisibility();
  this.generateTOC();
  this.$nextTick(() => this.observeSections());
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
      background: linear-gradient(90deg, #08090cda, rgba(29, 37, 55, 0.85), #08090cd8),
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
      border-right: 1px solid #3a3a3a3d;
      }
    
    .sidebar ul {
      font-size: .9rem;
      font-weight: bold;
      justify-content: center;
      align-items: center;
      margin-top: 5rem;
      list-style: none;
      padding: 0;
    }
    
    .sidebar li {
  position: relative;
  cursor: pointer;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #ffffff;
  transition: color 0.25s ease-in-out, transform 0.25s ease-in-out, text-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out;
  padding: 0.4rem 1rem; /* Adjust padding for better spacing */
  text-align: left; /* Center the text for a cleaner look */
}

/* Hover Effect for Sidebar Items */
.sidebar li:hover {
  color: #00c3ff; /* Change text color on hover */
  border-bottom: 1px solid #00c3ff; /* Add bottom border */
  border-top: 1px solid #00c3ff; /* Add top border */
  text-shadow: 0px 0px 2px rgba(0, 191, 255, 0.686); /* Add slight glow */
  padding-bottom: 0.5rem; /* Adjust padding to account for border size */
  font-size: .925rem;
  margin-left: .25rem
}

/* Add Orange Lines Animation on Hover */
.sidebar li::before,
.sidebar li::after {
  content: '';
  position: absolute;
  height: 1.5px;
  width: 50%;
  background-color: #ffa200; /* Orange color for the lines */
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  box-shadow: 0px 0px 4px rgba(255, 162, 0, 0.948); /* Subtle shadow effect */
  transform: scaleX(0); /* Start hidden */
}

.sidebar li::before {
  top: -1px; /* Offset top line above text */
  left: -.25rem; /* Adjust horizontal offset */
  transform-origin: left; /* Line grows from the left */
}

.sidebar li::after {
  bottom: -1px; /* Offset bottom line below text */
  right: -.25rem; 
  transform-origin: right; /* Line grows from the right */
}

/* Orange Lines Animate on Hover */
.sidebar li:hover::before,
.sidebar li:hover::after {
  transform: scaleX(1.5); /* Grow the lines */
  box-shadow: 0px 0px 8px rgb(255, 162, 0); /* Add glow to lines */
}

/* Active Sidebar Item */
.sidebar li.active {
  color: #00c3ff;
  font-weight: bold;
  font-size: 1rem;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.88); /* Glow for active state */
  background-color: rgba(255, 255, 255, 0.056); /* Add background for active item */
  border-radius: 8px; /* Rounded corners for background */
  padding: 0.8rem 1rem; /* Maintain consistent padding */
  border-top: 1.5px solid #00c3ff; /* Keep blue border on top */
  border-bottom: 3px solid rgb(255, 162, 0);
  margin-left: -.5rem
}

/* Remove Orange Lines for Active Item */
.sidebar li.active::before,
.sidebar li.active::after {
  display: none; /* Disable orange lines for active state */
}

/* Add smooth transitions */
.sidebar li,
.sidebar li:hover,
.sidebar li.active {
  transition: all 0.3s ease-in-out; /* Smooth transition for all states */
}
    
    /* Content */
    .content {
  flex: 1;
  margin-left: 15%;
  margin-right: 14%;
  padding: 4.5rem 6rem 6rem;
  overflow-y: scroll; /* Keep scroll behavior consistent */
  scroll-behavior: smooth; /* Ensure smooth scrolling */
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

      padding: 0.4rem 0.8rem;
      display: flex;
      flex-direction: column;
      align-items: right;
      border-left: 1px solid #3a3a3a58;
      }
    
    .right-sidebar ul {
      font-size: .8rem;
      font-weight: bold;
      margin-top: 4.5rem;
      list-style: none;
      padding: 0.4rem 0.4rem;
    }
    
    .right-sidebar li {
  position: relative; /* Required for pseudo-elements */
  cursor: pointer;
  margin-bottom: 0.75rem;
  font-weight: bold;
  color: #ffffff;
  transition: color 0.25s ease-in-out, transform 0.25s ease-in-out, text-shadow 0.25s ease-in-out, border-color 0.25s ease-in-out;
  padding: 0.4rem .1rem; /* Adjust padding for better spacing */
  text-align: left; /* Align the text for a cleaner look */
}


.right-sidebar li.active::before {
  content: ''; /* Required for the pseudo-element */
  position: absolute;
  top: 0; /* Align with the top of the list item */
  left: -0.5rem; /* Add extra space to the left */
  right: -0.5rem; /* Add extra space to the right */
  bottom: 0; /* Align with the bottom of the list item */
  border-radius: 8px; /* Make the pseudo-element's background look smooth */
  background-color: rgba(255, 255, 255, 0.1); /* Slightly lighter background to create a halo effect */
  z-index: -1; /* Place the pseudo-element behind the text */
  transition: all 0.3s ease-in-out; /* Smooth transition for hover and state changes */
}

.right-sidebar li:hover {
  color: #00c3ff; /* Change text color on hover */
  border-bottom: 1px solid #00c3ff; /* Add bottom border */
  border-top: 1px solid #00c3ff; /* Add top border */
  text-shadow: 0px 0px 2px rgba(0, 191, 255, 0.686); /* Add slight glow */
  padding-bottom: 0.5rem; /* Adjust padding to account for border size */
  transform: scale(1.05); /* Slight scaling effect */
}

.right-sidebar li::before,
.right-sidebar li::after {
  content: '';
  position: absolute;
  height: 1.5px;
  width: 50%;
  background-color: #ffa200; /* Orange color for the lines */
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  box-shadow: 0px 0px 4px rgba(255, 162, 0, 0.948); /* Subtle shadow effect */
  transform: scaleX(0); /* Start hidden */
}

.right-sidebar li::before {
  top: -1px; /* Offset top line above text */
  left: -0.25rem; /* Adjust horizontal offset */
  transform-origin: left; /* Line grows from the left */
}

.right-sidebar li::after {
  bottom: -1px; /* Offset bottom line below text */
  right: -0.25rem;
  transform-origin: right; /* Line grows from the right */
}

/* Orange Lines Animate on Hover */
.right-sidebar li:hover::before,
.right-sidebar li:hover::after {
  transform: scaleX(1.5); /* Grow the lines */
  box-shadow: 0px 0px 8px rgb(255, 162, 0); /* Add glow to lines */
}

/* Active Right Sidebar Item */
.right-sidebar li.active {
  color: #00c3ff;
  font-weight: bold;
  font-size: .75rem;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.88); /* Glow for active state */
  background-color: rgba(255, 255, 255, 0.056); /* Add background for active item */
  border-radius: 8px; /* Rounded corners for background */
  padding: 0.4rem .5rem; /* Maintain consistent padding */
  border-top: 1.5px solid #00c3ff; /* Keep blue border on top */
  border-bottom: 3px solid rgb(255, 162, 0); /* Orange border on the bottom */
}

/* Remove Orange Lines for Active Item */
.right-sidebar li.active::before,
.right-sidebar li.active::after {
  display: none; /* Disable orange lines for active state */
}

/* Add smooth transitions */
.right-sidebar li,
.right-sidebar li:hover,
.right-sidebar li.active {
  transition: all 0.3s ease-in-out; /* Smooth transition for all states */
}
    /* TOC Fade-Slide Animation */

    .fade-slide-toc-enter-active {
      top: 0;
  left: 0;
  width: 100%;
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);

    }

.fade-slide-toc-leave-active {
  top: 0;
  left: 0;
  width: 100%;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-toc-enter-from {
  opacity: 0;
  transform: translateY(20px); /* Enter from slightly below */
}

.fade-slide-toc-enter-to {
  opacity: 1;
  transform: translateY(0); /* Settle into place */
}

.fade-slide-toc-leave-from {
  opacity: 1;
  transform: translateY(0); /* Start from its current position */
}

.fade-slide-toc-leave-to {
  opacity: 0;
  transform: translateY(-20px); /* Exit slightly above */
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
      padding: 1rem 1rem;
      border: 1px solid #3a3a3a76;
      background: linear-gradient(180deg, #252C3F, #191e2b);
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.1s ease;
      position: relative;
      }

      .navigation-buttons .button:hover {
       background: linear-gradient(180deg, #007bff, #265ef9);
      }

.navigation-buttons .button.prev {
  align-items: flex-end; /* Align text to the right for previous button */
  text-align: right; /* Ensure text aligns properly */
}

.navigation-buttons .button span {
  font-size: 1rem;
  font-weight: bold;
  margin-top: .25rem;
}

.navigation-buttons small {
  color: rgb(176, 176, 176);
}

/* Arrows */
.navigation-buttons .button .arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.navigation-buttons .button.prev .arrow {
  left: 1rem;
}

.navigation-buttons .button.next .arrow {
  right: 1rem;
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


/* Animation Keyframes */
@keyframes slide-in-left {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Page Container Animation */
.animated .whitepaper-layout {
  opacity: 0;
  animation: fade-in 1.2s ease forwards;
}

/* Sidebar Animation */
.animated .sidebar {
  transform: translateX(-100%);
  opacity: 0;
  animation: slide-in-left 0.8s ease forwards;
}

.animated .right-sidebar {
  transform: translateX(100%);
  opacity: 0;
  animation: slide-in-right 0.8s ease forwards 0.2s; /* Add delay for staggered effect */
}

/* Content Animation */
.animated .content {
  opacity: 0;
  transform: translateY(20px);
  animation: fade-in 1s ease forwards 0.4s; /* Slight delay for smoother animation */
}

/* Sidebar Text Animation */
.animated .sidebar ul li,
.animated .right-sidebar ul li {
  opacity: 0;
  transform: translateY(20px);
  animation: fade-in 0.6s ease forwards;
  animation-delay: calc(0.2s + var(--index) * 0.1s); /* Staggered delay for each item */
}

@media (max-width: 1024px) {

  .content {
  margin-left: 15%;
  margin-right: 15%;
  padding: 4.5rem 5rem 5rem;
}

.sidebar {


      padding: 1.5rem;

      }

}

    /* Responsive Adjustments */
    @media (max-width: 768px) {
  .sidebar,
  .right-sidebar {
    display: none; /* Hide sidebars on smaller screens */
  }

  .content {
    margin: 0;
    padding: 4.5rem 2rem 2rem;
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
    