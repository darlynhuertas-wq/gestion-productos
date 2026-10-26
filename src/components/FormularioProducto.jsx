import React, { useState } from 'react';
import { PackagePlus, RefreshCw, Tag, DollarSign, FileText, AlertCircle } from 'lucide-react';

export function FormularioProducto({ onAgregarProducto }) {
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [errores, setErrores] = useState({});

  const validar = () => {
    const nuevosErrores = {};
    if (!descripcion.trim() || descripcion.trim().length < 3) {
      nuevosErrores.descripcion = 'La descripción requiere al menos 3 caracteres.';
    }
    if (!precio || isNaN(precio) || Number(precio) <= 0) {
      nuevosErrores.precio = 'Ingrese un precio válido mayor a S/ 0.00.';
    }
    if (!categoria.trim()) {
      nuevosErrores.categoria = 'Seleccione una categoría obligatoria.';
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      onAgregarProducto({
        descripcion: descripcion.trim(),
        precio: parseFloat(precio),
        categoria: categoria.trim()
      });
      limpiarFormulario();
    }
  };

  const limpiarFormulario = () => {
    setDescripcion('');
    setPrecio('');
    setCategoria('');
    setErrores({});
  };

  return (
    <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-slate-700/60">
      <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-700/80">
        <div className="p-2.5 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/30">
          <PackagePlus className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-100">Registrar Producto</h2>
          <p className="text-xs text-slate-400">Ingrese los datos requeridos</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-blue-400" /> Descripción
          </label>
          <input
            type="text"
            className={`w-full bg-slate-900/90 border ${errores.descripcion ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-slate-700/80'} rounded-xl px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all`}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Ej. Teclado Mecánico Wireless"
          />
          {errores.descripcion && (
            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" /> {errores.descripcion}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-2">
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> Precio Venta (S/)
          </label>
          <input
            type="number"
            step="0.01"
            className={`w-full bg-slate-900/90 border ${errores.precio ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-slate-700/80'} rounded-xl px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all`}
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="0.00"
          />
          {errores.precio && (
            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" /> {errores.precio}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-purple-400" /> Categoría
          </label>
          <select
            className={`w-full bg-slate-900/90 border ${errores.categoria ? 'border-red-500/80 ring-1 ring-red-500/50' : 'border-slate-700/80'} rounded-xl px-3.5 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition-all`}
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione categoría --</option>
            <option value="Tecnología">Tecnología</option>
            <option value="Muebles">Muebles</option>
            <option value="Abarrotes">Abarrotes</option>
            <option value="Lácteos">Lácteos</option>
            <option value="Limpieza">Limpieza</option>
          </select>
          {errores.categoria && (
            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" /> {errores.categoria}
            </p>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
          >
            <PackagePlus className="w-4 h-4" /> Registrar producto
          </button>
          <button
            type="button"
            onClick={limpiarFormulario}
            className="bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white font-semibold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
          >
            <RefreshCw className="w-4 h-4" /> Limpiar
          </button>
        </div>
      </form>
    </div>
  );
}