import { Switch, Route } from 'react-router-dom'
import PageContent from './layout/PageContent'
import HomePage from './pages/HomePage'

function App() {
  return (
    <PageContent>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold">Shop Page - Coming Soon</h1>
          </div>
        </Route>
        <Route path="/about">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold">About Page - Coming Soon</h1>
          </div>
        </Route>
        <Route path="/blog">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold">Blog Page - Coming Soon</h1>
          </div>
        </Route>
        <Route path="/contact">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold">Contact Page - Coming Soon</h1>
          </div>
        </Route>
        <Route path="/pages">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold">Pages - Coming Soon</h1>
          </div>
        </Route>
        <Route path="/product/:id">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold">Product Detail - Coming Soon</h1>
          </div>
        </Route>
        <Route path="/cart">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold">Cart Page - Coming Soon</h1>
          </div>
        </Route>
        <Route path="/wishlist">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold">Wishlist Page - Coming Soon</h1>
          </div>
        </Route>
        <Route path="/login">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold">Login Page - Coming Soon</h1>
          </div>
        </Route>
      </Switch>
    </PageContent>
  )
}

export default App
