document.getElementById('themeToggle').addEventListener('click', function() {
    changeTheme();
});

function changeTheme() {
    var currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        setCookie('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        setCookie('theme', 'light');
    };
};

window.onload = function() {
    var theme = getCookie('theme');

    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    };
};

function setCookie(name, value) {
    const d = new Date();
    d.setTime(d.getTime() + ((10*365+2)*24*60*60*1000));
    const date = d.toUTCString();
    
    document.cookie = name+"="+value+"; expires="+date+"; SameSite=None; secure";
};

function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
};