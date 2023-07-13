import { useEffect, useState } from 'react';
import { Formik } from 'formik';

import { fetchCategories } from 'api/categories';
import { RecipeForm } from './AddRecipeForm.styled';
import RecipeDescriptionFields from 'components/RecipeDescriptionFields/RecipeDescriptionFields';
import RecipeIngredientsFields from 'components/RecipeIngredientsFields/RecipeIngredientsFields';
import RecipePreparationFields from 'components/RecipePreparationFields/RecipePreparationFields';

const AddRecipeForm = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const result = await fetchCategories();
      setCategories(result);
    };
    getCategories();
  }, []);

  return (
    <Formik
      initialValues={{ preparation: '' }}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values, handleSubmit }) => (
        <RecipeForm onSubmit={handleSubmit}>
          <RecipeDescriptionFields categories={categories} />
          <RecipeIngredientsFields />
          <RecipePreparationFields />
          <button type="submit">Submit</button>
        </RecipeForm>
      )}
    </Formik>
  );
};

export default AddRecipeForm;
