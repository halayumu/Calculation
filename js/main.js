new Vue({
    el: "#app",

    //----[htmlのテキスト情報]----//
    data: {
        seven: "", //一万円
        six: "", //五千円
        five: "", //千円
        four: "", //五百円
        three: "", //百円
        two: "", //五十円
        one: "" //十円
    },

    //----[演算処理]----//
    computed: {
        sevenAnswer: function() { return this.seven * 10000 }, //一万の計算
        sixAnswer: function() { return this.six * 5000 }, //五千円の計算
        fiveAnswer: function() { return this.five * 1000 }, //千円の計算
        fourAnswer: function() { return this.four * 500 }, //五百円の計算
        threeAnswer: function() { return this.three * 100 }, //百円の計算
        twoAnswer: function() { return this.two * 50 }, //五十円の計算
        oneAnswer: function() { return this.one * 10 }, //五十円の計算

        //----[合計処理]----//
        total: function() {
            return this.sevenAnswer + this.sixAnswer + this.fiveAnswer + this.fourAnswer +
                this.threeAnswer + this.twoAnswer + this.oneAnswer
        }
    }
})