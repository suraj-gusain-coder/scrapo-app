// SCRAPO - Core Application Engine & Multi-Role State Manager

// Default Live Scrap Rates Database (INR per Kg / Unit)
const DEFAULT_RATES = [
  { id: 'paper-news', category: 'Paper & Cardboard', name: 'Old Newspaper (Raddi)', rate: 14, unit: 'kg', icon: 'newspaper', desc: 'Clean daily print newspapers' },
  { id: 'paper-carton', category: 'Paper & Cardboard', name: 'Corrugated Cardboard / Carton', rate: 12, unit: 'kg', icon: 'package', desc: 'Amazon/Flipkart shipping boxes' },
  { id: 'paper-office', category: 'Paper & Cardboard', name: 'Office White Paper / Books', rate: 15, unit: 'kg', icon: 'book-open', desc: 'A4 sheets, textbooks, notebook raddi' },
  
  { id: 'plastic-pet', category: 'Plastics', name: 'PET Bottles (Water / Soda)', rate: 18, unit: 'kg', icon: 'cup-soda', desc: 'Transparent plastic bottles' },
  { id: 'plastic-hard', category: 'Plastics', name: 'Hard Plastic (Buckets / Chairs)', rate: 22, unit: 'kg', icon: 'trash-2', desc: 'Broken plastic furniture, containers' },
  { id: 'plastic-mix', category: 'Plastics', name: 'Mixed Soft Plastic / Polythene', rate: 8, unit: 'kg', icon: 'layers', desc: 'Clean poly bags and wrapping films' },

  { id: 'metal-iron', category: 'Metals & Iron', name: 'Iron & Heavy Steel (Loha)', rate: 32, unit: 'kg', icon: 'anvil', desc: 'Rods, grilles, pipes, sheet metal' },
  { id: 'metal-copper', category: 'Metals & Iron', name: 'Pure Copper Wire (Taamba)', rate: 460, unit: 'kg', icon: 'zap', desc: 'Electrical copper wiring, uninsulated' },
  { id: 'metal-brass', category: 'Metals & Iron', name: 'Brass / Peetal', rate: 340, unit: 'kg', icon: 'shield', desc: 'Utensils, antique fittings, valves' },
  { id: 'metal-aluminum', category: 'Metals & Iron', name: 'Aluminium / Beverage Cans', rate: 110, unit: 'kg', icon: 'cylinder', desc: 'Window frames, utensils, beverage cans' },

  { id: 'ewaste-laptop', category: 'E-Waste & Electronics', name: 'Old / Dead Laptop', rate: 450, unit: 'pc', icon: 'laptop', desc: 'With motherboard and screen intact' },
  { id: 'ewaste-mobile', category: 'E-Waste & Electronics', name: 'Old Smartphone / Tablet', rate: 150, unit: 'pc', icon: 'smartphone', desc: 'Scrap smartphones or feature phones' },
  { id: 'ewaste-pcb', category: 'E-Waste & Electronics', name: 'Electronic Circuit Boards (PCBs)', rate: 120, unit: 'kg', icon: 'cpu', desc: 'Motherboards, power supplies, circuits' },

  { id: 'appliance-ac', category: 'Large Appliances', name: 'Split / Window AC (1.5 Ton)', rate: 2400, unit: 'pc', icon: 'wind', desc: 'Copper coil AC complete unit' },
  { id: 'appliance-fridge', category: 'Large Appliances', name: 'Refrigerator (Single / Double Door)', rate: 1100, unit: 'pc', icon: 'refrigerator', desc: 'Scrap fridge with compressor' },
  { id: 'appliance-washing', category: 'Large Appliances', name: 'Washing Machine', rate: 950, unit: 'pc', icon: 'disc', desc: 'Top/Front load automatic or semi' }
];

// Mock Initial Bookings & Transactions
const INITIAL_BOOKINGS = [
  {
    id: 'SCR-8842',
    customerName: 'Aarav Sharma',
    phone: '+91 98765 43210',
    address: 'Flat 402, Greenwoods Residency, Phase 2, Sector 45',
    city: 'Gurugram',
    pincode: '122003',
    date: 'Today',
    timeSlot: '03:00 PM - 05:00 PM',
    scrapTypes: ['Paper & Cardboard (15kg)', 'Metals & Iron (10kg)', 'PET Bottles (5kg)'],
    estimatedAmount: 640,
    actualAmount: 670,
    weightKg: 31.5,
    payoutMode: 'UPI (aarav@okaxis)',
    status: 'In Progress',
    agent: {
      name: 'Ramesh Kumar',
      phone: '+91 98111 22334',
      badge: 'Verified Agent #408',
      rating: '4.9 ★',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      eta: '12 mins away',
      currentLocation: 'Sector 44 Crossing'
    },
    co2SavedKg: 42.8,
    createdAt: '2026-10-04 14:10'
  },
  {
    id: 'SCR-8839',
    customerName: 'Priya Narang',
    phone: '+91 98222 33445',
    address: 'Villa 18, Palm Meadows, Whitefield',
    city: 'Bengaluru',
    pincode: '560066',
    date: 'Yesterday',
    timeSlot: '11:00 AM - 01:00 PM',
    scrapTypes: ['Large Appliances (1 Refrigerator)', 'E-Waste (2 Laptops)'],
    estimatedAmount: 2000,
    actualAmount: 2000,
    weightKg: 55.0,
    payoutMode: 'Google Pay (9822233445@okbizaxis)',
    status: 'Completed',
    agent: {
      name: 'Suresh Patel',
      phone: '+91 98222 99887',
      badge: 'Verified Agent #215',
      rating: '4.8 ★',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      eta: 'Delivered to Recycler',
      currentLocation: 'EcoGreen Recyclers Hub'
    },
    co2SavedKg: 95.2,
    createdAt: '2026-10-03 10:30'
  },
  {
    id: 'SCR-8845',
    customerName: 'TechVision Workspace',
    phone: '+91 98999 11223',
    address: 'Floor 3, Cyber Gateway Tower B, HITEC City',
    city: 'Hyderabad',
    pincode: '500081',
    date: 'Tomorrow',
    timeSlot: '10:00 AM - 12:00 PM',
    scrapTypes: ['E-Waste & Electronics (40kg PCBs)', 'Carton Boxes (80kg)'],
    estimatedAmount: 5760,
    actualAmount: 0,
    weightKg: 120.0,
    payoutMode: 'Direct Bank NEFT (TechVision Pvt Ltd)',
    status: 'Scheduled',
    agent: {
      name: 'Vikas Rao',
      phone: '+91 99000 77665',
      badge: 'Verified Agent #104',
      rating: '5.0 ★',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      eta: 'Scheduled for Tomorrow',
      currentLocation: 'Central Logistics Depot'
    },
    co2SavedKg: 180.5,
    createdAt: '2026-10-04 18:45'
  }
];

// App State Manager
class ScrapoStore {
  constructor() {
    this.rates = JSON.parse(localStorage.getItem('scrapo_rates')) || DEFAULT_RATES;
    this.bookings = JSON.parse(localStorage.getItem('scrapo_bookings')) || INITIAL_BOOKINGS;
    this.currentUser = JSON.parse(localStorage.getItem('scrapo_user')) || null;
    this.currentRole = this.currentUser ? this.currentUser.role : 'guest';
    this.collectorOnline = true;
    this.selectedCalculatorItems = {};
  }

  save() {
    localStorage.setItem('scrapo_rates', JSON.stringify(this.rates));
    localStorage.setItem('scrapo_bookings', JSON.stringify(this.bookings));
    localStorage.setItem('scrapo_user', JSON.stringify(this.currentUser));
  }

  login(userObj) {
    this.currentUser = userObj;
    this.currentRole = userObj.role;
    this.save();
    window.dispatchEvent(new CustomEvent('scrapo:auth-changed'));
  }

  logout() {
    this.currentUser = null;
    this.currentRole = 'guest';
    this.save();
    window.dispatchEvent(new CustomEvent('scrapo:auth-changed'));
  }

  updateRate(id, newRate) {
    const item = this.rates.find(r => r.id === id);
    if (item) {
      item.rate = Math.max(1, Number(newRate));
      this.save();
      window.dispatchEvent(new CustomEvent('scrapo:rates-changed'));
    }
  }

  addBooking(bookingData) {
    const newId = 'SCR-' + Math.floor(1000 + Math.random() * 9000);
    const newBooking = {
      id: newId,
      customerName: bookingData.customerName || 'Resident Customer',
      phone: bookingData.phone || '+91 98765 00000',
      address: bookingData.address || 'Doorstep Address',
      city: bookingData.city || 'Gurugram',
      pincode: bookingData.pincode || '122001',
      date: bookingData.date || 'Today',
      timeSlot: bookingData.timeSlot || '02:00 PM - 04:00 PM',
      scrapTypes: bookingData.scrapTypes && bookingData.scrapTypes.length ? bookingData.scrapTypes : ['Mixed Recyclables (15kg)'],
      estimatedAmount: Number(bookingData.estimatedAmount) || 450,
      actualAmount: Number(bookingData.estimatedAmount) || 450,
      weightKg: Number(bookingData.estimatedWeight) || 20.0,
      payoutMode: bookingData.payoutMode || 'UPI (Direct Bank Transfer)',
      status: 'In Progress',
      agent: {
        name: 'Ramesh Kumar',
        phone: '+91 98111 22334',
        badge: 'Verified Agent #408',
        rating: '4.9 ★',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        eta: '10-15 mins away (Assigned)',
        currentLocation: 'En route to your location'
      },
      co2SavedKg: Number(((bookingData.estimatedWeight || 20) * 1.4).toFixed(1)),
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };
    this.bookings.unshift(newBooking);
    this.save();
    window.dispatchEvent(new CustomEvent('scrapo:bookings-changed'));
    return newBooking;
  }

  completePickup(bookingId, finalWeight, finalAmount) {
    const b = this.bookings.find(item => item.id === bookingId);
    if (b) {
      b.status = 'Completed';
      b.weightKg = Number(finalWeight);
      b.actualAmount = Number(finalAmount);
      b.co2SavedKg = Number((b.weightKg * 1.4).toFixed(1));
      b.agent.eta = 'Delivered to Authorized Recycler';
      this.save();
      window.dispatchEvent(new CustomEvent('scrapo:bookings-changed'));
    }
  }
}

// Instantiate Global Store
window.scrapo = new ScrapoStore();

// Notifications / Toasts
function showToast(title, message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bgClass = type === 'success' 
    ? 'bg-navy-900 border-emerald-500/80 text-emerald-100 shadow-emerald-950/50' 
    : 'bg-navy-900 border-blue-500/80 text-blue-100 shadow-blue-950/50';
  
  toast.className = `flex items-start gap-3 p-4 rounded-2xl border backdrop-blur-xl shadow-2xl transition-all duration-300 transform translate-y-2 opacity-0 ${bgClass}`;
  toast.innerHTML = `
    <div class="p-2 rounded-xl ${type === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}">
      <i data-lucide="${type === 'success' ? 'check-circle' : 'info'}" class="w-5 h-5"></i>
    </div>
    <div class="flex-1">
      <h4 class="font-bold text-sm text-white">${title}</h4>
      <p class="text-xs mt-0.5 text-slate-300 leading-relaxed">${message}</p>
    </div>
    <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-white p-1">
      <i data-lucide="x" class="w-4 h-4"></i>
    </button>
  `;
  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// Modal Controllers
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}

// Navigation View Routing
function switchView(viewName) {
  document.querySelectorAll('.app-view').forEach(v => v.classList.add('hidden'));
  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    lucide.createIcons();
  }
  updateNavbar();
}

function updateNavbar() {
  const authBtn = document.getElementById('nav-auth-btn');
  const userGreeting = document.getElementById('nav-user-greeting');
  const portalLinks = document.getElementById('nav-portal-links');

  if (!authBtn) return;

  if (window.scrapo.currentUser) {
    authBtn.innerHTML = `<i data-lucide="log-out" class="w-4 h-4"></i> Logout`;
    authBtn.className = "px-3.5 py-2 rounded-xl text-xs font-semibold bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 flex items-center gap-1.5 transition-all";
    authBtn.onclick = () => {
      window.scrapo.logout();
      showToast('Signed Out', 'You have been safely logged out.', 'info');
      switchView('landing');
    };

    if (userGreeting) {
      const role = window.scrapo.currentUser.role;
      let badgeColor = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      if (role === 'collector') badgeColor = 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      if (role === 'admin') badgeColor = 'bg-blue-500/20 text-blue-300 border-blue-500/30';

      userGreeting.innerHTML = `
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${badgeColor} border">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          ${window.scrapo.currentUser.name} (${role.toUpperCase()})
        </span>
      `;
      userGreeting.classList.remove('hidden');
    }

    if (portalLinks) {
      portalLinks.classList.remove('hidden');
      const role = window.scrapo.currentUser.role;
      let portalBtnText = '🏠 My Portal';
      if (role === 'collector') portalBtnText = '🚚 Collector Portal';
      if (role === 'admin') portalBtnText = '🛡️ Fleet Admin Ops';
      
      portalLinks.innerHTML = `
        <button onclick="switchView('${role}-dashboard')" class="text-xs font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-950/60 px-3.5 py-2 rounded-xl border border-emerald-500/40 transition-all flex items-center gap-1.5 shadow-sm">
          ${portalBtnText}
        </button>
      `;
    }
  } else {
    authBtn.innerHTML = `<i data-lucide="user-check" class="w-4 h-4"></i> Sign In / Portal`;
    authBtn.className = "px-4 py-2 rounded-xl text-xs font-bold bg-navy-800 hover:bg-navy-700 text-white border border-slate-700 flex items-center gap-1.5 transition-all shadow-md";
    authBtn.onclick = () => openModal('auth-modal');
    if (userGreeting) userGreeting.classList.add('hidden');
    if (portalLinks) portalLinks.classList.add('hidden');
  }
  lucide.createIcons();
}

// Scrap Value Calculator
function initCalculator() {
  const container = document.getElementById('rate-cards-grid');
  if (!container) return;

  const activeCategory = window.currentRateCategory || 'All';
  const filtered = activeCategory === 'All' 
    ? window.scrapo.rates 
    : window.scrapo.rates.filter(r => r.category.toLowerCase().includes(activeCategory.toLowerCase()));

  container.innerHTML = filtered.map(rate => {
    const qty = window.scrapo.selectedCalculatorItems[rate.id] || 0;
    return `
      <div class="glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-emerald-500/50 transition-all flex flex-col justify-between group shadow-lg">
        <div>
          <div class="flex items-start justify-between gap-2 mb-3">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <i data-lucide="tag" class="w-3 h-3"></i> ${rate.category.split(' ')[0]}
            </span>
            <div class="text-right">
              <span class="text-2xl font-black text-white tracking-tight">₹${rate.rate}</span>
              <span class="text-xs text-slate-400">/${rate.unit}</span>
            </div>
          </div>
          <h4 class="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">${rate.name}</h4>
          <p class="text-xs text-slate-400 mt-1 leading-relaxed">${rate.desc}</p>
        </div>

        <div class="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="text-xs text-slate-400 font-medium">Qty (${rate.unit}):</span>
            <input type="number" min="0" max="1000" value="${qty}" 
              onchange="updateCalculatorItem('${rate.id}', this.value)" 
              oninput="updateCalculatorItem('${rate.id}', this.value)"
              class="w-16 px-2 py-1 text-sm font-bold bg-navy-950 border border-slate-700 rounded-lg text-white text-center focus:border-emerald-500 focus:outline-none" />
          </div>
          <div class="text-right">
            <span class="text-[10px] uppercase font-bold text-slate-400 block">Subtotal</span>
            <span class="text-sm font-extrabold text-emerald-400">₹${qty * rate.rate}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  updateCalculatorSummary();
  lucide.createIcons();
}

function filterRateCategory(category, btnElement) {
  window.currentRateCategory = category;
  document.querySelectorAll('.cat-filter-btn').forEach(b => {
    b.classList.remove('bg-emerald-500', 'text-slate-950', 'font-bold');
    b.classList.add('bg-navy-800/80', 'text-slate-300', 'font-medium');
  });
  if (btnElement) {
    btnElement.classList.add('bg-emerald-500', 'text-slate-950', 'font-bold');
    btnElement.classList.remove('bg-navy-800/80', 'text-slate-300', 'font-medium');
  }
  initCalculator();
}

function updateCalculatorItem(id, value) {
  const val = Math.max(0, parseInt(value) || 0);
  window.scrapo.selectedCalculatorItems[id] = val;
  initCalculator();
}

function updateCalculatorSummary() {
  let totalKg = 0;
  let totalEarnings = 0;

  Object.entries(window.scrapo.selectedCalculatorItems).forEach(([id, qty]) => {
    const item = window.scrapo.rates.find(r => r.id === id);
    if (item && qty > 0) {
      totalEarnings += item.rate * qty;
      totalKg += (item.unit === 'kg' ? qty : qty * 15);
    }
  });

  const totalEl = document.getElementById('calc-total-amount');
  const kgEl = document.getElementById('calc-total-kg');
  const co2El = document.getElementById('calc-co2-saved');

  if (totalEl) totalEl.innerText = `₹${totalEarnings.toLocaleString('en-IN')}`;
  if (kgEl) kgEl.innerText = `${totalKg} kg`;
  if (co2El) co2El.innerText = `${(totalKg * 1.4).toFixed(1)} kg`;
}

function quickBookFromCalculator() {
  let totalEarnings = 0;
  let totalKg = 0;
  const scrapTypes = [];

  Object.entries(window.scrapo.selectedCalculatorItems).forEach(([id, qty]) => {
    const item = window.scrapo.rates.find(r => r.id === id);
    if (item && qty > 0) {
      totalEarnings += item.rate * qty;
      totalKg += (item.unit === 'kg' ? qty : qty * 15);
      scrapTypes.push(`${item.name} (${qty} ${item.unit})`);
    }
  });

  if (scrapTypes.length === 0) {
    scrapTypes.push('Mixed Paper & Cardboard (15kg)', 'Plastic Bottles (5kg)');
    totalEarnings = 450;
    totalKg = 20;
  }

  window.bookingDraft = {
    scrapTypes,
    estimatedAmount: totalEarnings,
    estimatedWeight: totalKg
  };

  openBookingWizard(2);
}

// 4-Step Booking Wizard
let currentBookingStep = 1;
function openBookingWizard(step = 1) {
  currentBookingStep = step;
  updateBookingWizardUI();
  openModal('booking-modal');
}

function setBookingStep(step) {
  currentBookingStep = step;
  updateBookingWizardUI();
}

function updateBookingWizardUI() {
  for (let i = 1; i <= 4; i++) {
    const stepView = document.getElementById(`booking-step-${i}`);
    const stepTab = document.getElementById(`booking-tab-indicator-${i}`);
    if (stepView) {
      if (i === currentBookingStep) {
        stepView.classList.remove('hidden');
      } else {
        stepView.classList.add('hidden');
      }
    }
    if (stepTab) {
      if (i === currentBookingStep) {
        stepTab.className = "w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-xs ring-4 ring-emerald-500/20 shadow-lg";
      } else if (i < currentBookingStep) {
        stepTab.className = "w-8 h-8 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-xs";
      } else {
        stepTab.className = "w-8 h-8 rounded-full bg-navy-800 text-slate-500 font-bold flex items-center justify-center text-xs border border-slate-700";
      }
    }
  }
}

function handleBookingSubmit(event) {
  if (event) event.preventDefault();

  const name = document.getElementById('book-name')?.value || (window.scrapo.currentUser?.name || 'Aarav Sharma');
  const phone = document.getElementById('book-phone')?.value || '+91 98765 43210';
  const address = document.getElementById('book-address')?.value || 'Sector 45, Residency Heights';
  const city = document.getElementById('book-city')?.value || 'Gurugram';
  const pincode = document.getElementById('book-pincode')?.value || '122003';
  const date = document.getElementById('book-date')?.value || 'Today';
  const timeSlot = document.getElementById('book-timeslot')?.value || '03:00 PM - 05:00 PM';
  const payoutMode = document.getElementById('book-payout-mode')?.value || 'UPI (aarav@okaxis)';

  const scrapTypes = window.bookingDraft?.scrapTypes || ['Paper & Cardboard (15kg)', 'Metals (10kg)'];
  const estimatedAmount = window.bookingDraft?.estimatedAmount || 650;
  const estimatedWeight = window.bookingDraft?.estimatedWeight || 25;

  const newBooking = window.scrapo.addBooking({
    customerName: name,
    phone,
    address,
    city,
    pincode,
    date,
    timeSlot,
    payoutMode,
    scrapTypes,
    estimatedAmount,
    estimatedWeight
  });

  const confDetails = document.getElementById('booking-confirmation-details');
  if (confDetails) {
    confDetails.innerHTML = `
      <div class="bg-navy-950 p-5 rounded-2xl border border-emerald-500/40 space-y-3 text-left">
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <span class="text-xs text-slate-400">Booking Reference</span>
            <h4 class="text-lg font-black text-emerald-400">${newBooking.id}</h4>
          </div>
          <span class="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-lg border border-emerald-500/30">
            AGENT ASSIGNED
          </span>
        </div>
        <div class="grid grid-cols-2 gap-3 text-xs">
          <div>
            <span class="text-slate-400 block">Date & Slot:</span>
            <strong class="text-white">${newBooking.date} • ${newBooking.timeSlot}</strong>
          </div>
          <div>
            <span class="text-slate-400 block">Estimated Payout:</span>
            <strong class="text-emerald-400 font-bold text-sm">₹${newBooking.estimatedAmount}</strong>
          </div>
          <div class="col-span-2">
            <span class="text-slate-400 block">Pickup Location:</span>
            <span class="text-slate-200">${newBooking.address}, ${newBooking.city}</span>
          </div>
        </div>

        <div class="pt-3 border-t border-slate-800 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img src="${newBooking.agent.photo}" class="w-8 h-8 rounded-full border border-emerald-400 object-cover" />
            <div class="text-xs">
              <span class="font-bold text-white block">${newBooking.agent.name}</span>
              <span class="text-emerald-400">${newBooking.agent.badge}</span>
            </div>
          </div>
          <span class="text-xs text-slate-400">ETA: ${newBooking.agent.eta}</span>
        </div>
      </div>
    `;
  }

  setBookingStep(4);
  showToast('Pickup Scheduled!', `Booking ${newBooking.id} confirmed. Verified agent assigned with certified digital scale!`, 'success');
}

// Receipt Rendering
function viewReceipt(bookingId) {
  const booking = window.scrapo.bookings.find(b => b.id === bookingId);
  if (!booking) return;

  const container = document.getElementById('receipt-details-content');
  if (!container) return;

  container.innerHTML = `
    <div id="printableReceipt" class="bg-navy-950 p-6 rounded-2xl border border-emerald-500/40 text-slate-100 font-mono text-xs sm:text-sm space-y-4 shadow-2xl">
      <div class="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <h3 class="text-xl font-black text-white tracking-wider flex items-center gap-2">
            <span class="text-emerald-400">SCRAPO</span> DIGITAL RECEIPT
          </h3>
          <p class="text-xs text-slate-400 font-sans">The Smarter Way to Scrap • Doorstep Digital Weighing</p>
        </div>
        <div class="text-right">
          <span class="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded border border-emerald-500/40 font-bold">CALIBRATED SCALE</span>
          <p class="text-xs text-slate-400 mt-1">Receipt #${booking.id}</p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 text-xs font-sans">
        <div>
          <span class="text-slate-400 block">Customer Name:</span>
          <strong class="text-white text-sm">${booking.customerName}</strong>
          <p class="text-slate-300 mt-0.5">${booking.address}</p>
          <p class="text-slate-400">${booking.phone}</p>
        </div>
        <div class="text-right">
          <span class="text-slate-400 block">Assigned Collector Agent:</span>
          <strong class="text-white text-sm">${booking.agent.name}</strong>
          <p class="text-emerald-400 text-xs">${booking.agent.badge}</p>
          <p class="text-slate-400 text-xs">${booking.createdAt}</p>
        </div>
      </div>

      <div class="border-t border-b border-slate-800 py-3 space-y-2">
        <div class="flex justify-between text-xs text-slate-400">
          <span>ITEMIZED SCRAP CATEGORY</span>
          <span>RECORDED STATUS</span>
        </div>
        ${booking.scrapTypes.map(t => `
          <div class="flex justify-between text-white font-sans text-xs">
            <span>${t}</span>
            <span class="text-emerald-400 font-semibold">Verified on Digital Scale</span>
          </div>
        `).join('')}
      </div>

      <div class="space-y-1.5 text-right font-sans">
        <div class="flex justify-between text-xs sm:text-sm">
          <span class="text-slate-400">Net Measured Weight:</span>
          <span class="text-white font-bold">${booking.weightKg} KG</span>
        </div>
        <div class="flex justify-between text-xs sm:text-sm">
          <span class="text-slate-400">Instant Payout Channel:</span>
          <span class="text-emerald-400 font-mono">${booking.payoutMode}</span>
        </div>
        <div class="flex justify-between text-base sm:text-lg font-black border-t border-slate-800 pt-2">
          <span class="text-white">Total Amount Paid:</span>
          <span class="text-emerald-400">₹${booking.actualAmount || booking.estimatedAmount}</span>
        </div>
      </div>

      <div class="bg-emerald-950/50 border border-emerald-500/30 p-3.5 rounded-xl flex items-center justify-between text-xs font-sans">
        <div class="flex items-center gap-2">
          <i data-lucide="leaf" class="w-4 h-4 text-emerald-400"></i>
          <span>Eco-Impact: <strong>${booking.co2SavedKg} kg CO2 emission prevented</strong></span>
        </div>
        <span class="text-emerald-400 font-bold">100% Eco-Recycled</span>
      </div>
    </div>
  `;

  openModal('receipt-modal');
  lucide.createIcons();
}

// Live GPS Tracking Modal
function viewLiveTracking(bookingId) {
  const booking = window.scrapo.bookings.find(b => b.id === bookingId);
  if (!booking) return;

  const container = document.getElementById('tracking-modal-content');
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-5">
      <div class="flex items-center justify-between bg-navy-950 p-4 rounded-xl border border-slate-800">
        <div>
          <span class="text-xs text-slate-400 font-medium">Pickup Request</span>
          <h4 class="text-lg font-black text-white">${booking.id}</h4>
        </div>
        <div class="text-right">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            ${booking.status}
          </span>
        </div>
      </div>

      <div class="relative h-44 bg-navy-950 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1.5px,transparent_1.5px)] [background-size:18px_18px]"></div>
        <div class="absolute w-28 h-28 rounded-full bg-emerald-500/10 animate-ping"></div>
        <div class="relative z-10 flex flex-col items-center text-center p-3">
          <div class="w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 shadow-xl shadow-emerald-500/30">
            <i data-lucide="truck" class="w-6 h-6 animate-bounce"></i>
          </div>
          <span class="text-sm font-bold text-white mt-2">Verified Agent En Route</span>
          <span class="text-xs text-emerald-400 font-semibold">${booking.agent.eta}</span>
          <span class="text-[11px] text-slate-400 mt-0.5">Live Sector: ${booking.agent.currentLocation}</span>
        </div>
      </div>

      <div class="flex items-center justify-between p-4 rounded-xl bg-navy-800/90 border border-slate-700">
        <div class="flex items-center gap-3">
          <img src="${booking.agent.photo}" class="w-12 h-12 rounded-full object-cover border-2 border-emerald-400" />
          <div>
            <h5 class="text-sm font-bold text-white">${booking.agent.name}</h5>
            <p class="text-xs text-emerald-400 font-semibold">${booking.agent.badge} • ${booking.agent.rating}</p>
            <p class="text-[11px] text-slate-400">Equipped with certified digital weighing scale</p>
          </div>
        </div>
        <a href="tel:${booking.agent.phone}" class="px-3.5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl font-bold flex items-center gap-1.5 text-xs transition-colors shadow-lg shadow-emerald-500/20">
          <i data-lucide="phone-call" class="w-4 h-4"></i> Call Agent
        </a>
      </div>

      <div class="space-y-2.5 text-xs">
        <h5 class="font-bold text-slate-400 uppercase tracking-wider text-[11px]">Live Status Timeline</h5>
        <div class="flex items-center gap-3">
          <div class="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-[10px]">✓</div>
          <div class="flex-1 text-white">Pickup Request Confirmed</div>
          <span class="text-slate-400 text-[11px]">${booking.createdAt}</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-[10px]">✓</div>
          <div class="flex-1 text-white">Verified Agent Assigned</div>
          <span class="text-emerald-400 text-[11px]">${booking.agent.name}</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500 flex items-center justify-center animate-pulse text-[10px]">●</div>
          <div class="flex-1 text-slate-200">Doorstep Digital Weighing & Instant UPI Payment</div>
          <span class="text-blue-400 text-[11px]">Upcoming</span>
        </div>
      </div>
    </div>
  `;

  openModal('tracking-modal');
  lucide.createIcons();
}

// Dashboards Rendering
function renderUserDashboard() {
  const container = document.getElementById('user-bookings-list');
  if (!container) return;

  const bookings = window.scrapo.bookings;
  if (bookings.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-slate-400 font-medium">No pickups scheduled yet. Click 'Schedule Doorstep Pickup' to start!</div>`;
    return;
  }

  container.innerHTML = bookings.map(b => `
    <div class="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
      <div class="space-y-2">
        <div class="flex items-center gap-3">
          <span class="text-base font-bold text-white">${b.id}</span>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${
            b.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
          }">${b.status}</span>
          <span class="text-xs text-slate-400 font-medium">${b.date} • ${b.timeSlot}</span>
        </div>
        <p class="text-sm text-slate-300 font-medium">${b.scrapTypes.join(', ')}</p>
        <div class="flex items-center flex-wrap gap-4 text-xs text-slate-400">
          <span><i data-lucide="map-pin" class="w-3.5 h-3.5 inline mr-1 text-emerald-400"></i>${b.address}</span>
          <span><i data-lucide="wallet" class="w-3.5 h-3.5 inline mr-1 text-emerald-400"></i>${b.payoutMode}</span>
        </div>
      </div>

      <div class="flex items-center gap-3 self-end md:self-center">
        <div class="text-right mr-2">
          <span class="text-[10px] uppercase font-bold text-slate-400 block">${b.status === 'Completed' ? 'Amount Transferred' : 'Estimated Payout'}</span>
          <span class="text-lg font-black text-emerald-400">₹${b.actualAmount || b.estimatedAmount}</span>
        </div>

        ${b.status === 'Completed' ? `
          <button onclick="viewReceipt('${b.id}')" class="px-3.5 py-2 bg-navy-800 hover:bg-navy-700 text-white text-xs font-bold rounded-xl border border-slate-700 flex items-center gap-1.5 transition-colors shadow-md">
            <i data-lucide="file-text" class="w-4 h-4 text-emerald-400"></i> Receipt
          </button>
        ` : `
          <button onclick="viewLiveTracking('${b.id}')" class="px-3.5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black rounded-xl flex items-center gap-1.5 transition-colors shadow-lg shadow-emerald-500/30">
            <i data-lucide="navigation" class="w-4 h-4"></i> Live Tracking
          </button>
        `}
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function renderCollectorDashboard() {
  const container = document.getElementById('collector-orders-list');
  const scaleSelect = document.getElementById('collector-scale-category');

  if (scaleSelect) {
    scaleSelect.innerHTML = window.scrapo.rates.map(r => `
      <option value="${r.id}" data-rate="${r.rate}">${r.name} (₹${r.rate}/${r.unit})</option>
    `).join('');
    calculateScaleTotal();
  }

  if (!container) return;

  const assigned = window.scrapo.bookings.filter(b => b.status === 'In Progress' || b.status === 'Scheduled');

  if (assigned.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-slate-400 font-medium">No pending pickups in your queue right now. Great work!</div>`;
    return;
  }

  container.innerHTML = assigned.map(b => `
    <div class="p-5 bg-navy-950 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
      <div class="flex items-start justify-between">
        <div>
          <span class="text-xs text-emerald-400 font-bold uppercase tracking-wider">Pickup Request ${b.id}</span>
          <h4 class="text-base font-bold text-white mt-0.5">${b.customerName}</h4>
          <p class="text-xs text-slate-400">${b.address}</p>
        </div>
        <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
          ${b.timeSlot}
        </span>
      </div>

      <div class="bg-navy-900/90 p-3.5 rounded-xl border border-slate-800 text-xs space-y-1.5">
        <div class="flex justify-between text-slate-400">
          <span>Items to collect:</span>
          <span class="text-white font-medium">${b.scrapTypes.join(', ')}</span>
        </div>
        <div class="flex justify-between text-slate-400">
          <span>Customer Payout Mode:</span>
          <span class="text-emerald-400 font-mono font-bold">${b.payoutMode}</span>
        </div>
      </div>

      <div class="flex items-center gap-2.5 pt-2 border-t border-slate-800">
        <a href="tel:${b.phone}" class="flex-1 py-2.5 bg-navy-800 hover:bg-navy-700 text-white rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors">
          <i data-lucide="phone" class="w-3.5 h-3.5 text-emerald-400"></i> Call Customer
        </a>
        <button onclick="promptCollectorComplete('${b.id}')" class="flex-1 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/30 transition-all">
          <i data-lucide="check" class="w-3.5 h-3.5"></i> Weigh & Pay
        </button>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

function calculateScaleTotal() {
  const catSelect = document.getElementById('collector-scale-category');
  const weightInput = document.getElementById('collector-scale-weight');
  const totalDisplay = document.getElementById('collector-scale-total');

  if (!catSelect || !weightInput || !totalDisplay) return;

  const rate = parseFloat(catSelect.options[catSelect.selectedIndex]?.dataset?.rate || 0);
  const weight = parseFloat(weightInput.value || 0);
  const total = rate * weight;

  totalDisplay.innerText = `₹${total.toFixed(0)}`;
}

function promptCollectorComplete(bookingId) {
  const b = window.scrapo.bookings.find(item => item.id === bookingId);
  if (!b) return;

  const weight = prompt(`Enter final verified weight (KG) measured on digital scale for ${b.customerName}:`, b.weightKg || '25');
  if (weight === null) return;

  const amount = prompt(`Enter final total ₹ calculated for ${weight} KG scrap:`, b.estimatedAmount || '550');
  if (amount === null) return;

  window.scrapo.completePickup(bookingId, weight, amount);
  showToast('Pickup Completed!', `Instant payout of ₹${amount} sent to customer via ${b.payoutMode}. Digital receipt generated!`, 'success');
  viewReceipt(bookingId);
}

function renderAdminDashboard() {
  const ratesTable = document.getElementById('admin-rates-table');
  const fleetTable = document.getElementById('admin-fleet-table');

  if (ratesTable) {
    ratesTable.innerHTML = window.scrapo.rates.map(r => `
      <tr class="border-b border-slate-800 hover:bg-navy-900/60 transition-colors">
        <td class="py-3 px-4 text-xs font-medium text-slate-400">${r.category}</td>
        <td class="py-3 px-4 text-sm font-bold text-white">${r.name}</td>
        <td class="py-3 px-4 text-xs text-slate-400 font-mono">/${r.unit}</td>
        <td class="py-3 px-4">
          <div class="flex items-center gap-1.5">
            <span class="text-xs text-emerald-400 font-bold">₹</span>
            <input type="number" value="${r.rate}" onchange="window.scrapo.updateRate('${r.id}', this.value); showToast('Rate Updated', '${r.name} is now ₹' + this.value + '/${r.unit}');"
              class="w-20 px-2.5 py-1 bg-navy-950 border border-slate-700 rounded-lg text-sm text-white font-mono font-bold focus:border-emerald-500 focus:outline-none" />
          </div>
        </td>
      </tr>
    `).join('');
  }

  if (fleetTable) {
    fleetTable.innerHTML = window.scrapo.bookings.map(b => `
      <tr class="border-b border-slate-800 hover:bg-navy-900/60 transition-colors">
        <td class="py-3 px-4 text-xs font-mono font-bold text-emerald-400">${b.id}</td>
        <td class="py-3 px-4 text-xs text-slate-200 font-medium">${b.customerName}<br><span class="text-[11px] text-slate-500">${b.city}</span></td>
        <td class="py-3 px-4 text-xs text-slate-300 font-medium">${b.agent.name}</td>
        <td class="py-3 px-4 text-xs text-slate-300 font-mono">${b.weightKg} kg</td>
        <td class="py-3 px-4 text-xs font-black text-white">₹${b.actualAmount || b.estimatedAmount}</td>
        <td class="py-3 px-4">
          <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
            b.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
          }">${b.status}</span>
        </td>
      </tr>
    `).join('');
  }
}

// Authentication Modal Helpers
let activeAuthRole = 'user';
function switchAuthRole(role) {
  activeAuthRole = role;
  ['user', 'collector', 'admin'].forEach(r => {
    const tab = document.getElementById(`auth-tab-${r}`);
    const form = document.getElementById(`auth-form-${r}`);
    if (tab) {
      if (r === role) {
        tab.className = "flex-1 py-2.5 text-xs font-bold rounded-xl bg-emerald-500 text-slate-950 transition-all shadow-md";
      } else {
        tab.className = "flex-1 py-2.5 text-xs font-medium rounded-xl text-slate-400 hover:text-white bg-navy-900/60 transition-all";
      }
    }
    if (form) {
      if (r === role) {
        form.classList.remove('hidden');
      } else {
        form.classList.add('hidden');
      }
    }
  });
}

function quickDemoLogin(role) {
  if (role === 'user') {
    window.scrapo.login({
      id: 'usr-101',
      name: 'Aarav Sharma',
      role: 'user',
      phone: '+91 98765 43210',
      email: 'aarav.sharma@example.com',
      address: 'Flat 402, Greenwoods Residency, Sector 45, Gurugram'
    });
    showToast('Welcome back, Aarav!', 'Logged in as Household Customer.', 'success');
    closeModal('auth-modal');
    switchView('user-dashboard');
  } else if (role === 'collector') {
    window.scrapo.login({
      id: 'agent-408',
      name: 'Ramesh Kumar',
      role: 'collector',
      badge: 'Verified Agent #408',
      phone: '+91 98111 22334',
      scaleId: 'SCR-901-CALIBRATED'
    });
    showToast('Duty Started!', 'Logged in as Scrap Collector / Partner Agent.', 'success');
    closeModal('auth-modal');
    switchView('collector-dashboard');
  } else if (role === 'admin') {
    window.scrapo.login({
      id: 'admin-01',
      name: 'Operations Lead',
      role: 'admin',
      email: 'ops@scrapo.in'
    });
    showToast('Admin Access Granted', 'SCRAPO Platform Operations & Fleet Control.', 'info');
    closeModal('auth-modal');
    switchView('admin-dashboard');
  }
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  initCalculator();
  updateNavbar();
  renderUserDashboard();
  renderCollectorDashboard();
  renderAdminDashboard();

  window.addEventListener('scrapo:auth-changed', () => {
    updateNavbar();
    renderUserDashboard();
    renderCollectorDashboard();
    renderAdminDashboard();
  });

  window.addEventListener('scrapo:rates-changed', () => {
    initCalculator();
    renderAdminDashboard();
    renderCollectorDashboard();
  });

  window.addEventListener('scrapo:bookings-changed', () => {
    renderUserDashboard();
    renderCollectorDashboard();
    renderAdminDashboard();
  });
});
