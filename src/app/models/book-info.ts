export interface BookInfo {
    title: string, 
    authors: string[],
    previewLink: string,
    imageLinks: { smallThumbnail: string, thumbnail: string },
    publisher: string,
    publishedDate: string,
    description: string
}
