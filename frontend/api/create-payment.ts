// SafePay API - Server-side PIX Integration
// Vercel Serverless Function

interface PixPaymentResponse {
  id: string;
  status: 'Pending' | 'Completed' | 'Failed' | 'Cancelled';
  amount: number;
  currency: string;
  method: string;
  description: string;
  pixKey?: string;
  pixCode?: string;
  qrCode?: string;
  qrCodeImage?: string;
  expiresAt?: string;
  createdAt: string;
  updatedAt: string;
}

export default async function handler(req: Request): Promise<Response> {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await req.json();
    const { amount, description, externalId, customer } = body;

    // Validate required fields
    if (!amount || !description) {
      return new Response(JSON.stringify({ 
        error: { 
          code: 'INVALID_REQUEST', 
          message: 'Amount and description are required' 
        } 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const SAFEPAY_API_URL = 'https://api-payment.safefypay.com.br';
    const SECRET_KEY = process.env.SAFEPAY_SECRET_KEY || 'sk_production_3f5bfb46f5eb9a0595d729da4042f3d6c709ee24a49da32a81eb08d3cb8c2221';

    const payload = {
      method: 'pix',
      amount,
      currency: 'BRL',
      description,
      ...(externalId && { externalId }),
      ...(customer && { customer }),
    };

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SECRET_KEY}`,
    };

    const apiResponse = await fetch(`${SAFEPAY_API_URL}/v1/transactions`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      return new Response(JSON.stringify(data), {
        status: apiResponse.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('SafePay API Error:', error);
    return new Response(JSON.stringify({ 
      error: { 
        code: 'INTERNAL_ERROR', 
        message: 'Failed to create payment' 
      } 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
