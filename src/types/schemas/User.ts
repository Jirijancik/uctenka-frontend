export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  businesses?: string[];
  businessPartners?: string[];
}
