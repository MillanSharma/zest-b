// export const sanitizeData = (data: any[]): any[] => {
//     const rv = data.map((obj: any) => {
//         const [key, value] : [string, any] = Object.entries(obj)[0];
//         return { fileName: key, url: value.raw_url, language: value.language, size: value.size, type: value.type };
//     });
//     return rv;
// };