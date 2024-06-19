export type RecipeType = {
    id: number;
    image: string;
    name: string;
    mealType: Array<string>;
    cuisine: string;
    difficulty: string;
    ingredients: Array<string>;
    instructions: Array<string>;
    rating: number;
    reviewCount: number;
    servings: number;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
  }