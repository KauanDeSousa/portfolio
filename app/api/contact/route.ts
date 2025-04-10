// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Inicializa o Resend (melhor prática: usar variável de ambiente)
const resend = new Resend(process.env.RESEND_API_KEY);
const emailUser = process.env.EMAIL_USER;

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = schema.parse(body);

        if (!emailUser) return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 });

        console.log(emailUser);

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: emailUser,
            subject: `Contato: ${name}`,
            html: `<p>${message}</p><p>Enviado por: ${email}</p>`,
            text: message,
        });

        if (error) throw error;

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.log(error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: 'Dados inválidos', details: error.errors }, { status: 400 });
        }

        return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 });
    }
}
