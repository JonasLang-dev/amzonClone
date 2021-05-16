1. Code Editor
   1. Web Browser
   2. VS Code Extension
   3. Create amazon folder
   4. create template folder
   5. create index.html
   6. add default HTML code
   7. link to style.css
   8. create header, main and footer
   9. style elements
2. Display Products
   1. create products div
   2. add product attributes
   3. and link, image, name and price
3. Create React App
   1. yarn create @vitejs/app frontend
   2. Remove unused files
   3. copy index.html content to App.js
   4. copy style.css content to index.css
   5. replace class with className
4. Create Rating and Product Component
   1. create components/Rating.js
   2. create div.rating
   3. style div.rating, span and last span
   4. Use Rating component
5. Build Product Screen
   1. Install react-router-dom
   2. Use BrowserRouter and Route for Home Screen
   3. Create HomeScreen.js
   4. Add product list code there
   5. Create ProductScreen.js
   6. Add new Route from product details to App.js
   7. Create 3 columns for product image, info and action
6. Create Node.js Server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. rum yarn start
7. Load Products From Backend
   1. edit HomeScreen.js
   2. define products, loading and error
   3. create useEffect
   4. define async fetchData and call it
   5. install axios
   6. get data from /api/products
   7. show theme in the list
   8. create Loading Component
   9. create Message Box Component
   10. use theme in HomeScreen
8. Install ESlint For Code Linting
   1. install VSCode eslint extension
   2. npm install -D eslint
   3. run ./node_modules/,bin/eslint --init
   4. Create ./frontend/.env
   5. Add SKIP_PREFLIGHT_CHECK=true
9. Add Redux to Home Screen
   1. yarn add redux react-redux | npm install redux react-redux
   2. Create store.js
   3. initState = {products:[]}
   4. reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
   5. export default createStore(reducer, initState)
   6. Edit HomeScreen.js
   7. shopName = useSelector(state => state.products)
   8. const dispatch = useDispatch()
   9. useEffect(() => dispatch({type: LOAD_PRODUCTS, payload:}))
   10. Add store to index.js
10. Add Redux to Product Screen
    1. create product details constants, actions and reduces
    2. add reducer to store.js
    3. use action in ProductScreen.js
    4. add /api/products/:id to backend api
11. Handle Add To Cart Button
    1. Handle Add To Cart in ProductScreen.js
    2. create CartScreen.js
12. Implement Add to Cart Action
    1. create addToCart constants, actions and reducers
    2. add reducer to store.js
    3. use action in CartScreen.js
    4. render cartItems.length
13. Build Cart Screen
    1. create 2 columns for cart items and cart action
    2. cartItems.length === 0 ? cart is empty
    3. show item image, name, qty and price
    4. Proceed to Checkout button
    5. Implement remove from cart action
14. Implement Remove From Cart Action
    1. create removeFormCart constants, actions and reducers
    2. use action in CartScreen.js
15. Connect To MongoDB
    1. npm install mongoose
    2. connect to mongodb
    3. create config.js
    4. npm install dotenv
    5. export MONGODB_URL
    6. create models/userModel.js
    7. create userSchema and userModel
    8. create models/productModel.js
    9. create productSchema and productModel
    10. create userRoute
    11. Seed sample data
16. Create Sample Products In MongDB
    1. create models/productModel.js
    2. create productSchema and productModel
    3. create productRoute
    4. Seed sample data
17. Create Sign-in Backend
    1. create /signIn api
    2. check email and password
    3. generate token
    4. install json web token
    5. install dotenv
    6. return token
    7. test is using postman
18. Design SignIn Screen
    1. create SignInScreen
    2. render email and password fields
    3. create signIn constants, actions and reducers
    4. Update Header based on user login
19. Implement SignIn Action
    1. create signIn constants, action and reducers
    2. add reducer to store.js
    3. use action in SignInScreen.js
20. Create Register Screen and Backend API
    1. create API for /api/users/register
    2. insert new user to database
    3. return user info and token
    4. create RegisterScreen
    5. Add fields
    6. Style field
    7. Add screen to App.js
21. Create Shipping Screen
    1. create CheckoutStep.js component
    2. create shipping fields
    3. implement shipping fields
    4. implement shipping constant, action and reducers
22. Create Payment Screen
    1. create payment fields
    2. implements shipping constant, action and reducers
23. Design Place Order Screen
    1. design order summary fields
    2. design order action
24. Create Place Order API
    1. createOrder api
    2. create orderModel
    3. create orderRouter
    4. create post order route
25. Implement PlaceOrder Action
    1. handle place order button click
    2. create place order constants, action and reducer
26. Create Order Screen
    1. build order api for /api/orders/:id
    2. create OrderScreen.js
    3. dispatch order details action in useEffect
    4. load data witch useSelector
    5. show data like place order screen
    6. create order details constant, action and reducer
27. Add PayPal Button
    1. get client id from PayPal
    2. set it in .env file
    3. create route form /api/paypal/clientId
    4. create getPaypalClientID in api.js
    5. add paypal checkout script in OrderScreen
    6. show paypal button
28. Implement Order Payment
    1. update order after payment
    2. create payOrder in api.js
    3. create route for /:id/pay in orderReducer.js
    4. reRender after pay order
29. Display Orders History
    1. create customer orders api
    2. create api for getMyOrders
    3. show orders in profile screen
    4. style orders
30. Display User Profile
    1. create user details api
    2. show user information
31. Update User Profile
    1. create user update api
    2. update user info
32. Create Admin View
    1. Create Admin Menu
    2. Create Admin Middleware in Backend
    3. Create Admin Route in Frontend
33. List Products
    1. Create Product List Screen
    2. Add reducer to store
    3. show products on the screen
34. Create Product
    1. build create product api
    2. build create product button
    3. define product create constant, action and reducer
    4. use action in Product List Screen
35. Build Product Edit screen
    1. create edit screen
    2. define state
    3. create fields
    4. load product details
    5. add to route
36. Update Product
    1. define update api
    2. define product update constant, action and reducer
    3. use action in Product Edit Screen
37. Upload Product Image
    1. npm install multer
    2. define upload router
    3. create uploads folder
    4. Handle frontend
38. Delete Product
    1. create delete api in backend
    2. create delete constants, action and reducer
    3. use it in product list screen
39. List Orders
    1. create order list api
    2. create Order List Screen
    3. Add reducer to store
    4. show products on the screen
40. Delete Order
    1. create delete order action and reducer
    2. add order delete action to order list
41. Deliver Order
    1. create constant, action and reducers for deliver order
    2. add order deliver action to order details screen
42. Publish To Heroku
    1. Create git repository
    2. Create heroku account
    3. install Heroku CLI
    4. heroku login
    5. heroku apps:create <yourname>amazon
    6. Edit package.json for build script
    7. Create Profile
    8. Create mongodb atlbas database
    9. Set database connection in heroku env variables
    10. Commit and push
43. List Users
    1. build api for list users
    2. create UserList Screen
    3. create order details constants, action and reducer
44. Delete Users
    1. build api for delete users
    2. create order details constants, action and reducer
    3. Use action in UserListScreen
45. Edit User
    1. build api for update users
    2. create edit screen UI
46. Implement Seller View
    1. add seller menu
    2. create seller route
    3. list products for seller
    4. list orders for seller
    5. add Seller to Product List and Details Screen
47. Create Seller Page and Carousel
    1. create seller page
    2. create seller carousel