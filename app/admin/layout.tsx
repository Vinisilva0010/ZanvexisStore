// app/admin/layout.tsx

import { signOut } from "./actions";

// Este layout vai envolver todas as páginas dentro de /admin
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-gray-900 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-semibold">Painel Zanvexis</h1>
        <form action={signOut}>
          <button 
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Sair
          </button>
        </form>
      </header>
      <main>
        {children} {/* Aqui é onde as suas páginas (lista, novo, editar) serão renderizadas */}
      </main>
    </div>
  );
}