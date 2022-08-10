// B1 lấy element cần sử dụng
// B2 lặp qua các nodelist chứa các element
// B3 Thêm class cho thẻ cần(kiểm tra xem có thẻ nào có thuộc tính class cần add chưa)
// B4 Xét hiệu ứng dưới chân di chuyển
// Chú ý : kích thước chiều ngang, vị trí left
//        offsetLeft, offsetWidth
// lấy nó ra và tìm đến thuộc tính style của nó gán cho 2 cái trên
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
  const tabs = $$(".tab-item");
  const panes = $$(".tab-pane");
  const tabActive = $(".tab-item.active");
  const line = $(".tabs .line");
  line.style.width = tabActive.offsetWidth + "px";
  line.style.left = tabActive.offsetLeft + "px";
  console.log(line);
  tabs.forEach((value , index) => {
    const pane = panes[index];
    value.onclick = function(e){
      $(".tab-item.active").classList.remove("active");
      $(".tab-pane.active").classList.remove("active");
      this.classList.add("active");
      pane.classList.add("active");
      line.style.width = this.offsetWidth + "px";
      line.style.left = this.offsetLeft + "px";
      console.log(e.target);
    }
  });

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const tabs = $$(".tab-item");
// const panes = $$(".tab-pane");

// const tabActive = $(".tab-item.active");
// const line = $(".tabs .line");

// line.style.left = tabActive.offsetLeft + "px";
// line.style.width = tabActive.offsetWidth + "px";

// tabs.forEach((tab, index) => {
//   const pane = panes[index];

//   tab.onclick = function () {
//     $(".tab-item.active").classList.remove("active");
//     $(".tab-pane.active").classList.remove("active");

//     line.style.left = this.offsetLeft + "px";
//     line.style.width = this.offsetWidth + "px";

//     this.classList.add("active");
//     pane.classList.add("active");
//   };
// });
