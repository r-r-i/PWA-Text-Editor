const butInstall = document.getElementById('buttonInstall');


// Event handler for 'beforeinstall' prompt
window.addEventListener('beforeinstallprompt', (event) => {

    window.deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);
    
});

//  Click event handler for install button
butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if(!promptEvent){
        return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// Handler for 'appinstalled' event
window.addEventListener('appinstalled', (event) => {

    window.deferredPrompt = null;
});
