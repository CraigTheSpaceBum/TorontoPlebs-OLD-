async function loadContent(page) {
    let content = '';

    switch (page) {
        case 'home':
            content = await loadHtmlContent('home.html');
            break;
        case 'news':
            content = await loadHtmlContent('news.html');
            break;
        case 'interviews':
            content = await loadHtmlContent('interviews.html');
            break;
        case 'events':
            content = await loadHtmlContent('events.html');
            break;
        case 'nostr':
            content = await loadHtmlContent('nostr.html');
            break;
                    case 'about':
            content = await loadHtmlContent('about.html');
            break;
        default:
            content = 'Page not found!';
    }

    document.getElementById('main-content').innerHTML = content;
}

async function loadHtmlContent(htmlFile) {
    const response = await fetch(htmlFile);
    return await response.text();
}

// Initial load
document.addEventListener('DOMContentLoaded', async () => {
    await loadContent('home');
});

// ... (other functions if any)
