// --- 1. DỮ LIỆU BAN ĐẦU CHUẨN MẪU HỆ THỐNG ---
const DEFAULT_USERS = [
    { id: 1, name: "Tổng Quản Trị Viên", email: "superadmin@legant.vn", password: "123", role: "super_admin", shopId: null, status: "active" },
    { id: 2, name: "Gucci Flagship Store", email: "gucci_admin@shop.vn", password: "123", role: "shop_admin", shopId: "SHOP_GUCCI", status: "active" },
    { id: 3, name: "Nguyễn Văn B (Gucci Mgr)", email: "gucci_mgr@shop.vn", password: "123", role: "manager", shopId: "SHOP_GUCCI", status: "active" },
    { id: 4, name: "Khách Hàng VIP", email: "khachhang@gmail.com", password: "123", role: "customer", shopId: null, status: "active" },
    { id: 5, name: "lanh", email: "cc", password: "123", role: "customer", shopId: null, status: "active" },
    { id: 6, name: "Adidas Flagship Store", email: "adidas_admin@shop.vn", password: "123", role: "shop_admin", shopId: "SHOP_ADIDAS", status: "active" }
];

const DEFAULT_PRODUCTS = [
    {
        id: 101,
        shopId: "SHOP_GUCCI",
        sellerName: "Gucci Flagship Store",
        createdBy: "Gucci Flagship Store (Shop Admin)",
        name: "Áo Măng Tô Cashmere Nam",
        category: "Men",
        price: 18500000,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Đen", "Trắng", "Kem Gold"],
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800",
        description: "Len Cashmere Ý cao cấp, sản xuất độc quyền tại Milan.",
        status: "approved"
    },
    {
        id: 102,
        shopId: "SHOP_GUCCI",
        sellerName: "Gucci Flagship Store",
        createdBy: "Nguyễn Văn B (Gucci Mgr)",
        name: "Váy Dạ Hội Silk Lụa Tơ Tằm",
        category: "Women",
        price: 24000000,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Đỏ Rượu", "Đen Tuyền", "Tím Velvet"],
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
        description: "Lụa tơ tằm nguyên bản, đính kết đá quý thủ công.",
        status: "approved"
    },
    {
        id: 103,
        shopId: "SHOP_GUCCI",
        sellerName: "Gucci Flagship Store",
        createdBy: "Nguyễn Văn B (Gucci Mgr)",
        name: "Váy Dạ Hội Silk Lụa Tơ Tằm",
        category: "Women",
        price: 24000000,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Đỏ Rượu", "Đen Tuyền", "Tím Velvet"],
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
        description: "Lụa tơ tằm nguyên bản, đính kết đá quý thủ công.",
        status: "approved"
    },
      {
        id: 104,
        shopId: "SHOP_GUCCI",
        sellerName: "Gucci Flagship Store",
        createdBy: "Nguyễn Văn B (Gucci Mgr)",
        name: "Váy Dạ Hội Silk Lụa Tơ Tằm",
        category: "Women",
        price: 24000000,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Đỏ Rượu", "Đen Tuyền", "Tím Velvet"],
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
        description: "Lụa tơ tằm nguyên bản, đính kết đá quý thủ công.",
        status: "approved"
    },
      {
        id: 105,
        shopId: "SHOP_GUCCI",
        sellerName: "Gucci Flagship Store",
        createdBy: "Nguyễn Văn B (Gucci Mgr)",
        name: "Váy Dạ Hội Silk Lụa Tơ Tằm",
        category: "Women",
        price: 24000000,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Đỏ Rượu", "Đen Tuyền", "Tím Velvet"],
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
        description: "Lụa tơ tằm nguyên bản, đính kết đá quý thủ công.",
        status: "approved"
    },
    {
        id: 105,
        shopId: "SHOP_GUCCI",
        sellerName: "Gucci Flagship Store",
        createdBy: "Nguyễn Văn B (Gucci Mgr)",
        name: "Váy Dạ Hội Silk Lụa Tơ Tằm",
        category: "Women",
        price: 24000000,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Đỏ Rượu", "Đen Tuyền", "Tím Velvet"],
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
        description: "Lụa tơ tằm nguyên bản, đính kết đá quý thủ công.",
        status: "approved"
    },
    {
        id: 105,
        shopId: "SHOP_GUCCI",
        sellerName: "Gucci Flagship Store",
        createdBy: "Nguyễn Văn B (Gucci Mgr)",
        name: "Váy Dạ Hội Silk Lụa Tơ Tằm",
        category: "Women",
        price: 24000000,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Đỏ Rượu", "Đen Tuyền", "Tím Velvet"],
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
        description: "Lụa tơ tằm nguyên bản, đính kết đá quý thủ công.",
        status: "approved"
    },
    {
        id: 105,
        shopId: "SHOP_GUCCI",
        sellerName: "Gucci Flagship Store",
        createdBy: "Nguyễn Văn B (Gucci Mgr)",
        name: "Váy Dạ Hội Silk Lụa Tơ Tằm",
        category: "Women",
        price: 24000000,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Đỏ Rượu", "Đen Tuyền", "Tím Velvet"],
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
        description: "Lụa tơ tằm nguyên bản, đính kết đá quý thủ công.",
        status: "approved"
    },
    {
        id: 105,
        shopId: "SHOP_GUCCI",
        sellerName: "Gucci Flagship Store",
        createdBy: "Nguyễn Văn B (Gucci Mgr)",
        name: "Váy Dạ Hội Silk Lụa Tơ Tằm",
        category: "Women",
        price: 24000000,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Đỏ Rượu", "Đen Tuyền", "Tím Velvet"],
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
        description: "Lụa tơ tằm nguyên bản, đính kết đá quý thủ công.",
        status: "approved"
    },
    {
        id: 105,
        shopId: "SHOP_GUCCI",
        sellerName: "Gucci Flagship Store",
        createdBy: "Nguyễn Văn B (Gucci Mgr)",
        name: "Váy Dạ Hội Silk Lụa Tơ Tằm",
        category: "Women",
        price: 24000000,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Đỏ Rượu", "Đen Tuyền", "Tím Velvet"],
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
        description: "Lụa tơ tằm nguyên bản, đính kết đá quý thủ công.",
        status: "approved"
    },
    {
        id: 105,
        shopId: "SHOP_GUCCI",
        sellerName: "Gucci Flagship Store",
        createdBy: "Nguyễn Văn B (Gucci Mgr)",
        name: "Váy Dạ Hội Silk Lụa Tơ Tằm",
        category: "Women",
        price: 24000000,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Đỏ Rượu", "Đen Tuyền", "Tím Velvet"],
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
        description: "Lụa tơ tằm nguyên bản, đính kết đá quý thủ công.",
        status: "approved"
    },
    {
        id: 105,
        shopId: "SHOP_GUCCI",
        sellerName: "Gucci Flagship Store",
        createdBy: "Nguyễn Văn B (Gucci Mgr)",
        name: "Váy Dạ Hội Silk Lụa Tơ Tằm",
        category: "Women",
        price: 24000000,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Đỏ Rượu", "Đen Tuyền", "Tím Velvet"],
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
        description: "Lụa tơ tằm nguyên bản, đính kết đá quý thủ công.",
        status: "approved"
    },
    {
        id: 105,
        shopId: "SHOP_GUCCI",
        sellerName: "Gucci Flagship Store",
        createdBy: "Nguyễn Văn B (Gucci Mgr)",
        name: "Váy Dạ Hội Silk Lụa Tơ Tằm",
        category: "Women",
        price: 24000000,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Đỏ Rượu", "Đen Tuyền", "Tím Velvet"],
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
        description: "Lụa tơ tằm nguyên bản, đính kết đá quý thủ công.",
        status: "approved"
    },
    {
        id: 105,
        shopId: "SHOP_GUCCI",
        sellerName: "Gucci Flagship Store",
        createdBy: "Nguyễn Văn B (Gucci Mgr)",
        name: "Váy Dạ Hội Silk Lụa Tơ Tằm",
        category: "Women",
        price: 24000000,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Đỏ Rượu", "Đen Tuyền", "Tím Velvet"],
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
        description: "Lụa tơ tằm nguyên bản, đính kết đá quý thủ công.",
        status: "approved"
    },

];

const DEFAULT_ORDERS = [
    {
        orderId: "ORD_6224",
        customerId: 5,
        customerName: "lanh",
        shopId: "SHOP_GUCCI",
        items: [{ id: 101, name: "Áo Măng Tô Cashmere Nam", price: 18500000, quantity: 1, selectedSize: "L", selectedColor: "Trắng" }],
        totalPrice: 18500000,
        status: "Pending",
        cancelReason: "",
        date: "2026-11-05 00:52"
    }
];

const SYSTEM_COMMISSION_RATE = 0.05;

// --- 2. CƠ CHẾ NẠP VÀ LƯU LOCALSTORAGE ĐỒNG BỘ CHUẨN XÁC ---
function getStorage(key, fallback) {
    const raw = localStorage.getItem(key);
    if (!raw) {
        localStorage.setItem(key, JSON.stringify(fallback));
        return fallback;
    }
    try {
        return JSON.parse(raw);
    } catch (e) {
        localStorage.setItem(key, JSON.stringify(fallback));
        return fallback;
    }
}

let users = getStorage('legant_users', DEFAULT_USERS);
let products = getStorage('legant_products', DEFAULT_PRODUCTS);
let orders = getStorage('legant_orders', DEFAULT_ORDERS);
let currentUser = JSON.parse(localStorage.getItem('legant_current_user')) || null;
let currentCategory = 'all';

let tempSelectedSize = null;
let tempSelectedColor = null;

function getCartStorageKey() {
    return currentUser ? `legant_cart_user_${currentUser.id}` : 'legant_cart_guest';
}

function loadUserCart() {
    return JSON.parse(localStorage.getItem(getCartStorageKey())) || [];
}

let cart = loadUserCart();

function reloadLatestData() {
    users = getStorage('legant_users', DEFAULT_USERS);
    products = getStorage('legant_products', DEFAULT_PRODUCTS);
    orders = getStorage('legant_orders', DEFAULT_ORDERS);
}

function saveData() {
    localStorage.setItem('legant_users', JSON.stringify(users));
    localStorage.setItem('legant_products', JSON.stringify(products));
    localStorage.setItem('legant_orders', JSON.stringify(orders));
    if (currentUser) {
        localStorage.setItem('legant_current_user', JSON.stringify(currentUser));
    } else {
        localStorage.removeItem('legant_current_user');
    }
    localStorage.setItem(getCartStorageKey(), JSON.stringify(cart));
}

function resetSystemData() {
    localStorage.clear();
    localStorage.setItem('legant_users', JSON.stringify(DEFAULT_USERS));
    localStorage.setItem('legant_products', JSON.stringify(DEFAULT_PRODUCTS));
    localStorage.setItem('legant_orders', JSON.stringify(DEFAULT_ORDERS));
    localStorage.removeItem('legant_current_user');
    alert("Đã khôi phục dữ liệu hệ thống!");
    location.reload();
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount || 0);
}

function calculateShopWallet(shopId) {
    reloadLatestData();
    if (!shopId) return { totalGross: 0, totalCommission: 0, netBalance: 0 };
    const targetShop = String(shopId).trim().toLowerCase();
    
    // Chỉ tính doanh thu khi đơn ĐÃ GIAO và ĐÃ ĐƯỢC SUPER ADMIN GIẢI NGÂN (isDisbursed === true)
    const completedOrders = orders.filter(o => 
        String(o.shopId).trim().toLowerCase() === targetShop && 
        o.status === 'Completed' && 
        o.isDisbursed === true
    );

    let totalGross = 0, totalCommission = 0, netBalance = 0;
    completedOrders.forEach(o => {
        totalGross += o.totalPrice;
        const comm = o.totalPrice * SYSTEM_COMMISSION_RATE;
        totalCommission += comm;
        netBalance += (o.totalPrice - comm);
    });
    return { totalGross, totalCommission, netBalance };
}

const Permissions = {
    isSuperAdmin: (user) => user && user.role === 'super_admin',
    isShopAdmin: (user) => user && user.role === 'shop_admin',
    isManager: (user) => user && user.role === 'manager',
    isCustomer: (user) => user && user.role === 'customer',
    canAddProduct: (user) => user && (user.role === 'shop_admin' || user.role === 'manager'),
    canDeleteProduct: (user, product) => {
        if (!user) return false;
        if (user.role === 'super_admin') return true;
        if (user.role === 'shop_admin' && String(user.shopId).trim().toLowerCase() === String(product.shopId).trim().toLowerCase()) return true;
        return false;
    }
};

function renderUserNav() {
    const navZone = document.getElementById('user-nav-zone');
    if (!navZone) return;
    if (currentUser) {
        const orderBtn = currentUser.role === 'customer' 
            ? `<button class="btn-outline" style="margin-right: 8px; border-color: var(--accent-color); color: var(--accent-color);" onclick="openCustomerOrdersModal()">Đơn Hàng Của Tôi</button>`
            : '';

        navZone.innerHTML = `
            <span style="font-size:0.85rem; margin-right: 8px;">Xin chào, <b>${currentUser.name}</b></span>
            ${orderBtn}
            <button class="btn-outline" onclick="logout()">Đăng Xuất</button>
        `;
    } else {
        navZone.innerHTML = `
            <button class="btn-outline" onclick="openAuthModal('login')">Đăng Nhập</button>
            <button class="btn-primary" onclick="openAuthModal('register')">Đăng Ký</button>
        `;
    }
}

// --- 3. ĐIỀU HƯỚNG BẢNG ĐIỀU KHIỂN & TỰ ĐỘNG ẨN TRANG MUA SẮM ---
function renderDashboard() {
    reloadLatestData();

    const dbSection = document.getElementById('dashboard-section');
    const adminControls = document.getElementById('admin-controls');
    const sellerControls = document.getElementById('seller-controls');
    const roleBadge = document.getElementById('user-role-badge');
    const dbTitle = document.getElementById('dashboard-title');
    const btnCreateManager = document.getElementById('btn-create-manager');
    const managerZone = document.getElementById('manager-management-zone');

    const productsSection = document.getElementById('products');
    const heroSection = document.querySelector('.hero');

    if (!currentUser || currentUser.role === 'customer') {
        if (dbSection) dbSection.style.display = 'none';
        if (productsSection) productsSection.style.display = 'block';
        if (heroSection) heroSection.style.display = 'block';
        return;
    }

    if (productsSection) productsSection.style.display = 'none';
    if (heroSection) heroSection.style.display = 'none';

    if (dbSection) dbSection.style.display = 'block';
    if (roleBadge) roleBadge.textContent = currentUser.role.toUpperCase();

    if (currentUser.role === 'super_admin') {
        if (dbTitle) dbTitle.textContent = "Bảng Điều Khiển Quản Trị Viên (Super Admin)";
        if (adminControls) adminControls.style.display = 'block';
        if (sellerControls) sellerControls.style.display = 'none';
        renderSuperAdminPanel();
    } else if (currentUser.role === 'shop_admin' || currentUser.role === 'manager') {
        if (dbTitle) dbTitle.textContent = `Bảng Điều Khiển Gian Hàng [${currentUser.shopId}]`;
        if (adminControls) adminControls.style.display = 'none';
        if (sellerControls) sellerControls.style.display = 'block';

        if (currentUser.role === 'shop_admin') {
            if (btnCreateManager) btnCreateManager.style.display = 'inline-block';
            if (managerZone) managerZone.style.display = 'block';
            renderShopManagers();
        } else {
            if (btnCreateManager) btnCreateManager.style.display = 'none';
            if (managerZone) managerZone.style.display = 'none';
        }

        renderShopOrders();
        renderShopProducts();
    }
}

// --- 4. CÁC HÀM XỬ LÝ MODAL DUYỆT SẢN PHẨM VÀ CHI TIẾT SHOP ---
function openPendingProductsModal() {
    renderPendingProductsTable();
    const modal = document.getElementById('pending-products-modal');
    if (modal) {
        modal.classList.add('show');
        modal.style.display = 'flex';
    }
}

function closePendingProductsModal() {
    const modal = document.getElementById('pending-products-modal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
    }
}

function renderPendingProductsTable() {
    reloadLatestData();
    const pendingTbody = document.getElementById('admin-pending-products-list');
    if (!pendingTbody) return;
    
    pendingTbody.innerHTML = '';
    const pendingProducts = products.filter(p => p.status === 'pending');

    if (pendingProducts.length === 0) {
        pendingTbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#888;">Không có sản phẩm nào chờ duyệt.</td></tr>`;
    } else {
        pendingProducts.forEach(p => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><img src="${p.image}" width="40" height="50" style="object-fit:cover;"></td>
                <td><strong>${p.name}</strong></td>
                <td>${p.sellerName} [${p.shopId}]</td>
                <td>${formatCurrency(p.price)}</td>
                <td><span class="badge" style="background:#f0ad4e;">Chờ Duyệt</span></td>
                <td>
                    <button class="btn-primary" style="padding:4px 8px; font-size:0.75rem; background:#5cb85c; margin-right:5px;" onclick="approveProduct(${p.id})">Phê Duyệt</button>
                    <button class="btn-danger" style="padding:4px 8px; font-size:0.75rem;" onclick="rejectProduct(${p.id})">Từ Chối</button>
                </td>
            `;
            pendingTbody.appendChild(tr);
        });
    }
}

function approveProduct(prodId) {
    reloadLatestData();
    const p = products.find(prod => prod.id === prodId);
    if (p) {
        p.status = 'approved';
        saveData();
        renderDashboard();
        renderPendingProductsTable();
        alert(`Đã phê duyệt sản phẩm "${p.name}"!`);
    }
}

function rejectProduct(prodId) {
    reloadLatestData();
    const p = products.find(prod => prod.id === prodId);
    if (p) {
        p.status = 'rejected';
        saveData();
        renderDashboard();
        renderPendingProductsTable();
        alert(`Đã từ chối sản phẩm "${p.name}".`);
    }
}

function viewShopProducts(shopId, shopName) {
    reloadLatestData();
    const targetShop = String(shopId).trim().toLowerCase();
    const shopProds = products.filter(p => String(p.shopId).trim().toLowerCase() === targetShop);
    
    const titleEl = document.getElementById('modal-shop-title');
    if (titleEl) titleEl.textContent = `Sản Phẩm Của Shop: ${shopName} [${shopId}]`;

    const tbody = document.getElementById('shop-products-list');
    if (tbody) {
        tbody.innerHTML = '';
        if (shopProds.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#888;">Shop này chưa có sản phẩm nào.</td></tr>`;
        } else {
            shopProds.forEach(p => {
                let statusBadge = '<span class="badge" style="background:#5cb85c;">Đã Duyệt</span>';
                if (p.status === 'pending') statusBadge = '<span class="badge" style="background:#f0ad4e;">Chờ Duyệt</span>';
                else if (p.status === 'rejected') statusBadge = '<span class="badge" style="background:#d9534f;">Bị Từ Chối</span>';

                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><img src="${p.image}" width="40" height="50" style="object-fit:cover;"></td>
                    <td><strong>${p.name}</strong></td>
                    <td>${p.category}</td>
                    <td>${formatCurrency(p.price)}</td>
                    <td>${statusBadge}</td>
                    <td>
                        <button class="btn-danger" style="padding:4px 8px; font-size:0.75rem;" onclick="deleteProduct(${p.id}); viewShopProducts('${shopId}', '${shopName}');">Xóa Khỏi Sàn</button>
                    </td>
                `;
                tbody.appendChild(tr);
            });
        }
    }

    const modal = document.getElementById('shop-products-modal');
    if (modal) {
        modal.classList.add('show');
        modal.style.display = 'flex';
    }
}

function closeShopProductsModal() {
    const modal = document.getElementById('shop-products-modal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
    }
}

function toggleBanShop(shopId, newStatus) {
    reloadLatestData();
    if (confirm(`Thay đổi trạng thái Shop [${shopId}] thành ${newStatus}?`)) {
        users.forEach(u => {
            if (u.shopId && String(u.shopId).trim().toLowerCase() === String(shopId).trim().toLowerCase()) {
                u.status = newStatus;
            }
        });
        saveData();
        renderDashboard();
    }
}

// --- 5. SUPER ADMIN PANEL ---
function renderSuperAdminPanel() {
    reloadLatestData();
    document.getElementById('stat-users').textContent = users.length;
    document.getElementById('stat-shops').textContent = users.filter(u => u.role === 'shop_admin').length;
    
    const pendingCount = products.filter(p => p.status === 'pending').length;
    document.getElementById('stat-pending-prods').textContent = pendingCount;

    // Chỉ tính tổng doanh thu sàn từ các đơn ĐÃ ĐƯỢC GIẢI NGÂN
    const disbursedOrders = orders.filter(o => o.status === 'Completed' && o.isDisbursed === true);
    const totalGMV = disbursedOrders.reduce((sum, o) => sum + o.totalPrice, 0);
    const totalCommission = totalGMV * SYSTEM_COMMISSION_RATE;

    document.getElementById('stat-total-gmv').textContent = formatCurrency(totalGMV);
    document.getElementById('stat-total-commission').textContent = formatCurrency(totalCommission);

    // 1. Báo cáo doanh thu theo shop
    const revenueTbody = document.getElementById('admin-revenue-report-list');
    if (revenueTbody) {
        revenueTbody.innerHTML = '';
        const shopAdmins = users.filter(u => u.role === 'shop_admin');
        if (shopAdmins.length === 0) {
            revenueTbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#888;">Chưa có gian hàng nào.</td></tr>`;
        } else {
            shopAdmins.forEach(shopUser => {
                const wallet = calculateShopWallet(shopUser.shopId);
                const disbursedCount = orders.filter(o => o.shopId && String(o.shopId).trim().toLowerCase() === String(shopUser.shopId).trim().toLowerCase() && o.status === 'Completed' && o.isDisbursed === true).length;

                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><code>${shopUser.shopId}</code></td>
                    <td><strong>${shopUser.name}</strong></td>
                    <td><span class="badge" style="background:#0275d8;">${disbursedCount} đơn giải ngân</span></td>
                    <td>${formatCurrency(wallet.totalGross)}</td>
                    <td style="color:#d32f2f; font-weight:bold;">${formatCurrency(wallet.totalCommission)}</td>
                    <td style="color:#2e7d32; font-weight:bold;">${formatCurrency(wallet.netBalance)}</td>
                `;
                revenueTbody.appendChild(tr);
            });
        }
    }

    // 2. Danh sách người dùng
    const userTbody = document.getElementById('admin-user-list');
    if (userTbody) {
        userTbody.innerHTML = '';
        users.forEach(u => {
            const tr = document.createElement('tr');
            const isShop = u.role === 'shop_admin';
            let banBtn = isShop 
                ? (u.status === 'banned' 
                    ? `<button class="btn-primary" style="padding:4px 8px; font-size:0.75rem; background:#5cb85c; margin-right:5px;" onclick="toggleBanShop('${u.shopId}', 'active')">Mở Khóa Shop</button>`
                    : `<button class="btn-danger" style="padding:4px 8px; font-size:0.75rem; margin-right:5px;" onclick="toggleBanShop('${u.shopId}', 'banned')">Khóa Shop (Ban)</button>`)
                : '';

            const viewProductsBtn = (u.role === 'shop_admin' || u.role === 'manager') && u.shopId
                ? `<button class="btn-primary" style="padding:4px 8px; font-size:0.75rem; margin-right:5px; background-color:#c5a059;" onclick="viewShopProducts('${u.shopId}', '${u.name}')">Chi Tiết SP Shop</button>`
                : '';

            const deleteBtn = u.role !== 'super_admin' ? `<button class="btn-danger" style="padding:4px 8px; font-size:0.75rem;" onclick="deleteUser(${u.id})">Xóa Account</button>` : 'Root';

            tr.innerHTML = `
                <td>${u.id}</td>
                <td><strong>${u.name}</strong></td>
                <td>${u.email}</td>
                <td><span class="badge" style="background:${getRoleColor(u.role)}">${u.role.toUpperCase()}</span></td>
                <td>${u.shopId || 'N/A'}</td>
                <td>${isShop ? (u.status === 'banned' ? `<span class="badge" style="background:#d9534f;">Bị Khóa</span>` : `<span class="badge" style="background:#5cb85c;">Hoạt Động</span>`) : 'N/A'}</td>
                <td>${banBtn}${viewProductsBtn}${deleteBtn}</td>
            `;
            userTbody.appendChild(tr);
        });
    }

    // 3. Danh sách đơn toàn sàn — SUPER ADMIN DUYỆT GIẢI NGÂN TẠI ĐÂY
    const allOrdersTbody = document.getElementById('admin-all-orders-list');
    if (allOrdersTbody) {
        allOrdersTbody.innerHTML = '';
        if (orders.length === 0) {
            allOrdersTbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#888;">Chưa có đơn hàng nào trên hệ thống.</td></tr>`;
        } else {
            orders.forEach(o => {
                const itemNames = o.items.map(i => `${i.name} (x${i.quantity})`).join(', ');
                
                let disburseAction = '<span style="color:gray; font-size:0.8rem;">Chưa đủ điều kiện</span>';
                if (o.status === 'Completed') {
                    if (o.isDisbursed) {
                        disburseAction = '<span class="badge" style="background:#5cb85c;">✓ Đã Giải Ngân</span>';
                    } else {
                        disburseAction = `<button class="btn-primary" style="padding:4px 8px; font-size:0.75rem; background:#2e7d32;" onclick="disburseOrder('${o.orderId}')">💰 Duyệt Giải Ngân</button>`;
                    }
                }

                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><strong>${o.orderId}</strong></td>
                    <td><code>${o.shopId}</code></td>
                    <td>${o.customerName}</td>
                    <td style="font-size:0.85rem;">${itemNames}</td>
                    <td>${formatCurrency(o.totalPrice)}</td>
                    <td><span class="badge" style="background:${getStatusColor(o.status)}">${getStatusText(o.status)}</span></td>
                    <td>${disburseAction}</td>
                `;
                allOrdersTbody.appendChild(tr);
            });
        }
    }
}

// HÀM XÁC NHẬN GIẢI NGÂN TIỀN VỀ VÍ SHOP
function disburseOrder(orderId) {
    reloadLatestData();
    const order = orders.find(o => o.orderId === orderId);
    if (order && order.status === 'Completed') {
        const netAmount = order.totalPrice * (1 - SYSTEM_COMMISSION_RATE);
        const commission = order.totalPrice * SYSTEM_COMMISSION_RATE;

        if (confirm(`Xác nhận giải đơn hàng ${orderId}?\n- Tổng đơn: ${formatCurrency(order.totalPrice)}\n- Phí sàn (5%): ${formatCurrency(commission)}\n- Chuyển về Ví Shop (95%): ${formatCurrency(netAmount)}`)) {
            order.isDisbursed = true;
            saveData();
            renderDashboard();
            alert(`Đã giải ngân thành công đơn hàng ${orderId}! Tiền đã được cộng vào Ví Khả Dụng của Shop.`);
        }
    }
}

// --- 6. SỬA TRIỆT ĐỂ: HIỂN THỊ ĐƠN HÀNG THUỘC SHOP CHO SHOP ADMIN & MANAGER ---
function renderShopOrders() {
    reloadLatestData();
    const tbody = document.getElementById('shop-orders-list');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (!currentUser || !currentUser.shopId) return;

    const targetShopId = String(currentUser.shopId).trim().toLowerCase();
    const myShopOrders = orders.filter(o => o.shopId && String(o.shopId).trim().toLowerCase() === targetShopId);

    const wallet = calculateShopWallet(currentUser.shopId);
    const walletInfoEl = document.getElementById('shop-wallet-info');
    if (walletInfoEl) {
        walletInfoEl.innerHTML = `
            <div class="stat-box" style="background:#e8f5e9; border:1px solid #4caf50;">
                Ví Số Dư Khả Dụng (Đã Trừ 5% Phí Sàn): <strong style="color:#2e7d32; font-size:1.1rem;">${formatCurrency(wallet.netBalance)}</strong>
            </div>
            <div class="stat-box">
                Tổng Doanh Thu Đã Giải Ngân: <strong>${formatCurrency(wallet.totalGross)}</strong>
            </div>
            <div class="stat-box">
                Tổng Phí Sàn Đã Thu (5%): <strong style="color:#d32f2f;">${formatCurrency(wallet.totalCommission)}</strong>
            </div>
        `;
    }

    if (myShopOrders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#888;">Chưa có đơn hàng nào.</td></tr>`;
        return;
    }

    myShopOrders.forEach(o => {
        const itemNames = o.items.map(i => `<b>${i.name}</b><br><small style="color:#555;">[Size: ${i.selectedSize}, Màu: ${i.selectedColor}] x${i.quantity}</small>`).join('<br>');
        
        let statusDisplay = `<span class="badge" style="background:${getStatusColor(o.status)}">${getStatusText(o.status)}</span>`;
        if (o.status === 'Completed') {
            statusDisplay += o.isDisbursed 
                ? `<br><small style="color:green; font-weight:bold;">✓ Đã được Sàn giải ngân</small>`
                : `<br><small style="color:#f0ad4e; font-weight:bold;">⏳ Chờ Sàn đối soát giải ngân</small>`;
        } else if (o.status === 'Cancelled') {
            statusDisplay = `<span class="badge" style="background:#d9534f;">ĐÃ HỦY ĐƠN</span><br><small style="color:red;">Lý do: ${o.cancelReason || 'Khách hủy'}</small>`;
        }

        const actionSelect = o.status === 'Cancelled'
            ? `<span style="color:gray; font-size:0.8rem;">Đơn đã hủy</span>`
            : `
                <select onchange="updateOrderStatus('${o.orderId}', this.value)" style="padding:4px 8px; font-size:0.8rem;">
                    <option value="Pending" ${o.status === 'Pending' ? 'selected' : ''}>Chờ Xử Lý (Tiền Tạm Giữ Sàn)</option>
                    <option value="Shipping" ${o.status === 'Shipping' ? 'selected' : ''}>Đang Giao Hàng</option>
                    <option value="Completed" ${o.status === 'Completed' ? 'selected' : ''}>Đã Giao Thành Công (Báo Sàn Giải Ngân)</option>
                </select>
            `;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${o.orderId}</strong></td>
            <td>${o.customerName}</td>
            <td style="font-size:0.85rem;">${itemNames}</td>
            <td>${formatCurrency(o.totalPrice)}</td>
            <td>${statusDisplay}</td>
            <td>${actionSelect}</td>
        `;
        tbody.appendChild(tr);
    });
}

function updateOrderStatus(orderId, newStatus) {
    reloadLatestData();
    const order = orders.find(o => o.orderId === orderId);
    if (order) {
        order.status = newStatus;
        saveData();
        renderDashboard();
        if (newStatus === 'Completed') {
            alert(`Đã cập nhật đơn ${orderId} thành "Đã Giao Thành Công"! Đơn hàng đang chờ Super Admin (Sàn) đối soát và chuyển tiền về Ví Shop.`);
        } else {
            alert(`Đã đổi trạng thái đơn ${orderId} thành: ${getStatusText(newStatus)}`);
        }
    }
}

function updateOrderStatus(orderId, newStatus) {
    reloadLatestData();
    const order = orders.find(o => o.orderId === orderId);
    if (order) {
        order.status = newStatus;
        saveData();
        renderDashboard();
        if (newStatus === 'Completed') {
            const netAmount = order.totalPrice * (1 - SYSTEM_COMMISSION_RATE);
            alert(`Đơn hàng ${orderId} đã giao thành công! Đã trích 5% phí sàn (${formatCurrency(order.totalPrice * SYSTEM_COMMISSION_RATE)}) và cộng ${formatCurrency(netAmount)} vào Ví Shop.`);
        } else {
            alert(`Đã đổi trạng thái đơn ${orderId} thành: ${getStatusText(newStatus)}`);
        }
    }
}

function renderShopProducts() {
    reloadLatestData();
    const tbody = document.getElementById('seller-product-list');
    if (!tbody) return;
    tbody.innerHTML = '';

    if (!currentUser || !currentUser.shopId) return;

    const targetShopId = String(currentUser.shopId).trim().toLowerCase();
    const myProducts = products.filter(p => p.shopId && String(p.shopId).trim().toLowerCase() === targetShopId);

    if (myProducts.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:#888;">Shop chưa có sản phẩm nào. Hãy bấm "+ Thêm Sản Phẩm Mới".</td></tr>`;
        return;
    }

    myProducts.forEach(p => {
        let statusBadge = '<span class="badge" style="background:#5cb85c;">Đã Duyệt</span>';
        if (p.status === 'pending') {
            statusBadge = '<span class="badge" style="background:#f0ad4e;">Chờ Duyệt (Pending)</span>';
        } else if (p.status === 'rejected') {
            statusBadge = '<span class="badge" style="background:#d9534f;">Bị Từ Chối</span>';
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src="${p.image}" width="50" height="60" style="object-fit:cover;"></td>
            <td><strong>${p.name}</strong></td>
            <td>${p.category}</td>
            <td>${formatCurrency(p.price)}</td>
            <td>${statusBadge}</td>
            <td><small style="color:#555;">${p.createdBy || 'Chủ Shop'}</small></td>
            <td>
                ${Permissions.canDeleteProduct(currentUser, p) 
                    ? `<button class="btn-danger" onclick="deleteProduct(${p.id})">Xóa SP</button>`
                    : `<span style="color:gray; font-size:0.8rem;">Chỉ Xem (Manager)</span>`
                }
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// --- 7. SỬA CHUẨN HOÀN TOÀN TÍNH NĂNG TẠO ĐƠN CHECKOUT DÀNH CHO KHÁCH HÀNG ---
function checkout() {
    reloadLatestData();
    if (!currentUser) {
        alert("Vui lòng đăng nhập tài khoản Khách Hàng để thanh toán!");
        openAuthModal('login');
        return;
    }
    if (currentUser.role !== 'customer') {
        alert("Tài khoản Quản trị/Shop/Manager không thực hiện mua hàng!");
        return;
    }
    if (cart.length === 0) return alert("Giỏ hàng trống!");

    // Trích xuất danh sách shopId có trong giỏ hàng
    const shopsInCart = [...new Set(cart.map(item => item.shopId).filter(Boolean))];

    shopsInCart.forEach(sId => {
        const itemsForShop = cart.filter(item => String(item.shopId).trim().toLowerCase() === String(sId).trim().toLowerCase());
        const shopTotal = itemsForShop.reduce((sum, item) => sum + item.price * item.quantity, 0);

        const newOrder = {
            orderId: `ORD_${Math.floor(1000 + Math.random() * 9000)}`,
            customerId: currentUser.id,
            customerName: currentUser.name,
            shopId: sId, // BẢO ĐẢM GÁN CHÍNH XÁC SHOPID NGUYÊN BẢN
            items: itemsForShop,
            totalPrice: shopTotal,
            status: "Pending",
            cancelReason: "",
            date: new Date().toLocaleString('vi-VN')
        };
        orders.push(newOrder);
    });

    alert("Thanh toán thành công! Đơn hàng đã chuyển sang gian hàng để xử lý.");
    cart = [];
    saveData();
    updateCartUI();
    toggleCart();
    renderDashboard();
}

function handleLogin(e) {
    e.preventDefault();
    reloadLatestData();
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-password').value;

    const user = users.find(u => u.email === email && u.password === pass);
    if (user) {
        if (user.status === 'banned') return alert("Tài khoản hoặc Shop hiện bị Khóa!");

        currentUser = user;
        cart = loadUserCart();
        saveData();
        closeAuthModal();
        renderUserNav();
        renderDashboard();
        renderProducts(products);
        updateCartUI();
    } else {
        alert("Email hoặc mật khẩu không đúng!");
    }
}

function handleRegister(e) {
    e.preventDefault();
    reloadLatestData();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const role = document.getElementById('reg-role').value;

    if (users.find(u => u.email === email)) return alert("Email này đã được đăng ký!");

    const isSeller = role === 'seller';
    const newShopId = isSeller ? `SHOP_${Date.now()}` : null;

    const newUser = { 
        id: Date.now(), 
        name, 
        email, 
        password, 
        role: isSeller ? 'shop_admin' : 'customer',
        shopId: newShopId,
        status: "active"
    };

    users.push(newUser);
    currentUser = newUser;
    cart = loadUserCart();
    saveData();
    closeAuthModal();
    renderUserNav();
    renderDashboard();
    renderProducts(products);
    updateCartUI();
}

function logout() {
    currentUser = null;
    cart = [];
    saveData();
    renderUserNav();
    renderDashboard();
    renderProducts(products);
    updateCartUI();

    const productsSection = document.getElementById('products');
    const heroSection = document.querySelector('.hero');
    if (productsSection) productsSection.style.display = 'block';
    if (heroSection) heroSection.style.display = 'block';
}

function getStatusColor(status) {
    switch(status) {
        case 'Pending': return '#f0ad4e';
        case 'Shipping': return '#0275d8';
        case 'Completed': return '#5cb85c';
        case 'Cancelled': return '#d9534f';
        default: return '#777';
    }
}

function getStatusText(status) {
    switch(status) {
        case 'Pending': return 'Chờ Xử Lý';
        case 'Shipping': return 'Đang Giao Hàng';
        case 'Completed': return 'Đã Giao Thành Công';
        case 'Cancelled': return 'Đã Hủy Đơn';
        default: return status;
    }
}

function getRoleColor(role) {
    switch (role) {
        case 'super_admin': return '#d9534f';
        case 'shop_admin': return '#c5a059';
        case 'manager': return '#0275d8';
        default: return '#5cb85c';
    }
}

function renderProducts(items) {
    const grid = document.getElementById('product-list');
    if (!grid) return;
    grid.innerHTML = '';

    const bannedShopIds = users.filter(u => u.role === 'shop_admin' && u.status === 'banned').map(u => String(u.shopId).trim().toLowerCase());
    
    const visibleProducts = items.filter(p => {
        const isApproved = p.status === 'approved' || !p.status;
        const isShopActive = p.shopId && !bannedShopIds.includes(String(p.shopId).trim().toLowerCase());
        return isApproved && isShopActive;
    });

    if (visibleProducts.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color:#888;">Chưa có sản phẩm nào được hiển thị.</p>`;
        return;
    }

    visibleProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <span class="shop-tag">Shop: ${product.sellerName}</span>
            <img src="${product.image}" alt="${product.name}" onclick="openModal(${product.id})">
            <div class="product-info">
                <h4 onclick="openModal(${product.id})">${product.name}</h4>
                <div class="product-price">${formatCurrency(product.price)}</div>
                ${Permissions.canDeleteProduct(currentUser, product) 
                    ? `<button class="btn-danger" style="width:100%;" onclick="deleteProduct(${product.id})">Xóa SP</button>`
                    : `<button class="btn-add-cart" onclick="addToCart(${product.id})">Xem & Chọn Size/Màu</button>`
                }
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderShopManagers() {
    const tbody = document.getElementById('shop-managers-list');
    if (!tbody) return;
    tbody.innerHTML = '';
    if (!currentUser || !currentUser.shopId) return;

    const targetShop = String(currentUser.shopId).trim().toLowerCase();
    const myManagers = users.filter(u => u.role === 'manager' && u.shopId && String(u.shopId).trim().toLowerCase() === targetShop);

    if (myManagers.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#888;">Chưa có nhân viên Manager nào.</td></tr>`;
        return;
    }

    myManagers.forEach(m => {
        const prodCount = products.filter(p => p.createdBy === `${m.name} (Manager)` || (p.createdBy && p.createdBy.includes(m.name))).length;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${m.id}</td>
            <td><strong>${m.name}</strong></td>
            <td>${m.email}</td>
            <td><code>${m.password}</code></td>
            <td><span class="badge" style="background:#0275d8;">${prodCount} SP</span></td>
            <td>
                <button class="btn-danger" style="padding:4px 8px; font-size:0.75rem;" onclick="deleteUser(${m.id})">Thu Hồi Tài Khoản</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openModal(id) {
    reloadLatestData();
    const product = products.find(p => p.id === id);
    if (!product) return;

    const sizes = (product.sizes && product.sizes.length > 0) ? product.sizes : ["S", "M", "L"];
    const colors = (product.colors && product.colors.length > 0) ? product.colors : ["Đen", "Trắng", "Kem Gold"];

    tempSelectedSize = sizes[0];
    tempSelectedColor = colors[0];

    const sizesHtml = sizes.map((size, index) => 
        `<button type="button" class="variant-btn size-btn ${index === 0 ? 'active' : ''}" onclick="selectVariant('size', '${size}', this)">${size}</button>`
    ).join('');

    const colorsHtml = colors.map((color, index) => 
        `<button type="button" class="variant-btn color-btn ${index === 0 ? 'active' : ''}" onclick="selectVariant('color', '${color}', this)">${color}</button>`
    ).join('');

    document.getElementById('modal-detail').innerHTML = `
        <div style="display:flex; gap:25px; align-items:flex-start;">
            <img src="${product.image}" style="width:45%; height:320px; object-fit:cover; border-radius:4px;">
            <div style="width:55%;">
                <h2 style="font-family:var(--font-serif); font-size:1.6rem; margin-bottom:5px;">${product.name}</h2>
                <p style="color:var(--accent-color); font-weight:bold; font-size:1.2rem; margin-bottom:10px;">${formatCurrency(product.price)}</p>
                <p style="font-size:0.85rem; color:#666; margin-bottom:15px;">Cửa hàng: <b>${product.sellerName}</b></p>
                
                <div style="margin-bottom:15px;">
                    <label style="font-size:0.85rem; font-weight:bold; display:block; margin-bottom:8px;">Chọn Kích Cỡ (Size):</label>
                    <div style="display:flex; gap:8px; flex-wrap:wrap;">${sizesHtml}</div>
                </div>

                <div style="margin-bottom:20px;">
                    <label style="font-size:0.85rem; font-weight:bold; display:block; margin-bottom:8px;">Chọn Màu Sắc:</label>
                    <div style="display:flex; gap:8px; flex-wrap:wrap;">${colorsHtml}</div>
                </div>

                <p style="margin-bottom:20px; font-size:0.85rem; color:#555; line-height:1.4;">${product.description}</p>

                <button class="btn-primary btn-block" onclick="addSelectedVariantToCart(${product.id})">Thêm Vào Giỏ Hàng</button>
            </div>
        </div>
    `;

    document.getElementById('product-modal').classList.add('show');
}

function selectVariant(type, val, btnEl) {
    if (type === 'size') {
        tempSelectedSize = val;
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btnEl.classList.add('active');
    } else if (type === 'color') {
        tempSelectedColor = val;
        document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
        btnEl.classList.add('active');
    }
}

function addSelectedVariantToCart(id) {
    if (!currentUser) {
        alert("Bạn cần đăng nhập tài khoản Khách Hàng!");
        closeModal();
        openAuthModal('login');
        return;
    }

    if (currentUser.role !== 'customer') {
        alert("Tài khoản Quản trị/Shop/Manager không thực hiện chức năng mua hàng!");
        return;
    }

    reloadLatestData();
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.id === id && item.selectedSize === tempSelectedSize && item.selectedColor === tempSelectedColor);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            ...product, // BẢO ĐẢM GIỮ NGUYÊN SHOPID GỐC CỦA SẢN PHẨM
            quantity: 1,
            selectedSize: tempSelectedSize,
            selectedColor: tempSelectedColor
        });
    }

    saveData();
    updateCartUI();
    closeModal();
    toggleCart(true);
}

function addToCart(id) { openModal(id); }

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCountEl = document.getElementById('cart-count');
    const cartTotalEl = document.getElementById('cart-total-price');

    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';
    let totalItems = 0, totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align: center; margin-top: 40px; color: #888;">Giỏ hàng trống.</p>`;
    } else {
        cart.forEach((item, index) => {
            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div style="flex:1;">
                    <h5 style="font-size:0.9rem;">${item.name}</h5>
                    <div style="font-size:0.75rem; color:#666; margin:2px 0;">
                        <span>Size: <b>${item.selectedSize}</b></span> | <span>Màu: <b>${item.selectedColor}</b></span>
                    </div>
                    <small style="color:#777">Bán bởi: ${item.sellerName}</small>
                    <div style="color:var(--accent-color); font-weight:bold; margin:4px 0;">${formatCurrency(item.price)}</div>
                    <div style="display:flex; gap:10px; align-items:center;">
                        <button onclick="changeCartIndexQty(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeCartIndexQty(${index}, 1)">+</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(itemDiv);
        });
    }
    if (cartCountEl) cartCountEl.textContent = totalItems;
    if (cartTotalEl) cartTotalEl.textContent = formatCurrency(totalPrice);
}

function changeCartIndexQty(index, delta) {
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) cart.splice(index, 1);
    }
    saveData();
    updateCartUI();
}

function openCustomerOrdersModal() {
    renderCustomerOrders();
    document.getElementById('customer-orders-modal').classList.add('show');
}
function closeCustomerOrdersModal() {
    document.getElementById('customer-orders-modal').classList.remove('show');
}

function renderCustomerOrders() {
    reloadLatestData();
    const tbody = document.getElementById('customer-orders-list');
    if (!tbody) return;
    tbody.innerHTML = '';

    const myOrders = orders.filter(o => o.customerId === currentUser.id);

    if (myOrders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#888;">Bạn chưa có đơn hàng nào.</td></tr>`;
        return;
    }

    myOrders.forEach(o => {
        const itemNames = o.items.map(i => `${i.name} [Size: ${i.selectedSize}, Màu: ${i.selectedColor}] (x${i.quantity})`).join('<br>');
        const cancelBtn = o.status === 'Pending' 
            ? `<button class="btn-danger" style="padding:4px 8px; font-size:0.75rem;" onclick="openCancelOrderModal('${o.orderId}')">Hủy Đơn</button>`
            : `<span style="color:gray; font-size:0.8rem;">Không thể hủy</span>`;

        const statusDisplay = o.status === 'Cancelled' && o.cancelReason
            ? `<span class="badge" style="background:${getStatusColor(o.status)}">Đã Hủy</span><br><small style="color:red;">Lý do: ${o.cancelReason}</small>`
            : `<span class="badge" style="background:${getStatusColor(o.status)}">${getStatusText(o.status)}</span>`;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${o.orderId}</strong></td>
            <td style="font-size:0.85rem;">${itemNames}</td>
            <td>${formatCurrency(o.totalPrice)}</td>
            <td>${o.date}</td>
            <td>${statusDisplay}</td>
            <td>${cancelBtn}</td>
        `;
        tbody.appendChild(tr);
    });
}

function openCancelOrderModal(orderId) {
    document.getElementById('cancel-order-id').value = orderId;
    document.getElementById('cancel-reason').value = '';
    document.getElementById('cancel-order-modal').classList.add('show');
}
function closeCancelOrderModal() {
    document.getElementById('cancel-order-modal').classList.remove('show');
}

function handleCancelOrderSubmit(e) {
    e.preventDefault();
    const orderId = document.getElementById('cancel-order-id').value;
    const reason = document.getElementById('cancel-reason').value;

    const order = orders.find(o => o.orderId === orderId);
    if (order) {
        order.status = 'Cancelled';
        order.cancelReason = reason;
        saveData();
        closeCancelOrderModal();
        renderCustomerOrders();
        renderDashboard();
        alert(`Đã hủy đơn hàng ${orderId}!`);
    }
}

function toggleCart(forceOpen = false) {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('overlay');
    if (forceOpen) {
        drawer.classList.add('open');
        overlay.classList.add('show');
    } else {
        drawer.classList.toggle('open');
        overlay.classList.toggle('show');
    }
}

function closeModal() { document.getElementById('product-modal').classList.remove('show'); }
function openAuthModal(mode) {
    switchAuthMode(mode);
    document.getElementById('auth-modal').classList.add('show');
}
function closeAuthModal() { document.getElementById('auth-modal').classList.remove('show'); }
function switchAuthMode(mode) {
    document.getElementById('login-form').style.display = mode === 'login' ? 'block' : 'none';
    document.getElementById('register-form').style.display = mode === 'register' ? 'block' : 'none';
}

function openAddManagerModal() { document.getElementById('add-manager-modal').classList.add('show'); }
function closeAddManagerModal() { document.getElementById('add-manager-modal').classList.remove('show'); }

function handleCreateManager(e) {
    e.preventDefault();
    if (!Permissions.isShopAdmin(currentUser)) return alert("Chỉ Chủ Shop mới có quyền tạo nhân viên!");

    const name = document.getElementById('mgr-name').value;
    const email = document.getElementById('mgr-email').value;
    const password = document.getElementById('mgr-password').value;

    reloadLatestData();
    if (users.find(u => u.email === email)) return alert("Email này đã tồn tại!");

    const newManager = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        role: "manager",
        shopId: currentUser.shopId, // GẮN SHOPID CỦA SHOP ADMIN VÀO MANAGER
        status: "active"
    };

    users.push(newManager);
    saveData();
    closeAddManagerModal();
    renderDashboard();
    alert(`Đã cấp thành công tài khoản Manager cho: ${name}`);
}

function openAddProductModal() {
    if (!Permissions.canAddProduct(currentUser)) return alert("Không đủ quyền!");
    document.getElementById('add-product-modal').classList.add('show');
}
function closeAddProductModal() { document.getElementById('add-product-modal').classList.remove('show'); }

function handleSaveProduct(e) {
    e.preventDefault();
    if (!Permissions.canAddProduct(currentUser)) return;

    reloadLatestData();
    const currentShopId = currentUser.shopId;
    const creatorTitle = currentUser.role === 'manager' ? `${currentUser.name} (Manager)` : `${currentUser.name} (Shop Admin)`;
    const rawSizes = document.getElementById('prod-sizes').value;
    const rawColors = document.getElementById('prod-colors').value;

    const newProd = {
        id: Date.now(),
        shopId: currentShopId, // GẮN CHẮC CHẮN SHOPID CHO SẢN PHẨM
        sellerName: currentUser.name,
        createdBy: creatorTitle,
        name: document.getElementById('prod-name').value,
        category: document.getElementById('prod-category').value,
        price: parseFloat(document.getElementById('prod-price').value),
        sizes: rawSizes ? rawSizes.split(',').map(s => s.trim()) : ["S", "M", "L"],
        colors: rawColors ? rawColors.split(',').map(c => c.trim()) : ["Đen", "Trắng"],
        image: document.getElementById('prod-image').value,
        description: document.getElementById('prod-desc').value,
        status: "pending"
    };

    products.push(newProd);
    saveData();
    closeAddProductModal();
    renderDashboard();
    renderProducts(products);
    alert("Thêm sản phẩm thành công! Đã chuyển tới Super Admin chờ duyệt.");
}

function deleteProduct(prodId) {
    reloadLatestData();
    const prod = products.find(p => p.id === prodId);
    if (!prod || !Permissions.canDeleteProduct(currentUser, prod)) return alert("Không có quyền xóa sản phẩm này!");
    if (confirm("Xác nhận xóa sản phẩm này?")) {
        products = products.filter(p => p.id !== prodId);
        saveData();
        renderDashboard();
        renderProducts(products);
    }
}

function deleteUser(userId) {
    reloadLatestData();
    if (confirm("Xác nhận xóa tài khoản này?")) {
        users = users.filter(u => u.id !== userId);
        saveData();
        renderDashboard();
    }
}

function filterCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    if (event) event.target.classList.add('active');
    renderProducts(cat === 'all' ? products : products.filter(p => p.category === cat));
}

function handleSort() {
    const val = document.getElementById('sort-select').value;
    let list = currentCategory === 'all' ? [...products] : products.filter(p => p.category === currentCategory);
    if (val === 'low-high') list.sort((a, b) => a.price - b.price);
    else if (val === 'high-low') list.sort((a, b) => b.price - a.price);
    renderProducts(list);
}

// KHỞI CHẠY LẦN ĐẦU
document.addEventListener('DOMContentLoaded', () => {
    saveData();
    renderUserNav();
    renderDashboard();
    renderProducts(products);
    updateCartUI();
});