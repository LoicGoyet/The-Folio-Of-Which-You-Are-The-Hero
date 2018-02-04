export const opacify = (strColor, opacity) => (
    strColor
        .replace('rgb', 'rgba')
        .replace(')', `, ${opacity})`)
)
