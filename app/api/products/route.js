import { NextResponse } from 'next/server';

export async function GET() {
  const storeUrl = process.env.WC_STORE_URL;
  const consumerKey = process.env.WC_CONSUMER_KEY;
  const consumerSecret = process.env.WC_CONSUMER_SECRET;

  if (!storeUrl || !consumerKey || !consumerSecret) {
    return NextResponse.json({ error: 'Missing WooCommerce credentials' }, { status: 500 });
  }

  try {
    // WooCommerce REST API endpoint for products
    const url = `${storeUrl}/wp-json/wc/v3/products?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Ensure we get fresh data
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: 'WooCommerce API error', details: errorData }, { status: response.status });
    }

    const products = await response.json();
    
    // Map WooCommerce product data to the format used in the UI
    const mappedProducts = products.map(p => {
      const price = parseFloat(p.price || 0);
      const regularPrice = parseFloat(p.regular_price || 0);
      const onSale = p.on_sale && price < regularPrice;

      return {
        id: p.id,
        name: p.name,
        type: p.categories?.[0]?.name || 'Apparel',
        price: `₹${p.price}`,
        was: onSale ? `₹${p.regular_price}` : null,
        saved: onSale ? `save ₹${Math.round(regularPrice - price)}` : null,
        image: p.images?.[0]?.src,
        emoji: '👽',
        bg: '#0a0a0a',
        rotate: '0deg',
        badge: onSale ? { text: '🔥 SALE', type: 'fire' } : (p.date_created && (new Date() - new Date(p.date_created)) < 7 * 24 * 60 * 60 * 1000 ? { text: '✨ NEW', type: 'new' } : null),
      };
    });

    return NextResponse.json(mappedProducts);
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json({ error: 'Failed to fetch products', message: error.message }, { status: 500 });
  }
}
