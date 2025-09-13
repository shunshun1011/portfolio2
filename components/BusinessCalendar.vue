<template>
    <main>
        <div class="max-w-6xl mx-auto text-center">
            <Calendar :rows="1" :columns="isMobile ? 1 : 3" :is-expanded="true" :attributes="attributes"
                :popover="popoverOptions" :min-date="new Date(2020, 0, 1)" :max-date="new Date(2030, 11, 31)"
                :first-day-of-week="1" />
        </div>
    </main>
</template>

<script setup>
import { Calendar } from 'v-calendar'
import "v-calendar/dist/style.css"

const isMobile = ref(false)
onMounted(() => {
    const check = () => {
        isMobile.value = window.innerWidth < 768
    }
    check()
    window.addEventListener("resize", check)
})

// microCMSからデータ取得
const { data } = await useFetch("/api/postEvents")

const typeColors = {
    holiday: "red",
    event: "blue",
    BusinessTrip: "green",
}

const attributes = computed(() => {
    const result = []

    // 1️⃣ microCMSイベント
    if (data.value) {
        data.value.contents.forEach((item) => {
            const start = new Date(item.startDate)
            const end = item.endDate ? new Date(item.endDate) : start
            result.push({
                key: `event-${item.id}`,
                highlight: {
                    color: typeColors[item.type] || "gray",
                    fillMode: "light",
                },
                dates: { start, end },
                popover: {
                    label: `${item.title}${item.description ? "：" + item.description : ""}`,
                },
            })
        })
    }
    return result
})

// popover表示モードを isMobile に応じて切り替え
const popoverOptions = computed(() => ({
    visibility: isMobile.value ? "click" : "hover",
}))
</script>
