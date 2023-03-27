const validation = (activityData) => {
    let errors = {};
  
    if (!activityData.name) {
      errors.name = "Name cannot be empty";
    }
  
    if (!activityData.duration || isNaN(activityData.duration)) {
      errors.duration = "Duration must be a number";
    }
  
    if (activityData.difficulty === "0") {
      errors.difficulty = "You must select a difficulty level";
    }
  
    if (activityData.season === "0") {
      errors.season = "You must select a season";
    }
  
    if (activityData.countriesIds.length === 0) {
      errors.countriesIds = "You must select at least one country";
    }
  
    return errors;
  };
  
  export default validation;