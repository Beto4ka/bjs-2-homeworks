function parseCount(value) {
    let parsed = Number.parseInt(value, 10);
    if (Number.isNaN(parsed)) {
        throw new Error("Невалидное значение");
    } else {
        return parsed;
    }
}

function validateCount(value) {
    try {
        let parsed = parseCount(value);
        return parsed;
    }
    catch (error) {
        return error;
    }
}





class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;

    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = 0.5 * (this.a + this.b + this.c);
        let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return Triangle = {
            getArea() {
                let String = "Ошибка! Треугольник не существует"
                return String
            },
            getPerimeter() {
                let String = "Ошибка! Треугольник не существует"
                return String
            }
        }
    }
}