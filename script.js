const items = document.querySelectorAll("[type=checkbox]");

function checkMultiple() {
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      let firstItem = e.target;
      if (firstItem.checked) {
        items.forEach((item) => {
          item.addEventListener("click", (e) => {
            let secondItem;
            if (e.shiftKey && e.target.checked) {
              secondItem = e.target;
              if (firstItem !== secondItem) {
                let isNextSibling = false;
                let nextElement = firstItem.parentElement.nextElementSibling;
                while (nextElement) {
                  if (nextElement === secondItem.parentElement) {
                    isNextSibling = true;
                    break;
                  }
                  nextElement = nextElement.nextElementSibling;
                }
                if (isNextSibling) {
                  let nextElement = firstItem.parentElement.nextElementSibling;
                  while (
                    nextElement !== secondItem.parentElement &&
                    nextElement.previousElementSibling.firstElementChild
                      .checked === true &&
                    secondItem.checked === true
                  ) {
                    nextElement.firstElementChild.checked = true;
                    nextElement = nextElement.nextElementSibling;
                    firstItem = secondItem;
                  }
                } else {
                  let previousElement =
                    firstItem.parentElement.previousElementSibling;
                  while (
                    previousElement !== secondItem.parentElement &&
                    previousElement.nextElementSibling.firstElementChild
                      .checked === true &&
                    secondItem.checked === true
                  ) {
                    previousElement.firstElementChild.checked = true;
                    previousElement = previousElement.previousElementSibling;
                    firstItem = secondItem;
                  }
                }
              }
            }
          });
        });
      }
    });
  });
}
checkMultiple();
