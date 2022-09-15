<script>
import SubText from './SubText.vue';
export default {
  components: { SubText },
  props: ['size', 'variant', 'text'],
}
</script>

<template>
    <div :class="[size, variant, 'root']">
        <h5>{{text}}</h5>
        <SubText :size="size" :variant="variant" :subtext="'Small Subtext'"></SubText>
    </div>
</template>

<style lang="scss" scoped>
  .root {
    h5 {
      color: var(--vs-color-heading-5);
      font-size: var(--vs-font-size-heading-5);
    }
  }

  .medium {
    --vs-font-size-heading-5: 1.5rem;
  }

  .large {
    --vs-font-size-heading-5: 2.5rem;
  }

  .red {
    --vs-color-heading-5: var(--vs-color-red);
  }

  .blue {
    --vs-color-heading-5: var(--vs-color-blue);
  }
</style>