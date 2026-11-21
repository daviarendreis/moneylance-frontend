export default function getMonth () {
    return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(new Date())
}