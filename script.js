
//lab 3 (part 2)
 document.addEventListener('DOMContentLoaded', () => {
            const foodContainer = document.getElementById('food-container');
            const filterBtns = document.querySelectorAll('.filter-btn');
            
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    loadFoodData(btn.dataset.food);
                });
            });
            
            // Load initial data (pizza)
            loadFoodData('pizza');
            
            
            async function loadFoodData(foodType) {
                foodContainer.innerHTML = '<div class="loading">Loading delicious recipes...</div>';
                
                try {
                    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${foodType}`);
                    const data = await response.json();
                    
                    if (data.recipes && data.recipes.length > 0) {
                        displayFoodItems(data.recipes);
                    } else {
                        foodContainer.innerHTML = '<div class="error-message">No recipes found for this category</div>';
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                    foodContainer.innerHTML = '<div class="error-message">Error loading recipes. Please try again.</div>';
                }
            }
            
           
            function displayFoodItems(recipes) {
                foodContainer.innerHTML = '';
                
                recipes.forEach(recipe => {
                    const foodCard = document.createElement('div');
                    foodCard.className = 'food-card';
                    
                    foodCard.innerHTML = `
                        <div class="food-img-container">
                            <img src="${recipe.image_url}" alt="${recipe.title}" class="food-img">
                        </div>
                        <div class="food-info">
                            <h3 class="food-title">${recipe.title}</h3>
                            <p class="food-publisher">${recipe.publisher}</p>
                        </div>
                    `;
                    
                    foodContainer.appendChild(foodCard);
                });
            }
        });
//==================================================================================
//lab 3 (part 1)
const food = ['Burger', 'Pizza', 'Donuts', 'Pizza', 'Koshary', 'Donuts', 'Seafood', 'Burger'];
const foodSet = new Set(food);
foodSet.add('Pasta');
foodSet.delete('Burger');


function clearIfLarge(set) {
  if (set.size > 2) {
    set.clear();
  } 
  else {
    console.log('Set has 2 or fewer items');
  }
  return set;
}


console.log('Before',foodSet); 
const result = clearIfLarge(foodSet);
console.log('After', result); 
//==================================================================================



//==================================================================================
//lab3 (part 3)
class Vehicle {
  constructor(wheels, speed) {
    this.wheels = wheels;
    this.speed = speed;
  }
}

class Bike extends Vehicle {
  static callCount = 0; 
  
  constructor() {
    super(2, 'fast enough'); 
  }

  static countCall() {
    this.callCount++;
    return `Bike class has been accessed ${this.callCount} time(s)`;
  }
}


const myBike = new Bike();
console.log(myBike); 
console.log(Bike.countCall()); 
console.log(Bike.countCall()); 
console.log(Bike.countCall()); 
