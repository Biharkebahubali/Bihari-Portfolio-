/**
 * Studio Content Data
 * 
 * This file contains all content items for the Studio monitor tower.
 * Each item will be displayed on a monitor in the tower.
 * 
 * Platforms: 'youtube', 'blog', 'tiktok', 'instagram', 'telegram'
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#FF0000',
        accentColor: '#cc0000',
        icon: '▶',
        label: 'YouTube',
        shape: 'tv',
    },
    blog: {
        color: '#4A90D9',
        accentColor: '#2d6cb5',
        icon: '📝',
        label: 'Blog',
        shape: 'monitor',
    },
    tiktok: {
        color: '#00F2EA',
        accentColor: '#FF0050',
        icon: '🎵',
        label: 'TikTok',
        shape: 'phone',
    },
    instagram: {
        color: '#E1306C',
        accentColor: '#C13584',
        icon: '📷',
        label: 'Instagram',
        shape: 'phone',
    },
    telegram: {
        color: '#0088cc',
        accentColor: '#006699',
        icon: '✈',
        label: 'Telegram',
        shape: 'phone',
    },
    x: {
        color: '#000000',
        accentColor: '#14171A',
        icon: '𝕏',
        label: 'X (Twitter)',
        shape: 'monitor',
    },
    linkedin: {
        color: '#0077B5',
        accentColor: '#005E93',
        icon: 'in',
        label: 'LinkedIn',
        shape: 'monitor',
    },
    codrops: {
        color: '#0099FF',
        accentColor: '#0077CC',
        icon: '💧',
        label: 'Codrops',
        shape: 'monitor',
    },
};

// Sample content data - replace with real content later
const RAW_CONTENT_DATA = [
    // ============ YouTube Videos ============
    {
        id: 'yt-001',
        platform: 'youtube',
        title: 'Welcome to Bihar Ke Bahubali - My YouTube Journey',
        description: 'Welcome to my channel! Yahan tumhe milega coding tutorials, creative projects, aur Bihar Ki Jhalak. Subscribe karo aur judo mere safar se!',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: 'https://youtube.com/@bihar_ke_bahubali',
        date: '2026-01-10',
        views: '1.2K',
        duration: '15:32',
    },
    {
        id: 'yt-002',
        platform: 'youtube',
        title: 'Web Development Kaise Seekhein - Complete Roadmap in Hindi',
        description: 'Beginner se advanced tak web development ka poora roadmap. HTML, CSS, JavaScript, React - sab kuch step by step Hindi mein samjhaya gaya hai.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: 'https://youtube.com/@bihar_ke_bahubali',
        date: '2025-10-11',
        views: '121',
        duration: '7:45',
    },
    {
        id: 'yt-003',
        platform: 'youtube',
        title: 'React JS Crash Course in Hindi',
        description: 'React JS seekho aasan Hindi mein. Components, hooks, state management - sab kuch practical examples ke saath.',
        thumbnail: null,
        url: 'https://youtube.com/@bihar_ke_bahubali',
        date: '2025-12-28',
        views: '2.4K',
        duration: '22:10',
    },
    {
        id: 'yt-004',
        platform: 'youtube',
        title: 'Three.js for Beginners - 3D Website Tutorial',
        description: 'Three.js se 3D website kaise banayein. WebGL, shaders, aur animations ka complete guide Hindi mein.',
        thumbnail: null,
        url: 'https://youtube.com/@bihar_ke_bahubali',
        date: '2025-12-15',
        views: '1.8K',
        duration: '18:33',
    },
    {
        id: 'yt-005',
        platform: 'youtube',
        title: 'GSAP + Three.js Integration Tutorial',
        description: 'GSAP ScrollTrigger se 3D objects ko animate karna seekho. Scroll-linked animations ka poora guide.',
        thumbnail: null,
        url: 'https://youtube.com/@bihar_ke_bahubali',
        date: '2025-12-01',
        views: '3.1K',
        duration: '20:15',
    },
    {
        id: 'yt-006',
        platform: 'youtube',
        title: 'Building Interactive 3D Scenes',
        description: 'Raycasting, hover effects, aur click interactions Three.js mein. Interactive 3D scenes banana seekho.',
        thumbnail: null,
        url: 'https://youtube.com/@bihar_ke_bahubali',
        date: '2025-11-20',
        views: '2.8K',
        duration: '25:00',
    },
    {
        id: 'yt-007',
        platform: 'youtube',
        title: 'WebGL Performance Deep Dive',
        description: 'Draw calls, geometry instancing, aur bahut kuch optimize karna seekho for smooth 60fps.',
        thumbnail: null,
        url: 'https://youtube.com/@bihar_ke_bahubali',
        date: '2025-11-10',
        views: '1.5K',
        duration: '30:22',
    },
    {
        id: 'yt-008',
        platform: 'youtube',
        title: 'Procedural Textures Tutorial',
        description: 'Noise aur math functions se procedural textures banana seekho.',
        thumbnail: null,
        url: 'https://youtube.com/@bihar_ke_bahubali',
        date: '2025-10-28',
        views: '1.9K',
        duration: '18:45',
    },

    // ============ Blog Posts ============
    {
        id: 'blog-001',
        platform: 'blog',
        title: 'Bihar Ke Bahubali - My Creative Journey Begins',
        description: 'Welcome to my blog! Yahan main share karunga coding tips, creative projects, aur Bihar ki jhalak ke baare mein...',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: 'https://www.instagram.com/bihar_ke_bahubali/',
        date: '2026-01-08',
        readTime: '5 min',
    },
    {
        id: 'blog-002',
        platform: 'blog',
        title: 'Web Development Roadmap 2026',
        description: 'Beginner se advanced tak ka complete roadmap. Kya-kya seekhna chahiye, kis order mein - sab kuch.',
        thumbnail: null,
        url: 'https://youtube.com/@bihar_ke_bahubali',
        date: '2025-12-20',
        readTime: '8 min',
    },
    {
        id: 'blog-003',
        platform: 'blog',
        title: 'React vs Vanilla JavaScript - Kya Chuno?',
        description: 'Kab React use karein aur kab vanilla JS. Real examples ke saath comparison.',
        thumbnail: null,
        url: 'https://youtube.com/@bihar_ke_bahubali',
        date: '2025-12-10',
        readTime: '6 min',
    },
    {
        id: 'blog-004',
        platform: 'blog',
        title: 'Meri Creative Coding Journey',
        description: 'Traditional dev se creative development tak ka mera safar. Kya-kya seekha, kahan galtiyan ki.',
        thumbnail: null,
        url: 'https://www.instagram.com/vikram_life_/',
        date: '2025-11-25',
        readTime: '10 min',
    },
    {
        id: 'blog-005',
        platform: 'blog',
        title: 'Future of Web Experiences',
        description: 'Mere hisaab se interactive web kahan ja raha hai. 3D, AI, aur immersive experiences ka future.',
        thumbnail: null,
        url: 'https://youtube.com/@bihar_ke_bahubali',
        date: '2025-11-15',
        readTime: '7 min',
    },
    {
        id: 'blog-006',
        platform: 'blog',
        title: 'Design Systems for 3D Web',
        description: '3D components ka consistent library kaise banayein. Reusable aur scalable approach.',
        thumbnail: null,
        url: 'https://youtube.com/@bihar_ke_bahubali',
        date: '2025-11-01',
        readTime: '12 min',
    },
    {
        id: 'blog-007',
        platform: 'blog',
        title: 'Accessibility in 3D Web',
        description: 'Immersive experiences ko sabke liye accessible kaise banayein. Screen readers, keyboard navigation.',
        thumbnail: null,
        url: 'https://youtube.com/@bihar_ke_bahubali',
        date: '2025-10-20',
        readTime: '9 min',
    },
    {
        id: 'blog-008',
        platform: 'blog',
        title: 'Audio in Web Experiences',
        description: 'Spatial audio se immersion kaise badhayein. Web Audio API ka practical use.',
        thumbnail: null,
        url: 'https://youtube.com/@bihar_ke_bahubali',
        date: '2025-10-10',
        readTime: '6 min',
    },

    // ============ Instagram Posts ============
    {
        id: 'ig-001',
        platform: 'instagram',
        title: 'Follow @bihar_ke_bahubali on Instagram! ✨',
        description: 'Creative content, coding reels, aur Bihar ki jhalak. Follow karo aur judo mere safar se!',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: 'https://www.instagram.com/bihar_ke_bahubali/',
        date: '2026-01-09',
        views: '15.2K',
        likes: '1.2K',
    },
    {
        id: 'ig-002',
        platform: 'instagram',
        title: 'Coding Reels @bihar_ke_bahubali',
        description: 'Roz naye coding reels - tips, tricks, aur tutorials Hindi mein.',
        thumbnail: null,
        url: 'https://www.instagram.com/bihar_ke_bahubali/',
        date: '2026-01-03',
        views: '8.5K',
        likes: '756',
    },
    {
        id: 'ig-003',
        platform: 'instagram',
        title: 'Creative Content @bihar_ke_bahubali',
        description: 'Design, art, aur creative projects ki jhalak.',
        thumbnail: null,
        url: 'https://www.instagram.com/bihar_ke_bahubali/',
        date: '2025-12-25',
        views: '22.1K',
        likes: '3.4K',
    },
    {
        id: 'ig-004',
        platform: 'instagram',
        title: 'Follow @vikram_life_ - Personal Account',
        description: 'Personal life, daily updates, aur behind the scenes. Follow karo mera personal account!',
        thumbnail: null,
        url: 'https://www.instagram.com/vikram_life_/',
        date: '2025-12-18',
        views: '12.3K',
        likes: '1.1K',
    },
    {
        id: 'ig-005',
        platform: 'instagram',
        title: 'Life Updates @vikram_life_',
        description: 'Meri daily life, travels, aur personal moments ka safar.',
        thumbnail: null,
        url: 'https://www.instagram.com/vikram_life_/',
        date: '2025-12-12',
        views: '45.2K',
        likes: '5.8K',
    },
    {
        id: 'ig-006',
        platform: 'instagram',
        title: 'Behind The Scenes @vikram_life_',
        description: 'Content creation ke behind the scenes, bloopers, aur fun moments.',
        thumbnail: null,
        url: 'https://www.instagram.com/vikram_life_/',
        date: '2025-12-05',
        views: '18.7K',
        likes: '2.1K',
    },
    {
        id: 'ig-007',
        platform: 'instagram',
        title: 'Coding Tips @bihar_ke_bahubali',
        description: 'Daily coding tips aur shortcuts jo tumhara time bachayenge.',
        thumbnail: null,
        url: 'https://www.instagram.com/bihar_ke_bahubali/',
        date: '2025-11-28',
        views: '33.4K',
        likes: '4.2K',
    },
    {
        id: 'ig-008',
        platform: 'instagram',
        title: 'Project Showcase @bihar_ke_bahubali',
        description: 'Mere projects aur creations ki showcase. Kya banaya, kaise banaya.',
        thumbnail: null,
        url: 'https://www.instagram.com/bihar_ke_bahubali/',
        date: '2025-11-20',
        views: '28.9K',
        likes: '3.6K',
    },
    {
        id: 'ig-009',
        platform: 'instagram',
        title: 'Motivation @vikram_life_',
        description: 'Motivational content aur life lessons jo mujhe inspire karte hain.',
        thumbnail: null,
        url: 'https://www.instagram.com/vikram_life_/',
        date: '2025-11-15',
        views: '19.3K',
        likes: '2.4K',
    },
    {
        id: 'ig-010',
        platform: 'instagram',
        title: 'Reels Compilation @bihar_ke_bahubali',
        description: 'Mere best reels ka compilation. Ek jagah saara content.',
        thumbnail: null,
        url: 'https://www.instagram.com/bihar_ke_bahubali/',
        date: '2025-11-08',
        views: '41.2K',
        likes: '5.1K',
    },
    {
        id: 'ig-011',
        platform: 'instagram',
        title: 'Daily Life @vikram_life_',
        description: 'Roz ka routine, food, aur lifestyle content.',
        thumbnail: null,
        url: 'https://www.instagram.com/vikram_life_/',
        date: '2025-11-01',
        views: '25.6K',
        likes: '3.0K',
    },
    {
        id: 'ig-012',
        platform: 'instagram',
        title: 'Typography & Design @bihar_ke_bahubali',
        description: 'Design tips, typography inspiration, aur creative ideas.',
        thumbnail: null,
        url: 'https://www.instagram.com/bihar_ke_bahubali/',
        date: '2025-10-25',
        views: '31.8K',
        likes: '4.0K',
    },

    // ============ Telegram ============
    {
        id: 'tg-001',
        platform: 'telegram',
        title: 'Join Bihar Ke Bahubali Telegram Group ✈',
        description: 'Community se judo! Coding help, discussions, aur daily updates ke liye join karo.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: 'https://t.me/+YPzfRgZy_6Y5NDQ1',
        date: '2026-01-10',
        views: '500+',
        likes: 'Members',
    },
    {
        id: 'tg-002',
        platform: 'telegram',
        title: 'Help Bot - @biharipleasehelpme_bot',
        description: 'Direct admin se baat karo! Koi bhi help chahiye - bas message bhejo bot pe.',
        thumbnail: null,
        url: 'https://t.me/biharipleasehelpme_bot',
        date: '2026-01-10',
        views: '24/7',
        likes: 'Active',
    },
    {
        id: 'tg-003',
        platform: 'telegram',
        title: 'Coding Support Group',
        description: 'Coding doubts clear karo community members ke saath. Beginner se advanced tak.',
        thumbnail: null,
        url: 'https://t.me/+YPzfRgZy_6Y5NDQ1',
        date: '2026-01-08',
        views: '300+',
        likes: 'Active',
    },
    {
        id: 'tg-004',
        platform: 'telegram',
        title: 'Instant Help from Admin',
        description: 'Koi urgent help chahiye? Bot pe message karo, admin directly reply karega.',
        thumbnail: null,
        url: 'https://t.me/biharipleasehelpme_bot',
        date: '2026-01-05',
        views: '24/7',
        likes: 'Live',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};