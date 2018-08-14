export default {
    install(Vue, options){
        Vue.prototype.format = function(day){
            //获取当前时间，格式YYYY-MM-DD
            var date = new Date();
            var seperator1 = "-";
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var strDate;
            if(typeof day == 'undefined'){
                strDate = date.getDate();
            }else{
                strDate = day
            }
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = year + seperator1 + month + seperator1 + strDate;
            return currentdate;
        }
    }
}