import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ModuleList } from "@/components/module-list";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="sm:flex-1 flex flex-col sm:flex-row container mx-auto max-w-[1000px] gap-6">
        <Sidebar />
        <main className="flex-1">
          <ModuleList />
        </main>
      </div>
      <Footer />
    </div>
  );
}
