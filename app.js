'use strict'
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const track = 'Track: Frontend'

function currentUTC(){
function weekDays() {
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDay"]').innerHTML = `Current Day: ${dayOfWeek}`;

}
weekDays()
function currentTime() {
    document.querySelector('[data-testid="myTrack"]').innerHTML = track
    const currentUTCDate = new Date();
    const year = currentUTCDate.getFullYear();
    const hours = currentUTCDate.getUTCHours();
    const minutes = currentUTCDate.getUTCMinutes();
    const seconds = currentUTCDate.getUTCSeconds();
    document.querySelector('[data-testid="currentTimeUTC"]').innerHTML = `Current UTC Time: ${hours.toString().padStart(2, '0')}: ${minutes.toString().padStart(2, '0')}: ${seconds.toString().padStart(2, '0')} `;
    document.querySelector('[data-testid="myTrack"]').innerHTML = track
    document.querySelector('[data-testid="slackDisplayName"]').innerHTML = "Slack Name: henryuks"
    document.querySelector('[data-testid="slackEmail"]').innerHTML = "Slack Email: henryuks129@gmail.com"
    document.querySelector('[data-testid="currentYear"]').innerHTML = year
}
currentTime()
setInterval(weekDays, 60 * 60 * 1000);
setInterval(currentTime, 1000);
}
currentUTC()        