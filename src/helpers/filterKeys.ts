export const filterKeys = <TRecord extends Record<string, any>, TKeys extends Array<keyof TRecord>>(
    record: TRecord,
    keys: TKeys
) => {
    const result = {} as Record<TKeys[number], any>

    for (const key of keys) {
        if (record.hasOwnProperty(key)) {
            result[key] = record[key]
        }
    }

    return result
}
