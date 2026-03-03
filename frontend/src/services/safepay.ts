// SafePay API Service - Server-side PIX Integration
// This service calls our own Vercel API which then calls SafePay

const API_BASE_URL = '/api';

export interface CreatePixPaymentRequest {
  amount: number; // Amount in cents
  currency?: string;
  description: string;
  externalId?: string;
  customer?: {
    name: string;
    document?: string;
    email?: string;
    phone?: string;
  };
}

export interface PixPaymentResponse {
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

export interface ApiError {
  error: {
    code: string;
    message: string;
  };
}

class SafePayService {
  private baseUrl = API_BASE_URL;

  private async request<T>(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: unknown
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    const options: RequestInit = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        const error = data as ApiError;
        throw new Error(error.error?.message || 'Erro na requisição');
      }

      return data as T;
    } catch (error) {
      console.error('SafePay API Error:', error);
      throw error;
    }
  }

  /**
   * Create a PIX payment
   * @param amount - Amount in cents (e.g., R$ 10,00 = 1000)
   * @param description - Payment description
   * @param externalId - Optional external ID for idempotency
   */
  async createPixPayment(
    amount: number,
    description: string,
    externalId?: string
  ): Promise<PixPaymentResponse> {
    const payload = {
      amount,
      description,
      ...(externalId && { externalId }),
    };

    return this.request<PixPaymentResponse>('/create-payment', 'POST', payload);
  }

  /**
   * Get payment status by ID
   * Note: This would require another API endpoint - for now returns error
   */
  async getPaymentStatus(transactionId: string): Promise<PixPaymentResponse> {
    // This would need a separate API endpoint to work
    console.warn('getPaymentStatus not implemented - requires server-side endpoint');
    throw new Error('Status check not implemented');
  }

  /**
   * Cancel a pending payment
   * Note: This would require another API endpoint - for now returns error
   */
  async cancelPayment(transactionId: string): Promise<PixPaymentResponse> {
    // This would need a separate API endpoint to work
    console.warn('cancelPayment not implemented - requires server-side endpoint');
    throw new Error('Cancel not implemented');
  }
}

export const safePayService = new SafePayService();
export default safePayService;
