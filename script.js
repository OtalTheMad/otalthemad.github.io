const _root = document.documentElement
const _toggle = document.getElementById("themeToggle")
const _year = document.getElementById("year")

const GetSavedTheme = () => localStorage.getItem("theme") || ""
const SetTheme = (_theme) => {
  if (_theme) _root.setAttribute("data-theme", _theme)
  else _root.removeAttribute("data-theme")
  localStorage.setItem("theme", _theme)
  const _icon = _toggle.querySelector(".theme__icon")
  _icon.textContent = _theme === "light" ? "☼" : "☾"
}

const InitTheme = () => {
  const _saved = GetSavedTheme()
  SetTheme(_saved)
}

const ToggleTheme = () => {
  const _current = _root.getAttribute("data-theme")
  const _next = _current === "light" ? "" : "light"
  SetTheme(_next)
}

_year.textContent = new Date().getFullYear().toString()
_toggle.addEventListener("click", ToggleTheme)
InitTheme()