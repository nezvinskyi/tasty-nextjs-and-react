import BagdeFilter from '@/components/ui/badge-filter';
import RecipeList from '@/components/ui/recipe-list';
import { getRecipes } from '@/lib/recipe';
import { RecipeType } from '@/types';


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
