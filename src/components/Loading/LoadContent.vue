<template>
    <div class="loading">
        Loading content...
    </div>
</template>

<script>
export default {

}
</script>

<style>
.loading {
    color: #FFFFFF;
    animation: blink 2s infinite;
}

@keyframes blink {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>