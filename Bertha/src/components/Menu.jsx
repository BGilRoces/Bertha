import { useState } from 'react'

const MENU = {
  'Panadería y Pastelería': {
    'Panadería': [
      { nombre: 'Medialuna de manteca', descripcion: 'Clásica medialuna de manteca' },
      { nombre: 'Medialuna con jamón y queso', descripcion: 'Medialuna rellena de jamón y queso' },
      { nombre: 'Croissant', descripcion: 'Hojaldre de manteca' },
      { nombre: 'Chipá clásico de queso', descripcion: 'Panecillo de almidón con queso' },
      { nombre: 'Pain au chocolat', descripcion: 'Croissant con chocolate' },
    ],
    'Adicionales dulces': [
      { nombre: 'Granola Bertha', descripcion: 'Mezcla de cereales y frutos secos' },
      { nombre: 'Yogurt griego hecho en casa', descripcion: 'Yogurt artesanal natural' },
      { nombre: 'Mantequilla de maní', descripcion: 'Pasta de maní casera' },
    ],
    'Pastelería': [
      { nombre: 'Variados', descripcion: 'Consultá en el mostrador' },
    ],
  },

  'Bebidas Frías': {
    'Café': [
      { nombre: 'Cold brew', descripcion: 'Café de especialidad infusionado en frío' },
      { nombre: 'Iced americano', descripcion: 'Espresso + agua fría' },
      { nombre: 'Espresso tonic', descripcion: 'Espresso + tónica + limón' },
      { nombre: 'Iced latte', descripcion: 'Espresso + leche fría' },
      { nombre: 'Iced latte doble', descripcion: 'Doble espresso + leche fría' },
      { nombre: 'Iced latte naranja', descripcion: 'Espresso + leche fría + naranja' },
    ],
    'Infusiones frías': [
      { nombre: 'Iced matcha latte', descripcion: 'Matcha + leche fría' },
      { nombre: 'Iced té verde', descripcion: 'Té verde + manzanilla + menta' },
      { nombre: 'Iced hibiscus', descripcion: 'Té hibiscus + manzanilla + naranja' },
    ],
    'Clásicos sin café': [
      { nombre: 'Jugo de naranja', descripcion: 'Exprimido' },
      { nombre: 'Jugo verde detox', descripcion: 'Espinaca, pepino, manzana verde, naranja, jengibre, limón, lima' },
      { nombre: 'Limonada', descripcion: 'Limón + menta + jengibre' },
      { nombre: 'Limonada de lemongrass', descripcion: 'Limón + lemongrass + menta' },
      { nombre: 'Soda de maracuyá', descripcion: 'Agua con gas + pulpa de maracuyá' },
    ],
  },

  'Bebidas Calientes': {
    'Café': [
      { nombre: 'Espresso', descripcion: '1 shot' },
      { nombre: 'Espresso lungo', descripcion: '1 shot largo' },
      { nombre: 'Doppio', descripcion: '2 shots' },
      { nombre: 'Macchiato', descripcion: 'Espresso + leche montada' },
      { nombre: 'Cortado', descripcion: 'Espresso + leche caliente' },
      { nombre: 'Americano', descripcion: '1 shot + agua' },
      { nombre: 'Flat white', descripcion: 'Espresso + leche vaporizada' },
      { nombre: 'Capuccino', descripcion: 'Espresso + leche montada' },
      { nombre: 'Moccaccino', descripcion: 'Espresso + leche + chocolate' },
      { nombre: 'Moccaccino naranja', descripcion: 'Espresso + chocolate + leche' },
      { nombre: 'Magic', descripcion: 'Doble espresso + leche' },
      { nombre: 'Latte', descripcion: 'Espresso + leche' },
      { nombre: 'Latte naranja', descripcion: 'Espresso + leche + naranja' },
      { nombre: 'Latte doble', descripcion: 'Doble espresso + leche' },
    ],
    'Personalizá tu café': [
      { nombre: 'Opciones de leches', descripcion: 'Consultá por opciones de leche disponibles' },
    ],
    'Infusiones': [
      { nombre: 'Matcha latte', descripcion: 'Té verde matcha + leche' },
      { nombre: 'Infusión de té verde', descripcion: 'Té verde en hebras' },
      { nombre: 'Chocolate', descripcion: 'Cacao + leche caliente' },
    ],
  },

  'Almuerzos': {
    'Platos principales': [
      { nombre: 'Ensalada de trucha', descripcion: 'Trucha patagónica gravlax, papa nativa, hojas verdes, encurtidos, alcaparras, huevo duro y vinagreta de ajo asado' },
      { nombre: 'Ensalada Caesar', descripcion: 'Aderezo caesar, pollo, lechuga crocante, parmesano, croutons' },
      { nombre: 'Milanesa Bertha', descripcion: 'Milanesa de pollo con ensalada de estación, boniato horneado y salsa de yogurt' },
      { nombre: 'Tarta del día', descripcion: 'Consultar opción' },
    ],
    'Adicionales salados': [
      { nombre: 'Huevos', descripcion: 'Revueltos / duro / poché' },
      { nombre: 'Sour cream', descripcion: 'Crema ácida' },
      { nombre: 'Trucha gravlax', descripcion: 'Láminas de trucha curada' },
      { nombre: 'Batata o boniato', descripcion: 'Al horno' },
      { nombre: 'Panceta', descripcion: 'Cocida tipo ahumada' },
      { nombre: 'Jamón y queso', descripcion: 'Adicional clásico' },
    ],
  },

  'Desayunos & Meriendas': {
    'Selección': [
      { nombre: 'Tostadas con queso y dulce', descripcion: 'Pan de masa madre con semillas | pan de masa madre blanco | pan sin gluten, acompañadas de mermelada del día, dulce de leche, manteca, miel o queso crema' },
      { nombre: 'Huevos revueltos', descripcion: 'Huevos cremosos con pan de estación y sour cream' },
      { nombre: 'French toast', descripcion: 'Pan brioche, miel, frutas de estación y crema' },
      { nombre: 'Yogurt griego casero', descripcion: 'Con granola Bertha, frutas de estación y miel' },
    ],
  },

  'Tostones y Sándwiches': {
    'Tostones': [
      { nombre: 'Palta + tomate', descripcion: 'Pan de masa madre con palta, tomates confitados y huevo poché o revuelto' },
      { nombre: 'Hummus + hongos', descripcion: 'Pan de masa madre con hummus y portobellos' },
      { nombre: 'Goloso toast', descripcion: 'Pan de masa madre con huevo, panceta cocida tipo ahumada y mix orgánico' },
    ],
    'Sándwiches': [
      { nombre: 'Tostado de jamón y queso', descripcion: 'Clásico tostado en pan de molde' },
      { nombre: 'Tostado de chipá', descripcion: 'Chipás rellenos de jamón y queso' },
      { nombre: 'Sándwich de focaccia', descripcion: 'Con vegetales asados, hummus y gremolata' },
      { nombre: 'Sándwich de hongos', descripcion: 'Portobellos, champiñones y queso sardo' },
      { nombre: 'Pork sandwich', descripcion: 'Bondiola braseada 12 horas, salsa barbacoa, repollo crocante y pan de papa' },
    ],
  },
}

function Menu() {
  // desired order from the user
  const tabsOrder = [
    'Bebidas Calientes',
    'Bebidas Frías',
    'Desayunos & Meriendas',
    'Almuerzos',
    'Tostones y Sándwiches',
    'Panadería y Pastelería',
  ]

  const ALL_TAB = 'Todos'
  // only include keys that exist in MENU (safe guard), then append the 'Todos' tab
  const tabs = [...tabsOrder.filter((t) => Object.prototype.hasOwnProperty.call(MENU, t)), ALL_TAB]
  const [active, setActive] = useState(0)
  const [query, setQuery] = useState('')
  const [copied, setCopied] = useState('')

  // restore simple emoji mapping for tabs and special-case the item 'Huevos'
  const TAB_EMOJI = {
    'Bebidas Calientes': '☕',
    'Bebidas Frías': '🥤',
    'Desayunos & Meriendas': '🥐',
    'Almuerzos': '🍽️',
    'Tostones y Sándwiches': '🥪',
    'Panadería y Pastelería': '🥖',
  }

  // helper to normalize text (remove accents) and lowercase for accent-insensitive search
  const normalize = (s) => {
    if (!s) return ''
    try {
      return s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()
    } catch {
      // fallback for environments without Unicode property escapes
      return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    }
  }


  return (
    <section id="menu" className="py-16 bg-[#f2f2e9]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-[#8b9374] mb-6 text-center">Nuestro Menú</h2>

        {/* Search + Tab list */}
        <div className="mb-6">
          <div className="flex justify-center mb-4">
            <div className="w-full max-w-md relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </span>
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  const v = e.target.value
                  setQuery(v)
                  // when user types, switch to Todos so search always applies there
                  if (v.trim() !== '') {
                    const todosIndex = tabs.indexOf(ALL_TAB)
                    if (todosIndex !== -1) setActive(todosIndex)
                  }
                }}
                placeholder="Buscar en el menú..."
                className="w-full pl-10 pr-10 py-2 rounded-full border border-[#e6e6df] focus:outline-none focus:ring-2 focus:ring-[#8b9374] text-sm bg-white shadow-sm"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  aria-label="Limpiar búsqueda"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div
            role="tablist"
            aria-label="Categorías del menú"
            className="flex gap-3 justify-center flex-wrap overflow-x-auto py-2 px-1"
          >
            {tabs.map((tab, i) => {
              // compute count of items in this tab (respecting query filter). For 'Todos' sum across all sections.
              const total = (() => {
                if (tab === ALL_TAB) {
                  return Object.values(MENU).reduce((acc, section) => {
                    return acc + Object.values(section).reduce((sAcc, arr) => {
                      if (!query) return sAcc + arr.length
                      const q = query.toLowerCase()
                      return sAcc + arr.filter(it => (it.nombre + ' ' + (it.descripcion || '')).toLowerCase().includes(q)).length
                    }, 0)
                  }, 0)
                }

                return Object.values(MENU[tab]).reduce((acc, arr) => {
                  if (!query) return acc + arr.length
                  const q = query.toLowerCase()
                  return acc + arr.filter(it => (it.nombre + ' ' + (it.descripcion || '')).toLowerCase().includes(q)).length
                }, 0)
              })()

              return (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full transition-all duration-200 flex-shrink-0 flex items-center gap-2 ${
                    active === i
                      ? 'bg-[#8b9374] text-[#f2f2e9] shadow-md scale-[1.03]'
                      : 'bg-white text-[#8b9374] ring-1 ring-[#e6e6df] hover:bg-[#f6f6f1]'
                  }`}
                >
                  <span className="font-medium text-sm"><span className="mr-2" aria-hidden>{TAB_EMOJI[tab] || (tab === ALL_TAB ? '📋' : '•')}</span>{tab}</span>
                  <span className="bg-[#f2f2e9] text-[#8b9374] text-[11px] px-2 py-0.5 rounded-full ring-1 ring-[#e6e6df]">{total}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active panel with fixed height and internal scroll (narrowed) */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-sm h-[55vh] md:h-[70vh] overflow-hidden">
            <div className="h-full overflow-auto pr-2">
              <div className="columns-1 md:columns-2 md:[column-gap:2rem]">
                {tabs.length === 0 ? (
                  <div className="col-span-full text-center text-gray-500">No hay categorías de menú disponibles</div>
                ) : (
                  (() => {
                    const currentTab = tabs[active]
                    const matchesPredicate = (it) => {
                      if (!query) return true
                      const q = normalize(query)
                      return normalize(it.nombre + ' ' + (it.descripcion || '')).includes(q)
                    }

                    // collect all items for 'Todos' counts / matching
                    const allItems = Object.values(MENU).flatMap(section => Object.values(section).flat())
                    const overallMatches = currentTab === ALL_TAB
                      ? allItems.filter(matchesPredicate).length
                      : (Object.values(MENU[currentTab] || {}).flat().filter(matchesPredicate).length)

                    if (query && overallMatches === 0) {
                      return <div className="col-span-full text-center text-gray-500">No se encontraron resultados para "{query}"</div>
                    }

                    // If 'Todos' is active, render each top-level section and its subsections
                    if (currentTab === ALL_TAB) {
                      return Object.entries(MENU).map(([topTitle, subSections]) => (
                        <div key={topTitle} className="break-inside-avoid mb-6">
                          <h3 className="text-2xl font-serif text-[#8b9374] mb-3 border-l-4 border-[#e9e9e1] pl-4">{topTitle}</h3>
                          {Object.entries(subSections).map(([subTitle, items]) => {
                            const filtered = items.filter(matchesPredicate)
                            if (filtered.length === 0) return null
                            return (
                              <div key={subTitle} className="mb-4">
                                <h4 className="text-lg font-medium text-[#8b9374] mb-2">{subTitle}</h4>
                                <ul className="space-y-3">
                                  {filtered.map((it, idx) => (
                                    <li key={idx} className="py-3 last:pb-0">
                                      <div className="flex items-center gap-4 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f0f0ea] to-[#e9e9df] flex items-center justify-center text-[#8b9374] font-medium">{(it.nombre && normalize(it.nombre).includes('huev')) ? '🥚' : (TAB_EMOJI[topTitle] || '•')}</div>
                                        <div className="flex-1">
                                          <p className="font-semibold text-lg text-[#111]">{it.nombre}</p>
                                          {it.descripcion && <p className="text-sm text-gray-500 mt-1">{it.descripcion}</p>}
                                        </div>
                                        <div className="flex items-center">
                                          <button
                                            onClick={() => {
                                              if (navigator.clipboard && navigator.clipboard.writeText) {
                                                navigator.clipboard.writeText(it.nombre)
                                                setCopied(it.nombre)
                                                setTimeout(() => setCopied(''), 1400)
                                              }
                                            }}
                                            title="Copiar nombre"
                                            className="text-sm text-gray-500 hover:text-gray-700 ml-2"
                                          >
                                            {copied === it.nombre ? '✓' : '📋'}
                                          </button>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )
                          })}
                        </div>
                      ))
                    }

                    // otherwise render only the active top-level category
                    return Object.entries(MENU[currentTab] || {}).map(([subTitle, items]) => {
                      const filtered = items.filter(matchesPredicate)
                      if (filtered.length === 0) return null
                      return (
                        <div key={subTitle} className="break-inside-avoid mb-6">
                          <h3 className="text-2xl font-serif text-[#8b9374] mb-3 border-l-4 border-[#e9e9e1] pl-4">{subTitle}</h3>
                          <ul className="space-y-3">
                            {filtered.map((it, idx) => (
                              <li key={idx} className="py-3 last:pb-0">
                                <div className="flex items-center gap-4 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition">
                                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f0f0ea] to-[#e9e9df] flex items-center justify-center text-[#8b9374] font-medium">{(it.nombre && normalize(it.nombre).includes('huev')) ? '🥚' : (TAB_EMOJI[currentTab] || '•')}</div>
                                  <div className="flex-1">
                                    <p className="font-semibold text-lg text-[#111]">{it.nombre}</p>
                                    {it.descripcion && <p className="text-sm text-gray-500 mt-1">{it.descripcion}</p>}
                                  </div>
                                  <div className="flex items-center">
                                    <button
                                      onClick={() => {
                                        if (navigator.clipboard && navigator.clipboard.writeText) {
                                          navigator.clipboard.writeText(it.nombre)
                                          setCopied(it.nombre)
                                          setTimeout(() => setCopied(''), 1400)
                                        }
                                      }}
                                      title="Copiar nombre"
                                      className="text-sm text-gray-500 hover:text-gray-700 ml-2"
                                    >
                                      {copied === it.nombre ? '✓' : '📋'}
                                    </button>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })
                  })()
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Menu