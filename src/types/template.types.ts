export enum IRoleType {
  client = 'client',
  worker = 'worker',
  admin = 'admin'
}

export type IAuthor = {
  walletAddress: `0x${string}` | string;
};

export type IInitialValues = {
  templateId?: string | undefined;
  slug?: string;
  type?: string;
  title: string | undefined;
  intellectualProperty: Terms;
  confidentiality: Terms;
  termination: Terms;
  liability: Terms;
  dispute: Terms;
  author?: IAuthor | undefined;
  walletAddress: `0x${string}` | string | undefined;
};

export type Terms = {
  title?: string;
  heading?: string;
  text: string;
  lastUpdatedOn?: Date | string;
  updatedBy?: string;
};

export type Block = {
  // title: string;
  text: string;
  heading: string;
};

export type ITemplate = {
  templateId?: string;
  intellectualProperty: Terms[];
  confidentiality: Terms[];
  termination: Terms[];
  liability: Terms[];
  dispute: Terms[];
  _id?: string;
  title: string;
  createdAt?: Date | number;
  slug: string;
  author?: IAuthor;
  walletAddress: string;
};
