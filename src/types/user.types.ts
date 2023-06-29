export type IUser = {
  fullName: string;
  email: string;
  walletAddress: `0x${string}` | string;
  phone: string;
  isVerified: boolean;
  isActive: boolean;
  verifiedOn: Date;
  skills: string[];
  interests: string[];
  portfolio: string;
};
