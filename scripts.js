function handleButtonOnClickSubmitWithJavaScript() {
    const category = document.getElementById('categories').value
    const location = document.getElementById('location').value
    const price = document.getElementById('price').value
    const quantity = document.getElementById('quantity').value
    
    let allPosts = []

    let newPost = {
        category: category,
        location: location,
        price: price,
        quantity: quantity
    }

    allPosts.push(newPost)
}