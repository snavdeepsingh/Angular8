import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Szechuan Chicken', 'Stir fry chicken with vegetables and szechuan peppers.', 'https://sweetandsavorymeals.com/wp-content/uploads/2019/04/Szechuan-Chicken-Recipe-1.jpg'),
    new Recipe('Szechuan Chicken', 'Stir fry chicken with vegetables and szechuan peppers.', 'https://sweetandsavorymeals.com/wp-content/uploads/2019/04/Szechuan-Chicken-Recipe-1.jpg'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
