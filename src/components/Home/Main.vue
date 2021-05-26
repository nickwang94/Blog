<template>
    <div class="main">
        <el-row :gutter="10" type="flex" justify="center">
            <el-col :xs="100" :sm="90" :md="90" :lg="90" :xl="90">
                <div class="grid-content bg-purple" style="background-color: green">
                    <p>{{ $t("msg.hello") }}</p>
                </div>
            </el-col>
            <el-col :xs="0" :sm="10" :md="10" :lg="10" :xl="10">
                <div class="grid-content bg-purple-light" style="background-color: red">
                    <el-button @click="toggle('zh')">切换中文</el-button>
                    <el-button @click="toggle('en')">切换英文</el-button>
                </div>
            </el-col>
        </el-row>
    </div>

</template>

<script>
export default {
    name: "Main"
}
</script>

<style scoped>
    .main {
        background-color: #E9EEF3;
        color: #333;
        height: 100%;
        width:100%;
        text-align: center;
        min-height: 100%;
    }
</style>
