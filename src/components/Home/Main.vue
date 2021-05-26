<template>
    <div class="main">
        <el-row :gutter="10" type="flex" justify="center">
            <el-col :xs="100" :sm="90" :md="90" :lg="90" :xl="90">

            </el-col>
            <el-col :xs="0" :sm="10" :md="10" :lg="10" :xl="10">

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
