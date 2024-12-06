<template>
  <div class="markdown-content" v-html="htmlContent" @click="emitRendered"></div>
</template>

<script>
import MarkdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

export default {
  props: {
    fileName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      htmlContent: "",
    };
  },
  mounted() {
    this.loadMarkdown(this.$i18n.locale);
  },
  watch: {
    fileName: "reloadMarkdown",
    "$i18n.locale": "reloadMarkdown",
  },
  methods: {
    reloadMarkdown() {
      this.loadMarkdown(this.$i18n.locale);
    },
    async loadMarkdown(lang) {
      try {
        const content = await import(`@/assets/markdown/${lang}/${this.fileName}.md?raw`);
        this.htmlContent = this.renderMarkdown(content.default);
        this.$nextTick(() => this.emitRendered());
      } catch (error) {
        console.error(`Failed to load markdown for ${lang}/${this.fileName}`, error);
        this.htmlContent = "<p>Content not available in this language.</p>";
      }
    },
    renderMarkdown(content) {
      const md = new MarkdownIt().use(markdownItAnchor, {
        slugify: (s) =>
          s
            .trim()
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-"),
        level: [2, 3],
      });

      // Override default image renderer to resolve Vite asset paths
      const defaultImageRender =
        md.renderer.rules.image ||
        function (tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options);
        };

      md.renderer.rules.image = function (tokens, idx, options, env, self) {
        const token = tokens[idx];
        const srcIndex = token.attrIndex("src");
        if (srcIndex >= 0) {
          const src = token.attrs[srcIndex][1];
          // Resolve the image path using Vite's asset handling
          token.attrs[srcIndex][1] = new URL(`../assets/webp/${src}`, import.meta.url).href;
        }
        return defaultImageRender(tokens, idx, options, env, self);
      };

      // Override default link renderer to add target="_blank" and rel="noopener noreferrer"
      const defaultLinkRender =
        md.renderer.rules.link_open ||
        function (tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options);
        };

      md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
        const token = tokens[idx];
        token.attrPush(["target", "_blank"]); // Add target="_blank"
        token.attrPush(["rel", "noopener noreferrer"]); // Add rel for security
        return defaultLinkRender(tokens, idx, options, env, self);
      };

      return md.render(content);
    },
    emitRendered() {
      this.$emit("rendered");
    },
  },
};
</script>

<style scoped>
</style>
