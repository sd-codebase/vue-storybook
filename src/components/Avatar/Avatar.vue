<script>
export default {
  props: ['user', 'size', 'variant', 'isGrouped', 'extraCount'],
  methods: {
    getAccessibleName() {
      return `Avatar image of ${this.user.name}`;
    },
    getInitials() {
      return this.user.name.trim()[0].toUpperCase();
    }
  }
}
</script>

<template>
  <div class="avatar-container" :class="[size, variant, `${isGrouped && 'group-item'}`, `${(!user || !user.imgSrc) && 'has-text'}`]">
    <div class="avatar-extra" v-if="extraCount">+{{extraCount}}</div>
    <div class="avatar-text" v-if="(!user || !user.imgSrc) && !extraCount">{{getInitials()}}</div>
    <img :src="user.imgSrc" :alt="getAccessibleName()" class="avatar-image" v-if="user && user.imgSrc"/>
  </div>
</template>

<style lang="scss" scoped>
  .avatar-container {
    height: var(--vs-avatar-image-size);
    width: var(--vs-avatar-image-size);

    &.has-text {
      border-radius: 50%;
      background-color: var(--vs-avatar-bg-color);
      display: flex;
      justify-content: center;
      align-items: center;

      &.group-item {
        border: 1px solid var(--vs-avatar-border-color);
      }
    }

    &.group-item {
      &:not(:first-child) {
        margin-left: calc(var(--vs-avatar-margin-left) - (var(--vs-avatar-margin-left) * 2));
      }
    }

    &.group-item .avatar-image {
      border: 1px solid var(--vs-avatar-border-color);
    }

    .avatar-image {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }

    .avatar-extra,
    .avatar-text {
      font-family: var(--vs-typography-font-family-primary);
      font-weight: 600;
      font-size: var(--vs-avatar-text-size);
      color: var(--vs-avatar-text-color);
    }

    .avatar-extra {
      font-size: calc(var(--vs-avatar-text-size) - 0.25rem);
    }
  }

  .large {
    --vs-avatar-image-size: 2.5rem;
    --vs-avatar-margin-left: 1rem;
    --vs-avatar-text-size: 1.25em;
  }

  .medium {
    --vs-avatar-image-size: 2rem;
    --vs-avatar-margin-left: 0.75rem;
    --vs-avatar-text-size: 1em;
  }

  .small {
    --vs-avatar-image-size: 1.5rem;
    --vs-avatar-margin-left: 0.5rem;
    --vs-avatar-text-size: 0.875em;
  }

  .tiny {
    --vs-avatar-image-size: 1rem;
    --vs-avatar-margin-left: 0.25rem;
    --vs-avatar-text-size: 0.625em;
  }

  .purple {
    --vs-avatar-border-color: var(--vs-color-neutral-gray-20);
    --vs-avatar-text-color: var(--vs-color-neutral-gray-20);
    --vs-avatar-bg-color: var(--vs-color-primary-100);
  }

  .gray {
    --vs-avatar-border-color: var(--vs-color-neutral-gray-20);
    --vs-avatar-text-color: var(--vs-color-neutral-text-100);
    --vs-avatar-bg-color: var(--vs-color-secondary-20);
  }

  .dark {
    --vs-avatar-border-color: var(--vs-color-primary-100);
    --vs-avatar-text-color: var(--vs-color-primary-100);
    --vs-avatar-bg-color: var(--vs-color-primary-40);
  }
  
</style>