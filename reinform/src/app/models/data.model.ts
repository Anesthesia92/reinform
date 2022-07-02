interface IUser {
  id: number;
  author: IAuthor;
  docCode: string;
  docDate: string;
  docName: string;
  docType: string;
  address: string;
  status: string;
  isSpecial: boolean;

}

interface IAuthor {
  account: string;
  fio: string;
  post: string;
}

