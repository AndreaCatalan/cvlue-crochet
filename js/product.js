const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.post');

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    const category = item.dataset.category;
    for(let i = 0; i < allCategoryPosts.length; i++){
        if (category === 'all' || allCategoryPosts[i].classList.contains(category)) {
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
}

//dropdown
    document.addEventListener('DOMContentLoaded', function() {
        const dropdownButton = document.querySelector('.dropdown-button');
        const categoryList = document.querySelector('.category-head ul');
        const categoryItems = document.querySelectorAll('.category-title');

        dropdownButton.addEventListener('click', function() {
            categoryList.classList.toggle('show');
        });

        categoryItems.forEach(item => {
            item.addEventListener('click', function() {
                const categoryText = item.textContent.trim();
                dropdownButton.textContent = categoryText;
                categoryList.classList.remove('show');
            });
        });
    });





