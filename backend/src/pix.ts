// PIX Payment Integration
// Supports Mercado Pago and other PIX providers

interface PaymentRequest {
  amount: number; // in cents
  description: string;
  customer?: {
    name?: string;
    email?: string;
    document?: string;
    phone?: string;
  };
}

interface PixPaymentResponse {
  id: string;
  status: string;
  amount: number;
  currency: string;
  method: string;
  description: string;
  pixKey?: string;
  pixCode?: string;
  qrCodeImage?: string;
  expiresAt?: string;
  createdAt: string;
}

// Mock implementation - replace with actual provider (Mercado Pago, etc)
export async function createPixPayment(request: PaymentRequest): Promise<PixPaymentResponse> {
  const { amount, description } = request;
  
  // Generate mock payment data
  const paymentId = `pix_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  // Generate a mock PIX code
  const pixCode = generateMockPixCode();
  
  // Generate QR code image URL
  const qrCodeImage = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pixCode)}`;
  
  // Calculate expiry (30 minutes from now)
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000).toISOString();
  
  return {
    id: paymentId,
    status: 'Pending',
    amount,
    currency: 'BRL',
    method: 'PIX',
    description,
    pixKey: process.env.PIX_KEY || 'sua-chave-pix@email.com',
    pixCode,
    qrCodeImage,
    expiresAt,
    createdAt: new Date().toISOString(),
  };
}

export async function getPaymentStatus(paymentId: string): Promise<PixPaymentResponse> {
  return {
    id: paymentId,
    status: 'Pending',
    amount: 0,
    currency: 'BRL',
    method: 'PIX',
    description: 'Payment check',
    createdAt: new Date().toISOString(),
  };
}

function generateMockPixCode(): string {
  const chars = '0123456789ABCDEF';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}
