interface IUsers {
  id: string,
  author: IAuthor | null,
  docCode: string,
  docDate: string,
  docName: string,
  docType: string,
  address: string,
  status: string,
  isSpecial: boolean;

}

interface IAuthor {
  account?: string,
  fio?: string,
  post?: string,
}

