<template>
    <div>
        <Head>
            <Title>Nuxt PRJ | {{ product.title }}</Title>
            <Meta name="description" :content="product.description"/>
        </Head>
        <ProductDetails :product="product"/>
    </div>
</template>

<script setup>
    const { id } = useRoute().params //то что в { abc }, должно совпадать с названием файла abc.vue
    const uri = 'https://fakestoreapi.com/products/' + id

    //фетчим товары (тут дату переименовали в продукт)
    const { data: product } = await useFetch(uri, { key: id }) //у меня и без key работает

    if(!product.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Product Not Found',
            fatal: true //без фатала ошибки которые браузер выдает не ловились бы (например, если добавить несуществующую ссылку на сам сайт, то по ней можно было перейти и не получить ошибку на экране (в консоле она все равно выпадает)), а с фаталом мы заставляем наш апп показать страницу ошибки
        })
    }

    definePageMeta({
        layout: 'products'
    })

</script>

<style scoped>

</style>