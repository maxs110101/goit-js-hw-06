const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

function createIngredientsItems(ingredients) {
  return ingredients.map(ingredient => {
  const itemRef = document.createElement('li');

  itemRef.classList.add('item');
  itemRef.textContent = ingredient;

  return itemRef;
})
}

const itemsingredientArg = createIngredientsItems(ingredients)

ingredientsRef.append(...itemsingredientArg);