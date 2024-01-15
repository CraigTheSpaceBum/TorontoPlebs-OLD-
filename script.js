async function loadContent(page) {
    let content = '';

    switch (page) {
        case 'home':
            // Load the home.html for the home page
            const homeResponse = await fetch('home.html');
            content = await homeResponse.text();
            break;
        case 'news':
            // Load the news.html for the NEWS page
            const newsResponse = await fetch('news.html');
            content = await newsResponse.text();
            break;
        case 'interviews':
            // Load the interviews.html for the INTERVIEWS page
            const interviewsResponse = await fetch('interviews.html');
            content = await interviewsResponse.text();
            break;
        case 'events':
            // Load the events.html for the EVENTS page
            const eventsResponse = await fetch('events.html');
            content = await eventsResponse.text();
            break;
        case 'nostr':
            // Redirect to an external link for NOSTR
            window.location.href = 'https://njump.me/@torontoplebs.ca';
            return;
        default:
            content = 'Page not found!';
    }

    document.getElementById('main-content').innerHTML = content;
}

// Load 'home.html' initially
document.addEventListener('DOMContentLoaded', function () {
    loadContent('home');
});
