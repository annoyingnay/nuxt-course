<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit ipsa facere veniam nam voluptas, nihil officiis nemo sapiente libero.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit ipsa facere veniam nam voluptas, nihil officiis nemo sapiente libero.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/GBP')

    //const { data } = await useFetch('/api/nay')

    // const { data } = await useFetch('/api/nay?name=nay', {
    //     method: 'post',
    //     body: {
    //         age: 22
    //     }
    // })

</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }

    p {
        margin: 20px 0;
    }
</style>