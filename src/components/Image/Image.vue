<script>
export default {
  props: ['imgSrc', 'alt', 'size'],
  methods: {
    getAltText() {
      return this.alt;
    },
    getImageSource() {
      return this.imgSrc;
    },
  }
}
</script>

<template>
  <div class="image-container" :class="[size]">
    <img class="image" :src="imgSrc" :alt="alt"/>
  </div>
</template>

<style lang="scss" scoped>
  .image-container {
    height: var(--vs-image-size);
    width: var(--vs-image-size);

    .image {
      height: 100%;
      width: 100%;
      border-radius: 5px;
      border: 1px solid var(--vs-color-secondary-20);
    }
  }

  .tiny {
    --vs-image-size: 1rem;
  }

  .small {
    --vs-image-size: 1.5rem;
  }

  .medium {
    --vs-image-size: 2rem;
  }

  .large {
    --vs-image-size: 2.5rem;
  }
</style>