import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';

export async function POST(request: Request) {

    const { email, password } = await request.json();

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const existingUser = await getUserByEmail(email);

        if (existingUser) {
            return new NextResponse("User already exists", { status: 400 });
        }

        const userCreated = await db.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });
        
        return NextResponse.json(userCreated, { status: 201 });
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}