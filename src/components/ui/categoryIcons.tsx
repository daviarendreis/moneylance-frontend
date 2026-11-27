import type { ReactNode } from "react"

const stroke = {
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
} as const

const paths: Record<string, ReactNode> = {
    wallet: (
        <g {...stroke}>
            <rect x="3" y="5.5" width="14" height="10" rx="2" />
            <path d="M3 8.5H17M12.5 12.5H14" />
        </g>
    ),
    tag: (
        <g {...stroke}>
            <path d="M10.5 3H16C16.6 3 17 3.4 17 4V9.5L9.5 17L3 10.5Z" />
            <circle cx="13.5" cy="6.5" r="1" />
        </g>
    ),
    cart: (
        <g {...stroke}>
            <path d="M2.5 3.5H4.5L6.5 12.5H15L16.5 6.5H5.2" />
            <circle cx="7.5" cy="16" r="1" />
            <circle cx="14" cy="16" r="1" />
        </g>
    ),
    bus: (
        <g {...stroke}>
            <rect x="4" y="3" width="12" height="12" rx="2.5" />
            <path d="M4 9H16M7 12.2V12.3M13 12.2V12.3M6.5 15V17M13.5 15V17" />
        </g>
    ),
    sofa: (
        <g {...stroke}>
            <path d="M4.5 9V7C4.5 5.9 5.4 5 6.5 5H13.5C14.6 5 15.5 5.9 15.5 7V9" />
            <path d="M3 10.5C3 9.7 3.7 9 4.5 9C5.3 9 6 9.7 6 10.5V12H14V10.5C14 9.7 14.7 9 15.5 9C16.3 9 17 9.7 17 10.5V15H3Z" />
            <path d="M5 15V16.5M15 15V16.5" />
        </g>
    ),
    house: (
        <g {...stroke}>
            <path d="M3.5 9L10 3.5L16.5 9V16H3.5Z" />
            <path d="M8 16V12H12V16" />
        </g>
    ),
    bolt: <path d="M11 2.5L4.5 11H10L9 17.5L15.5 9H10Z" {...stroke} />,
    utensils: (
        <g {...stroke}>
            <path d="M5.5 3V7C5.5 8.1 6.4 9 7.5 9C8.6 9 9.5 8.1 9.5 7V3M7.5 3V17" />
            <path d="M14.5 17V3C12.8 4 12 6 12 8.5V11H14.5" />
        </g>
    ),
    health: <path d="M8 3.5H12V8H16.5V12H12V16.5H8V12H3.5V8H8Z" {...stroke} />,
    ticket: (
        <g {...stroke}>
            <path d="M3 6.5H17V8.7C16 8.7 15.2 9.5 15.2 10.5C15.2 11.5 16 12.3 17 12.3V14.5H3V12.3C4 12.3 4.8 11.5 4.8 10.5C4.8 9.5 4 8.7 3 8.7Z" />
            <path d="M12 9V9.5M12 11.5V12" />
        </g>
    ),
    dots: (
        <g fill="currentColor">
            <circle cx="5" cy="10" r="1.5" />
            <circle cx="10" cy="10" r="1.5" />
            <circle cx="15" cy="10" r="1.5" />
        </g>
    ),
}

interface CategoryIconProps {
    icon: string | null | undefined
    size?: number
    fallback?: ReactNode
}

export function CategoryIcon({ icon, size = 20, fallback = null }: CategoryIconProps) {
    const content = icon ? paths[icon] : undefined
    if (!content) return <>{fallback}</>
    return (
        <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true">
            {content}
        </svg>
    )
}
