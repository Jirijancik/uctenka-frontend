import type { BusinessType } from '../businessType';
import type { Currency } from '../currency';
import type { PaymentMethod } from '../paymentMethod';
import type { PaymentTerms } from '../paymentTerms';
import type { User } from './User';

export interface Enterprise {
  _id: string;
  accountBalance: number;
  accountNumber: number;
  bussinessType: BusinessType;
  city: string;
  contactPerson: string;
  country: string;
  currency: Currency;
  email: string;
  mobilePhone: number;
  name: string;
  paymentMethod: PaymentMethod;
  paymentTerms: PaymentTerms;
  postcode: number;
  street: string;
  unifiedVatNumber: number;
  user: User['_id'];
  vatNumber: number;
}
