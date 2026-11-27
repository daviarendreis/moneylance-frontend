// Ícones de categorias que servem tanto para entrada quanto para saída
const neutralIcons = new Set(["dots"])

export default function isNeutralIcon(icon: string | null | undefined) {
    return !!icon && neutralIcons.has(icon)
}
