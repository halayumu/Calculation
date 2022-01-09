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
        one: "", //十円
    },

    //----[演算処理]----//
    computed: {
        sevenAnswer: function() { //一万の計算
            if (isNaN(this.seven)) {
                alert('数値を入力してください');
                return 0
            } else {
                return this.seven * 10000
            }
        },
        sixAnswer: function() { //五千円の計算
            if (isNaN(this.six)) {
                alert('数値を入力してください');
                return 0
            } else {
                return this.six * 5000
            }
        },
        fiveAnswer: function() { //千円の計算
            if (isNaN(this.five)) {
                alert('数値を入力してください');
                return 0
            } else {
                return this.five * 1000
            }
        },
        fourAnswer: function() { //五百円の計算
            if (isNaN(this.four)) {
                alert('数値を入力してください');
                return 0
            } else {
                return this.four * 500
            }
        },
        threeAnswer: function() { //百円の計算
            if (isNaN(this.three)) {
                alert('数値を入力してください');
                return 0
            } else {
                return this.three * 100
            }
        },
        twoAnswer: function() { //五十円の計算
            if (isNaN(this.two)) {
                alert('数値を入力してください');
                return 0
            } else {
                return this.two * 50
            }
        },
        oneAnswer: function() {
            if (isNaN(this.one)) { //五十円の計算
                alert('数値を入力してください');
                return 0
            } else {
                return this.one * 10
            }
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