export default function formatDate (date: string) {
    return new Intl.DateTimeFormat('pt-BR', { 
        day: '2-digit', 
        month: '2-digit',
        timeZone: 'UTC'
    }).format(new Date(date))
}