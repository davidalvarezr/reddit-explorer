export const applyLocalTimezoneOffset = (utcDate: Date): Date => {
    const localOffsetInMinutes = new Date().getTimezoneOffset()
    const localOffsetInMillisecond = localOffsetInMinutes * 60 * 1000
    const date = new Date(utcDate)
    date.setTime(date.getTime() - localOffsetInMillisecond)
    return date
}
