import { gql } from '@apollo/client';
import { BusinessType } from '../../types/businessType';
import { Currency } from '../../types/currency';
import { PaymentMethod } from '../../types/paymentMethod';
import { PaymentTerms } from '../../types/paymentTerms';

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
  paymentTerms?: PaymentTerms;
  postcode: number;
  street: string;
  typeOfBussiness?: BusinessType;
  unifiedVatNumber: number;
  userId: string;
  vatNumber?: number;
}

export const GET_BUSINESSES = gql`
  query getClients {
    getClients {
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
  getClients: {
    _id: Business['_id'];
    city: Business['city'];
    country: Business['country'];
    name: Business['name'];
    street: Business['street'];
    unifiedVatNumber: Business['unifiedVatNumber'];
  }[];
}
