{{- if eq .Site.Params.colorScheme "light" }}
  if (storageColorScheme == "Auto") {
    document.getElementById('utterances').setAttribute('theme', 'preferred-color-scheme')
  } else if (storageColorScheme == "Dark") {
    document.getElementById('utterances').setAttribute('theme', 'github-dark')
  }
{{- else if eq .Site.Params.colorScheme "dark" }}
  if (storageColorScheme == "Auto") {
    document.getElementById('utterances').setAttribute('theme', 'preferred-color-scheme')
  } else if (storageColorScheme == "Light") {
    document.getElementById('utterances').setAttribute('theme', 'github-light')
  }
{{- else }}
  if (storageColorScheme == "Light") {
    document.getElementById('utterances').setAttribute('theme', 'github-light')
  } else if (storageColorScheme == "Dark") {
    document.getElementById('utterances').setAttribute('theme', 'github-dark')
  }
{{- end }}
