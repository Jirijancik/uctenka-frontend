import { gql } from '@apollo/client';
import { BusinessType } from '../../types/businessType';
import { Currency } from '../../types/currency';
import { PaymentMethod } from '../../types/paymentMethod';

export interface Business {
  _id: string;
  accountBalance: number;
  accountNumber?: number;
  city: string;
  contactPerson?: string;
  country: string;
  currency: Currency;
  email: string;
  mobilePhone: string;
  name: string;
  paymentMethod?: PaymentMethod;
  paymentTerms?: number;
  postcode: number;
  street: string;
  typeOfBusiness?: BusinessType;
  unifiedVatNumber: number;
  userId: string;
  vatNumber?: number;
}

export const GET_BUSINESSES = gql`
  query getBusinesses {
    getBusinesses {
      _id
      city
      country
      name
      street
      unifiedVatNumber
    }
  }
`;

export interface BusinessesData {
  getBusinesses: {
    _id: Business['_id'];
    city: Business['city'];
    country: Business['country'];
    name: Business['name'];
    street: Business['street'];
    unifiedVatNumber: Business['unifiedVatNumber'];
  }[];
}
