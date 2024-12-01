
import jwt from 'jsonwebtoken';
import {  PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

// Example secret key for JWT
const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';
const prisma = new PrismaClient();


const POST = async (req: Request) => {
  
  const body = await req.json();
  const { email, password } = body;
  console.log(email, password);
  

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, {status: 400});
  }

  try {
    
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' } , {status : 400});
    }

    
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: '1h',
    });

    return NextResponse.json({ token, message: 'Login successful', user });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error'  },{status : 500});
  }
};

export  {POST};
