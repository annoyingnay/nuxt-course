<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products" :key="p.id">
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    //фетчим товары
    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'Nuxt PRJ | Products',
        meta: [
            {name: 'description', content: 'Products'}
        ]
    })
</script>

<style scoped>

</style>