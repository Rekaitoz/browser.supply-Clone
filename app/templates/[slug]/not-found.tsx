import Support1Background from "@/components/background/Support1Background";
import Footer from "@/components/layout/Footer";
import NotFound from "@/features/home/components/NotFound";

export default function NotFoundPage() {
    return (
        <main className="relative overflow-x-hidden overflow-y-hidden">
            <Support1Background />
            <NotFound />
            <Footer />
        </main>
    );
}