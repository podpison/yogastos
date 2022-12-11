import { ErrorMessage, Field } from "formik";
import cn from 'classnames';

type Props = {
  heading: string
  name: string
  placeholder: string
  error: string | undefined
  as?: string
  className?: string
  type?: string
}

export const Input: React.FC<Props> = ({ heading, name, placeholder, error, className, as, type }) => {
  return <div>
    <p className={cn('font-semibold', error && 'text-error')}>{heading}</p>
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      className={
        cn(
          'bg-pink transition-all outline outline-1 w-full text-md py-3 px-2 mt-2 rounded-lg sm:mt-4 sm:py-5 sm:px-4',
          error ? 'text-error outline-error placeholder:text-error focus:outline-error' : 'outline-transparent text-darkPink placeholder:text-darkPink focus:outline-darkPink',
          className,
        )
      }
      as={as}
    />
    <ErrorMessage className='text-error mt-2 text-sm' name={name} component="div" />
  </div>
};