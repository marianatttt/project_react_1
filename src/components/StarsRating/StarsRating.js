import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({rating}) => {
 return (
  <div >
      <StarRatings
            rating={rating}
            starRatedColor="#FFD700"
            starEmptyColor="#0f0f0f"
            starHoverColor="#FFD700"
            starSpacing="4px"
            starDimension="17px"
            numberOfStars={10}
            changeRating={null}
            name="rating"
      />
  </div>
 );
};

export {StarsRating};





















// const ratings = document.querySelectorAll('.rating')
//
// if (ratings.length>0) {
//     initRetings();
// }
// function initRetings() {
//     let ratingActive, ratingValue;
//     for (let index=0; index <ratings.length; index ++){
//         const rating = ratings[index];
//         initRetings(rating)
//     }
//
//
//     function initRetings(rating) {
//         initRetingsVars(rating);
//
//         setRatingActiveWidth();
//     }
//
//     function initRetingsVars(rating) {
//         ratingActive = ratings.querySelector('.rating_active');
//         ratingValue = rating.querySelector('.rating_value')
//
//     }
//     function setRatingActiveWidth(index = ratingValue.innerHTML) {
//         const ratingActiveWidth = index / 0.1;
//         ratingActive.style.width = `${ratingActiveWidth}%`
//     }
// }
//


