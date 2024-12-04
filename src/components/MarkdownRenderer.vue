<template>
      <div v-html="htmlContent"></div>
    </template>
    
    <script>
    import { renderMarkdown } from "@/utils/markdown";
    
    export default {
      props: {
        fileName: {
          type: String,
          required: true, // Name of the Markdown file, e.g., 'welcome'
        },
      },
      data() {
        return {
          htmlContent: "", // Rendered HTML content from the Markdown file
        };
      },
      mounted() {
        // Load the Markdown when the component is mounted
        this.loadMarkdown(this.$i18n.locale);
      },
      watch: {
        // Watch for changes in both the fileName and the language
        fileName: "reloadMarkdown",
        "$i18n.locale": "reloadMarkdown",
      },
      methods: {
        reloadMarkdown() {
          this.loadMarkdown(this.$i18n.locale);
        },
        async loadMarkdown(lang) {
          try {
            // Dynamically import the Markdown file
            const content = await import(
              `@/assets/markdown/${lang}/${this.fileName}.md?raw`
            );
            this.htmlContent = renderMarkdown(content.default); // Convert Markdown to HTML
          } catch (error) {
            console.error(`Failed to load markdown for ${lang}/${this.fileName}`, error);
            this.htmlContent = "<p>Content not available in this language.</p>";
          }
        },
      },
    };
    </script>
    <style scoped>
    /* Optional Markdown styles */
    </style>
    