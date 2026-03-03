import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createPixPayment, getPaymentStatus } from './pix';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// PIX Payment routes
app.post('/api/create-payment', async (req, res) => {
  try {
    const { amount, description, customer } = req.body;
    
    if (!amount || !description) {
      return res.status(400).json({ 
        error: { message: 'Amount and description are required' } 
      });
    }

    const payment = await createPixPayment({
      amount,
      description,
      customer
    });

    res.json(payment);
  } catch (error) {
    console.error('Payment error:', error);
    res.status(500).json({ 
      error: { message: error instanceof Error ? error.message : 'Erro ao criar pagamento' } 
    });
  }
});

app.get('/api/payment/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await getPaymentStatus(id);
    res.json(payment);
  } catch (error) {
    console.error('Payment status error:', error);
    res.status(500).json({ 
      error: { message: error instanceof Error ? error.message : 'Erro ao buscar pagamento' } 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend API running on port ${PORT}`);
});

export default app;
