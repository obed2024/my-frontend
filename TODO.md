# Role-Based Access Control (RBAC) Implementation

## Backend Route Protection
- [x] Fix `src/routes/users.js` — `getAllUsers` restricted to `authorize("admin")`
- [x] Fix `src/routes/products.js` — `"customer"` added to `getProduct/:id`
- [x] Fix `src/routes/orders.js` — `protect` + `authorize` added to `updateOrder/:id` and `deleteOrder/:id`
- [x] Fix `src/controllers/orders.js` — auto-inject `userId` from `req.user.id` when creating order

## Client Core (`client/js/auth.js`)
- [x] Add `decodeToken()` helper
- [x] Update `login()` to save user `type` and call `redirectByRole()`
- [x] Add `getUserType()`, `getCustomerPath()`, `getSellerPath()`, `getAdminPath()`
- [x] Add `requireRole(...roles)` — redirects unauthorized users to public index
- [x] Add `redirectByRole()` — customer→customer.html, seller→seller.html, admin→dashboard.html
- [x] Update `requireGuest()` to use `redirectByRole()`
- [x] Update `getIndexPath()` to return public `index.html`

## Client Pages
- [x] `client/index.html` — public landing page (no login required), hero with login/register CTAs
- [x] `client/pages/dashboard.html` — admin-only user management, navbar links to Seller Hub
- [x] `client/pages/seller.html` — admin/seller hub: view orders, create products, create shops
- [x] `client/pages/customer.html` — customer product catalog + order creation

## Client API (`client/js/api.js`)
- [x] Add `getAllProducts()`
- [x] Add `createProduct()`
- [x] Add `createOrder()`
- [x] Add `getAllOrders()`
- [x] Add `getAllShops()`
- [x] Add `createShop()`

## Testing & Verification
- [ ] Test customer login → redirects to customer.html
- [ ] Test seller login → redirects to seller.html
- [ ] Test admin login → redirects to dashboard.html
- [ ] Test public index.html visible without login
- [ ] Test customer accessing seller.html/dashboard.html → redirected to index
- [ ] Test seller accessing dashboard.html → redirected to index
- [ ] Test backend `getAllUsers` with seller token → returns 403

