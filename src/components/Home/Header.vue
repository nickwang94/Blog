<template>
    <div class="header">
        <h1 style="margin-left: 1rem">{{ $t("msg.title") }}</h1>
        <div class="nav" style="margin-left: 1rem">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                menu-trigger="hover">
                <el-menu-item index="1">{{ $t("msg.home") }}</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">{{ $t("msg.classification") }}</template>
                    <el-menu-item index="2-1">分类1</el-menu-item>
                    <el-menu-item index="2-2">分类2</el-menu-item>
                    <el-menu-item index="2-3">分类3</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">{{ $t("msg.label") }}</template>
                    <el-menu-item index="3-1">标签1</el-menu-item>
                    <el-menu-item index="3-2">标签2</el-menu-item>
                    <el-menu-item index="3-3">标签3</el-menu-item>
                </el-submenu>
                <el-menu-item index="4">{{ $t("msg.archive") }}</el-menu-item>
            </el-menu>
        </div>
        <div class="search">
            <el-input
                :placeholder='$t("msg.search")'
                v-model="inputData">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
        <div class="login">
            <el-avatar size="large" :src="circleUrl" @click.native="drawer=true"></el-avatar>
        </div>
        <div class="drawer-style">
            <el-drawer
                :title='$t("msg.systemSetting")'
                :visible.sync="drawer"
                direction="rtl"
                size="25%"
            >
                <span style="margin-left: 20px">{{ $t("msg.langSetting") }}: </span>
                <el-select v-model="value" style="margin-left: 20px" @change="selectChange">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-drawer>
        </div>
    </div>
</template>

<script>
import i18n from '@/i18n/index'
export default {
    name: "Header",
    data () {
        return {
            activeIndex: '1',
            inputData: '',
            circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            drawer: false,
            switchValue: true,
            value: 'zh',
            options: [{
                value: 'zh',
                label: i18n.t("msg.zh")
            }, {
                value: 'en',
                label: i18n.t("msg.en")
            }]
        }
    },
    methods: {
        selectChange (value) {
            this.$i18n.locale = value;
        }
    }
}
</script>

<style scoped>
    .header {
        background-color: #545c64;
        color: #ffd04b;
        display: flex;
        flex-direction: row;
        line-height: 20px;
        width:100%;
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
    .drawer-style {
        color: #333333;
    }
</style>
