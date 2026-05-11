import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = await params;
  const storeUrl = process.env.WC_STORE_URL;
  const consumerKey = process.env.WC_CONSUMER_KEY;
  const consumerSecret = process.env.WC_CONSUMER_SECRET;

  if (!storeUrl || !consumerKey || !consumerSecret) {
    return NextResponse.json({ error: 'Missing WooCommerce credentials' }, { status: 500 });
  }

  try {
    const url = `${storeUrl}/wp-json/wc/v3/products/${id}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    const response = await fetch(url, { cache: 'no-store' });

    if (!response.ok) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const p = await response.json();
    
    const price = parseFloat(p.price || 0);
    const regularPrice = parseFloat(p.regular_price || 0);
    const onSale = p.on_sale && price < regularPrice;

    const mappedProduct = {
      id: p.id,
      name: p.name,
      description: p.description,
      short_description: p.short_description,
      type: p.categories?.[0]?.name || 'Apparel',
      price: `₹${p.price}`,
      was: onSale ? `₹${p.regular_price}` : null,
      saved: onSale ? `save ₹${Math.round(regularPrice - price)}` : null,
      image: p.images?.[0]?.src,
      images: p.images.map(img => img.src),
      emoji: '👽',
      bg: '#0a0a0a',
      badge: onSale ? { text: '🔥 SALE', type: 'fire' } : null,
      attributes: p.attributes || [],
    };

    return NextResponse.json(mappedProduct);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}
