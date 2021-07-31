export const filterKeys = (record: Record<string, any>, keys: string[]) => {
    const result = {}

    for (const key of keys) {
        if (record.hasOwnProperty(key)) {
            result[key] = record[key]
        }
    }

    return result
}
