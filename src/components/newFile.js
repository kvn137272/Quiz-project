/* __placeholder__ */
export default (await import('vue')).defineComponent({
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
};
},
computed: {
checkCrtAnswers() {
return this.current == 6;
}
},
methods: {
checkAnswer(answer, real) {
if (answer === real) {
this.correctAnswers++;
}
this.current >= 5 ? this.current = 1 : this.current++;
},
playAgain() {
this.current = 1;
this.correctAnswers = 0;
}
}
});
