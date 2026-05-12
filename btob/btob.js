const yen = new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY", maximumFractionDigits: 0 });
const num = new Intl.NumberFormat("ja-JP");

const casts = [
  cast("cast-01", "ユイ", 27, "4年", "売上上位", 1247500, 38, 32800),
  cast("cast-02", "カオリ", 30, "6年", "売上上位", 1184000, 42, 28200),
  cast("cast-03", "ミサキ", 25, "3年", "常連", 982000, 35, 28100),
  cast("cast-04", "アヤメ", 32, "8年", "売上上位", 854000, 28, 30500),
  cast("cast-05", "サクラ", 24, "2年", "常連", 782000, 31, 25200),
  cast("cast-06", "リン", 26, "3年", "常連", 712000, 27, 26400),
  cast("cast-07", "ナナミ", 23, "2年", "常連", 684000, 29, 23600),
  cast("cast-08", "エリ", 28, "5年", "常連", 620000, 22, 28200),
  cast("cast-09", "アンナ", 22, "1年", "中堅", 548000, 18, 30400),
  cast("cast-10", "マイ", 31, "7年", "常連", 510000, 19, 26800),
  cast("cast-11", "ユカ", 25, "3年", "中堅", 482000, 17, 28400),
  cast("cast-12", "レイ", 24, "2年", "中堅", 412000, 15, 27500),
  cast("cast-13", "アオイ", 23, "1年", "中堅", 380000, 14, 27100),
  cast("cast-14", "ナオ", 21, "1年", "新人", 298000, 11, 27100),
  cast("cast-15", "ハナ", 20, "6ヶ月", "新人", 184000, 8, 23000),
  cast("cast-16", "ミオ", 22, "8ヶ月", "新人", 164000, 7, 23400),
  cast("cast-17", "リサ", 19, "3ヶ月", "新人", 98000, 5, 19600),
  cast("cast-18", "ノア", 20, "2ヶ月", "新人", 62000, 3, 20700)
];

const customers = [
  { name: "山田 隆", freq: 12, avg: 128000, owner: "ユイ", status: "大切" },
  { name: "佐藤 雅彦", freq: 10, avg: 120000, owner: "ユイ", status: "大切" },
  { name: "高橋 浩之", freq: 9, avg: 140000, owner: "カオリ", status: "大切" },
  { name: "池田 茂", freq: 8, avg: 98000, owner: "ミサキ", status: "常連" },
  { name: "吉田 信行", freq: 7, avg: 96000, owner: "アヤメ", status: "常連" },
  { name: "田中 健司", freq: 4, avg: 76000, owner: "サクラ", status: "気にかける" },
  { name: "渡辺 達也", freq: 5, avg: 68000, owner: "リン", status: "常連" },
  { name: "阿部 直人", freq: 6, avg: 72000, owner: "ナナミ", status: "常連" },
  { name: "小林 誠", freq: 4, avg: 61000, owner: "エリ", status: "中堅" },
  { name: "林 大輔", freq: 1, avg: 52000, owner: "アンナ", status: "気にかける" },
  { name: "山口 健治", freq: 1, avg: 48000, owner: "マイ", status: "ライト" },
  { name: "森 健二", freq: 2, avg: 62000, owner: "ユカ", status: "中堅" }
];

const screens = [
  view("b01", "B01", "お店の今"),
  view("b02", "B02", "キャスト一覧"),
  view("b03", "B03", "キャスト詳細"),
  view("b04", "B04", "お客様の見える化"),
  view("b05", "B05", "売上の内訳"),
  view("b06", "B06", "チームの様子"),
  view("b07", "B07", "お店の設定")
];

const opsTasks = [
  { task: "18名の売上の動きを見直し中", sub: "rank / check", ops: 1840 },
  { task: "大切なお客様428名の様子を見守り中", sub: "care / group", ops: 2210 },
  { task: "新人キャストのフォロー順を更新中", sub: "mentor / score", ops: 620 },
  { task: "金曜22時台の混み具合を計算中", sub: "forecast / seat", ops: 1180 },
  { task: "お客様の担当バランスを確認中", sub: "balance / risk", ops: 940 }
];

const opsSeed = [
  { kind: "warn", title: "ハナさんの面談を推奨", body: "指名本数は+2だが客単価が新人平均を14%下回っています。", view: "b06" },
  { kind: "risk", title: "大切なお客様3名が少し遠のき気味", body: "担当が分かれているので、お店からも一言フォローできそうです。", view: "b04" },
  { kind: "gain", title: "金曜22時台はもう1人いると安心", body: "過去4週の取りこぼし目安は ¥42万。ユイ/カオリの同時出勤がおすすめ。", view: "b05" },
  { kind: "learn", title: "紹介をお願いできそうな人を発見", body: "ユイさんの大切なお客様2名は、紹介のお願いがしやすそうです。", view: "b03", castId: "cast-01" }
];

const state = {
  view: new URLSearchParams(location.search).get("view") || "b01",
  castId: new URLSearchParams(location.search).get("cast") || "cast-01",
  liveRevenue: 38420000,
  liveVisits: 1284,
  activeCustomers: 428,
  taskIndex: 0,
  opsFeed: [...opsSeed]
};

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const value = target.dataset.value;
  if (target.dataset.action === "nav") navigate(value);
  if (target.dataset.action === "cast") {
    state.castId = value;
    navigate("b03");
  }
  if (target.dataset.action === "print") window.print();
  if (target.dataset.action === "ops") {
    const nextView = target.dataset.view || value;
    if (target.dataset.cast) state.castId = target.dataset.cast;
    navigate(nextView);
  }
});

window.addEventListener("popstate", () => {
  state.view = new URLSearchParams(location.search).get("view") || "b01";
  state.castId = new URLSearchParams(location.search).get("cast") || state.castId;
  render();
});

render();
startOpsPulse();
startLiveOps();

function cast(id, name, age, tenure, rank, sales, nominations, avg) {
  return { id, name, age, tenure, rank, sales, nominations, avg };
}

function view(key, id, name) {
  return { key, id, name };
}

function navigate(key) {
  state.view = key;
  const url = new URL(location.href);
  url.searchParams.set("view", key);
  if (key === "b03") url.searchParams.set("cast", state.castId);
  history.pushState(null, "", url);
  render();
}

function render() {
  const current = screens.find((item) => item.key === state.view) || screens[0];
  document.getElementById("btobTitle").textContent = `${current.id} ${current.name}`;
  document.getElementById("btobNav").innerHTML = screens.map((item) => `
    <button class="nav-button ${item.key === state.view ? "active" : ""}" data-action="nav" data-value="${item.key}">
      <span class="nav-id">${item.id}</span>
      <span>${item.name}</span>
    </button>
  `).join("");
  document.getElementById("btobMain").innerHTML = content();
  renderOpsFeed();
}

function content() {
  const map = { b01: overview, b02: castList, b03: castDetail, b04: matrix, b05: revenue, b06: team, b07: settings };
  return (map[state.view] || overview)();
}

function overview() {
  return `
    <section class="page">
      <div class="grid-4">
        ${kpi("今月売上", yen.format(state.liveRevenue), "+8.2%", true)}
        ${kpi("来店数", `${num.format(state.liveVisits)}回`, "+5.1%", true)}
        ${kpi("在籍キャスト", "18名", "アクティブ16名")}
        ${kpi("最近来たお客様", `${state.activeCustomers}名`, "30日以内に来店", true)}
      </div>
      ${opsCommandCenter()}
      <div class="grid-2">
        <div class="card"><h2>売上推移</h2><div class="chart">${lineChart([28, 31, 30, 33, 34, 32, 35, 36, 34, 37, 36, 38])}</div></div>
        <div class="card"><h2>曜日×時間帯の繁忙度</h2>${heatmap()}</div>
      </div>
      <div class="grid-2">
        <div class="card">
          <h2>キャスト売上ランキング TOP 10</h2>
          ${castTable(casts.slice(0, 10), true)}
        </div>
        <div class="card stack">
          <h2>アラート</h2>
          <div class="row"><span>大切なお客様3名が少し遠のき気味</span><span class="pill warn">声かけ</span></div>
          <div class="row"><span>新人キャストのフォローが必要: ハナさん</span><span class="pill warn">面談</span></div>
          <div class="row"><span>金曜22時台の席回転が低下</span><span class="pill">分析</span></div>
          <button class="btn-primary" data-action="nav" data-value="b06">チーム状況を見る</button>
        </div>
      </div>
    </section>
  `;
}

function castList() {
  return `
    <section class="page">
      <div class="card row">
        <div class="filters">
          <span class="pill ok">在籍</span><span class="pill vip">売上上位</span><span class="pill">常連</span><span class="pill">新人</span><span class="pill warn">AIおすすめ順</span>
        </div>
        <button class="btn-secondary" data-action="print">PDF出力</button>
      </div>
      <div class="card ops-alert">
        <div class="pulse"></div>
        <div>
          <strong>AIが「先に声をかけたい順」に並べました</strong>
          <p>新人3名は売上だけでなく、同伴の多さやLINEの返事も見て、フォロー順を出しています。</p>
        </div>
      </div>
      <div class="card">
        <h2>在籍キャスト 18名</h2>
        ${castTable(casts, true)}
      </div>
    </section>
  `;
}

function castDetail() {
  const item = casts.find((cast) => cast.id === state.castId) || casts[0];
  return `
    <section class="page">
      <div class="card row">
        <div class="row">
          <div class="avatar">${item.name[0]}</div>
          <div><h2 style="margin:0">${item.name}</h2><span class="muted">${item.age}歳 / 勤続 ${item.tenure} / ${item.rank}</span></div>
        </div>
        <div class="filters"><button class="btn-primary">メッセージを送る</button><button class="btn-secondary">研修を割り当てる</button></div>
      </div>
      <div class="grid-4">
        ${kpi("今月売上", yen.format(item.sales), "+12.4%")}
        ${kpi("指名本数", `${item.nominations}回`, "+5.1%")}
        ${kpi("平均単価", yen.format(item.avg), "+3.2%")}
        ${kpi("客数", "42名", "新規5名")}
      </div>
      <div class="grid-2">
        <div class="card"><h2>売上推移</h2><div class="chart">${lineChart([72, 78, 82, 79, 88, 91, 96, 102, 108, 112, 118, 124])}</div></div>
        <div class="card"><h2>お客様のタイプ</h2><div class="chart">${donut([["大切", 36, "#C97B4F"], ["常連", 42, "#6B8E5A"], ["新規", 14, "#5C7A99"], ["気にかける", 8, "#8B5A6B"]])}</div></div>
      </div>
      <div class="grid-2">
        <div class="card">
          <h2>直近の来店記録</h2>
          <table class="table"><tbody>${customers.slice(0, 10).map((c, i) => `<tr><td>${c.name}</td><td>${i + 1}日前</td><td>${yen.format(c.avg)}</td><td>${c.status}</td></tr>`).join("")}</tbody></table>
        </div>
        <div class="card stack">
          <h2>AI評価</h2>
          <p>ユイさんは大切なお客様が安定しています。特に経営者のお客様との相性が良さそうです。ただ、新しいお客様は少し減っているので、紹介をお願いする流れを作るのがおすすめです。</p>
          <span class="pill vip">次にすること: 紹介をお願いする流れを作る</span>
          <div class="mini-plan">
            <div><span>推奨</span><strong>紹介依頼 2件</strong></div>
            <div><span>売上めやす</span><strong>+¥31万</strong></div>
            <div><span>確度</span><strong>64%</strong></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function matrix() {
  return `
    <section class="page">
      <div class="card row">
        <div class="filters">${casts.slice(0, 8).map((cast) => `<span class="pill">${cast.name}</span>`).join("")}</div>
        <span class="muted">X軸: 来店頻度 / Y軸: 客単価</span>
      </div>
      <div class="grid-2">
        <div class="card"><h2>お客様の見える化</h2><div class="chart">${scatter(customers)}</div></div>
        <div class="matrix">
          ${quadrant("大切", "よく来て、たくさん使ってくれる", customers.filter((c) => c.freq >= 7 && c.avg >= 90000))}
          ${quadrant("たまに大きい", "回数は少ないけど金額が大きい", customers.filter((c) => c.freq < 7 && c.avg >= 90000))}
          ${quadrant("いつもの", "よく来てくれる", customers.filter((c) => c.freq >= 7 && c.avg < 90000))}
          ${quadrant("これから", "まだ関係づくり中", customers.filter((c) => c.freq < 7 && c.avg < 90000))}
        </div>
      </div>
    </section>
  `;
}

function revenue() {
  return `
    <section class="page">
      <div class="grid-3">
        ${kpi("本指名", "¥18,420,000", "48%")}
        ${kpi("同伴", "¥7,840,000", "20%")}
        ${kpi("フリー", "¥3,120,000", "8%")}
      </div>
      <div class="grid-2">
        <div class="card"><h2>売上構成</h2><div class="chart">${stackedBars()}</div></div>
        <div class="card"><h2>客単価分布</h2><div class="chart">${bars([42, 68, 91, 74, 44, 21], ["〜3万", "3-5万", "5-8万", "8-12万", "12-20万", "20万〜"])}</div></div>
      </div>
      <div class="grid-2">
        <div class="card"><h2>売上上位のお客様 TOP 20</h2><table class="table"><tbody>${customers.concat(customers).slice(0, 20).map((c, i) => `<tr><td>${i + 1}</td><td>${c.name}</td><td>${c.owner}</td><td>${yen.format(c.avg * c.freq)}</td></tr>`).join("")}</tbody></table></div>
        <div class="card"><h2>曜日別売上比較</h2><div class="chart">${bars([420, 520, 610, 680, 920, 780, 360], ["月", "火", "水", "木", "金", "土", "日"])}</div></div>
      </div>
    </section>
  `;
}

function team() {
  const teamCasts = casts.slice(0, 6);
  return `
    <section class="page">
      <div class="card row">
        <div><h2 style="margin:0">リナ担当チーム 6名</h2><span class="muted">チーム合計売上 vs 目標</span></div>
        <div style="min-width:280px"><div class="row"><strong>¥5,761,500</strong><span>目標 ¥6,400,000</span></div><div class="progress" style="height:8px;background:#12171d;border-radius:999px;overflow:hidden"><span style="display:block;width:90%;height:100%;background:#C97B4F"></span></div></div>
      </div>
      <div class="grid-3">${teamCasts.map((cast) => `
        <div class="card stack" data-action="cast" data-value="${cast.id}">
          <div class="row"><div class="avatar">${cast.name[0]}</div><span class="pill ${cast.rank === "売上上位" ? "vip" : "ok"}">${cast.rank}</span></div>
          <h3>${cast.name}</h3>
          <div class="row"><span>今月売上</span><strong>${yen.format(cast.sales)}</strong></div>
          <div class="row"><span>指名前月比</span><span class="pill ok">+${Math.max(3, Math.round(cast.nominations / 3))}%</span></div>
          <textarea class="memo">次回面談: 新規紹介導線と同伴前の事前準備を確認。</textarea>
        </div>
      `).join("")}</div>
    </section>
  `;
}

function settings() {
  return `
    <section class="page">
      <div class="grid-2">
        <div class="card stack">
          <h2>店舗情報</h2>
          <div class="row"><span>店舗名</span><strong>Club Bouquet 銀座</strong></div>
          <div class="row"><span>営業時間</span><strong>20:00〜26:00</strong></div>
          <div class="row"><span>管理者</span><strong>リナ</strong></div>
        </div>
        <div class="card stack">
          <h2>課金・プラン</h2>
          <div class="row"><span>プラン</span><strong>SaaS Pro</strong></div>
          <div class="row"><span>キャスト枠</span><strong>18 / 30</strong></div>
          <button class="btn-primary">プランを変更</button>
        </div>
      </div>
      <div class="grid-3">
        ${settingCard("在籍キャスト管理", ["招待リンク発行", "休職/退職管理", "CSVインポート"])}
        ${settingCard("マネージャー権限", ["売上を見る", "AIのおすすめを見る", "お客様詳細の見える範囲"])}
        ${settingCard("AI機能", ["おすすめ対象", "気にかける目安", "週1レポート通知"])}
      </div>
    </section>
  `;
}

function settingCard(title, rows) {
  return `<div class="card stack"><h2>${title}</h2>${rows.map((row) => `<div class="row"><span>${row}</span><span class="pill ok">有効</span></div>`).join("")}</div>`;
}

function opsCommandCenter() {
  return `
    <div class="grid-2">
      <div class="card ops-panel">
        <div class="row">
          <div>
            <span class="eyebrow">AIの見守り</span>
            <h2>お店の先回りメモ</h2>
          </div>
          <span class="pill warn">Live</span>
        </div>
        <div id="opsFeed" class="ops-feed"></div>
      </div>
      <div class="card stack">
        <h2>今朝の自動サマリー</h2>
        <div class="mini-plan">
          <div><span>面談</span><strong>3名</strong></div>
          <div><span>機会損失</span><strong>¥420,000</strong></div>
          <div><span>気にかける</span><strong>3名</strong></div>
        </div>
        <p class="muted">AIが売上、来店ペース、担当のかたより、席の混み具合を見て、今日リナさんが見る順番に並べています。</p>
        <button class="btn-primary" data-action="ops" data-view="b06">面談対象を見る</button>
      </div>
    </div>
  `;
}

function kpi(label, value, delta, live = false) {
  return `<div class="card kpi ${live ? "live-kpi" : ""}"><span class="label">${label}</span><strong>${value}</strong><span class="delta">${delta}</span></div>`;
}

function castTable(rows, clickable = false) {
  return `
    <table class="table">
      <thead><tr><th>キャスト</th><th>ランク</th><th>勤続</th><th>指名</th><th>今月売上</th><th>平均単価</th><th>行動</th></tr></thead>
      <tbody>${rows.map((item) => `
        <tr class="${clickable ? "clickable" : ""}" ${clickable ? `data-action="cast" data-value="${item.id}"` : ""}>
          <td><div class="row" style="justify-content:flex-start"><div class="avatar">${item.name[0]}</div><strong>${item.name}</strong></div></td>
          <td><span class="pill ${item.rank === "売上上位" ? "vip" : item.rank === "新人" ? "warn" : "ok"}">${item.rank}</span></td>
          <td>${item.tenure}</td>
          <td>${item.nominations}回</td>
          <td>${yen.format(item.sales)}</td>
          <td>${yen.format(item.avg)}</td>
          <td><span class="pill">詳細</span></td>
        </tr>
      `).join("")}</tbody>
    </table>
  `;
}

function renderOpsFeed() {
  const feed = document.getElementById("opsFeed");
  if (!feed) return;
  feed.innerHTML = state.opsFeed.slice(0, 5).map((item, index) => `
    <button class="ops-item ${item.kind} ${index === 0 && item.fresh ? "fresh" : ""}" data-action="ops" data-view="${item.view}" ${item.castId ? `data-cast="${item.castId}"` : ""}>
      <span>${({ warn: "!", risk: "R", gain: "+", learn: "AI" })[item.kind] || "AI"}</span>
      <div>
        <strong>${item.title}</strong>
        <p>${item.body}</p>
      </div>
    </button>
  `).join("");
  state.opsFeed.forEach((item) => (item.fresh = false));
}

function pushOps(item) {
  state.opsFeed.unshift({ fresh: true, ...item });
  if (state.opsFeed.length > 12) state.opsFeed.length = 12;
  renderOpsFeed();
}

function startOpsPulse() {
  const task = document.getElementById("opsTask");
  const ops = document.getElementById("opsOps");
  if (!task || !ops) return;
  const update = () => {
    const item = opsTasks[state.taskIndex % opsTasks.length];
    task.textContent = item.task;
    ops.textContent = `${num.format(item.ops + Math.floor(Math.random() * 64))}件チェック`;
    state.taskIndex++;
  };
  update();
  setInterval(update, 4200);
  setInterval(() => {
    const item = opsTasks[(state.taskIndex - 1 + opsTasks.length) % opsTasks.length];
    ops.textContent = `${num.format(item.ops + Math.floor(Math.random() * 72))}件チェック`;
  }, 850);
}

function startLiveOps() {
  const events = [
    { kind: "risk", title: "田中様の来店間隔が通常の2.1倍", body: "担当サクラさんに軽い近況確認を推奨。", view: "b04" },
    { kind: "gain", title: "カオリさんの同伴が増えています", body: "来週、いい席を1つ空けておくと売上めやす +¥18万。", view: "b03", castId: "cast-02" },
    { kind: "learn", title: "新人メンタリング候補を更新", body: "ハナさんはロールプレイより同伴前準備の改善が効果的。", view: "b06" },
    { kind: "warn", title: "金曜22時台の席回転が低下", body: "フリー客誘導を1卓減らし本指名導線を優先してください。", view: "b05" }
  ];
  let i = 0;
  setInterval(() => {
    state.liveRevenue += Math.floor(Math.random() * 52000) - 9000;
    state.liveVisits += Math.random() > 0.65 ? 1 : 0;
    state.activeCustomers += Math.random() > 0.78 ? 1 : 0;
    if (state.view === "b01") render();
  }, 5200);
  setInterval(() => {
    pushOps(events[i % events.length]);
    i++;
  }, 7000);
}

function quadrant(title, subtitle, rows) {
  return `<div class="card stack"><h3>${title}</h3><span class="muted">${subtitle}</span>${rows.slice(0, 5).map((item) => `<div class="row"><span>${item.name}</span><strong>${yen.format(item.avg)}</strong></div>`).join("") || "<span class=\"muted\">該当なし</span>"}</div>`;
}

function heatmap() {
  const days = ["", "月", "火", "水", "木", "金", "土"];
  const times = ["20", "21", "22", "23", "24"];
  const cells = days.map((day) => `<div>${day}</div>`).join("") + times.map((time, row) => {
    return `<div>${time}時</div>` + days.slice(1).map((_, col) => {
      const level = Math.min(1, ((row + 1) * (col + 2)) / 28);
      return `<div style="background:rgba(201,123,79,${0.12 + level * 0.62})">${Math.round(level * 100)}</div>`;
    }).join("");
  }).join("");
  return `<div class="heatmap">${cells}</div>`;
}

function lineChart(values) {
  return `<svg viewBox="0 0 640 260" role="img" aria-label="line chart">
    ${[60, 110, 160, 210].map((y) => `<path d="M40 ${y}H620" stroke="rgba(232,229,221,.12)" />`).join("")}
    <polyline fill="none" stroke="#C97B4F" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="${points(values, 580, 190)}" />
    <text x="42" y="34" fill="#A8A39A" font-size="14">過去12ヶ月 / 百万円</text>
  </svg>`;
}

function points(values, width, height) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  return values.map((value, index) => {
    const x = 40 + index * (width / (values.length - 1));
    const y = 230 - ((value - min) / Math.max(1, max - min)) * height;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}

function donut(rows) {
  let offset = 25;
  return `<svg viewBox="0 0 360 220" role="img" aria-label="donut chart">
    ${rows.map(([label, pct, color], index) => {
      const dash = `${pct} ${100 - pct}`;
      const circle = `<circle cx="110" cy="110" r="68" fill="none" stroke="${color}" stroke-width="24" stroke-dasharray="${dash}" stroke-dashoffset="-${offset}" />`;
      offset += pct;
      return `${circle}<text x="220" y="${72 + index * 28}" fill="${color}" font-size="14">${label} ${pct}%</text>`;
    }).join("")}
    <circle cx="110" cy="110" r="42" fill="#232B34" />
  </svg>`;
}

function scatter(rows) {
  return `<svg viewBox="0 0 640 420" role="img" aria-label="customer matrix">
    <path d="M60 360H610 M60 360V40" stroke="rgba(232,229,221,.25)" />
    <path d="M335 360V40 M60 200H610" stroke="rgba(232,229,221,.12)" />
    <text x="500" y="392" fill="#A8A39A">来店頻度</text>
    <text x="22" y="70" fill="#A8A39A" transform="rotate(-90 22 70)">客単価</text>
    ${rows.map((item, index) => {
      const x = 60 + (item.freq / 12) * 520;
      const y = 360 - (item.avg / 150000) * 300;
      const colors = ["#C97B4F", "#6B8E5A", "#5C7A99", "#C9A96E", "#8B5A6B"];
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${item.status === "大切" ? 9 : 6}" fill="${colors[index % colors.length]}"><title>${item.name} ${yen.format(item.avg)}</title></circle>`;
    }).join("")}
  </svg>`;
}

function stackedBars() {
  const labels = ["本指名", "場内", "同伴", "アフター", "フリー"];
  const months = ["1月", "2月", "3月", "4月"];
  return `<svg viewBox="0 0 640 280" role="img" aria-label="stacked bars">
    ${months.map((month, index) => {
      let y = 230;
      const x = 90 + index * 120;
      const values = [86, 42, 38, 24, 18].map((v) => v + index * 4);
      const colors = ["#C97B4F", "#6B8E5A", "#5C7A99", "#C9A96E", "#8B5A6B"];
      const rects = values.map((value, i) => {
        y -= value;
        return `<rect x="${x}" y="${y}" width="58" height="${value}" fill="${colors[i]}" />`;
      }).join("");
      return `${rects}<text x="${x + 18}" y="258" fill="#A8A39A">${month}</text>`;
    }).join("")}
    ${labels.map((label, i) => `<text x="${480}" y="${44 + i * 24}" fill="${["#C97B4F", "#6B8E5A", "#5C7A99", "#C9A96E", "#8B5A6B"][i]}" font-size="14">${label}</text>`).join("")}
  </svg>`;
}

function bars(values, labels) {
  const max = Math.max(...values);
  return `<svg viewBox="0 0 640 260" role="img" aria-label="bar chart">
    ${values.map((value, index) => {
      const height = (value / max) * 170;
      const x = 60 + index * (520 / values.length);
      const y = 210 - height;
      return `<rect x="${x}" y="${y}" width="46" height="${height}" fill="${["#C97B4F", "#6B8E5A", "#5C7A99", "#C9A96E", "#8B5A6B", "#7A6B58", "#5A6B5C"][index % 7]}" /><text x="${x - 4}" y="238" fill="#A8A39A" font-size="13">${labels[index]}</text>`;
    }).join("")}
  </svg>`;
}
