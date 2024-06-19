import BagdeFilter from '@/components/ui/badge-filter';
import RecipeList from '@/components/ui/recipe-list';
import { RecipeType } from '@/types';


const getRecipes = async () => {
  const response = await fetch('https://dummyjson.com/recipes');
  const data = await response.json();
  return data.recipes;
};

export default async function HomePage() {
  const recipes: RecipeType[] = await getRecipes();

  return (
    <div>
      <div className='xl-px-24 px-10'>
        <div className='my-12'>
          <BagdeFilter />
          <RecipeList recipes={recipes} />
        </div>
      </div>
    </div>
  );
}
