export const removePunctuations = (text: string): string => {
    return text.replace(/,|;|\:|\.|!|\?|\(|\)/g,'');
}