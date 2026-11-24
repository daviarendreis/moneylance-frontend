import toYMD from "./toYMD"

export default function isOverdue (dueDate: string) {
    const todayStr = toYMD(new Date())
    return dueDate < todayStr
}