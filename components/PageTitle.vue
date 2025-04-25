<template>
    <div class="text-center">
        <h1 class="text-4xl lg:text-5xl font-bold whitespace-pre-line mb-4" :class="[
            isWhite ? ' text-white' : ' text-black',
            isIrohakaku ? 'irohakaku' : 'noto-sans-jp',
        ]">
            {{ title }}
        </h1>
        <p class="text-base lg:text-lg" :class="[isWhite ? ' text-white' : ' text-black']">
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