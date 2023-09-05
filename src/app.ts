import { NotificationType, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const user = await prisma.user.create({
    data: {
        email: 'e@email.com',
        name: 'devin stevens',
        username: 'eevinstevens',
        notificationSettings: [
            NotificationType.SECURITY,
            NotificationType.MARKETING,
        ],
    },
});

console.log(user);
