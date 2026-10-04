// SCRAPO - Core Application Engine with Light/Dark Mode & Auth-Gated Pickup Scheduling

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
  { id: 'appliance-fridge', category: 'Large Appliances', name: 'Refrigerator (Single / Double)', rate: 1100, unit: 'pc', icon: 'refrigerator', desc: 'Scrap fridge with compressor' },
  { id: 'appliance-washing', category: 'Large Appliances', name: 'Washing Machine', rate: 950, unit: 'pc', icon: 'disc', desc: 'Top/Front load automatic or semi' }
];

const INITIAL_BOOKINGS = [
  {
    id: 'SCR-8842',
    customerName: 'Aarav Sharma',
    phone: '+91 98765 43210',
    address: 'Flat 402, Greenwoods Residency, Sector 45',
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
  }
];

class ScrapoStore {
  constructor() {
    this.rates = JSON.parse(localStorage.getItem('scrapo_rates')) || DEFAULT_RATES;
    this.bookings = JSON.parse(localStorage.getItem('scrapo_bookings')) || INITIAL_BOOKINGS;
    this.currentUser = JSON.parse(localStorage.getItem('scrapo_user')) || null;
    this.currentRole = this.currentUser ? this.currentUser.role : 'guest';
    this.theme = localStorage.getItem('scrapo_theme') || 'light';
    this.pendingBooking = false;
    this.collectorOnline = true;
    this.selectedCalculatorItems = {};
  }
  save() {
    localStorage.setItem('scrapo_rates', JSON.stringify(this.rates));
    localStorage.setItem('scrapo_bookings', JSON.stringify(this.bookings));
    localStorage.setItem('scrapo_user', JSON.stringify(this.currentUser));
    localStorage.setItem('scrapo_theme', this.theme);
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
      customerName: bookingData.customerName || (this.currentUser?.name || 'Resident Customer'),
      phone: bookingData.phone || (this.currentUser?.phone || '+91 98765 00000'),
      address: bookingData.address || (this.currentUser?.address || 'Doorstep Address'),
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

window.scrapo = new ScrapoStore();

// Theme Management (Light / Dark Mode Switch)
function initTheme() {
  const html = document.documentElement;
  const currentTheme = window.scrapo.theme;
  if (currentTheme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  updateThemeIcons();
}

function toggleTheme() {
  const html = document.documentElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    window.scrapo.theme = 'light';
    showToast('Theme Changed', 'Switched to Light Mode', 'info');
  } else {
    html.classList.add('dark');
    window.scrapo.theme = 'dark';
    showToast('Theme Changed', 'Switched to Dark Mode', 'info');
  }
  window.scrapo.save();
  updateThemeIcons();
}

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  document.querySelectorAll('.theme-toggle-icon').forEach(icon => {
    icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
  });
  lucide.createIcons();
}

// Notifications
function showToast(title, message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  const isDark = document.documentElement.classList.contains('dark');
  const bgClass = isDark
    ? (type === 'success' ? 'bg-navy-900 border-emerald-500 text-slate-100 shadow-xl' : 'bg-navy-900 border-blue-500 text-slate-100 shadow-xl')
    : (type === 'success' ? 'bg-white border-emerald-500 text-slate-800 shadow-xl shadow-emerald-500/10' : 'bg-white border-blue-500 text-slate-800 shadow-xl shadow-blue-500/10');
  
  toast.className = `flex items-start gap-3 p-4 rounded-2xl border backdrop-blur-xl transition-all duration-300 transform translate-y-2 opacity-0 ${bgClass}`;
  toast.innerHTML = `
    <div class="p-2 rounded-xl ${type === 'success' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}">
      <i data-lucide="${type === 'success' ? 'check-circle' : 'info'}" class="w-5 h-5"></i>
    </div>
    <div class="flex-1">
      <h4 class="font-bold text-sm text-slate-900 dark:text-white">${title}</h4>
      <p class="text-xs mt-0.5 text-slate-600 dark:text-slate-300 leading-relaxed">${message}</p>
    </div>
    <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1">
      <i data-lucide="x" class="w-4 h-4"></i>
    </button>
  `;
  container.appendChild(toast);
  lucide.createIcons();
  setTimeout(() => toast.classList.remove('translate-y-2', 'opacity-0'), 10);
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// Hamburger Navigation
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('hamburger-icon');
  if (menu) {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
      if (btn) btn.setAttribute('data-lucide', 'x');
      document.body.style.overflow = 'hidden';
    } else {
      menu.classList.add('hidden');
      if (btn) btn.setAttribute('data-lucide', 'menu');
      document.body.style.overflow = 'auto';
    }
    lucide.createIcons();
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('hamburger-icon');
  if (menu) {
    menu.classList.add('hidden');
    if (btn) btn.setAttribute('data-lucide', 'menu');
    document.body.style.overflow = 'auto';
    lucide.createIcons();
  }
}

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
    authBtn.className = "px-3.5 py-2 rounded-xl text-xs font-semibold bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 flex items-center gap-1.5 transition-all";
    authBtn.onclick = () => {
      window.scrapo.logout();
      showToast('Signed Out', 'You have been safely logged out.', 'info');
      switchView('landing');
    };
    if (userGreeting) {
      const role = window.scrapo.currentUser.role;
      let badgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
      if (role === 'collector') badgeColor = 'bg-amber-50 text-amber-800 border-amber-200';
      if (role === 'admin') badgeColor = 'bg-blue-50 text-blue-800 border-blue-200';
      userGreeting.style.display = 'flex';
      userGreeting.innerHTML = `
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${badgeColor} border">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          ${window.scrapo.currentUser.name} (${role.toUpperCase()})
        </span>
      `;
    }
    if (portalLinks) {
      portalLinks.style.display = 'flex';
      const role = window.scrapo.currentUser.role;
      let portalBtnText = '🏠 My Portal';
      if (role === 'collector') portalBtnText = '🚚 Collector Portal';
      if (role === 'admin') portalBtnText = '🛡️ Fleet Admin Ops';
      portalLinks.innerHTML = `
        <button onclick="switchView('${role}-dashboard')" class="text-xs font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200 transition-all flex items-center gap-1.5 shadow-sm">
          ${portalBtnText}
        </button>
      `;
    }
  } else {
    authBtn.innerHTML = `<i data-lucide="user-check" class="w-4 h-4"></i> Sign In / Portal`;
    authBtn.className = "px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white border border-slate-900 flex items-center gap-1.5 transition-all shadow-sm";
    authBtn.onclick = () => openModal('auth-modal');
    if (userGreeting) {
      userGreeting.innerHTML = '';
      userGreeting.style.display = 'none';
    }
    if (portalLinks) {
      portalLinks.innerHTML = '';
      portalLinks.style.display = 'none';
    }
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
      <div class="glass-panel p-5 rounded-2xl border border-slate-200/90 hover:border-emerald-500 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md bg-white">
        <div>
          <div class="flex items-start justify-between gap-2 mb-3">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <i data-lucide="tag" class="w-3 h-3"></i> ${rate.category.split(' ')[0]}
            </span>
            <div class="text-right">
              <span class="text-2xl font-black text-slate-900 tracking-tight">₹${rate.rate}</span>
              <span class="text-xs text-slate-500">/${rate.unit}</span>
            </div>
          </div>
          <h4 class="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">${rate.name}</h4>
          <p class="text-xs text-slate-500 mt-1 leading-relaxed">${rate.desc}</p>
        </div>
        <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="text-xs text-slate-500 font-medium">Qty (${rate.unit}):</span>
            <input type="number" min="0" max="1000" value="${qty}" 
              onchange="updateCalculatorItem('${rate.id}', this.value)" 
              oninput="updateCalculatorItem('${rate.id}', this.value)"
              class="w-16 px-2 py-1 text-sm font-bold bg-slate-50 border border-slate-200 rounded-lg text-slate-900 text-center focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" />
          </div>
          <div class="text-right">
            <span class="text-[10px] uppercase font-bold text-slate-400 block">Subtotal</span>
            <span class="text-sm font-extrabold text-emerald-600">₹${qty * rate.rate}</span>
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
    b.classList.remove('bg-emerald-600', 'text-white', 'font-bold', 'shadow-sm');
    b.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200', 'hover:bg-slate-50');
  });
  if (btnElement) {
    btnElement.classList.add('bg-emerald-600', 'text-white', 'font-bold', 'shadow-sm');
    btnElement.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
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

// Gated Doorstep Booking: Requires Login First
function openBookingWizard(step = 1) {
  // If not logged in as user, prompt login first
  if (!window.scrapo.currentUser || window.scrapo.currentUser.role !== 'user') {
    window.scrapo.pendingBooking = true;
    showToast('Sign In Required', 'Please sign in or use Quick Demo Login to access your scrap scheduler.', 'info');
    openModal('auth-modal');
    switchAuthRole('user');
    return;
  }

  // If logged in, navigate to user dashboard & open scheduler
  switchView('user-dashboard');
  currentBookingStep = step;
  updateBookingWizardUI();
  openModal('booking-modal');
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
  window.bookingDraft = { scrapTypes, estimatedAmount: totalEarnings, estimatedWeight: totalKg };
  openBookingWizard(2);
}

let currentBookingStep = 1;
function setBookingStep(step) {
  currentBookingStep = step;
  updateBookingWizardUI();
}

function updateBookingWizardUI() {
  for (let i = 1; i <= 4; i++) {
    const stepView = document.getElementById(`booking-step-${i}`);
    const stepTab = document.getElementById(`booking-tab-indicator-${i}`);
    if (stepView) {
      if (i === currentBookingStep) stepView.classList.remove('hidden');
      else stepView.classList.add('hidden');
    }
    if (stepTab) {
      if (i === currentBookingStep) {
        stepTab.className = "w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs ring-4 ring-emerald-100 shadow-sm";
      } else if (i < currentBookingStep) {
        stepTab.className = "w-8 h-8 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-xs";
      } else {
        stepTab.className = "w-8 h-8 rounded-full bg-slate-100 text-slate-400 font-bold flex items-center justify-center text-xs border border-slate-200";
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
    customerName: name, phone, address, city, pincode, date, timeSlot, payoutMode, scrapTypes, estimatedAmount, estimatedWeight
  });

  const confDetails = document.getElementById('booking-confirmation-details');
  if (confDetails) {
    confDetails.innerHTML = `
      <div class="bg-slate-50 p-5 rounded-2xl border border-emerald-300 space-y-3 text-left">
        <div class="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <span class="text-xs text-slate-500">Booking Reference</span>
            <h4 class="text-lg font-black text-emerald-700">${newBooking.id}</h4>
          </div>
          <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-200">AGENT ASSIGNED</span>
        </div>
        <div class="grid grid-cols-2 gap-3 text-xs">
          <div><span class="text-slate-500 block">Date & Slot:</span><strong class="text-slate-900">${newBooking.date} • ${newBooking.timeSlot}</strong></div>
          <div><span class="text-slate-500 block">Estimated Payout:</span><strong class="text-emerald-700 font-bold text-sm">₹${newBooking.estimatedAmount}</strong></div>
          <div class="col-span-2"><span class="text-slate-500 block">Pickup Location:</span><span class="text-slate-700">${newBooking.address}, ${newBooking.city}</span></div>
        </div>
        <div class="pt-3 border-t border-slate-200 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img src="${newBooking.agent.photo}" class="w-8 h-8 rounded-full border border-emerald-500 object-cover" />
            <div class="text-xs"><span class="font-bold text-slate-900 block">${newBooking.agent.name}</span><span class="text-emerald-700">${newBooking.agent.badge}</span></div>
          </div>
          <span class="text-xs text-slate-500">ETA: ${newBooking.agent.eta}</span>
        </div>
      </div>
    `;
  }
  setBookingStep(4);
  showToast('Pickup Scheduled!', `Booking ${newBooking.id} confirmed. Verified agent assigned with certified digital scale!`, 'success');
}

function viewReceipt(bookingId) {
  const booking = window.scrapo.bookings.find(b => b.id === bookingId);
  if (!booking) return;
  const container = document.getElementById('receipt-details-content');
  if (!container) return;

  container.innerHTML = `
    <div id="printableReceipt" class="bg-white p-6 rounded-2xl border border-slate-200 text-slate-900 font-mono text-xs sm:text-sm space-y-4 shadow-xl">
      <div class="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h3 class="text-xl font-black text-slate-900 tracking-wider flex items-center gap-2"><span class="text-emerald-600">SCRAPO</span> DIGITAL RECEIPT</h3>
          <p class="text-xs text-slate-500 font-sans">The Smarter Way to Scrap • Doorstep Digital Weighing</p>
        </div>
        <div class="text-right">
          <span class="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded border border-emerald-200 font-bold">CALIBRATED SCALE</span>
          <p class="text-xs text-slate-500 mt-1">Receipt #${booking.id}</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 text-xs font-sans">
        <div><span class="text-slate-500 block">Customer Name:</span><strong class="text-slate-900 text-sm">${booking.customerName}</strong><p class="text-slate-600 mt-0.5">${booking.address}</p><p class="text-slate-500">${booking.phone}</p></div>
        <div class="text-right"><span class="text-slate-500 block">Assigned Collector Agent:</span><strong class="text-slate-900 text-sm">${booking.agent.name}</strong><p class="text-emerald-600 text-xs">${booking.agent.badge}</p><p class="text-slate-500 text-xs">${booking.createdAt}</p></div>
      </div>
      <div class="border-t border-b border-slate-200 py-3 space-y-2">
        <div class="flex justify-between text-xs text-slate-500"><span>ITEMIZED SCRAP CATEGORY</span><span>RECORDED STATUS</span></div>
        ${booking.scrapTypes.map(t => `<div class="flex justify-between text-slate-900 font-sans text-xs"><span>${t}</span><span class="text-emerald-600 font-semibold">Verified on Digital Scale</span></div>`).join('')}
      </div>
      <div class="space-y-1.5 text-right font-sans">
        <div class="flex justify-between text-xs sm:text-sm"><span class="text-slate-500">Net Measured Weight:</span><span class="text-slate-900 font-bold">${booking.weightKg} KG</span></div>
        <div class="flex justify-between text-xs sm:text-sm"><span class="text-slate-500">Instant Payout Channel:</span><span class="text-emerald-600 font-mono">${booking.payoutMode}</span></div>
        <div class="flex justify-between text-base sm:text-lg font-black border-t border-slate-200 pt-2"><span class="text-slate-900">Total Amount Paid:</span><span class="text-emerald-600">₹${booking.actualAmount || booking.estimatedAmount}</span></div>
      </div>
      <div class="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl flex items-center justify-between text-xs font-sans">
        <div class="flex items-center gap-2"><i data-lucide="leaf" class="w-4 h-4 text-emerald-600"></i><span class="text-slate-700">Eco-Impact: <strong class="text-slate-900">${booking.co2SavedKg} kg CO2 emission prevented</strong></span></div>
        <span class="text-emerald-700 font-bold">100% Eco-Recycled</span>
      </div>
    </div>
  `;
  openModal('receipt-modal');
  lucide.createIcons();
}

function viewLiveTracking(bookingId) {
  const booking = window.scrapo.bookings.find(b => b.id === bookingId);
  if (!booking) return;
  const container = document.getElementById('tracking-modal-content');
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-5">
      <div class="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div><span class="text-xs text-slate-500 font-medium">Pickup Request</span><h4 class="text-lg font-black text-slate-900">${booking.id}</h4></div>
        <div class="text-right"><span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200"><span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>${booking.status}</span></div>
      </div>
      <div class="relative h-44 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center">
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1.5px,transparent_1.5px)] [background-size:18px_18px]"></div>
        <div class="absolute w-28 h-28 rounded-full bg-emerald-500/10 animate-ping"></div>
        <div class="relative z-10 flex flex-col items-center text-center p-3">
          <div class="w-12 h-12 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 shadow-xl"><i data-lucide="truck" class="w-6 h-6 animate-bounce"></i></div>
          <span class="text-sm font-bold text-white mt-2">Verified Agent En Route</span>
          <span class="text-xs text-emerald-400 font-semibold">${booking.agent.eta}</span>
          <span class="text-[11px] text-slate-300 mt-0.5">Live Sector: ${booking.agent.currentLocation}</span>
        </div>
      </div>
      <div class="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
        <div class="flex items-center gap-3">
          <img src="${booking.agent.photo}" class="w-12 h-12 rounded-full object-cover border-2 border-emerald-500" />
          <div><h5 class="text-sm font-bold text-slate-900">${booking.agent.name}</h5><p class="text-xs text-emerald-700 font-semibold">${booking.agent.badge} • ${booking.agent.rating}</p><p class="text-[11px] text-slate-500">Equipped with certified digital weighing scale</p></div>
        </div>
        <a href="tel:${booking.agent.phone}" class="px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold flex items-center gap-1.5 text-xs transition-colors shadow-sm"><i data-lucide="phone-call" class="w-4 h-4"></i> Call Agent</a>
      </div>
    </div>
  `;
  openModal('tracking-modal');
  lucide.createIcons();
}

function renderUserDashboard() {
  const container = document.getElementById('user-bookings-list');
  if (!container) return;
  const bookings = window.scrapo.bookings;
  if (bookings.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-slate-400 font-medium">No pickups scheduled yet. Use the scheduler above to book your first doorstep pickup!</div>`;
    return;
  }
  container.innerHTML = bookings.map(b => `
    <div class="glass-panel p-5 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm bg-white">
      <div class="space-y-2">
        <div class="flex items-center gap-3">
          <span class="text-base font-bold text-slate-900">${b.id}</span>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${b.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-blue-50 text-blue-700 border border-blue-200'}">${b.status}</span>
          <span class="text-xs text-slate-500 font-medium">${b.date} • ${b.timeSlot}</span>
        </div>
        <p class="text-sm text-slate-700 font-medium">${b.scrapTypes.join(', ')}</p>
        <div class="flex items-center flex-wrap gap-4 text-xs text-slate-500">
          <span><i data-lucide="map-pin" class="w-3.5 h-3.5 inline mr-1 text-emerald-600"></i>${b.address}</span>
          <span><i data-lucide="wallet" class="w-3.5 h-3.5 inline mr-1 text-emerald-600"></i>${b.payoutMode}</span>
        </div>
      </div>
      <div class="flex items-center gap-3 self-end md:self-center">
        <div class="text-right mr-2">
          <span class="text-[10px] uppercase font-bold text-slate-400 block">${b.status === 'Completed' ? 'Amount Transferred' : 'Estimated Payout'}</span>
          <span class="text-lg font-black text-emerald-600">₹${b.actualAmount || b.estimatedAmount}</span>
        </div>
        ${b.status === 'Completed' ? `
          <button onclick="viewReceipt('${b.id}')" class="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl border border-slate-200 flex items-center gap-1.5 transition-colors shadow-sm"><i data-lucide="file-text" class="w-4 h-4 text-emerald-600"></i> Receipt</button>
        ` : `
          <button onclick="viewLiveTracking('${b.id}')" class="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black rounded-xl flex items-center gap-1.5 transition-colors shadow-md"><i data-lucide="navigation" class="w-4 h-4"></i> Live Tracking</button>
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
    scaleSelect.innerHTML = window.scrapo.rates.map(r => `<option value="${r.id}" data-rate="${r.rate}">${r.name} (₹${r.rate}/${r.unit})</option>`).join('');
    calculateScaleTotal();
  }
  if (!container) return;
  const assigned = window.scrapo.bookings.filter(b => b.status === 'In Progress' || b.status === 'Scheduled');
  if (assigned.length === 0) {
    container.innerHTML = `<div class="p-8 text-center text-slate-400 font-medium">No pending pickups in your queue right now. Great work!</div>`;
    return;
  }
  container.innerHTML = assigned.map(b => `
    <div class="p-5 bg-white rounded-2xl border border-slate-200 space-y-4 shadow-sm">
      <div class="flex items-start justify-between">
        <div><span class="text-xs text-emerald-700 font-bold uppercase tracking-wider">Pickup Request ${b.id}</span><h4 class="text-base font-bold text-slate-900 mt-0.5">${b.customerName}</h4><p class="text-xs text-slate-500">${b.address}</p></div>
        <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">${b.timeSlot}</span>
      </div>
      <div class="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1.5">
        <div class="flex justify-between text-slate-600"><span>Items to collect:</span><span class="text-slate-900 font-medium">${b.scrapTypes.join(', ')}</span></div>
        <div class="flex justify-between text-slate-600"><span>Customer Payout Mode:</span><span class="text-emerald-700 font-mono font-bold">${b.payoutMode}</span></div>
      </div>
      <div class="flex items-center gap-2.5 pt-2 border-t border-slate-100">
        <a href="tel:${b.phone}" class="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5"><i data-lucide="phone" class="w-3.5 h-3.5 text-emerald-600"></i> Call Customer</a>
        <button onclick="promptCollectorComplete('${b.id}')" class="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-sm"><i data-lucide="check" class="w-3.5 h-3.5"></i> Weigh & Pay</button>
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
      <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
        <td class="py-3 px-4 text-xs font-medium text-slate-500">${r.category}</td>
        <td class="py-3 px-4 text-sm font-bold text-slate-900">${r.name}</td>
        <td class="py-3 px-4 text-xs text-slate-400 font-mono">/${r.unit}</td>
        <td class="py-3 px-4">
          <div class="flex items-center gap-1.5">
            <span class="text-xs text-emerald-600 font-bold">₹</span>
            <input type="number" value="${r.rate}" onchange="window.scrapo.updateRate('${r.id}', this.value); showToast('Rate Updated', '${r.name} is now ₹' + this.value + '/${r.unit}');"
              class="w-20 px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 font-mono font-bold focus:border-emerald-500 focus:outline-none" />
          </div>
        </td>
      </tr>
    `).join('');
  }
  if (fleetTable) {
    fleetTable.innerHTML = window.scrapo.bookings.map(b => `
      <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
        <td class="py-3 px-4 text-xs font-mono font-bold text-emerald-600">${b.id}</td>
        <td class="py-3 px-4 text-xs text-slate-800 font-medium">${b.customerName}<br><span class="text-[11px] text-slate-400">${b.city}</span></td>
        <td class="py-3 px-4 text-xs text-slate-600 font-medium">${b.agent.name}</td>
        <td class="py-3 px-4 text-xs text-slate-600 font-mono">${b.weightKg} kg</td>
        <td class="py-3 px-4 text-xs font-black text-slate-900">₹${b.actualAmount || b.estimatedAmount}</td>
        <td class="py-3 px-4">
          <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${b.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-blue-50 text-blue-700 border border-blue-200'}">${b.status}</span>
        </td>
      </tr>
    `).join('');
  }
}

let activeAuthRole = 'user';
function switchAuthRole(role) {
  activeAuthRole = role;
  ['user', 'collector', 'admin'].forEach(r => {
    const tab = document.getElementById(`auth-tab-${r}`);
    const form = document.getElementById(`auth-form-${r}`);
    if (tab) {
      if (r === role) tab.className = "flex-1 py-2.5 text-xs font-bold rounded-xl bg-emerald-600 text-white transition-all shadow-sm";
      else tab.className = "flex-1 py-2.5 text-xs font-medium rounded-xl text-slate-600 hover:text-slate-900 bg-transparent transition-all";
    }
    if (form) {
      if (r === role) form.classList.remove('hidden');
      else form.classList.add('hidden');
    }
  });
}

function quickDemoLogin(role) {
  if (role === 'user') {
    window.scrapo.login({
      id: 'usr-101', name: 'Aarav Sharma', role: 'user', phone: '+91 98765 43210', email: 'aarav.sharma@example.com', address: 'Flat 402, Greenwoods Residency, Sector 45, Gurugram'
    });
    showToast('Welcome back, Aarav!', 'Logged in as Household Customer.', 'success');
    closeModal('auth-modal');
    switchView('user-dashboard');
    if (window.scrapo.pendingBooking) {
      window.scrapo.pendingBooking = false;
      setTimeout(() => openBookingWizard(1), 300);
    }
  } else if (role === 'collector') {
    window.scrapo.login({
      id: 'agent-408', name: 'Ramesh Kumar', role: 'collector', badge: 'Verified Agent #408', phone: '+91 98111 22334', scaleId: 'SCR-901-CALIBRATED'
    });
    showToast('Duty Started!', 'Logged in as Scrap Collector / Partner Agent.', 'success');
    closeModal('auth-modal');
    switchView('collector-dashboard');
  } else if (role === 'admin') {
    window.scrapo.login({
      id: 'admin-01', name: 'Operations Lead', role: 'admin', email: 'ops@scrapo.in'
    });
    showToast('Admin Access Granted', 'SCRAPO Platform Operations & Fleet Control.', 'info');
    closeModal('auth-modal');
    switchView('admin-dashboard');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
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
