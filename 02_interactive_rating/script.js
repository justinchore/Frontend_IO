//Todo
//User clicks on a rating
//- save in variable
//- take all chosen classes off the ratings (if there are any)
//- add the chosen class to the correct button to change the color.
// - get the rating and insert into rating msg
//On Submit
// - have the rating card disappear ('hidden')
// - Remove hidden from the thank you card

//Elements to get:
// 1. Buttons
// 2. Submit Btn

let userRating = 0;
const ratings = [...document.getElementsByClassName('btn rating-btn')];
const ratingElement = document.getElementById('rating');
const ratingContainer = document.getElementsByClassName(rating - container);

console.log(ratings);

document.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.classList.contains('rating-btn')) {
    //Update userRating
    userRating = e.target.innerHTML;

    //Reset Rating list
    resetChosenRating();

    //Toggle Chosen Color
    e.target.classList.toggle('chosen-rating');
  } else if (e.target.classList.contains('submit-btn')) {
    console.log('submit Button!');
    ratingElement.innerHTML = userRating;
  }

  return;
});

const resetChosenRating = () => {
  ratings.forEach(r => {
    if (r.classList.contains('chosen-rating')) {
      r.classList.remove('chosen-rating');
    }
  });
};
