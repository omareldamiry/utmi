class Student {
    constructor(studentName, id, school, year, country, university) {
        this.studentName = studentName;
        this.school = school;
        this.year = year;
        this.country = country;
        this.university = university //!necessary for exchange students by default it should be UTM
    }

    getStudentName() {
        return this.studentName;
    }
    getSchool() {
        return this.school;
    }


    getYear() {
        return this.year;
    }
    getCountry() {
        return this.country;
    }

    getUniversity() {
        return this.university;
    }
}