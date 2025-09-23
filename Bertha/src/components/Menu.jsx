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

  // only include keys that exist in MENU (safe guard)
  const tabs = tabsOrder.filter((t) => Object.prototype.hasOwnProperty.call(MENU, t))
  const [active, setActive] = useState(0)

  return (
    <section id="menu" className="py-16 bg-[#f2f2e9]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-[#8b9374] mb-6 text-center">Nuestro Menú</h2>

        {/* Tab list */}
        <div className="mb-6">
          <div
            role="tablist"
            aria-label="Categorías del menú"
            className="flex gap-3 justify-center flex-wrap overflow-x-auto py-2 px-1"
          >
            {tabs.map((tab, i) => (
              <button
                key={tab}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`whitespace-nowrap px-4 py-2 rounded-full transition-all duration-200 flex-shrink-0 ${
                  active === i
                    ? 'bg-[#8b9374] text-[#f2f2e9] shadow-md'
                    : 'bg-white text-[#8b9374] ring-1 ring-[#d6d6cf] hover:shadow-sm'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Active panel with fixed height and internal scroll */}
        <div className="bg-white rounded-2xl p-6 shadow-sm h-[55vh] md:h-[70vh] overflow-hidden">
          <div className="h-full overflow-auto pr-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(MENU[tabs[active]]).map(([subTitle, items]) => (
                <div key={subTitle} className="">
                  <h3 className="text-2xl font-serif text-[#8b9374] mb-3">{subTitle}</h3>
                  <ul className="space-y-3">
                    {items.map((it, idx) => (
                      <li key={idx} className="py-3 border-b last:border-b-0">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <p className="font-medium text-lg text-[#2b2b2b]">{it.nombre}</p>
                            {it.descripcion && (
                              <p className="text-sm text-gray-600 mt-1">{it.descripcion}</p>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu