'use client';

import { create } from 'zustand';

export type BusinessType = 'HOSPITAL' | 'FB' | 'RETAIL' | 'SERVICE';

interface AppState {
  user: any | null;
  businessType: BusinessType | null;
  setUser: (user: any) => void;
  setBusinessType: (type: BusinessType) => void;
  logout: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  businessType: null,
  setUser: (user) => set({ user }),
  setBusinessType: (type) => set({ businessType: type }),
  logout: () => set({ user: null, businessType: null }),
}));

export const MOCK_RECORDS = {
  HOSPITAL: [
    { id: '1', name: 'James Wilson', detail: 'Ward A - Room 102', status: 'Stable', metric: '98% Sat' },
    { id: '2', name: 'Sarah Parker', detail: 'ICU - Bay 4', status: 'Critical', metric: 'Elevated HR' },
    { id: '3', name: 'Michael Chen', detail: 'Ward B - Room 305', status: 'Improving', metric: '97% Sat' },
    { id: '4', name: 'Emma Davis', detail: 'OR - Suite 2', status: 'In Surgery', metric: 'Anesthesia Monitor' },
  ],
  FB: [
    { id: '1', name: 'Order #4421', detail: 'Table 4 - 3 Items', status: 'In Kitchen', metric: '$84.00' },
    { id: '2', name: 'Order #4422', detail: 'Delivery - 1 Item', status: 'Ready', metric: '$12.50' },
    { id: '3', name: 'Order #4423', detail: 'Table 2 - 2 Items', status: 'Served', metric: '$45.00' },
    { id: '4', name: 'Order #4424', detail: 'Takeout - 4 Items', status: 'Packaging', metric: '$128.50' },
  ],
  RETAIL: [
    { id: '1', name: 'Urban Sneakers', detail: 'Stock: 42 Units', status: 'High Demand', metric: '$120.00' },
    { id: '2', name: 'Classic Tee', detail: 'Stock: 12 Units', status: 'Low Stock', metric: '$25.00' },
    { id: '3', name: 'Denim Jeans', detail: 'Stock: 38 Units', status: 'Normal', metric: '$89.99' },
    { id: '4', name: 'Winter Jacket', detail: 'Stock: 18 Units', status: 'Seasonal', metric: '$199.99' },
  ],
  SERVICE: [
    { id: '1', name: 'Tesla Model 3', detail: 'Full Detail + Ceramic', status: 'In Progress', metric: 'Bay 1' },
    { id: '2', name: 'BMW X5', detail: 'Interior Deep Clean', status: 'Queued', metric: 'Bay 3' },
    { id: '3', name: 'Audi A4', detail: 'Paint Protection', status: 'Completed', metric: 'Bay 2' },
    { id: '4', name: 'Mercedes C-Class', detail: 'Engine Detailing', status: 'Scheduled', metric: 'Waiting' },
  ],
};
