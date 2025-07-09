// 图片列表
const images = [
    'pexels-creative-vix-9754.jpg',
    'pexels-joyston-judah-331625-933054.jpg',
    'pexels-packermann-1666012.jpg'
];

// 文字内容
const quotes = [
    { chapter: '静谧时刻', quote: '保持耐心' },
    { chapter: '山间絮语', quote: '顺其自然' },
    { chapter: '云端启示', quote: '相信自己' },
    { chapter: '晨曦絮语', quote: '等待时机' },
    { chapter: '远方回响', quote: '勇敢表达' },
    { chapter: '山巅之问', quote: '改变角度' },
    { chapter: '雾里探索', quote: '依赖直觉' },
    { chapter: '云雾之间', quote: '静观其变' }
];

// 页面加载时随机选择内容
function updateContent() {
    const img = images[Math.floor(Math.random() * images.length)];
    const item = quotes[Math.floor(Math.random() * quotes.length)];
    const bg = document.getElementById('bg');
    bg.style.backgroundImage = `url('${img}')`;
    document.getElementById('chapter').textContent = item.chapter;
    document.getElementById('quote').textContent = `\"${item.quote}\"`;
}

// 初始化页面
updateContent();

// 点击页面任意位置更新内容
document.body.addEventListener('click', updateContent);