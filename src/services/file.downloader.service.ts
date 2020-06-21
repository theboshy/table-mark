import FileSaver from 'file-saver'

export class FileDownloader  {

 downloadFile =(fileName: string) => {
     FileSaver.saveAs("http://localhost:3000/resources/" + fileName, fileName);
 }

}