import * as Yup from 'yup';

export const contactUsSchema = Yup.object({
  name: Yup.string().required('Please enter your name'),
  phone: Yup.string()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .matches(/^\+?[0-9]+( [0-9]+)*$/, 'Invalid phone number')
    .required('Please enter your contact number')
    .nullable()
    .test('length-check', 'Invalid phone number', (value) => {
      if (!value) return true;
      return value.length > 5 && value.length < 20;
    }),
  message: Yup.string().required('Please enter the message'),
});
