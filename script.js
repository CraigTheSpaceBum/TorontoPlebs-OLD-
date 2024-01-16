let nostrDropdownOpen = false;

function toggleNostrDropdown() {
    const nostrOverlay = document.getElementById('nostrOverlay');
    const nostrDropdownBox = document.getElementById('nostrDropdownBox');

    nostrDropdownOpen = !nostrDropdownOpen;

    if (nostrDropdownOpen) {
        nostrOverlay.style.display = 'flex';
        nostrDropdownBox.style.display = 'block';

        // Center the dropdown box
        const windowHeight = window.innerHeight;
        const boxHeight = nostrDropdownBox.clientHeight;
        const topOffset = (windowHeight - boxHeight) / 2;
        nostrDropdownBox.style.top = `${topOffset}px`;
    } else {
        nostrOverlay.style.display = 'none';
        nostrDropdownBox.style.display = 'none';
    }
}

async function loadContent(page) {
    let content = '';

    switch (page) {
        // ... (unchanged content loading logic)
        default:
            content = 'Page not found!';
    }

    document.getElementById('main-content').innerHTML = content;

    // Close the Nostr dropdown if it was open
    if (nostrDropdownOpen) {
        toggleNostrDropdown();
    }
}

// ... (unchanged code)
