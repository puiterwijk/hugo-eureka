// change icon and add listener if auto
let element = document.getElementById('lightDarkMode')
{{- if eq .Site.Params.colorScheme "light" }}
if (storageColorScheme == 'Auto') {
    element.firstElementChild.classList.remove('fa-sun')
    element.firstElementChild.setAttribute("data-icon", 'adjust')
    element.firstElementChild.classList.add('fa-adjust')
    document.addEventListener('DOMContentLoaded', () => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', switchDarkMode)
    })
} else if (storageColorScheme == "Dark") {
    element.firstElementChild.classList.remove('fa-sun')
    element.firstElementChild.setAttribute("data-icon", 'moon')
    element.firstElementChild.classList.add('fa-moon')
}
{{- else if eq .Site.Params.colorScheme "dark" }}
if (storageColorScheme == 'Auto') {
    element.firstElementChild.classList.remove('fa-moon')
    element.firstElementChild.setAttribute("data-icon", 'adjust')
    element.firstElementChild.classList.add('fa-adjust')
    document.addEventListener('DOMContentLoaded', () => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', switchDarkMode)
    })
} else if (storageColorScheme == "Light") {
    element.firstElementChild.classList.remove('fa-moon')
    element.firstElementChild.setAttribute("data-icon", 'sun')
    element.firstElementChild.classList.add('fa-sun')
}
{{- else }}
if (storageColorScheme == null || storageColorScheme == 'Auto') {
    document.addEventListener('DOMContentLoaded', () => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', switchDarkMode)
    })
} else if (storageColorScheme == "Light") {
    element.firstElementChild.classList.remove('fa-adjust')
    element.firstElementChild.setAttribute("data-icon", 'sun')
    element.firstElementChild.classList.add('fa-sun')
} else if (storageColorScheme == "Dark") {
    element.firstElementChild.classList.remove('fa-adjust')
    element.firstElementChild.setAttribute("data-icon", 'moon')
    element.firstElementChild.classList.add('fa-moon')
}
{{- end }}

document.addEventListener('DOMContentLoaded', () => {
    getcolorscheme();
    switchBurger();
    {{- if .IsTranslated }}
    switchLanguage()
    {{- end }}
});
