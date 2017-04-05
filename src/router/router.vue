<template>
    <div id="app">
        <script src="//unpkg.com/vue/dist/vue.js"></script>
        <script src="//unpkg.com/vue-router/dist/vue-router.js"></script>
        <p>
            <router-link to="/user/foo">/user/foo</router-link>
            <router-link to="/user/bar">/user/bar</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>