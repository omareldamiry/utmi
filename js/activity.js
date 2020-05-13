class Activity {
    constructor(activityName, deadline = null) {
        this.activityName = activityName;
        this.deadline = deadline; //? HOW TO DEFINE??
    }

    getActivityName() {
        return this.activityName;
    }
}