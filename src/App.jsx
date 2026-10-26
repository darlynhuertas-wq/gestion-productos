import React, { useState } from 'react';
import { productosIniciales } from './data/productosIniciales';
import { FormularioProducto } from './components/FormularioProducto';
import { TablaProductos } from './components/TablaProductos';
import { LayoutDashboard, CheckCircle2, Sparkles } from 'lucide-react';

export default function App() {
  const [productos, setProductos] = useState(productosIniciales);
  const [mensajeExito, setMensajeExito] = useState('');

  const agregarProducto = (nuevo) => {
    // Generación de código único incremental
    const nuevoCodigo = productos.length > 0 ? Math.max(...productos.map(p => p.codigo)) + 1 : 101;
    
    const productoCompleto = {
      codigo: nuevoCodigo,
      ...nuevo
    };

    setProductos([productoCompleto, ...productos]);
    setMensajeExito(`¡Producto "${nuevo.descripcion}" registrado con éxito!`);

    setTimeout(() => {
      setMensajeExito('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-sans antialiased">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Encabezado Principal */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-slate-900/90 border border-slate-800 rounded-3xl shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/25">
              <LayoutDashboard className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white">
                Gestión de Productos
              </h1>
              <p className="text-xs md:text-sm text-slate-400">Prototipo funcional sin conexión a servidor</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" /> Estado activo en React Hooks
          </div>
        </header>

        {/* Mensaje de Confirmación */}
        {mensajeExito && (
          <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-2xl shadow-xl">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-semibold">{mensajeExito}</p>
          </div>
        )}

        {/* Grid Principal */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <section className="lg:col-span-4">
            <FormularioProducto onAgregarProducto={agregarProducto} />
          </section>
          <section className="lg:col-span-8">
            <TablaProductos productos={productos} />
          </section>
        </main>

      </div>
    </div>
  );
}