<template>
    <div height="300px" class="footer">
        <div class="info">
            <div class="info-block">1</div>
            <hr class="divide-line">
            <div class="info-block">2</div>
            <hr class="divide-line">
            <div class="info-block">
                <h3>{{ $t("msg.info.contactMe") }}</h3>
                <div style="margin-bottom: 10px"> {{ $t("msg.info.email") }} : {{info.email}}</div>
                <div> QQ: {{info.qq}} </div>
            </div>
            <hr class="divide-line">
            <div class="info-block">
                <h3>{{ $t("msg.info.aboutMe") }}</h3>
                <div style="margin: 10px"> {{ $t("msg.info.intro") }} </div>
            </div>
        </div>
        <el-divider direction="horizontal"></el-divider>
        <div class="copyright">
            Copyright©2016-2021 Designed by Nick
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data () {
        return {
            info: {
                email: 'wenkun_wang@163.com',
                qq: '928458710'
            }
        }
    },
    methods: {

    }
}
</script>

<style scoped>
    .footer {
        background-color: #545c64;
        color: #ffd04b;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
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
