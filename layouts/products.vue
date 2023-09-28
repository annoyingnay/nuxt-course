<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/products" class="font-bold">Nuxt PRJ Products</NuxtLink>
            </nav>
        </header>
       <!--вывод содержимого страниц-->
       <div class="container mx-auto p-4">
            <slot></slot>
       </div>

       <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
            <!-- если использовать элемент <a>, то отправится новый запрос на сервер, который пререндерить about-page и отправит ее браузеру, но т.к. мы хотим, чтобы сайт вел себя как SPA, то отправлять доп запросы не надо-->
        </ul>
       </footer>
    </div>
</template>
<style>
.router-link-exact-active{
    color: #12b488;
}
</style>