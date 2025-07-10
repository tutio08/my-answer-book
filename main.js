// 图片列表（已使用cdn资源）
const images = [
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekaterina-bolovtsova-7445007.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-jani-tisler-526626-1313399.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-rdne-5875024.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-273886.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-326168.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-arts-1547815.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-eberhardgross-2437299.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-blitzboy-895501.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-monstera-3611406.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-415571.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-sebastian-189349.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-aeppli-2828554.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kaip-1056670.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lilartsy-3050829.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-314958.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-237272.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-didsss-2932089.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-pixabay-235990.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-connor-danylenko-534256-1414535.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-lukebarky-2407128.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-blitzboy-902204.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-kovyrina-1600139.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-danielle-rangel-342268-3363674.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-tdcat-59321.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-unknown6user-1646753.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-cristian-rojas-7947792.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-arina-krasnikova-6998579.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-innature-1032814.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-ekamelev-813870.jpg",
  "https://cdn.jsdelivr.net/gh/tutio08/my-answer-book/pexels-jonastogo-2648337.jpg"
];
  
// 128句中文短句
const quotes = [
    "千万别在这上面押宝",
    "采取一个大胆的态度",
    "听取专家的意见",
    "你会发现你自己无法妥协",
    "专注在你的生活上吧",
    "研究然后享受它",
    "当然",
    "它将无法预测",
    "绝对不",
    "带着好奇心去探索它",
    "最好等等看",
    "它好像是确定的",
    "趁早做",
    "对别人保密",
    "可能会发生一些令人吃惊的事",
    "你需要适当调整一下",
    "怀疑它",
    "它将带来好运",
    "要有点耐心",
    "你会发现你所需要知道的一切",
    "会有另一种情况",
    "你将会很开心你这样做了",
    "把它写下来",
    "千万别陷入你的个人感情",
    "改变你的焦点",
    "这时候非常不顺利",
    "用任何你能做到的方式去提升",
    "如果你照你说的做",
    "如果不是就再也不要做它了",
    "这个时候不要要求更多",
    "避开第一个解决方案",
    "观察看看会发生什么事",
    "它会影响到其他人怎么看你",
    "你会说了算",
    "以一个更加轻松的速度进行吧",
    "最好的解决方法不是显而易见的",
    "保持灵活性",
    "这不是你所能控制的",
    "假如你说谢谢",
    "享受体验",
    "谨慎地处理",
    "注意细节",
    "当你要去做的时候小心行事",
    "毫无保留的把它说出来",
    "不要犹豫了",
    "它有着非常重要的意义",
    "更换一下重要事项的优先顺序",
    "这是一个做新计划的最好时机了",
    "继续前进",
    "列个为什么不要做的清单",
    "不要等待",
    "它将是你无法忘怀的事",
    "找出更多的选择",
    "履行你自己的义务",
    "稍后处理它",
    "跟随其他人的指引",
    "做一个为什么的清单",
    "冒险一试",
    "接受你习惯的改变",
    "你需要采取主动",
    "这可保证不了",
    "情况将会转变的非常快",
    "你将不得不妥协",
    "你需要更多的信息",
    "相信你最起初的想法",
    "它将引起一场轰动",
    "可能会发生一些令人吃惊的事",
    "它将会带来好运",
    "灾难是极有可能的",
    "迫切要求终止",
    "太多的选择难于太少",
    "是的",
    "仔细地聆听然后你将会知道",
    "答案就在你身边",
    "让它过去吧",
    "那将会是一种金钱的浪费",
    "全力以赴",
    "不要真正在意",
    "你需要考虑考虑其他方式",
    "从现在起的一年都没有所谓",
    "不要浪费你的时间了",
    "他可能是非凡的",
    "数到10再问一次",
    "装作它已经是真的了",
    "布置优先次序是必须的部分",
    "运用你的想象",
    "他一定会很好",
    "镇定下来 确保最好的决定",
    "等待",
    "当你行动时你将需要不断弥补",
    "一笑置之",
    "别人也同样取决于你的选择",
    "你将会后悔的",
    "无可非议",
    "当然",
    "你知道现在比以前更好了",
    "相信你的直觉",
    "考虑到它的机会",
    "问问你的母亲",
    "可能当你老的时候",
    "只能做一次",
    "可能",
    "千万别在这上面押宝",
    "采取一个大胆的态度",
    "不行",
    "行",
    "你的行动将会改善一切",
    "别傻了",
    "千万别在这上面押宝",
    "采取一个大胆的态度",
    "听取专家的意见",
    "你会发现你自己无法妥协",
    "专注在你的生活上吧",
    "研究然后享受它",
    "当然",
    "他仍将无法预测",
    "绝对不",
    "带着好奇心去探索它",
    "欣然地确定它",
    "最好等等看",
    "对别人保密",
    "可能会发生一些令人吃惊的事",
    "问问你的父亲",
    "绝不",
    "答案会以另一种形式来到你身边",
    "你将需要适当调整一下",
  ];
  
// 随机选取图片和短句
function updateContent() {
  const img = images[Math.floor(Math.random() * images.length)];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('bg').style.backgroundImage = `url('${img}')`;
  document.getElementById('quote').textContent = `“ ${quote} ”`;
}

// 时间戳格式化
function formatTimestamp(date) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, '0');
  const ampm = hour >= 12 ? 'p.m.' : 'a.m.';
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  function getOrdinal(n) {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }
  return `${month} ${day}${getOrdinal(day)}  ${hour12}:${minute} ${ampm}`;
}

// 初始化
updateContent();
document.getElementById('timestamp').textContent = formatTimestamp(new Date());
  
