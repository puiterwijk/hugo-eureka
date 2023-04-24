let storageColorScheme = localStorage.getItem("lightDarkMode")
{{- if eq .Site.Params.colorScheme "light" }}
if ((storageColorScheme == 'Auto' && window.matchMedia("(prefers-color-scheme: dark)").matches) || storageColorScheme == "Dark") {
    document.getElementsByTagName('html')[0].classList.add('dark')
}
{{- else if eq .Site.Params.colorScheme "dark" }}
if ((storageColorScheme == 'Auto' && window.matchMedia("(prefers-color-scheme: light)").matches) || storageColorScheme == "Light") {
    document.getElementsByTagName('html')[0].classList.remove('dark')
}
{{- else }}
if (((storageColorScheme == 'Auto' || storageColorScheme == null) && window.matchMedia("(prefers-color-scheme: dark)").matches) || storageColorScheme == "Dark") {
    document.getElementsByTagName('html')[0].classList.add('dark')
}
{{- end }}
