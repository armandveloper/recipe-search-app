export interface SearchRecipes {
	results: RecipeResult[];
	offset: number;
	number: number;
	totalResults: number;
}

export interface RecipeResult {
	id: number;
	title: string;
	image: string;
	imageType: ImageType;
}

export enum ImageType {
	Jpg = 'jpg',
}
