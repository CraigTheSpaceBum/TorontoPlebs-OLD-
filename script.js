function loadContent(page) {
    // You can customize this function based on your needs
    // For now, let's just display a message for each page
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
            content = 'NOSTR content is here!';
            break;
        default:
            content = 'Page not found!';
    }

    document.getElementById('main-content').innerHTML = content;
}
