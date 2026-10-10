export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'pastries' | 'desserts' | 'artisan';
  categoryLabel: string;
  description: string;
  price: number; // in INR (₹)
  image: string;
  tags?: string[];
  notes?: string;
  isPopular?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  favoriteOrder: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface CoffeeOrigin {
  id: string;
  name: string;
  region: string;
  elevation: string;
  process: string;
  tastingNotes: string[];
  roastLevel: 'Light' | 'Medium-Light' | 'Medium';
  description: string;
}
