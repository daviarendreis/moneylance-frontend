import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "./icons"
import styles from "./ThemeToggle.module.css"

type Theme = "light" | "dark"

const STORAGE_KEY = "moneylance-theme"
const THEME_COLOR: Record<Theme, string> = { light: "#EAF4FC", dark: "#0B1726" }

// Tema em uso agora: a escolha salva (data-theme no <html>) ou, sem escolha, o modo do aparelho
function currentTheme(): Theme {
    const chosen = document.documentElement.dataset.theme
    if (chosen === "light" || chosen === "dark") return chosen
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function paintBrowserBar(theme: Theme) {
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLOR[theme])
}

// Botão sol/lua do cabeçalho. Estado só de interface; a escolha fica salva neste aparelho.
export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(currentTheme)

    // Sem escolha salva, acompanha quando o aparelho troca de modo
    useEffect(() => {
        const media = window.matchMedia("(prefers-color-scheme: dark)")
        const onChange = () => {
            if (document.documentElement.dataset.theme) return
            const next: Theme = media.matches ? "dark" : "light"
            paintBrowserBar(next)
            setTheme(next)
        }
        media.addEventListener("change", onChange)
        return () => media.removeEventListener("change", onChange)
    }, [])

    function toggle() {
        const next: Theme = theme === "dark" ? "light" : "dark"
        document.documentElement.dataset.theme = next
        try {
            localStorage.setItem(STORAGE_KEY, next)
        } catch {
            // Sem armazenamento (ex.: navegação privada): vale só até fechar o app
        }
        paintBrowserBar(next)
        setTheme(next)
    }

    const label = theme === "dark" ? "Usar modo claro" : "Usar modo escuro"

    return (
        <button type="button" className={styles.toggle} onClick={toggle} aria-label={label} title={label}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
    )
}
