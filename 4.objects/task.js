
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age =

    Student.prototype.setSubject = function (subjectName) {
      this.subject = subjectName;
    }

  Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
      this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
  }

  Student.prototype.addMarks = function (...marks) {
    if (this.marks === undefined) {
      this.marks = [...marks];
    } else {
      this.marks.push(...marks);
    }
  }

  Student.prototype.getAverage = function (marks) {
    let sum = this.marks.reduce((acc, marks) => acc + marks, 0);
    let length = this.marks.length;
    return sum / length;
  }

  Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
  }
}