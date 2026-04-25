<<<<<<< HEAD
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
=======
import { appData } from './data';
import './index.css';

const root = document.getElementById('root');

function renderHeader() {
  const query = (window as any).currentSearchQuery || '';
  return `
    <nav class="fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 py-4 max-w-full mx-auto glass-nav z-50">
      <div class="flex items-center gap-4 md:gap-6 flex-1">
        <div class="text-xl md:text-2xl font-black text-primary font-headline tracking-tight cursor-pointer shrink-0" onclick="navigateTo('home')">
          viaja<span class="text-secondary italic">X</span>Colombia
        </div>
        <div class="flex items-center bg-surface-container-low rounded-full px-3 py-1.5 md:px-4 md:py-2 border border-outline-variant/10 w-full max-w-[200px] md:max-w-sm">
          <span class="material-symbols-outlined text-on-surface-variant text-sm cursor-pointer" onclick="triggerSearch()">search</span>
          <input type="text" id="globalSearch" value="${query}" placeholder="Buscar destinos, expediciones..." class="bg-transparent border-none focus:ring-0 text-xs md:text-sm ml-2 w-full" onkeyup="if(event.key === 'Enter') triggerSearch()">
        </div>
      </div>
      <div class="hidden xl:flex items-center gap-8 mx-4">
        <a class="text-on-surface/70 font-medium hover:text-primary transition-colors whitespace-nowrap" href="javascript:void(0)" onclick="navigateTo('destinations')">Destinos</a>
        <a class="text-on-surface/70 font-medium hover:text-primary transition-colors whitespace-nowrap" href="javascript:void(0)">viajaXPass</a>
        <a class="text-on-surface/70 font-medium hover:text-primary transition-colors whitespace-nowrap" href="javascript:void(0)" onclick="navigateTo('about')">Comunidad</a>
        <a class="text-on-surface/70 font-medium hover:text-primary transition-colors whitespace-nowrap" href="javascript:void(0)" onclick="navigateTo('support')">Soporte</a>
      </div>
      <div class="flex items-center gap-2 md:gap-4 shrink-0">
        <button class="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors hidden sm:block">
          <span class="material-symbols-outlined">notifications</span>
        </button>
        <div class="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-primary-container cursor-pointer" onclick="navigateTo('booking')">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Perfil">
        </div>
      </div>
    </nav>
  `;
}

function renderFooter() {
  return `
    <footer class="bg-primary text-white py-16 px-8 mt-20">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div class="flex flex-col gap-6">
          <div class="text-3xl font-black italic font-headline">viajaXColombia</div>
          <p class="text-white/70 text-sm leading-relaxed max-w-xs">
            Inspirando viajes regenerativos y turismo sostenible certificado en el corazón de la biodiversidad colombiana.
          </p>
        </div>
        <div>
          <h4 class="font-headline text-lg font-bold mb-6">Nuestra Empresa</h4>
          <ul class="space-y-4 text-sm text-white/70">
            <li><a class="hover:text-white transition-colors" href="#">Quiénes Somos</a></li>
            <li><a class="hover:text-white transition-colors" href="javascript:void(0)" onclick="navigateTo('about')">Nuestra Historia</a></li>
            <li><a class="hover:text-white transition-colors" href="#">Sostenibilidad</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-headline text-lg font-bold mb-6">Información Legal</h4>
          <ul class="space-y-4 text-sm text-white/70">
            <li><a class="hover:text-white transition-colors" href="#">Términos y Condiciones</a></li>
            <li><a class="hover:text-white transition-colors" href="#">Política de Privacidad</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-headline text-lg font-bold mb-6">Medios de Pago</h4>
          <div class="flex flex-wrap gap-3">
            <span class="bg-white/10 px-3 py-1 rounded text-[10px] font-bold uppercase">Visa</span>
            <span class="bg-white/10 px-3 py-1 rounded text-[10px] font-bold uppercase">Mastercard</span>
            <span class="bg-white/10 px-3 py-1 rounded text-[10px] font-bold uppercase">PSE</span>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto pt-12 border-t border-white/10 flex justify-between items-center text-xs text-white/40">
        <p>© 2026 viajaXColombia. Registro Nacional de Turismo #12345.</p>
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-sm">shield</span>
          <span class="uppercase tracking-widest">Sitio Seguro</span>
        </div>
      </div>
    </footer>
  `;
}

const screens = {
  home: () => `
    ${renderHeader()}
    <main>
      <section class="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2000&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover" alt="Hero">
        <div class="absolute inset-0 hero-gradient"></div>
        <div class="relative z-10 text-center px-6 max-w-4xl">
          <h1 class="text-6xl md:text-8xl text-white font-bold italic leading-none mb-6">Viajar con Propósito</h1>
          <p class="text-white/90 text-xl md:text-2xl mb-10 max-w-2xl mx-auto">Descubre la biodiversidad de Colombia a través de experiencias regenerativas.</p>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <button onclick="navigateTo('destinations')" class="silk-gradient text-white px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
              Explorar Destinos <span class="material-symbols-outlined">arrow_forward</span>
            </button>
            <button class="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              Ver viajaXPass
            </button>
          </div>
        </div>
      </section>

      <section class="py-24 px-8 max-w-7xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-primary mb-12 text-center italic">Tu Próxima Expedición</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[600px]">
          <div class="md:col-span-2 relative rounded-3xl overflow-hidden group">
            <img src="Imagenes/montañas/NomadaDigital.jpg" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Nomadas">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent p-8 flex flex-col justify-end">
              <h3 class="text-white text-3xl font-bold mb-2">Nómadas Digitales</h3>
              <p class="text-white/80 mb-4">Conectividad y naturaleza en balance.</p>
              <button class="text-tertiary-fixed-dim font-bold flex items-center gap-2">Descubre tu refugio <span class="material-symbols-outlined">north_east</span></button>
            </div>
          </div>
          <div class="md:row-span-2 relative rounded-3xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1518197146322-38a052ac7fd8?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Bienestar">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent p-8 flex flex-col justify-end">
              <h3 class="text-white text-3xl font-bold mb-2">Bienestar</h3>
              <p class="text-white/80 mb-4">Sana tu mente en santuarios de paz.</p>
              <button class="text-tertiary-fixed-dim font-bold flex items-center gap-2">Inicia el retiro <span class="material-symbols-outlined">north_east</span></button>
            </div>
          </div>
          <div class="relative rounded-3xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Naturaleza">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent p-6 flex flex-col justify-end">
              <h3 class="text-white text-2xl font-bold">Naturaleza Silvestre</h3>
            </div>
          </div>
          <div class="md:col-span-2 relative rounded-3xl overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1583531357285-f1100c047fb3?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Cultura">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent p-8 flex flex-col justify-end">
              <h3 class="text-white text-3xl font-bold mb-2">Herencia Cultural</h3>
              <p class="text-white/80 mb-4">Historias vivas que trascienden.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 bg-surface-container-low">
        <div class="max-w-7xl mx-auto px-8">
          <div class="flex justify-between items-end mb-12">
            <div>
              <span class="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Selección de Temporada</span>
              <h2 class="text-4xl font-bold text-primary italic">Destinos Imprescindibles</h2>
            </div>
            <button onclick="navigateTo('destinations')" class="text-primary font-bold flex items-center gap-2">Ver todos <span class="material-symbols-outlined">chevron_right</span></button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${appData.destinations.slice(0, 3).map(dest => `
              <div class="bg-white rounded-3xl overflow-hidden shadow-sm group cursor-pointer" onclick="navigateTo('booking', '${dest.id}')">
                <div class="relative h-64 overflow-hidden">
                  <img src="${dest.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="${dest.name}">
                  <div class="absolute top-4 left-4 bg-tertiary-fixed-dim px-3 py-1 rounded-full text-xs font-bold">${dest.points}</div>
                </div>
                <div class="p-6">
                  <div class="flex justify-between items-start mb-4">
                    <h3 class="text-2xl font-bold text-primary italic">${dest.name}</h3>
                    <span class="text-primary font-bold">${dest.price}</span>
                  </div>
                  <p class="text-on-surface-variant text-sm mb-6">${dest.description}</p>
                  <button class="w-full py-3 bg-surface-container-low text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">Reservar Cupo</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `,
  destinations: () => `
    ${renderHeader()}
    <main class="pt-24 px-8 max-w-7xl mx-auto">
      <header class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
        <div class="lg:col-span-5">
          <h1 class="text-5xl md:text-7xl italic text-primary leading-none mb-6">Explora lo Inexplorado</h1>
          <p class="text-lg text-on-surface-variant mb-8">Curaduría experta de los ecosistemas más vibrantes de Colombia.</p>
          <div class="bg-white p-2 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col md:flex-row gap-2">
            <div class="flex-1 px-4 py-2 border-r border-outline-variant/10">
              <label class="block text-[10px] uppercase font-bold text-secondary mb-1">Ecosistema</label>
              <select class="w-full bg-transparent border-none p-0 text-sm font-bold focus:ring-0">
                <option>Todos</option>
                <option>Selva</option>
                <option>Páramo</option>
              </select>
            </div>
            <button class="silk-gradient text-white px-8 py-3 rounded-xl font-bold text-sm">Explorar</button>
          </div>
        </div>
        <div class="lg:col-span-7 relative h-[500px] rounded-3xl overflow-hidden">
          <img src="${appData.destinations[0].image}" class="w-full h-full object-cover" alt="Featured">
          <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          <div class="absolute bottom-8 left-8 text-white">
            <span class="bg-secondary-container text-on-surface px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 inline-block">Destino del Mes</span>
            <h3 class="text-4xl italic font-bold">${appData.destinations[0].name}</h3>
          </div>
        </div>
      </header>

      <section class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div class="lg:col-span-2 space-y-12">
          <h2 class="text-3xl text-primary italic">Resultados de la Expedición</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${appData.destinations.map(dest => `
              <div class="bg-white rounded-3xl overflow-hidden shadow-sm group cursor-pointer" onclick="navigateTo('booking', '${dest.id}')">
                <div class="aspect-[4/5] relative overflow-hidden">
                  <img src="${dest.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="${dest.name}">
                  <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase">${dest.region}</div>
                </div>
                <div class="p-6">
                  <div class="flex justify-between items-start mb-4">
                    <h3 class="text-2xl text-primary italic font-bold">${dest.name}</h3>
                    <span class="text-lg font-bold text-primary">${dest.price}</span>
                  </div>
                  <p class="text-sm text-on-surface-variant mb-6 line-clamp-2">${dest.description}</p>
                  <div class="flex gap-3">
                    <button class="flex-1 py-3 text-sm font-bold text-primary bg-surface-container-low rounded-lg">Detalles</button>
                    <button class="flex-1 py-3 text-sm font-bold text-white silk-gradient rounded-lg">Reservar</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        <aside class="space-y-6">
          <h2 class="text-3xl text-primary italic mb-6">Mapa de Regiones</h2>
          <div class="bg-surface-container-low rounded-3xl p-4 h-[600px] relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=600&auto=format&fit=crop" class="w-full h-full object-cover opacity-30 grayscale" alt="Map">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-outline-variant/20">
                <h4 class="text-xs font-bold uppercase text-secondary mb-2">Filtro por Región</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-secondary-container px-3 py-1 rounded-full text-[10px] font-bold">CARIBE</span>
                  <span class="bg-white px-3 py-1 rounded-full text-[10px] font-bold">ANDINA</span>
                  <span class="bg-white px-3 py-1 rounded-full text-[10px] font-bold">AMAZONÍA</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
    ${renderFooter()}
  `,
  about: () => `
    ${renderHeader()}
    <main>
      <section class="relative min-h-[80vh] flex items-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1599408162449-33887f468094?q=80&w=2000&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover" alt="About">
        <div class="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
        <div class="relative z-10 w-full max-w-7xl mx-auto px-8">
          <div class="max-w-2xl">
            <span class="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Nuestra Esencia</span>
            <h1 class="text-6xl md:text-8xl text-primary font-bold italic leading-none mb-6">El Corazón de los Andes.</h1>
            <p class="text-lg md:text-xl text-on-surface-variant leading-relaxed">Nacimos en el Macizo Colombiano, donde el agua cobra vida.</p>
          </div>
        </div>
      </section>

      <section class="py-24 bg-surface-container-low px-8">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div class="md:col-span-5">
            <h2 class="text-4xl md:text-5xl text-primary italic mb-8">Nuestros Orígenes</h2>
            <div class="w-24 h-1 bg-secondary-container mb-8"></div>
            <p class="text-on-surface-variant text-lg">viajaXColombia no comenzó en una oficina, sino en los senderos de páramo a 3.000 metros de altura.</p>
          </div>
          <div class="md:col-span-7 bg-white p-10 rounded-3xl">
            <p class="text-on-surface-variant text-lg leading-relaxed mb-6">En 2012, un grupo de exploradores y biólogos se reunió en el Macizo Colombiano. Comprendieron que el turismo tradicional estaba fallando.</p>
            <p class="text-on-surface-variant text-lg leading-relaxed">La visión era clara: transformar la exploración en una herramienta de conservación.</p>
          </div>
        </div>
      </section>

      <section class="py-24 px-8 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span class="inline-block px-4 py-1 bg-secondary-container rounded-full text-xs font-bold mb-6">Misión</span>
            <h3 class="text-4xl text-primary italic mb-6">Inspirar la custodia del paraíso.</h3>
            <p class="text-on-surface-variant text-lg">Conectar a los viajeros con la esencia más pura de Colombia, facilitando experiencias de alto impacto emocional.</p>
          </div>
          <div>
            <span class="inline-block px-4 py-1 bg-primary-fixed rounded-full text-xs font-bold mb-6">Visión</span>
            <h3 class="text-4xl text-primary italic mb-6">Ser el referente ético.</h3>
            <p class="text-on-surface-variant text-lg">Para el 2030, buscamos haber restaurado 50,000 hectáreas de bosque andino.</p>
          </div>
        </div>
      </section>
    </main>
    ${renderFooter()}
  `,
  booking: () => {
    const destId = (window as any).selectedDestinationId;
    const destination = appData.destinations.find(d => d.id === destId) || appData.destinations[0];
    
    return `
      ${renderHeader()}
      <main class="pt-24 pb-24 px-8 max-w-7xl mx-auto">
        <div class="mb-12">
          <div class="relative h-[400px] rounded-3xl overflow-hidden mb-8">
            <img src="${destination.image}" class="w-full h-full object-cover" alt="${destination.name}">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-8 left-8 text-white">
              <span class="bg-secondary-container text-on-surface px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 inline-block">${destination.region}</span>
              <h1 class="text-5xl font-bold italic">${destination.name}</h1>
            </div>
          </div>
          <div class="max-w-3xl">
            <p class="text-xl text-on-surface-variant leading-relaxed">${destination.description}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div class="lg:col-span-5 space-y-12">
            <div class="bg-surface-container-low p-10 rounded-3xl">
              <h2 class="text-3xl font-bold text-primary italic mb-8">Comience su Expedición</h2>
              <form class="space-y-6">
                <div>
                  <label class="block text-sm font-bold text-primary mb-2">Nombre Completo</label>
                  <input type="text" class="w-full bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-primary" placeholder="Ej. Ana María Restrepo">
                </div>
                <div>
                  <label class="block text-sm font-bold text-primary mb-2">Correo Electrónico</label>
                  <input type="email" class="w-full bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-primary" placeholder="ana@ejemplo.com">
                </div>
                <button class="w-full silk-gradient text-white font-bold py-4 rounded-xl shadow-lg">Crear Cuenta</button>
              </form>
            </div>
            <div class="space-y-8">
              <h3 class="text-2xl font-bold text-primary italic">¿Por qué confiar en nosotros?</h3>
              <div class="flex gap-6">
                <div class="bg-secondary-container p-3 rounded-xl h-fit"><span class="material-symbols-outlined">support_agent</span></div>
                <div>
                  <h4 class="font-bold text-primary">Soporte Local 24/7</h4>
                  <p class="text-sm text-on-surface-variant">Expertos en territorio listos para asistirte.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-7">
            <div class="bg-white border border-outline-variant/10 p-10 rounded-3xl shadow-sm sticky top-28">
              <div class="flex justify-between items-start mb-8">
                <h2 class="text-3xl font-bold text-primary italic">Reserva de Experiencia</h2>
                <div class="text-right">
                  <span class="text-2xl font-bold text-secondary">${destination.price}</span>
                  <span class="block text-[10px] text-on-surface-variant uppercase">POR PERSONA</span>
                </div>
              </div>
              <div class="space-y-6">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="text-xs font-bold text-primary uppercase mb-2 block">Fecha</label>
                    <input type="date" class="w-full bg-surface-container-low border-none rounded-xl p-4">
                  </div>
                  <div>
                    <label class="text-xs font-bold text-primary uppercase mb-2 block">Viajeros</label>
                    <select class="w-full bg-surface-container-low border-none rounded-xl p-4">
                      <option>2 Personas</option>
                      <option>3 Personas</option>
                    </select>
                  </div>
                </div>
                <div class="pt-8 border-t border-outline-variant/10">
                  <div class="flex justify-between mb-4"><span class="text-on-surface-variant">Subtotal</span><span class="font-bold">${destination.price} x 2</span></div>
                  <div class="flex justify-between items-center mb-8"><span class="text-xl font-bold text-primary">Total Estimado</span><span class="text-2xl font-bold text-primary">${destination.price}</span></div>
                  <button class="w-full bg-primary text-white font-bold py-5 rounded-xl text-lg">Confirmar Reserva</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      ${renderFooter()}
    `;
  },
  support: () => `
    ${renderHeader()}
    <main class="pt-24 px-8 max-w-7xl mx-auto pb-24">
      <section class="relative h-[400px] rounded-3xl overflow-hidden flex items-center px-12 mb-16">
        <img src="https://images.unsplash.com/photo-1599408162449-33887f468094?q=80&w=1000&auto=format&fit=crop" class="absolute inset-0 w-full h-full object-cover opacity-40" alt="Support">
        <div class="absolute inset-0 bg-primary/60"></div>
        <div class="relative z-10 text-white">
          <h1 class="text-5xl font-bold italic mb-4">Conéctate con la Expedición</h1>
          <p class="text-xl max-w-2xl">Nuestra red de expertos locales está lista para guiarte.</p>
        </div>
      </section>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        <div class="lg:col-span-7 bg-white p-12 rounded-3xl shadow-sm">
          <h2 class="text-3xl font-bold text-primary italic mb-8">Envíanos un mensaje</h2>
          <form class="space-y-6">
            <div class="grid grid-cols-2 gap-6">
              <input type="text" placeholder="Nombre" class="w-full bg-surface-container-low border-none rounded-xl p-4">
              <input type="email" placeholder="Email" class="w-full bg-surface-container-low border-none rounded-xl p-4">
            </div>
            <textarea placeholder="Tu mensaje" rows="5" class="w-full bg-surface-container-low border-none rounded-xl p-4"></textarea>
            <button class="silk-gradient text-white font-bold py-4 px-8 rounded-xl">Enviar Mensaje</button>
          </form>
        </div>
        <div class="lg:col-span-5 space-y-8">
          <div class="bg-primary text-white p-8 rounded-3xl">
            <span class="bg-tertiary-fixed-dim text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block">Soporte 24/7</span>
            <h3 class="text-2xl font-bold mb-4">Estamos para ti.</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-3"><span class="material-symbols-outlined">call</span><span class="font-bold">+57 (601) 555-0123</span></div>
              <div class="flex items-center gap-3"><span class="material-symbols-outlined">mail</span><span>ayuda@viajaxcolombia.com</span></div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-4xl font-bold text-primary italic mb-12">Oficinas de Expedición</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${appData.offices.map(office => `
          <div class="bg-white rounded-3xl overflow-hidden shadow-sm group">
            <div class="h-48 overflow-hidden"><img src="${office.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="${office.city}"></div>
            <div class="p-6">
              <h4 class="text-xl font-bold mb-2">${office.city}</h4>
              <p class="text-sm text-on-surface-variant mb-4">${office.address}</p>
              <span class="text-xs font-bold text-secondary uppercase">${office.hours}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </main>
    ${renderFooter()}
  `,
  search: () => {
    const query = ((window as any).currentSearchQuery || '').toLowerCase();
    const destMatches = appData.destinations.filter(d => 
      d.name.toLowerCase().includes(query) || 
      d.description.toLowerCase().includes(query) || 
      d.region.toLowerCase().includes(query)
    );
    const expMatches = appData.expeditions.filter(e => 
      e.title.toLowerCase().includes(query) || 
      e.description.toLowerCase().includes(query) || 
      e.category.toLowerCase().includes(query)
    );

    return `
      ${renderHeader()}
      <main class="pt-32 px-8 max-w-7xl mx-auto min-h-[60vh]">
        <div class="mb-12">
          <span class="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Resultados de Búsqueda</span>
          <h1 class="text-4xl md:text-5xl font-bold text-primary italic mb-4">"${(window as any).currentSearchQuery || ''}"</h1>
          <p class="text-on-surface-variant">Encontramos ${destMatches.length + expMatches.length} coincidencias en nuestra base de datos.</p>
        </div>
        
        ${destMatches.length > 0 ? `
          <section class="mb-16">
            <h2 class="text-2xl font-bold text-primary italic mb-8 flex items-center gap-3">
              <span class="material-symbols-outlined">map</span> Destinos
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              ${destMatches.map(dest => `
                <div class="bg-white rounded-3xl overflow-hidden shadow-sm group cursor-pointer" onclick="navigateTo('booking', '${dest.id}')">
                  <div class="relative h-56 overflow-hidden">
                    <img src="${dest.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="${dest.name}">
                    <div class="absolute top-4 left-4 bg-tertiary-fixed-dim px-3 py-1 rounded-full text-[10px] font-bold uppercase">${dest.region}</div>
                  </div>
                  <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                      <h3 class="text-xl font-bold text-primary italic">${dest.name}</h3>
                      <span class="font-bold text-primary">${dest.price}</span>
                    </div>
                    <p class="text-sm text-on-surface-variant line-clamp-2 mb-4">${dest.description}</p>
                    <button class="text-primary font-bold text-sm flex items-center gap-1">Ver detalles <span class="material-symbols-outlined text-sm">arrow_forward</span></button>
                  </div>
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}

        ${expMatches.length > 0 ? `
          <section class="mb-16">
            <h2 class="text-2xl font-bold text-primary italic mb-8 flex items-center gap-3">
              <span class="material-symbols-outlined">explore</span> Expediciones
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              ${expMatches.map(exp => `
                <div class="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row group cursor-pointer" onclick="navigateTo('booking', 'tayrona')">
                  <div class="md:w-1/3 h-48 md:h-auto overflow-hidden">
                    <img src="${exp.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="${exp.title}">
                  </div>
                  <div class="p-6 md:w-2/3 flex flex-col justify-center">
                    <span class="text-[10px] font-bold text-secondary uppercase mb-2 block tracking-widest">${exp.category}</span>
                    <h3 class="text-xl font-bold text-primary italic mb-2">${exp.title}</h3>
                    <p class="text-sm text-on-surface-variant line-clamp-2 mb-4">${exp.description}</p>
                    <div class="flex items-center justify-between mt-auto">
                      <span class="text-primary font-bold">${exp.price}</span>
                      <span class="text-xs text-on-surface-variant flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span> ${exp.duration}</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}

        ${destMatches.length === 0 && expMatches.length === 0 ? `
          <div class="text-center py-32 bg-surface-container-low rounded-3xl border-2 border-dashed border-outline-variant/20">
            <span class="material-symbols-outlined text-7xl text-outline-variant mb-6">search_off</span>
            <h3 class="text-2xl font-bold text-primary italic mb-2">Sin coincidencias</h3>
            <p class="text-on-surface-variant max-w-md mx-auto mb-8">No encontramos resultados para tu búsqueda. Intenta con términos más generales como "Selva", "Andes" o "Café".</p>
            <button onclick="navigateTo('destinations')" class="silk-gradient text-white px-8 py-3 rounded-xl font-bold">Explorar todo el catálogo</button>
          </div>
        ` : ''}
      </main>
      ${renderFooter()}
    `;
  }
};

function navigateTo(screen: keyof typeof screens, id?: string) {
  if (id) (window as any).selectedDestinationId = id;
  if (root && screens[screen]) {
    root.innerHTML = screens[screen]();
    window.scrollTo(0, 0);
    window.location.hash = id ? `${screen}/${id}` : screen;
  }
}

// Global navigation function for HTML onclick attributes
(window as any).navigateTo = navigateTo;

(window as any).triggerSearch = () => {
  const input = document.getElementById('globalSearch') as HTMLInputElement;
  if (input && input.value.trim()) {
    (window as any).currentSearchQuery = input.value.trim();
    navigateTo('search');
  }
};

// Initial route
window.addEventListener('load', () => {
  const hashParts = window.location.hash.replace('#', '').split('/');
  const screen = hashParts[0] || 'home';
  const id = hashParts[1];
  if (id) (window as any).selectedDestinationId = id;
  navigateTo(screen as keyof typeof screens, id);
});

window.addEventListener('hashchange', () => {
  const hashParts = window.location.hash.replace('#', '').split('/');
  const screen = hashParts[0] || 'home';
  const id = hashParts[1];
  if (id) (window as any).selectedDestinationId = id;
  navigateTo(screen as keyof typeof screens, id);
});
>>>>>>> 5184e8a16d5cb845604795d68dc5d9e961e31d7b
