import { Routes, Route } from "react-router-dom";

// Layouts
import ProtectedRoute from "./ProtectedRoute";

// Pages
import Home from "../pages/home/Home";

// Auth
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import KYC from "../pages/auth/KYC";

// Items
import ItemList from "../pages/items/ItemList";
import ItemDetails from "../pages/items/ItemDetails";
import AddItem from "../pages/items/AddItem";

// Booking
import BookItem from "../pages/booking/BookItem";
import UserBookings from "../pages/booking/UserBookings";

// Store
import StoreDashboard from "../pages/store/StoreDashboard";
import AddStoreItem from "../pages/store/AddStoreItem";
import StoreOrders from "../pages/store/StoreOrders";

// Admin
import AdminDashboard from "../pages/admin/AdminDashboard";
import UsersManagement from "../pages/admin/UsersManagement";
import ListingsReview from "../pages/admin/ListingsReview";

// Complaints (your new folder)
import Complaints from "../pages/complaints/Complaints";

// Error
import NotFound from "../pages/error/NotFound";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* KYC Verification */}
      <Route
        path="/kyc"
        element={
          <ProtectedRoute>
            <KYC />
          </ProtectedRoute>
        }
      />

      {/* Items */}
      <Route path="/items" element={<ItemList />} />
      <Route path="/items/:id" element={<ItemDetails />} />

      <Route
        path="/items/add"
        element={
          <ProtectedRoute>
            <AddItem />
          </ProtectedRoute>
        }
      />

      {/* Booking */}
      <Route
        path="/booking/:id"
        element={
          <ProtectedRoute>
            <BookItem />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-bookings"
        element={
          <ProtectedRoute>
            <UserBookings />
          </ProtectedRoute>
        }
      />

      {/* Store Routes */}
      <Route
        path="/store/dashboard"
        element={
          <ProtectedRoute>
            <StoreDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/store/add-item"
        element={
          <ProtectedRoute>
            <AddStoreItem />
          </ProtectedRoute>
        }
      />

      <Route
        path="/store/orders"
        element={
          <ProtectedRoute>
            <StoreOrders />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/users"
        element={
          <ProtectedRoute>
            <UsersManagement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/listings"
        element={
          <ProtectedRoute>
            <ListingsReview />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/complaints"
        element={
          <ProtectedRoute>
            <Complaints />
          </ProtectedRoute>
        }
      />

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
