import { notFound } from "next/navigation";
import LoginClient from "./LoginClient";

export default async function AdminLoginPage({ params }: { params: Promise<{ secret: string }> }) {
    const { secret } = await params;
    const adminPathSecret = process.env.ADMIN_PATH_SECRET;

    if (!adminPathSecret || secret !== adminPathSecret) {
        notFound();
    }

    return <LoginClient />;
}
