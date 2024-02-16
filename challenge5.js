// Sample metrics data
const metricsData = {
    followers: 1000,
    posts: 500,
    likes: 2000
};

// Sample post feed data
const postFeedData = [
    { username: 'user1', post: 'Lorem ipsum dolor sit amet' },
    { username: 'user2', post: 'Consectetur adipiscing elit' },
    { username: 'user3', post: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' }
];

// Sample notification data
const notificationData = [
    'New follower: JohnDoe',
    'You have a new message',
    'Post liked by JaneDoe'
];

// Display metrics
const metricsContent = document.getElementById('metricsContent');
for (const metric in metricsData) {
    const metricElement = document.createElement('div');
    metricElement.textContent = `${metric}: ${metricsData[metric]}`;
    metricsContent.appendChild(metricElement);
}

// Display post feed
const postFeedContent = document.getElementById('postFeedContent');
postFeedData.forEach(data => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `<strong>${data.username}</strong>: ${data.post}`;
    postFeedContent.appendChild(postElement);
});

// Display notifications
const notificationContent = document.getElementById('notificationContent');
notificationData.forEach(notification => {
    const notificationElement = document.createElement('div');
    notificationElement.textContent = notification;
    notificationContent.appendChild(notificationElement);
});

// Add event listeners for navigation links
document.getElementById('home').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to Home page...');
});

document.getElementById('profile').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to Profile page...');
});

document.getElementById('settings').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirecting to Settings page...');
});

document.getElementById('logout').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Logging out...');
});
