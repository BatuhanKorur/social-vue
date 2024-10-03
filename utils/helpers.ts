export function setTheme(isDark: boolean) {
  document.documentElement.classList.toggle('dark', isDark)
}
