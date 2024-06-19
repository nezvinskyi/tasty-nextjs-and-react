'use client';

import { Badge } from '@/components/ui/badge';
import { RecipeContext } from '@/context/recipe-context';
import { useContext } from 'react';

export default function BagdeFilter() {
  const { dispatch } = useContext(RecipeContext);

  const cuisines: Array<string> = [
    'All',
    'Asian',
    'American',
    'Greek',
    'Italian',
    'Indian',
    'Japanese',
    'Mediterranean',
    'Mexican',
    'Pakistani',
  ];

  const handleOnClick = (
    e: React.MouseEvent<HTMLDivElement>,
    cuisine: string
  ) => {
    e.preventDefault();
    dispatch({
      type: 'SELECTED_CUISINE',
      payload: {
        selectedCuisine: cuisine,
      },
    });
  };

  return (
    <div>
      {cuisines.map((cuisine, idx) => (
        <Badge
          key={`${cuisine}-${idx}`}
          variant={'outline'}
          className='border-orange-800 text-gray-900 text-lg mx-2 my-1 hover:cursor-pointer bg-orange-50 transition-transform hover:scale-110 ease-in duration-200'
          onClick={(e) => handleOnClick(e, cuisine)}
        >
          {cuisine}
        </Badge>
      ))}
    </div>
  );
}
