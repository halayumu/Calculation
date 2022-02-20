new Vue({
    el: "#app",

    //----[htmlのselect情報]----//
    data: {
        heading: "レジ金計算機",
        totalMessage: "総合計",

        //----[枚数]----//
        int: 100,

        //----[お金]----//
        seven: "", //一万円
        six: "", //五千円
        five: "", //千円
        four: "", //五百円
        three: "", //百円
        two: "", //五十円
        one: "", //十円
    },

    //----[演算処理]----//
    computed: {
        sevenAnswer: function() { //一万の計算
            return this.seven * 10000
        },
        sixAnswer: function() { //五千円の計算
            return this.six * 5000
        },
        fiveAnswer: function() { //千円の計算
            return this.five * 1000
        },
        fourAnswer: function() { //五百円の計算
            return this.four * 500
        },
        threeAnswer: function() { //百円の計算
            return this.three * 100
        },
        twoAnswer: function() { //五十円の計算
            return this.two * 50
        },
        oneAnswer: function() { //十円の計算
            return this.one * 10
        },

        //----[合計処理]----//
        total: function() {
            return this.sevenAnswer + this.sixAnswer + this.fiveAnswer + this.fourAnswer +
                this.threeAnswer + this.twoAnswer + this.oneAnswer
        },
    },

    //----[css判定]----//
    methods: {
        totalColor(totals) {
            if (totals == 60000) {
                return "red"; //クラス名
            }
        }
    }
})