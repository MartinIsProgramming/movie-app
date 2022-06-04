import { Formik, Form, Field } from 'formik';
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/solid';

import { Genres } from '../interfaces/movie';
import { useGetGenres } from '../hooks';
import { Rating } from './Rating';

interface InitialValues {
  genres: Genres[];
}

const initialValues: InitialValues = {
  genres: [],
};

export const FilterBy = () => {
  const { genres } = useGetGenres();

  const onSubmit = async (values: InitialValues, onSubmitProps: any) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Disclosure as="div">
          {({ open }) => (
            <>
              <h3 className="mb-7">
                <Disclosure.Button className="flex items-center space-x-3 text-sm text-white">
                  <span className="flex items-center">
                    {open ? (
                      <ChevronDownIcon className="w-5 h-5" />
                    ) : (
                      <ChevronRightIcon className="w-5 h-5" />
                    )}
                  </span>
                  <span className="text-2xl font-semibold font-poppins">Filter by</span>
                </Disclosure.Button>
              </h3>

              <Disclosure.Panel className="space-y-5">
                <div className="bg-[#151515] p-5 mb-5 rounded-xl md:mb-0">
                  <h3 className="mb-4 text-xl">Rating</h3>
                  <Rating
                    className="flex items-center space-x-1"
                    fullStarStyle="w-6 h-6"
                    emptyStarStyle="w-5 h-5"
                  />
                </div>

                <div className="bg-[#151515] p-5 mb-5 rounded-xl md:mb-0">
                  <h3 className="mb-4 text-xl">Category</h3>
                  <div className="grid gap-y-2 lg:gap-x-2 sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-2">
                    {genres &&
                      genres.map(genre => (
                        <label
                          key={genre.id}
                          className="flex items-center space-x-4 text-gray-400 lg:space-x-2"
                        >
                          <Field
                            type="checkbox"
                            name="genres"
                            value={genre.name}
                            className="w-4 h-4 text-indigo-600 bg-transparent border-2 rounded"
                          />
                          <span>{genre.name}</span>
                        </label>
                      ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </Form>
    </Formik>
  );
};
