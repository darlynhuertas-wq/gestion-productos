import React from 'react';
import { Layers, Hash, ShoppingBag, DollarSign, Bookmark } from 'lucide-react';

export function TablaProductos({ productos }) {
  const getCategoriaBadge = (cat) => {
    const estilos = {
      Tecnología: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      Muebles: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      Abarrotes: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      Lácteos: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      Limpieza: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    };
    return estilos[cat] || 'bg-slate-500/10 text-slate-400 border-slate-500/30';
  };

  return (
    <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-slate-700/60">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-700/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/30">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">Catálogo de Productos</h2>
            <p className="text-xs text-slate-400">Listado actualizado automáticamente</p>
          </div>
        </div>
        <span className="bg-slate-900/80 text-blue-400 font-bold px-3 py-1.5 rounded-xl border border-slate-700 text-xs flex items-center gap-1.5">
          <ShoppingBag className="w-3.5 h-3.5" /> Total: {productos.length}
        </span>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-700/60">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900/90 text-slate-400 text-xs font-semibold uppercase tracking-wider border-b border-slate-700/80">
              <th className="p-3.5"><span className="flex items-center gap-1.5"><Hash className="w-3.5 h-3.5" /> Código</span></th>
              <th className="p-3.5"><span className="flex items-center gap-1.5"><ShoppingBag className="w-3.5 h-3.5" /> Descripción</span></th>
              <th className="p-3.5"><span className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5" /> Precio</span></th>
              <th className="p-3.5"><span className="flex items-center gap-1.5"><Bookmark className="w-3.5 h-3.5" /> Categoría</span></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50 text-sm">
            {productos.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-8 text-slate-500 font-medium">
                  No hay productos registrados.
                </td>
              </tr>
            ) : (
              productos.map((prod) => (
                <tr key={prod.codigo} className="hover:bg-slate-700/30 transition-colors">
                  <td className="p-3.5 font-mono font-bold text-blue-400">#{prod.codigo}</td>
                  <td className="p-3.5 font-medium text-slate-200">{prod.descripcion}</td>
                  <td className="p-3.5 font-bold text-emerald-400">S/ {prod.precio.toFixed(2)}</td>
                  <td className="p-3.5">
                    <span className={`px-2.5 py-1 rounded-lg border text-xs font-semibold ${getCategoriaBadge(prod.categoria)}`}>
                      {prod.categoria}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}