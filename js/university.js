class University {
    constructor(universityName, country = null, personInCharge = null) {
        this.universityName = universityName;
        this.country = country;
        this.activities = []; //?? HOW TO ASSOCIATE?? 
        this.person = personInCharge;

        if(!isCountry(this.country)){
            this.country = "";
        }
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

    activitiesToString(){
        let str = "";

        for(let i = 0; i < this.activities.length; i++){
            str += this.activities[i].getActivityName();

            if(i != this.activities.length - 1){
                str += ", ";
            }
        }

        return str;
    }

}