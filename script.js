async function loadContent(page) {
    let content = '';

    switch (page) {
        case 'home':
            const homeResponse = await fetch('home.html');
            content = await homeResponse.text();
            break;
        case 'news':
            const newsResponse = await fetch('news.html');
            content = await newsResponse.text();
            break;
        case 'shop':
            const shopResponse = await fetch('shop.html');
            content = await shopResponse.text();
            break;
        case 'videos':
            const videosResponse = await fetch('videos.html');
            content = await videosResponse.text();
            break;
        case 'interviews':
            const interviewsResponse = await fetch('interviews.html');
            content = await interviewsResponse.text();
            break;
        case 'whatisnostr':
            const whatisnostrResponse = await fetch('whatisnostr.html');
            content = await whatisnostrResponse.text();
            break;
        case 'nostraddress':
            const nostraddressResponse = await fetch('nostraddress.html');
            content = await nostraddressResponse.text();
            break;
        case 'settings':
            const settingsResponse = await fetch('settings.html');
            content = await settingsResponse.text();
            break;
        default:
            content = 'Page not found!';
    }

    document.getElementById('main-content').innerHTML = content;
}

document.addEventListener('DOMContentLoaded', function () {
    loadContent('home');
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', function () {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function (event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(function (dropdown) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });
});
