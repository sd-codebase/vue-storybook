<script>
    export default {
        props: ['size', 'variant', 'subtext'],
    }
</script>

<template>
    <div :class="[size, variant]">
        <span>{{subtext}}</span>
    </div>
</template>