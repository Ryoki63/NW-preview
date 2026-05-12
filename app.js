const yen = new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY", maximumFractionDigits: 0 });
const num = new Intl.NumberFormat("ja-JP");

const customers = [
  c("c001", "山田 隆", "VIP", 4820000, 38, 3, 12, "新しい時計の話で盛り上がり中。同伴のお誘いがハマりそう"),
  c("c002", "田中 健司", "気にかける", 1980000, 22, 18, 58, "いつもの来店ペースより2倍くらい空いてます。やさしくひとこと"),
  c("c003", "佐藤 雅彦", "VIP", 3960000, 31, 11, 8, "5/8がお誕生日。今週中に予告メッセージを送ると来てくれそう"),
  c("c004", "鈴木 義男", "常連", 1420000, 18, 7, 20, "釣り大会の話が会話のきっかけになります"),
  c("c005", "高橋 浩之", "VIP", 6120000, 42, 5, 10, "車が納車されたばかり。週末前にお祝いメッセージが効きます"),
  c("c006", "渡辺 達也", "常連", 1360000, 19, 12, 23, "サッカー日本代表の話で再びつながりやすい"),
  c("c007", "伊藤 正樹", "なじみ", 620000, 9, 23, 36, "ていねいな近況の聞き方で距離をあたためなおせます"),
  c("c008", "中村 健一", "なじみ", 510000, 8, 9, 18, "映画公開の話がしぜんに使えます"),
  c("c009", "小林 誠", "常連", 1090000, 17, 4, 16, "釣果の写真にひとこと返すと来店につながりやすい"),
  c("c010", "加藤 隆司", "なじみ", 760000, 10, 20, 30, "展示会の話に乗ってくれやすい"),
  c("c011", "吉田 信行", "常連", 2210000, 23, 6, 14, "ごはんでの同伴もありかも"),
  c("c012", "山本 賢治", "なじみ", 680000, 11, 15, 28, "深夜より早い時間の来店が多めです"),
  c("c013", "斎藤 武", "なじみ", 430000, 7, 28, 41, "みじかい安否メッセージがしぜん"),
  c("c014", "松本 拓也", "ライト", 180000, 4, 31, 44, "イベントのお知らせくらいでひかえめに"),
  c("c015", "井上 浩", "なじみ", 590000, 8, 17, 32, "季節の俳句をそえると返事がもらいやすい"),
  c("c016", "木村 隆介", "常連", 1240000, 16, 8, 22, "温泉旅行の話がきっかけに"),
  c("c017", "林 大輔", "気にかける", 310000, 6, 42, 76, "転職したばかり。来店をせまらず、近況だけそっと聞く"),
  c("c018", "清水 雅人", "なじみ", 870000, 12, 14, 26, "歌舞伎の新しい演目の話がしぜん"),
  c("c019", "山口 健治", "ライト", 240000, 5, 26, 47, "落語会の話だけで軽くつながる"),
  c("c020", "池田 茂", "常連", 3060000, 29, 10, 13, "週末の競馬の前に予想の話"),
  c("c021", "橋本 学", "なじみ", 720000, 9, 19, 34, "お茶会の予定をそっと聞いてみる"),
  c("c022", "石川 博", "ライト", 210000, 4, 29, 51, "野球観戦の話だけで軽くつながる"),
  c("c023", "阿部 直人", "常連", 1890000, 20, 13, 19, "釣り仲間とそろっての来店もありそう"),
  c("c024", "森 健二", "なじみ", 560000, 7, 22, 39, "絵画展のおさそいをしぜんに送れます"),
  c("c025", "中島 健一", "新規", 0, 0, 0, 5, "名刺を登録したばかり。お礼と次の約束を取りつけたい")
];

const expenses = [
  { date: "2026-04-28", category: "美容", vendor: "渋谷美容室サロン", amount: 18500 },
  { date: "2026-04-27", category: "交通費", vendor: "日交タクシー", amount: 4280 },
  { date: "2026-04-26", category: "衣装", vendor: "GINZA SIX ドレスショップ", amount: 42000 },
  { date: "2026-04-25", category: "美容", vendor: "ネイルサロン GRACE", amount: 12000 },
  { date: "2026-04-24", category: "交通費", vendor: "日交タクシー", amount: 3850 },
  { date: "2026-04-23", category: "通信費", vendor: "ドコモ", amount: 12800 },
  { date: "2026-04-22", category: "美容", vendor: "アイラッシュサロン", amount: 9800 },
  { date: "2026-04-21", category: "接待", vendor: "鮨いまむら 銀座", amount: 28000 },
  { date: "2026-04-20", category: "衣装", vendor: "Amazon", amount: 8400 },
  { date: "2026-04-19", category: "交通費", vendor: "JR東日本", amount: 1280 },
  { date: "2026-04-18", category: "美容", vendor: "渋谷美容室サロン", amount: 18500 },
  { date: "2026-04-17", category: "交通費", vendor: "日交タクシー", amount: 5120 },
  { date: "2026-04-16", category: "衣装", vendor: "Christian Louboutin", amount: 84000 },
  { date: "2026-04-15", category: "美容", vendor: "ネイルサロン GRACE", amount: 12000 },
  { date: "2026-04-14", category: "交通費", vendor: "日交タクシー", amount: 4500 },
  { date: "2026-04-13", category: "その他", vendor: "Apple Store", amount: 9400 },
  { date: "2026-04-12", category: "美容", vendor: "美容院 SHIMA", amount: 24000 },
  { date: "2026-04-10", category: "交通費", vendor: "JAL", amount: 32000 },
  { date: "2026-04-08", category: "美容", vendor: "アイラッシュサロン", amount: 9800 },
  { date: "2026-04-05", category: "通信費", vendor: "ソフトバンク光", amount: 5800 }
];

const weeklyStrategy = {
  weekOf: "2026年5月3日（日）の週",
  summary: "今週は山田さん・田中さん・佐藤さんに連絡してみるのがおすすめ。山田さんは新しい時計の話で気分が良さそうなので、同伴のお誘いがハマりそう。田中さんはちょっと足が遠のき気味なので、早めにひとこと送ってみるといいです。佐藤さんは来週お誕生日。今週中に軽くお祝いの予告メッセージを送ると効果的です。",
  focusCustomers: [
    { id: "c001", action: "同伴をお誘い", success: 68, revenue: 80000, reason: "週末の同伴は今までだいたい65%でうまくいってます。時計の話で気分が良さそう。" },
    { id: "c002", action: "やさしくひとこと", success: 42, revenue: 35000, reason: "いつもの来店ペースの2倍以上が経過。やわらかい感じで近況を聞いてみよう。" },
    { id: "c003", action: "お誕生日の予告", success: 85, revenue: 120000, reason: "お誕生日の5日前。来店日が決まりやすいタイミング。" },
    { id: "c005", action: "車が届いたお祝い", success: 61, revenue: 90000, reason: "お祝いごとには反応が良くて、シャンパンのおすすめとも相性◎。" },
    { id: "c020", action: "競馬の前にひとこと", success: 48, revenue: 56000, reason: "週末前に話題をふると、来店のきっかけになります。" }
  ]
};

const whatIfScenarios = [
  scenario("scenario-1", "大切な3名の来る回数を少し増やしたら？", 240000, 168000, ["同伴のお誘い +2回/月", "新しい時計の話題 +1回/月", "お誕生日メッセージを早めに"], [1247500, 1180000, 1210000, 1265000, 1300000, 1320000], [1487500, 1420000, 1450000, 1510000, 1560000, 1585000]),
  scenario("scenario-2", "足が遠のき気味の3人を引き止めたら？", 135000, 94000, ["近況のひとこと +3回/月", "気軽なおさそい +2回/月"], [1247500, 1160000, 1100000, 1040000, 990000, 960000], [1247500, 1235000, 1240000, 1260000, 1280000, 1305000]),
  scenario("scenario-3", "新しいお客さんを月3人増やしたら？", 180000, 126000, ["名刺の登録 +12件/月", "初回お礼を必ず送る", "2回目の来店を予約化"], [1247500, 1190000, 1215000, 1230000, 1260000, 1285000], [1247500, 1300000, 1360000, 1420000, 1485000, 1535000]),
  scenario("scenario-4", "1人あたりの単価を平均5%上げたら？", 210000, 147000, ["ボトルのおすすめ +4回/月", "同伴前のお店選びを工夫", "いい席のおすすめ +2回/月"], [1247500, 1180000, 1210000, 1265000, 1300000, 1320000], [1310000, 1250000, 1285000, 1340000, 1385000, 1410000])
];

const screens = [
  s("s00", "S00", "スプラッシュ", "Project Velvetの起動", "core"),
  s("s01", "S01", "ログイン",     "Face IDやパスコードで安全に入る", "core"),
  s("s02", "S02", "ホーム",       "今日連絡したい人と売上の予想", "core"),
  s("s03", "S03", "お客さんリスト", "25名のお客さんをおすすめ順で見る", "core"),
  s("s04", "S04", "お客さん詳細",   "接客の記録と、次にしたい動き", "core"),
  s("s05", "S05", "名刺カメラ",    "新しいお客さんを名刺から登録", "core"),
  s("s06", "S06", "音声メモ",      "帰りの車で話して記憶を整理", "core"),
  s("s07", "S07", "AIが文を作る",  "LINE用の文を3パターン作る", "core"),
  s("s08", "S08", "来店の記録",    "金額と指名の種類をその場で入力", "core"),
  s("s09", "S09", "設定",         "通知・ログイン・AIの口調を調整", "core"),
  s("s10", "S10", "こっそりモード", "家計簿に見せかけて隠せる", "core"),
  s("w01", "W01", "ロック画面Widget", "ワンタップで来店を記録", "core"),
  s("s11", "S11", "税金まわり", "今年の税金まわりをひと目で", "saas"),
  s("s12", "S12", "レシートを撮る", "撮るだけで自動で記録", "saas"),
  s("s13", "S13", "今月のまとめ",   "売上・使ったお金・手元に残るお金", "saas"),
  s("s14", "S14", "申告書を見る", "申告書を確認してfreeeへ進む", "saas"),
  s("s15", "S15", "LINEまとめ送信", "グループ別に文を送る", "saas"),
  s("s16", "S16", "よく使う文",    "定型文とAIによる改善案", "saas"),
  s("s17", "S17", "予定カレンダー", "同伴・出勤の予定", "saas"),
  s("s18", "S18", "今週のおすすめ", "AIが今週連絡したい人を教える", "saas"),
  s("s19", "S19", "おすすめ詳細",   "ひとりひとりへのおすすめ動き", "saas"),
  s("s20", "S20", "売上おためし",  "やってみたらどうなるかを試す", "saas")
];

// AI Tasks がローテーションする (ステータスパネル用)
const aiTasks = [
  { task: "25名のお客さんの様子をチェック中", sub: "来店ペースを確認", ops: 1284 },
  { task: "山田さんの過去の会話から「同伴」の話を取り出し中", sub: "会話を整理", ops: 612 },
  { task: "佐藤さんへのお誕生日メッセージを3案考え中", sub: "文を作成", ops: 248 },
  { task: "レシートを自動でカテゴリ分け中", sub: "お買い物を整理", ops: 92 },
  { task: "今週おすすめしたい人を並べ替え中", sub: "おすすめ順を更新", ops: 423 },
  { task: "freeeへ売上データを同期中", sub: "データ確認", ops: 56 },
  { task: "LINEの返信率を学習中", sub: "返事の出やすさを確認", ops: 178 },
  { task: "売上おためし計算を学習中", sub: "売上のめやすを計算", ops: 1820 }
];

// 起動時のシード活動ログ
const seedActivity = [
  { time: "21:47:58", kind: "detect", text: "田中さんの「足が遠のき度」を +3pt 更新", meta: "55% → 58%" },
  { time: "21:47:42", kind: "gen",    text: "山田さん向け同伴のお誘い文を3案つくった", meta: "本命 / ひかえめ / カジュアル" },
  { time: "21:47:30", kind: "learn",  text: "先週送ったLINEの既読率を学習", meta: "8件 / 平均 71%" },
  { time: "21:47:18", kind: "sync",   text: "freeeに4月分の使ったお金20件を同期", meta: "完了 (¥298,400)" },
  { time: "21:47:02", kind: "detect", text: "佐藤さんのお誕生日(5/8)を5日前に発見", meta: "予告メッセージおすすめ" },
  { time: "21:46:51", kind: "gen",    text: "今週注目したいお客さん5名を選出", meta: "大切3 / 気にかける1 / チャンス1" }
];

// AIからのお知らせのキュー (tab: 関連するタブにバッジを付ける)
const proactiveQueue = [
  { title: "気になるお知らせ", body: "田中さん 18日来てません。気にかけ度 +3pt", icon: "!", tab: "home", customerId: "c002" },
  { title: "AIが文をつくりました", body: "山田さん向けの同伴お誘い文ができました", icon: "✎", tab: "line", customerId: "c001" },
  { title: "売上のお知らせ", body: "今夜の予想 ¥1,310,000 (+5.0%)", icon: "$", tab: "home" },
  { title: "予定のお知らせ", body: "佐藤さん 5/8 お誕生日。今週中の予告メッセージがおすすめ", icon: "★", tab: "ai", customerId: "c003" },
  { title: "学習が完了", body: "LINEの返信率の学習を更新しました", icon: "↻", tab: "line" },
  { title: "freee同期", body: "freee連携 4月分20件を同期しました", icon: "↗", tab: "tax" }
];

const preparedActions = [
  { screen: "s07", title: "山田さんへ同伴のお誘い", detail: "時計の話を入れたLINEの文ができてます", value: "売上 ¥8万", badge: "送る候補" },
  { screen: "s15", title: "来てない8名にまとめて連絡", detail: "近況をやさしく聞く文を一人ずつ調整ずみ", value: "8名", badge: "LINE" },
  { screen: "s12", title: "撮りそこねたレシート候補", detail: "カメラロールに美容・移動っぽい写真があるよ", value: "2件", badge: "税務" },
  { screen: "s17", title: "佐藤さんお誕生日の予告", detail: "5/8の来店をふやすメッセージをおすすめ", value: "85%", badge: "AI" }
];

const state = {
  screen: new URLSearchParams(location.search).get("screen") || "s02",
  selectedCustomerId: "c001",
  query: "",
  scenarioId: "scenario-1",
  simulating: false,
  lineProgress: 3,
  todaySales: 1247500,
  todayVisits: 18,
  riskCount: 3,
  currentTab: "home",
  aiTaskIndex: 0,
  activity: [...seedActivity],
  toastIndex: 0,
  unreadTabs: { home: false, tax: false, line: false, ai: true, set: false },
  visitAmount: 128000
};

const tonightPredictions = [
  { hour: "20:30", name: "山田 隆", prob: 78, isNow: false },
  { hour: "21:15", name: "佐藤 雅彦", prob: 62, isNow: true },
  { hour: "22:00", name: "高橋 浩之", prob: 84, isNow: false },
  { hour: "23:30", name: "池田 茂", prob: 51, isNow: false },
  { hour: "24:30", name: "(空き)", prob: 0, isNow: false }
];

const customerTopics = {
  c001: [{ t: "新時計", f: 8, hot: true }, { t: "同伴", f: 5, hot: true }, { t: "登山", f: 3 }, { t: "息子の進学", f: 2 }, { t: "健康", f: 1, cold: true }],
  c002: [{ t: "仕事", f: 4 }, { t: "出張", f: 3 }, { t: "ゴルフ", f: 2 }, { t: "家族", f: 1, cold: true }],
  c003: [{ t: "誕生日", f: 6, hot: true }, { t: "シャンパン", f: 4 }, { t: "車", f: 3 }, { t: "旅行", f: 2 }],
  c005: [{ t: "新車", f: 7, hot: true }, { t: "シャンパン", f: 5 }, { t: "ゴルフ", f: 4 }, { t: "息子", f: 2 }],
  c020: [{ t: "競馬", f: 6, hot: true }, { t: "馬主", f: 3 }, { t: "ボトル", f: 4 }, { t: "週末", f: 5 }]
};

let _prevScreen = null;

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const value = target.dataset.value;
  if (target.dataset.action === "nav" || target.dataset.action === "tab") navigate(value);
  if (target.dataset.action === "customer") {
    state.selectedCustomerId = value;
    navigate("s04");
  }
  if (target.dataset.action === "strategy") {
    state.selectedCustomerId = value;
    navigate("s19");
  }
  if (target.dataset.action === "scenario") runScenario(value);
  if (target.dataset.action === "line-progress") {
    state.lineProgress = Math.min(8, state.lineProgress + 1);
    pushActivity({ kind: "sync", text: `LINE送信 ${state.lineProgress}/8 件 開封中`, meta: "送信ログ" });
    render();
  }
  if (target.dataset.action === "regen-draft") {
    triggerDraftRegeneration();
  }
});

document.addEventListener("input", (event) => {
  if (event.target.id === "customerSearch") {
    state.query = event.target.value;
    const caret = event.target.selectionStart;
    render();
    const next = document.getElementById("customerSearch");
    if (next) {
      next.focus();
      try { next.setSelectionRange(caret, caret); } catch { /* noop */ }
    }
  }
});

window.addEventListener("popstate", () => {
  state.screen = new URLSearchParams(location.search).get("screen") || "s02";
  render();
});

render();
startStatusClock();
startAIPulse();
startProactiveToasts();
startActivityFeed();
startLiveKpis();
startWidgetClock();

function c(id, name, segment, sales, visits, lastDays, risk, note) {
  return { id, name, segment, sales, visits, lastDays, risk, note };
}

function s(key, id, name, purpose, group) {
  return { key, id, name, purpose, group };
}

function scenario(id, title, revenueImpact, netIncomeImpact, actions, current, simulated) {
  return { id, title, revenueImpact, netIncomeImpact, actions, current, simulated };
}

function shortYen(value) {
  const amount = Number(value) || 0;
  if (Math.abs(amount) >= 10000) return `¥${num.format(Math.round(amount / 10000))}万`;
  return yen.format(amount);
}

function segmentLabel(segment) {
  return ({
    VIP: "大切",
    "気にかける": "気にかける",
    常連: "常連",
    なじみ: "なじみ",
    ライト: "ライト",
    新規: "新規"
  })[segment] || segment;
}

function segmentBadgeClass(segment) {
  if (segment === "VIP") return "vip";
  if (segment === "気にかける") return "danger";
  if (segment === "新規") return "success";
  return "info";
}

function navigate(key) {
  if (!screens.some((screen) => screen.key === key)) return;
  state.screen = key;
  const tab = tabFromScreen(key);
  if (tab) state.unreadTabs[tab] = false;
  const url = new URL(location.href);
  url.searchParams.set("screen", key);
  history.pushState(null, "", url);
  render();
}

function tabFromScreen(key) {
  if (["s02","s03","s04","s05","s06","s07","s08","s10","w01"].includes(key)) return "home";
  if (["s11","s12","s13","s14"].includes(key)) return "tax";
  if (["s15","s16","s17"].includes(key)) return "line";
  if (["s18","s19","s20"].includes(key)) return "ai";
  if (["s09","s00","s01"].includes(key)) return "set";
  return null;
}

function runScenario(id) {
  state.scenarioId = id;
  state.simulating = true;
  pushActivity({ kind: "learn", text: `売上おためし「${whatIfScenarios.find((x) => x.id === id).title.slice(0, 18)}…」を計算中`, meta: "6ヶ月分を計算" });
  render();
  window.setTimeout(() => {
    state.simulating = false;
    pushActivity({ kind: "learn", text: "計算が完了 (6ヶ月先まで予想)", meta: "完了" });
    render();
  }, 1600);
}

function render() {
  renderNav();
  renderMeta();
  const screen = document.getElementById("screen");
  const screenChanged = _prevScreen !== state.screen;
  if (screenChanged) {
    screen.classList.remove("slide");
    void screen.offsetWidth;
    screen.classList.add("slide");
  }
  state.currentTab = tabFromScreen(state.screen) || "home";
  screen.innerHTML = screenMarkup();
  renderTabbar();
  onScreenMounted();
  _prevScreen = state.screen;
}

function onScreenMounted() {
  switch (state.screen) {
    case "s00": kickSplashBoot(); break;
    case "s01": kickFaceScan(); break;
    case "s05": kickPipeline("cardPipeline", [
      { delay: 600, conf: "98%" },
      { delay: 720, conf: "GINZA HD" },
      { delay: 600, conf: "経営者" },
      { delay: 540, conf: "新規" }
    ]); break;
    case "s06": kickVoiceTranscription(); break;
    case "s07": kickPipeline("genPipeline", [
      { delay: 520, conf: "12件" },
      { delay: 480, conf: "OK" },
      { delay: 520, conf: "柔らかめ" },
      { delay: 600, conf: "3案" }
    ], () => { if (state.screen === "s07") startDraftTyping(); }); break;
    case "s08": bindAmountSuggest(); break;
  }
}

function renderNav() {
  const groups = [
    { id: "core", label: "メイン機能", cls: "" },
    { id: "saas", label: "あったら便利", cls: "saas" }
  ];
  document.getElementById("screenNav").innerHTML = groups.map((g) => `
    <div class="nav-section-title ${g.cls}">${g.label}</div>
    <div class="nav-section">
      ${screens.filter((x) => x.group === g.id).map((item) => `
        <button class="nav-btn ${item.key === state.screen ? "active" : ""}" data-action="nav" data-value="${item.key}">
          <span class="nav-id">${item.id}</span>
          <span class="nav-name">${item.name}</span>
        </button>
      `).join("")}
    </div>
  `).join("");
}

function renderMeta() {
  const current = currentScreen();
  document.getElementById("metaTitle").textContent = `${current.id} ${current.name}`;
  document.getElementById("metaPurpose").textContent = current.purpose;
  document.getElementById("metaData").innerHTML = [
    ["お客さん", `${customers.length}名`],
    ["お買い物", `${expenses.length}件`],
    ["売上の見込み", shortYen(state.todaySales)],
    ["気にかける", `${state.riskCount}名`]
  ].map(([label, value]) => `<div><span class="label">${label}</span><strong>${value}</strong></div>`).join("");
  renderActivityLog();
}

function renderActivityLog() {
  const el = document.getElementById("activityLog");
  if (!el) return;
  el.innerHTML = state.activity.slice(0, 8).map((entry, idx) => `
    <div class="log-row kind-${entry.kind} ${idx === 0 && entry.fresh ? "is-new" : ""}">
      <span class="log-time">${entry.time}</span>
      <span class="log-icon">${iconFor(entry.kind)}</span>
      <div>
        <p>${entry.text}</p>
        <span class="log-meta">${entry.meta || ""}</span>
      </div>
    </div>
  `).join("");
  // Reset fresh flag after render
  state.activity.forEach((x) => (x.fresh = false));
}

function iconFor(kind) {
  return ({ detect: "!", gen: "✎", sync: "↗", learn: "↻" })[kind] || "·";
}

function pushActivity(entry) {
  const stamp = formatTime(new Date());
  state.activity.unshift({ time: stamp, fresh: true, ...entry });
  if (state.activity.length > 24) state.activity.length = 24;
  renderActivityLog();
  if (entry.customerId) flashCustomerFocus(entry.customerId);
}

function formatTime(d) {
  const pad = (v) => String(v).padStart(2, "0");
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function currentScreen() {
  return screens.find((item) => item.key === state.screen) || screens[0];
}

function screenMarkup() {
  const map = {
    s00: splash, s01: auth, s02: home, s03: customerList, s04: customerDetail,
    s05: cardScan, s06: voiceMemo, s07: draft, s08: visitRecord, s09: settings,
    s10: decoy, w01: widget, s11: taxOverview, s12: receiptScan, s13: monthlyTax,
    s14: taxForm, s15: lineBroadcast, s16: templates, s17: calendar,
    s18: strategyWeek, s19: strategyDetail, s20: whatIf
  };
  return (map[state.screen] || home)();
}

function page(title, content, active = "home", right = "") {
  state.currentTab = active;
  return `
    <div class="page">
      <div class="nav-bar">
        <button class="icon-btn" data-action="nav" data-value="s02">⌂</button>
        <div class="nav-title">${title}</div>
        <button class="icon-btn" data-action="nav" data-value="${right || "s09"}">${right ? "↗" : "⚙"}</button>
      </div>
      ${content}
    </div>
  `;
}

function renderTabbar() {
  const el = document.getElementById("tabbar");
  if (!el) return;
  const active = state.currentTab || tabFromScreen(state.screen) || "home";
  el.classList.toggle("hidden", state.screen === "s00" || state.screen === "s01");
  el.innerHTML = tabbar(active);
}

function tabbar(active) {
  const tabs = [
    ["home", "s02", "ホーム"],
    ["tax", "s11", "お金"],
    ["line", "s15", "LINE"],
    ["ai", "s18", "おすすめ"],
    ["set", "s09", "設定"]
  ];
  return tabs.map(([key, screen, label]) => `
    <button class="${active === key ? "active" : ""}" data-action="tab" data-value="${screen}" ${state.unreadTabs[key] && active !== key ? "data-badge=\"1\"" : ""}>${label}</button>
  `).join("");
}

/* ============ Screens ============ */

function splash() {
  return `
    <div class="splash-boot">
      <div class="ring-orbit">
        <div class="splash-mark">V</div>
      </div>
      <div>
        <div class="hero-num">Velvet</div>
        <p class="muted">夜のおしごとを、AIがそっとサポート</p>
      </div>
      <div class="boot-log">
        <span>› お客さん情報 25名を読みこみ</span>
        <span>› AI機能 v1.4 を準備</span>
        <span>› AIおすすめ機能 OK</span>
        <span>› Face ID 待ってるよ…</span>
      </div>
      <div class="boot-progress"><i></i></div>
      <button class="btn-primary" data-action="nav" data-value="s01">起動する</button>
    </div>
  `;
}

function auth() {
  return page("ログイン", `
    <div class="card stack" style="text-align:center; padding:24px 16px">
      <div class="face-scan">
        <div class="ring-arc"></div>
        <div class="ring-arc r2"></div>
        <div class="face">⌒</div>
        <div class="scan-line"></div>
      </div>
      <strong id="faceLabel">Face ID でログイン中…</strong>
      <p class="muted" id="faceSub">お客さんの情報、LINEの文、税金まわりを安全に守ります。</p>
      <button class="btn-primary" data-action="nav" data-value="s02">手で進める</button>
    </div>
    <div class="kpis">
      <div class="kpi"><span>暗号化</span><strong>ON</strong></div>
      <div class="kpi"><span>こっそり</span><strong>ON</strong></div>
      <div class="kpi"><span>通知</span><strong>かくす</strong></div>
    </div>
  `, "set");
}

function home() {
  const top = customers.slice(0, 3);
  const sales = state.todaySales;
  const deltaPct = (((sales - 1247500) / 1247500) * 100).toFixed(1);
  return page("今日のおすすめ", `
    <div class="card stack">
      <div class="row">
        <span class="badge ai">AIから</span>
        <span class="muted">${formatTime(new Date())} 更新</span>
      </div>
      <div class="hero-num">${num.format(3)}<span class="hero-unit">名</span></div>
      <p class="muted">今夜までに連絡しておくと、売上につながりやすい人たちです。</p>
      <div class="strat-bar">
        <span class="muted">AIのおすすめ度</span>
        <strong>87%</strong>
        <div class="bar" style="grid-column:1/-1"><i style="--w:87%"></i></div>
      </div>
    </div>
    <div class="kpis">
      <div class="kpi live">
        <span>今月の売上</span>
        <strong>${shortYen(sales)}</strong>
        <span class="delta">${deltaPct >= 0 ? "+" : ""}${deltaPct}%</span>
      </div>
      <div class="kpi live">
        <span>来そうな人</span>
        <strong>${state.todayVisits}名</strong>
        <span class="delta">+2</span>
      </div>
      <div class="kpi live">
        <span>気にかける</span>
        <strong>${state.riskCount}名</strong>
        <span class="delta down">+1</span>
      </div>
    </div>
    <div class="card stack">
      <div class="row"><strong>今夜だれが来るかな？</strong><span class="badge ai">AIの予想</span></div>
      <div class="timeline">
        ${tonightPredictions.map((p) => `
          <span class="t-time">${p.hour}</span>
          <div class="t-bar ${p.isNow ? "now" : ""}">
            <i style="--w:${Math.max(p.prob, 6)}%"></i>
            <span class="t-name">${p.name}${p.prob ? ` · ${p.prob}%` : ""}</span>
          </div>
        `).join("")}
      </div>
      <p class="muted" style="font-size:11px">最近90日の曜日・時間と、LINEの返信から計算してます</p>
    </div>
    ${preparedActionQueue()}
    <div class="stack">${top.map(customerItem).join("")}</div>
    <button class="btn-secondary" data-action="nav" data-value="s18">今週のおすすめを見る →</button>
  `, "home");
}

function preparedActionQueue() {
  return `
    <div class="card stack">
      <div class="row">
        <strong>AIが先まわりで準備したこと</strong>
        <span class="badge ai">自動でつくった</span>
      </div>
      ${preparedActions.map((item) => `
        <button class="item compact" data-action="nav" data-value="${item.screen}">
          <div class="avatar">${item.badge.slice(0, 1)}</div>
          <div class="copy">
            <strong>${item.title}</strong>
            <p>${item.detail}</p>
          </div>
          <span class="badge ${item.badge === "税務" ? "success" : item.badge === "LINE" ? "info" : "vip"}">${item.value}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function customerList() {
  const query = state.query.trim();
  const list = customers.filter((item) => !query || item.name.includes(query) || item.segment.includes(query));
  return page("お客さんリスト", `
    <input id="customerSearch" class="input" value="${escapeHTML(state.query)}" placeholder="名前・タイプで検索">
    <div class="cluster">
      <span class="chip vip">大切 ${customers.filter((x) => x.segment === "VIP").length}</span>
      <span class="chip danger">気にかける ${customers.filter((x) => x.segment === "気にかける").length}</span>
      <span class="chip">全 ${customers.length}</span>
      <span class="chip ai">AIが並び替え</span>
    </div>
    <div class="stack">${list.map(customerItem).join("")}</div>
  `, "home");
}

function customerItem(item) {
  return `
    <button class="item tap" data-action="customer" data-value="${item.id}" data-customer-id="${item.id}">
      <div class="avatar">${item.name.slice(0, 1)}</div>
      <div class="copy">
        <strong>${item.name}</strong>
        <p>${item.note}</p>
      </div>
      <span class="badge ${segmentBadgeClass(item.segment)}">${segmentLabel(item.segment)}</span>
    </button>
  `;
}

function selectedCustomer() {
  return customers.find((item) => item.id === state.selectedCustomerId) || customers[0];
}

function customerDetail() {
  const customer = selectedCustomer();
  const visitData = visitSparkData(customer);
  const nextDays = Math.max(1, Math.round((customer.lastDays || 7) * 0.95) - customer.lastDays + 7);
  return page(customer.name, `
    <div class="card stack" data-customer-id="${customer.id}">
      <div class="row">
        <div class="avatar lg ${customer.segment === "VIP" ? "vip-glow" : ""}">${customer.name.slice(0, 1)}</div>
        <span class="badge ${segmentBadgeClass(customer.segment)}">${segmentLabel(customer.segment)}</span>
      </div>
      <div>
        <h2 style="margin:0">${customer.name}</h2>
        <p class="muted">${customer.note}</p>
      </div>
      <div class="row">
        <span class="muted">来店ペース (12ヶ月)</span>
        ${sparkline(visitData, 120, 28)}
      </div>
    </div>
    <div class="kpis">
      <div class="kpi"><span>これまでの売上</span><strong>${shortYen(customer.sales)}</strong></div>
      <div class="kpi"><span>来店</span><strong>${customer.visits}回</strong></div>
      <div class="kpi"><span>足が遠のき度</span><strong>${customer.risk}%</strong></div>
    </div>
    <div class="countdown">
      <span class="cd-label">AIの予想 · 次に来るまで</span>
      <span class="cd-value">${Math.max(1, nextDays)}日</span>
      <span class="cd-meta">過去のペースと曜日のクセから計算 (自信度 74%)</span>
    </div>
    <div class="card stack">
      <strong>よく出る話題</strong>
      ${topicCloudHTML(customer.id)}
      <p class="muted" style="font-size:11px">最近90日の会話・音声メモから取り出し</p>
    </div>
    <div class="ai-bubble">
      <div class="ai-bubble-head">AI · 次のおすすめ動き</div>
      <div class="ai-text">${weeklyStrategy.focusCustomers.find((x) => x.id === customer.id)?.reason || "次の来店につながるよう、軽くひとこと連絡してみるのがおすすめ。"}</div>
      <div class="row" style="margin-top:10px">
        <button class="btn-primary" data-action="nav" data-value="s07">LINEの文をつくる</button>
        <span class="badge success">自信度 ${(weeklyStrategy.focusCustomers.find((x) => x.id === customer.id)?.success) || 72}%</span>
      </div>
    </div>
    <div class="card stack">
      <strong>接客の記録</strong>
      ${["2026/4/30 新しい時計の話で盛り上がり", "2026/4/18 週末の同伴に前向き", "2026/4/02 短い時間で帰る"].map((text) => `<div class="row"><span class="muted">${text}</span><span class="chip">記録</span></div>`).join("")}
    </div>
  `, "home");
}

function cardScan() {
  return page("名刺カメラ", `
    <div class="camera">
      <div class="bizcard-stage">
        <div class="bizcard">
          <div class="bizcard-bg-mark">G・H・D</div>
          <div class="bizcard-head">
            <div class="bizcard-mark">GHD</div>
            <div class="bizcard-company">
              <span class="bizcard-en">GINZA HOLDINGS Co., Ltd.</span>
              <strong class="bizcard-jp">株式会社&nbsp;銀座ホールディングス</strong>
            </div>
          </div>
          <div class="bizcard-line"></div>
          <div class="bizcard-body">
            <span class="bizcard-title">代表取締役 社長</span>
            <strong class="bizcard-name">中島 健一</strong>
            <span class="bizcard-name-en">Ken'ichi&nbsp;NAKAJIMA</span>
          </div>
          <div class="bizcard-foot">
            <div>
              <span>〒104-0061</span>
              <span>東京都中央区銀座 6-10-1 GINZA SIX 32F</span>
            </div>
            <div>
              <span>TEL&nbsp;&nbsp;03-3571-5678</span>
              <span>FAX&nbsp;&nbsp;03-3571-5679</span>
              <span>k.nakajima@ginza-hd.co.jp</span>
            </div>
          </div>
        </div>
        <p class="bizcard-guide">名刺を枠に合わせてね</p>
      </div>
    </div>
    <div class="ai-bubble">
      <div class="ai-bubble-head">AI · 名刺の読み取り</div>
      <div class="pipeline" id="cardPipeline">
        <div class="step"><span class="check">…</span><span>文字を読み取り</span><span class="conf">—</span></div>
        <div class="step"><span class="check">…</span><span>会社情報を確認</span><span class="conf">—</span></div>
        <div class="step"><span class="check">…</span><span>お役職を推定</span><span class="conf">—</span></div>
        <div class="step"><span class="check">…</span><span>過去の名刺と照合</span><span class="conf">—</span></div>
      </div>
      <div class="row" style="margin-top:10px"><strong>中島 健一 / 経営者</strong><span class="badge success">合ってる度 96%</span></div>
      <button class="btn-primary" data-action="customer" data-value="c025" style="margin-top:10px">お客さんとして保存</button>
    </div>
  `, "home");
}

function voiceMemo() {
  const bars = Array.from({ length: 28 }, (_, i) => {
    const h = 18 + Math.abs(Math.sin(i * 1.7)) * 70;
    return `<div class="bar" style="animation-delay:${(i % 14) * 60}ms; height:${h}%"></div>`;
  }).join("");
  return page("音声メモ", `
    <div class="card stack" style="text-align:center">
      <div class="hero-num">00:42</div>
      <div class="waveform">${bars}</div>
      <p class="muted" id="voiceLive" style="text-align:left; padding: 0 6px;">​</p>
      <button class="btn-primary">きれいなメモにする</button>
    </div>
    <div class="ai-bubble">
      <div class="ai-bubble-head">AI · 話しながら整理</div>
      <div class="pipeline" id="voicePipeline">
        <div class="step"><span class="check">…</span><span>声を文字にする</span><span class="conf">—</span></div>
        <div class="step"><span class="check">…</span><span>誰の話か特定</span><span class="conf">—</span></div>
        <div class="step"><span class="check">…</span><span>話題を取り出し</span><span class="conf">—</span></div>
        <div class="step"><span class="check">…</span><span>次の動きを提案</span><span class="conf">—</span></div>
      </div>
      <div class="cluster" style="margin-top:8px" id="voiceChips"></div>
    </div>
  `, "home");
}

function draft() {
  const customer = selectedCustomer();
  const drafts = [
    `${customer.name.split(" ")[0]}さん、お疲れさまです。先日の時計のお話、すごく印象に残っています。来週末もしお時間合えば、ゆっくりお話できたら嬉しいです。`,
    `${customer.name.split(" ")[0]}さん、この前はありがとうございました。新しい時計の話、もっと聞きたかったです。近いうちに軽くご飯でもどうですか？`,
    `${customer.name.split(" ")[0]}さん、今週もお忙しいと思いますが無理しすぎないでくださいね。落ち着いたら少しだけお顔見られたら嬉しいです。`
  ];
  return page("AIが文をつくる", `
    <div class="card stack">
      <div class="row">
        <span class="badge ai">LINE用 · ${customer.name}</span>
        <button class="btn-secondary" data-action="regen-draft" style="min-height:32px;font-size:11px">↻ つくり直し</button>
      </div>
      <p class="muted">過去の会話・来店ペース・避けたい話題に合わせて作ってます。</p>
    </div>
    <div class="ai-bubble">
      <div class="ai-bubble-head">AI · 文をつくる流れ</div>
      <div class="pipeline" id="genPipeline">
        <div class="step"><span class="check">…</span><span>過去の会話を見る</span><span class="conf">—</span></div>
        <div class="step"><span class="check">…</span><span>NGな話題をチェック</span><span class="conf">—</span></div>
        <div class="step"><span class="check">…</span><span>やわらかい言い方に調整</span><span class="conf">—</span></div>
        <div class="step"><span class="check">…</span><span>3パターンでつくる</span><span class="conf">—</span></div>
      </div>
    </div>
    ${drafts.map((text, index) => `
      <div class="ai-bubble">
        <div class="ai-bubble-head">パターン ${index + 1} · ${index === 0 ? "本命" : index === 1 ? "ちょい押し" : "ひかえめ"}</div>
        <div class="ai-text" data-typing="${escapeHTML(text)}" data-delay="${index * 280}">​</div>
        <div class="row" style="margin-top:10px">
          <span class="badge ${index === 0 ? "vip" : "info"}">おすすめ度 ${[92, 78, 64][index]}%</span>
          <button class="btn-secondary" style="min-height:34px">コピー</button>
        </div>
      </div>
    `).join("")}
  `, "line");
}

function visitRecord() {
  const seg = inferSegment(state.visitAmount);
  return page("来店の記録", `
    <div class="card stack">
      <label><span class="label">お客さん</span><select class="select"><option>山田 隆</option><option>佐藤 雅彦</option></select></label>
      <label><span class="label">金額</span><input class="input" id="visitAmount" inputmode="numeric" value="${state.visitAmount}"></label>
      <div class="row">
        <span class="muted">AIの予想ランク</span>
        <span id="visitSegLabel" class="badge ai">${seg.label}</span>
      </div>
      <div class="cluster" id="visitChips">${seg.chips.map((c, i) => `<span class="chip ${c.hot ? "vip" : ""}">${c.label}</span>`).join("")}</div>
      <textarea class="textarea">新しい時計を買った話。来週末の同伴に乗り気でした。</textarea>
      <button class="btn-primary">保存する</button>
    </div>
    <div class="ai-bubble">
      <div class="ai-bubble-head">AI · 入力中の提案</div>
      <div class="ai-text" id="visitHint">${seg.hint}</div>
    </div>
  `, "home");
}

function inferSegment(amount) {
  const a = parseInt(amount, 10) || 0;
  if (a >= 200000) return {
    label: "大切なお客さん · 同伴+ボトル",
    chips: [{ label: "同伴", hot: true }, { label: "ボトル", hot: true }, { label: "いい席" }],
    hint: "大切なお客さんの単価。次に来るまでは5〜7日と短いので、<strong>5/3〜5/5</strong>の連絡がおすすめ。"
  };
  if (a >= 100000) return {
    label: "上位 · 同伴 or ボトル",
    chips: [{ label: "同伴", hot: true }, { label: "本指名", hot: true }, { label: "ボトル" }],
    hint: "この金額帯と同伴回数から、次に来るまでは7〜10日くらい。<strong>5/7あたり</strong>の連絡がおすすめ。"
  };
  if (a >= 50000) return {
    label: "ふつう · 本指名",
    chips: [{ label: "本指名", hot: true }, { label: "ハーフ" }, { label: "場内" }],
    hint: "ふつうの単価。次に来るまでは10〜14日くらい。<strong>5/10あたり</strong>に軽くひとことがおすすめ。"
  };
  return {
    label: "ライト · 場内 or 同卓",
    chips: [{ label: "場内", hot: true }, { label: "ハーフ" }],
    hint: "短い時間の来店パターン。次まで14日以上空くかも。<strong>近況のひとこと</strong>だけにしておこう。"
  };
}

function settings() {
  return page("設定", `
    <div class="card stack">
      ${["Face ID", "通知をかくす", "こっそりモード", "AIの文のやわらかさ", "freee連携", "LINE連携"].map((label, i) => `
        <div class="row"><strong>${label}</strong><span class="badge ${i < 4 ? "success" : "info"}">${i < 4 ? "ON" : "つながってる"}</span></div>
      `).join("")}
    </div>
    <a class="btn-secondary" href="./btob/">オーナー画面 (PC) へ →</a>
  `, "set");
}

function decoy() {
  return `
    <div class="light-page stack">
      <div class="nav-bar" style="background:#f5f3ee"><button class="icon-btn">←</button><div class="nav-title">家計簿</div><button class="icon-btn">＋</button></div>
      <div class="card light-card stack">
        <span class="muted">4月のおこづかい</span>
        <div class="hero-num" style="background:linear-gradient(180deg,#3a322a,#7a6b58);-webkit-background-clip:text;background-clip:text;color:transparent">¥286,400</div>
      </div>
      ${["食費", "交通費", "美容", "通信費"].map((label, i) => `<div class="item light-card"><div class="avatar">${label[0]}</div><div class="copy"><strong>${label}</strong><p>毎月のお買い物</p></div><span>¥${[84000, 42000, 124000, 18000][i].toLocaleString()}</span></div>`).join("")}
    </div>
  `;
}

function widget() {
  const now = new Date();
  const t = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  return `
    <div class="page" style="justify-content:center">
      <div class="card stack">
        <div class="row"><span id="widgetClock" style="font-family:var(--mono);font-size:14px">${t}</span><span class="badge ai">AIが見てるよ</span></div>
        <div class="item"><div class="avatar vip-glow">山</div><div class="copy"><strong>山田 隆さん来店中</strong><p>長押しで記録</p></div><span>¥128,000</span></div>
        <div class="row" style="font-size:11px;color:var(--text-secondary)">
          <span>AIが接客の記録を下書き中…</span>
        </div>
        <button class="btn-primary" data-action="nav" data-value="s08">記録を開く</button>
      </div>
    </div>
  `;
}

function taxOverview() {
  return page("確定申告 2026年", `
    <div class="cluster"><span class="chip vip">ざっくり</span><span class="chip">入ってきたお金</span><span class="chip">使ったお金</span><span class="chip">申告書</span></div>
    <div class="kpis">
      <div class="kpi live"><span>入ってくる</span><strong>¥1,425万</strong><span class="delta">+12.4%</span></div>
      <div class="kpi"><span>使ったお金</span><strong>¥318万</strong></div>
      <div class="kpi"><span>税金がかかる</span><strong>¥1,107万</strong></div>
    </div>
    <div class="card stack">
      <div class="row"><strong>月ごとの動き</strong><span class="badge success">freeeと同期 2時間前</span></div>
      <div class="chart drawn">${lineChart([82, 88, 92, 105, 98, 112, 126, 121, 132, 138, 142, 151])}</div>
    </div>
    <button class="btn-primary" data-action="nav" data-value="s14">申告書を見てみる →</button>
  `, "tax");
}

function receiptScan() {
  return page("レシートを撮る", `
    <div class="camera">
      <div class="receipt-box" style="background:#f6efe3;color:#221c16; width:220px; min-height:250px; padding:18px">
        <strong>渋谷美容室サロン</strong><br>
        2026/4/28<br><br>
        Cut &amp; Treatment<br>
        Total ¥18,500
      </div>
    </div>
    <div class="ai-bubble">
      <div class="ai-bubble-head">AI · 読み取り + 自動でカテゴリ分け</div>
      <div class="row"><span>お店</span><strong>渋谷美容室サロン</strong></div>
      <div class="row"><span>金額</span><strong>¥18,500</strong></div>
      <div class="row"><span>日付</span><strong>2026/4/28</strong></div>
      <div class="cluster" style="margin-top:6px">${["美容", "衣装", "移動", "通信費", "交際費", "その他"].map((x, i) => `<span class="chip ${i === 0 ? "ai" : ""}">${i === 0 ? "AIの予想: " : ""}${x}</span>`).join("")}</div>
      <button class="btn-primary" style="margin-top:10px">保存する</button>
    </div>
  `, "tax");
}

function monthlyTax() {
  const categories = [
    ["美容", 124000, 41.6, "#C97B4F"], ["衣装", 86000, 28.8, "#6B8E5A"], ["移動", 48500, 16.3, "#5C7A99"],
    ["通信費", 18000, 6.0, "#C9A96E"], ["交際費", 12500, 4.2, "#8B5A6B"], ["その他", 9400, 3.1, "#7A6B58"]
  ];
  return page("2026年4月", `
    <div class="row"><button class="icon-btn">‹</button><strong>2026年4月</strong><button class="icon-btn">›</button></div>
    <div class="anomaly-alert">
      <div class="ico">!</div>
      <div>
        <strong>AIから · 衣装が大きいかも</strong>
        <p>4/16 Christian Louboutin ¥84,000 が今月の中ではかなり大きめ (ふだんの3.2倍)。プライベートのお買い物だったら、経費から外す相談もしてみよう。</p>
      </div>
    </div>
    <div class="stack">
      <div class="card row"><span>売上</span><strong>¥1,247,500 <span class="badge success">+12.4%</span></strong></div>
      <div class="card row"><span>使ったお金</span><strong>¥298,400 <span class="badge success">-3.2%</span></strong></div>
      <div class="card row"><span>手元に残るお金</span><strong>¥949,100</strong></div>
    </div>
    <div class="card donut-wrap">
      ${donut(categories)}
      <div class="stack">${categories.map(([name, amount, pct]) => `<div class="row"><span>${name}</span><strong>${yen.format(amount)} ${pct}%</strong></div>`).join("")}</div>
    </div>
    <div class="stack">${expenses.slice(0, 10).map((e) => `<div class="item"><div class="avatar">${e.category[0]}</div><div class="copy"><strong>${e.vendor}</strong><p>${e.date} / ${e.category}</p></div><span>${yen.format(e.amount)}</span></div>`).join("")}</div>
  `, "tax");
}

function taxForm() {
  return page("申告書プレビュー", `
    <div class="row"><span class="badge success">freeeとつながってます</span><span class="chip">2026年</span></div>
    <div class="paper">
      <h3>所得税青色申告決算書</h3>
      <hr>
      ${[
        ["お仕事で稼いだお金", "¥11,070,000"],
        ["青色申告特別控除", "¥650,000"],
        ["税金がかかる金額", "¥10,420,000"],
        ["所得税 (だいたい)", "¥2,142,200"],
        ["住民税 (だいたい)", "¥1,042,000"]
      ].map(([label, value]) => `<div class="row" style="border-bottom:1px solid #d8d0c2;padding:12px 0"><span>${label}</span><strong>${value}</strong></div>`).join("")}
      <p style="margin-top:24px">Project Velvetでまとめた売上・お買い物データを連携済み。</p>
    </div>
    <button class="btn-primary">freeeで確定申告を仕上げる</button>
  `, "tax");
}

function lineBroadcast() {
  const selected = customers.slice(0, 8);
  return page("LINEまとめ送信", `
    <div class="card stack">
      <strong>① だれに送る？</strong>
      <div class="cluster">${["今月お誕生日 6名", "30日以上来てない 8名", "大切な人 3名", "自分で選ぶ"].map((x, i) => `<span class="chip ${i === 1 ? "vip" : ""}">✓ ${x}</span>`).join("")}</div>
      <span class="badge info">8名に送ります</span>
      <div class="cluster">${selected.map((x) => `<span class="chip">✓ ${x.name.split(" ")[0]}</span>`).join("")}</div>
    </div>
    <div class="card stack">
      <strong>② どの文を使う？</strong>
      <div class="cluster">${["お久しぶり", "お誕生日おめでとう", "同伴のお誘い", "ご来店ありがとう"].map((x, i) => `<span class="chip ${i === 0 ? "vip" : ""}">${x}</span>`).join("")}</div>
    </div>
    <div class="ai-bubble">
      <div class="ai-bubble-head">③ AIが一人ずつ調整</div>
      ${selected.slice(0, 3).map((x) => `<p style="margin:6px 0"><strong>${x.name}さん向け</strong><br><span class="muted">最近お忙しいと思いますが、少しだけ近況聞けたらうれしいです。</span></p>`).join("")}
      <p class="muted" style="font-size:11px">LINEアプリを開いてから送信ボタンを押してね。</p>
    </div>
    <div class="card stack">
      <div class="row"><strong>④ 送る</strong><span class="badge success">${state.lineProgress}/8件 既読</span></div>
      <div class="progress"><span style="width:${(state.lineProgress / 8) * 100}%"></span></div>
      <div class="send-traveler">${[1,2,3,4,5,6,7,8].map((i) => {
        const cls = i <= state.lineProgress ? "sent" : (i === state.lineProgress + 1 ? "active" : "");
        const initial = customers[i - 1].name.slice(0, 1);
        const mark = cls === "sent" ? "✓" : cls === "active" ? "⏳" : initial;
        return `<div class="slot ${cls}" title="${customers[i - 1].name}">${mark}</div>`;
      }).join("")}</div>
      <button class="btn-primary" data-action="line-progress">${state.lineProgress >= 8 ? "ぜんぶ送り終わり" : "次の1人へ送る"}</button>
    </div>
  `, "line");
}

function templates() {
  const items = [
    ["お久しぶり", "最近お忙しいと思いますが、体調崩していませんか？", "2026/4/25", 71],
    ["お誕生日おめでとう", "少し早いですが、お誕生日おめでとうございます。", "2026/4/18", 88],
    ["同伴のお誘い", "来週あたり、軽くご飯でもどうですか？", "2026/4/12", 64],
    ["ご来店ありがとう", "先日はありがとうございました。短い時間でしたが楽しかったです。", "2026/4/04", 79]
  ];
  return page("よく使う文", `
    <button class="btn-primary">+ 新しく作る</button>
    <div class="stack">${items.map(([title, body, date, rate]) => `
      <div class="card stack">
        <div class="row"><strong>${title}</strong><span class="chip">${date}</span></div>
        <p>${body}</p>
        <div class="strat-bar">
          <span class="muted">既読率 (最近30日)</span>
          <strong>${rate}%</strong>
          <div class="bar" style="grid-column:1/-1"><i style="--w:${rate}%"></i></div>
        </div>
        <button class="btn-secondary">この文をもっと良くする</button>
      </div>
    `).join("")}</div>
  `, "line");
}

function calendar() {
  const days = Array.from({ length: 35 }, (_, index) => index + 1);
  const cd = shiftCountdown();
  return page("予定カレンダー", `
    <div class="cluster"><span class="chip vip">月</span><span class="chip">週</span><span class="chip">日</span></div>
    <div class="countdown">
      <span class="cd-label">${cd.label}</span>
      <span class="cd-value" id="shiftCountdown">${cd.value}</span>
      <span class="cd-meta">${cd.meta}</span>
    </div>
    <div class="calendar">${days.map((day) => `<div class="day ${[4, 8, 12, 17, 24, 28].includes(day) ? "has" : ""} ${day === 28 ? "today" : ""}">${day}<br>${[4, 8, 12, 17, 24, 28].includes(day) ? "• •" : ""}</div>`).join("")}</div>
    <div class="card stack">
      <strong>4月28日の予定</strong>
      <div class="item"><div class="avatar vip-glow">山</div><div class="copy"><strong>同伴: 山田 隆さん</strong><p>18:00 銀座 寿司 銀座（仮）</p></div><span>予約</span></div>
      <div class="item"><div class="avatar">出</div><div class="copy"><strong>出勤</strong><p>21:00〜26:00</p></div><span>確定</span></div>
      <button class="btn-primary">+ 予定を追加</button>
    </div>
  `, "line");
}

function shiftCountdown() {
  const now = new Date();
  const shiftStart = new Date(now);
  shiftStart.setHours(21, 0, 0, 0);
  const shiftEnd = new Date(now);
  shiftEnd.setHours(2, 0, 0, 0);
  if (now.getHours() < 3) {
    shiftStart.setDate(shiftStart.getDate() - 1);
  } else {
    shiftEnd.setDate(shiftEnd.getDate() + 1);
  }
  let label = "出勤まで";
  let target = shiftStart;
  if (now >= shiftStart && now <= shiftEnd) {
    label = "退勤まで";
    target = shiftEnd;
  } else if (now > shiftEnd) {
    target = new Date(shiftStart);
    target.setDate(target.getDate() + 1);
  }
  const diff = Math.max(0, target - now);
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  return {
    label,
    value: `${h}h ${String(m).padStart(2, "0")}m`,
    meta: "今夜 21:00 出勤予定 / 4件の予約あり"
  };
}

function strategyWeek() {
  return page("今週のおすすめ", `
    <div class="row"><span class="badge ai">AIのおすすめ</span><span class="chip">${weeklyStrategy.weekOf}</span></div>
    <div class="ai-bubble">
      <div class="ai-bubble-head">今週のポイント</div>
      <div class="ai-text">${weeklyStrategy.summary}</div>
    </div>
    <div class="stack">${weeklyStrategy.focusCustomers.map((focus, index) => {
      const customer = customers.find((item) => item.id === focus.id);
      return `
        <button class="item" data-action="strategy" data-value="${focus.id}">
          <div class="avatar">${index + 1}</div>
          <div class="copy">
            <strong>${customer.name} / ${focus.action}</strong>
            <div class="strat-bar" style="margin-top:4px">
              <span class="muted">うまくいく確率</span><strong>${focus.success}%</strong>
              <div class="bar" style="grid-column:1/-1"><i style="--w:${focus.success}%"></i></div>
            </div>
            <p style="margin-top:4px">売上アップ見込み ${shortYen(focus.revenue)}</p>
          </div>
          <span class="badge vip">くわしく →</span>
        </button>
      `;
    }).join("")}</div>
    <div class="kpis">
      <div class="kpi"><span>来そうな人</span><strong>18名</strong><span class="delta">+2</span></div>
      <div class="kpi"><span>売上の予想</span><strong>¥118万〜</strong><span class="delta">+13.4%</span></div>
      <div class="kpi"><span>大事な日</span><strong>2件</strong></div>
    </div>
  `, "ai");
}

function strategyDetail() {
  const customer = selectedCustomer();
  const focus = weeklyStrategy.focusCustomers.find((item) => item.id === customer.id) || weeklyStrategy.focusCustomers[0];
  const actions = [
    { label: "来週末の同伴をお誘い", rate: 68 },
    { label: "ボトル3本目をすすめてみる", rate: 45 },
    { label: "お友達の紹介をお願い", rate: 22 }
  ];
  return page("おすすめ詳細", `
    <div class="card stack">
      <div class="row"><div class="avatar lg ${customer.segment === "VIP" ? "vip-glow" : ""}">${customer.name.slice(0, 1)}</div><span class="badge vip">${customer.name}</span></div>
      <p>${customer.note}</p>
    </div>
    <div class="card ring-wrap">
      ${ringSvg(focus.success)}
      <div>
        <strong>${focus.action}</strong>
        <p class="muted" style="margin-top:4px">${focus.reason}</p>
      </div>
    </div>
    <div class="card stack">
      <strong>通うペースの分析</strong>
      <p class="muted">最近90日: 来店12回、平均で7.5日に1回。曜日は金曜が42%。</p>
      <div class="kpis">
        <div class="kpi"><span>足が遠のき度</span><strong>${customer.risk}%</strong></div>
        <div class="kpi"><span>単価の動き</span><strong>+18%</strong></div>
        <div class="kpi"><span>金曜の来店</span><strong>42%</strong></div>
      </div>
    </div>
    <div class="ai-bubble">
      <div class="ai-bubble-head">AI · おすすめの動き (Top 3)</div>
      ${actions.map((a, i) => `
        <div class="strat-bar" style="margin:6px 0">
          <span>${i + 1}. ${a.label}</span><strong>${a.rate}%</strong>
          <div class="bar" style="grid-column:1/-1"><i style="--w:${a.rate}%"></i></div>
        </div>
      `).join("")}
      <button class="btn-primary" data-action="nav" data-value="s07" style="margin-top:8px">LINEの文をつくる</button>
    </div>
  `, "ai");
}

function whatIf() {
  const selected = whatIfScenarios.find((item) => item.id === state.scenarioId) || whatIfScenarios[0];
  return page("売上おためし", `
    <div class="stack">
      ${whatIfScenarios.map((item) => `
        <button class="item scenario-card ${item.id === selected.id ? "active" : ""}" data-action="scenario" data-value="${item.id}">
          <div class="avatar">${item.id === selected.id ? "★" : "?"}</div>
          <div class="copy"><strong>${item.title}</strong><p>6ヶ月先までの売上の動きを予想</p></div>
          <span class="chip ${item.id === selected.id ? "ai" : ""}">${item.id === selected.id ? "選んでる" : "選ぶ"}</span>
        </button>
      `).join("")}
    </div>
    <div class="card stack">
      <div class="row"><strong>結果</strong><span class="badge ${state.simulating ? "warn" : "success"}">${state.simulating ? "考え中…" : "できた"}</span></div>
      <div class="chart ${state.simulating ? "" : "drawn"}">${lineCompare(selected.current, selected.simulated)}</div>
      <div class="kpis">
        <div class="kpi live"><span>売上の変化</span><strong>+${shortYen(selected.revenueImpact)}</strong><span class="delta">/月</span></div>
        <div class="kpi live"><span>手元に残る</span><strong>+${shortYen(selected.netIncomeImpact)}</strong><span class="delta">/月</span></div>
        <div class="kpi"><span>必要な動き</span><strong>${selected.actions.length}個</strong></div>
      </div>
      <p class="muted">${selected.actions.join("、")}</p>
      <p class="muted" style="font-size:11px">これは過去6ヶ月のデータをもとにした予想です。</p>
    </div>
  `, "ai");
}

/* ============ Charts ============ */

function lineChart(values) {
  const points = scalePoints(values, 320, 120);
  return `<svg viewBox="0 0 340 150" role="img" aria-label="line chart">
    <defs>
      <linearGradient id="lcfill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#C97B4F" stop-opacity=".34"/>
        <stop offset="100%" stop-color="#C97B4F" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <path d="M10 130H330 M10 95H330 M10 60H330" stroke="rgba(232,229,221,.12)" />
    <polygon class="sim-line" fill="url(#lcfill)" stroke="none" points="${points} 330,135 10,135" />
    <polyline class="sim-line" fill="none" stroke="#C97B4F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="${points}" />
    ${points.split(" ").map((p) => `<circle cx="${p.split(",")[0]}" cy="${p.split(",")[1]}" r="3" fill="#E8E5DD" />`).join("")}
  </svg>`;
}

function lineCompare(a, b) {
  return `<svg viewBox="0 0 340 160" role="img" aria-label="what if chart">
    <defs>
      <linearGradient id="cmpfill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#C97B4F" stop-opacity=".28"/>
        <stop offset="100%" stop-color="#C97B4F" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <path d="M10 135H330 M10 100H330 M10 65H330 M10 30H330" stroke="rgba(232,229,221,.1)" />
    <polyline class="sim-line" fill="none" stroke="#5C7A99" stroke-width="2.5" stroke-dasharray="4 4" points="${scalePoints(a, 320, 120)}" />
    <polygon class="sim-line accent-line" fill="url(#cmpfill)" stroke="none" points="${scalePoints(b, 320, 120)} 330,135 10,135" />
    <polyline class="sim-line accent-line" fill="none" stroke="#C97B4F" stroke-width="3.5" points="${scalePoints(b, 320, 120)}" />
    <text x="18" y="22" fill="#A8A39A" font-size="11">今 vs やってみた後</text>
  </svg>`;
}

function scalePoints(values, width, height) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  return values.map((value, index) => {
    const x = 10 + index * (width / (values.length - 1));
    const y = 135 - ((value - min) / Math.max(1, max - min)) * height;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}

function donut(items) {
  let offset = 25;
  const circles = items.map(([, , pct, color]) => {
    const dash = `${pct} ${100 - pct}`;
    const circle = `<circle cx="70" cy="70" r="45" fill="none" stroke="${color}" stroke-width="18" stroke-dasharray="${dash}" stroke-dashoffset="-${offset}" />`;
    offset += pct;
    return circle;
  }).join("");
  return `<svg viewBox="0 0 140 140" role="img" aria-label="donut chart">${circles}<circle cx="70" cy="70" r="28" fill="#1A2128" /><text x="70" y="76" text-anchor="middle" fill="#E8E5DD" font-size="14">出費</text></svg>`;
}

function ringSvg(pct) {
  const len = 264;
  const offset = len - (len * pct) / 100;
  return `
    <div class="ring">
      <svg viewBox="0 0 100 100">
        <circle class="ring-bg" cx="50" cy="50" r="42" fill="none" stroke-width="8" />
        <circle class="ring-fg" cx="50" cy="50" r="42" fill="none" stroke-width="8" stroke-dashoffset="${offset}" />
      </svg>
      <div class="ring-label"><div><strong>${pct}%</strong><span>うまくいく</span></div></div>
    </div>
  `;
}

/* ============ Live Behaviors ============ */

function startStatusClock() {
  const tick = () => {
    const now = new Date();
    const el = document.getElementById("statusClock");
    if (el) el.textContent = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  };
  tick();
  setInterval(tick, 30 * 1000);
}

function startAIPulse() {
  const taskEl = document.getElementById("aiTask");
  const subEl = document.getElementById("aiSubtask");
  const opsEl = document.getElementById("aiOps");
  if (!taskEl) return;
  const update = () => {
    const t = aiTasks[state.aiTaskIndex % aiTasks.length];
    taskEl.textContent = t.task + "…";
    subEl.textContent = t.sub;
    opsEl.textContent = `${num.format(t.ops + Math.floor(Math.random() * 24))}件チェック`;
    state.aiTaskIndex++;
  };
  update();
  setInterval(update, 4200);
  setInterval(() => {
    if (opsEl) opsEl.textContent = `${num.format(aiTasks[(state.aiTaskIndex - 1) % aiTasks.length].ops + Math.floor(Math.random() * 32))}件チェック`;
  }, 700);
}

function startProactiveToasts() {
  const toast = document.getElementById("toast");
  const titleEl = document.getElementById("toastTitle");
  const bodyEl = document.getElementById("toastBody");
  if (!toast) return;
  const show = () => {
    const idx = state.toastIndex % proactiveQueue.length;
    const item = proactiveQueue[idx];
    state.toastIndex++;
    titleEl.textContent = `AI · ${item.title}`;
    bodyEl.textContent = item.body;
    toast.querySelector(".toast-icon").textContent = item.icon;
    toast.classList.add("show");
    if (item.tab && tabFromScreen(state.screen) !== item.tab) {
      state.unreadTabs[item.tab] = true;
      const tabbar = document.querySelector(".tabbar");
      if (tabbar) {
        const buttons = tabbar.querySelectorAll("button");
        const tabIdx = ["home","tax","line","ai","set"].indexOf(item.tab);
        if (tabIdx >= 0 && buttons[tabIdx]) buttons[tabIdx].setAttribute("data-badge", "1");
      }
    }
    if (item.customerId) flashCustomerFocus(item.customerId);
    window.setTimeout(() => toast.classList.remove("show"), 4200);
  };
  setTimeout(show, 1800);
  setInterval(show, 9500);
}

function startActivityFeed() {
  const events = [
    { kind: "detect", text: "鈴木さんの来店ペースがいつもより空いてる", meta: "様子を再チェック", customerId: "c004" },
    { kind: "gen",    text: "佐藤さん向けのお誕生日メッセージをつくった", meta: "うまくいく 85%", customerId: "c003" },
    { kind: "learn",  text: "今週おすすめしたい人の順番を更新", meta: "おすすめ順" },
    { kind: "sync",   text: "freeeへお買い物2件を同期", meta: "完了" },
    { kind: "detect", text: "今夜の売上予想を再計算", meta: "+5.0%" },
    { kind: "gen",    text: "LINEまとめ送信の文をつくった", meta: "8名分" },
    { kind: "learn",  text: "売上おためし計算を更新中", meta: "学習中" },
    { kind: "detect", text: "高橋さんの「車が届いたお祝い」のサインを発見", meta: "おすすめあり", customerId: "c005" },
    { kind: "gen",    text: "山田さんの会話ログから話題を整理しなおし", meta: "+1 話題", customerId: "c001" },
    { kind: "detect", text: "池田さんの週末来店の可能性が上がった", meta: "+8pt", customerId: "c020" }
  ];
  let i = 0;
  setInterval(() => {
    pushActivity(events[i % events.length]);
    i++;
  }, 5800);
}

function startLiveKpis() {
  setInterval(() => {
    state.todaySales += Math.floor(Math.random() * 8000) - 1500;
    state.todaySales = Math.max(1100000, Math.min(1480000, state.todaySales));
    if (Math.random() > 0.78) state.todayVisits = Math.max(15, Math.min(22, state.todayVisits + (Math.random() > 0.5 ? 1 : -1)));
    if (Math.random() > 0.92) state.riskCount = Math.max(2, Math.min(5, state.riskCount + (Math.random() > 0.5 ? 1 : -1)));
    renderMeta();
    if (state.screen === "s02") updateHomeLive();
  }, 3200);
}

function updateHomeLive() {
  const kpis = document.querySelectorAll(".screen .kpi.live");
  if (kpis.length < 3) return;
  const t1 = kpis[0].querySelector("strong");
  const t2 = kpis[1].querySelector("strong");
  const t3 = kpis[2].querySelector("strong");
  if (t1) animateNumber(t1, parseYenStrong(t1.textContent), state.todaySales, (v) => shortYen(v));
  if (t2) t2.textContent = `${state.todayVisits}名`;
  if (t3) t3.textContent = `${state.riskCount}名`;
}

function parseYenStrong(text) {
  if (String(text).includes("万")) {
    const compact = String(text).replace(/[^\d-]/g, "");
    return (parseInt(compact, 10) || 0) * 10000;
  }
  const m = String(text).replace(/[^\d-]/g, "");
  return parseInt(m, 10) || 0;
}

function animateNumber(el, from, to, formatter) {
  const start = performance.now();
  const dur = 600;
  const step = (now) => {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    const v = Math.round(from + (to - from) * eased);
    el.textContent = formatter(v);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function startDraftTyping() {
  const els = document.querySelectorAll(".ai-text[data-typing]");
  els.forEach((el) => {
    const text = el.dataset.typing;
    const delay = parseInt(el.dataset.delay || "0", 10);
    const speed = 18;
    el.textContent = "";
    el.classList.add("typing");
    let i = 0;
    setTimeout(() => {
      const tick = () => {
        if (i <= text.length) {
          el.textContent = text.slice(0, i);
          i++;
          setTimeout(tick, speed);
        } else {
          el.classList.remove("typing");
        }
      };
      tick();
    }, delay);
  });
}

function triggerDraftRegeneration() {
  const els = document.querySelectorAll(".ai-text[data-typing]");
  els.forEach((el) => {
    el.textContent = "";
    el.classList.add("typing");
  });
  pushActivity({ kind: "gen", text: "AIで文をつくり直し中…", meta: "generate / rerank" });
  setTimeout(() => {
    startDraftTyping();
    pushActivity({ kind: "gen", text: "AIで文をつくり直し 完了", meta: "3パターン" });
  }, 350);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
}

/* ============ Per-screen mount helpers ============ */

function kickSplashBoot() {
  setTimeout(() => {
    if (state.screen === "s00") navigate("s01");
  }, 2600);
}

function kickFaceScan() {
  const label = document.getElementById("faceLabel");
  const sub = document.getElementById("faceSub");
  const stages = [
    { label: "Face ID でログイン中…", sub: "顔のかたちをチェック", at: 200 },
    { label: "ログイン成功 ✓", sub: "ホームへ移動します", at: 1900 }
  ];
  stages.forEach((st) => setTimeout(() => {
    if (state.screen !== "s01") return;
    if (label) label.textContent = st.label;
    if (sub) sub.textContent = st.sub;
  }, st.at));
  setTimeout(() => {
    if (state.screen === "s01") navigate("s02");
  }, 2700);
}

function kickPipeline(containerId, stages, onComplete) {
  const cont = document.getElementById(containerId);
  if (!cont) return;
  const steps = Array.from(cont.querySelectorAll(".step"));
  if (steps.length === 0) return;
  let i = 0;
  steps[0].classList.add("active");
  const advance = () => {
    const prev = steps[i];
    if (!prev) return;
    prev.classList.remove("active");
    prev.classList.add("done");
    const ck = prev.querySelector(".check");
    if (ck) ck.textContent = "✓";
    const conf = prev.querySelector(".conf");
    if (conf && stages[i]) conf.textContent = stages[i].conf || "OK";
    i++;
    if (i < steps.length) {
      steps[i].classList.add("active");
      setTimeout(advance, (stages[i] && stages[i].delay) || 600);
    } else if (typeof onComplete === "function") {
      onComplete();
    }
  };
  setTimeout(advance, (stages[0] && stages[0].delay) || 600);
}

function kickVoiceTranscription() {
  const live = document.getElementById("voiceLive");
  const chips = document.getElementById("voiceChips");
  if (!live) return;
  const tokens = ["", "山田さん、", "新しい時計、", "来週末なら、", "同伴できそうって、", "言ってた…"];
  let idx = 0;
  live.textContent = "";
  live.classList.add("typing");
  const next = () => {
    if (state.screen !== "s06") return;
    if (idx >= tokens.length) {
      live.classList.remove("typing");
      kickPipeline("voicePipeline", [
        { delay: 500, conf: "98%" },
        { delay: 520, conf: "山田 隆" },
        { delay: 560, conf: "新時計 / 同伴" },
        { delay: 540, conf: "週末お誘い" }
      ], () => {
        if (chips) chips.innerHTML = `
          <span class="chip ai">お客さん: 山田 隆 (98%)</span>
          <span class="chip ai">話題: 新しい時計</span>
          <span class="chip ai">気分: いい感じ</span>
          <span class="chip ai">次の動き: 週末の同伴のお誘い</span>
        `;
      });
      return;
    }
    live.textContent += tokens[idx];
    idx++;
    setTimeout(next, 360);
  };
  setTimeout(next, 360);
}

function bindAmountSuggest() {
  const input = document.getElementById("visitAmount");
  if (!input) return;
  input.addEventListener("input", (event) => {
    state.visitAmount = parseInt(event.target.value, 10) || 0;
    const seg = inferSegment(state.visitAmount);
    const label = document.getElementById("visitSegLabel");
    const chips = document.getElementById("visitChips");
    const hint = document.getElementById("visitHint");
    if (label) label.textContent = seg.label;
    if (chips) chips.innerHTML = seg.chips.map((c) => `<span class="chip ${c.hot ? "vip" : ""}">${c.label}</span>`).join("");
    if (hint) hint.innerHTML = seg.hint;
  });
}

function flashCustomerFocus(customerId) {
  if (!customerId) return;
  document.querySelectorAll(`[data-customer-id="${customerId}"]`).forEach((el) => {
    el.classList.remove("ai-focus");
    void el.offsetWidth;
    el.classList.add("ai-focus");
    setTimeout(() => el.classList.remove("ai-focus"), 2400);
  });
}

function startWidgetClock() {
  setInterval(() => {
    const el = document.getElementById("widgetClock");
    if (!el) return;
    const now = new Date();
    el.textContent = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
  }, 1000);
  setInterval(() => {
    const el = document.getElementById("shiftCountdown");
    if (!el) return;
    const cd = shiftCountdown();
    el.textContent = cd.value;
  }, 30 * 1000);
}

/* ============ Sparkline / Topics ============ */

function sparkline(values, width = 120, height = 24) {
  if (!values || !values.length) return "";
  const min = Math.min(...values);
  const max = Math.max(...values);
  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * (width - 4) + 2;
    const y = height - 2 - ((v - min) / Math.max(1, max - min)) * (height - 6);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return `<svg class="spark" viewBox="0 0 ${width} ${height}" style="width:${width}px;height:${height}px">
    <polyline fill="none" stroke="#C97B4F" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round" points="${points}" />
  </svg>`;
}

function visitSparkData(customer) {
  const seed = parseInt(customer.id.slice(1), 10) || 1;
  return Array.from({ length: 12 }, (_, i) => {
    const base = (customer.visits || 12) / 12;
    const wave = Math.sin(seed * 0.4 + i * 0.6) * 1.6 + Math.cos(i * 1.1 + seed * 0.2) * 1.1;
    return Math.max(0, Math.round(base + wave + 2));
  });
}

function topicCloudHTML(customerId) {
  const topics = customerTopics[customerId] || [
    { t: "近況", f: 4 }, { t: "仕事", f: 3 }, { t: "趣味", f: 2 }, { t: "家族", f: 1, cold: true }
  ];
  return `<div class="topic-cloud">${topics.map((x) => `
    <span class="topic ${x.hot ? "hot" : x.cold ? "cold" : ""}">${x.t}<span class="freq">×${x.f}</span></span>
  `).join("")}</div>`;
}
