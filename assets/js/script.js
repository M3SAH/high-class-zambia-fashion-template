/**
 * LUSSO CHINGOLA - LUXURY BOUTIQUE
 * Modern JavaScript with ES6+ features
 */

// ===================================
// PRODUCT DATABASE
// ===================================
const products = [
    {
        id: 1,
        name: "Italian Navy Bespoke Suit",
        price: 4500,
        category: "Men",
        collection: "Suits",
        image: "assets/images/Italian-Navy-Bespoke-Suit.jpg",
        description: "Hand-tailored in Chingola using imported Italian wool. Deep navy tone suitable for executive meetings or weddings."
    },
    {
        id: 2,
        name: "Charcoal Double-Breasted",
        price: 5200,
        category: "Men",
        collection: "Suits",
        image: "assets/images/Charcoal-Double-Breasted.jpg",
        description: "A timeless classic. Structured shoulders and a slim waist fit for the modern gentleman."
    },
    {
        id: 3,
        name: "Royal Blue Tuxedo",
        price: 5800,
        category: "Men",
        collection: "Suits",
        image: "assets/images/Royal-Blue-Tuxedo.jpg",
        description: "Make a statement at your next gala. Satin lapels and a sharp cut."
    },
    {
        id: 4,
        name: "Emerald Silk Evening Gown",
        price: 3500,
        category: "Women",
        collection: "Dresses",
        image: "assets/images/Emerald-Silk-Evening-Gown.jpg",
        description: "Flowing silk gown in deep emerald green. Perfect for evening receptions."
    },
    {
        id: 5,
        name: "Gold Sequin Cocktail Dress",
        price: 2800,
        category: "Women",
        collection: "Dresses",
        image: "assets/images/Gold-Sequin-Cocktail-Dress.jpg",
        description: "Shimmer all night. Hand-stitched sequins on a comfortable lining."
    },
    {
        id: 6,
        name: "Premium Chitenge Blazer",
        price: 1800,
        category: "Men",
        collection: "Chitenge",
        image: "assets/images/Premium-Chitenge-Blazer.jpg",
        description: "Modern fusion fashion. Structured blazer featuring high-quality Zambian Chitenge accents."
    },
    {
        id: 7,
        name: "Chitenge Mermaid Dress",
        price: 2200,
        category: "Women",
        collection: "Chitenge",
        image: "assets/images/Chitenge-Mermaid-Dress.jpg",
        description: "Traditional meets luxury. A tailored mermaid cut using exclusive wax prints."
    },
    {
        id: 8,
        name: "Executive Chitenge Shirt",
        price: 950,
        category: "Men",
        collection: "Chitenge",
        image: "assets/images/Executive-Chitenge-Shirt.jpg",
        description: "Subtle prints suitable for the office on casual Fridays. 100% cotton."
    },
    {
        id: 9,
        name: "Cashmere Turtleneck",
        price: 1500,
        category: "Men",
        collection: "Casual",
        image: "assets/images/Cashmere-Turtleneck.jpg",
        description: "Soft, warm, and incredibly stylish. The perfect winter layer."
    },
    {
        id: 10,
        name: "Linen Summer Trousers",
        price: 1200,
        category: "Unisex",
        collection: "Casual",
        image: "assets/images/Linen-Summer-Trousers.jpg",
        description: "Breathable beige linen trousers. Ideal for the Zambian heat."
    },
    {
        id: 11,
        name: "Leather Weekend Bag",
        price: 3200,
        category: "Unisex",
        collection: "Casual",
        image: "assets/images/Leather-Weekend-Bag.jpg",
        description: "Genuine leather travel bag. Durable and sophisticated."
    },
    {
        id: 12,
        name: "Designer Sunglasses",
        price: 850,
        category: "Unisex",
        collection: "Casual",
        image: "assets/images/Designer-Sunglasses.jpg",
        description: "UV protection with a gold-rimmed luxury finish."
    },
    {
        id: 13,
        name: "Velvet Loafers",
        price: 1950,
        category: "Men",
        collection: "Suits",
        image: "assets/images/Velvet-Loafers.jpg",
        description: "Black velvet loafers with gold embroidery. The ultimate evening shoe."
    },
    {
        id: 14,
        name: "Silk Scarf",
        price: 650,
        category: "Women",
        collection: "Casual",
        image: "assets/images/Silk-Scarf.jpg",
        description: "100% silk scarf with floral patterns. Adds elegance to any outfit."
    },
    {
        id: 15,
        name: "Tailored Waistcoat",
        price: 1100,
        category: "Men",
        collection: "Suits",
        image: "assets/images/Tailored-Waistcoat.jpg",
        description: "Grey wool waistcoat to complete your three-piece suit."
    }
];

// ===================================
// STATE MANAGEMENT
// ===================================
const state = {
    currentProducts: [...products],
    filters: {
        category: 'all',
        collection: 'all',
        price: 100000
    }
};

// ===================================
// DOM ELEMENTS
// ===================================
const elements = {
    productGrid: document.getElementById('productGrid'),
    modal: document.getElementById('productModal'),
    modalClose: document.querySelector('.modal-close'),
    modalImg: document.getElementById('modalImg'),
    modalCategory: document.getElementById('modalCategory'),
    modalTitle: document.getElementById('modalTitle'),
    modalPrice: document.getElementById('modalPrice'),
    modalDesc: document.getElementById('modalDesc'),
    modalWaLink: document.getElementById('modalWaLink'),
    categoryFilter: document.getElementById('categoryFilter'),
    collectionFilter: document.getElementById('collectionFilter'),
    priceFilter: document.getElementById('priceFilter'),
    vipForm: document.getElementById('vipForm')
};

// ===================================
// UTILITY FUNCTIONS
// ===================================
const formatPrice = (price) => {
    return `ZMW ${price.toLocaleString('en-ZM')}`;
};

const createWhatsAppLink = (product) => {
    const phone = "260960000000";
    const message = `Hello, I am interested in the ${product.name} listed for ${formatPrice(product.price)}. Is it available for viewing in Chingola?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

// ===================================
// RENDER FUNCTIONS
// ===================================
const renderProducts = (productsToRender) => {
    elements.productGrid.innerHTML = '';

    if (productsToRender.length === 0) {
        elements.productGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <p style="font-size: 1.1rem; color: var(--text-light);">
                    No items found matching your criteria.
                </p>
            </div>
        `;
        return;
    }

    const fragment = document.createDocumentFragment();

    productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openModal(product);

        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="card-details">
                <span class="card-cat">${product.collection}</span>
                <h3 class="card-title">${product.name}</h3>
                <p class="card-price">${formatPrice(product.price)}</p>
                <span class="card-btn">View Details</span>
            </div>
        `;

        fragment.appendChild(card);
    });

    elements.productGrid.appendChild(fragment);
};

// ===================================
// FILTER LOGIC
// ===================================
const filterProducts = () => {
    const categoryValue = elements.categoryFilter.value;
    const collectionValue = elements.collectionFilter.value;
    const priceValue = parseInt(elements.priceFilter.value);

    state.filters = {
        category: categoryValue,
        collection: collectionValue,
        price: priceValue
    };

    state.currentProducts = products.filter(product => {
        const matchesCategory = categoryValue === 'all' || 
                               product.category === categoryValue;
        
        const matchesCollection = collectionValue === 'all' || 
                                 product.collection === collectionValue;
        
        const matchesPrice = product.price <= priceValue;

        return matchesCategory && matchesCollection && matchesPrice;
    });

    renderProducts(state.currentProducts);
};

// ===================================
// MODAL FUNCTIONS
// ===================================
const openModal = (product) => {
    elements.modalImg.src = product.image;
    elements.modalImg.alt = product.name;
    elements.modalCategory.textContent = `${product.category} | ${product.collection}`;
    elements.modalTitle.textContent = product.name;
    elements.modalPrice.textContent = formatPrice(product.price);
    elements.modalDesc.textContent = product.description;
    elements.modalWaLink.href = createWhatsAppLink(product);

    elements.modal.classList.add('active');
    elements.modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    elements.modal.classList.remove('active');
    elements.modal.style.display = 'none';
    document.body.style.overflow = '';
};

// ===================================
// FORM HANDLING
// ===================================
const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const name = document.getElementById('clientName').value;
    const phone = document.getElementById('clientPhone').value;
    const type = document.getElementById('visitType').value;

    // In a real application, you would send this data to a server
    alert(`Thank you, ${name}! Your request for a ${type} appointment has been received. We will contact you at ${phone} shortly to confirm.`);
    
    elements.vipForm.reset();
};

// ===================================
// EVENT LISTENERS
// ===================================
const initEventListeners = () => {
    // Filter events
    elements.categoryFilter.addEventListener('change', filterProducts);
    elements.collectionFilter.addEventListener('change', filterProducts);
    elements.priceFilter.addEventListener('change', filterProducts);

    // Modal events
    elements.modalClose.addEventListener('click', closeModal);
    
    elements.modal.addEventListener('click', (e) => {
        if (e.target === elements.modal) {
            closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Form submission
    elements.vipForm.addEventListener('submit', handleFormSubmit);

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
};

// ===================================
// INITIALIZATION
// ===================================
const init = () => {
    renderProducts(products);
    initEventListeners();
};

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===================================
// INTERSECTION OBSERVER (Optional Enhancement)
// ===================================
const observeElements = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe product cards as they load
    const observeProductCards = () => {
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    };

    // Re-observe when products are filtered
    const originalRenderProducts = renderProducts;
    window.renderProducts = (products) => {
        originalRenderProducts(products);
        observeProductCards();
    };

    observeProductCards();
};

// Initialize intersection observer after initial render
setTimeout(observeElements, 100);
