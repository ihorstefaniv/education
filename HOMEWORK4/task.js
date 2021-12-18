//task1
function calcRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw "Ви ввели не числові значення! Введіть число!";
    }
    return width * height;
}

try {
    console.log(calcRectangleArea(10, "one"));
} catch(error) {
    console.log(error);
}

//task2
function checkAge() {
    try{
        let age = prompt("Цей фільм доступний для перегляду особам, які досягли віку 14 років. Введіть Ваш вік:");

        if (age.trim() == "")
            throw new Error("Помилка, введіть Ваш вік")
        else if (isNaN(parseInt(age)))
            throw new Error("Введіть число")
        else if (age < 14)
            throw new Error("Перепрошую, у Вас немає доступу до даного фільму!")
        alert("Насолоджуйтесь фільмом!")
}
        catch(e) {
            console.log(e.name + " " + e.message)
        }
}

checkAge();

//task3

class MonthException {
    constructor(message) {
        this.message = message;
        this.name = 'MonthException';
    }
}

function showMonthName(month) {
    month = month - 1;
    let months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    if (months[month] !== undefined) {
        return months[month];
    } else {
        throw new MonthException('Incorect number of month');
    }
}

try {
    let myMonth = 4;
    let monthName = showMonthName(myMonth);
    console.log(monthName);
} catch(e) {
    console.error(e.name, e.message);
}

// task 4

function showUser(id) {
    if (id < 0) {
        throw new Error("ID не повинно бути відємним: " + id);
    }
    return {id: id};
 }

 function showUsers(moreId) {
    let result = []
    moreId.forEach(function (id) {
        try {
            let person = showUser(id);
            result.push(person);
        } catch (exeption) {
            console.log(exeption.message);
        }
    });
    return result;
 }

 showUsers([7, -12, 44, 22]);
