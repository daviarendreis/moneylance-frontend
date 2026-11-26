export default function formatTimestamp (date: string) {
    return new Intl.DateTimeFormat('pt-BR', { 
        day: '2-digit', 
        month: '2-digit'
    }).format(new Date(date))
}