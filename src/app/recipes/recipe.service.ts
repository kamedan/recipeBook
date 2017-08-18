import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

    private recipes:Recipe[] = [
    new Recipe(
      'test',
      'test',
      'http://assets.cougar.nineentertainment.com.au/Assets/GourmetTraveller/2013/10/16/24465/1013GT-french-salads-nicoise-628.jpg',
      [
          new Ingredient('apple',5),
          new Ingredient('meat',15)
      ]
    ),
    new Recipe(
      'test1',
      'test1',
      'http://assets.cougar.nineentertainment.com.au/Assets/GourmetTraveller/2013/10/16/24465/1013GT-french-salads-nicoise-628.jpg',
      [
        new Ingredient('apple',5)
      ]
    ),
    new Recipe(
      'test2',
      'test2',
      'http://assets.cougar.nineentertainment.com.au/Assets/GourmetTraveller/2013/10/16/24465/1013GT-french-salads-nicoise-628.jpg',
      [
          new Ingredient('apple',5)
      ]
    ),
    new Recipe(
      'test3',
      'test3',
      'http://assets.cougar.nineentertainment.com.au/Assets/GourmetTraveller/2013/10/16/24465/1013GT-french-salads-nicoise-628.jpg',
      []
    ),
  ];

  constructor(private slService:ShoppingListService){

  }

  getRecipes(){
      return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredient:Ingredient[]){
      this.slService.addIngredients(ingredient);
  }


  getRecipe(id:number){
    return this.recipes[id];
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updtaeRecipe(index:number, newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index:number){
     this.recipes.splice(index, 1);
     this.recipeChanged.next(this.recipes.slice());
  }
  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
    
}