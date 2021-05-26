<template>
    <div class="home">
        <el-container>
            <el-header><Header></Header></el-header>
            <el-main><Main></Main></el-main>
            <el-footer><Footer></Footer></el-footer>
        </el-container>
        <el-backtop></el-backtop>
    </div>
</template>

<script>
import Header from "@/components/Home/Header";
import Main from "@/components/Home/Main";
import Footer from "@/components/Home/Footer";
export default {
    name: "Home",
    components: {Header, Main, Footer},
}
</script>

<style scoped>
    .home {
        height: 100rem;
        width: 100%;
        position: relative;
        min-height: 100%;
        background-color: #E9EEF3;
        display: flex;
        flex-direction: row;
    }
</style>
