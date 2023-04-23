/*
NOTES
01 - NEVER USE "var" it has limited scope.
*/
const date = new Date(document.lastModified);
const year = date.getFullYear();
const hours = ('0' + date.getHours()).slice(-2);
const minutes = ('0' + date.getMinutes()).slice(-2);
const seconds = ('0' + date.getSeconds()).slice(-2);

document.getElementById('copyrightAndYear').innerHTML = year
document.getElementById('lastUpdatedDate').innerHTML = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${hours}:${minutes}:${seconds}`