import { NextResponse } from 'next/server';

export async function POST(request) {
  const storeUrl = process.env.WC_STORE_URL;
  const consumerKey = process.env.WC_CONSUMER_KEY;
  const consumerSecret = process.env.WC_CONSUMER_SECRET;

  if (!storeUrl || !consumerKey || !consumerSecret) {
    return NextResponse.json({ error: 'Missing WooCommerce credentials' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { billing, line_items } = body;

    // WooCommerce REST API endpoint for orders
    const url = `${storeUrl}/wp-json/wc/v3/orders?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payment_method: 'bacs', // Defaulting to Direct Bank Transfer for testing
        payment_method_title: 'Direct Bank Transfer',
        set_paid: false,
        billing: billing,
        shipping: billing, // Using billing as shipping for simplicity
        line_items: line_items.map(item => ({
          product_id: item.id,
          quantity: item.quantity
        }))
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: 'WooCommerce API error', details: errorData }, { status: response.status });
    }

    const orderData = await response.json();
    return NextResponse.json(orderData);
  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json({ error: 'Failed to create order', message: error.message }, { status: 500 });
  }
}

export async function GET() {
  const storeUrl = process.env.WC_STORE_URL;
  const consumerKey = process.env.WC_CONSUMER_KEY;
  const consumerSecret = process.env.WC_CONSUMER_SECRET;

  try {
    const url = `${storeUrl}/wp-json/wc/v3/orders?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;
    const response = await fetch(url, { cache: 'no-store' });
    const orders = await response.json();
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
  }
}
