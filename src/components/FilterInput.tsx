import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@heroicons/react/solid';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { useAppDispatch } from '../hooks';
import { resetPageCount } from '../features/counter/pageCounterSlice';

export interface InitialValues {
  searchTerm: string;
}

export const inputValidations = Yup.object({
  searchTerm: Yup.string().min(3, 'minimum 3 characters '),
});

const initialValues: InitialValues = {
  searchTerm: '',
};

interface Props {
  className?: string;
}

export const FilterInput: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values: InitialValues, onSubmitProps: any) => {
    const { searchTerm } = values;
    if (searchTerm === '') return;
    onSubmitProps.resetForm();

    dispatch(resetPageCount());
    navigate(`/search?movie=${values.searchTerm}&page=1`);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={inputValidations}
      onSubmit={onSubmit}
      className={className}
    >
      <Form className="relative">
        <Field
          type="text"
          id="searchTerm"
          name="searchTerm"
          placeholder="Search..."
          className="border-1 border-[#7C7C7C] rounded-2xl w-full text-sm bg-[#424242] text-white focus:ring-0 placeholder-gray-300 py-3 px-5 focus:border-gray-400"
        />
        <ErrorMessage className="mt-2 text-red-500" name="searchTerm" component="div" />
        <button type="submit" className="absolute inset-y-0 right-4">
          <SearchIcon className="w-5 h-5 text-white" />
        </button>
      </Form>
    </Formik>
  );
};
