import type { CognateSet, LanguageFamily, DisputedRoot } from '../types'

export const LANGUAGE_FAMILIES: LanguageFamily[] = [
  { id: 'ie', name: '印欧语系', color: '#3b82f6', languages: ['英语','法语','德语','西班牙语','俄语','拉丁语'], era: '公元前4000年' },
  { id: 'st', name: '汉藏语系', color: '#22c55e', languages: ['汉语','藏语','缅甸语'], era: '公元前4000年' },
  { id: 'aa', name: '亚非语系', color: '#f59e0b', languages: ['阿拉伯语','希伯来语'], era: '公元前6000年' },
  { id: 'ural', name: '乌拉尔语系', color: '#8b5cf6', languages: ['芬兰语','匈牙利语'], era: '公元前5000年' },
]

export const COGNATE_SETS: CognateSet[] = [
  { root: '*pṓds', meaning: '脚/足', languages: { '英语': 'foot', '法语': 'pied', '德语': 'Fuß', '西班牙语': 'pie', '俄语': 'ступня', '拉丁语': 'pēs' }, period: 'PIE', family: 'ie' },
  { root: '*mātér', meaning: '母亲', languages: { '英语': 'mother', '法语': 'mère', '德语': 'Mutter', '西班牙语': 'madre', '俄语': 'мать', '拉丁语': 'māter' }, period: 'PIE', family: 'ie' },
  { root: '*pṓtr', meaning: '父亲', languages: { '英语': 'father', '法语': 'père', '德语': 'Vater', '西班牙语': 'padre', '俄语': 'отец', '拉丁语': 'pater' }, period: 'PIE', family: 'ie' },
  { root: '*h₂épo', meaning: '水', languages: { '英语': 'aqua', '法语': 'eau', '德语': 'Au', '西班牙语': 'agua', '俄语': 'вода', '拉丁语': 'aqua' }, period: 'PIE', family: 'ie' },
  { root: '*dʰómos', meaning: '家', languages: { '英语': 'dome', '法语': 'maison', '德语': 'Dom', '西班牙语': 'domo', '俄语': 'дом', '拉丁语': 'domus' }, period: 'PIE', family: 'ie' },
  { root: '*wḗdr̥', meaning: '水/Water', languages: { '英语': 'water', '法语': 'eau', '德语': 'Wasser', '俄语': 'вода', '拉丁语': 'unda' }, period: 'PIE', family: 'ie' },
  { root: '*sol-', meaning: '太阳', languages: { '英语': 'sun', '法语': 'soleil', '德语': 'Sonne', '西班牙语': 'sol', '俄语': 'солнце', '拉丁语': 'sol' }, period: 'PIE', family: 'ie' },
  { root: '*luks-', meaning: '光/亮', languages: { '英语': 'light', '法语': 'lumière', '德语': 'Licht', '西班牙语': 'luz', '俄语': 'луч', '拉丁语': 'lux' }, period: 'PIE', family: 'ie' },
  { root: '*nokʷt-', meaning: '夜晚', languages: { '英语': 'night', '法语': 'nuit', '德语': 'Nacht', '西班牙语': 'noche', '俄语': 'ночь', '拉丁语': 'nox' }, period: 'PIE', family: 'ie' },
  { root: '*okʷ-', meaning: '眼睛', languages: { '英语': 'eye', '法语': 'oeil', '德语': 'Auge', '西班牙语': 'ojo', '俄语': 'oko', '拉丁语': 'oculus' }, period: 'PIE', family: 'ie' },
  { root: '*ed-', meaning: '吃', languages: { '英语': 'eat', '德语': 'essen', '俄语': 'есть', '拉丁语': 'edere' }, period: 'PIE', family: 'ie' },
  { root: '*ǵneh₃-', meaning: '知道', languages: { '英语': 'know', '德语': 'kennen', '西班牙语': 'conocer', '俄语': 'знать', '拉丁语': 'gnoscere' }, period: 'PIE', family: 'ie' },
  { root: '*h₃érō', meaning: '鹰', languages: { '英语': 'eagle', '法语': 'aigle', '德语': 'Adler', '西班牙语': 'águila', '拉丁语': 'aquila' }, period: 'PIE', family: 'ie' },
  { root: '*sker-', meaning: '切割', languages: { '英语': 'shear', '德语': 'scheren', '俄语': 'резать', '拉丁语': 'scindere' }, period: 'PIE', family: 'ie' },
  { root: '*gʷen-', meaning: '女人', languages: { '英语': 'queen', '德语': 'Frau', '俄语': 'жена' }, period: 'PIE', family: 'ie' },
]

export const DISPUTED_ROOTS: DisputedRoot[] = [
  {
    id: 'dog', root: 'dog (docga)', meaning: '犬/狗', family: 'ie', status: '争议中',
    summary: '英语中最著名的"词源不明"词之一。古英语 docga 约1050年才出现，此前通用 hund(同源 hound)，其深层来源至今无定论。',
    viewpoints: [
      { theory: '日耳曼语内部衍生说', proposedBy: '部分日耳曼语学者', claim: '源自原始日耳曼语 *duganą"有用、强壮"(比较英语 doughty"勇猛的")，原指"强壮的动物"。', evidence: ['古英语 dugan"有能力"词族', '昵称式构词在动物名中常见'], divergence: '能否在日耳曼语内部找到可信词根；反对者认为语音对应不严格。' },
      { theory: '外来借词说', proposedBy: '词源学主流(OED)', claim: '可能借自已消失或未被记录的欧洲大陆语言，随外来犬种一同传入。', evidence: ['docga 出现晚且无前兆', '多语言中"狗"词来源同样不明(西 perro 等)'], divergence: '无法指明具体源语言，被批评为"不可证伪"。' },
      { theory: '拟声/昵称说', proposedBy: '民间及部分语言学家', claim: '源自对狗的呼唤声或宠物昵称，类似 doggy 的儿语构词。', evidence: ['动物昵称常突破常规音变', '多语言存在形似 dog 的犬名'], divergence: '缺乏文献证据，主流学界一般不采纳。' },
    ],
  },
  {
    id: 'beech', root: '*bʰeh₂ǵos', meaning: '山毛榉(?)/橡树(?)', family: 'ie', status: '争议中',
    summary: '"语言古生物学"的经典案例：该词被用来论证原始印欧人家乡位于山毛榉分布线以西，但词义是否稳定直指论证根基。',
    viewpoints: [
      { theory: '山毛榉线论证', proposedBy: 'Thieme 等(1950s)', claim: '词根指山毛榉；其天然分布西起加里宁格勒—敖德萨一线，故 PIE 家乡应在此线以西。', evidence: ['拉丁语 fāgus、英语 beech、希腊语 φηγός 形式对应', '与 *loḱs"鲑鱼"论证互相支持'], divergence: '依赖"词义五千年不变"的假设。' },
      { theory: '词义转移说', proposedBy: 'Friedrich、Krogmann 等', claim: '希腊语 φηγός 实指"橡树"，原始义可能是"橡树"或泛指硬木坚果树，不能用于地理定位。', evidence: ['希腊语词义为橡树而非山毛榉', '安纳托利亚—高加索亦有山毛榉分布'], divergence: '若词义可漂移，则整个"语言古生物学"方法失效。' },
      { theory: '安纳托利亚兼容说', proposedBy: 'Renfrew 学派', claim: '该词证据与安纳托利亚家乡说并不冲突，山毛榉在高加索—安纳托利亚亦有分布。', evidence: ['高加索山毛榉(Fagus orientalis)分布广泛'], divergence: '争的是家乡(草原说 vs 安纳托利亚说)而非词义本身。' },
    ],
  },
  {
    id: 'ok', root: 'OK / okay', meaning: '好的/可以', family: 'ie', status: '部分共识',
    summary: '世界上流传最广的词之一，词源说法曾多达数十种；Read 的考证成为主流，但其他假说仍在民间流传。',
    viewpoints: [
      { theory: '"oll korrect"缩写说', proposedBy: 'Allen Walker Read (1963)', claim: '源自1839年波士顿报纸的拼写戏谑风潮，"oll korrect"(all correct 的故意误拼)缩写为 O.K.，1840年范布伦竞选(Old Kinderhook)使其流行。', evidence: ['1839年《波士顿晨邮报》原文', '1840年竞选文献'], divergence: '主流接受；争议仅在于是否吸收了其他来源的强化。' },
      { theory: '乔克托语 okeh 说', proposedBy: '19世纪传教士记录', claim: '源自北美原住民乔克托语 okeh"就是这样"。', evidence: ['乔克托语确有该词', '1825年后有零星使用记录'], divergence: '缺乏1839年前英语文本中的连续用例。' },
      { theory: '西非来源说', proposedBy: '部分非裔研究学者', claim: '源自沃洛夫语 waw-kay"是的、确实"，经跨大西洋奴隶贸易传入美国南部。', evidence: ['沃洛夫语、曼丁哥语存在对应形式', '南部口语使用早于书面记录'], divergence: '传播链条缺乏文献佐证，时间线存疑。' },
    ],
  },
  {
    id: 'kangaroo', root: 'kangaroo', meaning: '袋鼠', family: 'ie', status: '部分共识',
    summary: '著名的"我不懂你说什么"民间词源已被证伪，但关于库克船长所记录的具体指称仍有细节争议。',
    viewpoints: [
      { theory: 'gangurru 借词说', proposedBy: 'John Haviland (1972年田野考证)', claim: '源自昆士兰 Guugu Yimithirr 语 gangurru，特指大型灰袋鼠；库克1770年在奋进河修船时记录。', evidence: ['该语言中确有 gangurru 一词', '库克日记原始记录'], divergence: '主流接受；争议仅在于具体指哪一种袋鼠。' },
      { theory: '"我不知道"传说', proposedBy: '民间传说(19世纪起)', claim: '原住民回答的"kangaroo"实为"我不明白你在说什么"。', evidence: ['仅见于后世轶事，无同期文献'], divergence: '已被田野调查证伪：Guugu Yimithirr 语中无此表达。' },
    ],
  },
  {
    id: 'god', root: '*ǵʰutóm (god)', meaning: '神', family: 'ie', status: '争议中',
    summary: '日耳曼语 god 的原始印欧语词根归属存在两派，分歧在于语义演变路径——"被献祭者"还是"被祈求者"。',
    viewpoints: [
      { theory: '"倾倒/献祭"说', proposedBy: 'Watkins 等', claim: '源自 PIE *ǵʰew-"倾倒(祭酒)"，god 原义为"接受献祭者"。', evidence: ['希腊语 khéō"倾注"、拉丁语 fundere 同源', '献酒在印欧祭祀文化中的核心地位'], divergence: '词根归属 *ǵʰew- 还是 *ǵʰewH-。' },
      { theory: '"呼唤/祈求"说', proposedBy: 'Pokorny 等', claim: '源自 PIE *ǵʰewH-"呼唤、祈求"，god 原义为"被祈求者"。', evidence: ['梵语 havate"呼唤"对应', '斯拉夫语 zvati"呼叫"'], divergence: '喉音后缀 H 的有无改变词根形态与整条语义链。' },
    ],
  },
  {
    id: 'honey', root: '蜜 *mjit / *medʰu-', meaning: '蜂蜜', family: 'st', status: '争议中',
    summary: '汉语"蜜"(中古 *mjit)与印欧语 *medʰu-(蜜酒/蜂蜜，比较英语 mead)惊人相似，是接触语言学的经典案例：借词还是巧合？',
    viewpoints: [
      { theory: '吐火罗语借词说', proposedBy: '部分汉藏比较学者', claim: '汉语"蜜"经吐火罗语(焉耆语 mit)借入，与印欧语 *medʰu- 同源。', evidence: ['吐火罗语 mit 与汉语 mjit 音近', '丝绸之路早期的蜂产品贸易'], divergence: '借入方向与时代：先秦文献中"蜜"已出现，时间窗口紧张。' },
      { theory: '汉藏固有词说', proposedBy: '传统汉藏语学者', claim: '"蜜"为汉藏语固有词，与藏缅语形式可比较，相似纯属巧合。', evidence: ['藏缅语族存在对应形式', '汉语上古音构拟可内部解释'], divergence: '是否承认跨语系词汇借用，牵涉"汉藏—印欧接触史"更大争论。' },
      { theory: '游荡词(Wanderwort)说', proposedBy: '接触语言学派', claim: '该词为欧亚大陆"游荡词"，随蜂产品贸易在多语系间传播，无法确定单一源头。', evidence: ['蜂蜜/蜜酒词在乌拉尔、高加索语言中亦有类似形式'], divergence: '放弃谱系解释，改用接触与贸易网络解释。' },
    ],
  },
]

export function buildGraph() {
  const nodes: any[] = []
  const links: any[] = []
  COGNATE_SETS.forEach((cs, ci) => {
    const rootId = 'root_' + ci
    nodes.push({ id: rootId, word: cs.root, language: 'Proto-IE', meaning: cs.meaning, family: 'ie', era: '公元前5000年' })
    Object.entries(cs.languages).forEach(([lang, word]) => {
      if (!word || word === '-') return
      const nid = ci + '_' + lang
      nodes.push({ id: nid, word, language: lang, meaning: cs.meaning, family: 'ie', era: '现代' })
      links.push({ source: rootId, target: nid, type: 'derived' })
    })
  })
  return { nodes, links }
}
