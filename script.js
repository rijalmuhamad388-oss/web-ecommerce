const PRODS = [
  {id:1,name:"Velour Cashmere Blazer",cat:"Fashion",price:389,orig:520,disc:25,rating:4.9,rev:284,badge:"hot",img:"https://images.unsplash.com/photo-1594938298603-c8148c4b4470?w=600&auto=format&fit=crop"},
  {id:2,name:"Meridian Automatic Watch",cat:"Watches",price:647,orig:0,disc:0,rating:5.0,rev:156,badge:"new",img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop"},
  {id:3,name:"Milano Leather Tote",cat:"Bags",price:285,orig:380,disc:25,rating:4.8,rev:421,badge:"",img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop"},
  {id:4,name:"Arc Runner Pro Sneakers",cat:"Footwear",price:198,orig:0,disc:0,rating:4.7,rev:892,badge:"hot",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop"},
  {id:5,name:"Noir Essence Parfum",cat:"Beauty",price:124,orig:165,disc:25,rating:4.9,rev:339,badge:"",img:"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&auto=format&fit=crop"},
  {id:6,name:"Celestial Diamond Ring",cat:"Jewelry",price:1240,orig:0,disc:0,rating:5.0,rev:87,badge:"new",img:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop"},
  {id:7,name:"Linen Contrast Shirt",cat:"Fashion",price:145,orig:195,disc:26,rating:4.6,rev:512,badge:"",img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop"},
  {id:8,name:"Aviator Titanium Frames",cat:"Accessories",price:215,orig:0,disc:0,rating:4.8,rev:203,badge:"new",img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop"},
];
const TESTIS = [
  {name:"Sophie Laurent",role:"Fashion Blogger, Paris",rating:5,txt:"LUXE has completely transformed my wardrobe. The quality of their cashmere pieces is absolutely unmatched. I've purchased from high-street luxury brands before, but nothing compares to this.",av:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop"},
  {name:"Marcus Chen",role:"Creative Director, NY",rating:5,txt:"The Meridian Watch arrived in stunning packaging and the craftsmanship is phenomenal. It's become my everyday staple. LUXE's attention to detail is what sets them apart.",av:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop"},
  {name:"Isabella Rossi",role:"Interior Designer, Milan",rating:5,txt:"I was skeptical about online luxury shopping until I discovered LUXE. The Milano Tote is gorgeous — far more beautiful than the photos. Shipping was fast and returns are so easy.",av:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop"},
  {name:"James Wright",role:"Entrepreneur, London",rating:5,txt:"The customer service is phenomenal. I had a question about sizing and got a response within minutes. The Arc Runner Pro sneakers fit perfectly. Will definitely be a repeat customer.",av:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop"},
  {name:"Amara Diallo",role:"Photographer, Lagos",rating:5,txt:"I gifted my partner the Noir Essence Parfum and they absolutely loved it. The scent is complex, long-lasting, and truly luxurious. LUXE never disappoints.",av:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop"},
  {name:"Elena Sorokina",role:"Stylist, Moscow",rating:5,txt:"Every piece from LUXE tells a story of craftsmanship. From the packaging to the product itself, the experience feels premium from start to finish. I recommend LUXE to all my clients.",av:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop"},
];
const FAQS = [
  {q:"What makes LUXE products different from other brands?",a:"Every LUXE product is hand-selected by our team of style curators from over 50 premium international brands. We evaluate each product for craftsmanship, material quality, and timeless design — only the top 5% make it to our collection."},
  {q:"Do you offer free shipping?",a:"Yes! We offer complimentary standard shipping on all orders over $200 worldwide. For orders under $200, shipping rates start at $9.99. We also offer express delivery options at checkout."},
  {q:"What is your return and exchange policy?",a:"We offer a generous 30-day return window for all items in their original condition. Exchanges are free of charge, and refunds are processed within 5–7 business days upon receiving your return."},
  {q:"Are your products authentic and ethically sourced?",a:"Absolutely. LUXE is committed to authenticity and ethical sourcing. All products come with certificates of authenticity where applicable, and we partner only with brands that meet our strict sustainability standards."},
  {q:"How can I track my order?",a:"Once your order ships, you'll receive an email with a tracking number. You can also track your order in real-time through your LUXE account dashboard. Our average delivery time is 3–5 business days."},
  {q:"Do you offer gift wrapping and personalization?",a:"Yes! We offer premium gift wrapping with a handwritten note option at checkout. For select products, we also offer monogramming and personalization services — simply select the option on the product page."},
];
let cart = [];

// LOADER
function initLoader(){
  const bar=document.getElementById('ldBar');
  const logo=document.querySelector('.ld-logo');
  const tag=document.querySelector('.ld-tag');
  let p=0;
  gsap.to(logo,{opacity:1,y:0,duration:.8,delay:.2,ease:'power2.out'});
  gsap.to(tag,{opacity:1,y:0,duration:.8,delay:.5,ease:'power2.out'});
  const iv=setInterval(()=>{
    p+=Math.random()*14;
    if(p>=100){p=100;clearInterval(iv);bar.style.width='100%';
      setTimeout(()=>{gsap.to('#loader',{opacity:0,duration:.8,ease:'power2.inOut',onComplete:()=>{document.getElementById('loader').style.display='none';initAnims()}});},350);}
    bar.style.width=p+'%';
  },110);
}

// NAVBAR SCROLL
window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('scrolled',window.scrollY>50);
});

function toggleMob(){document.getElementById('mobMenu').classList.toggle('open');}
function closeMob(){document.getElementById('mobMenu').classList.remove('open');}

// RENDER PRODUCTS
function renderProds(){
  document.getElementById('prodGrid').innerHTML=PRODS.map((p,i)=>`
    <div class="pc" data-aos="fade-up" data-aos-delay="${i*70}">
      <div class="pc-img-wrap">
        <img src="${p.img}" alt="${p.name}" class="pc-img" loading="lazy">
        ${p.badge?`<span class="pc-badge ${p.badge}">${p.badge==='new'?'NEW':'🔥 HOT'}</span>`:''}
        ${p.disc?`<span class="pc-badge sale">-${p.disc}%</span>`:''}
        <button class="pc-wish" onclick="event.stopPropagation();toggleWish(this)"><i class="far fa-heart"></i></button>
        <div class="pc-ov"><button class="qv-btn" onclick="event.stopPropagation();toast('Quick View — ${p.name}')"><i class="fas fa-eye"></i> Quick View</button></div>
      </div>
      <div class="pc-info">
        <div class="pc-cat">${p.cat}</div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-rating"><span class="stars">${'★'.repeat(Math.floor(p.rating))}</span><span class="rc">${p.rating} (${p.rev})</span></div>
        <div class="pc-price"><span class="pr-cur">$${p.price}</span>${p.orig?`<span class="pr-old">$${p.orig}</span>`:''}</div>
        <button class="atc" onclick="atcBtn(${p.id},this)"><i class="fas fa-bag-shopping"></i> Add to Bag</button>
      </div>
    </div>`).join('');
}

// RENDER BEST SELLERS
function renderBS(){
  const shuffled=[...PRODS].sort(()=>Math.random()-.5).slice(0,6);
  document.getElementById('bsWrap').innerHTML=shuffled.map(p=>`
    <div class="swiper-slide" style="padding:0 .5rem">
      <div class="pc">
        <div class="pc-img-wrap">
          <img src="${p.img}" alt="${p.name}" class="pc-img" loading="lazy">
          ${p.badge?`<span class="pc-badge ${p.badge}">${p.badge==='new'?'NEW':'🔥 HOT'}</span>`:''}
          <button class="pc-wish" onclick="toggleWish(this)" style="opacity:1"><i class="far fa-heart"></i></button>
        </div>
        <div class="pc-info">
          <div class="pc-cat">${p.cat}</div>
          <div class="pc-name">${p.name}</div>
          <div class="pc-rating"><span class="stars">${'★'.repeat(Math.floor(p.rating))}</span><span class="rc">${p.rating} (${p.rev})</span></div>
          <div class="pc-price"><span class="pr-cur">$${p.price}</span>${p.orig?`<span class="pr-old">$${p.orig}</span>`:''}</div>
          <button class="atc" onclick="atcBtn(${p.id},this)"><i class="fas fa-bag-shopping"></i> Add to Bag</button>
        </div>
      </div>
    </div>`).join('');
  new Swiper('.bs-swiper',{slidesPerView:1,spaceBetween:20,pagination:{el:'.bs-swiper .swiper-pagination',clickable:true},navigation:{nextEl:'.bs-swiper .swiper-button-next',prevEl:'.bs-swiper .swiper-button-prev'},breakpoints:{480:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}});
}

// RENDER TESTIMONIALS
function renderTestis(){
  document.getElementById('testiWrap').innerHTML=TESTIS.map(t=>`
    <div class="swiper-slide" style="padding:0 .5rem 1rem;height:auto">
      <div class="testi-card">
        <div class="testi-stars">${'★'.repeat(t.rating)}</div>
        <p class="testi-txt">${t.txt}</p>
        <div class="testi-auth">
          <img src="${t.av}" alt="${t.name}" class="testi-av">
          <div><div class="testi-name">${t.name}</div><div class="testi-role">${t.role}</div></div>
          <i class="fas fa-circle-check testi-chk"></i>
        </div>
      </div>
    </div>`).join('');
  new Swiper('.testi-swiper',{slidesPerView:1,spaceBetween:24,pagination:{el:'.testi-swiper .swiper-pagination',clickable:true},autoplay:{delay:4500,disableOnInteraction:false},breakpoints:{640:{slidesPerView:2},1024:{slidesPerView:3}}});
}

// RENDER FAQ
function renderFAQ(){
  document.getElementById('faqWrap').innerHTML=FAQS.map((f,i)=>`
    <div class="faq-item" id="fi${i}">
      <button class="faq-q" onclick="toggleFAQ(${i})">
        <span class="faq-qt">${f.q}</span>
        <span class="faq-ico"><i class="fas fa-plus"></i></span>
      </button>
      <div class="faq-ans"><p>${f.a}</p></div>
    </div>`).join('');
}

function toggleFAQ(i){
  const item=document.getElementById('fi'+i);
  const was=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el=>el.classList.remove('open'));
  if(!was)item.classList.add('open');
}

// COUNTDOWN
function startCD(){
  const end=new Date();end.setDate(end.getDate()+2);end.setHours(end.getHours()+14);
  setInterval(()=>{
    const d=end-new Date();if(d<=0)return;
    const pad=n=>String(Math.floor(n)).padStart(2,'0');
    document.getElementById('cDays').textContent=pad(d/864e5);
    document.getElementById('cHrs').textContent=pad(d%864e5/36e5);
    document.getElementById('cMin').textContent=pad(d%36e5/6e4);
    document.getElementById('cSec').textContent=pad(d%6e4/1e3);
  },1000);
}

// CART
document.getElementById('cartBtn').addEventListener('click',openCart);
function openCart(){document.getElementById('cartOv').classList.add('open');document.getElementById('cartPanel').classList.add('open');document.body.style.overflow='hidden';}
function closeCart(){document.getElementById('cartOv').classList.remove('open');document.getElementById('cartPanel').classList.remove('open');document.body.style.overflow='';}

function atcBtn(id,btn){
  const p=PRODS.find(x=>x.id===id);if(!p)return;
  const ex=cart.find(x=>x.id===id);ex?ex.qty++:cart.push({...p,qty:1});
  updateCart();toast(`${p.name} added to bag!`);
  if(btn){btn.classList.add('added');btn.innerHTML='<i class="fas fa-check"></i> Added!';setTimeout(()=>{btn.classList.remove('added');btn.innerHTML='<i class="fas fa-bag-shopping"></i> Add to Bag';},2000);}
}

function updateCart(){
  const tot=cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cBadge').textContent=tot;
  document.getElementById('cCount').textContent=`(${tot})`;
  const ci=document.getElementById('cartItems'),cf=document.getElementById('cartFt');
  if(!cart.length){ci.innerHTML='<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Your bag is empty.<br>Start adding some luxury!</p></div>';cf.style.display='none';}
  else{
    const total=cart.reduce((s,i)=>s+i.price*i.qty,0);
    ci.innerHTML=cart.map(item=>`
      <div class="cart-item">
        <img src="${item.img}" class="ci-img" alt="${item.name}">
        <div class="ci-info">
          <div class="ci-name">${item.name}</div>
          <div class="ci-price">$${item.price}</div>
          <div class="ci-qty">
            <button class="qb" onclick="chQty(${item.id},-1)">−</button>
            <span class="qn">${item.qty}</span>
            <button class="qb" onclick="chQty(${item.id},1)">+</button>
            <i class="fas fa-trash ci-rm" onclick="rmCart(${item.id})"></i>
          </div>
        </div>
      </div>`).join('');
    document.getElementById('cartTotal').textContent=`$${total.toFixed(2)}`;
    cf.style.display='block';
  }
}

function chQty(id,d){const i=cart.find(x=>x.id===id);if(!i)return;i.qty+=d;if(i.qty<=0)rmCart(id);else updateCart();}
function rmCart(id){cart=cart.filter(x=>x.id!==id);updateCart();}
function toggleWish(btn){
  btn.classList.toggle('active');
  const a=btn.classList.contains('active');
  btn.innerHTML=`<i class="${a?'fas':'far'} fa-heart"></i>`;
  toast(a?'Added to wishlist!':'Removed from wishlist');
}

// TOAST
let tTimer;
function toast(msg){
  const t=document.getElementById('toast');
  document.getElementById('toastMsg').textContent=msg;
  t.classList.add('show');clearTimeout(tTimer);
  tTimer=setTimeout(()=>t.classList.remove('show'),3000);
}

// NEWSLETTER
function subNL(){
  const v=document.getElementById('nlEmail').value;
  if(!v||!v.includes('@')){toast('Please enter a valid email!');return;}
  document.getElementById('nlEmail').value='';
  toast('Successfully subscribed! Welcome to LUXE 🎉');
}

// CONTACT FORM
function submitForm(btn){
  btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Sending...';btn.disabled=true;
  setTimeout(()=>{
    btn.innerHTML='<i class="fas fa-check"></i> Message Sent!';btn.style.background='#10b981';
    toast("Message sent! We'll reply within 24 hours.");
    setTimeout(()=>{btn.innerHTML='<i class="fas fa-paper-plane"></i> Send Message';btn.style.background='';btn.disabled=false;},3000);
  },1500);
}

// GSAP ANIMATIONS
function initAnims(){
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-badge',{opacity:0,y:25,duration:.7,delay:.1});
  gsap.from('.hero-title',{opacity:0,y:40,duration:.9,delay:.25});
  gsap.from('.hero-desc',{opacity:0,y:25,duration:.8,delay:.4});
  gsap.from('.hero-btns',{opacity:0,y:20,duration:.75,delay:.55});
  gsap.from('.hero-stats',{opacity:0,y:15,duration:.7,delay:.7});
  gsap.from('.hero-img-side',{opacity:0,x:60,duration:1,delay:.3,ease:'power2.out'});
  gsap.from('.h-float',{opacity:0,scale:.8,duration:.6,stagger:.2,delay:.9,ease:'back.out(1.7)'});
  gsap.to('.hero-glow',{scale:1.25,duration:4,repeat:-1,yoyo:true,ease:'sine.inOut'});
  document.querySelectorAll('.sec-ttl').forEach(el=>{
    gsap.from(el,{scrollTrigger:{trigger:el,start:'top 88%'},opacity:0,y:28,duration:.65,ease:'power2.out'});
  });
  const ab=document.querySelector('.ab-main');
  if(ab)gsap.to(ab,{scrollTrigger:{trigger:'#about',scrub:1},y:-35});
}

// AOS
AOS.init({duration:680,easing:'ease-out-cubic',once:true,offset:80});

// INIT
document.addEventListener('DOMContentLoaded',()=>{
  renderProds();renderBS();renderTestis();renderFAQ();startCD();initLoader();
});