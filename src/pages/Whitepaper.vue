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
            <h2>{{ sections.find(section => section.id === activeSection)?.title }}</h2>
            <MarkdownRenderer :fileName="activeSection" @rendered="generateTOC" />
    
            <!-- Navigation Buttons -->
            <div class="navigation-buttons">
  <button
    v-if="previousSection"
    class="button prev"
    @click="changeSection(previousSection.id)"
  >
  <span class="arrow"><img src="/src/assets/icons/prev.svg" alt="arrow"></span>
  <small>Previous</small>
  <span>{{ previousSection.title }}</span>
    
  </button>
  <button
    v-if="nextSection"
    class="button next"
    @click="changeSection(nextSection.id)"
  >
      <small>Next</small>
    <span>{{ nextSection.title }}</span>
    
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
          activeSection: "welcome", // Default to the first section
          sections: [
            { id: "welcome", title: "Welcome" },
            { id: "executive-summary", title: "Executive Summary" },
            { id: "core-features", title: "Core Features" },
            { id: "architecture", title: "Architecture" },
          ],
          toc: [], // Table of Contents for the right sidebar
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
      methods: {
        changeSection(sectionId) {
          this.activeSection = sectionId;
          this.toc = []; // Reset TOC when switching sections
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
            const headerOffset = 80; // Adjust this value to match your header height
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
      background: linear-gradient(90deg, #08090cda, #1d263cf8, #08090cd8),
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
      background: linear-gradient(to left,
       rgb(26, 37, 47), rgb(16, 24, 31));
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center; /* Center horizontally */
      border-right: 1px solid #3a3a3a;
      }
    
    .sidebar ul {
      font-size: .8rem;
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
      color: #00ffcc;
    }


    
    /* Content */
    .content {
      flex: 1;
      margin-left: 15%;
      margin-right: 10%;
      padding: 4.5rem 8rem 8rem;
      overflow-y: auto;
      
    }
    
    /* Right Sidebar */
    .right-sidebar {
      position: fixed;
      right: 0;
      width: 10%;
      height: 100vh;
      background: linear-gradient(to right,
       rgb(26, 37, 47), rgb(16, 24, 31));
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-left: 1px solid #3a3a3a;
      }
    
    .right-sidebar ul {
      font-size: .7rem;
      margin-top: 4.5rem;
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
      padding: 1rem 2rem; /* Add padding for a better button size */
      border: 1px solid #3a3a3a;
      background: linear-gradient(180deg, #252C3F, #191e2b);

      color: white;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.1s ease;
      position: relative;
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
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: .25rem;
}

/* Arrows */
.navigation-buttons .button .arrow {
  position: absolute;
  font-size: 1.5rem;
  color: white;
  top: 50%; /* Center vertically */
  transform: translateY(-50%);
}

.navigation-buttons .button.prev .arrow {
  left: 1rem; /* Position the arrow on the far left */
}

.navigation-buttons .button.next .arrow {
  right: 1rem; /* Position the arrow on the far right */
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
    