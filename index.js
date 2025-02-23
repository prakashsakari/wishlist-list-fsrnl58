


const wishlistInput = document.getElementById('wishlist-input');
const addWishlistButton = document.getElementById('add-btn');
const wishlistMain = document.getElementById('wishlist-main-container')
addWishlistButton.addEventListener('click', () => {
    let userWishlist = wishlistInput.value.trim();
    // if (userWishlist.length === 0) return;
    if (!userWishlist) return
    addWishlist(userWishlist)
    wishlistInput.value = ''
    // if (userWishlist.length > 0){
    //     addTodo(userWishlist)
    // } 
})

function addWishlist (userWishlist){
    const wishlistContainer = document.createElement('div');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox'
    const wishlistSpan = document.createElement('span');
    wishlistSpan.innerText = userWishlist
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete'
    
    wishlistContainer.appendChild(checkBox);
    wishlistContainer.appendChild(wishlistSpan);
    wishlistContainer.appendChild(deleteButton);

    wishlistMain.appendChild(wishlistContainer);

    deleteButton.addEventListener('click', () => {
        wishlistMain.removeChild(wishlistContainer);
    })
}

/**
 * 1st Reverse the wishlist's order -> last added should be seen 1st
 * 2nd mark a wishlist as scomplete
 */

