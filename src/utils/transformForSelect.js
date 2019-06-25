export function transformForSelect(data,valueField,labelField) {
    return data.map((o) => {
        return {
            ...o,
            value: o[valueField].toString(),
            label: o[labelField],
        }
    })
}