var start = new Date().getTime()
var target = new Date(2025, 0, 1, 0, 0, 0, 0)
var days = (target - start)/1000/60/60/24
var without_days = (target - start)%86400000
var hours = without_days/3600000
var without_hours = without_days%3600000
var minutes = without_hours/60000
var without_minutes = without_hours%60000
var seconds = without_minutes/1000
console.log("Осталось ", Math.floor(days), " дней ", Math.floor(hours), 
" часов ", Math.floor(minutes), " минут ", Math.floor(seconds), "секунд")


