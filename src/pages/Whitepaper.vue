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
          </div>
    
          <!-- Right Sidebar -->
          <aside class="right-sidebar">
            <h3>On This Page</h3>
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
}

.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
  margin-top: 60px; /* Adjust for header */
}

/* Sidebar (Left) */
.sidebar {
  position: relative;
  width: 250px;
  background-color: #1e1e1e;
  color: white;
  padding: 1rem;
  overflow-y: auto;
  flex-shrink: 0;
}

.sidebar ul {
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
  padding: 2rem;
  background-color: #0c1026;
  overflow-y: auto;
}

/* Right Sidebar */
.right-sidebar {
  position: relative;
  width: 200px;
  background-color: #1e1e1e;
  color: white;
  padding: 1rem;
  overflow-y: auto;
  flex-shrink: 0;
}

.right-sidebar h3 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #00ffcc;
}

.right-sidebar ul {
  list-style: none;
  padding: 0;
}

.right-sidebar li {
  cursor: pointer;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.right-sidebar li:hover {
  color: #00c3ff;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    margin-bottom: 1rem;
    padding: 1rem;
  }

  .right-sidebar {
    display: none; /* Hide on smaller screens */
  }

  .content {
    padding: 1rem;
  }
}
</style>
