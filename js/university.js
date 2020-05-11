class University {
    constructor(universityName, country = null, personInCharge = null) {
        this.universityName = universityName;
        this.country = country;
        this.activities = []; //?? HOW TO ASSOCIATE?? 
        this.person = personInCharge;
    }

    getUniversityName() {
        return this.universityName;
    }

    getCountry() {
        return this.country;
    }

    getActivities() {
        return this.activities;
    }
    getPersonInCharge() {
        return this.person;
    }

    setActivity(activities) { 
        this.activities = activities;
    }

}