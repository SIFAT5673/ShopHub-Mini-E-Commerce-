
export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "Premium wireless headphones with noise cancellation technology. Enjoy crystal clear audio quality with up to 30 hours of battery life.",
    category: "Electronics",
    rating: 4.5
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Advanced fitness tracker with heart rate monitoring, GPS tracking, and smartphone notifications. Water-resistant design perfect for active lifestyles.",
    category: "Wearables",
    rating: 4.7
  },
  {
    id: 3,
    title: "Minimalist Desk Lamp",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    description: "Sleek LED desk lamp with adjustable brightness and color temperature. Perfect for home office setups with modern design aesthetics.",
    category: "Home & Office",
    rating: 4.3
  },
  {
    id: 4,
    title: "Organic Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    description: "Comfortable organic cotton t-shirt with sustainable production methods. Available in multiple colors with a perfect fit.",
    category: "Clothing",
    rating: 4.2
  },
  {
    id: 5,
    title: "Portable Coffee Maker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
    description: "Compact espresso maker for coffee lovers on the go. Battery-powered with professional-grade pressure system.",
    category: "Kitchen",
    rating: 4.6
  },
  {
    id: 6,
    title: "Leather Messenger Bag",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    description: "Handcrafted leather messenger bag with multiple compartments. Perfect for work or travel with timeless design.",
    category: "Accessories",
    rating: 4.8
  }
];
