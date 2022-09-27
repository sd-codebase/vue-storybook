<script>
import Avatar from '../Avatar/Avatar.vue';

export default {
  props: ['users', 'size', 'variant'],
  methods: {
    getVisibleUsers() {
      return this.users.slice(0,2);
    },
  },
  computed: {
    extraCount() {
      return this.users.length - 2;
    }
  },
  components: {Avatar},
}
</script>

<template>
  <div class="avatar-group">
    <Avatar
      v-for="(user, index) in getVisibleUsers()"
      :key="index"
      :size="size"
      :variant="variant"
      :isGrouped="true"
      :user="user">
    </Avatar>

    <Avatar
      v-if="extraCount > 0"
      :size="size"
      :variant="variant"
      :isGrouped="true"
      :extraCount="extraCount">
    </Avatar>
  </div>
</template>

<style lang="scss" scoped>
  .avatar-group {
    display: flex;
  }
</style>
