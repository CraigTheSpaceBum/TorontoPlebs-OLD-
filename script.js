function loadContent(page) {
    let content = '';

    switch (page) {
        case 'home':
            content = 'Welcome to the HOME page!';
            break;
        case 'news':
            content = 'Check out the latest NEWS!';
            break;
        case 'interviews':
            content = 'Explore our INTERVIEWS section!';
            break;
        case 'events':
            content = 'Discover upcoming EVENTS!';
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
