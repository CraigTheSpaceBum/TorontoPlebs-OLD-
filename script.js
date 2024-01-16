let nostrDropdownOpen = false;

function toggleNostrDropdown() {
    const nostrDropdownBox = document.getElementById('nostrDropdownBox');

    nostrDropdownOpen = !nostrDropdownOpen;

    if (nostrDropdownOpen) {
        nostrDropdownBox.style.display = 'block';
    } else {
        nostrDropdownBox.style.display = 'none';
    }
}

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
        case 'shop':
            content = await loadHtmlContent('zap.torontoplebs.ca');
            break;

        default:
            content = 'Page not found!';
    }

    document.getElementById('main-content').innerHTML = content;

    // Close the Nostr dropdown if it was open
    if (nostrDropdownOpen) {
        toggleNostrDropdown();
    }
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
