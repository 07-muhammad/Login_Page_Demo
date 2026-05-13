const authFrame = document.getElementById('authFrame');
const switchButtons = document.querySelectorAll('.switch-btn');
const socialButtons = document.querySelectorAll('.social-btn');
const connectActions = document.querySelectorAll('.connect-action');
const closeButtons = document.querySelectorAll('.close-connect');

const providerNames = {
    google: 'Google',
    linkedin: 'LinkedIn',
    email: 'Email',
    github: 'GitHub'
};

const providerIcons = {
    google: 'fab fa-google',
    linkedin: 'fab fa-linkedin',
    email: 'fas fa-envelope',
    github: 'fab fa-github'
};

switchButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.target;
        if (target === 'signup') {
            authFrame.classList.add('show-signup');
        } else {
            authFrame.classList.remove('show-signup');
        }
    });
});

socialButtons.forEach(button => {
    const provider = Object.keys(providerNames).find(name => button.classList.contains(name));
    const providerLabel = providerNames[provider] || 'this service';
    const panel = button.closest('.auth-panel');
    const connectPanel = panel ? panel.querySelector('.social-connect-panel') : null;

    button.addEventListener('click', () => {
        if (!connectPanel) return;

        const icon = connectPanel.querySelector('.connect-icon i');
        const title = connectPanel.querySelector('h3');
        const subtitle = connectPanel.querySelector('.connect-head p');

        icon.className = providerIcons[provider] || 'fas fa-user';
        title.textContent = `Connect with ${providerLabel}`;
        subtitle.textContent = provider === 'email'
            ? 'Use your email to sign in quickly.'
            : `Use your ${providerLabel} account to sign in instantly.`;

        connectPanel.classList.add('active');
    });
});

connectActions.forEach(action => {
    action.addEventListener('click', () => {
        const panel = action.closest('.social-connect-panel');
        if (!panel) return;

        action.textContent = 'Connected ✓';
        setTimeout(() => {
            action.textContent = 'Connect Account';
            panel.classList.remove('active');
        }, 1400);
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const panel = button.closest('.social-connect-panel');
        if (!panel) return;
        panel.classList.remove('active');
    });
});