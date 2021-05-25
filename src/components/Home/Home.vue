<template>
    <div class="home">
        <el-container>
            <el-header>
                <h1 style="margin-right: 2rem">Blog</h1>
                <div class="nav">
                    <el-menu
                        :default-active="activeIndex"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        collapse-transition="true"
                        menu-trigger="hover">
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-submenu index="2" show-timeout="100" hide-timeout="100">
                            <template slot="title">分类</template>
                            <el-menu-item index="2-1">分类1</el-menu-item>
                            <el-menu-item index="2-2">分类2</el-menu-item>
                            <el-menu-item index="2-3">分类3</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3" show-timeout="100" hide-timeout="100">
                            <template slot="title">标签</template>
                            <el-menu-item index="3-1">标签1</el-menu-item>
                            <el-menu-item index="3-2">标签2</el-menu-item>
                            <el-menu-item index="3-3">标签3</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="4">归档</el-menu-item>
                    </el-menu>
                </div>
                <div class="login">
                    <el-avatar size="large" :src="circleUrl" @click.native="drawer=true"></el-avatar>
                </div>
                <div class="search">
                    <el-input
                        placeholder="请输入内容"
                        v-model="input4">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </div>
            </el-header>
            <el-main>
                <el-row :gutter="10" type="flex" justify="center">
                    <el-col :xs="100" :sm="90" :md="90" :lg="90" :xl="90">
                        <div class="grid-content bg-purple" style="background-color: green">

                        </div>
                    </el-col>
                    <el-col :xs="0" :sm="10" :md="10" :lg="10" :xl="10">
                        <div class="grid-content bg-purple-light" style="background-color: red">

                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <el-footer height="300px">
                <div class="info">
                    <div class="info-block">1</div>
                    <hr class="divide-line">
                    <div class="info-block">2</div>
                    <hr class="divide-line">
                    <div class="info-block">
                        <h3>联系我</h3>
                        <div style="margin-bottom: 10px"> 邮箱: {{info.email}}</div>
                        <div> QQ: {{info.qq}} </div>
                    </div>
                    <hr class="divide-line">
                    <div class="info-block">
                        <h3>关于我</h3>
                        <div style="margin: 10px"> {{info.intro}} </div>
                    </div>
                </div>
                <el-divider direction="horizontal"></el-divider>
                <div class="copyright">
                    Copyright©2016-2021 Designed by Nick
                </div>
            </el-footer>
        </el-container>
        <el-backtop></el-backtop>
        <el-drawer
            title="个人信息"
            :visible.sync="drawer"
            close-on-press-escape="true"
            modal="true"
            wrapperClosable="true"
            modal-append-to-body="false"
            show-close="true"
            direction="rtl"
            size="25%">
            <span>我来啦!</span>
        </el-drawer>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            activeIndex: '1',
            drawer: false,
            input4: '',
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            info: {
                email: 'wenkun_wang@163.com',
                qq: '928458710',
                intro: '这是我的个人博客，会分享关于编程、写作、思考相关的任何内容，希望可以给来到这里的人有所帮助'
            }
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    }
}
</script>

<style scoped>
    .el-header {
        background-color: #545c64;
        color: #ffd04b;
        display: flex;
        line-height: 20px;
        width:100%;
    }
    .el-footer {
        background-color: #545c64;
        color: #ffd04b;
        position:absolute;
        bottom:0;
        width:100%;
        display: flex;
        flex-direction: column;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        height: 100%;
        width:100%;
        text-align: center;
        min-height: 100%;
    }
    body > .el-container {
        margin-bottom: 40px;
    }
    .home {
        height: 100rem;
        position: relative;
        min-height: 100%;
        background-color: #E9EEF3;
    }
    .login {
        position: absolute;
        right: 40px;
        margin-top: 10px;
    }
    .search {
        position: absolute;
        right: 100px;
        margin-top: 10px;
        width: 20%;
    }
    .info-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 25%;

    }
    .divide-line {
        margin-top: 20px;
        color: #E9EEF3;
    }
    .info {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 250px;
    }
    .copyright {
        height: 50px;
        display: flex;
        justify-content: center;
        font-weight: bold;
    }
</style>
