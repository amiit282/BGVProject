import * as yup from 'yup';

export const ValidationSchema = yup.object({
  landlord_name: yup.string().required('Required'),
  landlord_mob: yup
    .string()
    .matches('[0-9]{10}', 'Enter 10 digit Mobile Number')
    .required('Required'),
  landlord_email: yup
    .string()
    .email('Invalid Email Address')
    .required('Required'),
  landLordAddress: yup.string().required('Required'),
  landLordCity: yup.string().required('Required'),
  landLordState: yup.string().required('Required'),
  landLordZip: yup
    .string()
    .required('Required')
    .matches('[0-9]{6}', 'Enter 6 digit Zipcode'),
  tenantname: yup.string().required('Required'),
  tenantmobile: yup
    .string()
    .matches('[0-9]{10}', 'Enter 10 digit Mobile Number')
    .required('Required'),
  tenantAddr: yup.string().required('Required'),
  tenantCity: yup.string().required('Required'),
  tenantState: yup.string().required('Required'),
  tenantZip: yup
    .string()
    .required('Required')
    .matches('[0-9]{6}', 'Enter 6 digit Zipcode'),
  tenant_email: yup
    .string()
    .email('Invalid Email Address')
    .required('Required'),
  feedback: yup
    .string()
    .required('Required')
    .min(20, 'Feedback should be atleast 20 chars'),
});
