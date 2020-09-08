export const cleanRootText = (text: string): string => {
    return text.replace(/\n\n+/g,'\n\n').trim();
    
};

export const cleanParagraphText = (text: string): string => {
    return text.replace(/\s+/g,' ').trim();
}