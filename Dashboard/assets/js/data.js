//Dataset
const data = [];

//Array of apps and days
const apps = [ "Whatsapp", "Instagram", "Snapchat", "Chrome", "Gmail", "Other"];
const days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//Function to generate random number within the range
const generateRandomNumber = ( min, max) =>{
    return Math.round(Math.random() * (max - min) + min);
}

//Dataset creation
days.forEach( day => {
   apps.forEach( app => {
        const obj = {};
        obj.day = day;
        obj.app = app;
        obj.screenTime = generateRandomNumber(1, 20);
        obj.notifications = generateRandomNumber(1, 10);
        obj.timesOpened = generateRandomNumber(1, 10);
        data.push(obj);
    })
}) 
console.log(data);

//Function to get daywise usage data
const getDayWiseUsage = ( day, prop ) => {
    const result = data.reduce( (sum, current ) => sum + (current.day === day ? current[prop] : 0), 0 );
    return result;
}

//Function to get app wise usage data
const getAppWiseUsage = ( app, prop) => {
    const result = data.reduce( (sum, current ) => sum + (current.app === app ? current[prop] : 0), 0 );
    return result;
}

//Function to get app wise usage data for each day
const getEachDayAppWiseUsage = ( day, app, prop ) => {
    const result = data.find( row => row.day === day && row.app === app )[prop];
    return result;
}
