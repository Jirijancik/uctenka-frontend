import { gql } from '@apollo/client';
import { BusinessType } from '../../types/businessType';
import { Currency } from '../../types/currency';
import { PaymentMethod } from '../../types/paymentMethod';
import { PaymentTerms } from '../../types/paymentTerms';

export interface Client {
  _id: string;
  userId: string;
  name: string;
  unifiedVatNumber: number;
  vatNumber?: number;
  currency: Currency;
  accountBalance: number;
  paymentTerms?: PaymentTerms;
  contactPerson?: string;
  email: string;
  country: string;
  street: string;
  city: string;
  postcode: number;
  mobilePhone: string;
  typeOfBussiness?: BusinessType;
  accountNumber?: number;
  paymentMethod?: PaymentMethod;
}

export const GET_CLIENTS = gql`
  query getClients {
    getClients {
      _id
      unifiedVatNumber
      name
      city
      street
      country
    }
  }
`;

export interface ClientsData {
  getClients: {
    name: Client['name'];
    unifiedVatNumber: Client['unifiedVatNumber'];
    _id: Client['_id'];
    city: Client['city'];
    street: Client['street'];
    country: Client['country'];
  }[];
}
