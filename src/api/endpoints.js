export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    KYC: "/auth/kyc",
  },

  ITEMS: {
    ALL: "/items",
    CREATE: "/items",
    UPDATE: (id) => `/items/${id}`,
    DELETE: (id) => `/items/${id}`,
  },

  BOOKING: {
    CREATE: "/booking",
    USER_BOOKINGS: "/booking/user",
  },

  STORE: {
    DASHBOARD: "/store/dashboard",
    ADD_ITEM: "/store/item",
    ORDERS: "/store/orders",
  },

  ADMIN: {
    USERS: "/admin/users",
    LISTINGS: "/admin/listings",
    COMPLAINTS: "/admin/complaints",
  },
};
