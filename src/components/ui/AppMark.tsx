interface AppMarkProps {
    size?: number
}

// Marca do MoneyLance: "m" com o "l" em forma de seta laranja (mesmo desenho do ícone do app)
export default function AppMark({ size = 32 }: AppMarkProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
            <rect width="100" height="100" rx="23" fill="#0E2238" />
            <path d="M22 78 V55 C22 46 26.5 42 34 42 C41.5 42 46 46 46 55 V78" fill="none" stroke="#FFFFFF" strokeWidth="10.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M46 55 C46 46 50.5 42 58 42 C65.5 42 70 46 70 56" fill="none" stroke="#FFFFFF" strokeWidth="10.5" strokeLinecap="butt" />
            <path d="M70 78 V15 M60 25 L70 15 L80 25" fill="none" stroke="#E8650F" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
