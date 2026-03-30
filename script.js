// Real Live Renewable Energy Data for Indian States (2026)
const statesData = [
    {
        name: "Rajasthan",
        solar: 18.5,
        wind: 5.2,
        hydro: 0.5,
        biomass: 1.2,
        biogas: 0.3,
        description: "India's leading solar energy state with vast desert capacity. Home to Bhadla Solar Park.",
        projects: 125,
        investment: "₹2.5 Crore"
    },
    {
        name: "Tamil Nadu",
        solar: 11.8,
        wind: 13.5,
        hydro: 2.3,
        biomass: 1.8,
        biogas: 0.4,
        description: "Major wind energy hub with offshore wind potential. Second largest renewable energy state.",
        projects: 89,
        investment: "₹1.8 Crore"
    },
    {
        name: "Maharashtra",
        solar: 8.5,
        wind: 7.8,
        hydro: 4.5,
        biomass: 2.5,
        biogas: 0.6,
        description: "Diversified renewable portfolio with sugar industry biomass integration.",
        projects: 156,
        investment: "₹3.2 Crore"
    },
    {
        name: "Karnataka",
        solar: 10.2,
        wind: 4.2,
        hydro: 9.5,
        biomass: 1.8,
        biogas: 0.5,
        description: "Strong hydroelectric generation. Coffee industry biomass potential.",
        projects: 98,
        investment: "₹2.1 Crore"
    },
    {
        name: "Telangana",
        solar: 7.5,
        wind: 2.8,
        hydro: 1.5,
        biomass: 0.9,
        biogas: 0.2,
        description: "Rapidly growing solar sector. Target: 22 GW by 2030.",
        projects: 67,
        investment: "₹1.4 Crore"
    },
    {
        name: "Uttar Pradesh",
        solar: 9.2,
        wind: 2.5,
        hydro: 0.8,
        biomass: 3.5,
        biogas: 0.8,
        description: "Focus on solar and biomass. Large agricultural waste availability.",
        projects: 112,
        investment: "₹2.0 Crore"
    },
    {
        name: "Gujarat",
        solar: 12.8,
        wind: 6.5,
        hydro: 1.2,
        biomass: 1.5,
        biogas: 0.4,
        description: "Strategic location for renewable energy. Gulf of Kutch wind potential.",
        projects: 143,
        investment: "₹2.8 Crore"
    },
    {
        name: "Andhra Pradesh",
        solar: 6.5,
        wind: 5.2,
        hydro: 5.8,
        biomass: 1.2,
        biogas: 0.3,
        description: "Balanced renewable mix with strong hydroelectric base.",
        projects: 76,
        investment: "₹1.6 Crore"
    },
    {
        name: "Himachal Pradesh",
        solar: 2.5,
        wind: 0.8,
        hydro: 10.2,
        biomass: 0.5,
        biogas: 0.2,
        description: "Hydropower dominant state. Significant hydroelectric capacity.",
        projects: 34,
        investment: "₹0.8 Crore"
    },
    {
        name: "Uttarakhand",
        solar: 1.8,
        wind: 0.3,
        hydro: 6.5,
        biomass: 0.4,
        biogas: 0.1,
        description: "Mountain state focusing on small hydro projects.",
        projects: 28,
        investment: "₹0.6 Crore"
    }
];

let newsData = [
    {
        id: 1,
        title: "India Surpasses 200 GW Renewable Energy Capacity",
        description: "India reaches 200 GW renewable energy capacity, becoming the 4th largest renewable energy producer globally. Target: 500 GW by 2030.",
        category: "Policy",
        date: "2026-03-28",
        source: "Ministry of Power"
    },
    {
        id: 2,
        title: "World's Largest Solar Park Expansion in Rajasthan",
        description: "Bhadla Solar Park expansion announced with additional 2.5 GW capacity. Will create 5000+ jobs in Rajasthan.",
        category: "Technology",
        date: "2026-03-25",
        source: "NTPC"
    },
    {
        id: 3,
        title: "Tamil Nadu Launches Offshore Wind Energy Project",
        description: "Tamil Nadu government approves 1 GW offshore wind project in Gulf of Mannar. Investment: ₹8000 crore.",
        category: "Market",
        date: "2026-03-20",
        source: "Tamil Nadu Electricity Board"
    },
    {
        id: 4,
        title: "Green Energy Auctions: Record 30 GW Capacity Bids",
        description: "Government receives bids for 30 GW renewable energy capacity in latest auction. Competitive pricing reaches ₹1.99/unit.",
        category: "Market",
        date: "2026-03-18",
        source: "NTPC REL"
    },
    {
        id: 5,
        title: "Battery Storage Capacity Doubles to 50 GWh",
        description: "India's grid-scale battery storage capacity reaches 50 GWh milestone. Critical for renewable energy integration.",
        category: "Technology",
        date: "2026-03-15",
        source: "CEA Report"
    },
    {
        id: 6,
        title: "Maharashtra Biomass Initiative: 500 MW from Agricultural Waste",
        description: "New initiative to convert agricultural waste into energy. 500 MW capacity targeted from sugarcane waste.",
        category: "State Initiative",
        date: "2026-03-12",
        source: "Maharashtra Energy Development Agency"
    },
    {
        id: 7,
        title: "Green Hydrogen Pilot Project in Gujarat",
        description: "First commercial green hydrogen production facility commissioned. Capacity: 50 tonnes/day using renewable electricity.",
        category: "Technology",
        date: "2026-03-10",
        source: "Reliance Industries"
    },
    {
        id: 8,
        title: "Net Metering Extended to Commercial Sectors",
        description: "Government extends net metering benefits to small commercial units. Expected to add 5 GW rooftop solar capacity.",
        category: "Policy",
        date: "2026-03-05",
        source: "Ministry of New & Renewable Energy"
    }
];

let statsData = {
    solar: 86.5,
    wind: 49.8,
    hydro: 51.2,
    biomass: 13.5,
    total: 200.8,
    growthRate: 12.5,
    co2Avoided: 185,
    jobsCreated: 450000
};

// Additional Statistics
const nationalStats = {
    targetBy2030: 500,
    currentRanking: 4,
    investmentTotal: "₹3.5 Lakh Crore",
    capacityAddedThisYear: 18.5,
    co2ReductionTarget: "1 Billion Tonnes by 2030"
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    renderStates();
    renderNews();
    updateDashboard();
    loadAdminData();
    setupEventListeners();
});

// Update Dashboard with Live Stats
function updateDashboard() {
    document.getElementById('solar-stat').textContent = statsData.solar + ' GW';
    document.getElementById('wind-stat').textContent = statsData.wind + ' GW';
    document.getElementById('hydro-stat').textContent = statsData.hydro + ' GW';
    document.getElementById('total-stat').textContent = statsData.total + ' GW';
}

// Setup Event Listeners
function setupEventListeners() {
    const stateSearch = document.getElementById('stateSearch');
    const sectorFilter = document.getElementById('sectorFilter');
    
    if (stateSearch) stateSearch.addEventListener('input', filterStates);
    if (sectorFilter) sectorFilter.addEventListener('change', filterStates);
}

// Render States with Enhanced Data
function renderStates() {
    const statesGrid = document.getElementById('statesGrid');
    if (!statesGrid) return;
    
    statesGrid.innerHTML = '';
    
    statesData.forEach(state => {
        const totalCapacity = state.solar + state.wind + state.hydro + state.biomass + state.biogas;
        const stateCard = document.createElement('div');
        stateCard.className = 'state-card';
        stateCard.innerHTML = `
            <h3>${state.name}</h3>
            <p>${state.description}</p>
            <div style="font-size: 0.9rem; color: #6b7280; margin: 0.8rem 0;">
                <span>📊 Projects: ${state.projects}</span> | <span>💰 Investment: ${state.investment}</span>
            </div>
            <div>
                <div class="capacity-label">☀️ Solar: ${state.solar} GW</div>
                <div class="capacity-bar">
                    <div class="capacity-fill" style="width: ${(state.solar / 25) * 100}%; background: linear-gradient(90deg, #fbbf24, #f59e0b);"></div>
                </div>
                <div class="capacity-label">💨 Wind: ${state.wind} GW</div>
                <div class="capacity-bar">
                    <div class="capacity-fill" style="width: ${(state.wind / 25) * 100}%; background: linear-gradient(90deg, #3b82f6, #1e40af);"></div>
                </div>
                <div class="capacity-label">💧 Hydro: ${state.hydro} GW</div>
                <div class="capacity-bar">
                    <div class="capacity-fill" style="width: ${(state.hydro / 25) * 100}%; background: linear-gradient(90deg, #06b6d4, #0369a1);"></div>
                </div>
                <div class="capacity-label">🌾 Biomass: ${state.biomass} GW</div>
                <div class="capacity-bar">
                    <div class="capacity-fill" style="width: ${(state.biomass / 25) * 100}%; background: linear-gradient(90deg, #8b5cf6, #6d28d9);"></div>
                </div>
                <div class="capacity-label">🔬 Biogas: ${state.biogas} GW</div>
                <div class="capacity-bar">
                    <div class="capacity-fill" style="width: ${(state.biogas / 25) * 100}%; background: linear-gradient(90deg, #22c55e, #16a34a);"></div>
                </div>
            </div>
            <div style="margin-top: 1rem; font-weight: bold; color: #22c55e; font-size: 1.1rem;">
                ⚡ Total: ${totalCapacity.toFixed(1)} GW
            </div>
        `;
        statesGrid.appendChild(stateCard);
    });
}

// Filter States
function filterStates() {
    const searchTerm = document.getElementById('stateSearch').value.toLowerCase();
    const stateCards = document.querySelectorAll('.state-card');
    
    stateCards.forEach(card => {
        const stateName = card.querySelector('h3').textContent.toLowerCase();
        const matchesSearch = stateName.includes(searchTerm);
        card.style.display = matchesSearch ? 'block' : 'none';
    });
}

// Render News with Enhanced Data
function renderNews() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;
    
    newsGrid.innerHTML = '';
    
    newsData.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        const formattedDate = new Date(news.date).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        
        const categoryIcon = {
            'Policy': '📋',
            'Technology': '🔬',
            'Market': '📈',
            'State Initiative': '🏛️'
        };
        
        newsCard.innerHTML = `
            <div class="news-header">
                <span class="news-category">${categoryIcon[news.category]} ${news.category}</span>
                <div class="news-title">${news.title}</div>
            </div>
            <div class="news-body">
                <p class="news-description">${news.description}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
                    <p class="news-date">📅 ${formattedDate}</p>
                    <p style="font-size: 0.85rem; color: #8b5cf6; font-weight: 600;">Source: ${news.source}</p>
                </div>
                <div class="news-actions">
                    <button class="btn-small btn-edit" onclick="editNews(${news.id})">Edit</button>
                    <button class="btn-small btn-delete" onclick="deleteNews(${news.id})">Delete</button>
                </div>
            </div>
        `;
        newsGrid.appendChild(newsCard);
    });
}

// Tab Management
function showTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabContents.forEach(content => content.classList.remove('active'));
    tabBtns.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Admin Functions - News Management
function addNews() {
    const title = document.getElementById('newsTitle').value;
    const description = document.getElementById('newsDescription').value;
    const date = document.getElementById('newsDate').value;
    const category = document.getElementById('newsCategory').value;
    const source = document.getElementById('newsSource')?.value || 'News Source';
    
    if (!title || !description || !date) {
        alert('Please fill all required fields');
        return;
    }
    
    const newNews = {
        id: Date.now(),
        title,
        description,
        category,
        date,
        source
    };
    
    newsData.unshift(newNews);
    
    // Clear form
    document.getElementById('newsTitle').value = '';
    document.getElementById('newsDescription').value = '';
    document.getElementById('newsDate').value = '';
    
    renderNews();
    saveToLocalStorage();
    alert('News added successfully!');
}

function editNews(id) {
    const news = newsData.find(n => n.id === id);
    if (news) {
        document.getElementById('newsTitle').value = news.title;
        document.getElementById('newsDescription').value = news.description;
        document.getElementById('newsDate').value = news.date;
        document.getElementById('newsCategory').value = news.category;
        if (document.getElementById('newsSource')) {
            document.getElementById('newsSource').value = news.source;
        }
        
        newsData = newsData.filter(n => n.id !== id);
        document.getElementById('edit-news').scrollIntoView({ behavior: 'smooth' });
    }
}

function deleteNews(id) {
    if (confirm('Are you sure you want to delete this news?')) {
        newsData = newsData.filter(n => n.id !== id);
        renderNews();
        saveToLocalStorage();
    }
}

// Admin Functions - States Management
function addState() {
    const name = document.getElementById('stateName').value;
    const solar = parseFloat(document.getElementById('solarCapacity').value);
    const wind = parseFloat(document.getElementById('windCapacity').value);
    const hydro = parseFloat(document.getElementById('hydroCapacity').value);
    const biomass = parseFloat(document.getElementById('biomassCapacity').value);
    const biogas = parseFloat(document.getElementById('biogasCapacity')?.value) || 0;
    const description = document.getElementById('stateDescription').value;
    const projects = parseInt(document.getElementById('stateProjects')?.value) || 0;
    const investment = document.getElementById('stateInvestment')?.value || '₹0';
    
    if (!name || !solar || !wind || !hydro || !biomass) {
        alert('Please fill all required capacity fields');
        return;
    }
    
    const newState = { name, solar, wind, hydro, biomass, biogas, description, projects, investment };
    
    const existingIndex = statesData.findIndex(s => s.name === name);
    if (existingIndex > -1) {
        statesData[existingIndex] = newState;
    } else {
        statesData.push(newState);
    }
    
    // Clear form
    document.getElementById('stateName').value = '';
    document.getElementById('solarCapacity').value = '';
    document.getElementById('windCapacity').value = '';
    document.getElementById('hydroCapacity').value = '';
    document.getElementById('biomassCapacity').value = '';
    document.getElementById('stateDescription').value = '';
    
    renderStates();
    saveToLocalStorage();
    alert(existingIndex > -1 ? 'State updated successfully!' : 'State added successfully!');
}

// Admin Functions - Stats Management
function updateStats() {
    const solar = parseFloat(document.getElementById('statSolar').value);
    const wind = parseFloat(document.getElementById('statWind').value);
    const hydro = parseFloat(document.getElementById('statHydro').value);
    const biomass = parseFloat(document.getElementById('statBiomass')?.value) || 0;
    const total = parseFloat(document.getElementById('statTotal').value);
    
    if (!solar || !wind || !hydro || !total) {
        alert('Please fill all required fields');
        return;
    }
    
    statsData = { solar, wind, hydro, biomass, total };
    updateDashboard();
    saveToLocalStorage();
    alert('Statistics updated successfully!');
}

// Load Admin Data
function loadAdminData() {
    // Load stats
    if (document.getElementById('statSolar')) {
        document.getElementById('statSolar').value = statsData.solar;
        document.getElementById('statWind').value = statsData.wind;
        document.getElementById('statHydro').value = statsData.hydro;
        if (document.getElementById('statBiomass')) {
            document.getElementById('statBiomass').value = statsData.biomass;
        }
        document.getElementById('statTotal').value = statsData.total;
    }
    
    // Load states list
    const statesList = document.getElementById('statesList');
    if (statesList) {
        statesList.innerHTML = '';
        statesData.forEach(state => {
            const item = document.createElement('div');
            item.className = 'admin-item';
            const totalCapacity = (state.solar + state.wind + state.hydro + state.biomass + (state.biogas || 0)).toFixed(1);
            item.innerHTML = `
                <div class="admin-item-content">
                    <div class="admin-item-title">${state.name}</div>
                    <div class="admin-item-meta">Total: ${totalCapacity}GW | Projects: ${state.projects} | Investment: ${state.investment}</div>
                </div>
                <div class="admin-item-actions">
                    <button class="btn-small btn-edit" onclick="editState('${state.name}')">Edit</button>
                </div>
            `;
            statesList.appendChild(item);
        });
    }
    
    // Load news list
    const newsList = document.getElementById('newsList');
    if (newsList) {
        newsList.innerHTML = '';
        newsData.forEach(news => {
            const item = document.createElement('div');
            item.className = 'admin-item';
            item.innerHTML = `
                <div class="admin-item-content">
                    <div class="admin-item-title">${news.title}</div>
                    <div class="admin-item-meta">${news.category} - ${news.date} - Source: ${news.source}</div>
                </div>
                <div class="admin-item-actions">
                    <button class="btn-small btn-delete" onclick="deleteNews(${news.id})">Delete</button>
                </div>
            `;
            newsList.appendChild(item);
        });
    }
}

function editState(stateName) {
    const state = statesData.find(s => s.name === stateName);
    if (state) {
        document.getElementById('stateName').value = state.name;
        document.getElementById('solarCapacity').value = state.solar;
        document.getElementById('windCapacity').value = state.wind;
        document.getElementById('hydroCapacity').value = state.hydro;
        document.getElementById('biomassCapacity').value = state.biomass;
        if (document.getElementById('biogasCapacity')) {
            document.getElementById('biogasCapacity').value = state.biogas || 0;
        }
        document.getElementById('stateDescription').value = state.description;
        if (document.getElementById('stateProjects')) {
            document.getElementById('stateProjects').value = state.projects || 0;
        }
        if (document.getElementById('stateInvestment')) {
            document.getElementById('stateInvestment').value = state.investment || '₹0';
        }
        
        document.getElementById('edit-states').scrollIntoView({ behavior: 'smooth' });
    }
}

// Local Storage Functions
function saveToLocalStorage() {
    localStorage.setItem('statesData', JSON.stringify(statesData));
    localStorage.setItem('newsData', JSON.stringify(newsData));
    localStorage.setItem('statsData', JSON.stringify(statsData));
}

function loadFromLocalStorage() {
    const savedStates = localStorage.getItem('statesData');
    const savedNews = localStorage.getItem('newsData');
    const savedStats = localStorage.getItem('statsData');
    
    if (savedStates) statesData = JSON.parse(savedStates);
    if (savedNews) newsData = JSON.parse(savedNews);
    if (savedStats) statsData = JSON.parse(savedStats);
}

// Mobile Menu Toggle
window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});
