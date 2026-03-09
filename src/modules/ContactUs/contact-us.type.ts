import { ImageType } from '@/types/image.type';

type ContactType = {
  bannerImage: ImageType;
  title: string;
  helperText: string;
  phoneNumber: string;
  mobileNumber: string;
  officeHour: string;
};

type AddressType = {
  address: string;
  city: string;
  gmail: string;
};

export type ContactUsType = {
  contact: ContactType;
  address: AddressType;
};
