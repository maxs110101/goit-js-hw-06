const categoriesRef = document.querySelector('#categories');
const itemsRef = categoriesRef.children;
const result = itemsRef.length;

console.log(`Number of categories: ${result}`);


const getCategoryContent = ([...categories]) => {
    const categoryContent = categories.map(category => {
        const tittle = category.firstElementChild.textContent;
        const elements = category.lastElementChild.children.length;
        
        console.log(`Category: ${tittle}`);
        console.log(`Elements: ${elements}`);
    })
}

getCategoryContent(itemsRef);