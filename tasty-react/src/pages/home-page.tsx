import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function HomePage() {
  const recipes = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      cuisine: 'Italian',
      servings: 4,
      prepTimeMinutes: 30,
      cookTimeMinutes: 60,
    },
  ];
  const cuisines: Array<string> = [
    'All',
    'Italian',
    'Chinese',
    'Japanese',
    'Indian',
    'Mexican',
  ];
  return (
    <div>
      <div className='xl-px-24 px-10'>
        <div className='my-12'>
          {cuisines.map((cuisine, idx) => (
            <Badge
              key={`${cuisine}-${idx}`}
              variant={'outline'}
              className='border-orange-800 text-gray-900 text-lg mx-2 my-1 hover:cursor-pointer bg-orange-50 transition-transform hover:scale-110 ease-in duration-200'
            >
              {cuisine}
            </Badge>
          ))}
          <div className='grid grid-cols- md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-x-10 gap-y-20 xl:gap-y-32 xl:pt-32 pt-12 pb-40'>
            {recipes.map((recipe, idx) => (
              <Card
                key={`${recipe.name}-${idx}`}
                className='flex flex-col bg-orange-50 hover:scale-105 ease-in duration-200 xl:min-h-[600px] fancyGradient'
              >
                <CardHeader></CardHeader>
                <CardContent>
                  <CardTitle className='uppercase lg:text-3xl relative font-bold line-clamp-2'>
                    {recipe.name}
                  </CardTitle>
                  <CardDescription>{recipe.cuisine}</CardDescription>
                </CardContent>
                <CardFooter className='flex items-start gap-2 lg:gap-12 lg:flex-row flex-col'>
                  <div className='flex flex-col'>
                    <p className='text-lg'>Serves</p>
                    <p className='text-gray-800'>{recipe.servings}</p>
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-lg'>Prep Time</p>
                    <p className='text-gray-800'>
                      {recipe.prepTimeMinutes} MIN
                    </p>
                  </div>
                  <div className='flex flex-col'>
                    <p className='text-lg'>Cook Time</p>
                    <p className='text-gray-800'>
                      {recipe.cookTimeMinutes} MIN
                    </p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
