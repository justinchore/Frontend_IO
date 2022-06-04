//Todo
//User clicks on a rating
//- save in variable
//- take all chosen classes off the ratings (if there are any)
//- add the chosen class to the correct button to change the color.
//On Submit

//Elements to get:
// 1. Buttons
// 2. Submit Btn

let userRating = 0;
const ratings = [...document.getElementsByClassName('btn rating-btn')];

console.log(ratings);

document.addEventListener('click', e => {
  e.preventDefault();
  if (!e.target.classList.contains('rating-btn')) {
    return;
  }

  //Update userRating
  userRating = e.target.innerHTML;
  //Reset Rating list
  resetChosenRating();
  e.target.classList.toggle('chosen-rating');
});

const resetChosenRating = () => {
  ratings.forEach(r => {
    if (r.classList.contains('chosen-rating')) {
      r.classList.remove('chosen-rating');
    }
  });
};
