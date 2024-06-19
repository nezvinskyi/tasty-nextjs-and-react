import { getRecipes } from '@/lib/recipe';
import { RecipeType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const recipes: RecipeType[] = await getRecipes();

  return recipes.map((recipe) => ({
    params: {
      recipeId: recipe.id.toString(),
    },
  }));
}

export default async function Page({
  params,
}: {
  params: { recipeId: string };
}) {
  const { recipeId } = params;

  const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
  const recipe = await response.json();

  if (!recipe || !recipe.id) {
    return <div>Recipe not found</div>;
  }
  return (
    <div className='xl:px-48 px-10 pb-12 fancyGradient'>
      <div className='grid xl:grid-cols-2 pb-10 xl:pb-20'>
        <div className='pt-12 xl:pt-12'>
          <Link href='/' className='text-2xl'>
            <p>← Back to All Recipes</p>
          </Link>
          <h1 className='text-4xl lg:text-6xl my-8 uppercase'>{recipe.name}</h1>
          <div className='grid grid-cols-3 gap-12'>
            <div className='flex flex-col'>
              <p className='text-xl lg:text-3xl uppercase'>🍽 Serves</p>
              <p className='text-grey-800 text-2xl lg:text-3xl font-bold'>
                {recipe.servings}
              </p>
            </div>
            <div className='flex flex-col'>
              <p className='text-xl lg:text-3xl uppercase'>⌛ Prep Time</p>
              <p className='text-grey-800 text-2xl lg:text-3xl font-bold'>
                {recipe.prepTimeMinutes} MIN
              </p>
            </div>
            <div className='flex flex-col'>
              <p className='text-xl lg:text-3xl uppercase'>🕒 Cook Time</p>
              <p className='text-grey-800 text-2xl lg:text-3xl font-bold'>
                {recipe.cookTimeMinutes} MIN
              </p>
            </div>
            <div className='flex flex-col'>
              <p className='text-xl lg:text-3xl uppercase'>🍔 Cuisine</p>
              <p className='text-grey-800 text-2xl lg:text-3xl font-bold'>
                {recipe.cuisine}
              </p>
            </div>
            <div className='flex flex-col'>
              <p className='text-xl lg:text-3xl uppercase'>🔥 Difficulty</p>
              <p className='text-grey-800 text-2xl lg:text-3xl font-bold'>
                {recipe.difficulty}
              </p>
            </div>
          </div>
        </div>
        <div className='py-4 mx-auto'>
          <Image
            src={recipe.image}
            width={400}
            height={400}
            alt={recipe.name}
            className='w-96 h-96 lg:h-[600px] lg:w-[600px]'
          />
        </div>
      </div>
      <div className='grid xl:grid-cols-2'>
        <div className='xl:px-12'>
          <h2 className='uppercase text-5xl my-12'>Ingredients</h2>
          <div className='flex flex-col'>
            {recipe.ingredients.map((ingredient: string, idx: number) => (
              <ul
                key={`${ingredient}-${idx}`}
                className='py-2 border-b border-gray-950'
              >
                <li className='text-2xl'>{ingredient}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className='xl:px-12'>
          <h2 className='uppercase text-5xl my-12'>Instructions</h2>
          <div className='flex flex-col'>
            {recipe.instructions.map((instruction: string, idx: number) => (
              <ul key={`${instruction}-${idx}`} className='py-2 list-disc'>
                <li className='text-2xl'>{instruction}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
