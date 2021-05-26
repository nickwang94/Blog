<template>
    <div height="150px" class="footer">
        <div class="info">
            <div class="info-block">
                <div class="img-div"><img src="../../assets/aboutMe.jpg" class="img"/></div>
            </div>
            <hr class="divide-line">
            <div class="info-block">
                <h3>{{ $t("msg.info.contactMe") }}</h3>
                <div style="margin-bottom: 10px"> {{ $t("msg.info.email") }} : {{info.email}}</div>
                <div> QQ: {{info.qq}} </div>
            </div>
            <hr class="divide-line">
            <div class="info-block">
                <h3>{{ $t("msg.info.aboutMe") }}</h3>
                <div style="margin-left: 100px; margin-right: 100px;"> {{ $t("msg.info.intro") }} </div>
            </div>
        </div>
        <hr class="divide-line-horizatal">
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
        color: #babab3;
        bottom: 0;
        width: 100%;
    }
    .img-div{
        width:140px;
        height:140px;
        text-align:center;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #E9EEF3;
        border-radius: 5px;
    }
    .img{
        width:120px;
    }
    .info-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 33%;
    }
    .divide-line {
        color: #babab3;
        align: center;
        margin: 30px;
        padding: 0px;
    }
    .divide-line-horizatal {
        color: #babab3;
        margin: 0px;
        padding: 0px;
    }
    .info {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 200px;
    }
    .copyright {
        height: 20px;
        line-height: 20px;
        font-weight: bold;
        text-align:center;
        padding: 10px;
    }
</style>
