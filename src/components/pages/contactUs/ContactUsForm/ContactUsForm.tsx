import { Button } from '../../../ui/Button';
import ourEmployeesImg from './../../../../assets/img/pages/contactUs/ourEmployees.webp';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Input } from './Input';
import { customersAPI } from '../../../../api';
import { toast } from 'react-toastify';
import { FullBg } from '../../../ui/FullBg';

let schema = yup.object().shape({
  email: yup.string().email().required('Required'),
  howCanWeHelpYou: yup.string().required('Required').max(1500, 'Слишком длинное сообщение'),
});

const initialValues = { email: '', howCanWeHelpYou: '' }
export type ContactUsFormValuesType = typeof initialValues

export const ContactUsForm: React.FC = () => {
  return <section className='relative pt-8 pb-7 sm:pt-10 sm:pb-9 md:pt-12 md:pb-11 lg:pt-14 lg:pb-13 xl:pt-16 xl:pb-14'>
    <FullBg />
    <div className='grid grid-cols-1 gap-y-8 p-2 shadow-pinkShadow bg-white rounded-2xl justify-between items-center lg:grid-cols-[55%_40%] xl:grid-cols-[49%_40%] sm:p-3 md:p-4 lg:p-5'>
      <img className='w-full' src={ourEmployeesImg} alt='our employees' />
      <div>
        <div>
          <h2 className='text-darkBlue'>Contact us</h2>
          <p className='text1 mt-1 sm:mt-2'>Questions, bug reports, feedback.</p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            let resp = await customersAPI.add(values);

            if (resp) {
              toast.success('Success')
              resetForm();
            } else {
              toast.error('Something went wrong. Try again later')
            }

            setSubmitting(false);
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form className='flexCol mt-6 gap-y-5 sm:mt-7 sm:gap-y-7 lg:gap-y-8 lg:mt-10 xl:gap-y-10 xl:mt-12'>
              <Input heading='Your mail' name='email' placeholder='Enter your email' error={errors.email} />
              <Input className='h-56 resize-none' heading='Tell us what you need help with' placeholder='Enter a topic' name='howCanWeHelpYou' as='textarea' error={errors.howCanWeHelpYou} />
              <Button className='' disabled={isSubmitting || !!errors.email || !!errors.howCanWeHelpYou} type='submit'>Send now</Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </section>
};