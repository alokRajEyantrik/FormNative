import { json } from '@sveltejs/kit';
import { Users } from '$lib/db/mongo';

export async function POST({ request }) {
    try {
        const data = await request.json();

        await Users.insertOne({
            ...data,
            submittedAt: new Date(),
        });

        return json({ status: 'success' });

    } catch (error) {
        console.error("Error in POST /api/submit:", error);
        return json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
