interface IconProps {
    size?: number
}

const stroke = {
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
} as const

export function ArrowUpIcon({ size = 20 }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 15V5M10 5L5.5 9.5M10 5L14.5 9.5" {...stroke} />
        </svg>
    )
}

export function ArrowDownIcon({ size = 20 }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 5V15M10 15L5.5 10.5M10 15L14.5 10.5" {...stroke} />
        </svg>
    )
}

export function PlusIcon({ size = 28 }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 28 28" aria-hidden="true">
            <path d="M14 6V22M6 14H22" {...stroke} strokeWidth={3} />
        </svg>
    )
}

export function CloseIcon({ size = 16 }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3.5 3.5L12.5 12.5M12.5 3.5L3.5 12.5" {...stroke} />
        </svg>
    )
}

export function CheckIcon({ size = 16 }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3.5 8.5L6.5 11.5L12.5 4.5" {...stroke} strokeWidth={2.2} />
        </svg>
    )
}

export function SwapIcon({ size = 22 }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 22 22" aria-hidden="true">
            <path d="M7 4V17M7 4L3.5 7.5M7 4L10.5 7.5M15 18V5M15 18L11.5 14.5M15 18L18.5 14.5" {...stroke} />
        </svg>
    )
}

export function CalendarIcon({ size = 22 }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 22 22" aria-hidden="true">
            <rect x="3.5" y="5" width="15" height="13.5" rx="3" {...stroke} />
            <path d="M3.5 9.5H18.5M7.5 3V6.5M14.5 3V6.5" {...stroke} />
        </svg>
    )
}

export function SunIcon({ size = 22 }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 22 22" aria-hidden="true">
            <circle cx="11" cy="11" r="4" {...stroke} />
            <path d="M11 2.5V4.5M11 17.5V19.5M2.5 11H4.5M17.5 11H19.5M5 5L6.4 6.4M15.6 15.6L17 17M5 17L6.4 15.6M15.6 6.4L17 5" {...stroke} />
        </svg>
    )
}

export function MoonIcon({ size = 22 }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 22 22" aria-hidden="true">
            <path d="M18 13.2A7.5 7.5 0 0 1 8.8 4 7.5 7.5 0 1 0 18 13.2Z" {...stroke} />
        </svg>
    )
}

export function ChevronDownIcon({ size = 18 }: IconProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
            <path d="M5 7L9 11L13 7" {...stroke} />
        </svg>
    )
}
