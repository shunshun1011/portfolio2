<template>
    <div class="text-center">
        <h1 class="text-4xl lg:text-5xl font-bold whitespace-pre-line mb-4 text-tertiary-900">
            {{ title }}
        </h1>
        <p class="text-2xl lg:text-xl text-tertiary-700">
            {{ subtitle }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        isWhite: {
            type: Boolean,
            required: false,
            default: false,
        },
        isIrohakaku: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
}
</script>
<style lang="scss">
.irohakaku {
    font-family: 'Irohakaku Bold', sans-serif;
}
</style>