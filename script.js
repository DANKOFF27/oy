let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this; // Повертаємо посилання на об'єкт ladder
    },
    down: function () {
        this.step--;
        return this; // Повертаємо посилання на об'єкт ladder
    },
    showStep: function () { // показує поточну ступінь
        alert(this.step);
        return this; // Повертаємо посилання на об'єкт ladder
    }
};

// Тепер можемо викликати методи по ланцюжку
ladder.up().up().down().showStep(); // 1
