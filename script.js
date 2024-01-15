async function loadContent(page) {
    let content = '';

    switch (page) {
        case 'home':
        case 'news':
        case 'interviews':
        case 'events':
            // Load internal content
            const response = await fetch(page + '.html');
            content = await response.text();
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
