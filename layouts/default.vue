<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt PRJ</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                    <!-- если использовать элемент <a>, то отправится новый запрос на сервер, который пререндерить about-page и отправит ее браузеру, но т.к. мы хотим, чтобы сайт вел себя как SPA, то отправлять доп запросы не надо-->
                    <li><NuxtLink to="/products/abc">abc product</NuxtLink></li>
                    <!--эта ссылка должна ошибку выдать-->
                </ul>
            </nav>
        </header>
       <!--output the page content-->
       <div class="container mx-auto p-4">
            <slot></slot>
       </div>
    </div>
</template>
<style>
.router-link-exact-active{
    color: #12b488;
}
</style>