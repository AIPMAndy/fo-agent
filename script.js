const rules = {
  anxiety: {
    keywords: ['焦虑','担心','害怕','不安','恐惧'],
    trap: '你现在困住自己的，不一定是事情本身，而是你试图提前控制所有结果。',
    see: '真正让人累的，往往不是不确定，而是你不允许自己处在不确定里。',
    act: '今天只做一件最小的确定动作，把注意力从“如果出错怎么办”拉回“我现在能做什么”。'
  },
  relationship: {
    keywords: ['感情','关系','喜欢','放不下','分手','他','她'],
    trap: '你困住自己的点，可能不是那个人，而是你还抓着一个没有完成的期待。',
    see: '放不下，很多时候不是因为爱太深，而是因为你还在向过去讨一个答案。',
    act: '今天把“我还想从这段关系里得到什么”写下来，只写事实，不写幻想。'
  },
  choice: {
    keywords: ['选择','决定','纠结','要不要','方向','机会'],
    trap: '你困住自己的，不是选项太少，而是你想一次就选到永远正确。',
    see: '很多选择不是想清楚才做，而是做了之后，才逐渐清楚。',
    act: '今天先选一个可逆的小动作，往前走一步，不要求一次做完人生判断。'
  },
  anger: {
    keywords: ['生气','愤怒','委屈','气','受不了'],
    trap: '你现在抓得最紧的，往往是“我不该被这样对待”的那口气。',
    see: '情绪不是问题，紧抓住情绪不放，才会让它反过来控制你。',
    act: '今天先暂停解释和反击，给自己 10 分钟，只观察身体里最强的那股反应。'
  },
  default: {
    trap: '你现在困住自己的，往往不是外部世界，而是你对这件事必须马上有答案。',
    see: '很多痛苦不是来自事实，而是来自念头不停要求世界立刻符合自己的期待。',
    act: '今天先把问题缩小一圈：只回答“我现在最该面对的一个点是什么”。'
  }
};

function resolveRule(text) {
  const lower = text.trim();
  for (const key of Object.keys(rules)) {
    if (key === 'default') continue;
    if (rules[key].keywords.some(k => lower.includes(k))) return rules[key];
  }
  return rules.default;
}

const q = document.getElementById('question');
const result = document.getElementById('result');
const trap = document.getElementById('trap');
const see = document.getElementById('see');
const act = document.getElementById('act');

document.getElementById('generateBtn').addEventListener('click', () => {
  const text = q.value.trim();
  if (!text) return;
  const r = resolveRule(text);
  trap.textContent = r.trap;
  see.textContent = r.see;
  act.textContent = r.act;
  result.classList.remove('hidden');
});

document.getElementById('copyBtn').addEventListener('click', async () => {
  const text = `Fo 的回应\n\n你困住自己的点：${trap.textContent}\n\n你真正该看见的：${see.textContent}\n\n今天的一个动作：${act.textContent}`;
  await navigator.clipboard.writeText(text);
});