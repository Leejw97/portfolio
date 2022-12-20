
// for (let i = 0; i < $('.tab-button').length; i++) {
//   $('.tab-button').eq(i).on('click', function () {
//     탭열기(i)
//   })
// };

$('.list').click(function (e) {

  // if (e.target == document.querySelectorAll('.tab-button')[0]) {
  //   탭열기(0)
  // }
  // if (e.target == document.querySelectorAll('.tab-button')[1]) {
  //   탭열기(1)
  // }
  // if (e.target == document.querySelectorAll('.tab-button')[2]) {
  //   탭열기(2)
  // }
  console.log(e.target.dataset.id);
  tab(e.target.dataset.id);

})


function tab(num) {

  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(num).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(num).addClass('show');
}

