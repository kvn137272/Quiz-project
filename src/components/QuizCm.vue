<template>
    <div class="Quiz">

        <div class="Quiz__question" v-if="current <= 5">
            <h2>{{ questions[current].title }}</h2>
            <span>{{ current }}</span>
        </div>
        <div class="Quiz__answers" v-if="current <= 5">
            <ul>
                <li v-for="answer in questions[current].answers" :key="answer"
                    @click="checkAnswer(answer, questions[current].realAnswer)">
                    {{ answer }}
                </li>
            </ul>
        </div>

        <div class="Quiz__corrects" v-else>
            <div>
                <p>تعداد پاسخ های صحیح :{{ correctAnswers }}</p>
                <button @click="playAgain">شروع مجدد</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            correctAnswers: 0,
            current: 1,
            questions: {
                1: {
                    title: "پایتخت ایران چه نام دارد؟",
                    realAnswer: "تهران",
                    answers: ["تهران", "گیلان", "اصفهان", "مشهد"]
                },
                2: {
                    title: "کیوان چجور آدمیه؟",
                    realAnswer: "خیلی باحاله",
                    answers: ["جذاب", "با نمکه", "خیلی باحاله", "مهربونه"]
                },
                3: {
                    title: "تعداد حلقه های المپیک؟",
                    realAnswer: "پنج عدد",
                    answers: ["یک عدد", "چهار عدد", " سه عدد", "پنج عدد"]
                },
                4: {
                    title: "تابلوی لبخند ژکوند اثر کیست؟",
                    realAnswer: "داوینچی",
                    answers: ["رامبراند", "پیکاسو", "داوینچی", "ونگوگ"]
                },
                5: {
                    title: "کدام درخت نماد صلح است؟",
                    realAnswer: "زیتون",
                    answers: ["سرو", "نارنج", "سیب", "زیتون"]
                },
            }
        }
    },
    computed: {
        checkCrtAnswers() {
            return this.current >= 6
        }
    },
    methods: {
        checkAnswer(answer, real) {
            if (answer === real) {
                this.correctAnswers++
            }
            this.current >= 6 ? this.current = 1 : this.current++
        },
        playAgain() {
            this.current = 1
            this.correctAnswers = 0
        }

    }
}
</script>

<style lang="scss">
$aqua: aqua;
$red: rgb(173, 36, 36);
$blue: rgb(193, 216, 228);

%text {
    text-align: right;
    list-style: none;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}

.Quiz {
    width: 500px;
    height: 300px;
    margin: 0 auto;
    text-align: center;
    position: relative;

    &__question {
        width: 100%;
        height: 50px;
        background-color: whitesmoke;
        line-height: 50px;
        border-right: 3px solid $red;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;

        h2 {
            text-align: right;
            font-size: 18px;
            font-weight: lighter;
            padding-right: 10px;
        }

        span {
            margin-left: 10px;
            background-color: $aqua;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            line-height: 25px;
            font-weight: lighter;
        }
    }

    &__answers {
        width: 100%;

        background-color: $blue;

        ul {
            display: block;
            // height: 100%;
            padding: 0;
            @extend %text;



            li {
                padding: 20px 10px 20px 0;
                font-size: 16px;
                font-weight: lighter;
                width: 100%;
                cursor: pointer;

                &:hover {
                    background-color: lighten($blue, 5%);
                }
            }
        }
    }

    &__corrects {
        width: 100%;
        padding: 5px 0 5px 0;
        position: absolute;
        top: 0;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        // div{
        //     margin: 50px auto;
        // }

        button {
            height: 30px;
            border: none;
            margin-top: 10px;
            background-color: $red;
            color: white;
            font-weight: bold;
            font-size: 16px;
            cursor: pointer;

            &:hover {
                background-color: lighten($red, 10%);
            }
        }
    }
}
</style>